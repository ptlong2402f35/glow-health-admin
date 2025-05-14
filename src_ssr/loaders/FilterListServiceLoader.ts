import environments from "../../src/environment";
import Service from "../../src/models/Service";
import { UrlAddressSSR } from "../../src/services/AllAddressService";
import BannerService from "../../src/services/BannerService";
import ProductService from "../../src/services/ProductService";
import {
	ListSerrviceAtHomeSSR,
	ListStaffAtHomeSSR,
	getStaffServiceSSR,
	getTopServiceSSR,
} from "../../src/services/StaffService";
import { PERPAGE } from "../../src/views/pages/orderManagement/hook/useGetListHook";
import { DataLoaderItem } from "../data-loader";

const FilterListServiceLoader: DataLoaderItem = {
	path: "/dich-vu/:link",
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
		const lang = params.lang || "vi";
		const apartment = params.apartment;

		let filterStar = null;
		let page = 1;
		let hasFilter = null;

		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);
			filterStar = urlParams.get("filterStar");
			const pageParam = urlParams.get("page");
			if (filterStar || pageParam) {
				page = Number(pageParam) || 1;
				hasFilter = true;
			}
		}

		const [listStaffResult, urlAddressResult] = await Promise.all([
			ListSerrviceAtHomeSSR(PERPAGE.PerPage, Number(page) || 1, params?.link, filterStar),
			UrlAddressSSR(params?.link, apartment, lang),
		]);

		const { dataListStaffAtHome, rawListStaffAtHome, pageType, breadcrumb, pageTitle, totalData } = listStaffResult;
		const { dataUrlAddress, rawUrlAddress, dataUrl, dataLocationType } = urlAddressResult;

		const joinServiceGroups = (dataListStaffAtHome: Service[], maxLength: number) => {
			let result = "";
			let currentLength = 0;

			for (let i = 0; i < dataListStaffAtHome?.length; i++) {
				const serviceGroup = dataListStaffAtHome[i].serviceGroup;

				const newLength = result.length + (serviceGroup || [""]).toString.length + (i > 0 ? 2 : 0);

				if (newLength <= maxLength) {
					result += (i > 0 ? ", " : "") + serviceGroup;
					currentLength = newLength;
				} else {
					break;
				}
			}

			return result;
		};

		const joinedServiceGroups = joinServiceGroups(dataListStaffAtHome, 160);
		const totalPages = Math.ceil((totalData || 0) / PERPAGE.PerPage);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `${environments.domainRoot}/${lang}/dich-vu/${params?.link}`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};

		return {
			data: {
				dataListServeAtHome: dataListStaffAtHome,
				dataUrlServiceAddress: dataUrlAddress,
				dataLocationServiceType: dataLocationType,
				dataServiceUrl: dataUrl,
				pageTitleService: pageTitle,
				breadcrumbService: breadcrumb,
				totalDataSerivce: totalData,
			},
			raw: {
				dataListServeAtHome: rawListStaffAtHome,
				dataUrlServiceAddress: rawUrlAddress,
			},
			meta: {
				title: `${pageTitle}`,
				description: `${pageTitle} ${joinedServiceGroups}`,
				ogTitle: `${pageTitle}`,
				ogDescription: `${pageTitle} ${joinedServiceGroups}`,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/dich-vu/${params?.link}`,
				ogSiteName: `${pageTitle}`,
				canonical: `${environments.domainRoot}/vi/dich-vu/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dich-vu/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dich-vu/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/dich-vu/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dich-vu/${params?.link}` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${breadcrumb[0].label}`,
							item: `${environments.domainRoot}/vi/${breadcrumb[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${breadcrumb[1].label}`,
							item: `${environments.domainRoot}/vi/dich-vu/${breadcrumb[1].url}`,
						},
						...(breadcrumb.length >= 3
							? [
									{
										"@type": "ListItem",
										position: 3,
										name: `${breadcrumb[2].label}`,
										item: `${environments.domainRoot}/vi/dich-vu/${breadcrumb[2].url}`,
									},
							  ]
							: []),
					],
				},
				GlowError: !pageTitle && true,
				...(hasFilter && { robots: "noindex" }),
				keyword: `${pageTitle}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			},
		};
	},
};

export default FilterListServiceLoader;

export const FilterListServiceLoaderMuti: DataLoaderItem = {
	path: "/:lang(vi|en|kr|jp|cn)/dich-vu/:link",
	loader: async (path: string, params: any, url?: string) => {
		const lang = params.lang || "vi";
		const apartment = params.apartment;
		let start = new Date();

		let filterStar = null;
		let page = 1;
		let hasFilter = null;

		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);
			filterStar = urlParams.get("filterStar");
			const pageParam = urlParams.get("page");
			if (filterStar || pageParam) {
				page = Number(pageParam) || 1;
				hasFilter = true;
			}
		}

		const [listStaffResult, urlAddressResult] = await Promise.all([
			ListSerrviceAtHomeSSR(PERPAGE.PerPage, Number(page) || 1, params?.link, filterStar, lang),
			UrlAddressSSR(params?.link, apartment, lang),
		]);

		const { dataListStaffAtHome, rawListStaffAtHome, pageType, breadcrumb, pageTitle, totalData } = listStaffResult;
		const { dataUrlAddress, rawUrlAddress, dataUrl, dataLocationType } = urlAddressResult;

		const joinServiceGroups = (dataListStaffAtHome: Service[], maxLength: number) => {
			let result = "";
			let currentLength = 0;

			for (let i = 0; i < dataListStaffAtHome?.length; i++) {
				const serviceGroup = dataListStaffAtHome[i].serviceGroup;

				const newLength = result.length + (serviceGroup || [""]).toString.length + (i > 0 ? 2 : 0);

				if (newLength <= maxLength) {
					result += (i > 0 ? ", " : "") + serviceGroup;
					currentLength = newLength;
				} else {
					break;
				}
			}

			return result;
		};

		const joinedServiceGroups = joinServiceGroups(dataListStaffAtHome, 160);

		const totalPages = Math.ceil((totalData || 0) / PERPAGE.PerPage);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `${environments.domainRoot}/${lang}/dich-vu/${params?.link}`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};

		let meta = {};
		if (lang === "vi") {
			meta = {
				title: `${pageTitle}`,
				description: `${pageTitle} ${joinedServiceGroups}`,
				ogTitle: `${pageTitle}`,
				ogDescription: `${pageTitle} ${joinedServiceGroups}`,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/dich-vu/${params?.link}`,
				ogSiteName: `${pageTitle}`,
				canonical: `${environments.domainRoot}/vi/dich-vu/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dich-vu/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dich-vu/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/dich-vu/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dich-vu/${params?.link}` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${breadcrumb[0].label}`,
							item: `${environments.domainRoot}/vi/${breadcrumb[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${breadcrumb[1].label}`,
							item: `${environments.domainRoot}/vi/dich-vu/${breadcrumb[1].url}`,
						},
						...(breadcrumb.length >= 3
							? [
									{
										"@type": "ListItem",
										position: 3,
										name: `${breadcrumb[2].label}`,
										item: `${environments.domainRoot}/vi/dich-vu/${breadcrumb[2].url}`,
									},
							  ]
							: []),
					],
				},
				GlowError: !pageTitle && true,
				...(hasFilter && { robots: "noindex" }),
				keyword: `${pageTitle}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			};
		} else if (lang === "en") {
			meta = {
				title: `${pageTitle}`,
				description: `${pageTitle} ${joinedServiceGroups}`,
				ogTitle: `${pageTitle}`,
				ogDescription: `${pageTitle} ${joinedServiceGroups}`,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/dich-vu/${params?.link}`,
				ogSiteName: `${pageTitle}`,
				canonical: `${environments.domainRoot}/en/dich-vu/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dich-vu/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dich-vu/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/dich-vu/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dich-vu/${params?.link}` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${breadcrumb[0].label}`,
							item: `${environments.domainRoot}/en/${breadcrumb[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${breadcrumb[1].label}`,
							item: `${environments.domainRoot}/en/dich-vu/${breadcrumb[1].url}`,
						},
						...(breadcrumb.length >= 3
							? [
									{
										"@type": "ListItem",
										position: 3,
										name: `${breadcrumb[2].label}`,
										item: `${environments.domainRoot}/en/dich-vu/${breadcrumb[2].url}`,
									},
							  ]
							: []),
					],
				},
				GlowError: !pageTitle && true,
				...(hasFilter && { robots: "noindex" }),
				keyword: `${pageTitle}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			};
		} else if (lang === "kr") {
			meta = {
				title: `${pageTitle}`,
				description: `${pageTitle} ${joinedServiceGroups}`,
				ogTitle: `${pageTitle}`,
				ogDescription: `${pageTitle} ${joinedServiceGroups}`,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/dich-vu/${params?.link}`,
				ogSiteName: `${pageTitle}`,
				canonical: `${environments.domainRoot}/kr/dich-vu/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dich-vu/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dich-vu/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/dich-vu/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dich-vu/${params?.link}` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${breadcrumb[0].label}`,
							item: `${environments.domainRoot}/kr/${breadcrumb[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${breadcrumb[1].label}`,
							item: `${environments.domainRoot}/kr/dich-vu/${breadcrumb[1].url}`,
						},
						...(breadcrumb.length >= 3
							? [
									{
										"@type": "ListItem",
										position: 3,
										name: `${breadcrumb[2].label}`,
										item: `${environments.domainRoot}/kr/dich-vu/${breadcrumb[2].url}`,
									},
							  ]
							: []),
					],
				},
				GlowError: !pageTitle && true,
				...(hasFilter && { robots: "noindex" }),
				keyword: `${pageTitle}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			};
		}

		return {
			data: {
				dataListServeAtHome: dataListStaffAtHome,
				dataUrlServiceAddress: dataUrlAddress,
				dataLocationServiceType: dataLocationType,
				dataServiceUrl: dataUrl,
				pageTitleService: pageTitle,
				breadcrumbService: breadcrumb,
				totalDataSerivce: totalData,
			},
			raw: {
				dataListServeAtHome: rawListStaffAtHome,
				dataUrlServiceAddress: rawUrlAddress,
			},
			meta,
		};
	},
};
