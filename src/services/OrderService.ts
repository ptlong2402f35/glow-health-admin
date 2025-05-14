import axios from "axios";
import environments from "../environment";
import { DefaultModel } from "../models/IModel";
import Order, { OrderStatus } from "../models/Order";
import http from "./http";

export default class OrderService {
	public static async getListOrder(
		page: number,
		size: number,
		status?: OrderStatus,
		statusList?: OrderStatus[],
		fromDate?: Date,
		toDate?: Date,
		keyWord?: string
	): Promise<{
		orders: Order[];
		count: number;
	}> {
		const fromDate0h = fromDate && new Date(fromDate.setHours(0, 0, 0, 0));
		const toDateWith0h = toDate && new Date(toDate.setHours(23, 59, 59, 999));
		let createdAt;
		if (fromDate0h && !toDateWith0h) {
			createdAt = { gt: fromDate0h };
		} else if (!fromDate0h && toDateWith0h) {
			createdAt = { lt: toDateWith0h };
		} else if (fromDate0h && toDateWith0h) {
			createdAt = { between: [fromDate0h, toDateWith0h] };
		}
		let taoOrderId;
		const trimmedKeyword = keyWord?.trim();
		if (trimmedKeyword) {
			taoOrderId = { ilike: `%${trimmedKeyword}%` };
		}

		const statusListConvert = statusList?.map((item) => ({ status: item }));

		let query: any = {
			limit: size,
			skip: (size || 0) * ((page || 1) - 1),
			where: JSON.stringify({
				...(status && !statusList && { status: status }),
				...(statusList && { or: statusListConvert }),
				...(createdAt && { createdAt: createdAt }),
				...(taoOrderId && { taoOrderId: taoOrderId }),
			}),
		};
		let results = await Promise.all([
			http.get(`/rebate-order?${new URLSearchParams(query).toString()}`),
			http.get(`/rebate-order-count?${new URLSearchParams({ where: query.where }).toString()}`),
		]);
		return {
			orders: DefaultModel.parseList<Order>(results[0]?.data, () => new Order()),
			count: results[1]?.data?.count || 0,
		};
	}

	public static async importOrderSheet(token: string, domData: any) {
		let formData = new FormData();
		formData.append("file", domData);

		let { data } = await axios.post(`${environments.workerRoot}/rebate-order-admin-import-xlsx`, formData, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "multipart/form-data",
			},
		});

		return {
			purchasedCount: data.purchasedCount ? (data.purchasedCount as number) : 0,
			settledCount: data.settledCount ? (data.settledCount as number) : 0,
			canceledCount: data.canceledCount ? (data.canceledCount as number) : 0,
			successCount: data.successCount ? (data.successCount as number) : 0,
			failCount: data.failCount ? (data.failCount as number) : 0,
		};
	}
}
