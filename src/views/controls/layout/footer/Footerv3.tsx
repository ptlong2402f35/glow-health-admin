import React, { useState } from "react";
import {
	FooterContent,
	FooterContentInner,
	FooterContentInnerv3,
	FooterContentv2,
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
	FooterQuickLinkItemv2,
	FooterWrapper,
	Footerv3RegisterforBCT,
	Footerv3RegisterforBCTImg,
} from "./StyledFooterv2";
import { TranslateLabels, useLanguage } from "../content/MultiLanguge";

export default function Footerv3() {
	const { lang } = useLanguage();
	return (
		<FooterWrapper>
			<FooterContentInner>
				<FooterContentv2>
					<FooterContentInnerv3>
						<FooterQuickLinkItemA to="/chinh-sach">
							<FooterQuickLinkItemv2>
								{TranslateLabels[lang]?.FOOTER_PRIVACY_POLICY}
							</FooterQuickLinkItemv2>
						</FooterQuickLinkItemA>
						<FooterQuickLinkItemA to="/about">
							<FooterQuickLinkItemv2>{TranslateLabels[lang]?.FOOTER_ABOUT_GLOW}</FooterQuickLinkItemv2>
						</FooterQuickLinkItemA>
						<FooterQuickLinkItemA to="/dieu-khoan">
							<FooterQuickLinkItemv2>{TranslateLabels[lang]?.FOOTER_TERM_SERVICE}</FooterQuickLinkItemv2>
						</FooterQuickLinkItemA>
						<FooterQuickLinkItemA to="/partner">
							<FooterQuickLinkItemv2>{TranslateLabels[lang]?.FOOTER_GLOW_PARTNER}</FooterQuickLinkItemv2>
						</FooterQuickLinkItemA>

						<FooterQuickLinkItemA to="/quy-che">
							<FooterQuickLinkItemv2>
								{TranslateLabels[lang]?.FOOTER_OPERATING_REGULATION}
							</FooterQuickLinkItemv2>
						</FooterQuickLinkItemA>
					</FooterContentInnerv3>
					<Footerv3RegisterforBCT>
						<Footerv3RegisterforBCTImg src="./static/img/RegisterforBCT.png" />
					</Footerv3RegisterforBCT>
				</FooterContentv2>
			</FooterContentInner>
		</FooterWrapper>
	);
}
