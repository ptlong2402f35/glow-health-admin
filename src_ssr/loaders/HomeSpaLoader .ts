import environments from "../../src/environment";
import BannerService from "../../src/services/BannerService";
import ProductService from "../../src/services/ProductService";
import { getStaffServiceSSR, getTopServiceSSR } from "../../src/services/StaffService";
import { TranslateLabels } from "../../src/views/controls/layout/content/MultiLanguge";
import { DataLoaderItem } from "../data-loader";

const HomeSpaLoader: DataLoaderItem = {
	path: "/dia-diem",
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

		const [serviceGroupResult, bannerViewResult, StaffServiceHotDeal, TopService] = await Promise.all([
			ProductService.GetServiceGroupAllNewSSR(),
			BannerService.getListBannerViewSSR(),
			getStaffServiceSSR(10, 1, {
				isProgramActive: true,
				sortDistance: true,
				sortDistancePriority: 2,
				sortReducedPrice: true,
				sortReducedPricePriority: 1,
				staffType: 3,
			}),
			getTopServiceSSR(),
		]);

		const { dataServiceGroup, rawServiceGroup } = serviceGroupResult;
		const { dataBannerView, rawBannerView } = bannerViewResult;
		const { dataStaffServiceSSR, rawStaffServiceSSR, getAllUrl } = StaffServiceHotDeal;
		const { dataTopService, rawTopService } = TopService;

		let results = await Promise.all(
			dataTopService?.map(async (item) => {
				const { params } = item;
				const filteredParams = Object.fromEntries(
					Object.entries(params || {}).filter(([_, value]) => value !== null)
				);
				const { dataStaffServiceSSR, rawStaffServiceSSR, getAllUrl } = await getStaffServiceSSR(
					10,
					1,
					filteredParams
				);
				return {
					dataStaffServiceSSR: dataStaffServiceSSR,
					rawStaffServiceSSR: rawStaffServiceSSR,
					getAllUrl: getAllUrl,
				};
			})
		);

		const dataStaffList = results.map((item) => item.dataStaffServiceSSR);
		const rawStaffList = results.map((item) => item.rawStaffServiceSSR);
		const getAllUrlList = results.map((item) => item.getAllUrl);

		return {
			data: {
				dataServiceGroup: dataServiceGroup,
				dataBannerView: dataBannerView,
				dataStaffServiceSSR: dataStaffServiceSSR,
				dataTopService: dataTopService,
				dataStaffServiceLists: dataStaffList,
				getAllUrlList: getAllUrlList,
				getAllUrl: getAllUrl,
			},
			raw: {
				dataServiceGroup: rawServiceGroup,
				dataBannerView: rawBannerView,
				dataStaffServiceSSR: rawStaffServiceSSR,
				dataTopService: rawTopService,
				dataStaffServiceLists: rawStaffList,
			},
			meta: {
				title: "Glow - Khám phá hàng nghìn dịch vụ chất lượng, địa điểm uy tín",
				description:
					"Glow - Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày & phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Glow - Khám phá hàng nghìn dịch vụ chất lượng, địa điểm uy tín",
				ogDescription:
					"Glow - Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày & phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/dia-diem`,
				// ogSiteName: "Glow - Khám phá hàng nghìn dịch vụ chất lượng, địa điểm uy tín",
				canonical: `${environments.domainRoot}/vi/dia-diem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dia-diem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dia-diem` },
					{ lang: "en", url: `${environments.domainRoot}/en/dia-diem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dia-diem` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${TranslateLabels["vi"]?.HOME_PAGE}`,
							item: `${environments.domainRoot}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${TranslateLabels["vi"]?.LOCATION}`,
							item: `${environments.domainRoot}/vi/dia-diem`,
						},
					],
				},
			},
		};
	},
};

export default HomeSpaLoader;

export const HomeSpaLoaderMuti: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/dia-diem",
	loader: async (path: string, params: any) => {
		const lang = params.lang || "vi";
		let start = new Date();

		const [serviceGroupResult, bannerViewResult, StaffServiceHotDeal, TopService] = await Promise.all([
			ProductService.GetServiceGroupAllNewSSR(lang),
			BannerService.getListBannerViewSSR(lang),
			getStaffServiceSSR(
				10,
				1,
				{
					isProgramActive: true,
					sortDistance: true,
					sortDistancePriority: 2,
					sortReducedPrice: true,
					sortReducedPricePriority: 1,
					staffType: 3,
				},
				lang
			),
			getTopServiceSSR(lang),
		]);

		const { dataServiceGroup, rawServiceGroup } = serviceGroupResult;
		const { dataBannerView, rawBannerView } = bannerViewResult;
		const { dataStaffServiceSSR, rawStaffServiceSSR, getAllUrl } = StaffServiceHotDeal;
		const { dataTopService, rawTopService } = TopService;

		let results = await Promise.all(
			dataTopService?.map(async (item) => {
				const { params } = item;
				const filteredParams = Object.fromEntries(
					Object.entries(params || {}).filter(([_, value]) => value !== null)
				);
				const { dataStaffServiceSSR, rawStaffServiceSSR, getAllUrl } = await getStaffServiceSSR(
					10,
					1,
					filteredParams
				);
				return {
					dataStaffServiceSSR: dataStaffServiceSSR,
					rawStaffServiceSSR: rawStaffServiceSSR,
					getAllUrl: getAllUrl,
				};
			})
		);

		const dataStaffList = results.map((item) => item.dataStaffServiceSSR);
		const rawStaffList = results.map((item) => item.rawStaffServiceSSR);
		const getAllUrlList = results.map((item) => item.getAllUrl);

		let meta = {};
		if (lang === "vi") {
			meta = {
				title: "Glow - Khám phá hàng nghìn dịch vụ chất lượng, địa điểm uy tín",
				description:
					"Glow - Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày & phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Glow - Khám phá hàng nghìn dịch vụ chất lượng, địa điểm uy tín",
				ogDescription:
					"Glow - Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày & phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/dia-diem/`,
				// ogSiteName: "Glow - Khám phá hàng nghìn dịch vụ chất lượng, địa điểm uy tín",
				canonical: `${environments.domainRoot}/vi/dia-diem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dia-diem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dia-diem` },
					{ lang: "en", url: `${environments.domainRoot}/en/dia-diem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dia-diem` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${TranslateLabels[lang]?.HOME_PAGE}`,
							item: `${environments.domainRoot}`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${TranslateLabels[lang]?.LOCATION}`,
							item: `${environments.domainRoot}/vi/dia-diem`,
						},
					],
				},
			};
		} else if (lang === "en") {
			meta = {
				title: "Glow - Discover thousands of high-quality services and reputable locations",
				description:
					"Glow - Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing & clinics in Vietnam and book with promotions",
				ogTitle: "Glow - Discover thousands of high-quality services and reputable locations",
				ogDescription:
					"Glow - Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing & clinics in Vietnam and book with promotions",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/dia-diem`,
				// ogSiteName: "Glow - Discover thousands of high-quality services and reputable locations",
				canonical: `${environments.domainRoot}/en/dia-diem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dia-diem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dia-diem` },
					{ lang: "en", url: `${environments.domainRoot}/en/dia-diem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dia-diem` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${TranslateLabels[lang]?.HOME_PAGE}`,
							item: `${environments.domainRoot}/en`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${TranslateLabels[lang]?.LOCATION}`,
							item: `${environments.domainRoot}/en/dia-diem`,
						},
					],
				},
			};
		} else if (lang === "kr") {
			meta = {
				title: "Glow - 수천 개의 고품질 서비스와 신뢰할 수 있는 장소를 발견하세요",
				description:
					"Glow - 베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogTitle: "Glow - 수천 개의 고품질 서비스와 신뢰할 수 있는 장소를 발견하세요",
				ogDescription:
					"Glow - 베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/dia-diem`,
				// ogSiteName: "Glow - 수천 개의 고품질 서비스와 신뢰할 수 있는 장소를 발견하세요",
				canonical: `${environments.domainRoot}/kr/dia-diem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dia-diem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dia-diem` },
					{ lang: "en", url: `${environments.domainRoot}/en/dia-diem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dia-diem` },
				],
				structuredData: {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: `${TranslateLabels[lang]?.HOME_PAGE}`,
							item: `${environments.domainRoot}/kr`,
						},
						{
							"@type": "ListItem",
							position: 2,
							name: `${TranslateLabels[lang]?.LOCATION}`,
							item: `${environments.domainRoot}/kr/dia-diem`,
						},
					],
				},
			};
		}

		return {
			data: {
				dataServiceGroup: dataServiceGroup,
				dataBannerView: dataBannerView,
				dataStaffServiceSSR: dataStaffServiceSSR,
				dataTopService: dataTopService,
				dataStaffServiceLists: dataStaffList,
				getAllUrlList: getAllUrlList,
				getAllUrl: getAllUrl,
			},
			raw: {
				dataServiceGroup: rawServiceGroup,
				dataBannerView: rawBannerView,
				dataStaffServiceSSR: rawStaffServiceSSR,
				dataTopService: rawTopService,
				dataStaffServiceLists: rawStaffList,
			},
			meta,
		};
	},
};
