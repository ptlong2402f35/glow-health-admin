import styled, { css } from "styled-components";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import DialogContent from "@material-ui/core/DialogContent";
import { BtnButton } from "../form/FormButton";

export const StyledAlertDialogWrap = styled.div``;

export const StyledAlertDialogHeading = styled.div`
	padding: 36px 30px 0px 30px;
	position: relative;
	width: 100%;
	display: block;
`;

export const StyledAlertDialogTitle = styled.div`
	font-weight: 600;
	font-size: 28px;
	line-height: 29px;
	color: var(--text-color0);
`;

export const StyledAlertDialogBodyWrap = styled(DialogContent)`
	&:first-child {
		padding: 0px;
	}
`;

export const StyledAlertDialogBody = styled.div`
	padding: 12px 30px 24px 30px;
	width: 100%;
	display: block;

	@media screen and (max-width: 768px) {
		padding: 24px;
	}
`;

export const StyledAlertDialogText = styled.div`
	color: var(--text-color);
	font-size: 15px;
	text-align: center;
`;

export const StyledAlertDialogFoot = styled.div<{
	alertType?: AlertType;
}>`
	padding: 0px 30px 25px 30px;
	position: relative;
	width: 100%;
	display: block;
	text-align: center;

	${(props) =>
		props.alertType == AlertType.Confirm &&
		css`
			text-align: right;
		`}

	@media screen and (max-width: 768px) {
		padding: 0px 24px 16px 24px;
	}
`;

export const StyledAlertDialogFootBtn = styled(BtnButton)`
	padding: 8px 20px 10px 20px;
	min-width: 80px;

	&:first-child {
		margin-left: 0px;
	}

	@media screen and (max-width: 768px) {
		padding: 6px 16px 6px 16px;
		min-width: 50px;
		font-size: 14px;
		font-weight: normal;
	}
`;

export const StyledAlertDialogFootBtnConfirm = styled(StyledAlertDialogFootBtn)`
	margin-left: 15px;

	&:first-child {
		margin-left: 0px;
	}
`;
