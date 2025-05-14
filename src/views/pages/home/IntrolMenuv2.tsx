import React from "react";
import {
	HomeIntroInner,
	HomeIntroMenuBarLanguage,
	HomeIntroMenuBarLanguagev2,
	HomeIntroMenuBarLeft,
	HomeIntroMenuBarRight,
	HomeIntroMenuBarRightRes,
	HomeIntroMenuBarRoute,
	HomeIntroMenuBarRouteA,
	HomeIntroMenuBarRoutev2,
	HomeIntroWrapper,
	HomeIntroWrapperv2,
	HomeIntroWrapperv3,
	HomeRouterLinkActive,
	HomeRouterLinkActiveImg,
} from "./styled/StyleHomeIntroMenu";
import { HomeIntroMenuRes, HomeIntroMenuResv2 } from "./HomeIntroMenu";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import { OptionLanguage, OptionLanguageRes } from "./HomeIntroMenuv3";

export default function IntroMenuv2() {
	const { lang } = useLanguage();

	return (
		<HomeIntroWrapperv2>
			<HomeIntroInner>
				<HomeIntroMenuBarLeft>
					<HomeRouterLinkActive to="/">
						<HomeRouterLinkActiveImg
							src="./static/img/GlowLogor.png"
							alt={TranslateLabels[lang]?.ALT_MENU_LOGO}
						/>
					</HomeRouterLinkActive>
				</HomeIntroMenuBarLeft>
				<HomeIntroMenuBarRightRes>
					<OptionLanguageRes />
					<HomeIntroMenuResv2 />
				</HomeIntroMenuBarRightRes>
				<HomeIntroMenuBarRight>
					<HomeIntroMenuBarRouteA to="/">
						<HomeIntroMenuBarRoutev2>{TranslateLabels[lang]?.HOME_PAGE}</HomeIntroMenuBarRoutev2>
					</HomeIntroMenuBarRouteA>

					<HomeIntroMenuBarRouteA to="/about">
						<HomeIntroMenuBarRoutev2>{TranslateLabels[lang]?.ABOUT_GLOW}</HomeIntroMenuBarRoutev2>
					</HomeIntroMenuBarRouteA>

					<HomeIntroMenuBarRouteA to="/partner">
						<HomeIntroMenuBarRoutev2>
							{TranslateLabels[lang]?.HOME_PAGE_GLOW_PARTNER}
						</HomeIntroMenuBarRoutev2>
					</HomeIntroMenuBarRouteA>
					<HomeIntroMenuBarRouteA to="/blog">
						<HomeIntroMenuBarRoutev2>{TranslateLabels[lang]?.HOME_PAGE_GLOW_BLOG}</HomeIntroMenuBarRoutev2>
					</HomeIntroMenuBarRouteA>
					<HomeIntroMenuBarLanguagev2>
						<OptionLanguage />
					</HomeIntroMenuBarLanguagev2>
				</HomeIntroMenuBarRight>
			</HomeIntroInner>
		</HomeIntroWrapperv2>
	);
}

export function IntroMenuv3() {
	const { lang } = useLanguage();

	return (
		<HomeIntroWrapperv3>
			<HomeIntroInner>
				<HomeIntroMenuBarLeft>
					<HomeRouterLinkActive to="/">
						<HomeRouterLinkActiveImg
							src="./static/img/GlowLogor.png"
							alt={TranslateLabels[lang]?.ALT_MENU_LOGO}
						/>
					</HomeRouterLinkActive>
				</HomeIntroMenuBarLeft>
				<HomeIntroMenuBarRightRes>
					<OptionLanguageRes />
					<HomeIntroMenuResv2 />
				</HomeIntroMenuBarRightRes>
				<HomeIntroMenuBarRight>
					<HomeIntroMenuBarRouteA to="/">
						<HomeIntroMenuBarRoute>{TranslateLabels[lang]?.HOME_PAGE}</HomeIntroMenuBarRoute>
					</HomeIntroMenuBarRouteA>

					<HomeIntroMenuBarRouteA to="/about">
						<HomeIntroMenuBarRoute>{TranslateLabels[lang]?.ABOUT_GLOW}</HomeIntroMenuBarRoute>
					</HomeIntroMenuBarRouteA>

					<HomeIntroMenuBarRouteA to="/partner">
						<HomeIntroMenuBarRoute>{TranslateLabels[lang]?.HOME_PAGE_GLOW_PARTNER}</HomeIntroMenuBarRoute>
					</HomeIntroMenuBarRouteA>
					<HomeIntroMenuBarRouteA to="/blog">
						<HomeIntroMenuBarRoute>{TranslateLabels[lang]?.HOME_PAGE_GLOW_BLOG}</HomeIntroMenuBarRoute>
					</HomeIntroMenuBarRouteA>
					<HomeIntroMenuBarLanguage>
						<OptionLanguage />
					</HomeIntroMenuBarLanguage>
				</HomeIntroMenuBarRight>
			</HomeIntroInner>
		</HomeIntroWrapperv3>
	);
}
