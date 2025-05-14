import styled from "styled-components";
import { DialogWrapBody, StyledDialogWrap } from "../dialogWrap/StyledDialogWrap";

export const StyledImageDialog = styled(StyledDialogWrap)`
	& .MuiDialog-paper {
		width: 100%;
		height: 100%;
		background-color: transparent;
		box-shadow: none;
	}

	& .MuiDialogContent-root,
	& .MuiDialogContent-root:first-child {
		width: 100%;
		height: 100%;
		padding: 0px;
	}
`;

export const ImageDialogWrapBody = styled(DialogWrapBody)`
	padding: 0px;
	width: 100%;
	height: 100%;
`;

export const ImageViewBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ImageViewBoxInner = styled.div`
	position: relative;
`;

export const ImageViewBoxOpen = styled.div`
	position: absolute;
	top: 18px;
	right: 45px;
`;

export const ImageViewBoxOpenBtn = styled.a`
	background-color: transparent;
	border: none;
	padding: 0px;
	line-height: 0px;
	font-size: 20px;
	color: var(--text-color0);
`;

export const ImageViewBoxClose = styled.div`
	position: absolute;
	top: 18px;
	right: 20px;
`;

export const ImageViewBoxCloseBtn = styled.div`
	background-color: transparent;
	border: none;
	padding: 0px;
	line-height: 0px;
	font-size: 20px;
	color: var(--text-color0);
	cursor: pointer;
`;

export const ImageViewBoxMainImg = styled.img`
	border-radius: 8px;
`;

export const ImageViewBoxLeft = styled.div`
	position: absolute;
	left: 8px;
	top: calc(50% - 20px);
`;

export const ImageViewBoxLeftBtn = styled.button`
	border: none;
	padding: 0px;
	background-color: transparent;
	width: 26px;
	font-size: 35px;
	color: var(--text-color0);
	line-height: 26px;

	& i {
		line-height: 26px;
	}
`;

export const ImageViewBoxRight = styled.div`
	position: absolute;
	right: 8px;
	top: calc(50% - 20px);
`;

export const ImageViewBoxRightBtn = styled.button`
	border: none;
	padding: 0px;
	background-color: transparent;
	width: 26px;
	font-size: 35px;
	color: var(--text-color0);
	line-height: 26px;

	& i {
		line-height: 26px;
	}
`;

export const ImageViewBoxCount = styled.div`
	position: absolute;
	bottom: 8px;
	right: 8px;

	& p {
		background-color: #fff;
		border-radius: 4px;
		padding: 2px 4px 2px 4px;
		font-size: 12px;
		color: var(--text-color);
		line-height: 16px;
	}
`;
