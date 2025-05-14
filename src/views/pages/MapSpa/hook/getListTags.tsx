import React, { useEffect, useState } from "react";

import Staff, { BreadCrumb, LabelData, Tags } from "../../../../models/Staff";
import {
	ListStaffAtHome,
	ListStaffMap,
	offlineListStaffAtHome,
	offlineListStaffMap,
	offlineTagMap,
	TagMap,
} from "../../../../services/StaffService";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { useParams } from "react-router";

export default function useGetListTags(props:{filterSG:string[]}) {
	const { staticContext } = useStaticContext();
	// const [staff, setStaff] = useState<Staff[]>([]);
	const [listOption, setListOption] = useState<Tags[]>(() => {
		if (staticContext?.data?.dataTagMapAddressMap) {
			return staticContext?.data?.dataTagMapAddressMap as Tags[];
		}
		return [];
	});


	const loadTags = async (fillterTag?:string[]) => {
		try {
			const res = await withSsrRawDataMulti<Promise<{ data: Tags[] }>>(
				(raw) => offlineTagMap(raw),
				() => TagMap(fillterTag),
				(raw) => raw?.dataTagMapAddressMap,
				(ctx) => (ctx.dataTagMapAddressMap = null)
			);
			setListOption(res.data);
		} catch {
			setListOption([]);
		} finally {
		}
	};
	const reload = () => {
		loadTags(props.filterSG);
	};
	useEffect(() => {
		if(props.filterSG && props.filterSG.length > 0){
			reload();
		}
			
	}, [props.filterSG]);
		
	return {
		reload,
		listOption,
	};
}
