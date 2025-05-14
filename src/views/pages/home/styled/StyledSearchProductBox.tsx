import styled, { FlattenSimpleInterpolation } from "styled-components";
import { InputText } from "../../../controls/components/form/FormInput";

export const SearchProductBoxOuter = styled.div<{
	$xStyle?: FlattenSimpleInterpolation;
	$isSearched?: boolean;
}>`
	position: relative;
	margin: 0 auto;
	border: 1px solid transparent;
	max-width: 850px;
	@media screen and (max-width: 768px) {
		margin: 0 21px 0 19px;
		margin-bottom: 74px;
		${(props) => props.$isSearched && "margin-bottom:0;"}
	}
	&:focus-within {
		border: 1px solid black;
	}
	margin-bottom: 74px;
	${(props) => props.$xStyle}
	${(props) => props.$isSearched && "margin-bottom:0;"}
	background-color: #fff;
`;

export const SearchProductBoxAction = styled.div<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	position: absolute;
	top: 0px;
	left: 0px;
	bottom: 0px;
	${(props) => props.$xStyle}
`;

export const SearchProductBoxSearchBtn = styled.button<{
	xStyle?: FlattenSimpleInterpolation;
}>`
	background-color: #fff;
	height: 100%;
	font-size: 14px;
	color: white;
	border: none;
	cursor: pointer;
	border-top-left-radius: 26px;
    border-bottom-left-radius: 26px;
	}
	${(props) => props.xStyle}
`;

export const SearchProductBoxSearchInputText = styled(InputText)<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}

	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		& {
			font-size: 16px;
		}
	}

	background-color: #fff;

	${(props) => props.$xStyle}
`;
export const SearchProductBoxDeleteInputBtn = styled.button`
	position: absolute;
	top: calc(50% - 12px);
	display: flex;
	align-items: center;
	right: 18px;
	background: transparent;
	height: 24px;
	font-size: 18px;
	color: var(--text-color0);
	border: none;
	cursor: pointer;
	@media screen and (max-width: 768px) {
		right: 18px;
	}
	& img {
		width: 14px;
	}
`;
export const SearchIcon = styled.i`
	font-size: 24px;
	margin-right: 8px;
	color: var(--primary-colorv2);
	@media screen and (max-width: 768px) {
		margin-right: 6px;
	}
`;
