import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { CommonTableContainerResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import { TableRow } from "@material-ui/core";
import { OrderStatusv2 } from "../../../../models/Orderv2";
import { DialogWrapFootBtn } from "../../../controls/components/dialogWrap/StyledDialogWrap";
import { TableCell } from "@material-ui/core";

export const AdminOrderManagementWrap = styled.div`
	margin: 0 auto;
	@media screen and (max-width: 1282px) {
		width: auto;
		padding: 0 20px;
	}
`;

export const AdminOrderPageTitleInner = styled.div`
	margin-left: 30px;
	font-size: 40px;
	color: #5b7a4f;
	font-weight: 700;
	@media screen and (max-width: 1282px) {
		margin-left: 0px;
		font-size: 24px;
	}
`;
export const AdminOrderManagementControlWrap = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 16px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		max-height: 0;
		visibility: hidden;
		margin-bottom: 20px;
		transition: max-height 0.3s ease-in-out;
		&.visible {
			max-height: 800px;
			visibility: visible;
		}
	}
`;
export const AdminOrderManagementFilterItemWrap = styled.div`
	width: 100%;
	display: flex;
	@media screen and (max-width: 1282px) {
		flex-direction: column;
	}
`;
export const AdminOrderManagementFilterItemWrap2 = styled.div`
	width: 100%;
	display: flex;
	margin-top: 20px;
	@media screen and (max-width: 1282px) {
		flex-direction: column;
	}
`;
export const AdminOrderManagementReFilter = styled.div`
	margin-left: 20px;
	float: right;
`;
export const AdminOrderManagementFilterItem = styled.div`
	margin-left: 16px;
	margin-right: 16px;
	min-width: 200px;
	@media screen and (max-width: 1282px) {
		margin-left: 0px;
		margin-right: 0px;
		min-width: 0px;
	}
`;

export const AdminOrderManagementFilterItemMaxWidth = styled(AdminOrderManagementFilterItem)`
	max-width: 200px;
`;
export const AdminOrderManagementFilterLabel = styled.div`
	color: var(--text-color);
	margin-bottom: 4px;
	font-weight: 600;
`;
export const AdminOrderManagementFilterLabelv2 = styled(AdminOrderManagementFilterLabel)`
	width: 200px;
`;
export const AdminOrderManagementPageInner = styled.div`
	margin: 8px 16px;
