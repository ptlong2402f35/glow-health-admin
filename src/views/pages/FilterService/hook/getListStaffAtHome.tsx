import React, { useEffect, useState } from "react";

import Staff, { BreadCrumb } from "../../../../models/Staff";
import {
	ListServiceFilter,
	ListStaffAtHome,
	offlineListSerrviceAtHome,
	offlineListStaffAtHome,
} from "../../../../services/StaffService";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { useParams } from "react-router";
import Service from "../../../../models/Service";

export default function useGetListServiceFilter(
	props?: CommonListType,
	link?: string,
	lang?: string,
	apartment?: string
) {
	const { staticContext } = useStaticContext();
	// const [staff, setStaff] = useState<Staff[]>([]);
	const [staff, setStaff] = useState<Service[]>(() => {
		if (staticContext?.data?.dataListServeAtHome) {
			return staticContext?.data?.dataListServeAtHome as Service[];
		}
		return [];
	});
	const [breadCrumb, setBreadCrumb] = useState<BreadCrumb[]>(() => {
		if (staticContext?.data?.breadcrumbService) {
			return staticContext?.data?.breadcrumbService as BreadCrumb[];
		}
		return [];
	});
	const [count, setCount] = useState<number>(() => {
		if (staticContext?.data?.totalDataSerivce) {
			return staticContext?.data?.totalDataSerivce;
		}
		return 0;
	});
	const [pageType, setPageType] = useState<number[]>([]);
	const [pageTitle, setPageTitle] = useState<string>(() => {
		if (staticContext?.data?.pageTitleService) {
			return staticContext?.data?.pageTitleService as string;
		}
		return "";
	});
	const loadStaff = async (
		perPage: number | null | undefined,
		page: number | null | undefined,
		filterStar: string | null | undefined
	) => {
		props?.onBeginLoad?.();
		try {
			// var res = await ListStaffAtHome(props?.perPage || PERPAGE.PerPage, props?.page || 0,link,props?.filterGender,props?.filterPrice, props?.filterStar);
			if ((window as any)?.__SSR_CONTEXT_DATA?.dataListServeAtHome) {
				try {
					let res = await offlineListSerrviceAtHome((window as any)?.__SSR_CONTEXT_DATA.dataListServeAtHome);
					setStaff(res.data);
					setBreadCrumb(res.breadcrumb);
					setCount(res.count);
					setPageType(res.pageType);
					setPageTitle(res.pageTitle);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataListServeAtHome = null;
						(window as any).__SSR_CONTEXT_DATA.pageTitleService = null;
						(window as any).__SSR_CONTEXT_DATA.breadcrumbService = null;
						(window as any).__SSR_CONTEXT_DATA.totalDataSerivce = null;
					}
				}
			} else {
				try {
					let res = await ListServiceFilter(
						perPage || PERPAGE.PerPage,
						page || 0,
						link,
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
						(window as any).__SSR_CONTEXT_DATA.dataListServeAtHome = null;
						(window as any).__SSR_CONTEXT_DATA.pageTitleService = null;
						(window as any).__SSR_CONTEXT_DATA.breadcrumbService = null;
						(window as any).__SSR_CONTEXT_DATA.totalDataSerivce = null;
					}
					props?.onEndLoad?.();
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
		loadStaff(props?.perPage, props?.page, props?.filterStar);
	};
	useEffect(() => {
		reload();
	}, [props?.perPage, props?.page, props?.filterStar, link, lang, apartment]);
	return {
		staff,
		breadCrumb,
		reload,
		count,
		pageType,
		pageTitle,
	};
}

export const getFilterService = (prop: { link?: string; lang: string; apartment: string }) => {
	const hookResult = (props: CommonListType) => useGetListServiceFilter(props, prop?.link, prop.lang, prop.apartment);
	return useCommonListWrap(PERPAGE.PerPage, hookResult);
};
