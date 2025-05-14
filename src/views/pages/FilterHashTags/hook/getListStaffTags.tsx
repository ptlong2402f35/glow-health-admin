import React, { useEffect, useState } from "react";

import Staff, { BreadCrumb } from "../../../../models/Staff";
import {
	ListStaffAtHome,
	ListStaffHashtag,
	offlineListStaffAtHome,
	offlineListStaffHashtag,
} from "../../../../services/StaffService";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { useParams } from "react-router";

export default function useGetListStaffTags(props?: CommonListType, link?: string, lang?: string, apartment?: string) {
	const { staticContext } = useStaticContext();
	// const [staff, setStaff] = useState<Staff[]>([]);
	const [staff, setStaff] = useState<Staff[]>(() => {
		if (staticContext?.data?.dataListStaffHashTags) {
			return staticContext?.data?.dataListStaffHashTags as Staff[];
		}
		return [];
	});
	const [breadCrumb, setBreadCrumb] = useState<BreadCrumb[]>(() => {
		if (staticContext?.data?.breadcrumbTags) {
			return staticContext?.data?.breadcrumbTags as BreadCrumb[];
		}
		return [];
	});
	const [count, setCount] = useState<number>(() => {
		if (staticContext?.data?.totalDataTag) {
			return staticContext?.data?.totalDataTag;
		}
		return 0;
	});
	const [pageType, setPageType] = useState<number[]>([]);
	const [pageTitle, setPageTitle] = useState<string>(() => {
		if (staticContext?.data?.pageTitleTags) {
			return staticContext?.data?.pageTitleTags as string;
		}
		return "";
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
			if ((window as any)?.__SSR_CONTEXT_DATA?.dataListStaffHashTags) {
				try {
					let res = await offlineListStaffHashtag((window as any)?.__SSR_CONTEXT_DATA.dataListStaffHashTags);
					setStaff(res.data);
					setBreadCrumb(res.breadcrumb);
					setCount(res.count);
					setPageType(res.pageType);
					setPageTitle(res.pageTitle);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataListStaffHashTags = null;
						// (window as any).__SSR_CONTEXT_DATA.pageType = null;
						(window as any).__SSR_CONTEXT_DATA.pageTitleTags = null;
						(window as any).__SSR_CONTEXT_DATA.breadcrumbTags = null;
						(window as any).__SSR_CONTEXT_DATA.totalDataTag = null;
					}
				}
			} else {
				try {
					let res = await ListStaffHashtag(
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
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataListStaffHashTags = null;
						// (window as any).__SSR_CONTEXT_DATA.pageType = null;
						(window as any).__SSR_CONTEXT_DATA.pageTitleTags = null;
						(window as any).__SSR_CONTEXT_DATA.breadcrumbTags = null;
						(window as any).__SSR_CONTEXT_DATA.totalDataTag = null;
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
		reload();
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
	};
}

export const getFilterBlogHashTags = (prop: { link?: string; lang: string; apartment: string }) => {
	const hookResult = (props: CommonListType) => useGetListStaffTags(props, prop?.link, prop.lang, prop.apartment);
	return useCommonListWrap(PERPAGE.PerPage, hookResult);
};
