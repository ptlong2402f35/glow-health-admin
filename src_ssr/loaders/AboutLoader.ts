import environments from "../../src/environment";
import { DataLoaderItem } from "../data-loader";

const AboutLoader: DataLoaderItem = {
	path: "/about",
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
				title: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/about`,
				// ogSiteName: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				canonical: `${environments.domainRoot}/vi/about`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/about` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/about` },
					{ lang: "en", url: `${environments.domainRoot}/en/about` },
					{ lang: "kr", url: `${environments.domainRoot}/kr/about` },
				],
			},
		};
	},
};

export default AboutLoader;

export const AboutLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/about",
	loader: async (path: string, params: any) => {
		const lang = params.lang || "vi";
		let start = new Date();

		let meta = {
			title: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
			description:
				"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
			ogTitle: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
			ogDescription:
				"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
			ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
			ogType: "website",
			ogUrl: `${environments.domainRoot}/vi/about`,
			// ogSiteName: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
			canonical: `${environments.domainRoot}/vi/about`,
			hreflang: [
				{ lang: "x-default", url: `${environments.domainRoot}/vi/about` },
				{ lang: "vi", url: `${environments.domainRoot}/vi/about` },
				{ lang: "en", url: `${environments.domainRoot}/en/about` },
				{ lang: "kr", url: `${environments.domainRoot}/kr/about` },
			],
		};
		if (lang === "vi") {
			meta = {
				title: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/about`,
				// ogSiteName: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				canonical: `${environments.domainRoot}/vi/about`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/about` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/about` },
					{ lang: "en", url: `${environments.domainRoot}/en/about` },
					{ lang: "kr", url: `${environments.domainRoot}/kr/about` },
				],
			};
		} else if (lang === "en") {
			meta = {
				title: "Glow - Book massage, spa, beauty salon, clinics with many promotions",
				description:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogTitle: "Glow - Book massage, spa, beauty salon, clinics with many promotions",
				ogDescription:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/about`,
				// ogSiteName: "Glow - Book massage, spa, beauty salon, clinics with many promotions",
				canonical: `${environments.domainRoot}/en/about`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/about` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/about` },
					{ lang: "en", url: `${environments.domainRoot}/en/about` },
					{ lang: "kr", url: `${environments.domainRoot}/kr/about` },
				],
			};
		} else if (lang === "kr") {
			meta = {
				title: "Glow - 다양한 프로모션이 포함된 마사지, 스파, 미용실, 클리닉을 예약하세요",
				description:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogTitle: "Glow - 다양한 프로모션이 포함된 마사지, 스파, 미용실, 클리닉을 예약하세요",
				ogDescription:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/about`,
				// ogSiteName: "Glow - 다양한 프로모션이 포함된 마사지, 스파, 미용실, 클리닉을 예약하세요",
				canonical: `${environments.domainRoot}/kr/about`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/about` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/about` },
					{ lang: "en", url: `${environments.domainRoot}/en/about` },
					{ lang: "kr", url: `${environments.domainRoot}/kr/about` },
				],
			};
		} else {
			meta = {
				title: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/about`,
				// ogSiteName: "Glow - Trợ lý cho người đi du lịch, công tác và bận rộn",
				canonical: `${environments.domainRoot}/vi/about`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/about` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/about` },
					{ lang: "en", url: `${environments.domainRoot}/en/about` },
					{ lang: "kr", url: `${environments.domainRoot}/kr/about` },
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
