import { useEffect, useState } from "react";
import { useExtendCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { getAdminOrder } from "../../../../services/AdminOrderService";
import { CommonParamsType } from "../../../hooks/useCommonList/commonHelper";
import Orderv2 from "../../../../models/Orderv2";

export const PERPAGE = 50;

export interface AdminOrderParams extends CommonParamsType {
	filterStaffId?: string | null;
	filterStatusString?: string | null;
}

export function AdminOrderExtractor(filter: CommonParamsType, uParams: URLSearchParams) {
	return {
		...filter,
		filterStaffId: uParams.get("filterStaffId") || undefined,
		filterStatusString: uParams.get("filterStatusString") || undefined,
	};
}

export function AdminOrderExtraParams(filter: AdminOrderParams) {
	return {
		...(filter.filterStaffId && { filterStaffId: filter.filterStaffId }),
		...(filter.filterStatusString && { filterStatusString: filter.filterStatusString }),
	};
}

export function getAdminOrders(
	props: AdminOrderParams,
	per: number,
	onBeginLoad: (() => void) | undefined,
	onEndLoad: (() => void) | undefined
) {
	const [orders, setOrders] = useState<Orderv2[]>([]);
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
		phone?: string | undefined,
		store?: string | undefined,
		offerType?: string | undefined
	) => {
		setLoading(true);
		onBeginLoad?.();
		try {
			const startOfDayFromDate = fromDate ? new Date(fromDate.setHours(0, 0, 0, 0)) : undefined;
			const endOfDayToDate = toDate ? new Date(toDate.setHours(23, 59, 59, 999)) : new Date();
			const { data } = await getAdminOrder(
				page,
				perPage,
				staffId,
				status,
				startOfDayFromDate,
				endOfDayToDate,
				code,
				phone,
				store,
				offerType
			);
			if (data) {
				setOrders(data?.orders);
				setCountDatas(data?.countDatas);
			}
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
			onEndLoad?.();
		}
	};

	const reload = () => {
		loadData(
			props.page || 1,
			props?.filterPerPage || PERPAGE,
			props?.filterStatusString?.split(";") || undefined,
			props?.filterFromDate || undefined,
			props?.filterToDate || undefined,
			props?.filterStaffId || undefined,
			props?.filterKeyword || undefined,
			props?.filterPhone || undefined,
			props?.filterStore || undefined,
			props?.filterActive || undefined
		);
	};

	useEffect(() => {
		reload();
	}, [
		props.filterStaffId,
		props.filterFromDate,
		props.filterToDate,
		props.filterStatusString,
		props.page,
		props?.filterKeyword,
		props?.filterPhone,
		props?.filterStore,
		props?.filterActive,
	]);

	return {
		orders,
		countDatas,
		loading,
		reload,
	};
}

export function getAdminOrdersWrap() {
	const PerPage = PERPAGE;
	return useExtendCommonListWrap(
		PerPage,
		(hookProps, per, onBeginLoad, onEndLoad) => getAdminOrders(hookProps, per, onBeginLoad, onEndLoad),
		AdminOrderExtractor
	);
}
