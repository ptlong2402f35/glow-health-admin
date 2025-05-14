import { Link } from "react-router-dom";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export enum BtnType {
	Blank = 1,
	Empty = 2,
	Fail = 3,
	FailEmpty = 4,
}

export type DefaultBtnType = {
	btnType?: BtnType;
	useResponsive?: boolean;
	xResponsiveShow?: FlattenSimpleInterpolation;
	xFullWidth?: FlattenSimpleInterpolation;
};
export const DisplayNone = css`
	@media screen and (min-width: 768px) {
		display: none !important;
	}
`;
export const FullWidth = css`
	@media screen and (min-width: 768px) {
		width: calc(100%) !important;
		background-color: var(--primary-color);
	}
`;

const defaultBtnStyle = css<DefaultBtnType>`
	text-decoration: none;
	border: 1px solid var(--primary-color);
	background-color: var(--primary-color);
	color: #fff;
	padding: 10px 30px 12px 30px;
	border-radius: 8px;
	font-size: 16px;
	line-height: 17px;
	font-weight: 600;
	cursor: pointer;

	${(props) =>
		props.btnType == BtnType.Blank &&
		css`
			background-color: transparent;
			color: var(--text-color2);
			border: 1px solid transparent;
		`}

	${(props) =>
		props.btnType == BtnType.Empty &&
		css`
			background-color: #fff;
			color: var(--primary-color);
		`}

    ${(props) =>
		props.btnType == BtnType.Fail &&
		css`
			border: 1px solid var(--alert-color);
			background-color: var(--alert-color);
			color: #fff;
		`}

    ${(props) =>
		props.btnType == BtnType.FailEmpty &&
		css`
			border: 1px solid var(--alert-color);
			background-color: #fff;
			color: var(--alert-color);
		`}

    &:hover {
		box-shadow: 0px 0px 5px #c0c0c0;
	}

	&:active {
		box-shadow: none;
	}

	&:disabled {
		background-color: var(--primary-color-blur);
		border-color: var(--primary-color-blur);

		${(props) =>
			props.btnType == BtnType.Empty &&
			css`
				background-color: #fff;
				color: var(--primary-color);
			`}

		${(props) =>
			props.btnType == BtnType.Fail &&
			css`
				border: 1px solid var(--alert-color-blur);
				background-color: var(--alert-color-blur);
			`}

        ${(props) =>
			props.btnType == BtnType.FailEmpty &&
			css`
				background-color: #e0e0e0;
				border-color: var(--alert-color-blur);
			`}
	}

	@media screen and (max-width: 768px) {
		${(props) =>
			props.useResponsive &&
			css`
				padding: 6px 16px 6px 16px;
				min-width: 50px;
				font-size: 14px;
				font-weight: normal;
			`}
	}
`;

export const BtnButton = styled.button<DefaultBtnType>`
	${(props) => props.xResponsiveShow};
	${(props) => props.xFullWidth};
	${defaultBtnStyle}
`;
export const BtnDiv = styled.div<DefaultBtnType>`
	${defaultBtnStyle}
`;
export const BtnInput = styled.input<DefaultBtnType>`
	${defaultBtnStyle}
`;
export const BtnLink = styled(Link)<DefaultBtnType>`
	${defaultBtnStyle}
`;

const defaultBtnIconStyle = `
    display: inline-block;
    background-color: #fff;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    width: 25px;
    padding: 0px;
    line-height: 25px;
    color: var(--text-color);
    font-size: 16px;
    text-align: center;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 3px #d0d0d0;
    }
`;

export const BtnIconButton = styled.button`
	${defaultBtnIconStyle}
`;
export const BtnIconDiv = styled.div`
	${defaultBtnIconStyle}
`;
export const BtnIconInput = styled.input`
	${defaultBtnIconStyle}
`;
