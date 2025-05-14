import React, { useState } from "react";
import {
	FooterContent,
	FooterContentInner,
	FooterContentSEO,
	FooterDescription,
	FooterDescriptionHeader,
	FooterDescriptionHeaderv2,
	FooterDescriptionMainHeader,
	FooterDescriptionMainHeaderA,
	FooterDescriptionMainHeaderImg,
	FooterDescriptionMainHeaderv2,
	FooterDescriptionv2,
	FooterIconItem,
	FooterIconItemA,
	FooterIconItemImg,
	FooterIconItemv2,
	FooterIcons,
	FooterIconsv2,
	FooterQuickLink,
	FooterQuickLinkGroup,
	FooterQuickLinkHeader,
	FooterQuickLinkHeaderv2,
	FooterQuickLinkItem,
	FooterQuickLinkItemA,
	FooterQuickLinkItemv3,
	FooterWrapper,
	FooterWrapperv2,
	Footerv3RegisterforBCT,
	Footerv3RegisterforBCTImg,
	Footerv3RegisterforBCTImgv2,
	Footerv3RegisterforBCTv2,
} from "./StyledFooterv2";
import { TranslateLabels, useLanguage } from "../content/MultiLanguge";
import { HomeInstructLeftv2DownloadWrap } from "../../../pages/home/styled/StyleHomeIntroMenu";
import {
	HomeIntrolBannerLeftIntroDownloadA,
	HomeIntrolBannerLeftIntroDownloadButton,
	HomeIntrolBannerLeftIntroDownloadButton2,
	HomeIntrolBannerLeftIntroDownloadImg,
} from "../../../pages/home/styled/StyledHomeBanner";

