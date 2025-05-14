import React, { useEffect, useState } from "react";
import { StaffServiceHome } from "../../../../models/Service";
import { getStaffService, offlineGetStaffService } from "../../../../services/StaffService";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function useGetStaffServiceHotDeal(props: { lang: string; isTaiNha: boolean }) {
	// const [staffService, setStaffService] = useState<StaffServiceHome[]>([]);
	const [page, setPage] = useState(1);
	const [swipeIdx, setSwipeIdx] = useState(0);
	const [isLastPage, setIsLastPage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { staticContext } = useStaticContext();
	const [staffService, setStaffService] = useState<StaffServiceHome[]>(() => {
		if (staticContext?.data?.dataStaffServiceSSR) {
			return staticContext?.data?.dataStaffServiceSSR as StaffServiceHome[];
		}
		return [];
	});
	const [allUrl, setAllUrl] = useState(() => {
		if (staticContext?.data?.getAllUrl) {
			return staticContext?.data?.getAllUrl;
		}
		return "";
	});

	const loadStaffService = async (currentPage: number) => {
		try {
			let prods = await withSsrRawDataMulti<
				Promise<{ data: StaffServiceHome[]; count: number; getAllUrl: string }>
			>(
				(raw) => offlineGetStaffService(raw),
				() =>
					getStaffService(
						10,
						currentPage,
						{
							isProgramActive: true,
							sortDistance: true,
							sortDistancePriority: 2,
							sortReducedPrice: true,
							sortReducedPricePriority: 1,
							staffType: 3,
						},
						props.lang
					),
				(raw) => raw?.dataStaffServiceSSR,
				(ctx) => (ctx.dataStaffServiceSSR = null)
			);
			return { data: prods.data, getAllUrl: prods.getAllUrl };
		} catch (err) {
			console.error(err);
			return {};
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const newStaffService = await loadStaffService(page);

			if (newStaffService?.data && newStaffService?.data?.length > 0) {
				setStaffService((prev) => [...prev, ...newStaffService?.data]);
				setPage((prevPage) => prevPage + 1);
			} else if (newStaffService?.data && newStaffService?.data?.length < 10) {
				setIsLastPage(true);
			}
			setAllUrl(newStaffService?.getAllUrl || "");
			setIsLoading(false);
		};

		if (!isLastPage && swipeIdx >= staffService.length - 5 && staffService.length > 0) {
			fetchData();
		}
	}, [swipeIdx]);
	const reload = async () => {
		const newStaffService = await loadStaffService(1);
		if (newStaffService?.data && newStaffService?.data?.length > 0) {
			setStaffService(newStaffService?.data);
			setSwipeIdx(0);
			setPage(2);
			setIsLastPage(false);
			setAllUrl(newStaffService?.getAllUrl || "");
		}
	};

	useEffect(() => {
		if (props.isTaiNha) {
			reload();
		}
	}, [props.lang]);

	return {
		staffService,
		reload,
		setSwipeIdx,
		swipeIdx,
		isLoading,
		allUrl,
	};
}
