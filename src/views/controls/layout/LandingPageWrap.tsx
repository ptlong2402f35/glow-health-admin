import React, { useContext } from "react";
import Logger from "../../../utils/Logger";
import { PublicComponentsWrapContext } from "../public/PublicComponentsWrap";
import Content from "./content/Content";
import { StyledContentLandingPageWrap, StyledContentWrap } from "./content/StyledContent";
import Footer from "./footer/Footer";
import MenuBar from "./menuBar/MenuBar";

import { StyledLandingPageWrap, StyledLayoutWrap } from "./StyledLayoutWrap";
import BackToTop from "./backToTop";
import { matchPath, useLocation } from "react-router";
import SideBar from "./sideBar/SideBar";
import Footerv2 from "./footer/Footerv2";
import DialogUpdateCouGen from "../../pages/LoginUserPage/component/DialogUpdateCountryGender";
const Log = Logger.getLogger("LayoutWrap");

export default function LandingPageWrap(props: {
	includePaths?: string[];
	children: JSX.Element | JSX.Element[] | string | string[];
}) {
	const ctx = useContext(PublicComponentsWrapContext);
	const { pathname } = useLocation();

	const shouldRender = !(props.includePaths || []).every((includePath) => {
		const isMatching = matchPath(pathname, {
			path: includePath,
			exact: true,
		});
		return !isMatching;
	});

	if (!shouldRender) {
		return null;
	}
	return (
		<StyledLandingPageWrap fullScreen={ctx?.isFullScreen}>
			<StyledContentLandingPageWrap fullScreen={ctx?.isFullScreen}>
				<Content fullScreen={ctx?.isFullScreen}>{props.children}</Content>
			</StyledContentLandingPageWrap>
			<BackToTop />
			<DialogUpdateCouGen
				isDialogOpen={ctx?.isDialogOpen}
				setIsDialogOpen={ctx?.setIsDialogOpen}
			/>
		</StyledLandingPageWrap>
	);
}
