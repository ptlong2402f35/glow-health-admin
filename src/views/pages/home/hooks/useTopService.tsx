import { useState, useEffect } from "react";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Banner from "../../../../models/Banner";
import BannerService from "../../../../services/BannerService";
import {
	getStaffService,
	getTopService,
	offlineGetListStaffService,
	offlinegetTopService,
} from "../../../../services/StaffService";
import { StaffServiceHome, TopService, TopServiceParam } from "../../../../models/Service";
import Staff from "../../../../models/Staff";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import util from "util";

export default function useTopService(props: { lang: string; isTaiNha: boolean }) {
	const { staticContext } = useStaticContext();
	const [topService, setTopService] = useState<TopService[]>(() => {
		if (staticContext?.data?.dataTopService) {
			return staticContext?.data?.dataTopService as TopService[];
		}
		return [];
	});
	const [staffList, setStaffList] = useState<StaffServiceHome[][]>(() => {
		if (staticContext?.data?.dataStaffServiceLists) {
			return staticContext?.data?.dataStaffServiceLists as StaffServiceHome[][];
		}
		return [];
	});
	const [ssrRenderring, setSsrRenderring] = useState<boolean>(() =>
		typeof window !== "undefined" && window && (window as any).__SSR_CONTEXT_DATA?.dataStaffServiceLists
			? true
			: false
	);
	const [getAllUrl, setGetAllUrl] = useState<string[]>(() => {
		if (staticContext?.data?.getAllUrlList) {
			return staticContext?.data?.getAllUrlList as string[];
		}
		return [];
	});

	const loadTopService = async () => {
		try {
			if ((window as any)?.__SSR_CONTEXT_DATA?.dataStaffServiceLists) {
				try {
					let prods = await offlinegetTopService((window as any)?.__SSR_CONTEXT_DATA.dataTopService);
					let data = await offlineGetListStaffService(
						(window as any)?.__SSR_CONTEXT_DATA.dataStaffServiceLists
					);
					setTopService(prods.data);
					setStaffList(data.data);
					setGetAllUrl(data.getAllUrl);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataTopService = null;
						(window as any).__SSR_CONTEXT_DATA.dataStaffServiceLists = null;
						(window as any).__SSR_CONTEXT_DATA.getAllUrlList = null;
					}
					setSsrRenderring(false);
				}
			} else {
				try {
					let prods = await getTopService(props.lang);
					setTopService(prods.data);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataTopService = null;
						(window as any).__SSR_CONTEXT_DATA.dataStaffServiceLists = null;
						(window as any).__SSR_CONTEXT_DATA.getAllUrlList = null;
					}

					setSsrRenderring(false);
				}
			}
		} catch (err) {
			console.error(err);
		}
	};
	const reload = () => {
		loadTopService();
	};
	useEffect(() => {
		if (props.isTaiNha) {
			reload();
		}
	}, [props.lang]);
	return {
		topService,
		reload,
		ssrDatas: staffList,
		ssrRenderring: ssrRenderring,
		getAllUrl: getAllUrl,
	};
}

export function useTopServic1e(props: {
	id: string;
	params?: TopServiceParam | null;
	ssrData: any;
	lang: string;
	getAllUrl: string;
	isTaiNha: boolean;
}) {
	// const [staffService, setStaffService] = useState<StaffServiceHome[]>([]);
	const [staffService, setStaffService] = useState<StaffServiceHome[]>(() => {
		if (props.ssrData) {
			return props.ssrData as StaffServiceHome[];
		}
		return [];
	});
	const [page, setPage] = useState(1);
	const [swipeIdx, setSwipeIdx] = useState(0);
	const [isLastPage, setIsLastPage] = useState<boolean>(() => {
		if (!props.ssrData) {
			return true;
		} else if (props.ssrData?.length < 10) {
			return true;
		}
		return false;
	});
	const [allUrl, setAllUrl] = useState(props.getAllUrl || "");
	const [isLoading, setIsLoading] = useState(false);

	const filteredParams = Object.fromEntries(
		Object.entries(props.params || {}).filter(([_, value]) => value !== null)
	);

	const loadStaffService = async (currentPage: number) => {
		if (currentPage === 1 && props.ssrData) return props.ssrData;
		try {
			const res = await getStaffService(10, currentPage, filteredParams, props.lang);
			return { data: res.data, getAllUrl: res.getAllUrl };
		} catch (err) {
			console.error(err);
			return {};
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const newStaffService = await loadStaffService(page + 1);
			setAllUrl(newStaffService?.getAllUrl || "");
			if (newStaffService?.data?.length > 0) {
				setStaffService((prev) => [...prev, ...newStaffService?.data]);
				setPage((prevPage) => prevPage + 1);
			} else if (newStaffService?.data?.length < 10) {
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
		if (newStaffService?.data?.length > 0) {
			setStaffService(newStaffService?.data);
			setSwipeIdx(0);
			setPage(1);
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
