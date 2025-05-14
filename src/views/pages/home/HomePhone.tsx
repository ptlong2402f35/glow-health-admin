import React, { useState } from "react";
import {
	HomeInstructLeftv2DownloadWrap,
	HomeInstructPhoneDownloadRes,
	HomeInstructPhoneDownloadResA,
	HomeInstructPhoneDownloadResButton,
	HomeInstructPhoneDownloadResImg,
	HomeInstructPhoneDownloadResTitle,
	HomeInstructPhoneDownloadResWrap,
	HomeInstructPhoneDownloadTwoButtonRes,
	HomeInstructPhoneFull,
	HomeInstructPhoneImg,
	HomeInstructPhoneNoVideo,
	HomeInstructPhonePartner,
	HomeInstructPhoneVideo,
	HomeInstructPhoneVideoWrap,
	HomeInstructPhoneWrapv2,
} from "./styled/StyleHomeIntroMenu";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import { HomeIntrolBannerLeftIntroDownloadA, HomeIntrolBannerLeftIntroDownloadButton, HomeIntrolBannerLeftIntroDownloadButton2, HomeIntrolBannerLeftIntroDownloadImg } from "./styled/StyledHomeBanner";
import useStaticContext from "../../hooks/useStaticContext";

export default function HomePhone(props: { atHome?: boolean }) {
	const { lang } = useLanguage();
	const [videoError, setVideoError] = useState(false);
	const { staticContext } = useStaticContext();

	return (
		<HomeInstructPhoneDownloadResWrap>
			{props.atHome ? (
				<HomeInstructPhoneDownloadResTitle>
					{TranslateLabels[lang]?.GLOW_NO_1}
				</HomeInstructPhoneDownloadResTitle>
			) : (
				<HomeInstructPhoneDownloadResTitle>
					{staticContext?.data?.h1Content || TranslateLabels[lang]?.HOME_PAGEV2_TITLE} <br />
					{TranslateLabels[lang]?.HOME_PAGEV2_TITLE_V2}
				</HomeInstructPhoneDownloadResTitle>
			)}

			{/* <HomeInstructPhoneFull>
				<HomeInstructPhoneWrapv2>
					<HomeInstructPhoneImg
						src="./static/img/PhoneCase.png"
						alt="Phone_Case"
					/> */}
			{/* {!videoError ? (
						<HomeInstructPhoneVideoWrap>
							<HomeInstructPhoneVideo
								autoPlay
								muted
								playsInline
								preload="auto"
								loop
								onError={() => setVideoError(true)}>
								<source
									src="./static/img/VideoBannerHomePagev2.mp4"
									type="video/mp4"
								/>
							</HomeInstructPhoneVideo>
						</HomeInstructPhoneVideoWrap>
					) : (
						<HomeInstructPhoneNoVideo
							src="./static/img/HomeNoVideo.jpg"
							alt="Fallback"
						/>
					)} */}
			{/* {props.atHome ? (
						<HomeInstructPhoneNoVideo
							src={TranslateLabels[lang]?.GLOW_NO_1_BACKGROUND}
							alt="Fallback"
						/>
					) : (
						<HomeInstructPhoneNoVideo
							src={TranslateLabels[lang]?.HOME_PAGE_IMAGE_PHONE}
							alt="Fallback"
						/>
					)}
				</HomeInstructPhoneWrapv2>
			</HomeInstructPhoneFull> */}
			{/* <HomeInstructPhoneDownloadRes>
				<HomeInstructPhoneDownloadResA
					href={"https://onelink.to/mz7nfw"}
					target="_blank"
					rel="noopener noreferrer">
					<HomeInstructPhoneDownloadResButton>
						{TranslateLabels[lang]?.HOME_PAGEV2_DOWNLOAD}
						<HomeInstructPhoneDownloadResImg
							src="./static/img/Glow_icon.png"
							alt={TranslateLabels[lang]?.ALT_GLOW_DOWNLOAD_GLOW_RES}
						/>
					</HomeInstructPhoneDownloadResButton>
				</HomeInstructPhoneDownloadResA>
			</HomeInstructPhoneDownloadRes>
			<HomeInstructPhonePartner to="/partner">
				{TranslateLabels[lang]?.HOME_PAGE_GLOW_PARTNER}
			</HomeInstructPhonePartner> */}
			<HomeInstructPhoneDownloadTwoButtonRes>
			<HomeInstructLeftv2DownloadWrap>
				<HomeIntrolBannerLeftIntroDownloadButton>
					<HomeIntrolBannerLeftIntroDownloadA href="https://apps.apple.com/vn/app/glow/id6443428819">
						<HomeIntrolBannerLeftIntroDownloadImg
							src="./static/img/appstore1.png"
							alt={TranslateLabels[lang]?.ALT_GLOW_DOWNLOAD_GLOW_STORE}
						/>
					</HomeIntrolBannerLeftIntroDownloadA>
				</HomeIntrolBannerLeftIntroDownloadButton>
				<HomeIntrolBannerLeftIntroDownloadButton2>
					<HomeIntrolBannerLeftIntroDownloadA href="https://play.google.com/store/apps/details?id=com.glow.mobileApp">
						<HomeIntrolBannerLeftIntroDownloadImg
							src="./static/img/ggplay1.png"
							alt={TranslateLabels[lang]?.ALT_GLOW_DOWNLOAD_GLOW_GG_PLAY}
						/>
					</HomeIntrolBannerLeftIntroDownloadA>
				</HomeIntrolBannerLeftIntroDownloadButton2>
			</HomeInstructLeftv2DownloadWrap>
			</HomeInstructPhoneDownloadTwoButtonRes>
		</HomeInstructPhoneDownloadResWrap>
	);
}
