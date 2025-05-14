import { DefaultModel } from "../models/IModel";
import Transaction from "../models/Transaction";
import UserGlow from "../models/UserGlow";

import http from "./http";

export default class TransactionService {
	public static async getListTransaction(
		inPage: number,
		inPerPage: number,
		keyWord: string | undefined,
		fromDate?: Date,
		toDate?: Date
	): Promise<{
		data: Transaction[];
		countTotal: number;
		count: number;
	}> {
		let params: any = {
			fromDate: fromDate ?? "",
			toDate: toDate ?? "",
			search: keyWord ?? "",
		};
		let results = await Promise.all([
			http.get(
				`/transaction/admin-get-trans?perPage=${inPerPage}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`
			),
		]);
		return {
			data: DefaultModel.parseList<Transaction>(results[0].data?.docs, () => new Transaction()),
			countTotal: results[0].data?.totalMoneyTracsaction,
			count: results[0].data?.total,
		};
	}

	public static async getListTransactionAccountant(
		inPage: number,
		inPerPage: number,
		keyWord: string | undefined,
		fromDate?: Date,
		toDate?: Date,
	): Promise<{
		data: Transaction[];
		countTotal: number;
		count: number;
	}> {
		let params: any = {
			fromDate: fromDate ?? "",
			toDate: toDate ?? "",
			search: keyWord ?? "",
		};
		let results = await Promise.all([
			http.get(
				`/transactions-by-accountant?perPage=${inPerPage}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`
			),
		]);
		return {
			data: DefaultModel.parseList<Transaction>(results[0].data?.docs, () => new Transaction()),
			countTotal: results[0].data?.totalMoneyTracsaction,
			count: results[0].data?.total,
		};
	}

	public static async getListOwner(keyWord: string | undefined): Promise<{
		data: UserGlow[];
	}> {
		let params: any = {
			search: keyWord ?? "",
		};
		let results = await Promise.all([
			http.get(`/customer-owner?perPage=10&page=1&${new URLSearchParams(params).toString()}`),
		]);
		return {
			data: DefaultModel.parseList<UserGlow>(results[0].data?.docs, () => new UserGlow()),
		};
	}
	public static async createdTransaction(content: string, money: number, userId: number, type: string,selectedTransactionStyle:number) {
		const data = await http.post(`/transaction`, {
			content: content,
			money: money,
			userId: userId,
			type: type,
			transactionType:selectedTransactionStyle,
		});
		return data;
	}
}
