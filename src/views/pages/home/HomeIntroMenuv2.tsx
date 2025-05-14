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
	HomeIntroMenuBarLogin,
	HomeLoginAvatar,
	HomeMenuLoginWrap,
	HomeMenuLoginName,
	HomeMenuLoginWrapWrap,
	HomeMenuLoginSelect,
	HomeMenuLoginOption,
	HomeMenuLoginOptionInner,
	HomeMenuLoginOptionLink,
} from "./styled/StyleHomeIntroMenu";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import { HomeIntroMenuRes, HomeIntroMenuResv3 } from "./HomeIntroMenu";
import { OptionLanguageNoBundle, OptionLanguageRes, SearchBox } from "./HomeIntroMenuv3";
import useLoadedUser from "../../hooks/auth/useLoadedUser";
import useLogout from "../../hooks/auth/useLogout";
import DialogSupportUser from "../ListVoucher/component/SupportUser";
import { useLocation } from "react-router";
import { AppDownloadBannerLeft, AppDownloadBannerLeftButton, AppDownloadBannerRight, AppDownloadBannerRightImg, AppDownloadBannerRightImgWrap, AppDownloadBannerRightLine, AppDownloadBannerRightText, AppDownloadBannerRightTitle, AppDownloadBannerTopShadow, AppDownloadBannerTopWrap } from "./styled/HomeStyles";

export default function HomeIntroMenuv2(props:{isMap?: boolean}) {
	const { lang } = useLanguage();
	const { user } = useLoadedUser();
	const { landingPageLogout } = useLogout();

	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};
	const openSupport = () => {
		setIsDialogOpen(true);
	};

	const location = useLocation();

	return (
		<HomeIntroWrapper isMap={props.isMap}>
			{!props.isMap &&  
			<AppDownloadBannerTop/>}

			
			<HomeIntroInner>
				<HomeIntroMenuBarLeft>
					<HomeRouterLinkActive to={"/"}>
						<HomeRouterLinkActiveImg
							src="./static/img/Group.png"
							alt={TranslateLabels[lang]?.ALT_MENU_LOGO}
						/>
					</HomeRouterLinkActive>
				</HomeIntroMenuBarLeft>
				<HomeIntroMenuBarRightRes>
					{/* <OptionLanguageRes /> */}
					<OptionLanguageNoBundle />
					<HomeIntroMenuResv3 />
					<HomeIntroMenuRes />
				</HomeIntroMenuBarRightRes>
				<HomeIntroMenuBarRight>
					<HomeIntroMenuBarRouteA to={`/`}>
						<>{TranslateLabels[lang]?.HOME_PAGE}</>
					</HomeIntroMenuBarRouteA>
					{/* <HomeIntroMenuBarRouteA to={`/about`}>
						<HomeIntroMenuBarRoute>{TranslateLabels[lang]?.ABOUT_GLOW}</HomeIntroMenuBarRoute>
					</HomeIntroMenuBarRouteA> */}
					<HomeIntroMenuBarRouteA to={`/massage-tai-nha`}>
						<>{TranslateLabels[lang]?.MASSAGE_AT_HOME}</>
					</HomeIntroMenuBarRouteA>

					<HomeIntroMenuBarRouteA to={`/dia-diem/massage`}>
						<>{TranslateLabels[lang]?.MASSAGE_LOCATION}</>
					</HomeIntroMenuBarRouteA>
					<HomeIntroMenuBarRouteA to={`/blog`}>
						<>{TranslateLabels[lang]?.HOME_PAGE_GLOW_BLOG}</>
					</HomeIntroMenuBarRouteA>
					<HomeIntroMenuBarLanguage>
						<OptionLanguageNoBundle />
					</HomeIntroMenuBarLanguage>
					<div>
						{" "}
						<SearchBox />
					</div>
					{user ? (
						<HomeMenuLoginWrapWrap onClick={toggleDropdown}>
							<HomeMenuLoginWrap>
								<HomeLoginAvatar
									src={"./static/img/User.png"}
									alt={"Home_Login_Avatar"}
								/>
								{/* <HomeMenuLoginName>{user.userName || user.phone || "Họ và tên"}</HomeMenuLoginName> */}
								<i
									className="fa fa-angle-down"
									aria-hidden="true"></i>
							</HomeMenuLoginWrap>
							{dropdownVisible && (
								<HomeMenuLoginSelect>
									<HomeMenuLoginOption onClick={openSupport}>
										<img
											src="./static/img/users02.png"
											alt={"Glow_Suport"}
										/>
										<HomeMenuLoginOptionInner>
											{TranslateLabels[lang]?.LOGIN_SUPPORT}
										</HomeMenuLoginOptionInner>
									</HomeMenuLoginOption>
									<HomeMenuLoginOptionLink to="/danh-sach-voucher">
										<HomeMenuLoginOption>
											<img
												src="./static/img/file.png"
												alt={"Glow_Order"}
											/>
											<HomeMenuLoginOptionInner>
												{TranslateLabels[lang]?.LOGIN_ORDER}
											</HomeMenuLoginOptionInner>
										</HomeMenuLoginOption>
									</HomeMenuLoginOptionLink>
									<HomeMenuLoginOption onClick={landingPageLogout}>
										<img
											src="./static/img/logout01.png"
											alt={"Glow_LogOut"}
										/>
										<HomeMenuLoginOptionInner>
											{TranslateLabels[lang]?.LOGIN_LOG_OUT}
										</HomeMenuLoginOptionInner>
									</HomeMenuLoginOption>
								</HomeMenuLoginSelect>
							)}
						</HomeMenuLoginWrapWrap>
					) : (
						// <HomeIntroMenuBarLogin to={`/dang-nhap?back=${encodeURIComponent(location.pathname)}`}>{TranslateLabels[lang]?.LOGIN_LOG_IN_RESGISTER}</HomeIntroMenuBarLogin>
						<></>
					)}
				</HomeIntroMenuBarRight>
			</HomeIntroInner>
			<DialogSupportUser
				isDialogOpen={isDialogOpen}
				setIsDialogOpen={setIsDialogOpen}
			/>
		</HomeIntroWrapper>
	);
}

