import { useState, useEffect } from "react";
import { PromotionKTVService } from "../../../../../services/PromotionService";
import { CommonListType, useCommonListWrap } from "../../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../../orderManagement/hook/useGetListHook";
import StaffDetail from "../../../../../models/StaffDetail";
import { useParams } from "react-router";

export default function useListStaffPromotions(props?: CommonListType) {
	const [listStaffPromotions, setListStaffPromotions] = useState<StaffDetail[]>([]);
	const [count, setCount] = useState(0);
	let { id } = useParams<{ id: string }>();
	const ProId = parseInt(id);
	const loadListAllUser = async (inPage: number, inPerPage: number) => {
		props?.onBeginLoad?.();
		try {
			var res = await PromotionKTVService.getListPromotionStaff(ProId | 0, inPage, inPerPage);
			const data = res.data;
			setListStaffPromotions(data);
			setCount(res.count);
		} catch {
			setListStaffPromotions([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListAllUser(props?.page || 1, props?.perPage || 0);
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage]);
	return {
		listStaffPromotions,
		reload,
		count,
	};
}

export const getFilterStaffPromotionsList = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListStaffPromotions(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
