import { Grid } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { PageCenter } from "../../../controls/components/form/Page";
import { Link } from "react-router-dom";
import { StylePagePersonContentKey } from "../../personal/component/StylePerson";

export const StyleColorTextPending = styled.div`
	font-weight: 600;
	color: var(--text-color);
	transform: translateY(-2px);
	min-width: 100px;
`;
export const PartnerDetailLeftWrap = styled.div`
	max-width: 66.67%;
`;

export const PartnerDetailFormMainWrap = styled.div`
	width: 100%;
`;

export const StylePartnerSelectField = styled.select`
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

export const PartnerDetailDateInput = styled(KeyboardDatePicker)<{
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
	}

	${(props) => props.xStyle}
`;
export const PartnerDetailSelect = styled.select`
width: 100%;
padding: 12px 18px;
border: 1px solid var(--border-color);
font-size:14px;
}
`;
export const GenderDetailSelect = styled.select`
width: 100%;
padding: 12px 18px;
border: 1px solid var(--border-color);
font-size:14px;
@media screen and (max-width: 768px) {
		margin-bottom: 8px;
}
}
`;
export const GridPartner = styled(Grid)`
	@media screen and (max-width: 768px) {
		padding: 4px 0 !important;
		margin: 0 !important;
		width: 100% !important;
	}
`;
export const GridPartnerFlex = styled(Grid)`
	@media screen and (max-width: 768px) {
		padding: 0;
		display: flex;
		flex-direction: column-reverse;
		width: 100% !important;
	}
`;
export const PartnerPageCenter = styled(PageCenter)`
	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;

export const StyledTimeWorkUpdateWrap = styled.div`
	margin-top: 12px;
`;

export const StyledTimeWorkHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	color: var(--text-color2);
`;

export const StyledTimeWorkTitle = styled.div``;

export const StyledTimeWorkAddBtn = styled.button`
	border-radius: 100px;
	padding: 8px 12px;
	background-color: var(--primary-color);
	color: #fff;
	border: none;
`;

export const StyledTimeWorkAddBtnv2 = styled(StyledTimeWorkAddBtn)`
	margin-right:8px;
`;


export const StyledTimeWorkUpdateInputWrap = styled.div``;

export const StyledTimeWorkInputHead = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	padding: 0 16px;
	color: var(--text-color2);
	& > div {
		flex: 1;
	}
`;

export const StyledTimeWorkLabel = styled.div``;

export const StyledTimeWorkElementLabel = styled.div``;

export const StyledTimeWorkInputContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 12px;
	margin: 12px 0px;
	padding: 0 16px;
`;
export const StyledTagsInputContainer = styled.div`
	display: flex;
    justify-content: space-between;
	align-items: center;
	gap: 12px;
	margin: 12px 0px;
	padding: 0 16px;
`;

export const StyledTimeWorkDelBtn = styled(StyledTimeWorkAddBtn)`
	background: var(--alert-color);
`;
export const StyledTimeWorkInput = styled.input`
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

export const StyledTimeWorkNoneItem = styled.div``;

export const StyledLinkDescriptionLang = styled(Link)`
padding: 12px 20px;
background-color: var(--primary-color);
float: right;
color: #fff;
text-decoration-line: none;
border-radius: 100px;
}`;

export const StyledInfoStaffRightWrap = styled.div`
	margin-top: 40px;
	border: 1px solid #ccc;
	width: max-content;
	border-radius: 12px;
	padding: 12px;
	width: 100%;
`;
export const StyledInfoStaffRightTitle = styled.div`
	text-align: center;
	font-size: 24px;
	margin-bottom: 20px;
`;

export const StylePersonalLabelInfoStaff = styled(StylePagePersonContentKey)`
	width: 100%;
	margin-top: 20px;
	margin-bottom: 8px;
	color: var(--text-color2);
	font-family: SF-Pro-Display;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
	}
`;

export const StylePersonalLabelInfoStaffv2 = styled(StylePersonalLabelInfoStaff)`
	text-align: start;
`;

export const TagSecsionWrap = styled.div`
padding: 8px;
border: 1px solid #ccc;
border-radius:8px;
`;

export const TagSecsionTitle = styled.div`
	display: flex;
	font-size: 16px;
	font-weight: 600;
	color: #000;
`;