import DialogContent from "@material-ui/core/DialogContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { Fragment } from "react";
import { LoadingDialogType, LoadingType } from "../../../hooks/common/useAttachLoadingDialog";
import DialogWrap, { DialogWrapSmall, useStyleSmall } from "../dialogWrap/DialogWrap";
import { DialogWrapBody, StyledDialogWrap } from "../dialogWrap/StyledDialogWrap";
import {
	LoaderItem,
	LoadingDialogBody,
	LoadingDialogWrapBody,
	PopupLoaderItem,
	PopupLoadingDialogBody,
	PopupLoadingDialogText,
	PopupLoadingDialogWrapBody,
} from "./StyledCommonLoadingDialog";

export default function CommonLoadingDialog(props: LoadingDialogType) {
	if (props.type == LoadingType.Bars) {
		return (
			<PopupLoadingDialog
				open={props.open}
				onClose={props.onClose}
				title={props.label || ""}
			/>
		);
	}

	return (
		<LoadingDialog
			open={props.open}
			onClose={props.onClose}
		/>
	);
}

const useStyleIcon = makeStyles({
	paper: {
		width: "max-content",
		height: "max-content",
		display: "block",
		boxShadow: "none",
		backgroundColor: "transparent",
		minWidth: "unset",
	},
	body: {
		width: "max-content",
		height: "max-content",
	},
});

export function LoadingDialog(props: { open: boolean; onClose: () => void }) {
	const onClose = (e: any, reason: any) => {
		if (reason && reason == "backdropClick") return;
		props.onClose();
	};

	const styles = useStyleIcon();

	return (
		<StyledDialogWrap
			open={props.open}
			onClose={onClose}
			classes={{ paper: styles.paper }}>
			<DialogContent className={styles.body}>
				<LoadingDialogWrapBody>
					<LoadingDialogBody>
						<LoaderItem />
					</LoadingDialogBody>
				</LoadingDialogWrapBody>
			</DialogContent>
		</StyledDialogWrap>
	);
}

export function PopupLoadingDialog(props: { open: boolean; onClose: () => void; title?: string }) {
	const styles = useStyleSmall();

	const onClose = (e: any, reason: any) => {
		if (reason && reason == "backdropClick") return;
		props.onClose && props.onClose();
	};

	return (
		<StyledDialogWrap
			open={props.open}
			onClose={onClose}
			classes={{ paper: styles.paper }}>
			<DialogContent className={styles.body}>
				<PopupLoadingDialogWrapBody>
					{props.title && <PopupLoadingDialogText>{props.title || ""}</PopupLoadingDialogText>}
					<PopupLoadingDialogBody>
						<PopupLoaderItem />
					</PopupLoadingDialogBody>
				</PopupLoadingDialogWrapBody>
			</DialogContent>
		</StyledDialogWrap>
	);
}
