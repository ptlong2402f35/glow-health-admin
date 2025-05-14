import React, { useState } from "react";
import { HomeInstructWrap } from "./styled/HomeInstruct";
import {
	HomeInstructInnerv2,
	HomeInstructPhone,
	HomeInstructPhoneImg,
	HomeInstructPhoneVideo,
	HomeInstructPhoneVideoWrap,
	HomeInstructPhoneWrap,
	HomeInstructRightv2,
	HomeInstructWrapv2,
	HomeInstructLeftv2,
	HomeInstructLeftv2Title,
	HomeInstructLeftv2DownloadWrap,
	HomeInstructRightv2Inner,
	HomeInstructRightv2ImgWrap,
	HomeInstructRightv2Img,
	HomeInstructRightv2ContentWrap,
	HomeInstructRightv2Content,
	HomeInstructRightv2Title,
	HomeInstructPhoneImgLeft,
	HomeInstructPhoneImgRight,
	HomeInstructPhoneStepsWrap,
	HomeInstructPhoneStepsTitle,
	HomeInstructPhoneSteps,
	HomeInstructPhoneStepsUl,
	HomeInstructPhoneServiceWrap,
	HomeInstructPhoneNoVideo,
	HomeInstructInnerv3,
	HomeInstructLeftv3,
	HomeInstructPhonev2,
	HomeInstructLeftLogin,
	HomeInstructWrapAtHome,
	HomeInstructLeftv2TitleKTV,
} from "./styled/StyleHomeIntroMenu";
import {
	HomeIntrolBannerLeftIntroDownloadA,
	HomeIntrolBannerLeftIntroDownloadButton,
	HomeIntrolBannerLeftIntroDownloadButton2,
	HomeIntrolBannerLeftIntroDownloadImg,
} from "./styled/StyledHomeBanner";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import { HomeInstructNew, HomeInstructNewAtHome } from "./styled/HomeStyles";
import FormLogin from "../LoginUserPage/component/FormLogin";
import useStaticContext from "../../hooks/useStaticContext";

export default function HomeMainV4(props: { login?: boolean; home?: boolean }) {
	const { lang } = useLanguage();
	return (
		<HomeInstructWrapv2 id="home-instruct">
			<HomeInstructNew>
				<HomeInstructInnerv3>
					<HomeMainV4Left home={props.home} />
					<HomeInstructPhonev2 home={props.home || false}>
						<HomeInstructPhoneWrap>
							<HomeInstructPhoneImg
								src="./static/img/PhoneCase.png"
								alt="Phone_Case"
							/>
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
							<HomeInstructPhoneNoVideo
								src={TranslateLabels[lang]?.HOME_PAGE_IMAGE_PHONE}
								alt={TranslateLabels[lang]?.ALT_GLOW_HOME_PAGE}
							/>
						</HomeInstructPhoneWrap>
					</HomeInstructPhonev2>
				</HomeInstructInnerv3>
			</HomeInstructNew>
		</HomeInstructWrapv2>
	);
}

