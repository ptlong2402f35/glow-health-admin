import environments from "../../src/environment";
import { DataLoaderItem } from "../data-loader";

const RegulationLoader: DataLoaderItem = {
	path: "/quy-che",
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
				title: "Quy chế hoạt động ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Quy chế hoạt động ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/quy-che`,
				ogSiteName: "Quy chế hoạt động ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/quy-che`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "en", url: `${environments.domainRoot}/en/quy-che` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/quy-che` },
				],
			},
		};
	},
};

export default RegulationLoader;

export const RegulationLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/quy-che",
	loader: async (path: string, params: any) => {
		let start = new Date();

		const lang = params.lang || "vi";

		let meta = {
			title: "Quy chế hoạt động ứng dụng Glow",
			description:
				"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
			ogTitle: "Quy chế hoạt động ứng dụng Glow",
			ogDescription:
				"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
			ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
			ogType: "website",
			ogUrl: `${environments.domainRoot}/vi/quy-che`,
			ogSiteName: "Quy chế hoạt động ứng dụng Glow",
			canonical: `${environments.domainRoot}/vi/quy-che`,
			hreflang: [
				{ lang: "x-default", url: `${environments.domainRoot}/vi/quy-che` },
				{ lang: "vi", url: `${environments.domainRoot}/vi/quy-che` },
				{ lang: "en", url: `${environments.domainRoot}/en/quy-che` },
				{ lang: "ko", url: `${environments.domainRoot}/kr/quy-che` },
			],
		};
		if (lang === "vi") {
			meta = {
				title: "Quy chế hoạt động ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Quy chế hoạt động ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/quy-che`,
				ogSiteName: "Quy chế hoạt động ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/quy-che`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "en", url: `${environments.domainRoot}/en/quy-che` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/quy-che` },
				],
			};
		} else if (lang === "en") {
			meta = {
				title: "Glow application operating regulations",
				description:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogTitle: "Glow application operating regulations",
				ogDescription:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/quy-che`,
				ogSiteName: "Glow application operating regulations",
				canonical: `${environments.domainRoot}/en/quy-che`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "en", url: `${environments.domainRoot}/en/quy-che` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/quy-che` },
				],
			};
		} else if (lang === "kr") {
			meta = {
				title: "글로우 애플리케이션 운영 규정",
				description:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogTitle: "글로우 애플리케이션 운영 규정",
				ogDescription:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/quy-che`,
				ogSiteName: "글로우 애플리케이션 운영 규정",
				canonical: `${environments.domainRoot}/kr/quy-che`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "en", url: `${environments.domainRoot}/en/quy-che` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/quy-che` },
				],
			};
		} else {
			meta = {
				title: "Quy chế hoạt động ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Quy chế hoạt động ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/quy-che`,
				ogSiteName: "Quy chế hoạt động ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/quy-che`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/quy-che` },
					{ lang: "en", url: `${environments.domainRoot}/en/quy-che` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/quy-che` },
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