export function OptionLanguage() {
	const { lang, setLang, languageOptions } = useLanguage();

	const handleLanguageChange = (code: any) => {
		setLang(code);
	};

	return (
		<LanguageButtonWrap>
			{languageOptions.map((option) => (
				<LanguageButton
					key={option.code}
					onClick={() => handleLanguageChange(option.code)}
					isSelected={lang === option.code}>
					<LanguageImgV2 src={option.img} />
				</LanguageButton>
			))}
		</LanguageButtonWrap>
	);
}

export function AppDownloadBannerTop() {
	const { lang } = useLanguage();
	return (
		
		<AppDownloadBannerTopWrap>
			<AppDownloadBannerTopShadow>
			<AppDownloadBannerRight>
				<AppDownloadBannerRightImgWrap>
					<AppDownloadBannerRightImg 
						src="./static/img/BannerDownloadImg.png"
						alt="Biểu tượng Glow"
					/>
					</AppDownloadBannerRightImgWrap>
				<AppDownloadBannerRightLine>
					<AppDownloadBannerRightTitle>{TranslateLabels[lang]?.MENU_APP_DOWNLOAD_TITLE}</AppDownloadBannerRightTitle>
					<AppDownloadBannerRightText>{TranslateLabels[lang]?.MENU_APP_DOWNLOAD_CONTENT}</AppDownloadBannerRightText>
				</AppDownloadBannerRightLine>
			</AppDownloadBannerRight>
			<AppDownloadBannerLeft>
				<AppDownloadBannerLeftButton href="https://onelink.to/mz7nfw">
				{TranslateLabels[lang]?.MENU_APP_DOWNLOAD_BUTTON}
				</AppDownloadBannerLeftButton>
			</AppDownloadBannerLeft>
			</AppDownloadBannerTopShadow>
		</AppDownloadBannerTopWrap>
	);
}