`;
export const StyledAdminOrderTableContainer = styled(CommonTableContainerResp)`
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
export const AdminOrderTableRowStyle = styled(TableRow)<{
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
export const AdminOrderRowStyle = styled(TableRow)<{
	$RebateActive?: boolean;
}>`
	& > td {
		position: relative;
		border-bottom: 1px solid rgba(224, 224, 224, 1);
		min-width: 130px;
		border-right: 1px solid rgba(224, 224, 224, 1);
		padding: 8px;
		fontweight: 700;
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

export const AdminOrderStatusLabelTextItem = styled.div<{
	$isActive?: boolean | null;
}>`
	${(props) => props.$isActive && "color:var(--primary-color);"}
`;
export const AdminOrderInfoImgFlexRow = styled.div`
	display: flex;
	align-items: center;
`;
export const AdminOrderInfoImgRowContain = styled(AdminOrderInfoImgFlexRow)`
	border-radius: 12px;
	border: solid 1px var(--border-color);
	margin: 8px 0px;
`;
export const AdminOrderInfoRowItemImgWrap = styled.div<{
	$isXsmall?: boolean;
}>`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 8px;
	${(props) => (props.$isXsmall ? "width:24px;height:24px;" : "")}
`;

export const AdminOrderInfoRowExtend = styled(TableCell)<{
	$isXsmall?: boolean;
	$isExNormalSize?: boolean;
	$isMediumSize?: boolean;
	$isLargeSize?: boolean;
	$xStyleRowCell?: FlattenSimpleInterpolation;
}>`
	${(props) => (props.$isExNormalSize ? "min-width:180px!important;" : "")}
	${(props) => (props.$isMediumSize ? "min-width:220px!important;" : "")}
	${(props) => (props.$isLargeSize ? "min-width:300px!important;" : "")}
	${(props) => props.$xStyleRowCell}
`;

export const AdminOrderInfoRowItemImg = styled.img`
	width: 100%;
	height: 100%;
`;
export const AdminOrderInfoRowItemLabel = styled.div<{
	$isSmallLabel?: boolean;
}>`
	${(props) => (props.$isSmallLabel ? "font-size:12px" : "")}
`;
export const AdminOrderInfoRowItemWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const AdminOrderInfoRowItemColorContain = styled.div<{
	$status: string;
}>`
	border-radius: 12px;
	color: #fff;
	padding: 3px 6px;
	font-size: 12px;
	font-weight: 600;
	${(props) => {
		switch (props.$status) {
			case OrderStatusv2.Done:
				return "background-color:#4caf50;";
			case OrderStatusv2.Cancel:
				return "background-color:#e91e63;";
			case OrderStatusv2.Pending:
				return "background-color:#536dfe;";
			case OrderStatusv2.Approved:
				return "background-color:#3f51b5;";
			case OrderStatusv2.Denied:
				return "background-color:#f44336;";
			default:
				return "";
		}
	}}
`;
export const AdminOrderInfoRowValue = styled.div<{
	$isInterest?: boolean;
}>`
	${(props) => (props.$isInterest ? "color:var(--primary-color)" : "color:red;")}
`;

export const AdminOrderManagementItemsControlWrap = styled.div`
	display: flex;
	align-items: center;
`;
export const AdminOrderManagementItemsControlBtn = styled.button<{
	$xStyleColorIcon?: FlattenSimpleInterpolation;
}>`
	border-radius: 50%;
	border: solid 1px var(--border-color);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 8px;
	width: 26px;
	height: 26px;
	background-color: transparent;

	&:hover {
		box-shadow: 0px 0px 5px;
	}
	& > i {
		${(props) => props.$xStyleColorIcon}
	}
`;
export const AdminOrderCancelContentWrap = styled.div`
	padding: 12px;
`;
export const AdminOrderCancelConfirmText = styled.div`
	font-size: 16px;
	margin-bottom: 12px;
`;
export const AdminOrderCancelConfirmLabelCode = styled.span`
	font-weight: 600;
`;
export const AdminOrderCancelReasonLabel = styled.div`
	font-weight: 700;
	font-size: 16px;
	margin-bottom: 8px;
	margin-top: 12px;
`;
export const AdminOrderCancelReasonTextField = styled.textarea`
	padding: 8px;
	max-height: 220px;
	width: 100%;
`;
export const AdminOrderCancelDialogBtnWrap = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const AdminOrderCancelCloseBtn = styled(DialogWrapFootBtn)`
	background-color: var(--alert-color);
	margin-right: 12px;
`;
export const AdminOrderCancelSubmitBtn = styled(DialogWrapFootBtn)`
	background-color: var(--primary-color);
	margin-right: 16px;
`;

export const AdminOrderFeedbackDialogWrap = styled.div``;
export const AdminOrderFeedbackLabel = styled.div`
	font-size: 16px;
	font-weight: 700;
	margin-top: 24px;
	margin-bottom: 8px;
`;
export const AdminOrderFeedbackLabelUp = styled(AdminOrderFeedbackLabel)`
	margin-top: 4px;
`;
export const AdminOrderStatisticsWrap = styled.div`
	padding: 16px;
	@media screen and (max-width: 768px) {
		padding: 0px;
	}
`;
export const AdminOrderStatisticsContain = styled.div``;
export const AdminOrderStatisticRow = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-bottom: 16px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const AdminOrderStatisticItem = styled.div`
	width: 33%;
	font-size: 16px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const AdminOrderStatisticItemValue = styled.span<{
	$isRenue?: boolean;
}>`
	${(props) => (props.$isRenue ? "color: var(--primary-color);" : "")}
`;
export const xStyleFlexTableCell = css`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
`;
export const xStyleFinishIcon = css`
	color: var(--primary-color);
`;
export const xStyleFeedbackIcon = css`
	color: #ffeb3b;
`;
export const xStyleCancelIcon = css`
	color: var(--alert-color);
`;
export const AdminUserManagementClearButton = styled.button`
	color: var(--primary-color);
	background-color: transparent;
	border: none;
	font-size: 20px;
	&:hover {
		color: var(--primary-bold-color);
	}
`;
export const ButtonAdminOrderStatistics = styled.button`
	padding: 8px 12px;
	border: none;
	background-color: var(--primary-color);
	color: #fff;
	border-radius: 8px;
	margin-bottom: 20px;
`;

export const ProofCancellationImgWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 12px;
`;

export const ProofCancellationImg = styled.img`
	width: 300px;
	margin-bottom: 12px;
`;

export const TableCellFlex = styled.div`
	display: flex;
`;
export const TableCellTitle = styled.span`
	width: 95px;
`;
export const TableCellDate = styled.span`
	width: 120px;
`;

export const TableCellImg = styled.img`
	width: 200px;
	height: 200px;
	margin-right: 10px;
	object-fit: cover;
`;

export const AdminOrderOriginCancelDialogWrap = styled.div``;
export const AdminOrderOriginCancelLabel = styled.div`
	font-size: 16px;
	font-weight: 700;
	margin-top: 24px;
	margin-bottom: 8px;
`;
export const AdminOrderOriginCancelLabelUp = styled(AdminOrderOriginCancelLabel)`
	margin-top: 4px;
`;

export const AdminOrderOriginCancelLabelV2 = styled.div`
	font-size: 16px;
	font-weight: 700;
	margin-top: 24px;
	margin-top: 8px;
	display: inline-block;
`;