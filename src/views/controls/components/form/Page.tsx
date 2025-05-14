import styled, { css } from "styled-components";

export const PageWrapStyle = css<{
	$transparent?: boolean;
	$transparentResp?: boolean;
}>`
	display: flex;
	justify-content: center;
	background-color: var(--background-color);
	min-height: 700px;

	${(props) =>
		props.$transparent &&
		css`
			background-color: transparent;
		`}

	@media screen and (max-width: 768px) {
		min-height: unset;
		background-color: #fff;

		${(props) =>
			props.$transparentResp &&
			css`
				background-color: transparent;
			`}
	}
`;

export const PageWrap = styled.div`
	background-color: #fff !important;
	@media screen and (max-width: 768px) {
	}
	${PageWrapStyle}
`;

export const PageCenterStyle = css`
	width: 100%;
	margin: 0 30px;
	padding-top: 16px;
	padding-bottom: 16px;

	@media screen and (max-width: 1282px) {
		width: 100%;
		padding: 0px 16px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0px;
	}
`;

export const PageHeader = styled.div`
	margin-left: 30px;
	font-size: 40px;
	color: #5b7a4f;
	font-weight: 700;
	@media screen and (max-width: 768px) {
		font-size: 24px;
		margin-left: 0px;
	}
`;

export const PageCenter = styled.div`
	${PageCenterStyle}
	@media screen and (max-width: 768px) {
		padding: 0 12px;
	}
`;
export const PageCenterWrap = styled.div`
	margin 0 auto;
`;

export const PageInnerStyle = css`
	padding: ${(props) => (props.theme ? "36px 0px 20px 0px" : "36px 0px 47px 0px")};

	@media screen and (max-width: 768px) {
		padding: ${(props) => (props.theme ? "12px 0px 0px 0px" : "12px 0px 16px 0px")};
	}
`;

export const PageInner = styled.div<{ $isResTransaction?: boolean }>`
	${PageCenterStyle}
	margin: 0 auto;
	width: 1000px;
	background-color: transparent;
	@media screen and (max-width: 1282px) {
		max-width: 1000px;
	}
`;

export const PageTitleStyle = css`
	margin-bottom: 32px;

	@media screen and (max-width: 768px) {
		margin-bottom: 16px;
	}
`;

export const PageTitle = styled.div`
	${PageTitleStyle}
`;

export const PageTitleInnerStyle = css`
	font-size: 24px;
	font-weight: 600;
	color: var(--text-color0);

	@media screen and (max-width: 768px) {
		font-size: 20px;
		padding: 0px 16px;
		margin-bottom: 16px;
		text-align: center;
	}
`;

export const PageTitleInner = styled.div`
	${PageTitleInnerStyle}
`;

export const PageBodyStyle = css`
	margin-bottom: 16px;

	@media screen and (max-width: 768px) {
		padding: 0px 16px;
	}
`;

export const PageBody = styled.div`
	${PageInnerStyle}
`;

export const PageBodyInnerStyle = css`
	background: #fff;
	border: 1px solid var(--border-color);
	padding: 32px;
	font-size: 15px;
	line-height: 28px;
	border-radius: 8px;
	color: #000;

	& b {
		font-size: 16px;
		color: var(--text-color0);
	}

	@media screen and (max-width: 768px) {
		padding: 12px;
		font-size: 14px;
		line-height: 24px;

		& b {
			font-size: 15px;
		}
	}
`;

export const PageBodyInner = styled.div`
	${PageBodyInnerStyle}
`;
