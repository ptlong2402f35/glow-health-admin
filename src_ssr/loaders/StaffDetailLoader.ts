import environments from "../../src/environment";
import BlogService, { getBlogDetailSSR, getBlogDetailSSRRickLink } from "../../src/services/BlogService";
import { DetailStaffSSR, getStaffListvSuggestSSR, ReviewStaffv2SSR } from "../../src/services/StaffService";
import { PERPAGE } from "../../src/views/pages/orderManagement/hook/useGetListHook";
import { DataLoaderItem, DataLoaderResponse } from "../data-loader";

const dayMapping: Record<string, string> = {
	"thứ 2": "Monday", "Thứ 2": "Monday", "Monday": "Monday",
	"thứ 3": "Tuesday", "Thứ 3": "Tuesday", "Tuesday": "Tuesday",
	"thứ 4": "Wednesday", "Thứ 4": "Wednesday", "Wednesday": "Wednesday",
	"thứ 5": "Thursday", "Thứ 5": "Thursday", "Thursday": "Thursday",
	"thứ 6": "Friday", "Thứ 6": "Friday", "Friday": "Friday",
	"thứ 7": "Saturday", "Thứ 7": "Saturday", "Saturday": "Saturday",
	"chủ nhật": "Sunday", "Chủ nhật": "Sunday", "Sunday": "Sunday"
  };
  
  const normalizeTime = (time: string): string => {
	const match = time.match(/\d+/); 
	const hour = match ? match[0].padStart(2, "0") : "00";
	return `${hour}:00`;
  };
  
  const convertWorkTimeToSchema = (workTime: string) => {
	let parsedWorkTime: any[];
	try {
	  parsedWorkTime = JSON.parse(workTime);
	} catch (error) {
	  console.error("Lỗi parse JSON:", error);
	  return [];
	}
  
	const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
	return parsedWorkTime.map((item) => {
	  const fromDay = dayMapping[item.date.from as keyof typeof dayMapping] || "Monday"; 
	  const toDay = dayMapping[item.date.to as keyof typeof dayMapping] || fromDay;
  
	  const fromIndex = weekDays.indexOf(fromDay);
	  const toIndex = weekDays.indexOf(toDay);
	  const dayRange = fromIndex <= toIndex 
		? weekDays.slice(fromIndex, toIndex + 1) 
		: weekDays.slice(fromIndex).concat(weekDays.slice(0, toIndex + 1));
  
	  return {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: dayRange,
		opens: normalizeTime(item.hour.from), 
		closes: normalizeTime(item.hour.to) 
	  };
	});
  };
  
  

