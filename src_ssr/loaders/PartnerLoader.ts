import environments from "../../src/environment";
import { DataLoaderItem } from "../data-loader";

const PartnerLoader: DataLoaderItem = {
	path: "/partner",
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
				title: "Hướng dẫn trở thành đối tác Glow",
				description:
					"Glow là nơi các Đối tác xây dựng thương hiệu và tiếp cận đến hàng triệu khách hàng tiềm năng. Gia tăng doanh thu nhờ nguồn khách hàng dồi dào",
				ogTitle: "Hướng dẫn trở thành đối tác Glow",
				ogDescription:
					"Glow là nơi các Đối tác xây dựng thương hiệu và tiếp cận đến hàng triệu khách hàng tiềm năng. Gia tăng doanh thu nhờ nguồn khách hàng dồi dào",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/partner`,
				ogSiteName: "Hướng dẫn trở thành đối tác Glow",
				canonical: `${environments.domainRoot}/vi/partner`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "en", url: `${environments.domainRoot}/en/partner` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/partner` },
				],
			},
		};
	},
};

export default PartnerLoader;

export const PartnerLoaderMutiLang: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/partner",
	loader: async (path: string, params: any) => {
		let start = new Date();
		const lang = params.lang || "vi";

		let meta = {};
		if (lang === "vi") {
			meta = {
				title: "Hướng dẫn trở thành đối tác Glow",
				description:
					"Glow là nơi các Đối tác xây dựng thương hiệu và tiếp cận đến hàng triệu khách hàng tiềm năng. Gia tăng doanh thu nhờ nguồn khách hàng dồi dào",
				ogTitle: "Hướng dẫn trở thành đối tác Glow",
				ogDescription:
					"Glow là nơi các Đối tác xây dựng thương hiệu và tiếp cận đến hàng triệu khách hàng tiềm năng. Gia tăng doanh thu nhờ nguồn khách hàng dồi dào",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/partner`,
				ogSiteName: "Hướng dẫn trở thành đối tác Glow",
				canonical: `${environments.domainRoot}/vi/partner`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "en", url: `${environments.domainRoot}/en/partner` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/partner` },
				],
			};
		} else if (lang === "en") {
			meta = {
				title: "Instructions to become a Glow partner",
				description:
					"Glow is where Partners build their brands and reach millions of potential customers. Increase revenue thanks to abundant customer sources",
				ogTitle: "Instructions to become a Glow partner",
				ogDescription:
					"Glow is where Partners build their brands and reach millions of potential customers. Increase revenue thanks to abundant customer sources",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/partner`,
				ogSiteName: "Instructions to become a Glow partner",
				canonical: `${environments.domainRoot}/en/partner`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "en", url: `${environments.domainRoot}/en/partner` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/partner` },
				],
			};
		} else if (lang === "kr") {
			meta = {
				title: "Glow 파트너가 되기 위한 지침",
				description:
					"Glow는 파트너가 브랜드를 구축하고 수백만 명의 잠재 고객에게 다가가는 곳입니다. 풍부한 고객 소스 덕분에 수익 증대",
				ogTitle: "Glow 파트너가 되기 위한 지침",
				ogDescription:
					"Glow는 파트너가 브랜드를 구축하고 수백만 명의 잠재 고객에게 다가가는 곳입니다. 풍부한 고객 소스 덕분에 수익 증대",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/partner`,
				ogSiteName: "Glow 파트너가 되기 위한 지침",
				canonical: `${environments.domainRoot}/kr/partner`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "en", url: `${environments.domainRoot}/en/partner` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/partner` },
				],
			};
		} else {
			meta = {
				title: "Hướng dẫn trở thành đối tác Glow",
				description:
					"Glow là nơi các Đối tác xây dựng thương hiệu và tiếp cận đến hàng triệu khách hàng tiềm năng. Gia tăng doanh thu nhờ nguồn khách hàng dồi dào",
				ogTitle: "Hướng dẫn trở thành đối tác Glow",
				ogDescription:
					"Glow là nơi các Đối tác xây dựng thương hiệu và tiếp cận đến hàng triệu khách hàng tiềm năng. Gia tăng doanh thu nhờ nguồn khách hàng dồi dào",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/partner`,
				ogSiteName: "Hướng dẫn trở thành đối tác Glow",
				canonical: `${environments.domainRoot}/vi/partner`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/partner` },
					{ lang: "en", url: `${environments.domainRoot}/en/partner` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/partner` },
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
