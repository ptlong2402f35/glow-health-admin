import React from "react";
import { Link } from "react-router-dom";
import useLoadedUser from "../../../hooks/auth/useLoadedUser";
import {
	MenuBarItemInner,
	MenuBarMainInner,
	MenuBarMainItemLogoInner,
	MenuBarMainLeftAnchorBox,
	MenuBarMainLeftAnchorItem,
	MenuBarMainRightAnchorBox,
	MenuBarMainWrap,
	MenuBarMainWrapCenter,
	StyledMenuBar,
	MenuBarMainItemLogo,
	MenuBarMainBetweenAnchorBox,
	MenuBarMainBetweenAnchorBoxWrap,
} from "./styled/StyledMenuBar";
import { MenuBarMainGuest } from "./MenuBar";
import { AccountanceMenuBarPersonalItem } from "./AccountanceMenuBarPersonalItem";

export default function AccountanceMenuBar() {
	return (
		<StyledMenuBar id="menu-bar">
			<MenuBarMainWrap>
				<MenuBarMainWrapCenter>
					<AccountanceMenuBarMain />
				</MenuBarMainWrapCenter>
			</MenuBarMainWrap>
		</StyledMenuBar>
	);
}

export function AccountanceMenuBarMain() {
	const { isValidated } = useLoadedUser();

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
					{isValidated ? <AccountanceMenuBarPersonalItem /> : <MenuBarMainGuest />}
				</MenuBarMainRightAnchorBox>
			</MenuBarItemInner>
		</MenuBarMainInner>
	);
}
