import { DefaultModel } from "../models/IModel";
import MetaLoader from "../models/MetaLoader";
import http from "./http";

export default class CustomLinkService {
	public static async getListCustomLink(
		inPage: number,
		inPerPage: number,
		name: string,
		link: string,
		active: string,
	): Promise<{
		data: MetaLoader[];
		count: number;
	}> {
		let params: any = {
			link: link ?? "",
			name: name ?? "",
			active: active ?? "",
		};
		let results = await Promise.all([
			http.get(
				`/custom-seo-config-by-admin?perPage=${inPerPage}&page=${inPage || 1}&${new URLSearchParams(
					params
				).toString()}`
			),
		]);
		return {
			data: DefaultModel.parseList<MetaLoader>(results[0].data?.docs, () => new MetaLoader()),
			count: results[0].data?.total,
		};
	}

	public static async CreatedCustomLink(
		name: string,
		title: string,
		description: string,
		ogTitle: string,
        ogDescription: string,
		ogImage: string | null | undefined,
		ogType: string,
		ogUrl: string,
		canonical: string,
		hreflang: any,
		structuredData: any,
		originalLink: string,
		newLink: string,
		h1Custom:string,
	) {
		const data = await http.post(`/add-custom-seo-config`, {
			originalLink: originalLink,
			newLink: newLink,
			name: name,
			data: {
				title: title,
				description: description,
				ogTitle:ogTitle,
				ogDescription:ogDescription,
				ogImage: ogImage,
				ogType: ogType,
				ogUrl: ogUrl,
				canonical: canonical,
				hreflang: hreflang,
				structuredData: structuredData,
			},
			h1Content:h1Custom,
		});
		return data;
	}
	public static async UpdateCustomLink(
		id: string,
		name: string,
		title: string,
		description: string,
		ogTitle: string,
        ogDescription: string,
		ogImage: string | null | undefined,
		ogType: string,
		ogUrl: string,
		canonical: string,
		hreflang: any,
		structuredData: any,
		originalLink: string,
		newLink: string,
		h1Content:string,
	) {
		const data = await http.put(`/update-custom-seo-config/${id}`, {
			originalLink: originalLink,
			newLink: newLink,
			name: name,
			data: {
				title: title,
				description: description,
				ogTitle:ogTitle,
				ogDescription:ogDescription,
				ogImage: ogImage,
				ogType: ogType,
				ogUrl: ogUrl,
				canonical: canonical,
				hreflang: hreflang,
				structuredData: structuredData,
			},
			h1Content:h1Content,
		});
		return data;
	}

	public static async UpdateTypeCustomLink(
		id: string,
		active: boolean,
	) {
		const data = await http.put(`/deactive-custom-seo-config/${id}`, {
			active: active
		});
		return data;
	}
}
