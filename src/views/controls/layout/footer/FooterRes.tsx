import React, { useState } from "react";
import {
	FooterContent,
	FooterContentInnerv2,
	FooterContentSEO,
	FooterContentSEORes,
	FooterContentv3,
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
	FooterQuickLinkItemv4,
	FooterQuickLinkv2,
	FooterQuickLinkv3,
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
	HomeIntrolBannerLeftIntroDownloadButton2v2,
	HomeIntrolBannerLeftIntroDownloadButtonv2,
	HomeIntrolBannerLeftIntroDownloadImg,
	HomeIntrolBannerLeftIntroDownloadImgv2,
} from "../../../pages/home/styled/StyledHomeBanner";

export default function FooterRes() {
	const { lang } = useLanguage();
	return (
		<FooterWrapperv2>
			<FooterContentInnerv2>
				<FooterContentv3>
					<FooterDescriptionv2>
						<FooterDescriptionMainHeaderv2>
							<FooterDescriptionMainHeaderA>
								<FooterDescriptionMainHeaderImg
									src="./static/img/Group.png"
									alt={TranslateLabels[lang]?.ALT_MENU_LOGO}
								/>
							</FooterDescriptionMainHeaderA>
							<FooterDescriptionHeaderv2>
								{TranslateLabels[lang]?.HOME_PAGEV2_FOOTER}
							</FooterDescriptionHeaderv2>
						</FooterDescriptionMainHeaderv2>
						<Footerv3RegisterforBCTv2></Footerv3RegisterforBCTv2>
					</FooterDescriptionv2>
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
						<FooterIconItemA href="https://www.youtube.com/channel/UCTJqW76yGybbNiwafUa8DSw">
							<FooterIconItemv2>
								<FooterIconItemImg
									src="./static/img/youtubeft.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_FAGE_YOUTUBE}
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
					<FooterQuickLinkGroup>
						<FooterQuickLinkv2>
							<FooterQuickLinkHeaderv2>{TranslateLabels[lang]?.FOOTER_LINK}</FooterQuickLinkHeaderv2>
							<FooterQuickLinkItemA to="/">
								<FooterQuickLinkItemv4>{TranslateLabels[lang]?.FOOTER_HOME_PAGE}</FooterQuickLinkItemv4>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/about">
								<FooterQuickLinkItemv4>
									{TranslateLabels[lang]?.FOOTER_ABOUT_GLOW}
								</FooterQuickLinkItemv4>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/partner">
								<FooterQuickLinkItemv4>
									{TranslateLabels[lang]?.FOOTER_GLOW_PARTNER}
								</FooterQuickLinkItemv4>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/chinh-sach">
								<FooterQuickLinkItemv4>
									{TranslateLabels[lang]?.FOOTER_PRIVACY_POLICY}
								</FooterQuickLinkItemv4>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/dieu-khoan">
								<FooterQuickLinkItemv4>
									{TranslateLabels[lang]?.FOOTER_TERM_SERVICE}
								</FooterQuickLinkItemv4>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/quy-che">
								<FooterQuickLinkItemv4>
									{TranslateLabels[lang]?.FOOTER_OPERATING_REGULATION}
								</FooterQuickLinkItemv4>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/blog">
								<FooterQuickLinkItemv4>
									{TranslateLabels[lang]?.HOME_PAGE_GLOW_BLOG}
								</FooterQuickLinkItemv4>
							</FooterQuickLinkItemA>
						</FooterQuickLinkv2>
						<FooterQuickLinkv3>
							<FooterQuickLinkHeaderv2>
								{TranslateLabels[lang]?.FOOTER_INFOMATION}
							</FooterQuickLinkHeaderv2>
							<FooterQuickLinkItemv4>{TranslateLabels[lang]?.FOOTER_ADDRESS}</FooterQuickLinkItemv4>
							<FooterQuickLinkItemv4>0888129100</FooterQuickLinkItemv4>
							<FooterQuickLinkItemv4>
								{TranslateLabels[lang]?.FOOTER_BUSINESS_NUMBER}
								<br />
								0110124791
							</FooterQuickLinkItemv4>
							<FooterQuickLinkItemv4>support@glowvietnam.com</FooterQuickLinkItemv4>
						</FooterQuickLinkv3>
					</FooterQuickLinkGroup>

					<HomeInstructLeftv2DownloadWrap>
						<HomeIntrolBannerLeftIntroDownloadButtonv2>
							<HomeIntrolBannerLeftIntroDownloadA href="https://apps.apple.com/vn/app/glow/id6443428819">
								<HomeIntrolBannerLeftIntroDownloadImgv2
									src="./static/img/appstore1.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_DOWNLOAD_GLOW_STORE}
								/>
							</HomeIntrolBannerLeftIntroDownloadA>
						</HomeIntrolBannerLeftIntroDownloadButtonv2>
						<HomeIntrolBannerLeftIntroDownloadButton2v2>
							<HomeIntrolBannerLeftIntroDownloadA href="https://play.google.com/store/apps/details?id=com.glow.mobileApp">
								<HomeIntrolBannerLeftIntroDownloadImgv2
									src="./static/img/ggplay1.png"
									alt={TranslateLabels[lang]?.ALT_GLOW_DOWNLOAD_GLOW_GG_PLAY}
								/>
							</HomeIntrolBannerLeftIntroDownloadA>
						</HomeIntrolBannerLeftIntroDownloadButton2v2>
					</HomeInstructLeftv2DownloadWrap>
					{/* <a
						href="http://online.gov.vn/Home/AppDetails/2466"
						target="_blank">
						<Footerv3RegisterforBCTImgv2
							src="./static/img/RegisterforBCT.png"
							alt={TranslateLabels[lang]?.ALT_IMG_BCT}
						/>
					</a> */}
					<FooterContentSEORes>
						© 2022. Công ty Cổ Phần Công nghệ BK Việt Nam. GPDKKD: 0110124791 do sở KH & ĐT TP.Hà Nội cấp
						ngày 21/09/2022.
						<br></br>
						Địa chỉ: Tầng 14, số 169 Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt
						Nam. Điện thoại: 0888129100. Email: support@glowvietnam.com
					</FooterContentSEORes>
				</FooterContentv3>
			</FooterContentInnerv2>
		</FooterWrapperv2>
	);
}
