import { TableRow } from "@material-ui/core";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { CommonTableContainerResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import { StylePagePersonContentKey } from "../../personal/component/StylePerson";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";

export const AdminFakeReviewFilterWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 32px 12px 36px;
`;
export const AdminFakeReviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
`;
export const AdminFakeReviewFilterSearchNameWrap = styled.div``;

export const AdminFakeReviewFilterSearchNameLabel = styled.div`
	margin-bottom: 12px;
	font-size: 16px;
`;
export const AdminFakeReviewControlWrap = styled.div``;
export const AdminFakeReviewAddButton = styled.button`
	border-radius: 100px;
	padding: 8px 18px;
	background-color: var(--primary-color);
	color: #fff;
	border: none;
`;

export const StyledAdminFakeReviewTableContainer = styled(CommonTableContainerResp)`
	background-color: #fff;
	border-radius: 16px;
	box-shadow: 0 0 8px #8a8a8a;
	font-weight: 500;
	font-family: "SF-Pro-Display", sans-serif;
	@media screen and (max-width: 768px) {
		& tbody tr td:first-child {
			margin-top: 0;
			// display: none;
		}
		border-radius: none;
		box-shadow: none;
	}
`;

export const AdminFakeReviewTableRowStyle = styled(TableRow)<{
	$RebateActive?: boolean;
}>`
	& > td {
		position: relative;
		border-bottom: none !important;
	}
	& > td::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.5px;
		background-color: var(--border-color);
	}
	& > td:first-child::before {
		left: 16px;
	}
	& > td:last-child::before {
		right: 16px;
	}
	& > th {
		position: relative;
		border-bottom: none !important;
	}
	& > th::after {
		content: "";
		position: absolute;
		bottom: 20px;
		top: 20px;
		right: 0.25px;
		width: 1px;
		background-color: var(--text-color2);
	}
	& > th:first-child::after {
	}
	& > th:last-child::after {
		opacity: 0;
	}
	& > th > div {
		border-right: none;
	}
	${(props) => (props.$RebateActive ? "background-color:rgba(87,157,45,.2);" : null)}
`;

export const AdminFakeReviewRowStyle = styled(TableRow)<{
	$RebateActive?: boolean;
}>`
	& > td {
		position: relative;
		border-bottom: 1px solid rgba(224, 224, 224, 1);
		min-width: 130px;
		border-right: 1px solid rgba(224, 224, 224, 1);
		padding: 8px;
		fontweight: 700;
		text-align: center;
	}
	& > td::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.5px;
		background-color: var(--border-color);
	}
	& > td:first-child::before {
		left: 16px;
	}
	& > td:last-child::before {
		right: 16px;
	}
	& > th {
		position: relative;
		border-bottom: none !important;
	}
	& > th::after {
		content: "";
		position: absolute;
		bottom: 20px;
		top: 20px;
		right: 0.25px;
		width: 1px;
		background-color: var(--text-color2);
	}
	& > th:first-child::after {
	}
	& > th:last-child::after {
		opacity: 0;
	}
	${(props) => (props.$RebateActive ? "background-color:rgba(87,157,45,.2);" : null)}
`;
export const AdminFakeReviewDialogLabel = styled(StylePagePersonContentKey)`
	width: 100%;
	margin-bottom: 8px;
	color: var(--text-color2);
	font-family: SF-Pro-Display;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
	}
`;
export const AdminFakeReviewDialogInput = styled.input`
	margin-right: 12px;
	padding: 12px 18px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	font-size: 14px;
	width: 200px;
	font-weight: normal;
	width: 100%;
	&::-ms-reveal,
	&::-ms-clear {
		display: none;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 8px 0px;
		padding: 8px 12px;
		color: var(--text-color);
	}
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		& {
			font-size: 14px;
		}
	}
`;
export const AdminFakeReviewLabelI = styled.div`
	width: 100%;
	margin-bottom: 8px;
	color: var(--text-color2);
	font-family: SF-Pro-Display;
`;

export const AdminFakeReviewInputItemAction = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const AdminFakeReviewInputItemActionButton = styled(AdminFakeReviewAddButton)<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	${(props) => props.$xStyle}
`;

export const AdminFakeReviewInputWrap = styled.div<{
	$xFlexStyle?: FlattenSimpleInterpolation;
	isFlexStyle?: boolean;
}>`
	${(props) =>
		props?.isFlexStyle &&
		`display: flex;
	justify-content: space-around;
	align-items: flex-end;`}
`;

export const AdminFakeReviewInputContainer = styled.div``;

export const AdminFakereviewDialogWrap = styled(DialogWrap)`
	& .MuiDialog-paperScrollPaper {
		min-width: 900px;
	}
`;

export const FlexItemInputContainxStyle = css`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const AlertColorBtnxStyle = css`
	background-color: var(--alert-color);
`;
