import styled from "styled-components";

export const ImagesEditorControlWrapper = styled.div`
	width: 100%;
	border-radius: 8px;

	& input[type="file"] {
		display: none;
	}
`;

export const ImagesEditorTypeSingleControlBox = styled.div`
	height: 100px;
`;

export const ImagesEditorTypeSingleControlImg = styled.div`
	height: 100%;
	position: relative;
`;

export const ImagesEditorTypeSingleControlImgInner = styled.label`
	cursor: pointer;
	border: 1px solid var(--border-color);
	border-radius: 8px;
	height: 100%;
	position: relative;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
	}
`;

export const ImagesEditorTypeSingleControlCounter = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ImagesEditorTypeSingleControlCounterInner = styled.div`
	font-size: 30px;
	color: var(--primary-color);
`;

export const ImagesEditorTypeSingleControlClear = styled.div`
	position: absolute;
	color: var(--alert-color);
	top: 4px;
	right: 5px;
	line-height: 0px;

	& i {
		cursor: pointer;
	}
`;

export const ImagesEditorTypeSingleControlAction = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--border-color);
	border-radius: 8px;
`;

export const ImagesEditorTypeSingleControlBtn = styled.label`
	display: block;
	padding: 10px;
	width: max-content;
	height: max-content;
	cursor: pointer;
	text-align: center;

	& i {
		font-size: 40px;
		color: var(--primary-color);
	}
`;

export const ImagesEditorTypeSingleControlBtnLabel = styled.div`
	font-weight: normal;
	color: var(--primary-color);
`;
