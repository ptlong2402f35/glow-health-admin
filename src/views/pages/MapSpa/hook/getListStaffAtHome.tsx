import React, { useEffect, useState } from "react";

import Staff, { BreadCrumb, LabelData } from "../../../../models/Staff";
import { ListStaffAtHome, ListStaffMap, offlineListStaffAtHome, offlineListStaffMap } from "../../../../services/StaffService";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { useParams } from "react-router";

export default function useGetListStaff(props?: CommonListType, link?: string, lang?: string, apartment?: string) {
	const { staticContext } = useStaticContext();
	// const [staff, setStaff] = useState<Staff[]>([]);
	const [staff, setStaff] = useState<Staff[]>(() => {
		if (staticContext?.data?.dataListStaffAtHomeMap) {
			return staticContext?.data?.dataListStaffAtHomeMap as Staff[];
		}
		return [];
	});
	const [breadCrumb, setBreadCrumb] = useState<BreadCrumb[]>(() => {
		if (staticContext?.data?.breadcrumbStaffMap) {
			return staticContext?.data?.breadcrumbStaffMap as BreadCrumb[];
		}
		return [];
	});
	const [count, setCount] = useState<number>(() => {
		if (staticContext?.data?.totalDataStaffMap) {
			return staticContext?.data?.totalDataStaffMap;
		}
		return 0;
	});
	const [pageType, setPageType] = useState<number[]>(() => {
		if (staticContext?.data?.pageTypeMap) {
			return staticContext?.data?.pageTypeMap as number[];
		}
		return [];
	});
	const [pageTitle, setPageTitle] = useState<string>(() => {
		if (staticContext?.data?.pageTitleStaffMap) {
			return staticContext?.data?.pageTitleStaffMap as string;
		}
		return "";
	});

	const [labelData, setLabelData] = useState<LabelData | undefined>(() => {
		if (staticContext?.data?.labelDataStaffMap) {
			return staticContext?.data?.labelDataStaffMap as LabelData;
		}
		return undefined;
	});

	const [lat, setLat] = useState<string>(() => {
		if (staticContext?.data?.latDataStaffMap) {
			return staticContext?.data?.latDataStaffMap as string;
		}
		return "";
	});

	const [lng, setLng] = useState<string>(() => {
		if (staticContext?.data?.lngDataStaffMap) {
			return staticContext?.data?.lngDataStaffMap as string;
		}
		return "";
	});

	const [filterSG, setFilterSG] = useState<string[]>(() => {
		if (staticContext?.data?.fillterTagMap) {
			return staticContext?.data?.fillterTagMap as string[];
		}
		return [];
	});

	const loadStaff = async (
		perPage: number | null | undefined,
		page: number | null | undefined,
		filterGender: string | null | undefined,
		filterPrice: string | null | undefined,
		filterStar: string | null | undefined,
		filterTags: string | null| undefined,
	) => {
		props?.onBeginLoad?.();
		try {
			// var res = await ListStaffAtHome(props?.perPage || PERPAGE.PerPage, props?.page || 0,link,props?.filterGender,props?.filterPrice, props?.filterStar);
			if ((window as any)?.__SSR_CONTEXT_DATA?.dataListStaffAtHomeMap) {
				try {
					let res = await offlineListStaffMap((window as any)?.__SSR_CONTEXT_DATA.dataListStaffAtHomeMap);
					setStaff(res.data);
					setBreadCrumb(res.breadcrumb);
					setCount(res.count);
					setPageType(res.pageType);
					setPageTitle(res.pageTitle);
					setLabelData(res.labelData);
					setLat(res.lat);
					setLng(res.lng);
					setFilterSG(res.fillterTag);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataListStaffAtHomeMap = null;
						(window as any).__SSR_CONTEXT_DATA.pageTypeMap = null;
						(window as any).__SSR_CONTEXT_DATA.pageTitleStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.breadcrumbStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.labelDataStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.totalDataStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.latDataStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.lngDataStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.fillterTagMap = null;
					}
				}
			} else {
				try {
					let res = await ListStaffMap(
						perPage || PERPAGE.PerPage,
						page || 0,
						link,
						filterGender,
						filterPrice,
						filterStar,
						lang,
						apartment,
						filterTags
					);
					setStaff(res.data);
					setBreadCrumb(res.breadcrumb);
					setCount(res.count);
					setPageType(res.pageType);
					setPageTitle(res.pageTitle);
					setLabelData(res.labelData);
					setLat(res.lat);
					setLng(res.lng);
					setFilterSG(res.fillterTag)
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataListStaffAtHomeMap = null;
						(window as any).__SSR_CONTEXT_DATA.pageTypeMap = null;
						(window as any).__SSR_CONTEXT_DATA.pageTitleStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.breadcrumbStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.labelDataStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.totalDataStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.latDataStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.lngDataStaffMap = null;
						(window as any).__SSR_CONTEXT_DATA.fillterTagMaps = null;
					}
				}
			}
		} catch {
			setStaff([]);
			setBreadCrumb([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadStaff(props?.perPage, props?.page, props?.filterGender, props?.filterPrice, props?.filterStar, props?.filterTags);
	};
	useEffect(() => {
		if (link) {
			reload();
		}
	}, [
		props?.perPage,
		props?.page,
		props?.filterGender,
		props?.filterPrice,
		props?.filterStar,
		link,
		lang,
		apartment,
		props?.filterTags
	]);

	return {
		staff,
		breadCrumb,
		reload,
		count,
		pageType,
		pageTitle,
		labelData,
		lat,
		lng,
		setLat,
		setLng,
		filterSG
	};
}

export const getFilteStaffMap = (prop: { link?: string; lang: string; apartment: string }) => {
	const hookResult = (props: CommonListType) => useGetListStaff(props, prop?.link, prop.lang, prop.apartment);
	return useCommonListWrap(PERPAGE.PerPage50, hookResult);
};
