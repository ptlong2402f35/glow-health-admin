import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { PageBodyInnerStyle } from "../../controls/components/form/Page";

export const StaticPagePanel = styled.div`
	${PageBodyInnerStyle}
	padding:0;
	border: none;
	width: 782px;
	@media screen and (max-width: 782px) {
		width: 100%;
		padding: 0;
	}
	& .content-right {
		text-align: right;
	}
`;

export const StaticPageBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-bottom: 64px;
`;
export const StaticPageTitle = styled.div`
	width: 782px;
	@media screen and (max-width: 782px) {
		width: 100%;
		margin-top: 12px;
	}
`;
export const PageStaticBackWrap = styled.div`
	margin-top: 24px;
	display: flex;
`;

export const PageStaticBackContain = styled(Link)`
	text-decoration: none;
	display: flex;
	gap: 5px;
`;

export const PageStaticBackBtn = styled.button`
	border: none;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: var(--text-color2v2);
	background-color: transparent;
`;
export const PageStaticBackIcon = styled(ArrowBackIosIcon)`
	font-size: 12px !important;
	margin-top: 5px;
	color: var(--text-color2v2);
`;

export const StaticPageTitleInner = styled.div`
	font-weight: 700;
	font-size: 32px;
	line-height: 42px;
	color: var(--text-color1v2);
	margin-bottom: 24px;
`;
