import { DefaultModel } from "../models/IModel";
import Promotions, { PromotionType, hasDurationType } from "../models/Promotions";
import Service, { ServiceGroupAll } from "../models/Service";
import StaffDetail from "../models/StaffDetail";

import http from "./http";

export default class PromotionService {
	public static async getListPromotion(
		inPage: number,
		inPerPage: number,
		status: string | undefined,
		keyWord?: string | null,
		store?: string | null,
		creatorUserId?: number | null
	): Promise<{
		data: Promotions[];
		count: number;
	}> {
		let params: any = {
			active: status ?? "",
			name: keyWord ?? "",
			storeId: store ?? "",
			creatorUserId: creatorUserId ?? "",
		};
		let results = await Promise.all([
			http.get(`/program?perPage=${inPerPage}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`),
		]);
		return {
			data: DefaultModel.parseList<Promotions>(results[0].data?.docs, () => new Promotions()),
			count: results[0].data?.total,
		};
	}
}

export const AddPromotion = async (
	name: string,
	type: number,
	percentage: number,
	amount: number,
	hasDuration: boolean,
	startAt: Date,
	expireAt: Date,
	totalQuantity: number,
	note: string
) => {
	let { data } = await http.post(`/program`, {
		name: name,
		type: type,
		percentage: percentage,
		amount: amount,
		hasDuration: hasDuration,
		startAt: startAt,
		expireAt: expireAt,
		totalQuantity: totalQuantity,
		note: note,
	});

	return data;
};
export const UpdatePromotion = async (
	id: number,
	name: string,
	type: number,
	percentage: number,
	amount: number,
	hasDuration: boolean,
	startAt: Date,
	expireAt: Date,
	totalQuantity: number,
	note: string
) => {
	let { data } = await http.patch(`/program/${id}`, {
		name: name,
		allowName: true,
		type: type,
		allowType: true,
		percentage: percentage,
		allowPercentage: true,
		amount: amount,
		allowAmount: true,
		hasDuration: hasDuration,
		allowDuration: true,
		startAt: startAt,
		expireAt: expireAt,
		allowTotalQuantity: true,
		totalQuantity: totalQuantity,
		allowNote: true,
		note: note,
	});

	return data;
};

export const updateDisplayPromotion = async (id: number, display: boolean) => {
	let { data } = await http.patch(`/program/${id}`, {
		allowIsDisplayed: true,
		isDisplayed: display,
	});

	return data;
};

export const updateStatusPromotion = async (id: number, active: boolean) => {
	let { data } = await http.patch(`/program/${id}/update-status`, {
		active: active,
	});

	return data;
};

export class PromotionKTVService {
	public static async getListPromotionStaff(
		id: number,
		inPage: number,
		inPerPage: number
	): Promise<{
		data: StaffDetail[];
		count: number;
	}> {
		let params: any = {};
		let results = await Promise.all([
			http.get(
				`/program/${id}/assigned-staffs?perPage=${inPerPage}&page=${inPage || 1}&${
					new URLSearchParams().toString()
					// params
				}`
			),
		]);
		return {
			data: DefaultModel.parseList<StaffDetail>(results[0].data, () => new StaffDetail()),
			count: results[0].data?.total,
		};
	}
}

export class PromotionAssignedServices {
	public static async getPromotionAssignedServices(
		id: number,
		staffId: number
	): Promise<{
		data: StaffDetail;
	}> {
		let results = await http.get(`/program/${id}/staff/${staffId}/assigned-services`);
		return {
			data: new StaffDetail().parse(results.data),
		};
	}
}
export const createdPromotionAssignedServices = async (id: number, staffId: number, staffServicePriceIds: number[]) => {
	let { data } = await http.post(`/program/${id}/staff/${staffId}/assign-services`, {
		staffServiceIds: [],
		staffServicePriceIds: staffServicePriceIds,
	});

	return data;
};
