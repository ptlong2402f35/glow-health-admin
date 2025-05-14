import { useLocation } from "react-router";
import BlogService from "../../src/services/BlogService";
import useCommonListFunctions from "../../src/views/hooks/useCommonList/useCommonListFunctions";
import { DataLoaderItem } from "../data-loader";
import { defaultExtractor, extractCommonListFilter } from "../../src/views/hooks/useCommonList/commonHelper";
import environments from "../../src/environment";
import { PERPAGE } from "../../src/views/pages/orderManagement/hook/useGetListHook";

const ListBlogLoader: DataLoaderItem = {
	path: "/blog",
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
		let page = 1;
		let hasFilter = null;

		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);
			const pageParam = urlParams.get("page");
			if (pageParam) {
				page = Number(pageParam) || 1;
				hasFilter = true;
			}
		}
		let { data, raw, count } = await BlogService.getListBlogSSR(Number(page) || 1, PERPAGE.Home);

		const totalPages = Math.ceil(count / PERPAGE.Home);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `${environments.domainRoot}/vi/blog`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};

		return {
			data: { dataListBlog: data, totalDataBlog: count },
			raw: { dataListBlog: raw },
			meta: {
				title: "Kiến thức, kinh nghiệm và trải nghiệm làm đẹp trên Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Kiến thức, kinh nghiệm và trải nghiệm làm đẹp trên Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/blog`,
				ogSiteName: "Kiến thức, kinh nghiệm và trải nghiệm làm đẹp trên Glow",
				canonical: `${environments.domainRoot}/vi/blog`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/blog` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/blog` },
					{ lang: "en", url: `${environments.domainRoot}/en/blog` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/blog` },
				],
				...(hasFilter && { robots: "noindex" }),
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			},
		};
	},
};

export default ListBlogLoader;

export const ListBlogLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/blog",
	loader: async (path: string, params: any, url?: string) => {
		const lang = params.lang || "vi";
		let start = new Date();
		let page = 1;
		let hasFilter = null;

		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);
			const pageParam = urlParams.get("page");
			if (pageParam) {
				page = Number(pageParam) || 1;
				hasFilter = true;
			}
		}
		let { data, raw, count } = await BlogService.getListBlogSSR(Number(page) || 1, PERPAGE.Home, lang);
		const totalPages = Math.ceil(count / PERPAGE.Home);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `${environments.domainRoot}/${lang}/blog`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};
		let title, description, ogTitle, ogDescription, ogSiteName, canonical, hreflang;
		if (lang === "vi") {
			title = "Kiến thức, kinh nghiệm và trải nghiệm làm đẹp trên Glow";
			description =
				"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi";
			ogTitle = "Kiến thức, kinh nghiệm và trải nghiệm làm đẹp trên Glow";
			ogDescription =
				"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi";

			ogSiteName = "Kiến thức, kinh nghiệm và trải nghiệm làm đẹp trên Glow";
			canonical = `${environments.domainRoot}/vi/blog`;
			hreflang = [
				{ lang: "x-default", url: `${environments.domainRoot}/vi/blog` },
				{ lang: "vi", url: `${environments.domainRoot}/vi/blog` },
				{ lang: "en", url: `${environments.domainRoot}/en/blog` },
				{ lang: "ko", url: `${environments.domainRoot}/kr/blog` },
			];
		} else if (lang === "en") {
			title = "Knowledge, experience and beauty experience on Glow";
			description =
				"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions";
			ogTitle = "Knowledge, experience and beauty experience on Glow";
			ogDescription =
				"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions";
			ogSiteName = "Knowledge, experience and beauty experience on Glow";
			canonical = `${environments.domainRoot}/en/blog`;
			hreflang = [
				{ lang: "x-default", url: `${environments.domainRoot}/vi/blog` },
				{ lang: "vi", url: `${environments.domainRoot}/vi/blog` },
				{ lang: "en", url: `${environments.domainRoot}/en/blog` },
				{ lang: "ko", url: `${environments.domainRoot}/kr/blog` },
			];
		} else {
			title = "Glow에 대한 지식, 경험, 뷰티 경험";
			description =
				"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요";
			ogTitle = "Glow에 대한 지식, 경험, 뷰티 경험";
			ogDescription =
				"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요";
			ogSiteName = "Glow에 대한 지식, 경험, 뷰티 경험";
			canonical = `${environments.domainRoot}/kr/blog`;
			hreflang = [
				{ lang: "x-default", url: `${environments.domainRoot}/vi/blog` },
				{ lang: "vi", url: `${environments.domainRoot}/vi/blog` },
				{ lang: "en", url: `${environments.domainRoot}/en/blog` },
				{ lang: "ko", url: `${environments.domainRoot}/kr/blog` },
			];
		}

		return {
			data: { dataListBlog: data, totalDataBlog: count },
			raw: { dataListBlog: raw },
			meta: {
				title: title,
				description: description,
				ogTitle: ogTitle,
				ogDescription: ogDescription,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/blog`,
				ogSiteName: ogSiteName,
				canonical: canonical,
				hreflang: hreflang,
				...(hasFilter && { robots: "noindex" }),
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			},
		};
	},
};
