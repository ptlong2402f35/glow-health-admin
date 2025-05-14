import React, { useEffect, useState } from "react";
import Service, { StaffServiceHome } from "../../../../models/Service";
import {
	ListServiceHome,
	getStaffService,
	offlineGetListService,
	offlineGetStaffService,
} from "../../../../services/StaffService";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function useGetListService(props: { lang: string; isTaiNha: boolean }) {
	// const [staffService, setStaffService] = useState<StaffServiceHome[]>([]);
	const [page, setPage] = useState(1);
	const [swipeIdx, setSwipeIdx] = useState(0);
	const [isLastPage, setIsLastPage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { staticContext } = useStaticContext();
	const [staffService, setStaffService] = useState<Service[]>(() => {
		if (staticContext?.data?.dataListServiceHome) {
			return staticContext?.data?.dataListServiceHome as Service[];
		}
		return [];
	});
	const [allUrl, setAllUrl] = useState("");

	const loadStaffService = async (currentPage: number) => {
		try {
			let prods = await withSsrRawDataMulti<Promise<{ data: Service[]; count: number }>>(
				(raw) => offlineGetListService(raw),
				() => ListServiceHome(10, currentPage, props.lang),
				(raw) => raw?.dataListServiceHome,
				(ctx) => (ctx.dataListServiceHome = null)
			);
			return { data: prods.data };
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
