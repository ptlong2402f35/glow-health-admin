import styled, { css } from "styled-components";

export const StyledLayoutWrap = styled.div<{
	fullScreen?: boolean;
}>`
	position: relative;

	${(props) =>
		props.fullScreen &&
		css`
			height: 100%;
		`}
`;
export const StyleBackToTop = styled.button`
	position: fixed;
	bottom: 32px;
	right: 33px;
	z-index: 99;
	padding: 10px;
	background-color: #7c9473;
	cursor: pointer;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	border: 1px solid #7c9473;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
	&:hover {
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);
	}
	& img {
		height: 20px;
	}
`;

export const StyleBackToTopDiv = styled.div`
	& button {
		position: fixed;
		bottom: 32px;
		right: 33px;
		z-index: 99;
		padding: 10px;
		background-color: #7c9473;
		cursor: pointer;
		width: 75px;
		height: 75px;
		border-radius: 50%;
		border: 1px solid #7c9473;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover {
			box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);
		}
		& img {
			height: 55px;
		}
	}
		@media screen and (max-width: 768px) {
		& button {
		width: 55px;
		height: 55px;
		& img {
			height: 40px;
		}
	}
	}
`;
export const StyledLandingPageWrap = styled(StyledLayoutWrap)`
	// font-family: SF-Pro-Text, sans-serif;
	font-family: SF-Pro-Display;
`;