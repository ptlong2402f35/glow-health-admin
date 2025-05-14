import Orderv2, { OfferTypeStatus } from "../models/Orderv2";
import http from "./http";

export async function getAdminOrder(
	page?: number,
	perPage?: number,
	staffId?: string,
	status?: string[],
	fromDate?: Date,
	toDate?: Date,
	code?: string,
	phone?: string,
	store?: string,
	offerType?: string
) {
	const multiStatus = status && status?.length > 0 ? "&" + status?.map((item) => "status[]=" + item).join("&") : "";

	const params: any = {
		...(perPage && { perPage: perPage }),
		...(page && { page: page }),
		...(fromDate && { fromDate: fromDate }),
		...(toDate && { toDate: toDate }),
		...(staffId && { staffId: staffId }),
		...(code && { code: code }),
		...(phone && { phone: phone }),
		...(store && { storeId: store }),
		...(offerType &&
			(offerType === OfferTypeStatus.Often.toString() ||
				offerType === OfferTypeStatus.Recruitment.toString()) && { offerType: offerType }),
		...(offerType === OfferTypeStatus.Accepted.toString() && {
			offerType: OfferTypeStatus.Recruitment,
			isOfferOrderAccepted: true,
		}),
		...(offerType === OfferTypeStatus.UnAccepted.toString() && {
			offerType: OfferTypeStatus.Recruitment,
			isOfferOrderAccepted: false,
		}),
	};

	let { data } = await http.get(
		`/order-by-admin?&includeForwardCount=true&${new URLSearchParams(params).toString()}` + multiStatus
	);

	return {
		data: {
			orders: Orderv2.parseList<Orderv2>(data?.docs, () => new Orderv2()),
			countDatas: {
				pages: data?.page,
				total: data?.total,
				totalMoney: data?.totalMoney,
				totalOrderDone: data?.totalOrderDone,
				totalOrderReject: data?.totalOrderReject,
				totalOrderCancel: data?.totalOrderCancel,
				totalOrderSysCancel: data?.totalOrderCancel,
				staff: data?.staff,
				currentPage: data?.currentPage,
				totalIncome: data?.totalIncome,
			},
		},
	};
}

export async function cancelAdminOrder(id: number | null | undefined, reason?: string) {
	let requestBody = {
		id,
		reasonCancel: reason,
	};
	let data = await http.put(`/cancel-order`, requestBody);
	return data;
}

export async function feedbackAdminOrder(id: number, note: string, vote: number) {
	let requestBody = {
		orderId: id,
		note,
		review: vote,
	};
	let data = await http.put(`/admin-review-order`, requestBody);
	return data;
}

export async function finishAdminOrder(id: number) {
	let requestBody = {
		id,
	};
	let data = await http.put(`/admin-finish-order`, requestBody);
	return data;
}

export async function getAdminOrderCount(
	page?: number,
	perPage?: number,
	staffId?: string,
	status?: string[],
	fromDate?: Date,
	toDate?: Date,
	code?: string,
	phone?: string
) {
	const multiStatus = status && status?.length > 0 ? "&" + status?.map((item) => "status[]=" + item).join("&") : "";
	const params: any = {
		...(perPage && { perPage: perPage }),
		...(page && { page: page }),
		...(fromDate && { fromDate: fromDate }),
		...(toDate && { toDate: toDate }),
		...(staffId && { staffId: staffId }),
		...(code && { code: code }),
		...(phone && { phone: phone }),
	};
	let { data } = await http.get(`/order?includeStat=true&${new URLSearchParams(params).toString()}` + multiStatus);

	return {
		data: {
			orders: Orderv2.parseList<Orderv2>(data?.docs, () => new Orderv2()),
			countDatas: {
				pages: data?.page,
				total: data?.total,
				totalMoney: data?.totalMoney,
				totalOrderDone: data?.totalOrderDone,
				totalOrderReject: data?.totalOrderReject,
				totalOrderCancel: data?.totalOrderCancel,
				totalOrderSysCancel: data?.totalOrderSysCancel,
				staff: data?.staff,
				currentPage: data?.currentPage,
				totalIncome: data?.totalIncome,
			},
		},
	};
}

export async function acceptAdminOrder(id: number | null | undefined) {
	let data = await http.put(`/accept-offer-order/${id}`);
	return data;
}

export async function denyAdminOrder(id: number | null | undefined) {
	let data = await http.put(`/deny-offer-order/${id}`);
	return data;
}

export async function updateOrderOriginCancel(id: number | null | undefined, data: number) {
	let body = {
		data,
	};
	let resp = await http.put(`/origin-cancel-order/${id}`, body);

	return resp;
}
