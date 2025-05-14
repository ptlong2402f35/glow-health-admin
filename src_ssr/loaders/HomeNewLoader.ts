import environments from "../../src/environment";
import BannerService from "../../src/services/BannerService";
import ProductService from "../../src/services/ProductService";
import { ListServiceHomeSSR, getStaffServiceSSR, getTopServiceSSR } from "../../src/services/StaffService";
import { DataLoaderItem } from "../data-loader";

const HomeNewLoader: DataLoaderItem = {
	path: "/",
	loader: async (path: string, params: any, url?: string) => {
		let start = new Date();
		if(environments.redirect301){
			return{
				redirectStatus: {
					redirect:true,
					urlRedirect:"/vi"
				}
			}
		}
		const [bannerViewResult] = await Promise.all([
			BannerService.getListBannerViewSSR(),
			// ListServiceHomeSSR(10, 1),
		]);

		const { dataBannerView, rawBannerView } = bannerViewResult;
		// const { dataListServiceHome, rawListServiceHome } = StaffServiceHotDeal;

		return {
			data: {
				dataBannerView: dataBannerView,
				// dataListServiceHome: dataListServiceHome,
			},
			raw: {
				dataBannerView: rawBannerView,
				// dataListServiceHome: rawListServiceHome,
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
				ogUrl: `${environments.domainRoot}`,
				// ogSiteName: "Glow - Khám phá hàng nghìn dịch vụ chất lượng, địa điểm uy tín",
				canonical: `${environments.domainRoot}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}` },
					{ lang: "vi", url: `${environments.domainRoot}` },
					{ lang: "en", url: `${environments.domainRoot}/en` },
					{ lang: "ko", url: `${environments.domainRoot}/kr` },
				],
				keyword: "glow, glow app, app glow, glow massage, glow viet nam",
			},
		};
	},
};

export default HomeNewLoader;

export const HomeNewLoaderMuti: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/",
	loader: async (path: string, params: any) => {
		const lang = params.lang || "vi";
		let start = new Date();

		const [bannerViewResult] = await Promise.all([
			BannerService.getListBannerViewSSR(lang),
			// ListServiceHomeSSR(10, 1, lang),
		]);

		const { dataBannerView, rawBannerView } = bannerViewResult;
		// const { dataListServiceHome, rawListServiceHome } = StaffServiceHotDeal;

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
				ogUrl: `${environments.domainRoot}`,
				// ogSiteName: "Glow - Khám phá hàng nghìn dịch vụ chất lượng, địa điểm uy tín",
				canonical: `${environments.domainRoot}`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}` },
					{ lang: "vi", url: `${environments.domainRoot}` },
					{ lang: "en", url: `${environments.domainRoot}/en` },
					{ lang: "ko", url: `${environments.domainRoot}/kr` },
				],
				keyword: "glow, glow app, app glow, glow massage, glow viet nam",
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
				ogUrl: `${environments.domainRoot}`,
				// ogSiteName: "Glow - Discover thousands of high-quality services and reputable locations",
				canonical: `${environments.domainRoot}/en`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}` },
					{ lang: "vi", url: `${environments.domainRoot}` },
					{ lang: "en", url: `${environments.domainRoot}/en` },
					{ lang: "ko", url: `${environments.domainRoot}/kr` },
				],
				keyword: "glow, glow app, app glow, glow massage, glow viet nam",
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
				ogUrl: `${environments.domainRoot}`,
				// ogSiteName: "Glow - 수천 개의 고품질 서비스와 신뢰할 수 있는 장소를 발견하세요",
				canonical: `${environments.domainRoot}/kr`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}` },
					{ lang: "vi", url: `${environments.domainRoot}` },
					{ lang: "en", url: `${environments.domainRoot}/en` },
					{ lang: "ko", url: `${environments.domainRoot}/kr` },
				],
				keyword: "glow, glow app, app glow, glow massage, glow viet nam",
			};
		}

		return {
			data: {
				dataBannerView: dataBannerView,
				// dataListServiceHome: dataListServiceHome,
			},
			raw: {
				dataBannerView: rawBannerView,
				// dataListServiceHome: rawListServiceHome,
			},
			meta,
		};
	},
};
