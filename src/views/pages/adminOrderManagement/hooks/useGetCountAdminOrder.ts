import { useEffect, useState } from "react";
import { useExtendCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { getAdminOrderCount } from "../../../../services/AdminOrderService";
import { CommonParamsType } from "../../../hooks/useCommonList/commonHelper";
import Orderv2 from "../../../../models/Orderv2";
import { AdminOrderExtractor, AdminOrderParams, PERPAGE } from "./useGetAdminOrders";

export function getAdminOrdersCount(
	props: AdminOrderParams,
	per: number,
	onBeginLoad: (() => void) | undefined,
	onEndLoad: (() => void) | undefined
) {
	const [countDatas, setCountDatas] = useState<any>({});
	const [loading, setLoading] = useState(false);

	const loadData = async (
		page: number,
		perPage: number,
		status?: string[] | undefined,
		fromDate?: Date | undefined,
		toDate?: Date | undefined,
		staffId?: string | undefined,
		code?: string | undefined,
		phone?: string | undefined
	) => {
		setLoading(true);
		try {
			const startOfDayFromDate = fromDate ? new Date(fromDate.setHours(0, 0, 0, 0)) : undefined;
			const endOfDayToDate = toDate ? new Date(toDate.setHours(23, 59, 59, 999)) : new Date();
			const { data } = await getAdminOrderCount(
				page,
				perPage,
				staffId,
				status,
				startOfDayFromDate,
				endOfDayToDate,
				code,
				phone
			);
			setCountDatas(data?.countDatas);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};
	const handleloadData = () => {
		loadData(
			props.page || 1,
			props?.filterPerPage || PERPAGE,
			props?.filterStatusString?.split(";") || undefined,
			props?.filterFromDate || undefined,
			props?.filterToDate || undefined,
			props?.filterStaffId || undefined,
			props?.filterKeyword || undefined,
			props?.filterPhone || undefined
		);
	};
	return {
		countDatas,
		loading,
		handleloadData,
	};
}
export function getAdminOrdersCoundWrap() {
	const PerPage = PERPAGE;
	return useExtendCommonListWrap(
		PerPage,
		(hookProps, per, onBeginLoad, onEndLoad) => getAdminOrdersCount(hookProps, per, onBeginLoad, onEndLoad),
		AdminOrderExtractor
	);
}
