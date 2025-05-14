import React, { Fragment, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useLoadedUser from "../../../hooks/auth/useLoadedUser";
import MenuBarPersonalItem from "./MenuBarPersonalItem";
import MenuBarTextItem from "./MenuBarTextItem";
import {
	MenuBarItemInner,
	MenuBarCreatePost,
	MenuBarMainInner,
	MenuBarMainItemLogoImg,
	MenuBarMainItemLogoInner,
	MenuBarMainLeftAnchorBox,
	MenuBarMainLeftAnchorItem,
	MenuBarMainRightAnchorBox,
	MenuBarMainWrap,
	MenuBarMainWrapCenter,
	StyledMenuBar,
	MenuBarSeparation,
	MenuBarTextLG,
	MenuBarMainItemLogo,
	MenuBarMainBetweenAnchorItem,
	MenuBarMainBetweenAnchorBox,
	MenuBarMainBetweenAnchorBoxWrap,
	MenuBarMainGuideWrap,
	MenuBarMainGuideBtn,
	MenuBarMainBetweenAnchorItemNotRequired,
	MenuBarMainGuideWrapGuest,
} from "./styled/StyledMenuBar";
import { BtnButton } from "../../components/form/FormButton";

export default function MenuBar() {
	return (
		<StyledMenuBar id="menu-bar">
			<MenuBarMainWrap>
				<MenuBarMainWrapCenter>
					<MenuBarMain />
				</MenuBarMainWrapCenter>
			</MenuBarMainWrap>
		</StyledMenuBar>
	);
}

export function MenuBarMain() {
	const { isValidated } = useLoadedUser();
	const { pathname, hash, search } = useLocation();
	const [collapsed, setCollapsed] = useState(false);

	return (
		<MenuBarMainInner>
			<MenuBarItemInner>
				<MenuBarMainLeftAnchorBox className="clearfix">
					<MenuBarMainLeftAnchorItem>
						<MenuBarMainItemLogoInner>
							<Link to="/dashboard">
								<MenuBarMainItemLogo src="./static/img/homeimg.png" />
							</Link>
						</MenuBarMainItemLogoInner>
					</MenuBarMainLeftAnchorItem>
				</MenuBarMainLeftAnchorBox>
				<MenuBarMainBetweenAnchorBoxWrap>
					<MenuBarMainBetweenAnchorBox></MenuBarMainBetweenAnchorBox>
				</MenuBarMainBetweenAnchorBoxWrap>
				<MenuBarMainRightAnchorBox className="clearfix">
					{isValidated ? <MenuBarMainAuth /> : <MenuBarMainGuest />}
				</MenuBarMainRightAnchorBox>
			</MenuBarItemInner>
		</MenuBarMainInner>
	);
}

export function MenuBarMainGuest() {
	const location = useLocation();
	const path = location?.pathname;
	return (
		<Fragment>
			<MenuBarTextItem path="/login">
				<MenuBarTextLG>Đăng nhập</MenuBarTextLG>
			</MenuBarTextItem>
			<MenuBarSeparation>|</MenuBarSeparation>
			<MenuBarTextItem
				hiddenResp={true}
				path="/register">
				<MenuBarTextLG>Đăng Ký</MenuBarTextLG>
			</MenuBarTextItem>
		</Fragment>
	);
}

export function MenuBarMainAuth() {
	return (
		<Fragment>
			{/* <MenuBarTextItem>+ Tạo bài gom</MenuBarTextItem> */}
			{/* <MenubarWalletItem /> */}
			<MenuBarPersonalItem />
		</Fragment>
	);
}
