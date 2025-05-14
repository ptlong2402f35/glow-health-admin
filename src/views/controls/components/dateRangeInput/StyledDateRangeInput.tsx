import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { KeyboardDatePicker } from "@material-ui/pickers";

export const TransactionHisFilterDateRangeInput = styled(KeyboardDatePicker)<{
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
export const TransactionHisFilterDateRangeInputOrder = styled(TransactionHisFilterDateRangeInput)`
	&.MuiFormControl-root {
		width: 100%;
		border: 1px solid #fff;
	}
	& .MuiInput-input::placeholder {
		color: #a3a3a3;
		opacity: 1;
	}
	& .MuiInput-input {
		width: 80px;
		color: black;

		@supports (-webkit-overflow-scrolling: touch) {
			& {
				width: 85px;
			}
		}
	}
	&.MuiFormControl-root:hover {
		box-shadow: none;
	}
	@media screen and (max-width: 768px) {
		&.MuiFormControl-root {
			margin-bottom: 0px;
		}
	}
`;

export const TransactionHisFilterDateRangeLabel = styled.div<{
	xStyle?: FlattenSimpleInterpolation;
}>`
	margin-left: 4px;
	margin-right: 4px;
	display: inline-block;
	vertical-align: 0px;
	font-weight: 600;
	font-size: 14px;
	line-height: 15px;
	color: #a9a9a9;

	@media screen and (max-width: 768px) {
		& {
			width: 110px;
			margin: 0px 15px 0px 0px;
			text-align: left;
		}
	}
	${(props) => props.xStyle}
`;
export const TransactionHisFilterDateRangeLabelOrder = styled(TransactionHisFilterDateRangeLabel)`
	@media screen and (max-width: 768px) {
		& {
			width: auto;
			margin: 0px;
		}
	}
`;
export const FilterDateWrap = styled.div`
	@media screen and (max-width: 768px) {
		display: flex;
	}
`;
