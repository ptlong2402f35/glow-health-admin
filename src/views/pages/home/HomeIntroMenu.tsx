import React, { useState } from "react";
import {
	DropdownButton,
	DropdownButtonRes,
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
	HomeMenuContainer,
	HomeMenuButton,
	HomeMenuItems,
	HomeMenuItem,
	HomeMenuImage,
	HomeMenuItemUl,
	HomeMenuItemA,
	LanguageDropDown,
	HomeMenuItemB,
	HomeMenuItemsv2,
	HomeMenuItemsv3,
	HomeMenuButtonLink,
	HomeMenuImagev2,
} from "./styled/StyleHomeIntroMenu";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import useLogout from "../../hooks/auth/useLogout";
import useLoadedUser from "../../hooks/auth/useLoadedUser";
import DialogSupportUser from "../ListVoucher/component/SupportUser";
import { useLocation, useParams } from "react-router";
import { SearchBox } from "./HomeIntroMenuv3";

export default function HomeIntroMenu() {
	const { lang } = useLanguage();

	return (
		<HomeIntroWrapper>
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
					<HomeIntroMenuRes />
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
		</HomeIntroWrapper>
	);
}

export function OptionLanguage() {
	const { lang, setLang, languageOptions } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const handleLanguageChange = (option: any) => {
		setLang(option.code);
		setIsOpen(false);
	};

	return (
		<SelectLanguage>
			<DropdownButton onClick={() => setIsOpen(!isOpen)}>
				<LanguageImg
					src={languageOptions.find((option) => option.code === lang)?.img}
					alt={TranslateLabels[lang]?.ALT_MENU_LOGO_RES}
				/>
				{languageOptions.find((option) => option.code === lang)?.name}
				<LanguageDropDown>
					<i
						className="fa fa-angle-down"
						aria-hidden="true"></i>
				</LanguageDropDown>
			</DropdownButton>
			<OptionsList>
				{languageOptions.map((option) => (
					<OptionLi
						key={option.code}
						onClick={() => handleLanguageChange(option)}>
						<LanguageImg
							src={option.img}
							alt={TranslateLabels[lang]?.ALT_MENU_LOGO_RES}
						/>{" "}
						{option.name}
					</OptionLi>
				))}
			</OptionsList>
		</SelectLanguage>
	);
}
export function OptionLanguageRes() {
	const { lang, setLang, languageOptions } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const handleLanguageChange = (option: any) => {
		setLang(option.code);
		setIsOpen(false);
	};

	return (
		<SelectLanguage>
			<DropdownButtonRes onClick={() => setIsOpen(!isOpen)}>
				<LanguageImg
					src={languageOptions.find((option) => option.code === lang)?.img}
					alt={TranslateLabels[lang]?.ALT_MENU_LOGO_RES}
				/>
			</DropdownButtonRes>
			<OptionsList>
				{languageOptions.map((option) => (
					<OptionLi
						key={option.code}
						onClick={() => handleLanguageChange(option)}>
						<LanguageImg
							src={option.img}
							alt={TranslateLabels[lang]?.ALT_MENU_LOGO_RES}
						/>{" "}
						{option.name}
					</OptionLi>
				))}
			</OptionsList>
		</SelectLanguage>
	);
}

export function HomeIntroMenuRes() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const { landingPageLogout } = useLogout();
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};
	const { user } = useLoadedUser();
	const { lang, setLang, languageOptions } = useLanguage();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const openSupport = () => {
		setIsDialogOpen(true);
	};

	const location = useLocation();
	return (
		<HomeMenuContainer>
			<HomeMenuButton>
				<HomeMenuImage src="./static/img/menu-line-horizontal.png" alt="Biểu tượng menu"/>
			</HomeMenuButton>
			<HomeMenuItemsv2>
				<HomeMenuItemUl>
					<HomeMenuItem>
						<HomeMenuItemA to="/">{TranslateLabels[lang]?.FOOTER_HOME_PAGE}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/massage-tai-nha">{TranslateLabels[lang]?.MASSAGE_AT_HOME}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/dia-diem/massage">{TranslateLabels[lang]?.MASSAGE_LOCATION}</HomeMenuItemA>
					</HomeMenuItem>
					{/* <HomeMenuItem>
						<HomeMenuItemB onClick={openSupport}>{TranslateLabels[lang]?.LOGIN_SUPPORT}</HomeMenuItemB>
					</HomeMenuItem> */}
					<HomeMenuItem>
						{user && (
							<HomeMenuItemA to="/danh-sach-voucher">{TranslateLabels[lang]?.LOGIN_ORDER}</HomeMenuItemA>
						)}
					</HomeMenuItem>
					{user ? (
						<HomeMenuItem>
							<HomeMenuItemB onClick={landingPageLogout}>
								{TranslateLabels[lang]?.LOGIN_LOG_OUT}
							</HomeMenuItemB>
						</HomeMenuItem>
					) : (
						<HomeMenuItem>
							{/* <HomeMenuItemA to={`/dang-nhap?back=${encodeURIComponent(location.pathname)}`}>{TranslateLabels[lang]?.LOGIN_LOG_IN_RESGISTER}</HomeMenuItemA> */}
							<></>
						</HomeMenuItem>
					)}
				</HomeMenuItemUl>
			</HomeMenuItemsv2>
			<DialogSupportUser
				isDialogOpen={isDialogOpen}
				setIsDialogOpen={setIsDialogOpen}
			/>
		</HomeMenuContainer>
	);
}
export function HomeIntroMenuResv2() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};
	const { lang, setLang, languageOptions } = useLanguage();

	return (
		<HomeMenuContainer>
			<HomeMenuButton onClick={toggleMenu}>
				<HomeMenuImage src="./static/img/menu-line-horizontal.png" alt="Biểu tượng menu"/>
			</HomeMenuButton>
			<HomeMenuItems>
				<HomeMenuItemUl>
					<HomeMenuItem>
						<HomeMenuItemA to="/">{TranslateLabels[lang]?.FOOTER_HOME_PAGE}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/tai-nha">{TranslateLabels[lang]?.HEADER_SPA_AT_HOME}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/about">{TranslateLabels[lang]?.FOOTER_ABOUT_GLOW}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/partner">{TranslateLabels[lang]?.FOOTER_GLOW_PARTNER}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/chinh-sach">{TranslateLabels[lang]?.FOOTER_PRIVACY_POLICY}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/dieu-khoan">{TranslateLabels[lang]?.FOOTER_TERM_SERVICE}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/quy-che">
							{TranslateLabels[lang]?.FOOTER_OPERATING_REGULATION}
						</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/blog">{TranslateLabels[lang]?.HOME_PAGE_GLOW_BLOG}</HomeMenuItemA>
					</HomeMenuItem>
					<HomeMenuItem>
						<HomeMenuItemA to="/dang-nhap">Đăng nhập</HomeMenuItemA>
					</HomeMenuItem>
				</HomeMenuItemUl>
			</HomeMenuItems>
		</HomeMenuContainer>
	);
}

export function HomeIntroMenuResv3() {
	let { lang } = useParams<{ lang: string }>();
	return (
		<HomeMenuContainer>
			<HomeMenuButtonLink href={`/${lang || "vi"}/tim-kiem`}>
				<HomeMenuImagev2 src="./static/img/searchpage.png" alt="Biểu tượng tìm kiếm"/>
			</HomeMenuButtonLink>
		</HomeMenuContainer>
	);
}
