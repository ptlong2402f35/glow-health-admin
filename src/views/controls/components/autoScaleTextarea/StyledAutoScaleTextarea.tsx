import styled from "styled-components";

export const AutoScaleTextareaWrapBox = styled.div`
	position: relative;
	overflow-wrap: break-word;
	white-space: pre-line;
	padding-top: 3px;
	padding-bottom: 5px;

	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 20px;
`;

export const AutoScaleTextareaInput = styled.textarea`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	border: none;
	padding-bottom: 3px;
	border-bottom: 1px solid transparent;
	white-space: pre-line;

	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 20px;

	@supports (-webkit-overflow-scrolling: touch) {
		& {
			font-size: 16px;
		}
	}
`;
