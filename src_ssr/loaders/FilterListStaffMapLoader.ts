// import { UrlAddressSSR } from "../../src/services/AllAddressService";
import environments from "../../src/environment";
import BannerService from "../../src/services/BannerService";
import ProductService from "../../src/services/ProductService";
import {
	ListStaffMapSSR,
	TagMapSSR,
	UrlAddressSSR,
	getStaffServiceSSR,
	getTopServiceSSR,
} from "../../src/services/StaffService";
import { removeVietnameseTones } from "../../src/views/hooks/useUnMark";
import { PERPAGE } from "../../src/views/pages/orderManagement/hook/useGetListHook";
import { DataLoaderItem } from "../data-loader";
import util from "util";
import { TypeUser } from "./HomeLoader";

const FilterListStaffMapLoader: DataLoaderItem = {
	path: "/dia-diem/:link",
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

		let filterGender = null;
		let filterPrice = null;
		let filterStar = null;
		let page = 1;
		let hasFilter = null;

		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);
			filterGender = urlParams.get("filterGender");
			filterPrice = urlParams.get("filterPrice");
			filterStar = urlParams.get("filterStar");
			const pageParam = urlParams.get("page");

			if (filterGender || filterPrice || filterStar || pageParam) {
				page = Number(pageParam) || 1;
				hasFilter = true;
			}
		}

		const listStaffResult = await ListStaffMapSSR(
			PERPAGE.PerPage50,
			Number(page) || 1,
			params?.link,
			filterGender,
			filterPrice,
			filterStar,
			lang
		);
		
		const {
			dataListStaffAtHome,
			rawListStaffAtHome,
			pageType,
			breadcrumb,
			pageTitle,
			labelData,
			totalData,
			lat,
			lng,
			fillterTag
		} = listStaffResult;
		
		const [urlAddressResult, listTag] = await Promise.all([
			UrlAddressSSR(params?.link, apartment, lang),
			TagMapSSR(fillterTag),
		]);
		
		
		
		const {
			dataUrlAddress,
			rawUrlAddress,
			dataUrl,
			dataLocationType,
		} = urlAddressResult;
		
		const {
			dataTagMapAddress,
			rawTagMap,
		} = listTag;

		const totalPages = Math.ceil((totalData || 0) / PERPAGE.PerPage50);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `${environments.domainRoot}/${lang}/${params?.link}`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};

		return {
			data: {
				dataListStaffAtHomeMap: dataListStaffAtHome,
				dataUrlAddressMap: dataUrlAddress,
				dataUrlAddress: dataUrlAddress,
				dataLocationTypeMap: dataLocationType,
				dataUrlMap: dataUrl,
				pageTypeMap: pageType,
				pageTitleStaffMap: pageTitle,
				breadcrumbStaffMap: breadcrumb,
				labelDataStaffMap: labelData,
				totalDataStaffMap: totalData,
				latDataStaffMap: lat,
				lngDataStaffMap: lng,
				dataTagMapAddressMap:dataTagMapAddress,
				fillterTagMap: fillterTag,
			},
			raw: {
				dataListStaffAtHomeMap: rawListStaffAtHome,
				dataUrlAddressMap: rawUrlAddress,
				dataUrlAddress: rawUrlAddress,
				dataTagMapAddressMap: rawTagMap,

			},
			meta: {
				title: `${rawListStaffAtHome.pageTitle}`,
				description: `${
					pageType?.includes(TypeUser.Spa)
						? "Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi"
						: labelData?.province
						? `Glow - Dịch vụ massage tại nhà. Phục vụ tận nhà - căn hộ - khách sạn. Massage tại nhà ${
								labelData?.province.name
						  }${
								labelData?.district ? ", quận " + labelData?.district.name : ""
						  }. Dịch vụ massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ `
						: "Glow - App massage tại nhà số 1 Việt Nam. Phục vụ tận nhà - căn hộ - khách sạn. Massage tại nhà Hà Nội, TPHCM, Đà Nẵng. Massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ Điển."
				}`,
				ogTitle: `${rawListStaffAtHome.pageTitle}`,
				ogDescription: `${
					pageType?.includes(TypeUser.Spa)
						? "Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi"
						: labelData?.province
						? `Glow - Dịch vụ massage tại nhà. Phục vụ tận nhà - căn hộ - khách sạn. Massage tại nhà ${
								labelData?.province.name
						  }${
								labelData?.district ? ", quận " + labelData?.district.name : ""
						  }. Dịch vụ massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ `
						: "Glow - App massage tại nhà số 1 Việt Nam. Phục vụ tận nhà - căn hộ - khách sạn. Massage tại nhà Hà Nội, TPHCM, Đà Nẵng. Massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ Điển."
				}`,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/${params?.link}`,
				ogSiteName: `${rawListStaffAtHome.pageTitle}`,
				canonical: `${environments.domainRoot}/vi/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/${params?.link}` },
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
							item: `${environments.domainRoot}/vi/${breadcrumb[1].url}`,
						},
						...(breadcrumb.length >= 3
							? [
									{
										"@type": "ListItem",
										position: 3,
										name: `${breadcrumb[2].label}`,
										item: `${environments.domainRoot}/vi/${breadcrumb[2].url}`,
									},
							  ]
							: []),
					],
				},
				GlowError: !pageTitle && true,
				...(hasFilter && { robots: "noindex" }),
				keyword: `${
					pageType?.includes(TypeUser.Spa)
						? pageTitle
						: params?.link === "massage-tai-nha"
						? labelData?.apartment?.name
							? `massage tai nha ${labelData?.apartment?.name}, massage tan noi ${labelData?.apartment?.name}`
							: labelData?.commune?.name
							? `massage tai nha ${labelData?.commune?.name}, massage tan noi ${labelData?.commune?.name}`
							: labelData?.district?.name
							? `massage tai nha ${labelData?.district?.name}, massage tan noi ${labelData?.district?.name}`
							: labelData?.province?.name
							? `massage tai nha ${labelData?.province?.name}, massage tan noi ${labelData?.province?.name}`
							: "massage tai nha, massage tan noi, dich vu massage tai nha"
						: ""
				}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
				enableScript: pageType?.includes(TypeUser.Spa) ? true : false,
			},
		};
	},
};

