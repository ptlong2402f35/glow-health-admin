import { DefaultModel } from "../models/IModel";
import Orderv2 from "../models/Orderv2";
import { StaffServicePrice } from "../models/Service";
import UserGlow, { VoucherUser } from "../models/UserGlow";
import Voucher from "../models/Voucher";

import http from "./http";

export default class VoucherService {
	public static async getListVoucher(
		inPage: number,
		inPerPage: number,
		acctive: string | undefined,
		keyWord: string | undefined
	): Promise<{
		data: Voucher[];
		count: number;
	}> {
		let params: any = {
			active: acctive ?? "",
			search: keyWord ?? "",
		};
		let results = await Promise.all([
			http.get(`/voucher?perPage=${inPerPage}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`),
		]);
		return {
			data: DefaultModel.parseList<Voucher>(results[0].data?.docs, () => new Voucher()),
			count: results[0].data?.total,
		};
	}

	public static async CreatedVoucher(
		name: string,
		code: string,
		endTime: Date,
		startTime: Date,
		quantity: string,
		type: string,
		value: string,
		minValueOrder: string,
		maxReduce: string,
		condition: string
	) {
		const data = await http.post(`/voucher`, {
			name: name,
			code: code,
			endAt: endTime,
			startAt: startTime,
			reducePercent: type,
			reduceValue: value,
			conditionType: condition,
			scope: 1,
		});
		return data;
	}

	public static async UpdateVoucher(
		name: string,
		code: string,
		endTime: Date,
		startTime: Date,
		quantity: string,
		type: string,
		value: string,
		minValueOrder: string,
		maxReduce: string,
		id: number,
		condition: string
	) {
		const data = await http.put(`/voucher`, {
			name: name,
			code: code,
			endTime: endTime,
			startTime: startTime,
			quantity: quantity,
			type: type,
			value: value,
			minValueOrder: minValueOrder,
			maxReduce: maxReduce,
			id: id,
			conditionType: condition,
			allowConditionType: true,
		});
		return data;
	}
}

export const UpdateActiveVoucher = async (id: number, status: number) => {
	let { data } = await http.put(`/voucher-status/${id}`, {
		status: status,
	});

	return data;
};

export const PostVoucherUser = async (staffId: number, priceIds: number) => {
	const { data } = await http.post(`/order`, {
		staffId: staffId,
		paymentMethodId: 1,
		priceIds: [priceIds],
	});
	return new VoucherUser().parse(data);
};

export const GetOrderInfo = async (OrderId: number) => {
	const { data } = await http.get(`/order-v2/${OrderId}`);
	return new VoucherUser().parse(data);
};

export const GetListVoucher = async (inPerPage?: number | null, inPage?: number | null) => {
	const { data } = await http.get(`/my-order?staffType=3&perPage=${inPerPage || 50}&page=${inPage || 1}`);
	return {
		data: new StaffServicePrice().parseList(data?.docs),
		count: data.total,
	};
};
