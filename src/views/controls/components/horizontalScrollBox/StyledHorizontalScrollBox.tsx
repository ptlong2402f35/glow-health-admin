import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const HorizontalBoxWrap = styled.div<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	${(props) => props.$xStyle};
`;

export const HorizontalBoxInner = styled.div<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	position: relative;

	${(props) => props.$xStyle};
`;

export const HorizontalBoxScrollWrap = styled.div``;

export const HorizontalBoxScroll = styled.div`
	width: 100%;
	overflow-x: scroll;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const HorizontalBoxScrollInner = styled.div`
	width: max-content;
`;

export const HorizontalBoxActions = styled.div<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	${(props) => props.$xStyle};
`;

export const HorizontalBoxActionPrev = styled.div<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	position: absolute;
	top: 0px;
	left: -20px;
	height: 100%;
	display: flex;
	align-items: center;

	${(props) => props.$xStyle};
`;

export const HorizontalBoxActionPrevBtn = styled.button<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	display: inline-block;
	height: 45px;
	background-color: #fff;
	border: 3px solid var(--text-color);
	width: 45px;
	border-radius: 100px;
	font-size: 20px;
	line-height: 38px;
	opacity: 1;
	transition: opacity 0.3s;
	color: var(--text-color);
	transition: transform 0.3s;

	&.hide {
		opacity: 0;
	}

	& span,
	& i {
		line-height: 38px;
	}

	&:hover {
		transform: scale(1.2);
	}

	${(props) => props.$xStyle};
`;

export const HorizontalBoxActionNext = styled.div<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	position: absolute;
	top: 0px;
	right: -20px;
	height: 100%;
	display: flex;
	align-items: center;

	${(props) => props.$xStyle};
`;

export const HorizontalBoxActionNextBtn = styled.button<{
	$xStyle?: FlattenSimpleInterpolation;
}>`
	display: inline-block;
	height: 45px;
	background-color: #fff;
	border: 3px solid var(--text-color);
	width: 45px;
	border-radius: 100px;
	font-size: 20px;
	line-height: 38px;
	opacity: 1;
	transition: opacity 0.3s;
	color: var(--text-color);
	transition: transform 0.3s;

	&.hide {
		opacity: 0;
	}

	& span,
	& i {
		line-height: 38px;
		font-weight: bold;
	}

	&:hover {
		transform: scale(1.2);
	}

	${(props) => props.$xStyle};
`;
