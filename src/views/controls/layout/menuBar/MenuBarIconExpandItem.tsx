import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import {
	MenuBarMainRightAnchorExpandItemDropdown,
	MenuBarMainRightAnchorExpandItemDropdownBox,
	MenuBarMainRightAnchorExpandItemDropdownBoxInner,
	MenuBarMainRightAnchorIconItem,
	MenuBarMainRightAnchorIconItemIconPlain,
	MenuBarMainRightAnchorItemIconInner,
	MenuBarNotificationExist,
} from "./styled/StyledMenuBar";

export default function MenuBarIconExpandItem(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	expandComponent: JSX.Element | JSX.Element[] | string | string[];
	open?: boolean;
	doToggle?: () => void;
	doClose?: () => void; //setOpen(false) after click on expand collapse
	showDotIcon?: boolean;
}) {
	return (
		<ClickAwayListener onClickAway={() => props.doClose?.()}>
			<MenuBarMainRightAnchorIconItem>
				<MenuBarMainRightAnchorItemIconInner onClick={props.doToggle}>
					<MenuBarMainRightAnchorIconItemIconPlain>
						{props.children}
						{props.showDotIcon && <MenuBarNotificationExist />}
					</MenuBarMainRightAnchorIconItemIconPlain>
				</MenuBarMainRightAnchorItemIconInner>
				<MenuBarMainRightAnchorExpandItemDropdown>
					<Collapse in={props.open}>
						<MenuBarMainRightAnchorExpandItemDropdownBox>
							<MenuBarMainRightAnchorExpandItemDropdownBoxInner>
								{props.expandComponent}
							</MenuBarMainRightAnchorExpandItemDropdownBoxInner>
						</MenuBarMainRightAnchorExpandItemDropdownBox>
					</Collapse>
				</MenuBarMainRightAnchorExpandItemDropdown>
			</MenuBarMainRightAnchorIconItem>
		</ClickAwayListener>
	);
}

export function MenuBarIconItemDefault() {
	const [open, setOpen] = useState(false);
	const doToggle = () => setOpen((pState) => !pState);
	const doClose = () => setOpen(false);

	return (
		<MenuBarIconExpandItem
			open={open}
			doToggle={doToggle}
			doClose={doClose}
			expandComponent={<div></div>}>
			<img src="./static/img/ic_noti.svg" />
		</MenuBarIconExpandItem>
	);
}
