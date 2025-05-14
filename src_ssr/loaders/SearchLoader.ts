import environments from "../../src/environment";
import Staff from "../../src/models/Staff";
import { getStaffListv2SSR, ListStaffAtHomeSSR } from "../../src/services/StaffService";
import { DataLoaderItem } from "../data-loader";

const SearchLoader: DataLoaderItem = {
	path: "/tim-kiem",
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

		let search = null;
		let page = null;

		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);
			search = urlParams.get("filterKeyword");
			page = urlParams.get("page");
		}
		let dataStaffListv2: Staff[] = [];
		let rawStaffListv2;
		let totalData = 0;
		if (search) {
			({ dataStaffListv2, rawStaffListv2, totalData } = await getStaffListv2SSR(
				20,
				Number(page) || 1,
				null,
				lang,
				search
			));
		}

		return {
			data: { dataSearchListStaffAtHome: dataStaffListv2, totalSearchData: totalData },
			raw: { dataSearchListStaffAtHome: rawStaffListv2 },
			meta: {
				title: "Chính sách bảo mật ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Chính sách bảo mật ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/Preview0504.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/tim-kiem`,
				ogSiteName: "Chính sách bảo mật ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/tim-kiem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "en", url: `${environments.domainRoot}/en/tim-kiem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tim-kiem` },
				],
				robots: "noindex",
			},
		};
	},
};

export default SearchLoader;

export const SearchLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/tim-kiem",
	loader: async (path: string, params: any, url?: string) => {
		let start = new Date();

		const lang = params.lang || "vi";

		let search = null;
		let page = null;

		if (url && url.includes("?")) {
			const urlParams = new URLSearchParams(url.split("?")[1]);
			search = urlParams.get("filterKeyword");
			page = urlParams.get("page");
		}

		let dataStaffListv2: Staff[] = [];
		let rawStaffListv2;
		let totalData = 0;
		if (search) {
			({ dataStaffListv2, rawStaffListv2, totalData } = await getStaffListv2SSR(
				20,
				Number(page) || 1,
				null,
				lang,
				search
			));
		}

		let meta = {};
		if (lang === "vi") {
			meta = {
				title: "Chính sách bảo mật ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Chính sách bảo mật ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/Preview0504.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/tim-kiem`,
				ogSiteName: "Chính sách bảo mật ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/tim-kiem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "en", url: `${environments.domainRoot}/en/tim-kiem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tim-kiem` },
				],
				robots: "noindex",
			};
		} else if (lang === "en") {
			meta = {
				title: "Glow application privacy policy",
				description:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogTitle: "Glow application privacy policy",
				ogDescription:
					"Find the best spa, massage, hair removal, hair salon, facials, gel nails, eyelash extensions, eyebrow waxing and clinics in Vietnam and book with promotions",
				ogImage: "https://glowvietnam.com/static/img/Preview0504.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/tim-kiem`,
				ogSiteName: "Glow application privacy policy",
				canonical: `${environments.domainRoot}/en/tim-kiem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "en", url: `${environments.domainRoot}/en/tim-kiem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tim-kiem` },
				],
				robots: "noindex",
			};
		} else if (lang === "kr") {
			meta = {
				title: "Glow 애플리케이션 개인 정보 보호 정책",
				description:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogTitle: "Glow 애플리케이션 개인 정보 보호 정책",
				ogDescription:
					"베트남 최고의 스파, 마사지, 제모, 미용실, 얼굴 관리, 젤 네일, 속눈썹 연장, 눈썹 왁싱 및 클리닉을 찾아 프로모션과 함께 예약하세요",
				ogImage: "https://glowvietnam.com/static/img/Preview0504.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/tim-kiem`,
				ogSiteName: "Glow 애플리케이션 개인 정보 보호 정책",
				canonical: `${environments.domainRoot}/kr/tim-kiem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "en", url: `${environments.domainRoot}/en/tim-kiem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tim-kiem` },
				],
				robots: "noindex",
			};
		} else {
			meta = {
				title: "Chính sách bảo mật ứng dụng Glow",
				description:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogTitle: "Chính sách bảo mật ứng dụng Glow",
				ogDescription:
					"Tìm spa, massage, tẩy lông, làm tóc, chăm sóc da mặt, làm móng gel, nối mi, tẩy lông mày và phòng khám tốt nhất tại Việt Nam và đặt chỗ với các chương trình khuyến mãi",
				ogImage: "https://glowvietnam.com/static/img/Preview0504.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/tim-kiem`,
				ogSiteName: "Chính sách bảo mật ứng dụng Glow",
				canonical: `${environments.domainRoot}/vi/tim-kiem`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tim-kiem` },
					{ lang: "en", url: `${environments.domainRoot}/en/tim-kiem` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tim-kiem` },
				],
				robots: "noindex",
			};
		}

		return {
			data: { dataSearchListStaffAtHome: dataStaffListv2, totalSearchData: totalData },
			raw: { dataSearchListStaffAtHome: rawStaffListv2 },
			meta,
		};
	},
};
