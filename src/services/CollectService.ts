import Collect from "../models/Collect";
import { DefaultModel } from "../models/IModel";
import http from "./http";





export default class CollectService {
	public static async getListCollect(
		inPage: number,
		inPerPage: number,
		fromDate: Date | undefined,
		toDate: Date | undefined
	): Promise<{
		data: Collect[];
		count: number;
		countPages:number;
	}> {
		let params: any = {
			fromDate: fromDate ?? "",
			toDate: toDate ?? "",
		};
		let results = await Promise.all([
			http.get(`/staff-glow-income-transaction-report?perPage=${inPerPage}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`),
		]);
		return {
			data: DefaultModel.parseList<Collect>(results[0].data?.docs, () => new Collect()),
			count: results[0].data?.total,
			countPages:  results[0].data?.pages,
		};
	}

	public static async getListDiscount(
		inPage: number,
		inPerPage: number,
		fromDate: Date | undefined,
		toDate: Date | undefined
	): Promise<{
		data: Collect[];
		count: number;
		countPages:number;
	}> {
		let params: any = {
			fromDate: fromDate ?? "",
			toDate: toDate ?? "",
		};
		let results = await Promise.all([
			http.get(`/commission-income-transaction-report?perPage=${inPerPage}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`),
		]);
		return {
			data: DefaultModel.parseList<Collect>(results[0].data?.docs, () => new Collect()),
			count: results[0].data?.total,
			countPages:  results[0].data?.pages,
		};
	}

}

