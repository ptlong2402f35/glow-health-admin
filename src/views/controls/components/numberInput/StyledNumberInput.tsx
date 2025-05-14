import styled from "styled-components";

export const ControlNumberInputWrap = styled.div`
	display: inline-block;
	position: relative;
	padding-right: 82px;
`;

export const ControlNumberInputText = styled.input`
	width: 100%;
	background: #ffffff;
	border: 1px solid #d0d0d0;
	box-sizing: border-box;
	padding: 10px 18px 10px 18px;
	height: 42px;
	border-radius: 4px;

	font-weight: 600;
	font-size: 15px;
	line-height: 20px;

	@supports (-webkit-overflow-scrolling: touch) {
		& {
			font-size: 16px;
		}
	}
`;

export const ControlNumberInputSubBtn = styled.button`
	position: absolute;
	top: 0px;
	right: 41px;
	padding: 10px;
	width: 40px;
	border-radius: 5px 0px 0px 5px;
	border: 1px solid #579d2d;
	background-color: #fff;
	height: 42px;

	font-weight: 600;
	text-align: center;
	color: #579d2d;

	&:disabled {
		border-color: #a0a0a0;
		background-color: #e0e0e0;
		color: #a0a0a0;
	}
`;

export const ControlNumberInputAddBtn = styled.button`
	position: absolute;
	top: 0px;
	right: 0px;
	padding: 10px;
	width: 40px;
	border-radius: 0px 5px 5px 0px;
	border: 1px solid #579d2d;
	background-color: #fff;
	height: 42px;

	font-weight: 600;
	text-align: center;
	color: #579d2d;

	&:disabled {
		border-color: #a0a0a0;
		background-color: #e0e0e0;
		color: #a0a0a0;
	}
`;
