import { useState } from "react";
import { useEffect } from "react";
import Order, { OrderStatus } from "../../../../models/Order";
import OrderService from "../../../../services/OrderService";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";

export const PERPAGE = {
	PerPage50: 50,
	PerPage: 20,
	Admin: 50,
	Home: 8,
	Spa: 3,
};

export function getListHook(props: CommonListType) {
	const [order, setOrder] = useState<Order[]>([]);
	const [count, setCount] = useState(0);

	const loadData = async (
		inPage: number,
		inPerPage: number,
		status?: number,
		fromDate?: Date,
		toDate?: Date,
		keyWord?: string,
		statusList?: string
	) => {
		props.onBeginLoad?.();

		try {
			const statusArray = (statusList && statusList.split(",").map((e) => parseInt(e))) || undefined;
			const listUserAdmin = async () => {
				const res = await OrderService.getListOrder(
					inPage,
					inPerPage,
					status,
					statusArray,
					fromDate,
					toDate,
					keyWord
				);
				setOrder(res.orders);
				setCount(res.count);
			};
			await listUserAdmin();
		} catch (err) {
			console.log(err);
		} finally {
			props.onEndLoad?.();
		}
	};

	const reload = () => {
		loadData(
			props.page || 1,
			props?.filterPerPage || PERPAGE.PerPage50,
			props?.filterRoleId || undefined,
			props?.filterFromDate || undefined,
			props?.filterToDate || undefined,
			props?.filterKeyword || undefined,
			props?.filterStates ||
				`${OrderStatus.Purchased.toString()},
			${OrderStatus.TemporarySettled.toString()},
			${OrderStatus.Settled.toString()},
			${OrderStatus.Canceled.toString()}`
		);
	};

	useEffect(() => {
		loadData(
			props.page || 1,
			props?.filterPerPage || PERPAGE.PerPage50,
			props?.filterRoleId || undefined,
			props?.filterFromDate || undefined,
			props?.filterToDate || undefined,
			props?.filterKeyword || undefined,
			props?.filterStates ||
				`${OrderStatus.Purchased.toString()},
			${OrderStatus.TemporarySettled.toString()},
			${OrderStatus.Settled.toString()},
			${OrderStatus.Canceled.toString()}`
		);
	}, [
		props.page,
		props?.filterPerPage,
		props?.filterRoleId || undefined,
		props?.filterFromDate || undefined,
		props?.filterToDate || undefined,
		props?.filterKeyword || undefined,
		props?.filterStates ||
			`${OrderStatus.Purchased.toString()},
		${OrderStatus.TemporarySettled.toString()},
		${OrderStatus.Settled.toString()},
		${OrderStatus.Canceled.toString()}`,
	]);

	return {
		order,
		count,
		reload,
	};
}

export function getListHookWrap(status?: OrderStatus, extraStatus?: OrderStatus[]) {
	const PerPage = PERPAGE.PerPage50;
	return useCommonListWrap(PerPage, (hookProps) => getListHook(hookProps));
}
