import { ClickAwayListener, makeStyles, Tooltip, TooltipProps } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles({
	tooltip: {
		fontSize: "12px",
		//backgroundColor: "#fff",
		//color: "var(--primary-color)",
		fontWeight: "normal",
		//border: "1px solid var(--primary-color)",
		fontFamily: "SF-Pro-Display",
		padding: "7px 10px 8px 10px",
		margin: "14px 0px",
		lineHeight: "18px",
	},
});

export default function ToolTipWrapper(props: {
	children: (customProps: { onClick: () => void; onClose: () => void }) => JSX.Element;
	title: string;
}) {
	const styles = useStyles();
	const [openTip, setOpenTip] = useState(false);

	return (
		<ClickAwayListener onClickAway={() => setOpenTip(false)}>
			<Tooltip
				classes={{ tooltip: styles.tooltip }}
				PopperProps={{ disablePortal: true }}
				onClose={() => setOpenTip(false)}
				open={openTip}
				arrow
				disableFocusListener
				disableHoverListener
				disableTouchListener
				title={props.title || ""}
				placement="top-start">
				{props.children?.({
					onClick: () => setOpenTip(true),
					onClose: () => setOpenTip(false),
				}) || null}
			</Tooltip>
		</ClickAwayListener>
	);
}

const useStyleNorms = makeStyles({
	tooltip: {
		fontSize: "12px",
		//backgroundColor: "#fff",
		//color: "var(--primary-color)",
		fontWeight: "normal",
		//border: "1px solid var(--primary-color)",
		fontFamily: "SF-Pro-Display",
		padding: "7px 10px 8px 10px",
		margin: "14px 0px",
		lineHeight: "18px",
		maxWidth: "none",
	},
});

export function NormalTipWrapper(props: {
	children: (customProps: { onClick: () => void }) => JSX.Element;
	title: string;
}) {
	const styles = useStyleNorms();
	const [openTip, setOpenTip] = useState(false);

	return (
		<ClickAwayListener onClickAway={() => setOpenTip(false)}>
			<Tooltip
				classes={{ tooltip: styles.tooltip }}
				PopperProps={{ disablePortal: true }}
				onClose={() => setOpenTip(false)}
				open={openTip}
				title={props.title || ""}
				placement="top-start">
				{props.children?.({ onClick: () => setOpenTip(true) })}
			</Tooltip>
		</ClickAwayListener>
	);
}

export function SimpleTooltip(props: TooltipProps) {
	const styles = useStyleNorms();

	return (
		<Tooltip
			{...props}
			classes={{ tooltip: styles.tooltip }}
		/>
	);
}