const StaffDetailLoader: DataLoaderItem = {
	path: "/:group(spaone|barbershop|massage-tai-nha|lay-ray-tai-tai-nha|makeup-tai-nha|hairstylist-tai-nha|nail-tai-nha|skin-care-tai-nha|wax-tai-nha|tri-lieu-tai-nha|nha-cua-tai-nha|activities-tai-nha|fitness-tai-nha|nha-khoa-tai-nha|thu-cung-tai-nha|eyelash-eyebrow-tai-nha|tham-my-vien-tai-nha|phong-kham-tai-nha|khach-san-tai-nha|da-mat-tai-nha|me-va-be-tai-nha|massage-lay-ray-tai-tai-nha|nail-eyelash-eyebrow-tai-nha|makeup-hairstylist-tai-nha|wax-tai-nha|massage|lay-ray-tai|makeup|hairstylist|nail|skin-care|wax|tri-lieu|nha-cua|activities|fitness|nha-khoa|thu-cung|eyelash-eyebrow|tham-my-vien|phong-kham|khach-san|da-mat|me-va-be|massage-lay-ray-tai|nail-eyelash-eyebrow|makeup-hairstylist|wax|massage-tai-spa|lay-ray-tai-tai-spa|makeup-tai-spa|hairstylist-tai-spa|nail-tai-spa|skin-care-tai-spa|wax-tai-spa|tri-lieu-tai-spa|nha-cua-tai-spa|activities-tai-spa|fitness-tai-spa|nha-khoa-tai-spa|thu-cung-tai-spa|eyelash-eyebrow-tai-spa|tham-my-vien-tai-spa|phong-kham-tai-spa|khach-san-tai-spa|da-mat-tai-spa|me-va-be-tai-spa|massage-lay-ray-tai-tai-spa|nail-eyelash-eyebrow-tai-spa|makeup-hairstylist-tai-spa|wax-tai-spa|makeup-nail-wax|makeup-nail-wax-tai-nha|tro-ly-tai-nha|lay-ray-tai-massage-tai-nha)/:link",
	loader: async (path: string, params: any, url?: string) => {
		let start = new Date();
		if (environments.redirect301) {
			return {
				redirectStatus: {
					redirect: true,
					urlRedirect: "/vi" + url
				},
				data: undefined,
				raw: undefined,
				meta: undefined
			} as DataLoaderResponse;
		}
		
		const lang = params.lang || "vi";

		let { dataDetailStaff, rawDetailStaff } = await DetailStaffSSR(params?.group, params?.link);
		const serviceGroupsString = dataDetailStaff.serviceGroups ? dataDetailStaff.serviceGroups.join(";") : "";

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

		const [staffListSuggestResponse, reviewServiceResponse] = await Promise.all([
			getStaffListvSuggestSSR(
				11,
				1,
				"",
				params?.lang,
				dataDetailStaff?.district?.id,
				serviceGroupsString,
				dataDetailStaff?.type
			),
			ReviewStaffv2SSR(dataDetailStaff?.id || 0, Number(page) || 1, PERPAGE.PerPage, 0, 0, filterStar || ""),
		]);

		const { dataStaffListSuggestv2, rawStaffListSuggestv2 } = staffListSuggestResponse;
		const { dataReviewService, rawReviewService, totalReviewService } = reviewServiceResponse;
		const totalPages = Math.ceil((totalReviewService || 0) / PERPAGE.PerPage);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `${environments.domainRoot}/${lang}/${params?.group}/${params?.link}`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};
		return {
			data: {
				dataDetailStaff: dataDetailStaff,
				dataStaffListSuggestv2: dataStaffListSuggestv2,
				dataReviewStaff: dataReviewService,
				totalReviewStaff: totalReviewService,
			},
			raw: {
				dataDetailStaff: rawDetailStaff,
				dataStaffListSuggestv2: rawStaffListSuggestv2,
				dataReviewStaff: rawReviewService,
			},
			meta: {
				title: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				description: dataDetailStaff.type === 3 && dataDetailStaff.description 
				? dataDetailStaff.description 
				: `Glow - ${
					dataDetailStaff.name
				} - Dịch vụ massage tại nhà. Phục vụ tận nhà - căn hộ - khách sạn. ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", quận" + dataDetailStaff?.district.name
				}. Dịch vụ massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ Điển.`,
				ogTitle: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				ogDescription:dataDetailStaff.type === 3 && dataDetailStaff.description 
				? dataDetailStaff.description 
				: `Glow - ${
					dataDetailStaff.name
				} - Dịch vụ massage tại nhà. Phục vụ tận nhà - căn hộ - khách sạn. ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", quận" + dataDetailStaff?.district.name
				}. Dịch vụ massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ Điển.`,
				ogImage: `${dataDetailStaff?.user?.urlImage}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/${params?.group}/${params?.link}`,
				ogSiteName: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				GlowError: !dataDetailStaff && true,
				canonical: `${environments.domainRoot}/vi/${params?.group}/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/${params?.group}/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/${params?.group}/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/${params?.group}/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/${params?.group}/${params?.link}` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${dataDetailStaff?.breadcrumb?.[0].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailStaff?.breadcrumb?.[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${dataDetailStaff?.breadcrumb?.[1].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailStaff?.breadcrumb?.[1].url}`,
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${dataDetailStaff?.breadcrumb?.[2].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailStaff?.breadcrumb?.[2].url}`,
						},
					],
				},
				...(hasFilter && { robots: "noindex" }),
				keyword: `${dataDetailStaff.name}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
				LocalBusiness:dataDetailStaff.type === 3 ?
				{
				  "@context": "https://schema.org",
				  "@type": "LocalBusiness",
				  name: `${dataDetailStaff?.name || dataDetailStaff?.user?.userName|| ""}`,
				  description: `${dataDetailStaff?.description || ""}`,
				  email: `${dataDetailStaff?.user?.email || ""}`,
				  telephone :`${dataDetailStaff?.user?.phone || ""}`,
				  sameAs: Object.values(dataDetailStaff?.socialMedia || {}).filter(value => value) ,
				  image: `${dataDetailStaff?.user?.urlImage || ""}`,
				  address: {
					"@type": "PostalAddress",
					streetAddress: `${dataDetailStaff?.address || ""}`,
					addressLocality: `${dataDetailStaff?.district?.name || ""}`,
					addressRegion: `${dataDetailStaff?.province?.name || ""}`,
					// "postalCode": "700000",
					// "addressCountry": "VN"
				  },
				  geo: {
					"@type": "GeoCoordinates",
					latitude: `${dataDetailStaff?.lat || ""}`,
					longitude: `${dataDetailStaff?.long || ""}`,
				  },
				  openingHoursSpecification: convertWorkTimeToSchema(dataDetailStaff?.workTime|| "[]")
				}   :undefined
				
			},
		};
	},
};

export default StaffDetailLoader;

export const StaffDetailLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/:group(spaone|barbershop|massage-tai-nha|lay-ray-tai-tai-nha|makeup-tai-nha|hairstylist-tai-nha|nail-tai-nha|skin-care-tai-nha|wax-tai-nha|tri-lieu-tai-nha|nha-cua-tai-nha|activities-tai-nha|fitness-tai-nha|nha-khoa-tai-nha|thu-cung-tai-nha|eyelash-eyebrow-tai-nha|tham-my-vien-tai-nha|phong-kham-tai-nha|khach-san-tai-nha|da-mat-tai-nha|me-va-be-tai-nha|massage-lay-ray-tai-tai-nha|nail-eyelash-eyebrow-tai-nha|makeup-hairstylist-tai-nha|wax-tai-nha|massage|lay-ray-tai|makeup|hairstylist|nail|skin-care|wax|tri-lieu|nha-cua|activities|fitness|nha-khoa|thu-cung|eyelash-eyebrow|tham-my-vien|phong-kham|khach-san|da-mat|me-va-be|massage-lay-ray-tai|nail-eyelash-eyebrow|makeup-hairstylist|wax|massage-tai-spa|lay-ray-tai-tai-spa|makeup-tai-spa|hairstylist-tai-spa|nail-tai-spa|skin-care-tai-spa|wax-tai-spa|tri-lieu-tai-spa|nha-cua-tai-spa|activities-tai-spa|fitness-tai-spa|nha-khoa-tai-spa|thu-cung-tai-spa|eyelash-eyebrow-tai-spa|tham-my-vien-tai-spa|phong-kham-tai-spa|khach-san-tai-spa|da-mat-tai-spa|me-va-be-tai-spa|massage-lay-ray-tai-tai-spa|nail-eyelash-eyebrow-tai-spa|makeup-hairstylist-tai-spa|wax-tai-spa|makeup-nail-wax|makeup-nail-wax-tai-nha|tro-ly-tai-nha|lay-ray-tai-massage-tai-nha)/:link",
	loader: async (path: string, params: any, url?: string) => {
		const lang = params.lang || "vi";
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

		let { dataDetailStaff, rawDetailStaff } = await DetailStaffSSR(params?.group, params?.link, lang);
		const serviceGroupsString = dataDetailStaff.serviceGroups ? dataDetailStaff.serviceGroups.join(";") : "";

		const [staffListSuggestResponse, reviewServiceResponse] = await Promise.all([
			getStaffListvSuggestSSR(
				11,
				1,
				"",
				params?.lang,
				dataDetailStaff?.district?.id,
				serviceGroupsString,
				dataDetailStaff?.type
			),
			ReviewStaffv2SSR(dataDetailStaff?.id || 0, Number(page) || 1, PERPAGE.PerPage, 0, 0, filterStar || ""),
		]);

		const { dataStaffListSuggestv2, rawStaffListSuggestv2 } = staffListSuggestResponse;
		const { dataReviewService, rawReviewService, totalReviewService } = reviewServiceResponse;

		const totalPages = Math.ceil((totalReviewService || 0) / PERPAGE.PerPage);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `${environments.domainRoot}/${lang}/${params?.group}/${params?.link}`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};
		let meta = {};
		if (lang === "vi") {
			meta = {
				title: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				description: dataDetailStaff.type === 3 && dataDetailStaff.description 
				? dataDetailStaff.description 
				: `Glow - ${
					dataDetailStaff.name
				} - Dịch vụ massage tại nhà. Phục vụ tận nhà - căn hộ - khách sạn. ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", quận" + dataDetailStaff?.district.name
				}. Dịch vụ massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ Điển.`,

				ogTitle: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				ogDescription: dataDetailStaff.type === 3 && dataDetailStaff.description 
				? dataDetailStaff.description 
				: `Glow - ${
					dataDetailStaff.name
				} - Dịch vụ massage tại nhà. Phục vụ tận nhà - căn hộ - khách sạn. ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", quận" + dataDetailStaff?.district.name
				}. Dịch vụ massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ Điển.`,

				ogImage: `${dataDetailStaff?.user?.urlImage}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/${params?.group}/${params?.link}`,
				ogSiteName: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				canonical: `${environments.domainRoot}/vi/${params?.group}/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/${params?.group}/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/${params?.group}/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/${params?.group}/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/${params?.group}/${params?.link}` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${dataDetailStaff?.breadcrumb?.[0].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailStaff?.breadcrumb?.[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${dataDetailStaff?.breadcrumb?.[1].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailStaff?.breadcrumb?.[1].url}`,
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${dataDetailStaff?.breadcrumb?.[2].label}`,
							item: `${environments.domainRoot}/vi/${dataDetailStaff?.breadcrumb?.[2].url}`,
						},
					],
				},
				...(hasFilter && { robots: "noindex" }),
				keyword: `${dataDetailStaff.name}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
				LocalBusiness:dataDetailStaff.type === 3 ?
				{
				  "@context": "https://schema.org",
				  "@type": "LocalBusiness",
				  name: `${dataDetailStaff?.name || dataDetailStaff?.user?.userName|| ""}`,
				  description: `${dataDetailStaff?.description || ""}`,
				  email: `${dataDetailStaff?.user?.email || ""}`,
				  telephone :`${dataDetailStaff?.user?.phone || ""}`,
				  sameAs: Object.values(dataDetailStaff?.socialMedia || {}).filter(value => value) ,
				  image: `${dataDetailStaff?.user?.urlImage || ""}`,
				  address: {
					"@type": "PostalAddress",
					streetAddress: `${dataDetailStaff?.address || ""}`,
					addressLocality: `${dataDetailStaff?.district?.name || ""}`,
					addressRegion: `${dataDetailStaff?.province?.name || ""}`,
					// "postalCode": "700000",
					// "addressCountry": "VN"
				  },
				  geo: {
					"@type": "GeoCoordinates",
					latitude: `${dataDetailStaff?.lat || ""}`,
					longitude: `${dataDetailStaff?.long || ""}`,
				  },
				  openingHoursSpecification: convertWorkTimeToSchema(dataDetailStaff?.workTime|| "[]")
				}   :undefined
			};
		} else if (lang === "en") {
			meta = {
				title: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				description: dataDetailStaff.type === 3 && dataDetailStaff.description 
				? dataDetailStaff.description 
				: `Glow - ${
					dataDetailStaff.name
				} - App to book massage at home No. 1 in Vietnam. Serving at home - apartment - hotel. ${
					dataDetailStaff.pageTitle
				}, Massage at home in ${
					dataDetailStaff?.district && dataDetailStaff?.district.name
				} district.`,
				ogTitle: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				ogDescription: dataDetailStaff.type === 3 && dataDetailStaff.description 
				? dataDetailStaff.description 
				: `Glow - ${
					dataDetailStaff.name
				} - App to book massage at home No. 1 in Vietnam. Serving at home - apartment - hotel. ${
					dataDetailStaff.pageTitle
				}, Massage at home in ${
					dataDetailStaff?.district && dataDetailStaff?.district.name
				} district.`,
				ogImage: `${dataDetailStaff?.user?.urlImage}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/${params?.group}/${params?.link}`,
				ogSiteName: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				canonical: `${environments.domainRoot}/en/${params?.group}/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/${params?.group}/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/${params?.group}/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/${params?.group}/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/${params?.group}/${params?.link}` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${dataDetailStaff?.breadcrumb?.[0].label}`,
							item: `${environments.domainRoot}/en/${dataDetailStaff?.breadcrumb?.[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${dataDetailStaff?.breadcrumb?.[1].label}`,
							item: `${environments.domainRoot}/en/${dataDetailStaff?.breadcrumb?.[1].url}`,
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${dataDetailStaff?.breadcrumb?.[2].label}`,
							item: `${environments.domainRoot}/en/${dataDetailStaff?.breadcrumb?.[2].url}`,
						},
					],
				},
				...(hasFilter && { robots: "noindex" }),
				keyword: `${dataDetailStaff.name}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
				LocalBusiness:dataDetailStaff.type === 3 ?
				{
				  "@context": "https://schema.org",
				  "@type": "LocalBusiness",
				  name: `${dataDetailStaff?.name || dataDetailStaff?.user?.userName|| ""}`,
				  description: `${dataDetailStaff?.description || ""}`,
				  email: `${dataDetailStaff?.user?.email || ""}`,
				  telephone :`${dataDetailStaff?.user?.phone || ""}`,
				  sameAs: Object.values(dataDetailStaff?.socialMedia || {}).filter(value => value) ,
				  image: `${dataDetailStaff?.user?.urlImage || ""}`,
				  address: {
					"@type": "PostalAddress",
					streetAddress: `${dataDetailStaff?.address || ""}`,
					addressLocality: `${dataDetailStaff?.district?.name || ""}`,
					addressRegion: `${dataDetailStaff?.province?.name || ""}`,
					// "postalCode": "700000",
					// "addressCountry": "VN"
				  },
				  geo: {
					"@type": "GeoCoordinates",
					latitude: `${dataDetailStaff?.lat || ""}`,
					longitude: `${dataDetailStaff?.long || ""}`,
				  },
				  openingHoursSpecification: convertWorkTimeToSchema(dataDetailStaff?.workTime|| "[]")
				}   :undefined
			};
		} else if (lang === "kr") {
			meta = {
				title: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				description: dataDetailStaff.type === 3 && dataDetailStaff.description 
				? dataDetailStaff.description 
				: `Glow - ${
					dataDetailStaff.name
				} - 집에서 마사지를 예약하는 앱 베트남 1위. 집에서 - 아파트 - 호텔에서 서비스.${
					dataDetailStaff.pageTitle
				}, ${dataDetailStaff?.district && dataDetailStaff?.district.name} 지구에서 집에서 마사지.`,
				ogTitle: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				ogDescription: dataDetailStaff.type === 3 && dataDetailStaff.description 
				? dataDetailStaff.description 
				: `Glow - ${
					dataDetailStaff.name
				} - 집에서 마사지를 예약하는 앱 베트남 1위. 집에서 - 아파트 - 호텔에서 서비스.${
					dataDetailStaff.pageTitle
				}, ${dataDetailStaff?.district && dataDetailStaff?.district.name} 지구에서 집에서 마사지.`,
				ogImage: `${dataDetailStaff?.user?.urlImage}`,
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/${params?.group}/${params?.link}`,
				ogSiteName: `${dataDetailStaff.name}: ${dataDetailStaff.pageTitle} ${
					dataDetailStaff?.district && ", " + dataDetailStaff?.district.name
				} `,
				canonical: `${environments.domainRoot}/kr/${params?.group}/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/${params?.group}/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/${params?.group}/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/${params?.group}/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/${params?.group}/${params?.link}` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${dataDetailStaff?.breadcrumb?.[0].label}`,
							item: `${environments.domainRoot}/kr/${dataDetailStaff?.breadcrumb?.[0].url}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${dataDetailStaff?.breadcrumb?.[1].label}`,
							item: `${environments.domainRoot}/kr/${dataDetailStaff?.breadcrumb?.[1].url}`,
						},
						{
							"@type": "ListItem",
							position: 3,
							name: `${dataDetailStaff?.breadcrumb?.[2].label}`,
							item: `${environments.domainRoot}/kr/${dataDetailStaff?.breadcrumb?.[2].url}`,
						},
					],
				},
				...(hasFilter && { robots: "noindex" }),
				keyword: `${dataDetailStaff.name}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
				LocalBusiness:dataDetailStaff.type === 3 ?
				{
				  "@context": "https://schema.org",
				  "@type": "LocalBusiness",
				  name: `${dataDetailStaff?.name || dataDetailStaff?.user?.userName|| ""}`,
				  description: `${dataDetailStaff?.description || ""}`,
				  email: `${dataDetailStaff?.user?.email || ""}`,
				  telephone :`${dataDetailStaff?.user?.phone || ""}`,
				  sameAs: Object.values(dataDetailStaff?.socialMedia || {}).filter(value => value) ,
				  
				  image: `${dataDetailStaff?.user?.urlImage || ""}`,
				  address: {
					"@type": "PostalAddress",
					streetAddress: `${dataDetailStaff?.address || ""}`,
					addressLocality: `${dataDetailStaff?.district?.name || ""}`,
					addressRegion: `${dataDetailStaff?.province?.name || ""}`,
					// "postalCode": "700000",
					// "addressCountry": "VN"
				  },
				  geo: {
					"@type": "GeoCoordinates",
					latitude: `${dataDetailStaff?.lat || ""}`,
					longitude: `${dataDetailStaff?.long || ""}`,
				  },
				  openingHoursSpecification: convertWorkTimeToSchema(dataDetailStaff?.workTime|| "[]")
				}   :undefined
			};
		}
		return {
			data: {
				dataDetailStaff: dataDetailStaff,
				dataStaffListSuggestv2: dataStaffListSuggestv2,
				dataReviewStaff: dataReviewService,
				totalReviewStaff: totalReviewService,
			},
			raw: {
				dataDetailStaff: rawDetailStaff,
				dataStaffListSuggestv2: rawStaffListSuggestv2,
				dataReviewStaff: rawReviewService,
			},
			meta,
		};
	},
};

