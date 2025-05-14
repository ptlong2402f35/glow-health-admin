import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";
import {
	BorderDialog,
	DialogWrapBody,
	DialogWrapClose,
	DialogWrapCloseBtn,
	DialogWrapFoot,
	DialogWrapFootBtn,
	DialogWrapHeading,
	DialogWrapImg,
	DialogWrapTitle,
	DialogWrapTitleInner,
	StyledDialogWrap,
} from "./StyledDialogWrap";
import { FlattenSimpleInterpolation } from "styled-components";

const useStyles = makeStyles({
	paper: {
		minWidth: "1200px",
		display: "block",
		borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0px",
	},
	footer: {
		padding: "0px",
	},
});

const useStyleMedium = makeStyles({
	paper: {
		minWidth: "600px",
		display: "block",
		borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
			margin: "16px",
			width: "100%",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0px",
	},
	footer: {
		padding: "0px",
	},
});

const useStyleMediumFilter = makeStyles({
	paper: {
		minWidth: "900px",
		display: "block",
		borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
			margin: "16px",
			width: "100%",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0px",
	},
	footer: {
		padding: "0px",
	},
});
const useStyleMediumv2 = makeStyles({
	paper: {
		width: "320px",
		display: "block",
		borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
			margin: "16px",
			width: "100%",
			maxWidth: "450px",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0px",
	},
	footer: {
		padding: "0px",
	},
});
const useStyleMediumBank = makeStyles({
	paper: {
		width: "432px",
		display: "block",
		borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
			margin: "16px",
			width: "100%",
			maxWidth: "450px",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0",
	},
	footer: {
		padding: "0px",
	},
});

export const useStyleSmall = makeStyles({
	paper: {
		width: "400px",
		display: "block",
		borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0px !important",
	},
	footer: {
		padding: "0px",
	},
});

export const useStyleSmallTransaction = makeStyles({
	paper: {
		width: "400px",
		display: "block",
		borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0px !important",
		minWidth: "300px",
	},
	footer: {
		padding: "0px",
	},
});

export type DialogWrapType = {
	children: JSX.Element | JSX.Element[] | string | string[] | null;
	open: boolean;
	onClose: (e: any, reason: any) => void;
	className?: string;
	title?: string;
	srcImg?: string;
	text?: string;
	actions?: JSX.Element | string;
	useCustomStyles?: () => any;
	hideHeader?: boolean;
	hideFooter?: boolean;
	medium?: boolean;
	xStyleHeading?: FlattenSimpleInterpolation;
	xStyleTitle?: FlattenSimpleInterpolation;
	xStyleClose?: FlattenSimpleInterpolation;
	xStyleBody?: FlattenSimpleInterpolation;
	xStyleFooter?: FlattenSimpleInterpolation;
	xStyleBorder?: FlattenSimpleInterpolation;
	disableEnforceFocus?: boolean;
	hideClose?: boolean;
	center?: boolean;
};

export default function DialogWrap(props: DialogWrapType) {
	const styles = (props.useCustomStyles && props.useCustomStyles()) || useStyles();

	return (
		<StyledDialogWrap
			disableEnforceFocus={props.disableEnforceFocus}
			open={props.open}
			onClose={props.onClose}
			classes={{ paper: styles.paper }}
			className={props.className}
			xStyle={props.xStyleBorder}>
			{!props.hideHeader && (
				<DialogTitle className={styles.heading}>
					<DialogWrapHeading
						medium={props.medium}
						xStyle={props.xStyleHeading}>
						<DialogWrapTitle
							medium={props.medium}
							xStyle={props.xStyleTitle}>
							{props.srcImg && <DialogWrapImg src={props.srcImg}></DialogWrapImg>}

							<DialogWrapTitleInner center={props.center}>{props.title || "--"}</DialogWrapTitleInner>
						</DialogWrapTitle>
						{!props.hideClose && (
							<DialogWrapClose
								medium={props.medium}
								xStyle={props.xStyleClose}>
								<DialogWrapCloseBtn onClick={() => props.onClose(null, null)}>
									<i className="material-icons">close</i>
								</DialogWrapCloseBtn>
							</DialogWrapClose>
						)}
					</DialogWrapHeading>
				</DialogTitle>
			)}

			<DialogContent className={styles.body}>
				<DialogWrapBody
					medium={props.medium}
					xStyle={props.xStyleBody}
					center={props.center}>
					{props.children || (props.text && <div>{props.text}</div>) || null}
				</DialogWrapBody>
			</DialogContent>

			{!props.hideFooter && (
				<DialogActions className={styles.footer}>
					<DialogWrapFoot
						medium={props.medium}
						xStyle={props.xStyleFooter}>
						{props.actions || (
							<DialogWrapFootBtn onClick={() => props.onClose(null, null)}>Đóng</DialogWrapFootBtn>
						)}
					</DialogWrapFoot>
				</DialogActions>
			)}
		</StyledDialogWrap>
	);
}

export function DialogWrapMedium(props: DialogWrapType) {
	return (
		<DialogWrap
			{...props}
			medium={true}
			useCustomStyles={useStyleMedium}
		/>
	);
}

export function DialogWrapSmall(props: DialogWrapType) {
	return (
		<DialogWrap
			{...props}
			medium={true}
			useCustomStyles={useStyleSmall}
		/>
	);
}

export function DialogWrapMediumBankInFinancial(props: DialogWrapType) {
	return (
		<DialogWrap
			{...props}
			medium={true}
			useCustomStyles={useStyleMediumv2}
		/>
	);
}
export function DialogWrapMediumBank(props: DialogWrapType) {
	return (
		<DialogWrap
			{...props}
			medium={true}
			useCustomStyles={useStyleMediumBank}
		/>
	);
}
export function DialogWrapAddUser(props: DialogWrapType) {
	return (
		<DialogWrap
			{...props}
			medium={true}
			useCustomStyles={useStyles}
		/>
	);
}

export function DialogWrapAddress(props: DialogWrapType) {
	return (
		<DialogWrap
			{...props}
			medium={true}
			useCustomStyles={useStyleMedium}
		/>
	);
}
export function DialogWrapSmallTransaction(props: DialogWrapType) {
	return (
		<DialogWrap
			{...props}
			medium={true}
			useCustomStyles={useStyleSmallTransaction}
		/>
	);
}

export function DialogWrapMediumFilter(props: DialogWrapType) {
	return (
		<DialogWrap
			{...props}
			medium={true}
			useCustomStyles={useStyleMediumFilter}
		/>
	);
}
