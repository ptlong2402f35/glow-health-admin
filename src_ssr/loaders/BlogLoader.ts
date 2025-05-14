import environments from "../../src/environment";
import BlogService, { getBlogDetailSSR, getBlogDetailSSRRickLink } from "../../src/services/BlogService";
import { removeVietnameseTones } from "../../src/views/hooks/useUnMark";
import { PERPAGE } from "../../src/views/pages/orderManagement/hook/useGetListHook";
import { DataLoaderItem } from "../data-loader";

const BlogLoader: DataLoaderItem = {
	path: "/blog/:richLink",
	loader: async (path: string, params: any, url?: string) => {
		let start = new Date();
		if(environments.redirect301){
			return{
				redirectStatus: {
					redirect:true,
					urlRedirect:"/vi" + url
				}
			}
		}

		const [GetBlogDetail, ListBlogDetail] = await Promise.all([
			getBlogDetailSSRRickLink(params?.richLink),
			BlogService.getListBlogSSR(1, PERPAGE.Home),
		]);
		const { dataBlog, rawBlog } = GetBlogDetail;
		const { data, raw } = ListBlogDetail;
		return {
			data: { dataDetailBlog: dataBlog, dataListBlogDetail: data },
			raw: { dataDetailBlog: rawBlog, dataListBlogDetail: raw },
			meta: {
				title: `${dataBlog.title}`,
				description: `${dataBlog.subContent}`,
				ogTitle: `${dataBlog.title}`,
				ogDescription: `${dataBlog.subContent}`,
				ogImage: `${dataBlog.image}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/blog/${params?.richLink}`,
				// ogSiteName: "Glow - Ứng dụng đặt massage tại nhà, căn hộ, khách sạn",
				canonical: `${environments.domainRoot}/vi/blog/${params?.richLink}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/blog/${params?.richLink}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/blog/${params?.richLink}` },
					{ lang: "en", url: `${environments.domainRoot}/en/blog/${params?.richLink}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/blog/${params?.richLink}` },
				],
				GlowError: (!dataBlog || !dataBlog.id) && true,
				keyword: `${dataBlog.title || ""}`,
			},
		};
	},
};

export default BlogLoader;

export const BlogLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/blog/:richLink",
	loader: async (path: string, params: any) => {
		const lang = params.lang || "vi";
		let start = new Date();
		const [GetBlogDetail, ListBlogDetail] = await Promise.all([
			getBlogDetailSSRRickLink(params?.richLink, lang),
			BlogService.getListBlogSSR(1, PERPAGE.Home, lang),
		]);
		const { dataBlog, rawBlog } = GetBlogDetail;
		const { data, raw } = ListBlogDetail;
		return {
			data: { dataDetailBlog: dataBlog, dataListBlogDetail: data },
			raw: { dataDetailBlog: rawBlog, dataListBlogDetail: raw },
			meta: {
				title: `${dataBlog.title}`,
				description: `${dataBlog.subContent}`,
				ogTitle: `${dataBlog.title}`,
				ogDescription: `${dataBlog.subContent}`,
				ogImage: `${dataBlog.image}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/blog/${params?.richLink}`,
				// ogSiteName: "Glow - Ứng dụng đặt massage tại nhà, căn hộ, khách sạn",
				canonical: `${environments.domainRoot}/vi/blog/${params?.richLink}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/blog/${params?.richLink}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/blog/${params?.richLink}` },
					{ lang: "en", url: `${environments.domainRoot}/en/blog/${params?.richLink}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/blog/${params?.richLink}` },
				],
				GlowError: (!dataBlog || !dataBlog.id) && true,
				keyword: `${dataBlog.title || ""}`,
			},
		};
	},
};
