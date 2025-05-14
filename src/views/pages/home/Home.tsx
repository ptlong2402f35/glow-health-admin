import React, { createContext, useEffect, useRef, useState } from "react";
import Footer from "../../controls/layout/footer/Footer";
import HomeIntroPanelv2 from "./HomeIntroPanelv2";
import { StyledContentWrap } from "../../controls/layout/content/StyledContent";
import useLoadedUser from "../../hooks/auth/useLoadedUser";
import useForceLogin from "../../hooks/useForceLogin";
import HomeInstruct from "./HomeInstruct";
import HomeIntroPanel from "./HomeIntroPanel";

import { FooterSpacingWrap, HomeRes, HomeWeb, HomeWrapper, HomeWrapperv2 } from "./styled/HomeStyles";
import HomeIntroSlidePanel from "./HomeIntroSlidePanel";
import HomeNews from "./HomeNews";
import HomeIntroMenu from "./HomeIntroMenu";
import HomeIntrolBanner from "./HomeIntroPanelv3";
import HomeInstructv2 from "./HomeInstructv2";
import HomeService from "./HomeService";
import HomeDownload from "./HomeDownload";
import HomeIntroduce from "./HomeIntroduce";
import Footerv2 from "../../controls/layout/footer/Footerv2";
import ImgBannerRes from "./ImgBannerRes";
import { useLanguage } from "../../controls/layout/content/MultiLanguge";
import HomeIntroMenuv2 from "./HomeIntroMenuv2";
import HomeMainV2 from "./HomeMainV2";
import Footerv3 from "../../controls/layout/footer/Footerv3";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import HomePhone from "./HomePhone";
import FooterRes from "../../controls/layout/footer/FooterRes";
import HomeIntroMenuv3 from "./HomeIntroMenuv3";
import HomeMainV3 from "./HomeMainv3";
import ServiceGroupAllPage from "./HomePageNew/ServiceGroupAllPage";
import BannerHomePageNew, { BannerHomePageNew2 } from "./HomePageNew/BannerHomePageNew";
import DealHotHomePage from "./HomePageNew/DealHotHomePage";
import OtherIncentivesPageNew from "./HomePageNew/OtherIncentivesPageNew";
import HomeMainV4 from "./HomeMainv4";
import useListBannerView from "./hooks/useListBannerView";
import { useLocation, useParams } from "react-router";
import SlidePartner from "./HomePageNew/SlidePartner";
import HeaderSpa from "./HeaderSpa";

export const HomeContext = createContext<{
	openDetailDialog: boolean;

	loading: boolean;
	loadMore: () => void;
	isInitLoading: boolean;
	isValidated: boolean | undefined;
} | null>(null);

export default function Home() {
	const [openDetailDialog, setOpenDetailDialog] = useState(false);
	const { isValidated } = useLoadedUser();
	const hash = typeof window !== "undefined" && window ? window.location?.hash : undefined;
	const homeDownloadRef = useRef<HTMLDivElement>(null);

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
	const pathsToCheck = [
		"/dia-diem",
		"/vi/dia-diem",
		"/en/dia-diem",
		"/kr/dia-diem",
		"/vi/dia-diem/",
		"/en/dia-diem/",
		"/kr/dia-diem/",
		"/spa",
		"/vi/spa",
		"/en/spa",
		"/kr/spa",
		"/vi/spa/",
		"/en/spa/",
		"/kr/spa/",
	];
	const isTaiNha = pathsToCheck.some((path) => location.pathname === path);
	const { listBanner } = useListBannerView({ lang, isTaiNha });

	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			<HeaderSpa lang={lang || "vi"} />
			<ServiceGroupAllPage isTaiNha={isTaiNha} />
			<BannerHomePageNew
				listBanner={listBanner}
				lang={lang || "vi"}
			/>

			<DealHotHomePage isTaiNha={isTaiNha} />
			<BannerHomePageNew2
				listBanner={listBanner}
				lang={lang || "vi"}
			/>

			<OtherIncentivesPageNew isTaiNha={isTaiNha} />
			<FooterSpacingWrap />
			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
