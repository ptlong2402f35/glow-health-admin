import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import PromotionService from "../../../../services/PromotionService";
import Promotions from "../../../../models/Promotions";

export default function useListPromotions(props?: CommonListType) {
	const [listPromotions, setListPromotions] = useState<Promotions[]>([]);
	const [count, setCount] = useState(0);
	const loadListAllUser = async (
		inPage: number,
		inPerPage: number,
		status?: string | undefined,
		keyWord?: string | null,
		store?: string | null,
		creatorUserId?: number | null
	) => {
		props?.onBeginLoad?.();
		try {
			var res = await PromotionService.getListPromotion(inPage, inPerPage, status, keyWord, store, creatorUserId);
			const data = res.data;
			setListPromotions(data);
			setCount(res.count);
		} catch {
			setListPromotions([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListAllUser(
			props?.page || 1,
			props?.perPage || 0,
			props?.filterStates || "",
			props?.filterKeyword || "",
			props?.filterStore || "",
			props?.filterUserId || 0
		);
	};
	useEffect(() => {
		reload();
	}, [
		props?.page,
		props?.perPage,
		props?.filterStates,
		props?.filterKeyword,
		props?.filterStore,
		props?.filterUserId,
	]);
	return {
		listPromotions,
		reload,
		count,
	};
}

export const getFilterPromotionsList = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListPromotions(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
