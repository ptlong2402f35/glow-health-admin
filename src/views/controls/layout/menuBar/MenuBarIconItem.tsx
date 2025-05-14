import React from "react";
import {
	MenuBarMainRightAnchorIconItem,
	MenuBarMainRightAnchorIconItemIconLink,
	MenuBarMainRightAnchorIconItemIconPlain,
	MenuBarMainRightAnchorItemIconInner,
} from "./styled/StyledMenuBar";

export default function MenuBarIconItem(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	path?: string;
}) {
	return (
		<MenuBarMainRightAnchorIconItem>
			<MenuBarMainRightAnchorItemIconInner>
				{props.path ? (
					<MenuBarMainRightAnchorIconItemIconLink to={props.path}>
						{props.children}
					</MenuBarMainRightAnchorIconItemIconLink>
				) : (
					<MenuBarMainRightAnchorIconItemIconPlain>{props.children}</MenuBarMainRightAnchorIconItemIconPlain>
				)}
			</MenuBarMainRightAnchorItemIconInner>
		</MenuBarMainRightAnchorIconItem>
	);
}
