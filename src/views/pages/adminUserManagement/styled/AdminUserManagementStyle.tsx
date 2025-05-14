import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { TableRow } from "@material-ui/core";
import { CareType, ValidateStatusType } from "../../../../models/Staff";

export const StyleColorTextPending = styled.div`
	font-weight: 600;
	color: var(--text-color);
	transform: translateY(-2px);
	min-width: 100px;
`;

export const PaginationWrapper = styled.div`
	margin-top: 24px;
	margin-bottom: 32px;
	text-align: center;

	@media screen and (max-width: 768px) {
		margin: 16px 0px 16px 0px;
	}
`;

export const PaginationWrapperv2 = styled.div`
	margin-top: 24px;
	margin-bottom: 12px;
	text-align: center;

	@media screen and (max-width: 768px) {
		margin: 16px 0px 12px 0px;
	}
`;

export const AdminUserManagementCheckBoxWrap = styled.div`
	position: relative;
	cursor: pointer;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: transparent;
	&:hover {
		background-color: rgba(0, 0, 0, 0.06);
	}
	display: flex;
	justify-content: center;
	align-items: center;
	& > input {
		position: absolute;
		left: 0;
		top: 0;
		width: 30px;
		height: 30px;
		opacity: 0;
		cursor: pointer;
	}
	& > span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 12.5px;
		height: 12.5px;
		border: 1px solid var(--primary-color);
		border-radius: 2px;
	}
`;

export const RebateImgWrap = styled.div`
	width: 48px;
	height: 48px;
	justify-content: center;
	cursor: pointer;
`;
export const RebateImg = styled.img`
	// position: absolute;
	width: 48px;
	min-width: 48px;
	border-radius: 50%;
	display: inline-flex;
	height: 48px;
`;
export const RebateEditWrapStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const RebateEditIconStyle = styled.div`
	width: 10px;
	height: 10px;
	border: 1px solid #ccc;
`;
export const StyleRebateTextPending = styled(StyleColorTextPending)<{
	$xIsOnline?: boolean | null | undefined;
}>`
	font-weight: 1000;
	${(props) => (props.$xIsOnline ? "color:green;" : "color:red")}
`;

export const StyleRebateTextPendingVerification = styled(StyleColorTextPending)<{
	$xIsVerification?: ValidateStatusType | null | undefined;
}>`
	font-weight: 1000;
	${(props) => (props.$xIsVerification === ValidateStatusType.Verification ? "color:green;" : "color:red")};
	display: flex;
	margin-left: 8px;
`;

export const StyleRebateTextPendingIdentifyCard = styled(StyleColorTextPending)<{
	$xIsVerification?: string | undefined;
}>`
	font-weight: 1000;
	${(props) => (props.$xIsVerification ? "color:green;" : "color:red")};
	display: flex;
	margin-left: 8px;
`;

export const StyleRebateTextPendingCareStatus = styled(StyleColorTextPending)<{
	$xIsVerification?: CareType | null | undefined;
}>`
	font-weight: 1000;
	${(props) => (props.$xIsVerification === CareType.Active ? "color:green;" : "color:red")};
	display: flex;
	margin-left: 8px;
`;

export const StyleRebateTextPendingcertificateImages = styled(StyleColorTextPending)<{
	$xIsVerification?: string[] | null | undefined;
}>`
	font-weight: 1000;
	${(props) => (props.$xIsVerification ? "color:green;" : "color:red")};
	display: flex;
	margin-left: 8px;
`;

export const StyleRebateTextPendingPunish = styled(StyleColorTextPending)<{
	$xIsVerification?: number | null | undefined;
}>`
	font-weight: 1000;
	${(props) => (props.$xIsVerification === 0 ? "color:green;" : "color:red")};
	display: flex;
	margin-left: 8px;
`;

export const RebateRemoveIconStyle = styled.div`
	width: 10px;
	height: 10px;
	border: 1px solid #ccc;
`;

export const AdminUserManagementFilterWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: end;
	width: 100%;
	justify-content: space-between;
	margin: 28px 0px;
	align-items: center;

	max-height: 0;
	visibility: hidden;
	margin-bottom: 20px;
	transition: max-height 0.3s ease-in-out;
	&.visible {
		max-height: 800px;
		visibility: visible;
	}

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
export const AdminUserManagementFilterWrapv3 = styled(AdminUserManagementFilterWrap)`
	justify-content: flex-start;
	max-height: 800px;
	visibility: initial;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
	}
`;
export const AdminUserManagementFilterWrapv4 = styled(AdminUserManagementFilterWrap)`
	// justify-content: flex-start;
	max-height: 800px;
	visibility: initial;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
	}
`;
export const AdminUserManagementFilterWrapv2 = styled(AdminUserManagementFilterWrap)`
	@media screen and (max-width: 768px) {
		max-height: fit-content;
		visibility: inherit;
		flex-direction: row;
	}
`;

