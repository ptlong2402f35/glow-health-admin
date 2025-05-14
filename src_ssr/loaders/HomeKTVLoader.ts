import environments from "../../src/environment";
import BannerService from "../../src/services/BannerService";
import ProductService from "../../src/services/ProductService";
import {
	getStaffListv2SSR,
	getStaffServiceSSR,
	getTopServiceSSR,
	getTopStaffSSR,
} from "../../src/services/StaffService";
import { TranslateLabels } from "../../src/views/controls/layout/content/MultiLanguge";
import { DataLoaderItem } from "../data-loader";
import util from "util";

const HomeKTVLoader: DataLoaderItem = {
	path: "/tai-nha",
	loader: async (path: string, params: any, url?: string) => {
		if(environments.redirect301){
			return{
				redirectStatus: {
					redirect:true,
					urlRedirect:"/vi" + url
				}
			}
		}
		let { dataTopStaff, rawTopStaff } = await getTopStaffSSR();

		let results = await Promise.all(
			dataTopStaff?.map(async (item) => {
				const { params } = item;
				const filteredParams = Object.fromEntries(
					Object.entries(params || {}).filter(([_, value]) => value !== null)
				);
				const { linkStaffListv2, dataStaffListv2, rawStaffListv2 } = await getStaffListv2SSR(
					10,
					1,
					filteredParams
				);
				return {
					dataStaffListv2: dataStaffListv2,
					rawStaffListv2: rawStaffListv2,
					linkStaffListv2: linkStaffListv2,
				};
			})
		);

		const linkStaffListv2 = results.map((item) => item.linkStaffListv2);
		const dataStaffListv2 = results.map((item) => item.dataStaffListv2);
		const rawStaffListv2 = results.map((item) => item.rawStaffListv2);

		return {
			data: {
				dataTopStaff: dataTopStaff,
				dataStaffListv2: dataStaffListv2,
				linkStaffListv2: linkStaffListv2,
			},
			raw: {
				dataTopStaff: rawTopStaff,
				dataStaffListv2: rawStaffListv2,
				linkStaffListv2: linkStaffListv2,
			},
			meta: {
				title: "Đặt massage, lấy ráy tai, trang điểm, làm nail tại nhà",
				description:
					"Tải Glow ngay để đặt massage, lấy ráy tai, triệt lông, làm móng, trang điểm,... tại nhà, giúp cho cuộc sống bận rộn của bạn trở nên dễ dàng, tiện lợi hơn.",
				ogTitle: "Đặt massage, lấy ráy tai, trang điểm, làm nail tại nhà",
				ogDescription:
					"Tải Glow ngay để đặt massage, lấy ráy tai, triệt lông, làm móng, trang điểm,... tại nhà, giúp cho cuộc sống bận rộn của bạn trở nên dễ dàng, tiện lợi hơn.",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/tai-nha`,
				// ogSiteName: "Đặt massage, lấy ráy tai, trang điểm, làm nail tại nhà",
				canonical: `${environments.domainRoot}/vi/tai-nha`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tai-nha` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tai-nha` },
					{ lang: "en", url: `${environments.domainRoot}/en/tai-nha` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tai-nha` },
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
							name: `${TranslateLabels["vi"]?.HEADER_SPA_AT_HOME}`,
							item: `${environments.domainRoot}/vi/tai-nha`,
						},
					],
				},
			},
		};
	},
};

export default HomeKTVLoader;

