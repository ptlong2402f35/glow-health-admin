import environments from "../../src/environment";
import { DataLoaderItem } from "../data-loader";

const ServiceLoader: DataLoaderItem = {
	path: "/dieu-khoan",
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
		return {
			data: {},
			raw: {},
			meta: {
				title: "Điều khoản dịch vụ ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Điều khoản dịch vụ ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/dieu-khoan`,
				ogSiteName: "Điều khoản dịch vụ ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/dieu-khoan`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dieu-khoan` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dieu-khoan` },
					{ lang: "en", url: `${environments.domainRoot}/en/dieu-khoan` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dieu-khoan` },
				],
			},
		};
	},
};

export default ServiceLoader;

export const ServiceLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/dieu-khoan",
	loader: async (path: string, params: any) => {
		let start = new Date();

		let lang = params.lang || "vi";

		let meta = {
			title: "Điều khoản dịch vụ ứng dụng Glow",
			description:
				"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
			ogTitle: "Điều khoản dịch vụ ứng dụng Glow",
			ogDescription:
				"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
			ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
			ogType: "website",
			ogUrl: `${environments.domainRoot}/vi/dieu-khoan`,
			ogSiteName: "Điều khoản dịch vụ ứng dụng Glow",
			canonical: `${environments.domainRoot}/vi/dieu-khoan`,
			hreflang: [
				{ lang: "x-default", url: `${environments.domainRoot}/vi/dieu-khoan` },
				{ lang: "vi", url: `${environments.domainRoot}/vi/dieu-khoan` },
				{ lang: "en", url: `${environments.domainRoot}/en/dieu-khoan` },
				{ lang: "ko", url: `${environments.domainRoot}/kr/dieu-khoan` },
			],
		};
		if (lang === "vi") {
			meta = {
				title: "Điều khoản dịch vụ ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Điều khoản dịch vụ ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/dieu-khoan`,
				ogSiteName: "Điều khoản dịch vụ ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/dieu-khoan`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dieu-khoan` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dieu-khoan` },
					{ lang: "en", url: `${environments.domainRoot}/en/dieu-khoan` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dieu-khoan` },
				],
			};
		} else if (lang === "en") {
			meta = {
				title: "Glow App Terms of Service",
				description:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogTitle: "Glow App Terms of Service",
				ogDescription:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/dieu-khoan`,
				ogSiteName: "Glow App Terms of Service",
				canonical: `${environments.domainRoot}/en/dieu-khoan`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dieu-khoan` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dieu-khoan` },
					{ lang: "en", url: `${environments.domainRoot}/en/dieu-khoan` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dieu-khoan` },
				],
			};
		} else if (lang === "kr") {
			meta = {
				title: "글로우 앱 서비스 약관",
				description:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogTitle: "글로우 앱 서비스 약관",
				ogDescription:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/dieu-khoan`,
				ogSiteName: "글로우 앱 서비스 약관",
				canonical: `${environments.domainRoot}/kr/dieu-khoan`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/dieu-khoan` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/dieu-khoan` },
					{ lang: "en", url: `${environments.domainRoot}/en/dieu-khoan` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/dieu-khoan` },
				],
			};
		}

		return {
			data: {},
			raw: {},
			meta,
		};
	},
};
