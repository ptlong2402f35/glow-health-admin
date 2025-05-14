import React, { useEffect, useState } from "react";

import Staff, { BreadCrumb, LabelData } from "../../../../models/Staff";
import { ListStaffAtHome, offlineListStaffAtHome } from "../../../../services/StaffService";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { useParams } from "react-router";

export default function useGetListStaff(props?: CommonListType, link?: string, lang?: string, apartment?: string) {
	const { staticContext } = useStaticContext();
	// const [staff, setStaff] = useState<Staff[]>([]);
	const [staff, setStaff] = useState<Staff[]>(() => {
		if (staticContext?.data?.dataListStaffAtHome) {
			return staticContext?.data?.dataListStaffAtHome as Staff[];
		}
		return [];
	});
	const [breadCrumb, setBreadCrumb] = useState<BreadCrumb[]>(() => {
		if (staticContext?.data?.breadcrumbStaff) {
			return staticContext?.data?.breadcrumbStaff as BreadCrumb[];
		}
		return [];
	});
	const [count, setCount] = useState<number>(() => {
		if (staticContext?.data?.totalDataStaff) {
			return staticContext?.data?.totalDataStaff;
		}
		return 0;
	});
	const [pageType, setPageType] = useState<number[]>(() => {
		if (staticContext?.data?.pageType) {
			return staticContext?.data?.pageType as number[];
		}
		return [];
	});
	const [pageTitle, setPageTitle] = useState<string>(() => {
		if (staticContext?.data?.pageTitleStaff) {
			return staticContext?.data?.pageTitleStaff as string;
		}
		return "";
	});

	const [labelData, setLabelData] = useState<LabelData | undefined>(() => {
		if (staticContext?.data?.labelDataStaff) {
			return staticContext?.data?.labelDataStaff as LabelData;
		}
		return undefined;
	});


	const loadStaff = async (
		perPage: number | null | undefined,
		page: number | null | undefined,
		filterGender: string | null | undefined,
		filterPrice: string | null | undefined,
		filterStar: string | null | undefined
	) => {
		props?.onBeginLoad?.();
		try {
			// var res = await ListStaffAtHome(props?.perPage || PERPAGE.PerPage, props?.page || 0,link,props?.filterGender,props?.filterPrice, props?.filterStar);
			if ((window as any)?.__SSR_CONTEXT_DATA?.dataListStaffAtHome) {
				try {
					let res = await offlineListStaffAtHome((window as any)?.__SSR_CONTEXT_DATA.dataListStaffAtHome);
					setStaff(res.data);
					setBreadCrumb(res.breadcrumb);
					setCount(res.count);
					setPageType(res.pageType);
					setPageTitle(res.pageTitle);
					setLabelData(res.labelData);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataListStaffAtHome = null;
						(window as any).__SSR_CONTEXT_DATA.pageType = null;
						(window as any).__SSR_CONTEXT_DATA.pageTitleStaff = null;
						(window as any).__SSR_CONTEXT_DATA.breadcrumbStaff = null;
						(window as any).__SSR_CONTEXT_DATA.labelDataStaff = null;
						(window as any).__SSR_CONTEXT_DATA.totalDataStaff = null;
					}
				}
			} else {
				try {
					let res = await ListStaffAtHome(
						perPage || PERPAGE.PerPage,
						page || 0,
						link,
						filterGender,
						filterPrice,
						filterStar,
						lang,
						apartment
					);
					setStaff(res.data);
					setBreadCrumb(res.breadcrumb);
					setCount(res.count);
					setPageType(res.pageType);
					setPageTitle(res.pageTitle);
					setLabelData(res.labelData);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataListStaffAtHome = null;
						(window as any).__SSR_CONTEXT_DATA.pageType = null;
						(window as any).__SSR_CONTEXT_DATA.pageTitleStaff = null;
						(window as any).__SSR_CONTEXT_DATA.breadcrumbStaff = null;
						(window as any).__SSR_CONTEXT_DATA.labelDataStaff = null;
						(window as any).__SSR_CONTEXT_DATA.totalDataStaff = null;
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
		loadStaff(props?.perPage, props?.page, props?.filterGender, props?.filterPrice, props?.filterStar);
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
	]);

	return {
		staff,
		breadCrumb,
		reload,
		count,
		pageType,
		pageTitle,
		labelData,
	};
}

export const getFilterBlogListHome = (prop: { link?: string; lang: string; apartment: string }) => {
	const hookResult = (props: CommonListType) => useGetListStaff(props, prop?.link, prop.lang, prop.apartment);
	return useCommonListWrap(PERPAGE.PerPage, hookResult);
};
