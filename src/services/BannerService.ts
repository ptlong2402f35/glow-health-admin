import axios from "axios";
import environments from "../environment";
import Banner from "../models/Banner";
import { DefaultModel } from "../models/IModel";
import { Country } from "../models/UserGlow";

import http from "./http";

export default class BannerService {
	public static async getListBanner(): Promise<{
		data: Banner[];
	}> {
		let params: any = {
			// isUserView:true
		};
		let results = await Promise.all([http.get(`/banner-by-admin`)]);
		return {
			data: DefaultModel.parseList<Banner>(results[0].data, () => new Banner()),
		};
	}

	public static async CreatedBanner(
		listBanner: Banner[],
		group: string,
		updatedItemsArray: {
			action: string;
			path: (
				| {
						lang: string;
						value: any;
				  }
				| undefined
			)[];
		}[]
	) {
		const data = await http.post(`/banner-update`, {
			data: [
				...listBanner.map((banner) => ({
					active: banner.active,
					group: banner.group,
					items: banner.items,
				})),
				{
					active: true,
					group: group,
					items: updatedItemsArray,
				},
			],
		});
		return data;
	}
	public static async UpdateBanner(dataBanner: Banner[]) {
		const data = await http.post(`/banner-update`, {
			data: dataBanner,
		});
		return data;
	}
	public static async getListBannerView(lang: string): Promise<{
		data: Banner[];
		count: number;
	}> {
		let headers = {
			"glow-lang": lang || "vi",
		};

		let results = await Promise.all([
			http.get(`/banner?isUserView=true`, {
				headers,
			}),
		]);
		const count = 0;

		return {
			data: DefaultModel.parseList<Banner>(results[0].data, () => new Banner()),
			count: count,
		};
	}

	public static async getListBannerViewSSR(lang?: string): Promise<{
		dataBannerView: Banner[];
		rawBannerView: any;
	}> {
		let headers = {
			"glow-lang": lang || "vi",
		};

		const { data } = await axios.get(
			(environments.localApiRoot || environments.apiRoot) + `/banner?isUserView=true`,
			{
				timeout: environments.localApiTimeout || undefined,
				headers,
			}
		);

		return {
			dataBannerView: DefaultModel.parseList<Banner>(data, () => new Banner()),
			rawBannerView: data,
		};
	}
	public static async offlinegetListBannerView(raw: any): Promise<{ data: Banner[]; count: number }> {
		let data = DefaultModel.parseList<Banner>(raw, () => new Banner());
		const count = 0;
		return { data, count };
	}
}

export async function getLang(): Promise<{
	data: Country[];
}> {
	let results = await http.get(`/trans-lang`);
	return {
		data: DefaultModel.parseList<Country>(results.data, () => new Country()),
	};
}
