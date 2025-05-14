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
} from "./styled/StyleHomeIntroMenu";
import {
	HomeIntrolBannerLeftIntroDownloadA,
	HomeIntrolBannerLeftIntroDownloadButton,
	HomeIntrolBannerLeftIntroDownloadButton2,
	HomeIntrolBannerLeftIntroDownloadImg,
} from "./styled/StyledHomeBanner";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import { HomeInstructNew } from "./styled/HomeStyles";

export default function HomeMainV3() {
	const { lang } = useLanguage();
	const [videoError, setVideoError] = useState(false);
	return (
		<HomeInstructWrapv2 id="home-instruct">
			<HomeInstructNew>
				<HomeInstructInnerv2>
					<HomeInstructLeftv2>
						<HomeInstructLeftv2Title>{TranslateLabels[lang]?.HOME_PAGEV2_TITLE}</HomeInstructLeftv2Title>
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
					</HomeInstructLeftv2>
					<HomeInstructPhone>
						<HomeInstructPhoneWrap>
							<HomeInstructPhoneImg
								src="./static/img/PhoneCase.png"
								alt="Phone_Case"
							/>
							<HomeInstructPhoneImgLeft
								src="./static/img/wirel.png"
								alt={TranslateLabels[lang]?.ALT_GLOW_BOOK_APP}
							/>
							<HomeInstructPhoneImgRight
								src="./static/img/wirer.png"
								alt={TranslateLabels[lang]?.ALT_GLOW_BOOK_HOME}
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
							<HomeInstructPhoneStepsWrap>
								<HomeInstructPhoneStepsTitle>
									{TranslateLabels[lang]?.HOME_PAGEV2__SPA_3STEP}
								</HomeInstructPhoneStepsTitle>
								<HomeInstructPhoneStepsUl>
									<HomeInstructPhoneSteps>
										{TranslateLabels[lang]?.HOME_PAGEV2__SPA_3STEP_CONTENT_1}
									</HomeInstructPhoneSteps>
									<HomeInstructPhoneSteps>
										{TranslateLabels[lang]?.HOME_PAGEV2__SPA_3STEP_CONTENT_2}
									</HomeInstructPhoneSteps>
									<HomeInstructPhoneSteps>
										{TranslateLabels[lang]?.HOME_PAGEV2__SPA_3STEP_CONTENT_3}
									</HomeInstructPhoneSteps>
								</HomeInstructPhoneStepsUl>
							</HomeInstructPhoneStepsWrap>
							<HomeInstructPhoneServiceWrap>
								<HomeInstructPhoneStepsTitle>
									{TranslateLabels[lang]?.HOME_PAGEV2_SERVICE}
								</HomeInstructPhoneStepsTitle>
								<HomeInstructPhoneStepsUl>
									<HomeInstructPhoneSteps>
										{TranslateLabels[lang]?.HOME_PAGEV2_SERVICE_CONTEN_1}
									</HomeInstructPhoneSteps>
									<HomeInstructPhoneSteps>
										{TranslateLabels[lang]?.HOME_PAGEV2_SERVICE_CONTEN_2}
									</HomeInstructPhoneSteps>
									<HomeInstructPhoneSteps>
										{TranslateLabels[lang]?.HOME_PAGEV2_SERVICE_CONTEN_3}
									</HomeInstructPhoneSteps>
									{/* <HomeInstructPhoneSteps>
									{TranslateLabels[lang]?.HOME_PAGEV2_SERVICE_CONTEN_4}
								</HomeInstructPhoneSteps>
								<HomeInstructPhoneSteps>
									{TranslateLabels[lang]?.HOME_PAGEV2_SERVICE_CONTEN_5}
								</HomeInstructPhoneSteps>
								<HomeInstructPhoneSteps>
									{TranslateLabels[lang]?.HOME_PAGEV2_SERVICE_CONTEN_6}
								</HomeInstructPhoneSteps>
								<HomeInstructPhoneSteps>
									{TranslateLabels[lang]?.HOME_PAGEV2_SERVICE_CONTEN_7}
								</HomeInstructPhoneSteps> */}
								</HomeInstructPhoneStepsUl>
							</HomeInstructPhoneServiceWrap>
						</HomeInstructPhoneWrap>
					</HomeInstructPhone>
					<HomeInstructRightv2>
						<HomeInstructRightv2Inner>
							<HomeInstructRightv2ImgWrap>
								<HomeInstructRightv2Img
									src="./static/img/Convenient.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_TL}
								/>
							</HomeInstructRightv2ImgWrap>
							<HomeInstructRightv2ContentWrap>
								<HomeInstructRightv2Title>
									{TranslateLabels[lang]?.HOME_PAGEV2_TL}
								</HomeInstructRightv2Title>
								<HomeInstructRightv2Content>
									{TranslateLabels[lang]?.HOME_PAGEV2_TL_CT}
								</HomeInstructRightv2Content>
							</HomeInstructRightv2ContentWrap>
						</HomeInstructRightv2Inner>
						<HomeInstructRightv2Inner>
							<HomeInstructRightv2ImgWrap>
								<HomeInstructRightv2Img
									src="./static/img/Price.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_RR}
								/>
							</HomeInstructRightv2ImgWrap>
							<HomeInstructRightv2ContentWrap>
								<HomeInstructRightv2Title>
									{TranslateLabels[lang]?.HOME_PAGEV2_GC}
								</HomeInstructRightv2Title>
								<HomeInstructRightv2Content>
									{TranslateLabels[lang]?.HOME_PAGEV2_GC_CT}
								</HomeInstructRightv2Content>
							</HomeInstructRightv2ContentWrap>
						</HomeInstructRightv2Inner>
						<HomeInstructRightv2Inner>
							<HomeInstructRightv2ImgWrap>
								<HomeInstructRightv2Img
									src="./static/img/Quality.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_DG}
								/>
							</HomeInstructRightv2ImgWrap>
							<HomeInstructRightv2ContentWrap>
								<HomeInstructRightv2Title>
									{TranslateLabels[lang]?.HOME_PAGEV2_CL}
								</HomeInstructRightv2Title>
								<HomeInstructRightv2Content>
									{TranslateLabels[lang]?.HOME_PAGEV2_CL_CT}
								</HomeInstructRightv2Content>
							</HomeInstructRightv2ContentWrap>
						</HomeInstructRightv2Inner>
					</HomeInstructRightv2>
				</HomeInstructInnerv2>
			</HomeInstructNew>
		</HomeInstructWrapv2>
	);
}
