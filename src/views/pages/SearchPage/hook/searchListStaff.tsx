import React, { useEffect, useState } from "react";

import Staff, { BreadCrumb, LabelData } from "../../../../models/Staff";
import {
	getStaffListv2,
	ListStaffAtHome,
	offlineGetListStaffServicev2,
	offlineGetSearchListStaffServicev2,
	offlineListStaffAtHome,
} from "../../../../services/StaffService";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { useParams } from "react-router";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";

export default function useSearchGetListStaff(props?: CommonListType, link?: string | null, lang?: string) {
	const { staticContext } = useStaticContext();
	// const [staff, setStaff] = useState<Staff[]>([]);
	const [staff, setStaff] = useState<Staff[]>(() => {
		if (staticContext?.data?.dataSearchListStaffAtHome) {
			return staticContext?.data?.dataSearchListStaffAtHome as Staff[];
		}
		return [];
	});
	const [count, setCount] = useState<number>(() => {
		if (staticContext?.data?.totalSearchData) {
			return staticContext?.data?.totalSearchData;
		}
		return 0;
	});

	const [breadCrumb, setBreadCrumb] = useState<BreadCrumb[]>([
		{
			label: `${TranslateLabels[lang || "vi"]?.HOME_PAGE}`,
			url: "/",
		},
		{
			label: `${TranslateLabels[lang || "vi"]?.SEARCH_RESULTS} ${link || ""}`,
			url: `/tim-kiem?filterKeyword=${link || ""}`,
		},
	] as BreadCrumb[]);

	const loadStaff = async (
		perPage: number | null | undefined,
		page: number | null | undefined,
		link: string | null | undefined
	) => {
		props?.onBeginLoad?.();
		try {
			// var res = await ListStaffAtHome(props?.perPage || PERPAGE.PerPage, props?.page || 0,link,props?.filterGender,props?.filterPrice, props?.filterStar);
			if ((window as any)?.__SSR_CONTEXT_DATA?.dataSearchListStaffAtHome) {
				try {
					let res = await offlineGetSearchListStaffServicev2(
						(window as any)?.__SSR_CONTEXT_DATA.dataSearchListStaffAtHome
					);
					setStaff(res.data);
					setCount(res.count);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataSearchListStaffAtHome = null;
						(window as any).__SSR_CONTEXT_DATA.totalSearchData = null;
					}
				}
			} else {
				try {
					let res = await getStaffListv2(perPage || PERPAGE.PerPage, page || 0, link, lang);
					setStaff(res.data);
					setCount(res.count);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataSearchListStaffAtHome = null;
						(window as any).__SSR_CONTEXT_DATA.totalSearchData = null;
					}
				}
			}
		} catch {
			setStaff([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadStaff(props?.perPage, props?.page, link);
	};
	useEffect(() => {
		if (link) {
			reload();
		}
	}, [props?.perPage, props?.page, props?.filterGender, props?.filterPrice, props?.filterStar, link, lang]);

	return {
		staff,
		reload,
		count,
		breadCrumb,
	};
}

export const getSearchListStaff = (prop: { link?: string | null; lang: string }) => {
	const hookResult = (props: CommonListType) => useSearchGetListStaff(props, prop?.link, prop.lang);
	return useCommonListWrap(PERPAGE.PerPage, hookResult);
};
