import React, { createContext, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router";
import useListBannerView from "../home/hooks/useListBannerView";
import { HomeIntroWrapperv2 } from "../home/styled/StyleHomeIntroMenu";
import { FooterSpacingWrap, FooterSpacingWrapv2, HomeRes, HomeWeb, HomeWrapperv2 } from "../home/styled/HomeStyles";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import HomeMainV4 from "../home/HomeMainv4";
import HomePhone from "../home/HomePhone";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import FooterRes from "../../controls/layout/footer/FooterRes";
import BannerHome from "./component/HomeBanner";
import DealHotHomePage from "./component/SpaHomePage";

export const HomeContext = createContext<{
	openDetailDialog: boolean;

	loading: boolean;
	loadMore: () => void;
	isInitLoading: boolean;
	isValidated: boolean | undefined;
} | null>(null);

export default function HomeMain() {
	const hash = typeof window !== "undefined" && window ? window.location?.hash : undefined;

	useEffect(() => {
		if (hash === undefined) return;

		const timeout = setTimeout(() => {
			const distance = document.getElementById(hash.replace("#", ""))?.offsetTop || 0;
			window.scrollTo({
				top: distance,
				left: 0,
				behavior: "smooth",
			});
			clearTimeout(timeout);
		}, 300);
	}, [hash]);

	let { lang } = useParams<{ lang: string }>();
	const location = useLocation();
	const pathsToCheck = ["/", "/vi", "/en", "/kr", "/vi/", "/en/", "/kr/"];
	const isTaiNha = pathsToCheck.some((path) => location.pathname === path);
	const { listBanner } = useListBannerView({ lang, isTaiNha });

	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			<HomeWeb>
				{/* <HomeMainV2 /> */}
				<HomeMainV4 home={true} />
			</HomeWeb>
			<HomeRes>
				<HomePhone />
			</HomeRes>
			<BannerHome
				listBanner={listBanner}
				lang={lang || "vi"}
				group="section_at_home_web_1"
				groupRes="section_at_home_res_1"
			/>

			<BannerHome
				listBanner={listBanner}
				lang={lang || "vi"}
				group="section_at_home_web_2"
				groupRes="section_at_home_res_2"
			/>

			<BannerHome
				listBanner={listBanner}
				lang={lang || "vi"}
				group="section_at_home_web_3"
				groupRes="section_at_home_res_3"
			/>

			{/* <BannerHome listBanner={listBanner}  lang={lang || "vi"} group="section_at_home_web_3"/> */}
			{/* <DealHotHomePage isTaiNha={isTaiNha} /> */}
			<FooterSpacingWrapv2 />
			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
