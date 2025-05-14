import { DefaultModel } from "../models/IModel";
import Store from "../models/Store";
import http from "./http";

export default class StoreService {
	public static async getListStore(
		inPage?: number,
		inPerPage?: number
	): Promise<{
		data: Store[];
		count: number;
	}> {
		let params: any = {};
		let results = await Promise.all([
			http.get(`/store-by-admin?perPage=${inPerPage || 50}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`),
		]);
		return {
			data: DefaultModel.parseList<Store>(results[0].data?.docs, () => new Store()),
			count: results[0].data?.total,
		};
	}

	public static async getListStoreOption(
		inPage?: number,
		inPerPage?: number,
		searchName?: string
	): Promise<{
		data: Store[];
		count: number;
	}> {
		let params: any = {
			name: searchName || "",
		};
		let results = await Promise.all([
			http.get(
				`/store-option?perPage=${inPerPage || 20}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`
			),
		]);
		return {
			data: DefaultModel.parseList<Store>(results[0].data?.docs, () => new Store()),
			count: results[0].data?.total,
		};
	}
}

export const UpdateStatusStore = async (id: number, status: number) => {
	let { data } = await http.patch(`/store/${id}/update-status`, {
		status: status,
	});

	return data;
};

export const AddStore = async (name: string, long?: number, lat?: number) => {
	let { data } = await http.post(`/store-by-admin`, {
		name: name,
		long: long,
		lat: lat,
	});

	return data;
};

export const UpdateStore = async (id: number | null | undefined, name: string, long?: number, lat?: number) => {
	let { data } = await http.patch(`/store/${id}`, {
		allowCoordinate: true,
		allowName: true,
		name: name,
		long: long,
		lat: lat,
	});

	return data;
};
