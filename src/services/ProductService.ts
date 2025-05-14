import axios from "axios";
import environments from "../environment";
import { DefaultModel } from "../models/IModel";
import Service, { ServiceGroup, ServiceGroupAll } from "../models/Service";

import http from "./http";

export default class ProductService {
	public static async getListProducts(
		inPage: number,
		inPerPage: number,
		status: string | undefined,
		keyWord: string | undefined,
		type: string | undefined
	): Promise<{
		data: Service[];
		count: number;
	}> {
		let params: any = {
			active: status ?? "",
			search: keyWord ?? "",
		};
		let results = await Promise.all([
			http.get(
				`/service?perPage=${inPerPage}&page=${inPage || 1}&scopes=${type || "1;2;3"}&${new URLSearchParams(
					params
				).toString()}`
			),
		]);
		return {
			data: DefaultModel.parseList<Service>(results[0].data, () => new Service()),
			count: results[0].data?.total,
		};
	}

	public static async ToTopService(id: number) {
		let update = await http.patch(`service/${id}/to-top`);
		return update;
	}

	public static async UpdateActiveService(id: number) {
		let update = await http.put(`/adservice`, {
			id: id,
		});
		return update;
	}

	public static async getListDetailProducts(id: number) {
		let res = await http.get(`/service/${id}`);
		return res;
	}

	public static async UpdateService(
		id: number | null | undefined,
		name: string,
		code: string,
		price: string,
		unit: string,
		serviceGroup: string | null | undefined,
		imageUrl: string | null | undefined,
		images: any,
		type: number,
		description: string
	) {
		let update = await http.put(`/service`, {
			id: id,
			name: name,
			code: code,
			price: price,
			imageUrl: imageUrl,
			unit: unit,
			images: images,
			serviceGroup: serviceGroup,
			scope: type,
			description: description,
		});
		return update;
	}
	public static async UpdatePriceService(
		id: number | null | undefined,
		name: string,
		code: string,
		price: string,
		unit: string,
		serviceGroup: string | null | undefined,
		imageUrl: string | null | undefined,
		images: any,
		type: number,
		description: string,
		hint?: {
			unit: string;
			price: number;
			id: number;
			itemId?: number | undefined;
			uneditable: boolean;
		}[]
	) {
		let update = await http.put(`/service`, {
			id: id,
			name: name,
			code: code,
			price: price,
			imageUrl: imageUrl,
			unit: unit,
			images: images,
			serviceGroup: serviceGroup,
			scope: type,
			description: description,
			allowHint: true,
			hint: hint,
		});
		return update;
	}

	public static async CreatedService(
		name: string,
		code: string,
		price: string,
		unit: string,
		serviceGroup: string | null | undefined,
		imageUrl: string | null | undefined,
		images: any,
		type: number,
		description: string
	) {
		const data = await http.post(`/service`, {
			name: name,
			code: code,
			price: price,
			imageUrl: imageUrl,
			unit: unit,
			images: images,
			serviceGroup: serviceGroup,
			scope: type,
			description: description,
		});
		return data;
	}

	public static async GetServiceGroupAll(): Promise<{
		data: ServiceGroupAll[];
	}> {
		const response = await http.get(`/service-group`);
		const data = response.data;

		const serviceGroupAllList: [] = data.map((item: any) => {
			return {
				id: item.id,
				name: item.name,
				image: item.image,
				imageLighter: item.imageLighter,
				transName: item.transName,
			};
		});

		return {
			data: serviceGroupAllList,
		};
	}

	public static async GetServiceGroupAllNew(lang: string): Promise<{
		data: ServiceGroup[];
		count: number;
	}> {
		let headers = {
			"glow-lang": lang || "vi",
		};
		const response = await http.get(`/service-groups-all-web?active=true`, { headers });
		const data = response.data;
		const count = 0;

		const serviceGroupAllList: [] = data.map((item: any) => {
			return {
				name: item.serviceGroup.name,
				image: item.serviceGroup.image,
				imageLighter: item.serviceGroup.imageLighter,
				transName: item.serviceGroup.transName,
				url: item.url,
			};
		});
		return {
			data: serviceGroupAllList,
			count: count,
		};
	}
	public static async GetServiceGroupAllNewSSR(lang?: string): Promise<{
		dataServiceGroup: ServiceGroup[];
		rawServiceGroup: any;
	}> {
		let headers = {
			"glow-lang": lang || "vi",
		};
		const { data } = await axios.get(
			(environments.localApiRoot || environments.apiRoot) + `/service-groups-all-web?active=true`,
			{
				timeout: environments.localApiTimeout || undefined,
				headers,
			}
		);
		const dataServiceGroup = data.map((item: any) => {
			return {
				name: item.serviceGroup.name,
				image: item.serviceGroup.image,
				imageLighter: item.serviceGroup.imageLighter,
				transName: item.serviceGroup.transName,
				url: item.url,
			};
		});
		return {
			dataServiceGroup: DefaultModel.parseList<ServiceGroup>(dataServiceGroup, () => new ServiceGroup()),
			rawServiceGroup: data,
		};
	}
	public static async offlineGetServiceGroupAllNew(raw: any): Promise<{ data: ServiceGroup[]; count: number }> {
		const dataServiceGroup = raw.map((item: any) => {
			return {
				name: item.serviceGroup.name,
				image: item.serviceGroup.image,
				imageLighter: item.serviceGroup.imageLighter,
				transName: item.serviceGroup.transName,
				url: item.url,
			};
		});
		let data = DefaultModel.parseList<ServiceGroup>(dataServiceGroup, () => new ServiceGroup());
		const count = 0;
		return { data, count };
	}
}
