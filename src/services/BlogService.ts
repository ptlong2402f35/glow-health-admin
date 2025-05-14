import axios from "axios";
import Blog, { ForeignContent } from "../models/Blog";
import { DefaultModel } from "../models/IModel";

import http from "./http";
import environments from "../environment";

export default class BlogService {
	public static async getListBlog(
		inPage?: number,
		inPerPage?: number,
		lang?: string
	): Promise<{
		data: Blog[];
		count: number;
	}> {
		let params: any = {
			// isUserView:true
		};
		let results = await http.get(
			`/admin-blog?perPage=${inPerPage || 50}&page=${inPage || 1}&status=${""}&search=${""}`,
			{}
		);
		return {
			data: DefaultModel.parseList<Blog>(results.data?.docs, () => new Blog()),
			count: results.data?.total,
		};
	}

	public static async getListBlogUser(
		inPage?: number,
		inPerPage?: number,
		lang?: string
	): Promise<{
		data: Blog[];
		count: number;
	}> {
		let query: any = {
			perPage: inPerPage || 8,
			page: inPage || 1,
			status: 1,
		};

		let headers = {
			"glow-lang": lang || "vi",
		};
		let results = await http.get(`/blog?${new URLSearchParams(query).toString()}`, {
			headers,
		});
		return {
			data: DefaultModel.parseList<Blog>(results.data?.docs, () => new Blog()),
			count: results.data?.total,
		};
	}

	public static async getListBlogSSR(
		inPage?: number,
		inPerPage?: number,
		lang?: string
	): Promise<{
		data: Blog[];
		raw: any;
		count: number;
	}> {
		let query: any = {
			perPage: inPerPage || 8,
			page: inPage || 1,
			status: 1,
		};
		let headers = {
			"glow-lang": lang || "vi",
		};
		const { data } = await axios.get(
			(environments.localApiRoot || environments.apiRoot) + `/blog?${new URLSearchParams(query).toString()}`,
			{
				timeout: environments.localApiTimeout || undefined,
				headers,
			}
		);

		return {
			data: DefaultModel.parseList<Blog>(data?.docs, () => new Blog()),
			raw: data,
			count: data.total,
		};
	}

	public static async offlineGetListBlogs(raw: any): Promise<{ data: Blog[]; count: number }> {
		let data = DefaultModel.parseList<Blog>(raw.docs, () => new Blog());
		let count = raw.total;
		return { data, count };
	}

	public static async CreatedBlog(
		title: string,
		image: string | null | undefined,
		content: string,
		subContent: string
	) {
		const data = await http.post(`/blog`, {
			title: title,
			image: image,
			content: content,
			subContent: subContent,
		});
		return data;
	}

	public static async UpdateBlog(id: number, title: string, image: string, content: string, subContent: string) {
		let { data } = await http.patch(`/blog/${id}`, {
			title: title,
			content: content,
			subContent: subContent,
			image: image,
		});
		return data;
	}

	public static async UpdateBlogMutiLang(id: number, editedBlogMutiLang?: any[]) {
		let { data } = await http.patch(`/blog-foreign/${id}`, {
			foreignContent: editedBlogMutiLang,
		});
		return data;
	}
}

export const UpdateStatusBlog = async (id: number, status: number) => {
	let { data } = await http.patch(`/blog-status/${id}`, {
		status: status,
	});

	return data;
};

export const DeleteBlog = async (id: number) => {
	let { data } = await http.delete(`/blog/${id}`);
	return data;
};

export const getBlogDetail = async (id: number): Promise<Blog> => {
	let { data } = await http.get(`/admin-blog/${id}`);

	return new Blog().parse(data);
};

export const getBlogDetailSSR = async (
	id: number
): Promise<{
	data: Blog;
	raw: any;
}> => {
	const { data } = await axios.get((environments.localApiRoot || environments.apiRoot) + `/blog/${id}`, {
		timeout: environments.localApiTimeout || undefined,
	});

	return {
		data: new Blog().parse(data),
		raw: data,
	};
};
export const offlineGetBlogDetail = async (data: any): Promise<{ data: Blog }> => {
	let blog = new Blog().parse(data);
	return { data: blog };
};

export const getBlogDetailv2 = async (richLink: string, lang?: string): Promise<{ data: Blog }> => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	let { data } = await http.get(`/blog-v2/${richLink}`, {
		headers,
	});

	return { data: new Blog().parse(data) };
};
export const getBlogDetailSSRRickLink = async (
	richLink: string,
	lang?: string
): Promise<{
	dataBlog: Blog;
	rawBlog: any;
}> => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get((environments.localApiRoot || environments.apiRoot) + `/blog-v2/${richLink}`, {
		timeout: environments.localApiTimeout || undefined,
		headers,
	});

	return {
		dataBlog: new Blog().parse(data),
		rawBlog: data,
	};
};
