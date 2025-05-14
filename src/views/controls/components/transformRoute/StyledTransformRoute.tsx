import styled from "styled-components";

export const StyledTransformWrap = styled.div`
	position: relative;
`;

export const StyledTransformRoute = styled.div`
	opacity: 0;
	-webkit-transition: opacity 0.2s linear;
	-o-transition: opacity 0.2s linear;
	transition: opacity 0.2s linear;

	top: 0px;
	left: 0px;
	width: 100%;
	z-index: 0;

	&.appearing {
		opacity: 1;
		position: absolute;
		z-index: 1;
	}

	&.appeared {
		opacity: 1;
		position: relative;
		z-index: 1;
		margin-top: 60px;
		@media screen and (max-width: 768px) {
		margin-top: 120px;
	}
	}

	&.fading {
		opacity: 0;
		position: relative;
		z-index: 0;
	}

	&.faded {
		opacity: 0;
		position: absolute;
		z-index: 0;
	}
`;
