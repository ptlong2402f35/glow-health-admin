import Dialog from "@material-ui/core/Dialog";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { BtnButton, BtnLink } from "../form/FormButton";

export const StyledDialogWrap = styled(Dialog)<{
	xStyle?: FlattenSimpleInterpolation;
}>`
	@media screen and (max-width: 768px) {
		& .MuiDialog-paperScrollPaper {
			max-height: calc(100% - 32px) !important;
			${(props) => props.xStyle};
		}

		& .control-dialog-wrap .MuiDialog-paper {
			min-width: unset;
			width: 100%;
			margin: 16px;
		}
	}
`;
export const BorderDialog = css`
	margin: 0px 20px;
	border-radius: 16px;
`;
export const DialogWrapHeading = styled.div<{
	medium?: boolean;
	xStyle?: FlattenSimpleInterpolation;
}>`
	padding: 24px 32px 24px 32px;
	position: relative;
	width: 100%;
	display: block;

	${(props) =>
		props.medium &&
		css`
			padding: 24px 32px 16px 32px;
		`}

	@media screen and (max-width: 768px) {
		padding: 20px;
	}

	${(props) => props.xStyle};
`;

export const DialogWrapTitle = styled.div<{
	medium?: boolean;
	xStyle?: FlattenSimpleInterpolation;
}>`
	font-weight: 600;
	font-size: 24px;
	line-height: 24px;
	color: var(--text-color0);
	font-family: "SF-Pro-Display";

	${(props) =>
		props.medium &&
		css`
			font-weight: 700;
			font-size: 20px;
			line-height: 21px;
		`}

	@media screen and (max-width: 768px) {
		font-size: 23px;
		line-height: 25px;
	}

	${(props) => props.xStyle};
`;
export const DialogWrapImg = styled.img`
	width: 24px;
	display: inline;
	margin-right: 8px;
`;
export const DialogWrapTitleInner = styled.div<{ center?: boolean }>`
	display: inline;
	vertical-align: top;
	font-size: 20px;
	${(props) =>
		props.center &&
		css`
			display: flex;
			justify-content: center;
		`}
`;

export const DialogWrapClose = styled.div<{
	medium?: boolean;
	xStyle?: FlattenSimpleInterpolation;
}>`
	position: absolute;
	top: 26px;
	right: 32px;

	${(props) =>
		props.medium &&
		css`
			top: 22px;
			right: 32px;
		`}

	@media screen and (max-width: 768px) {
		top: 24px;
		right: 24px;
	}

	${(props) => props.xStyle};
`;

export const DialogWrapCloseBtn = styled.button`
	border: none;
	background-color: transparent;
	padding: 0px;
	width: max-content;
	height: max-content;
`;

export const DialogWrapBody = styled.div<{
	medium?: boolean;
	xStyle?: FlattenSimpleInterpolation;
	center?: boolean;
}>`
	padding: 0px 32px 0px 32px;
	width: 100%;
	display: block;

	${(props) =>
		props.medium &&
		css`
			padding: 24px 32px 4px 32px;
		`}
	${(props) =>
		props.center &&
		css`
			padding: 8px 16px 4px 16px;
		`}

	@media screen and (max-width: 768px) {
		padding: 0px 24px 0px 24px;
	}

	${(props) => props.xStyle};
`;

export const DialogWrapFoot = styled.div<{
	medium?: boolean;
	xStyle?: FlattenSimpleInterpolation;
	xStyleTextAlignCenter?: FlattenSimpleInterpolation;
}>`
	padding: 36px 64px 36px 64px;
	position: relative;
	width: 100%;
	display: block;
	text-align: right;
	${(props) =>
		props.medium &&
		css`
			padding: 20px 32px 24px 32px;
		`}

	@media screen and (max-width: 768px) {
		padding: 9px 20px 10px 20px;
		font-weight: normal;
	}
	${(props) => props.xStyle}
`;

export const DialogWrapFootBtn = styled(BtnButton)`
	padding: 9px 20px 10px 20px;
	font-weight: normal;
`;

export const DialogWrapFootBtnLink = styled(BtnLink)`
	padding: 9px 20px 10px 20px;
	font-weight: normal;
`;