export default function Footerv4() {
	const { lang } = useLanguage();
	return (
		<FooterWrapperv2>
			<FooterContentInner>
				<FooterContent>
					<FooterDescriptionv2>
						<FooterDescriptionMainHeaderv2>
							<FooterDescriptionMainHeaderA href="/">
								<FooterDescriptionMainHeaderImg
									src="./static/img/Group.png"
									alt={TranslateLabels[lang]?.ALT_MENU_LOGO}
								/>
							</FooterDescriptionMainHeaderA>
							<FooterDescriptionHeaderv2>
								{TranslateLabels[lang]?.HOME_PAGEV2_FOOTER}
							</FooterDescriptionHeaderv2>
						</FooterDescriptionMainHeaderv2>
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
						{/* <Footerv3RegisterforBCTv2>
							<a
								href="http://online.gov.vn/Home/AppDetails/2466"
								target="_blank">
								<Footerv3RegisterforBCTImgv2
									src="./static/img/RegisterforBCT.png"
									alt={TranslateLabels[lang]?.ALT_IMG_BCT}
								/>
							</a>
						</Footerv3RegisterforBCTv2> */}
					</FooterDescriptionv2>
					<FooterQuickLinkGroup>
						<FooterQuickLink>
							<FooterQuickLinkHeaderv2>{TranslateLabels[lang]?.FOOTER_LINK}</FooterQuickLinkHeaderv2>
							<FooterQuickLinkItemA to="/">
								<FooterQuickLinkItemv3>{TranslateLabels[lang]?.FOOTER_HOME_PAGE}</FooterQuickLinkItemv3>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/about">
								<FooterQuickLinkItemv3>
									{TranslateLabels[lang]?.FOOTER_ABOUT_GLOW}
								</FooterQuickLinkItemv3>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/partner">
								<FooterQuickLinkItemv3>
									{TranslateLabels[lang]?.FOOTER_GLOW_PARTNER}
								</FooterQuickLinkItemv3>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/chinh-sach">
								<FooterQuickLinkItemv3>
									{TranslateLabels[lang]?.FOOTER_PRIVACY_POLICY}
								</FooterQuickLinkItemv3>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/dieu-khoan">
								<FooterQuickLinkItemv3>
									{TranslateLabels[lang]?.FOOTER_TERM_SERVICE}
								</FooterQuickLinkItemv3>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/quy-che">
								<FooterQuickLinkItemv3>
									{TranslateLabels[lang]?.FOOTER_OPERATING_REGULATION}
								</FooterQuickLinkItemv3>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/blog">
								<FooterQuickLinkItemv3>
									{TranslateLabels[lang]?.HOME_PAGE_GLOW_BLOG}
								</FooterQuickLinkItemv3>
							</FooterQuickLinkItemA>
						</FooterQuickLink>

						<FooterQuickLink>
							<FooterQuickLinkHeaderv2>
								{TranslateLabels[lang]?.FOOTER_INFOMATION}
							</FooterQuickLinkHeaderv2>
							<FooterQuickLinkItemv3>{TranslateLabels[lang]?.FOOTER_ADDRESS}</FooterQuickLinkItemv3>
							<FooterQuickLinkItemv3>0888129100</FooterQuickLinkItemv3>
							<FooterQuickLinkItemv3>
								{TranslateLabels[lang]?.FOOTER_BUSINESS_NUMBER}
								<br />
								0110124791
							</FooterQuickLinkItemv3>
							<FooterQuickLinkItemv3>support@glowvietnam.com</FooterQuickLinkItemv3>
						</FooterQuickLink>
					</FooterQuickLinkGroup>
					<FooterIconsv2>
						<FooterIconItemA href="https://www.facebook.com/Glowapp2022">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/fbft.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_FACE}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>

						<FooterIconItemA href="https://www.instagram.com/glowbooking?igsh=MWFocWk5ZWJkZTNsMA%3D%3D&utm_source=qr">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/itft.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_INSTA}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>
						<FooterIconItemA href="https://www.youtube.com/channel/UCTJqW76yGybbNiwafUa8DSw">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/youtubeft.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_YOUTUBE}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>

						<FooterIconItemA href="https://www.tripadvisor.com/Attraction_Review-g293924-d27478218-Reviews-Glow-Hanoi.html">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/tripadvisor.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_YOUTUBE}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>

						<FooterIconItemA href="https://twitter.com/glowvn">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/TwitterX.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_TWITTER}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>

						<FooterIconItemA href="https://www.linkedin.com/company/glow-vietnam">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/lift.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_LINK}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>

						<FooterIconItemA href="https://www.tiktok.com/@khoedepcungglow">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/tiktok11.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_TIKTOK}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>

						{/* <FooterIconItemA href="https://zalo.me/446450905233914858">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/zalo.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_ZALO}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>

						<FooterIconItemA href="http://qr.kakao.com/talk/iNUyXOuYJ55XWCniToPfOWi1kEQ-">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/kakao-talkft.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_KKT}
								/>
							</FooterIconItemv2>
						</FooterIconItemA>

						<FooterIconItemA href="https://liff.line.me/1645278921-kWRPP32q/?accountId=548xfiho">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/lineft.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_LINE}
								/>
							</FooterIconItemv2>
						</FooterIconItemA> */}
					</FooterIconsv2>
				</FooterContent>
				{/* <FooterContentSEO>
					{TranslateLabels[lang]?.FOOTER_CONTENT_SEO}
					<br></br>
					<br></br>
					{TranslateLabels[lang]?.FOOTER_CONTENT_SEO2}
					<br></br>
					{TranslateLabels[lang]?.FOOTER_CONTENT_SEO3}
					<br></br>
					<br></br>
					{TranslateLabels[lang]?.FOOTER_CONTENT_SEO4}
					<br></br>
					{TranslateLabels[lang]?.FOOTER_CONTENT_SEO5}
					<br></br>
					<br></br>
					{TranslateLabels[lang]?.FOOTER_CONTENT_SEO6}
					<br></br>
					{TranslateLabels[lang]?.FOOTER_CONTENT_SEO7}
					<br></br>
					<br></br>
					{TranslateLabels[lang]?.FOOTER_CONTENT_SEO8}
				</FooterContentSEO> */}
				<FooterContentSEO>
					© 2022. Công ty Cổ Phần Công nghệ BK Việt Nam. GPDKKD: 0110124791 do sở KH & ĐT TP.Hà Nội cấp ngày
					21/09/2022.
					<br></br>
					Địa chỉ: Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt
					Nam. Điện thoại: 0888129100. Email: support@glowvietnam.com
				</FooterContentSEO>
			</FooterContentInner>
		</FooterWrapperv2>
	);
}
