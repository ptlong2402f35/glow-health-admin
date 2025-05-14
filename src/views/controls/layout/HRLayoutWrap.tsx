import React, { useContext } from "react";
import Logger from "../../../utils/Logger";
import { PublicComponentsWrapContext } from "../public/PublicComponentsWrap";
import Content from "./content/Content";
import { StyledContentWrap } from "./content/StyledContent";
import Footer from "./footer/Footer";

import { StyledLayoutWrap } from "./StyledLayoutWrap";
import { matchPath, useLocation } from "react-router";
import HRSideBar from "./sideBar/HRSideBar";
import HRMenuBar from "./menuBar/HRMenuBar";
const Log = Logger.getLogger("LayoutWrap");

export default function HRLayoutWrap(props: {
	excludePattern?: string;
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

	// Log.log(`rerender`);
	return (
		<StyledLayoutWrap /*style={displayStyle}*/ fullScreen={ctx?.isFullScreen}>
			<StyledContentWrap fullScreen={ctx?.isFullScreen}>
				<HRSideBar />
				<HRMenuBar />
				<Content fullScreen={ctx?.isFullScreen}>{props.children}</Content>
				{!ctx?.isFullScreen && <Footer />}
			</StyledContentWrap>
			{/* <BackToTop /> */}
		</StyledLayoutWrap>
	);
}
