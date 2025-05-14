import React, { useEffect, useState } from "react";
import {
	HomeIntrolBannerInner,
	HomeIntrolBannerLeft,
	HomeIntrolBannerLeftButton1,
	HomeIntrolBannerLeftButtonDownload,
	HomeIntrolBannerLeftButtonDownloadImage,
	HomeIntrolBannerLeftButtonDownloadInner,
	HomeIntrolBannerLeftButtonPartner,
	HomeIntrolBannerLeftButtonPartnerWrap,
	HomeIntrolBannerLeftIntroDownload,
	HomeIntrolBannerLeftIntroDownloadA,
	HomeIntrolBannerLeftIntroDownloadButton,
	HomeIntrolBannerLeftIntroDownloadButton2,
	HomeIntrolBannerLeftIntroDownloadImg,
	HomeIntrolBannerLeftText1,
	HomeIntrolBannerLeftText2,
	HomeIntrolBannerRight,
	HomeIntrolBannerRightImg,
	HomeIntrolBannerWrap,
} from "./styled/StyledHomeBanner";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";

export default function HomeIntrolBanner(props: { homeDownloadRef: React.RefObject<HTMLDivElement> }) {
	const { lang } = useLanguage();

	const handleScrollToHomeDownload = () => {
		if (props.homeDownloadRef.current) {
			props.homeDownloadRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<HomeIntrolBannerWrap>
			<HomeIntrolBannerInner>
				<HomeIntrolBannerLeft>
					<HomeIntrolBannerLeftText1>
						{/* {ChangeLanguage("TITLE_1","en")} */}
						{TranslateLabels[lang]?.HOME_TITLE_1}
					</HomeIntrolBannerLeftText1>
					<HomeIntrolBannerLeftText2>{TranslateLabels[lang]?.HOME_TITLE_2}</HomeIntrolBannerLeftText2>
					<HomeIntrolBannerLeftButton1>
						<HomeIntrolBannerLeftButtonDownload>
							<HomeIntrolBannerLeftButtonDownloadInner onClick={handleScrollToHomeDownload}>
								{TranslateLabels[lang]?.HOME_DOWNLOAD}
								<HomeIntrolBannerLeftButtonDownloadImage src="./static/img/Arrow.png" />
							</HomeIntrolBannerLeftButtonDownloadInner>
						</HomeIntrolBannerLeftButtonDownload>
						<HomeIntrolBannerLeftButtonPartnerWrap>
							<HomeIntrolBannerLeftButtonPartner to="/partner">
								{TranslateLabels[lang]?.HOME_GLOW_PARTNER}
							</HomeIntrolBannerLeftButtonPartner>
						</HomeIntrolBannerLeftButtonPartnerWrap>
					</HomeIntrolBannerLeftButton1>
					<HomeIntrolBannerLeftIntroDownload>
						<HomeIntrolBannerLeftIntroDownloadButton>
							<HomeIntrolBannerLeftIntroDownloadA href="https://itunes.apple.com/vn/app/glow/id6443428819?l=vi">
								<HomeIntrolBannerLeftIntroDownloadImg
									src="./static/img/appstore1.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_DOWNLOAD_GLOW_STORE}
								/>
							</HomeIntrolBannerLeftIntroDownloadA>
						</HomeIntrolBannerLeftIntroDownloadButton>
						<HomeIntrolBannerLeftIntroDownloadButton2>
							<HomeIntrolBannerLeftIntroDownloadA href="https://play.google.com/store/apps/details?id=com.glow.mobileApp&pli=1">
								<HomeIntrolBannerLeftIntroDownloadImg
									src="./static/img/ggplay1.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_DOWNLOAD_GLOW_GG_PLAY}
								/>
							</HomeIntrolBannerLeftIntroDownloadA>
						</HomeIntrolBannerLeftIntroDownloadButton2>
					</HomeIntrolBannerLeftIntroDownload>
				</HomeIntrolBannerLeft>
				<HomeIntrolBannerRight>
					<HomeIntrolBannerRightImg src="./static/img/Banner-rightv2.jpg" />
				</HomeIntrolBannerRight>
			</HomeIntrolBannerInner>
		</HomeIntrolBannerWrap>
	);
}
