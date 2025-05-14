import React from "react";
import { Link } from "react-router-dom";
import { MenuBarMainRightAnchorItem, MenuBarMainRightAnchorItemInner } from "./styled/StyledMenuBar";

export default function MenuBarTextItem(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	path?: string;
	className?: string;
	hiddenResp?: boolean;
}) {
	return (
		<MenuBarMainRightAnchorItem
			className={props.className}
			hiddenResp={props.hiddenResp}>
			<MenuBarMainRightAnchorItemInner>
				<Link to={props.path || ""}>{props.children}</Link>
			</MenuBarMainRightAnchorItemInner>
		</MenuBarMainRightAnchorItem>
	);
}
