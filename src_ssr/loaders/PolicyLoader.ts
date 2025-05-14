import environments from "../../src/environment";
import { DataLoaderItem } from "../data-loader";

const PolicyLoader: DataLoaderItem = {
	path: "/chinh-sach",
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
				title: "Chính sách bảo mật ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Chính sách bảo mật ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/chinh-sach`,
				ogSiteName: "Chính sách bảo mật ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/chinh-sach`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "en", url: `${environments.domainRoot}/en/chinh-sach` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/chinh-sach` },
				],
			},
		};
	},
};

export default PolicyLoader;

export const PolicyLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/chinh-sach",
	loader: async (path: string, params: any) => {
		let start = new Date();

		const lang = params.lang || "vi";

		let meta = {};
		if (lang === "vi") {
			meta = {
				title: "Chính sách bảo mật ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Chính sách bảo mật ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/chinh-sach`,
				ogSiteName: "Chính sách bảo mật ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/chinh-sach`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "en", url: `${environments.domainRoot}/en/chinh-sach` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/chinh-sach` },
				],
			};
		} else if (lang === "en") {
			meta = {
				title: "Glow application privacy policy",
				description:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogTitle: "Glow application privacy policy",
				ogDescription:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/chinh-sach`,
				ogSiteName: "Glow application privacy policy",
				canonical: `${environments.domainRoot}/en/chinh-sach`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "en", url: `${environments.domainRoot}/en/chinh-sach` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/chinh-sach` },
				],
			};
		} else if (lang === "kr") {
			meta = {
				title: "Glow 애플리케이션 개인 정보 보호 정책",
				description:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogTitle: "Glow 애플리케이션 개인 정보 보호 정책",
				ogDescription:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/chinh-sach`,
				ogSiteName: "Glow 애플리케이션 개인 정보 보호 정책",
				canonical: `${environments.domainRoot}/kr/chinh-sach`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "en", url: `${environments.domainRoot}/en/chinh-sach` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/chinh-sach` },
				],
			};
		} else {
			meta = {
				title: "Chính sách bảo mật ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Chính sách bảo mật ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/chinh-sach`,
				ogSiteName: "Chính sách bảo mật ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/chinh-sach`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/chinh-sach` },
					{ lang: "en", url: `${environments.domainRoot}/en/chinh-sach` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/chinh-sach` },
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