export function HomeMainV4Left(props: { login?: boolean; home?: boolean }) {
	const { lang } = useLanguage();
	const { staticContext } = useStaticContext();
	return (
		<HomeInstructLeftv3 login={props.login}>
			<HomeInstructLeftv2Title
				login={props.login}
				home={props.home}>
				{staticContext?.data?.h1Content || TranslateLabels[lang]?.HOME_PAGEV2_TITLE} {TranslateLabels[lang]?.HOME_PAGEV2_TITLE_V2}
			</HomeInstructLeftv2Title>
			<div>
				<HomeInstructRightv2Inner>
					<HomeInstructRightv2ImgWrap>
						<HomeInstructRightv2Img
							src={props.home ? "./static/img/ConvenientHome.png" : "./static/img/Convenient.png"}
							alt={TranslateLabels[lang]?.ALT_GLOW_TL}
						/>
					</HomeInstructRightv2ImgWrap>
					<HomeInstructRightv2ContentWrap>
						<HomeInstructRightv2Title home={props.home}>
							{TranslateLabels[lang]?.HOME_PAGEV2_TL}
						</HomeInstructRightv2Title>
						<HomeInstructRightv2Content home={props.home}>
							{TranslateLabels[lang]?.HOME_PAGEV2_TL_CT}
						</HomeInstructRightv2Content>
					</HomeInstructRightv2ContentWrap>
				</HomeInstructRightv2Inner>
				<HomeInstructRightv2Inner>
					<HomeInstructRightv2ImgWrap>
						<HomeInstructRightv2Img
							src={props.home ? "./static/img/PriceHome.png" : "./static/img/Price.png"}
							alt={TranslateLabels[lang]?.ALT_GLOW_RR}
						/>
					</HomeInstructRightv2ImgWrap>
					<HomeInstructRightv2ContentWrap>
						<HomeInstructRightv2Title home={props.home}>
							{TranslateLabels[lang]?.HOME_PAGEV2_GC}
						</HomeInstructRightv2Title>
						<HomeInstructRightv2Content home={props.home}>
							{TranslateLabels[lang]?.HOME_PAGEV2_GC_CT}
						</HomeInstructRightv2Content>
					</HomeInstructRightv2ContentWrap>
				</HomeInstructRightv2Inner>
				<HomeInstructRightv2Inner>
					<HomeInstructRightv2ImgWrap>
						<HomeInstructRightv2Img
							src={props.home ? "./static/img/QualityHome.png" : "./static/img/Quality.png"}
							alt={TranslateLabels[lang]?.ALT_GLOW_DG}
						/>
					</HomeInstructRightv2ImgWrap>
					<HomeInstructRightv2ContentWrap>
						<HomeInstructRightv2Title home={props.home}>
							{TranslateLabels[lang]?.HOME_PAGEV2_CL}
						</HomeInstructRightv2Title>
						<HomeInstructRightv2Content home={props.home}>
							{TranslateLabels[lang]?.HOME_PAGEV2_CL_CT}
						</HomeInstructRightv2Content>
					</HomeInstructRightv2ContentWrap>
				</HomeInstructRightv2Inner>
			</div>
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
		</HomeInstructLeftv3>
	);
}

export function HomeMainV4LeftLogin(props: { login?: boolean }) {
	const { lang } = useLanguage();
	return (
		<HomeInstructLeftLogin login={props.login}>
			<HomeInstructLeftv2Title login={props.login}>
				{TranslateLabels[lang]?.HOME_PAGEV2_TITLE}
			</HomeInstructLeftv2Title>
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
		</HomeInstructLeftLogin>
	);
}

export function HomeMainV4KTV(props: { homeKTV?: boolean }) {
	const { lang } = useLanguage();
	return (
		<HomeInstructWrapAtHome id="home-instruct">
			<HomeInstructNewAtHome>
				<HomeInstructInnerv3>
					<HomeMainKTV />
					<HomeInstructPhonev2>
						<HomeInstructPhoneWrap>
							<HomeInstructPhoneImg
								src="./static/img/PhoneCase.png"
								alt="Phone_Case"
							/>
							<HomeInstructPhoneNoVideo
								src={TranslateLabels[lang]?.GLOW_NO_1_BACKGROUND}
								alt={TranslateLabels[lang]?.ALT_GLOW_HOME_PAGE}
							/>
						</HomeInstructPhoneWrap>
					</HomeInstructPhonev2>
				</HomeInstructInnerv3>
			</HomeInstructNewAtHome>
		</HomeInstructWrapAtHome>
	);
}

export function HomeMainKTV() {
	const { lang } = useLanguage();
	return (
		<HomeInstructLeftv3>
			<HomeInstructLeftv2TitleKTV>{TranslateLabels[lang]?.GLOW_NO_1}</HomeInstructLeftv2TitleKTV>
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
		</HomeInstructLeftv3>
	);
}
