import styled, { css } from "styled-components";

export const StyledContentWrap = styled.div<{
	fullScreen?: boolean;
}>`
	z-index: 1;
	// margin-top: 64px;
	position: relative;
	background-color: var(--background-color);
	${(props) =>
		props.fullScreen &&
		css`
			height: 100%;
		`}

	@media screen and (max-width: 768px) {
		// margin-top: 50px;
	}
`;

export const StyledContent = styled.div<{
	fullScreen?: boolean;
}>`
	z-index: 1;
	${(props) =>
		props.fullScreen &&
		css`
			height: 100%;
			overflow-y: auto;
		`}
`;
export const StyledContentLandingPageWrap = styled(StyledContentWrap)``;