export const HomeKTVLoaderMuti: DataLoaderItem = {
	path: "/:lang(vi|en|kr)/tai-nha",
	loader: async (path: string, params: any) => {
		const lang = params.lang || "vi";
		let start = new Date();
		let { dataTopStaff, rawTopStaff } = await getTopStaffSSR(lang);

		let results = await Promise.all(
			dataTopStaff?.map(async (item) => {
				const { params } = item;
				const filteredParams = Object.fromEntries(
					Object.entries(params || {}).filter(([_, value]) => value !== null)
				);
				const { linkStaffListv2, dataStaffListv2, rawStaffListv2 } = await getStaffListv2SSR(
					10,
					1,
					filteredParams,
					lang
				);
				return {
					dataStaffListv2: dataStaffListv2,
					rawStaffListv2: rawStaffListv2,
					linkStaffListv2: linkStaffListv2,
				};
			})
		);

		const linkStaffListv2 = results.map((item) => item.linkStaffListv2);
		const dataStaffListv2 = results.map((item) => item.dataStaffListv2);
		const rawStaffListv2 = results.map((item) => item.rawStaffListv2);

		let meta = {};
		if (lang === "vi") {
			meta = {
				title: "Đặt massage, lấy ráy tai, trang điểm, làm nail tại nhà",
				description:
					"Tải Glow ngay để đặt massage, lấy ráy tai, triệt lông, làm móng, trang điểm,... tại nhà, giúp cho cuộc sống bận rộn của bạn trở nên dễ dàng, tiện lợi hơn.",
				ogTitle: "Đặt massage, lấy ráy tai, trang điểm, làm nail tại nhà",
				ogDescription:
					"Tải Glow ngay để đặt massage, lấy ráy tai, triệt lông, làm móng, trang điểm,... tại nhà, giúp cho cuộc sống bận rộn của bạn trở nên dễ dàng, tiện lợi hơn.",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/vi/tai-nha`,
				// ogSiteName: "Đặt massage, lấy ráy tai, trang điểm, làm nail tại nhà",
				canonical: `${environments.domainRoot}/vi/tai-nha`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tai-nha` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tai-nha` },
					{ lang: "en", url: `${environments.domainRoot}/en/tai-nha` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tai-nha` },
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
							name: `${TranslateLabels[lang]?.HEADER_SPA_AT_HOME}`,
							item: `${environments.domainRoot}/vi/tai-nha`,
						},
					],
				},
			};
		} else if (lang === "en") {
			meta = {
				title: "Book massage, earwax removal, makeup, and nail care at home",
				description:
					"Download Glow now to order massage, earwax removal, hair removal, nail, makeup,... at home, making your busy life easier and more convenient.",
				ogTitle: "Book massage, earwax removal, makeup, and nail care at home",
				ogDescription:
					"Download Glow now to order massage, earwax removal, hair removal, nail, makeup,... at home, making your busy life easier and more convenient.",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/en/tai-nha`,
				// ogSiteName: "Book massage, earwax removal, makeup, and nail care at home",
				canonical: `${environments.domainRoot}/en/tai-nha`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tai-nha` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tai-nha` },
					{ lang: "en", url: `${environments.domainRoot}/en/tai-nha` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tai-nha` },
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
							name: `${TranslateLabels[lang]?.HEADER_SPA_AT_HOME}`,
							item: `${environments.domainRoot}/en/tai-nha`,
						},
					],
				},
			};
		} else if (lang === "kr") {
			meta = {
				title: "집에서 마사지, 귀지 제거, 메이크업, 네일 케어를 예약하세요",
				description:
					"지금 Glow를 다운로드하여 집에서 마사지, 귀지 제거, 제모, 매니큐어, 메이크업 등을 주문하여 바쁜 생활을 더욱 쉽고 편리하게 만들어 보세요.",
				ogTitle: "집에서 마사지, 귀지 제거, 메이크업, 네일 케어를 예약하세요",
				ogDescription:
					"지금 Glow를 다운로드하여 집에서 마사지, 귀지 제거, 제모, 매니큐어, 메이크업 등을 주문하여 바쁜 생활을 더욱 쉽고 편리하게 만들어 보세요.",
				ogImage: "https://glowvietnam.com/static/img/PreviewFinal0512.png",
				ogType: "website",
				ogUrl: `${environments.domainRoot}/kr/tai-nha`,
				// ogSiteName: "집에서 마사지, 귀지 제거, 메이크업, 네일 케어를 예약하세요",
				canonical: `${environments.domainRoot}/kr/tai-nha`,
				hreflang: [
					{ lang: "x-default", url: `${environments.domainRoot}/vi/tai-nha` },
					{ lang: "vi", url: `${environments.domainRoot}/vi/tai-nha` },
					{ lang: "en", url: `${environments.domainRoot}/en/tai-nha` },
					{ lang: "ko", url: `${environments.domainRoot}/kr/tai-nha` },
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
							name: `${TranslateLabels[lang]?.HEADER_SPA_AT_HOME}`,
							item: `${environments.domainRoot}/kr/tai-nha`,
						},
					],
				},
			};
		}

		return {
			data: {
				dataTopStaff: dataTopStaff,
				dataStaffListv2: dataStaffListv2,
				linkStaffListv2: linkStaffListv2,
			},
			raw: {
				dataTopStaff: rawTopStaff,
				dataStaffListv2: rawStaffListv2,
				linkStaffListv2: linkStaffListv2,
			},
			meta,
		};
	},
};
