import React, { useEffect, useState } from "react";
import {
	getStaffListv2,
	getTopStaff,
	offlineGetListStaffServicev2,
	offlinegetTopStaff,
} from "../../../../services/StaffService";
import { TopService } from "../../../../models/Service";
import Staff, { TopStaffParam } from "../../../../models/Staff";
import useStaticContext from "../../../hooks/useStaticContext";
import { debounce } from "@material-ui/core";

export default function useTopStaff(lang: string, isTaiNha: boolean) {
	const { staticContext } = useStaticContext();
	// const [topStaff, setTopStaff] = useState<TopService[]>([]);
	const [topStaff, setTopStaff] = useState<TopService[]>(() => {
		if (staticContext?.data?.dataTopStaff) {
			return staticContext?.data?.dataTopStaff as TopService[];
		}
		return [];
	});
	const [staffList, setStaffList] = useState<Staff[][]>(() => {
		if (staticContext?.data?.dataStaffListv2) {
			return staticContext?.data?.dataStaffListv2 as Staff[][];
		}
		return [];
	});
	const [staffLink, setStaffLink] = useState<string[]>(() => {
		if (staticContext?.data?.linkStaffListv2) {
			return staticContext?.data?.linkStaffListv2 as string[];
		}
		return [];
	});
	const [ssrRenderring, setSsrRenderring] = useState<boolean>(() =>
		typeof window !== "undefined" && window && (window as any).__SSR_CONTEXT_DATA?.dataStaffListv2 ? true : false
	);

	const loadTopStaff = async () => {
		try {
			// var res = await getTopStaff();
			// setTopStaff(res.data);
			if ((window as any)?.__SSR_CONTEXT_DATA?.dataStaffListv2) {
				try {
					let prods = await offlinegetTopStaff((window as any)?.__SSR_CONTEXT_DATA.dataTopStaff);
					let data = await offlineGetListStaffServicev2((window as any)?.__SSR_CONTEXT_DATA.dataStaffListv2);
					setTopStaff(prods.data);
					setStaffList(data.data);
					setStaffLink(data.getAllUrls);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataTopStaff = null;
						(window as any).__SSR_CONTEXT_DATA.dataStaffListv2 = null;
					}
					setSsrRenderring(false);
				}
			} else {
				try {
					let prods = await getTopStaff(lang);
					setTopStaff(prods.data);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataTopStaff = null;
						(window as any).__SSR_CONTEXT_DATA.dataStaffListv2 = null;
					}

					setSsrRenderring(false);
				}
			}
		} catch (err) {
			console.error(err);
		}
	};
	const reload = () => {
		loadTopStaff();
	};
	useEffect(() => {
		if (isTaiNha) {
			reload();
		}
	}, [lang]);

	return {
		topStaff,
		reload,
		ssrDatas: staffList,
		ssrRenderring: ssrRenderring,
		staffLink: staffLink,
	};
}

export function useStaffHome(props: {
	id: string;
	params?: TopStaffParam | null;
	ssrData: any;
	lang: string;
	staffLink: any;
	isTaiNha: boolean;
}) {
	// const [staff, setStaff] = useState<Staff[]>([]);
	const [staff, setStaff] = useState<Staff[]>(() => {
		if (props.ssrData) {
			return props.ssrData as Staff[];
		}
		return [];
	});
	const [page, setPage] = useState(1);
	const [swipeIdx, setSwipeIdx] = useState(0);
	const [isLastPage, setIsLastPage] = useState<boolean>(() => {
		if (!props.ssrData) {
			return true;
		} else if (props.ssrData?.length < 20) {
			return true;
		}
		return false;
	});

	const [isLoading, setIsLoading] = useState(false);
	const [link, setLink] = useState(() => {
		if (props.staffLink) {
			return props.staffLink as string;
		}
		return "";
	});

	const [prevSwipeIdx, setPrevSwipeIdx] = useState(0);
	const [shouldFetchData, setShouldFetchData] = useState(false);
	const filteredParams = Object.fromEntries(
		Object.entries(props.params || {}).filter(([_, value]) => value !== null)
	);

	const loadStaff = async (currentPage: number) => {
		if (currentPage === 1 && props.ssrData) return props.ssrData;
		try {
			const res = await getStaffListv2(20, currentPage, filteredParams, props.lang);
			return { data: res.data, link: res.link };
		} catch (err) {
			console.error(err);
			return { data: [], link: "" };
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setShouldFetchData(true);
			const newStaff = await loadStaff(page + 1);
			if (newStaff.data?.length > 0) {
				setStaff((prev) => [...prev, ...newStaff.data]);
				setPage((prevPage) => prevPage + 1);
			} else if (newStaff.data?.length < 20) {
				setIsLastPage(true);
			}
			setLink(newStaff.link);
			setIsLoading(false);
			setShouldFetchData(false);
		};
		if (!isLastPage && prevSwipeIdx < staff.length - 10 && swipeIdx >= staff.length - 10 && staff.length > 0) {
			setPrevSwipeIdx(swipeIdx);
			fetchData();
		}
	}, [swipeIdx]);

	const reload = async () => {
		const newStaff = await loadStaff(1);
		if (newStaff && newStaff.data?.length > 0) {
			setStaff(newStaff.data);
			setSwipeIdx(0);
			setPage(1);
			setLink(newStaff.link);
			setIsLastPage(newStaff.data?.length < 20 ? true : false);
		}
	};
	useEffect(() => {
		if (props.isTaiNha) {
			reload();
		}
	}, [props.lang]);

	return {
		staff,
		reload,
		setSwipeIdx,
		swipeIdx,
		isLoading,
		link,
	};
}
