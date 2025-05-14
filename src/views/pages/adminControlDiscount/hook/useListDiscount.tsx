import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import Collect from "../../../../models/Collect";
import CollectService from "../../../../services/CollectService";

export default function useListDiscount(props?: CommonListType) {
	const [listDiscount, setListDiscount] = useState<Collect[]>([]);
	const [count, setCount] = useState(0);
	const [countPages, setCountPages] = useState(0);
	const loadListAllDiscount = async (
		inPage: number,
		inPerPage: number,
		fromDate?: Date | undefined,
		toDate?: Date | undefined
	) => {
		props?.onBeginLoad?.();
		try {
			const startOfDayFromDate = fromDate ? new Date(fromDate.setHours(0, 0, 0, 0)) : undefined;
			const endOfDayToDate = toDate ? new Date(toDate.setHours(23, 59, 59, 999)) : new Date();
			var res = await CollectService.getListDiscount(
				inPage,
				inPerPage,
				startOfDayFromDate,
				endOfDayToDate
			);
			const data = res.data;
			setListDiscount(data);
			setCount(res.count);
			setCountPages(res.countPages);
		} catch {
			setListDiscount([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListAllDiscount(
			props?.page || 1,
			props?.perPage || 0,
			props?.filterFromDate || undefined,
			props?.filterToDate || undefined
		);
	};
	useEffect(() => {
		reload();
	}, [
		props?.page,
		props?.perPage,
		props?.filterFromDate || undefined,
		props?.filterToDate || undefined,
	]);
	return {
		listDiscount,
		reload,
		count,
		countPages,
	};
}

export const getFilterDiscountList = () => {
	const hookResult = (props: CommonListType) => useListDiscount(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
