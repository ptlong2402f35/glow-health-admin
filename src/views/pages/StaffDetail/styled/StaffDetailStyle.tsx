import { Grid } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { PageCenter } from "../../../controls/components/form/Page";
import { Link } from "react-router-dom";
import environments from "../../../../environment";

export const DialogGetInfoVoucherSelect = styled.select`
	width: 100%;
	padding: 10px 16px;
	border: 1px solid #b5b6b5;
	border-radius: 8px;
	color: #838683;
	margin-bottom: 16px;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	font-size: 16px;
	line-height: 1.5;
	height: auto;
	box-sizing: border-box;
	background: #fff;
	outline: none;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
`;

export const DialogGetInfoVoucherTextArea = styled.textarea`
	display: flex;
	height: 72px;
	padding: 12px 16px;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 16px;
	border-radius: 12px;
	border: 1px solid #b5b6b5;
	width: 100%;
`;

export const DialogGetInfoVoucherImgWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-bottom: 20px;
`;

export const DialogGetInfoVoucherImgTitle = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;
`;

export const AddImgProfilePersonalv2 = styled.label`
	width: 72px;
	height: 72px;
	background-color: #f3f3f3;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const DialogGetInfoVoucherAvatarServicePersonalMulti = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const DialogGetInfoVoucherAdminProductMultiImg = styled.img`
	width: 72px;
	height: 72px;
	border-radius: 8px;
	object-fit: cover;
`;

export const DialogGetInfoVoucherAdminProductMultiImgDiv = styled.div`
	position: relative;
	margin: 8px 4px;
`;

export const DialogGetInfoVoucherContainerWrap = styled.div`
	width: 530px;
	margin: auto;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const ConfirmNumberStarImg = styled.img`
	width: 28px;
	height: 28px;
	cursor: pointer;
	margin-right: 16px;
`;

export const ConfirmNumberStarSpan = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		font-size: 13px;
		line-height: 20px;
	}
`;
export const ConfirmNumberStarDialogGetInfoVoucher = styled.div`
	margin-bottom: 18px;
`;
export const DialogGetInfoVoucherButton = styled.button`
	border-radius: 24px;
	background-color: #5b7a4f;
	display: flex;
	padding: 10px 24px;
	justify-content: center;
	align-items: center;
	color: #fff;
	border: 1px solid;
	margin: auto;
	margin-bottom: 20px;
`;

export const ConfirmNumberStarWrap = styled.div`
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		margin-bottom: 14px;
	}
`;

export const StaffDetailSuggestWrap = styled.div`
	position: relative;
	@media screen and (max-width: 768px) {
		margin-left: 12px;
	}
`;

export const StaffDetailSuggestTitle = styled.h2`
	font-size: 28px;
	font-style: normal;
	font-weight: 500;
	line-height: 40px;
	text-align: left;
	margin-bottom: 16px;
	// padding: 6px 0;
	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
		margin-top: 12px;
		font-size: 24px;
		text-align: left;
		padding-left: 8px;
	}
`;

export const StaffDetailSuggestSSR = styled.div`
	display: flex;
`;

export const AdsenseWrap = styled.div`
	display: ${environments.googleAdsBlock ? "block" : "none"};
	max-width: 1280px;
	width: 100%;
	height: 80px !important;
	text-align: center;
	margin-bottom: 12px;
`;
