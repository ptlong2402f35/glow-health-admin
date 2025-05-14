import React, { useState } from "react";
import {
	DropdownButton,
	HomeIntroInner,
	HomeIntroMenuBarLanguage,
	HomeIntroMenuBarLeft,
	HomeIntroMenuBarRight,
	HomeIntroMenuBarRightRes,
	HomeIntroMenuBarRoute,
	HomeIntroMenuBarRouteA,
	HomeIntroWrapper,
	HomeRouterLinkActive,
	HomeRouterLinkActiveImg,
	LanguageImg,
	OptionLi,
	OptionsList,
	SelectLanguage,
	LanguageDropDown,
	LanguageButton,
	LanguageImgV2,
	LanguageButtonWrap,
	DropdownButtonRes,
} from "./styled/StyleHomeIntroMenu";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import { HomeIntroMenuRes } from "./HomeIntroMenu";
import { useHistory, useLocation } from "react-router";
import { SearchBoxDiv } from "./styled/HomeStyles";
import useStaticContext from "../../hooks/useStaticContext";

export default function HomeIntroMenuv3() {
	const { lang } = useLanguage();

	return (
		<HomeIntroWrapper>
			<HomeIntroInner>
				<HomeIntroMenuBarLeft>
					<HomeRouterLinkActive to="/">
						<HomeRouterLinkActiveImg
							src="./static/img/Group.png"
							alt={TranslateLabels[lang]?.ALT_MENU_LOGO}
						/>
					</HomeRouterLinkActive>
				</HomeIntroMenuBarLeft>
				<HomeIntroMenuBarRightRes>
					{/* <OptionLanguageRes /> */}
					<OptionLanguageNoBundle />
					<HomeIntroMenuRes />
				</HomeIntroMenuBarRightRes>
				<HomeIntroMenuBarRight>
					<HomeIntroMenuBarRouteA to="/">
						<>{TranslateLabels[lang]?.HOME_PAGE}</>
					</HomeIntroMenuBarRouteA>

					<HomeIntroMenuBarRouteA to="/about">
						<>{TranslateLabels[lang]?.ABOUT_GLOW}</>
					</HomeIntroMenuBarRouteA>

					<HomeIntroMenuBarRouteA to="/partner">
						<>{TranslateLabels[lang]?.HOME_PAGE_GLOW_PARTNER}</>
					</HomeIntroMenuBarRouteA>
					<HomeIntroMenuBarRouteA to="/blog">
						<>{TranslateLabels[lang]?.HOME_PAGE_GLOW_BLOG}</>
					</HomeIntroMenuBarRouteA>
					<HomeIntroMenuBarLanguage>
						<OptionLanguageNoBundle />
					</HomeIntroMenuBarLanguage>
					<button></button>
					<div>
						<SearchBox />
					</div>
				</HomeIntroMenuBarRight>
			</HomeIntroInner>
		</HomeIntroWrapper>
	);
}

export function OptionLanguage() {
	const { lang, setLang, languageOptions } = useLanguage();
	const history = useHistory();

	const handleLanguageChange = (code: any) => {
		setLang(code);
		const newPathname = code
			? `/${code}${window.location.pathname.replace(/^\/[a-z]{2}\//, "/")}`
			: window.location.pathname;

		history.push(newPathname);
	};

	return (
		<LanguageButtonWrap>
			{languageOptions.map((option) => (
				<LanguageButton
					key={option.code}
					onClick={() => handleLanguageChange(option.code)}
					isSelected={lang === option.code}>
					<LanguageImgV2
						src={option.img}
						alt={TranslateLabels[lang]?.ALT_MENU_LOGO_RES}
					/>
				</LanguageButton>
			))}
		</LanguageButtonWrap>
	);
}

export function OptionLanguageNoBundle() {
	const { lang, languageOptions } = useLanguage();
	const { search, pathname, hash } = useLocation();
	const { staticContext } = useStaticContext();
	const currentPathWithoutLang = (staticContext?.data?.originalLink||pathname).replace(`/${lang}`, "");
	return (
		<LanguageButtonWrap>
			{languageOptions.map((option) => (
				<a
					href={`/${option.code}${currentPathWithoutLang}${search ?? ""}${hash ?? ""}`}
					key={option.code}>
					<LanguageButton
						key={option.code}
						isSelected={lang === option.code}>
						<LanguageImgV2
							src={option.img}
							alt={TranslateLabels[lang]?.ALT_MENU_LOGO_RES}
						/>
					</LanguageButton>
				</a>
			))}
		</LanguageButtonWrap>
	);
}
export function OptionLanguageRes() {
	const { lang, setLang, languageOptions } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const history = useHistory();

	const handleLanguageChange = (code: any) => {
		setLang(code);
		const newPathname = code
			? `/${code}${window.location.pathname.replace(/^\/[a-z]{2}\//, "/")}`
			: window.location.pathname;
		setIsOpen(false);
		history.push(newPathname);
	};

	return (
		<SelectLanguage>
			<DropdownButtonRes onClick={() => setIsOpen(!isOpen)}>
				<LanguageImg
					src={languageOptions.find((option) => option.code === lang)?.imgRes}
					alt={TranslateLabels[lang]?.ALT_MENU_LOGO_RES}
				/>
			</DropdownButtonRes>
			{isOpen && (
				<OptionsList>
					{languageOptions.map((option) => (
						<OptionLi
							key={option.code}
							onClick={() => handleLanguageChange(option.code)}>
							<LanguageImg
								src={option.imgRes}
								alt={TranslateLabels[lang]?.ALT_MENU_LOGO_RES}
							/>{" "}
							{option.name}
						</OptionLi>
					))}
				</OptionsList>
			)}
		</SelectLanguage>
	);
}

export function SearchBox(props: { mobile?: boolean }) {
	const { lang } = useLanguage();
	return (
		<SearchBoxDiv
			dangerouslySetInnerHTML={{
				__html: `
			
			<img src=${props.mobile ? "./static/img/searchpagegreen.png" : "./static/img/searchpage.png"} alt="Biểu tượng tìm kiếm"/>
			 <input id=${props.mobile ? "searchInputMobile" : "searchInput"} type="text" placeholder='${
					TranslateLabels[lang || "vi"]?.SEARCH || "Tìm kiếm"
				}' onkeydown="handleSearch(event, ${props.mobile})" />`,
			}}
		/>
	);
}