export const StyleAddUser = styled.div`
	background-color: var(--primary-color);
	margin-top: 4px;
	padding: 10px 18px;
	text-align: center;
	font-weight: 700;
	border-radius: 10px;
	color: #fff;
	cursor: pointer;
	@media screen and (max-width: 768px) {
	}
`;

export const StyleUpdateBanner = styled(StyleAddUser)`
	width: 150px;
`;
export const StyleDaleteBanner = styled(StyleUpdateBanner)`
	background-color: var(--alert-color);
	margin-left: 20px;
`;

export const StyleUserAddress = styled.div`
	background-color: var(--primary-color);
	margin-top: 4px;
	padding: 2px 4px;
	text-align: center;
	font-size: 14px;
	border-radius: 10px;
	color: #fff;
	cursor: pointer;
	@media screen and (max-width: 768px) {
	}
`;

export const StyleUserBan = styled.button`
	margin-left: 6px;
	border-radius: 100px;
	padding: 4px 6px;
	border: none;
	color: #fff;
	background-color: var(--primary-color);
	@media screen and (max-width: 768px) {
	}
`;

export const AdminUserManagementFilterBox = styled.div`
	width: 20%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const AdminUserManagementFilterLeft = styled.div`
	width: 30%;
	display: inline-block;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const AdminUserManagementFilterRight = styled.div`
	width: 70%;
	display: inline-block;

	& > label {
		margin-bottom: 8px;
		display: block;
		cursor: pointer;
	}

	& > input[type="check"] {
		display: block;
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const AdminUserManagementFilterBoxAmDuong = styled.div`
	width: 10%;
	margin-left: 32px;
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-left: 0px;
	}
`;

export const AdminUserManagementFilterBoxv2 = styled.div`
	width: 20%;
	@media screen and (max-width: 768px) {
		width: 48%;
	}
`;

export const AdminUserManagementFilterBoxv3 = styled(AdminUserManagementFilterBox)`
	margin-left: 32px;
	@media screen and (max-width: 768px) {
		margin-left: 0px;
	}
`;
export const AdminUserManagementFilterBoxTwo = styled.div`
	width: 240px;
	margin-right: 20px;
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-right: 0px;
	}
`;
export const AdminUserManagementFilterBoxSelectTwo = styled.div`
	width: 215px;
	margin-right: 20px;
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-right: 0px;
		margin-bottom: 8px;
	}
`;
export const AdminUserManagementFilterBoxDate = styled.div`
	display: flex;
	align-items: center;
`;

export const AdminUserManagementFilterTitle = styled.div`
	color: var(--text-color);
	margin-bottom: 8px;
`;

export const AdminUserManagementFilterPriceWrap = styled.div`
	margin-bottom: 16px;
	font-size: 18px;
	color: var(--text-color);
`;
export const xStyleTableCellRespHead = css`
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
`;

export const AdminUserManagementCheckBoxIcon = styled(CheckBoxIcon)<{
	$RebateActive?: Boolean;
}>`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 18px !important;
	height: 18px !important;
	color: var(--primary-color);
	border-radius: 2px;
	${(props) => (props.$RebateActive ? "display:block" : "display:none!important")};
`;

export const AdminUserManagementTableRow = styled.div`
	padding: 0 8px;
`;

export const AdminTableRowStyle = styled(TableRow)<{
	$RebateActive?: boolean;
}>`
	& > td {
		position: relative;
		border-bottom: 1px solid rgba(224, 224, 224, 1);
		border-right: 1px solid rgba(224, 224, 224, 1);
		@media screen and (max-width: 768px) {
			// display:block !important;
		}
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
		@media screen and (max-width: 768px) {
			min-width: 100px;
		}
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
export const AdminUserCountTitle = styled.div`
	color: var(--text-color);
	font-size: 14px;
	margin-bottom: 20px;
	margin-left: 20px;
`;
export const AdminUserCountMain = styled.span`
	font-size: 16px;
	font-weight: bolder;
	color: var(--alert-color);
`;
export const PageCenterInner = styled.div`
	padding: 0 20px;
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
export const ButtonIsFilterVisible = styled.button`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		padding: 4px 8px;
		border-radius: 12px;
		border: 1px solid var(--primary-color);
		background-color: var(--primary-color);
		color: #fff;
	}
`;
export const ButtonIsFilterVisiblev2 = styled.button`
	// display: none;
	// @media screen and (max-width: 768px) {
	float: right;
	display: block;
	padding: 4px 8px;
	border-radius: 12px;
	border: 1px solid var(--primary-color);
	background-color: var(--primary-color);
	color: #fff;
	// }
`;
export const UpdateUserInforWrap = styled.div`
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;

export const StyleTableCellBackList = styled.div`
	width: 150px;
	display: flex;
`;

export const StyleTableCellBackListInner = styled.div`
	width: 80px;
	display: flex;
`;
