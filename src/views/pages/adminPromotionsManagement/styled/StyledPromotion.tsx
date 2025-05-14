import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { Link } from "react-router-dom";
import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { AdminVoucherDialogInput } from "../../adminVoucherManagement/styled/StyledAdminVoucher";

export const TransactionHisFilterDateTimeRangeInput = styled(KeyboardDateTimePicker)<{
	xStyle?: FlattenSimpleInterpolation;
}>`
	&.MuiFormControl-root {
		width: 250px;
		display: inline-block;
		background: #ffffff;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
		margin: 0px;
		vertical-align: 0px;
		box-shadow: none;
		border: 1px solid var(--border-color);
		border-radius: 100px;
		width: 190px;

		font-size: 14px;
		line-height: 15px;
		color: var(--text-color);
	}

	&.MuiFormControl-root:hover {
		box-shadow: 0px 0px 4px #d0d0d0;
	}

	& input {
		padding: 10px 0px 10px 20px;
		font-size: 14px;
		line-height: 15px;
		color: var(--text-color);
		font-family: SF-Pro-Display;
		@supports (-webkit-overflow-scrolling: touch) {
			& {
				font-size: 16px;
				padding: 0px 0px 0px 12px;
			}
		}
	}

	& .MuiInput-underline::before,
	& .MuiInput-underline::after {
		display: none;
	}

	@media screen and (max-width: 768px) {
		&.MuiFormControl-root {
			width: calc(100% - 125px);
			margin-bottom: 8px;
		}
		&.visible {
			width: 100%;
		}
	}

	${(props) => props.xStyle}
`;

export const AdminDialogInputPromotion = styled(AdminVoucherDialogInput)`
	margin-top: 32px;
	width: 100%;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;

export const PromotionStaffInputServiceWrap = styled.div`
	// display: flex;
	margin-bottom: 16px;
`;

export const PromotionStaffInputServiceDiv = styled.div`
	display: flex;
	margin: 8px 0;
`;
export const PromotionInputWrapCheckAllWrap = styled.div`
	margin-bottom: 20px;
	display: flex;
`;
export const PromotionInputWrapCheckAll = styled.div`
	margin-bottom: 8px;
	display: flex;
`;
export const PromotionInputWrapCheckIn = styled.div`
	padding-left: 20px;
	margin-bottom: 12px;
`;
export const PromotionInputWrap = styled.div`
	color: var(--text-color0);
`;
export const PromotionInputColorServiceName = styled.span`
	color: var(--toastify-color-info);
`;
export const AdminPromotionManagementFilterLeft = styled.div`
	// width: 50%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: flex;
		-webkit-box-pack: justify;
		flex-direction: column;
	}
`;
export const AdminPromotionManagementFilterSearch = styled.div`
	@media screen and (max-width: 768px) {
		margin-top: 8px;
		width: 100%;
	}
`;
export const AdminPromotionManagementFilterItem = styled.div`
	margin-left: 16px;
	margin-right: 16px;
	min-width: 200px;
	@media screen and (max-width: 1282px) {
		margin: 8px 0px;
		min-width: 0px;
		width: 100%;
	}
`;