export default FilterListStaffMapLoader;

export const FilterListStaffLoaderMapMuti: DataLoaderItem = {
	path: "/:lang(vi|en|kr|jp|cn)/dia-diem/:link",
	loader: async (path: string, params: any, url?: string) => {
		const lang = params.lang || "vi";
		const apartment = params.apartment;
		let start = new Date();
		let filterGender = null;
		let filterPrice = null;
		let filterStar = null;
		let page = 1;
		let hasFilter = null;

		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);
			filterGender = urlParams.get("filterGender");
			filterPrice = urlParams.get("filterPrice");
			filterStar = urlParams.get("filterStar");
			const pageParam = urlParams.get("page");

			if (filterGender || filterPrice || filterStar || pageParam) {
				page = Number(pageParam) || 1;
				hasFilter = true;
			}
		}

const listStaffResult = await ListStaffMapSSR(
	PERPAGE.PerPage50,
	Number(page) || 1,
	params?.link,
	filterGender,
	filterPrice,
	filterStar,
	lang
);

const {
	dataListStaffAtHome,
	rawListStaffAtHome,
	pageType,
	breadcrumb,
	pageTitle,
	labelData,
	totalData,
	lat,
	lng,
	fillterTag
} = listStaffResult;

const [urlAddressResult, listTag] = await Promise.all([
	UrlAddressSSR(params?.link, apartment, lang),
	TagMapSSR(fillterTag),
]);



const {
	dataUrlAddress,
	rawUrlAddress,
	dataUrl,
	dataLocationType,
} = urlAddressResult;

