import environments from "../../src/environment";
import BlogService, { getBlogDetailSSR, getBlogDetailSSRRickLink } from "../../src/services/BlogService";
import { DetailServiceSSR, DetailStaffSSR, ReviewStaffv2SSR } from "../../src/services/StaffService";
import { PERPAGE } from "../../src/views/pages/orderManagement/hook/useGetListHook";
import { DataLoaderItem } from "../data-loader";

const ServiceDetailLoader: DataLoaderItem = {
	path: "/:group(spaone|barbershop|massage-tai-nha|lay-ray-tai-tai-nha|makeup-tai-nha|hairstylist-tai-nha|nail-tai-nha|skin-care-tai-nha|wax-tai-nha|tri-lieu-tai-nha|nha-cua-tai-nha|activities-tai-nha|fitness-tai-nha|nha-khoa-tai-nha|thu-cung-tai-nha|eyelash-eyebrow-tai-nha|tham-my-vien-tai-nha|phong-kham-tai-nha|khach-san-tai-nha|da-mat-tai-nha|me-va-be-tai-nha|massage-lay-ray-tai-tai-nha|nail-eyelash-eyebrow-tai-nha|makeup-hairstylist-tai-nha|wax-tai-nha|massage|lay-ray-tai|makeup|hairstylist|nail|skin-care|wax|tri-lieu|nha-cua|activities|fitness|nha-khoa|thu-cung|eyelash-eyebrow|tham-my-vien|phong-kham|khach-san|da-mat|me-va-be|massage-lay-ray-tai|nail-eyelash-eyebrow|makeup-hairstylist|wax|massage-tai-spa|lay-ray-tai-tai-spa|makeup-tai-spa|hairstylist-tai-spa|nail-tai-spa|skin-care-tai-spa|wax-tai-spa|tri-lieu-tai-spa|nha-cua-tai-spa|activities-tai-spa|fitness-tai-spa|nha-khoa-tai-spa|thu-cung-tai-spa|eyelash-eyebrow-tai-spa|tham-my-vien-tai-spa|phong-kham-tai-spa|khach-san-tai-spa|da-mat-tai-spa|me-va-be-tai-spa|massage-lay-ray-tai-tai-spa|nail-eyelash-eyebrow-tai-spa|makeup-hairstylist-tai-spa|wax-tai-spa|tro-ly-tai-nha)/:link/:servicelink",
	loader: async (path: string, params: any, url?: string) => {
		if(environments.redirect301){
			return{
				redirectStatus: {
					redirect:true,
					urlRedirect:"/vi" + url
				}
			}
		}
		const lang = params.lang || "vi";
		let filterStar = null;
		let page = 1;
		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);

			filterStar = urlParams.get("filterStar");
			const pageParam = urlParams.get("page");
			if (filterStar || pageParam) {
				page = Number(pageParam) || 1;
			}
		}
		let { dataDetailService, rawDetailService } = await DetailServiceSSR(params?.group, params?.servicelink);
		let { dataReviewService, rawReviewService, totalReviewService } = await ReviewStaffv2SSR(
			dataDetailService?.staffId,
			Number(page) || 1,
			PERPAGE.Home,
			0,
			0,
			filterStar || "",
			dataDetailService?.serviceStaffId
		);

		const totalPages = Math.ceil((totalReviewService || 0) / PERPAGE.PerPage);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `$${environments.domainRoot}/${lang}/${params?.group}/${params.link}/${params.servicelink}`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};

		return {
			data: {
				dataDetailService: dataDetailService,
				dataReviewService: dataReviewService,
				totalReviewService: totalReviewService,
			},
			raw: { dataDetailService: rawDetailService, dataReviewService: rawReviewService },
			meta: {
				title: `${dataDetailService.pageTitle}`,
				description: `${dataDetailService.serviceGroup} ${dataDetailService.staffService?.description}`,
				ogTitle: `${dataDetailService.pageTitle}`,
				ogDescription: `${dataDetailService.serviceGroup} ${dataDetailService.staffService?.description}`,
				ogImage: `${
					dataDetailService.staffService?.images?.[0]?.path ||
					dataDetailService.staffService?.staff?.user?.urlImage
				}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
				ogSiteName: `${dataDetailService.pageTitle}`,
				canonical: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
				hreflang: [
					{
						lang: "x-default",
						url: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "vi",
						url: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "en",
						url: `${environments.domainRoot}/en/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "ko",
						url: `${environments.domainRoot}/kr/${params?.group}/${params.link}/${params.servicelink}`,
					},
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${dataDetailService?.breadcrumb?.[0].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailService?.breadcrumb?.[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${dataDetailService?.breadcrumb?.[1].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailService?.breadcrumb?.[1].url}`,
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${dataDetailService?.breadcrumb?.[2].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailService?.breadcrumb?.[2].url}`,
						},
						{
							"@type": "ListItem",
							position: 4,
							name: `${dataDetailService?.breadcrumb?.[3].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailService?.breadcrumb?.[3].url}`,
						},
					],
				},
				keyword: `${dataDetailService.pageTitle}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			},
		};
	},
};

export default ServiceDetailLoader;

export const ServiceDetailLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/:group(spaone|barbershop|massage-tai-nha|lay-ray-tai-tai-nha|makeup-tai-nha|hairstylist-tai-nha|nail-tai-nha|skin-care-tai-nha|wax-tai-nha|tri-lieu-tai-nha|nha-cua-tai-nha|activities-tai-nha|fitness-tai-nha|nha-khoa-tai-nha|thu-cung-tai-nha|eyelash-eyebrow-tai-nha|tham-my-vien-tai-nha|phong-kham-tai-nha|khach-san-tai-nha|da-mat-tai-nha|me-va-be-tai-nha|massage-lay-ray-tai-tai-nha|nail-eyelash-eyebrow-tai-nha|makeup-hairstylist-tai-nha|wax-tai-nha|massage|lay-ray-tai|makeup|hairstylist|nail|skin-care|wax|tri-lieu|nha-cua|activities|fitness|nha-khoa|thu-cung|eyelash-eyebrow|tham-my-vien|phong-kham|khach-san|da-mat|me-va-be|massage-lay-ray-tai|nail-eyelash-eyebrow|makeup-hairstylist|wax|massage-tai-spa|lay-ray-tai-tai-spa|makeup-tai-spa|hairstylist-tai-spa|nail-tai-spa|skin-care-tai-spa|wax-tai-spa|tri-lieu-tai-spa|nha-cua-tai-spa|activities-tai-spa|fitness-tai-spa|nha-khoa-tai-spa|thu-cung-tai-spa|eyelash-eyebrow-tai-spa|tham-my-vien-tai-spa|phong-kham-tai-spa|khach-san-tai-spa|da-mat-tai-spa|me-va-be-tai-spa|massage-lay-ray-tai-tai-spa|nail-eyelash-eyebrow-tai-spa|makeup-hairstylist-tai-spa|wax-tai-spa|tro-ly-tai-nha)/:link/:servicelink",
	loader: async (path: string, params: any, url?: string) => {
		const lang = params.lang || "vi";
		let start = new Date();

		let filterStar = null;
		let page = 1;
		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);

			filterStar = urlParams.get("filterStar");
			const pageParam = urlParams.get("page");
			if (filterStar || pageParam) {
				page = Number(pageParam) || 1;
			}
		}

		let { dataDetailService, rawDetailService } = await DetailServiceSSR(params?.group, params?.servicelink, lang);
		let { dataReviewService, rawReviewService, totalReviewService } = await ReviewStaffv2SSR(
			dataDetailService?.staffId,
			Number(page) || 1,
			PERPAGE.Home,
			0,
			0,
			filterStar || "",
			dataDetailService?.serviceStaffId
		);

		const totalPages = Math.ceil((totalReviewService || 0) / PERPAGE.PerPage);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `$${environments.domainRoot}/${lang}/${params?.group}/${params.link}/${params.servicelink}`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};

		let meta = {};
		if (lang === "vi") {
			meta = {
				title: `${dataDetailService.pageTitle}`,
				description: `${dataDetailService.serviceGroup} ${dataDetailService.staffService?.description}`,
				ogTitle: `${dataDetailService.pageTitle}`,
				ogDescription: `${dataDetailService.serviceGroup} ${dataDetailService.staffService?.description}`,
				ogImage: `${
					dataDetailService.staffService?.images?.[0]?.path ||
					dataDetailService.staffService?.staff?.user?.urlImage
				}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
				ogSiteName: `${dataDetailService.pageTitle}`,
				canonical: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
				hreflang: [
					{
						lang: "x-default",
						url: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "vi",
						url: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "en",
						url: `${environments.domainRoot}/en/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "ko",
						url: `${environments.domainRoot}/kr/${params?.group}/${params.link}/${params.servicelink}`,
					},
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${dataDetailService?.breadcrumb?.[0].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailService?.breadcrumb?.[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${dataDetailService?.breadcrumb?.[1].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailService?.breadcrumb?.[1].url}`,
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${dataDetailService?.breadcrumb?.[2].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailService?.breadcrumb?.[2].url}`,
						},
						{
							"@type": "ListItem",
							position: 4,
							name: `${dataDetailService?.breadcrumb?.[3].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailService?.breadcrumb?.[3].url}`,
						},
					],
				},
				keyword: `${dataDetailService.pageTitle}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			};
		} else if (lang === "en") {
			meta = {
				title: `${dataDetailService.pageTitle}`,
				description: `${dataDetailService.serviceGroup} ${dataDetailService.staffService?.description}`,
				ogTitle: `${dataDetailService.pageTitle}`,
				ogDescription: `${dataDetailService.serviceGroup} ${dataDetailService.staffService?.description}`,
				ogImage: `${
					dataDetailService.staffService?.images?.[0]?.path ||
					dataDetailService.staffService?.staff?.user?.urlImage
				}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/${params?.group}/${params.link}/${params.servicelink}`,
				ogSiteName: `${dataDetailService.pageTitle}`,
				canonical: `${environments.domainRoot}/en/${params?.group}/${params.link}/${params.servicelink}`,
				hreflang: [
					{
						lang: "x-default",
						url: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "vi",
						url: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "en",
						url: `${environments.domainRoot}/en/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "ko",
						url: `${environments.domainRoot}/kr/${params?.group}/${params.link}/${params.servicelink}`,
					},
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${dataDetailService?.breadcrumb?.[0].label}`,
							item: `${environments.domainRoot}/en/${dataDetailService?.breadcrumb?.[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${dataDetailService?.breadcrumb?.[1].label}`,
							item: `${environments.domainRoot}/en/${dataDetailService?.breadcrumb?.[1].url}`,
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${dataDetailService?.breadcrumb?.[2].label}`,
							item: `${environments.domainRoot}/en/${dataDetailService?.breadcrumb?.[2].url}`,
						},
						{
							"@type": "ListItem",
							position: 4,
							name: `${dataDetailService?.breadcrumb?.[3].label}`,
							item: `${environments.domainRoot}/en/${dataDetailService?.breadcrumb?.[3].url}`,
						},
					],
				},
				keyword: `${dataDetailService.pageTitle}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			};
		} else if (lang === "kr") {
			meta = {
				title: `${dataDetailService.pageTitle}`,
				description: `${dataDetailService.serviceGroup} ${dataDetailService.staffService?.description}`,
				ogTitle: `${dataDetailService.pageTitle}`,
				ogDescription: `${dataDetailService.serviceGroup} ${dataDetailService.staffService?.description}`,
				ogImage: `${
					dataDetailService.staffService?.images?.[0]?.path ||
					dataDetailService.staffService?.staff?.user?.urlImage
				}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/${params?.group}/${params.link}/${params.servicelink}`,
				ogSiteName: `${dataDetailService.pageTitle}`,
				canonical: `${environments.domainRoot}/kr/${params?.group}/${params.link}/${params.servicelink}`,
				hreflang: [
					{
						lang: "x-default",
						url: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "vi",
						url: `${environments.domainRoot}/vi/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "en",
						url: `${environments.domainRoot}/en/${params?.group}/${params.link}/${params.servicelink}`,
					},
					{
						lang: "ko",
						url: `${environments.domainRoot}/kr/${params?.group}/${params.link}/${params.servicelink}`,
					},
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${dataDetailService?.breadcrumb?.[0].label}`,
							item: `${environments.domainRoot}/kr/${dataDetailService?.breadcrumb?.[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${dataDetailService?.breadcrumb?.[1].label}`,
							item: `${environments.domainRoot}/kr/${dataDetailService?.breadcrumb?.[1].url}`,
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${dataDetailService?.breadcrumb?.[2].label}`,
							item: `${environments.domainRoot}/kr/${dataDetailService?.breadcrumb?.[2].url}`,
						},
						{
							"@type": "ListItem",
							position: 4,
							name: `${dataDetailService?.breadcrumb?.[3].label}`,
							item: `${environments.domainRoot}/kr/${dataDetailService?.breadcrumb?.[3].url}`,
						},
					],
				},
				keyword: `${dataDetailService.pageTitle}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
			};
		}

		return {
			data: {
				dataDetailService: dataDetailService,
				dataReviewService: dataReviewService,
				totalReviewService: totalReviewService,
			},
			raw: { dataDetailService: rawDetailService, dataReviewService: rawReviewService },
			meta,
		};
	},
};
