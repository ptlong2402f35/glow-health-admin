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
import { HRMenuBarPersonalItem } from "./HRMenuBarPersonalItem";

export default function HRMenuBar() {
	return (
		<StyledMenuBar id="menu-bar">
			<MenuBarMainWrap>
				<MenuBarMainWrapCenter>
					<HRMenuBarMain />
				</MenuBarMainWrapCenter>
			</MenuBarMainWrap>
		</StyledMenuBar>
	);
}

export function HRMenuBarMain() {
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
					{isValidated ? <HRMenuBarPersonalItem /> : <MenuBarMainGuest />}
				</MenuBarMainRightAnchorBox>
			</MenuBarItemInner>
		</MenuBarMainInner>
	);
}
