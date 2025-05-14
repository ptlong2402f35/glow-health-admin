import React, { useState } from "react";
import {
	FooterContent,
	FooterContentInner,
	FooterDescription,
	FooterDescriptionHeader,
	FooterDescriptionMainHeader,
	FooterDescriptionMainHeaderA,
	FooterDescriptionMainHeaderImg,
	FooterIconItem,
	FooterIconItemA,
	FooterIconItemImg,
	FooterIcons,
	FooterQuickLink,
	FooterQuickLinkGroup,
	FooterQuickLinkHeader,
	FooterQuickLinkItem,
	FooterQuickLinkItemA,
	FooterWrapper,
} from "./StyledFooterv2";
import { TranslateLabels, useLanguage } from "../content/MultiLanguge";

export default function Footerv2() {
	const { lang } = useLanguage();
	return (
		<FooterWrapper>
			<FooterContentInner>
				<FooterContent>
					<FooterDescription>
						<FooterDescriptionMainHeader>
							<FooterDescriptionMainHeaderA>
								<FooterDescriptionMainHeaderImg
									src="./static/img/Group.png"
									alt={TranslateLabels[lang]?.ALT_MENU_LOGO}
								/>
							</FooterDescriptionMainHeaderA>
						</FooterDescriptionMainHeader>
						<FooterDescriptionHeader>{TranslateLabels[lang]?.FOOTER_TITLE}</FooterDescriptionHeader>
						<FooterIcons>
							<FooterIconItemA href="https://www.facebook.com/Glowapp2022">
								<FooterIconItem>
									<FooterIconItemImg src="./static/img/facebook.png" />
								</FooterIconItem>
							</FooterIconItemA>

							<FooterIconItem>
								<FooterIconItemImg src="./static/img/Instagram.png" />
							</FooterIconItem>

							<FooterIconItem>
								<FooterIconItemImg src="./static/img/Twitter.png" />
							</FooterIconItem>

							<FooterIconItemA href="https://www.linkedin.com/company/glow-vietnam">
								<FooterIconItem>
									<FooterIconItemImg src="./static/img/LinkedIn.png" />
								</FooterIconItem>
							</FooterIconItemA>

							<FooterIconItemA href="https://www.tiktok.com/@khoedepcungglow">
								<FooterIconItem>
									<FooterIconItemImg src="./static/img/Tiktok.png" />
								</FooterIconItem>
							</FooterIconItemA>
						</FooterIcons>
					</FooterDescription>
					<FooterQuickLinkGroup>
						<FooterQuickLink>
							<FooterQuickLinkHeader>{TranslateLabels[lang]?.FOOTER_LINK}</FooterQuickLinkHeader>
							<FooterQuickLinkItemA to="/">
								<FooterQuickLinkItem>{TranslateLabels[lang]?.FOOTER_HOME_PAGE}</FooterQuickLinkItem>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/about">
								<FooterQuickLinkItem>{TranslateLabels[lang]?.FOOTER_ABOUT_GLOW}</FooterQuickLinkItem>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/partner">
								<FooterQuickLinkItem>{TranslateLabels[lang]?.FOOTER_GLOW_PARTNER}</FooterQuickLinkItem>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/chinh-sach">
								<FooterQuickLinkItem>
									{TranslateLabels[lang]?.FOOTER_PRIVACY_POLICY}
								</FooterQuickLinkItem>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/dieu-khoan">
								<FooterQuickLinkItem>{TranslateLabels[lang]?.FOOTER_TERM_SERVICE}</FooterQuickLinkItem>
							</FooterQuickLinkItemA>
							<FooterQuickLinkItemA to="/quy-che">
								<FooterQuickLinkItem>
									{TranslateLabels[lang]?.FOOTER_OPERATING_REGULATION}
								</FooterQuickLinkItem>
							</FooterQuickLinkItemA>
						</FooterQuickLink>

						<FooterQuickLink>
							<FooterQuickLinkHeader>{TranslateLabels[lang]?.FOOTER_INFOMATION}</FooterQuickLinkHeader>
							<FooterQuickLinkItem>{TranslateLabels[lang]?.FOOTER_ADDRESS}</FooterQuickLinkItem>
							<FooterQuickLinkItem>0888129100</FooterQuickLinkItem>
							<FooterQuickLinkItem>
								{TranslateLabels[lang]?.FOOTER_BUSINESS_NUMBER}
								<br />
								0110124791
							</FooterQuickLinkItem>
						</FooterQuickLink>
					</FooterQuickLinkGroup>
				</FooterContent>
			</FooterContentInner>
		</FooterWrapper>
	);
}
