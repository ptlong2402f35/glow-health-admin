import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { BtnLink, DefaultBtnType } from "../../../controls/components/form/FormButton";
import {
	CommonTableCellRespLabel,
	CommonTableContainerResp,
} from "../../../controls/components/commonTable/StyledCommonTableResp";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";
export const PanelAccountBalance = styled.div`
	padding: 16px 32px;
	color: var(--text-color);
	background-color: #fff;
	border-radius: 16px;
	border: 1px solid var(--text-color);
	height: 76px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 36px 0px 20px 0px;

	@media screen and (max-width: 768px) {
		margin: 4px 0px 0px 0px;
		border: none;
		padding: 6px 12px;
		align-items: stretch;
		height: max-content;
		background-color: var(--background-color);
	}
`;
export const PanelAccountBalanceLeft = styled.div`
	font-size: 20px;

	@media screen and (max-width: 768px) {
		display: none;
		font-size: 14px;
	}
`;
export const PanelAccountBalanceRight = styled.div`
	display: flex;
	gap: 100px;
	font-size: 16px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		display: block;
		width: 100%;
	}
`;

export const PanelAccountBalancePending = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		margin-bottom: 6px;
		justify-content: center;
	}
`;

export const PanelAccountBalanceLabel = styled.div`
	display: inline-block;
	margin-right: 10px;
	@media screen and (max-width: 768px) {
		margin-right: 3px;
	}
`;
export const StylesToolTip = styled(Tooltip)`
	cursor: pointer;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const StylesToolTipResponse = styled(Tooltip)`
	cursor: pointer;
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;

export const StyledAdminTableRowControlField = styled.div`
	img {
		width: 20px;
		height: 20px;
	}
	margin-left: 4px;
	margin-right: 4px;
	display: inline-block;
	padding: 3px;
	border: 1px solid #b6b6b6;
	border-radius: 8px;
	cursor: pointer;
`;

export const RemoveSvgRes = styled.div`
	@media screen and (max-width: 768px) {
	}
`;
export const HelpIconTooltip = styled(HelpIcon)`
	font-size: 25px;
	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const PanelAccountBalanceValue = styled.div`
	display: inline-block;
	padding: 6px 16px;
	margin-left: 12px;
	color: var(--text-color);
	background-color: #fff;
	font-weight: 700;

	@media screen and (max-width: 768px) {
		padding: 4px 0 4px 12px;
		text-align: center;
		background-color: transparent;
	}
`;

export const PanelAccountBalanceWithdrawResp = styled.div`
	display: none;
	margin-top: 8px;
	margin-bottom: 8px;
	padding: 0px 16px;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: block;
		margin-bottom: 16px;
	}
`;

export const PanelAccountBalanceWithdrawRespBtn = styled(BtnLink)<DefaultBtnType>`
	display: inline-block;
	width: 100px;
	padding: 6px 16px 6px 16px;
	font-size: 14px;
	font-weight: normal;
	text-align: center;
`;

export const PanelAccountBalanceMain = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		justify-content: center;
	}
`;

export const TableCellStyle = styled.th`
	color: var(--text-color);
	padding: 8px 4px 8px 4px;
	font-size: 14px;
	font-style: normal;
	text-align: center;
	font-family: inherit;
	font-weight: 600;
	line-height: 20px;
`;
export const TableCellInnerStyle = styled.div`
	padding: 8px 10px 8px 10px;
`;

export const TableCellInnerStyleFirst = styled.div`
	margin-left: 8px;
`;
export const TableCellInnerStyleLast = styled.div`
	margin-right: 8px;
`;

export const StyleColorTextValue = styled.div<{
	transactionValue: number;
	xStyleWidthTable?: FlattenSimpleInterpolation;
}>`
	color: ${(props) => (props.transactionValue > 0 ? "var(--primary-color)" : "var(--alert-color)")};
	font-weight: 600;
	transform: translateY(-2px);
	${(props) => props.xStyleWidthTable};
`;

export const StyleColorTextPending = styled.div`
	font-weight: 600;
	color: var(--text-color);
	transform: translateY(-2px);
	min-width: 100px;
`;
export const StyleCommonTableContainerResp = styled(CommonTableContainerResp)`
	background-color: #fff;
	border-radius: 16px;
	box-shadow: 0 0 8px #8a8a8a;
	@media screen and (max-width: 768px) {
		& tbody tr td:first-child {
			margin-top: 0;
			// display: none;
		}
		border-radius: none;
		box-shadow: none;
	}
`;

export const StyleTableAdminFlex = styled.div`
	display: flex;
	align-items: center;
`;

export const StyleTableCell = styled.span`
	@media screen and (max-width: 768px) {
		font-size: 13px;
		padding-top: 0;
		font-weight: 600;
		&:first-child {
			// display: none;
		}
	}
`;
export const StyleTableCellFilter = styled(StyleTableCell)`
	width: 200px;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		font-size: 13px;
		padding-top: 0;
		font-weight: 600;
		&:first-child {
			// display: none;
		}
	}
`;
export const StyleDateTime = styled.span`
	display: block;
	@media screen and (max-width: 768px) {
		display: inline-block;
	}
`;
export const StyleTransactionType = styled.div`
	min-width: 100px;
`;

export const StyleFilterCell = styled.div`
	display: flex;
`;
export const StyleTableCellText = styled.span`
	white-space: nowrap;
	flex: 1;
	text-overflow: ellipsis;
	overflow: hidden;
	min-width: 0;
	@media screen and (max-width: 768px) {
		font-size: 12px;
		padding-top: 0;
	}
`;
export const StyleTableCellRespLabel = styled(CommonTableCellRespLabel)`
	@media screen and (max-width: 768px) {
		&:first-child {
			top: 10px;
			font-size: 13px;
		}
	}
`;
export const PanelAccointBalanceWrap = styled.div`
	display: flex;
	align-items: center;
`;
export const StyleTableCellRespContain = styled.div<{
	$xStyleConstWidthTable?: FlattenSimpleInterpolation;
}>`
	padding: 6px 0 6px 0;
	width: 100%;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 768px) {
		justify-content: flex-end;
		padding: 0;
	}

	${(props) => props.$xStyleConstWidthTable}
`;
export const StyleTableCellRespContainName = styled(StyleTableCellRespContain)`
	cursor: pointer;
`;
export const TableCellResLabelStyle = css`
	top: 10px;
	left: 0px;
`;
export const TableCellResLabelStyleNotBoderRight = css`
	border-right: none;
`;
export const $xStyleTableContainerRespTbodyTr = css`
	border: 1px solid #fff;
	border-radius: 16px;
	padding: 24px 16px 16px 16px;
	background-color: #fff;
	margin-bottom: 12px;
`;
export const $xStyleTableContainerResp = css`
	& tbody tr:first-child {
		// border-top: 1px solid var(--border-color);
	}
`;

export const $xStyleTableContainerRespTbodyTrTd = css`
	margin-top: -10px;
	margin-right: 0px;
	margin-left: 0px;
`;
export const StyleTooltipText = makeStyles({
	tooltip: {
		fontSize: "13px !important",
		padding: "8px 12px",
		fontWeight: "normal",
	},
});

export const $xStyleConstWidthTable = css`
	min-width: 0;
`;

export const StyleWidthTable = css`
	width: 100px;
`;

export const $xStyleConstWidthSmTable = css`
	min-width: 0;
	max-width: 40px;
`;
export const BlackListAdminUser = styled.div`
	background-color: var(--text-color1v2);
	color: #fff;
	padding: 4px 8px;
	border-radius: 100px;
`;
