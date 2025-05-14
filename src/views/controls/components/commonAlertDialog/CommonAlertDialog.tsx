import React from "react";
import { Dialog, makeStyles } from "@material-ui/core";
import { AlertDialogType, AlertType } from "../../../hooks/common/useAttachAlertDialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import {
	StyledAlertDialogBody,
	StyledAlertDialogBodyWrap,
	StyledAlertDialogFoot,
	StyledAlertDialogFootBtn,
	StyledAlertDialogFootBtnConfirm,
	StyledAlertDialogHeading,
	StyledAlertDialogText,
	StyledAlertDialogTitle,
} from "./StyledCommonAlertDialog";
import { BtnType } from "../form/FormButton";

const useStyles = makeStyles({
	paper: {
		minWidth: "500px",
		display: "block",
		borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
			maxWidth: "unset",
			margin: "16px",
			width: "100%",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "10px !important",
	},
	footer: {
		padding: "0px",
	},
});

export default function CommonAlertDialog(props: AlertDialogType) {
	const styles = useStyles();

	const onClose = () => {
		props.onClose();
		props.afterClose?.();
	};
	const onDecline = () => {
		props.onClose?.();
		props.onDecline?.();
	};

	const onAccept = () => {
		props.onClose?.();
		props.onAccept?.();
	};

	return (
		<Dialog
			open={props.open}
			onClose={onClose}
			classes={{ paper: styles.paper }}>
			{props.extraProps?.title && (
				<DialogTitle className={styles.heading}>
					<StyledAlertDialogHeading>
						<StyledAlertDialogTitle>
							<p>{props.extraProps?.title}</p>
						</StyledAlertDialogTitle>
					</StyledAlertDialogHeading>
				</DialogTitle>
			)}
			<StyledAlertDialogBodyWrap className={styles.body}>
				<StyledAlertDialogBody>
					{props.content && <StyledAlertDialogText>{props.content}</StyledAlertDialogText>}
				</StyledAlertDialogBody>
			</StyledAlertDialogBodyWrap>
			<DialogActions className={styles.footer}>
				{!props.type && (
					<StyledAlertDialogFoot>
						<StyledAlertDialogFootBtn
							btnType={BtnType.Empty}
							onClick={onClose}>
							Đóng
						</StyledAlertDialogFootBtn>
					</StyledAlertDialogFoot>
				)}
				{props.type == AlertType.Success && (
					<StyledAlertDialogFoot alertType={AlertType.Success}>
						<StyledAlertDialogFootBtn onClick={onClose}>OK</StyledAlertDialogFootBtn>
					</StyledAlertDialogFoot>
				)}
				{props.type == AlertType.Fail && (
					<StyledAlertDialogFoot alertType={AlertType.Fail}>
						<StyledAlertDialogFootBtn
							btnType={BtnType.FailEmpty}
							onClick={onClose}>
							OK
						</StyledAlertDialogFootBtn>
					</StyledAlertDialogFoot>
				)}
				{props.type == AlertType.Confirm && (
					<StyledAlertDialogFoot alertType={AlertType.Confirm}>
						<StyledAlertDialogFootBtnConfirm
							btnType={BtnType.Empty}
							onClick={onDecline}>
							{props.extraProps?.declineText || "Quay lại"}
						</StyledAlertDialogFootBtnConfirm>
						<StyledAlertDialogFootBtnConfirm onClick={onAccept}>
							{props.extraProps?.acceptText || "Đồng ý"}
						</StyledAlertDialogFootBtnConfirm>
					</StyledAlertDialogFoot>
				)}
			</DialogActions>
		</Dialog>
	);
}