const {
	dataTagMapAddress,
	rawTagMap,
} = listTag;


		const totalPages = Math.ceil((totalData || 0) / PERPAGE.PerPage50);

		const buildUrl = (pageNum: number) => {
			const baseUrl = `${environments.domainRoot}/${lang}/${params?.link}`;
			const urlParams = new URLSearchParams(url?.split("?")[1] || "");
			urlParams.set("page", pageNum.toString());
			return `${baseUrl}?${urlParams.toString()}`;
		};
		let meta = {};
		if (lang === "vi") {
			meta = {
				title: `${rawListStaffAtHome.pageTitle}`,
				description: `${
					pageType?.includes(TypeUser.Spa)
						? "Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi"
						: labelData?.province
						? `Glow - Dịch vụ massage tại nhà. Phục vụ tận nhà - căn hộ - khách sạn. Massage tại nhà ${
								labelData?.province.name
						  }${
								labelData?.district ? ", quận " + labelData?.district.name : ""
						  }. Dịch vụ massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ `
						: "Glow - App massage tại nhà số 1 Việt Nam. Phục vụ tận nhà - căn hộ - khách sạn. Massage tại nhà Hà Nội, TPHCM, Đà Nẵng. Massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ Điển."
				}`,
				ogTitle: `${rawListStaffAtHome.pageTitle}`,
				ogDescription: `${
					pageType?.includes(TypeUser.Spa)
						? "Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi"
						: labelData?.province
						? `Glow - Dịch vụ massage tại nhà. Phục vụ tận nhà - căn hộ - khách sạn. Massage tại nhà ${
								labelData?.province.name
						  }${
								labelData?.district ? ", quận " + labelData?.district.name : ""
						  }. Dịch vụ massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ `
						: "Glow - App massage tại nhà số 1 Việt Nam. Phục vụ tận nhà - căn hộ - khách sạn. Massage tại nhà Hà Nội, TPHCM, Đà Nẵng. Massage tận nơi, matxa tại nhà, matxa tận nơi. Đa dạng loại hình massage thư giãn: Massage Aroma, Massage Thái, Massage Dầu, Massage Thuỵ Điển."
				}`,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/${params?.link}`,
				ogSiteName: `${rawListStaffAtHome.pageTitle}`,
				canonical: `${environments.domainRoot}/vi/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/${params?.link}` },
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
							item: `${environments.domainRoot}/vi/${breadcrumb[1].url}`,
						},
						...(breadcrumb.length >= 3
							? [
									{
										"@type": "ListItem",
										position: 3,
										name: `${breadcrumb[2].label}`,
										item: `${environments.domainRoot}/vi/${breadcrumb[2].url}`,
									},
							  ]
							: []),
					],
				},
				GlowError: !pageTitle && true,
				...(hasFilter && { robots: "noindex" }),
				keyword: `${
					pageType?.includes(TypeUser.Spa)
						? pageTitle
						: params?.link === "massage-tai-nha"
						? labelData?.apartment?.name
							? `massage tai nha ${labelData?.apartment?.name}, massage tan noi ${labelData?.apartment?.name}`
							: labelData?.commune?.name
							? `massage tai nha ${labelData?.commune?.name}, massage tan noi ${labelData?.commune?.name}`
							: labelData?.district?.name
							? `massage tai nha ${labelData?.district?.name}, massage tan noi ${labelData?.district?.name}`
							: labelData?.province?.name
							? `massage tai nha ${labelData?.province?.name}, massage tan noi ${labelData?.province?.name}`
							: "massage tai nha, massage tan noi, dich vu massage tai nha"
						: ""
				}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
				enableScript: pageType?.includes(TypeUser.Spa) ? true : false,
			};
		} else if (lang === "en") {
			meta = {
				title: `${rawListStaffAtHome.pageTitle}`,
				description: `${
					pageType?.includes(TypeUser.Spa)
						? "Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions"
						: labelData?.province
						? `Glow - App to book massage at home No. 1 in Vietnam. Serving at home - apartment - hotel. Massage at home ${
								labelData?.province.name
						  }${
								labelData?.district
									? ", Massage at home in " + labelData?.district.name + " district"
									: ""
						  }.`
						: "Glow - No. 1 home massage booking app in Vietnam. Service at home - apartment - hotel. Home massage in Hanoi, Ho Chi Minh City, Da Nang. Home massage, home massage, home massage. Various types of massage: Aroma Massage, Thai Massage, Oil Massage, Swedish Massage."
				}`,
				ogTitle: `${rawListStaffAtHome.pageTitle}`,
				ogDescription: `${
					pageType?.includes(TypeUser.Spa)
						? "Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions"
						: labelData?.province
						? `Glow - App to book massage at home No. 1 in Vietnam. Serving at home - apartment - hotel. Massage at home ${
								labelData?.province.name
						  }${
								labelData?.district
									? ", Massage at home in " + labelData?.district.name + " district"
									: ""
						  }.`
						: "Glow - No. 1 home massage booking app in Vietnam. Service at home - apartment - hotel. Home massage in Hanoi, Ho Chi Minh City, Da Nang. Home massage, home massage, home massage. Various types of massage: Aroma Massage, Thai Massage, Oil Massage, Swedish Massage."
				}`,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/${params?.link}`,
				ogSiteName: `${rawListStaffAtHome.pageTitle}`,
				canonical: `${environments.domainRoot}/en/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/${params?.link}` },
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
							item: `${environments.domainRoot}/en/${breadcrumb[1].url}`,
						},
						...(breadcrumb.length >= 3
							? [
									{
										"@type": "ListItem",
										position: 3,
										name: `${breadcrumb[2].label}`,
										item: `${environments.domainRoot}/en/${breadcrumb[2].url}`,
									},
							  ]
							: []),
					],
				},
				GlowError: !pageTitle && true,
				...(hasFilter && { robots: "noindex" }),
				keyword: `${
					pageType?.includes(TypeUser.Spa)
						? pageTitle
						: params?.link === "massage-tai-nha"
						? labelData?.apartment?.name
							? `home massage ${labelData?.apartment?.name}, hotel massage ${labelData?.apartment?.name}`
							: labelData?.commune?.name
							? `home massage ${labelData?.commune?.name}, hotel massage ${labelData?.commune?.name}`
							: labelData?.district?.name
							? `home massage ${labelData?.district?.name}, hotel massage ${labelData?.district?.name}`
							: labelData?.province?.name
							? `home massage ${labelData?.province?.name}, hotel massage ${labelData?.province?.name}`
							: "home massage, massage at home, home massage service, massage home delivery"
						: ""
				}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
				enableScript: pageType?.includes(TypeUser.Spa) ? true : false,
			};
		} else if (lang === "kr") {
			meta = {
				title: `${rawListStaffAtHome.pageTitle}`,
				description: `${
					pageType?.includes(TypeUser.Spa)
						? "베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요"
						: labelData?.province
						? `Glow - 집에서 마사지를 예약하는 앱 베트남 1위. 집에서 - 아파트 - 호텔에서 서비스. ${
								labelData?.province.name
						  }에서 집에서 마사지${
								labelData?.district ? ", " + labelData?.district?.name + " 지구에서 집에서 마사지" : ""
						  }.`
						: "Glow - 베트남 집에서 마사지 예약 앱 1위. 집-아파트-호텔에서 서비스를 제공합니다. 하노이, 호치민, 다낭에서 집에서 마사지를 받으세요. 현장 마사지, 현장 마사지, 현장 마사지. 다양한 마사지 종류: 아로마 마사지, 타이 마사지, 오일 마사지, 스웨덴 마사지."
				}`,
				ogTitle: `${rawListStaffAtHome.pageTitle}`,
				ogDescription: `${
					pageType?.includes(TypeUser.Spa)
						? "베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요"
						: labelData?.province
						? `Glow - 집에서 마사지를 예약하는 앱 베트남 1위. 집에서 - 아파트 - 호텔에서 서비스. ${
								labelData?.province.name
						  }에서 집에서 마사지${
								labelData?.district ? ", " + labelData?.district?.name + " 지구에서 집에서 마사지" : ""
						  }.`
						: "Glow - 베트남 집에서 마사지 예약 앱 1위. 집-아파트-호텔에서 서비스를 제공합니다. 하노이, 호치민, 다낭에서 집에서 마사지를 받으세요. 현장 마사지, 현장 마사지, 현장 마사지. 다양한 마사지 종류: 아로마 마사지, 타이 마사지, 오일 마사지, 스웨덴 마사지."
				}`,
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/${params?.link}`,
				ogSiteName: `${rawListStaffAtHome.pageTitle}`,
				canonical: `${environments.domainRoot}/kr/${params?.link}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/${params?.link}` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/${params?.link}` },
					{ lang: "en", url: `${environments.domainRoot}/en/${params?.link}` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/${params?.link}` },
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
							item: `${environments.domainRoot}/kr/${breadcrumb[1].url}`,
						},
						...(breadcrumb.length >= 3
							? [
									{
										"@type": "ListItem",
										position: 3,
										name: `${breadcrumb[2].label}`,
										item: `${environments.domainRoot}/kr/${breadcrumb[2].url}`,
									},
							  ]
							: []),
					],
				},
				GlowError: !pageTitle && true,
				...(hasFilter && { robots: "noindex" }),
				keyword: `${
					pageType?.includes(TypeUser.Spa)
						? pageTitle
						: params?.link === "massage-tai-nha"
						? labelData?.apartment?.name
							? `${labelData?.apartment?.name} 출장 마사지, ${labelData?.apartment?.name} 집과 호텔에서 마사지`
							: labelData?.commune?.name
							? `${labelData?.commune?.name} 출장 마사지, ${labelData?.commune?.name} 집과 호텔에서 마사지`
							: labelData?.district?.name
							? `${labelData?.district?.name} 출장 마사지, ${labelData?.district?.name} 집과 호텔에서 마사지`
							: labelData?.province?.name
							? `${labelData?.province?.name} 출장 마사지, ${labelData?.province?.name} 집과 호텔에서 마사지`
							: "출장 마사지, 집과 호텔에서 마사지"
						: ""
				}`,
				prev: page > 1 ? buildUrl(page - 1) : "",
				next: page < totalPages ? buildUrl(page + 1) : "",
				enableScript: pageType?.includes(TypeUser.Spa) ? true : false,
			};
		}

		return {
			data: {
				dataListStaffAtHomeMap: dataListStaffAtHome,
				dataUrlAddressMap: dataUrlAddress,
				dataUrlAddress: dataUrlAddress,
				dataLocationTypeMap: dataLocationType,
				dataUrlMap: dataUrl,
				pageTypeMap: pageType,
				pageTitleStaffMap: pageTitle,
				breadcrumbStaffMap: breadcrumb,
				labelDataStaffMap: labelData,
				totalDataStaffMap: totalData,
				latDataStaffMap: lat,
				lngDataStaffMap: lng,
				dataTagMapAddressMap:dataTagMapAddress,
				fillterTagMap: fillterTag,
			},
			raw: {
				dataListStaffAtHomeMap: rawListStaffAtHome,
				dataUrlAddressMap: rawUrlAddress,
				dataUrlAddress: rawUrlAddress,
				dataTagMapAddressMap: rawTagMap,
			},
			meta,
		};
	},
};
