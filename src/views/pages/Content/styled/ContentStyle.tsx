import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { GlowLink } from "../../home/GlowLink";

export const ContentFilterWrap = styled.div``;
export const ContentInnerSeeMore = styled.div`
	display: flex;
	font-size: 20px;
	line-height: 40px;
	color: #5b7a4f;
	justify-content: center;
	cursor: pointer;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0 18px;
	}
`;

export const ContentInnerFilter = styled.div<{ isExpanded?: boolean }>`
	position: relative;
	margin: auto;
	font-family: SF-Pro-Display, sans-serif;
	font-size: 14px;
	text-align: justify;
	overflow-wrap: break-word;
	line-height: 22px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	margin-bottom: 40px;

	& img {
		width: 100%;
	}
	& ul > li {
		margin-left: 40px;
	}
	& h2 {
	line-height: 40px; 
	font-weight: 400;
	}

	${(props) =>
		!props.isExpanded &&
		`
    max-height: calc(22px * 7);
    overflow: hidden;
    mask-image: linear-gradient(to bottom, 
      rgba(0,0,0,1) 20%, 
      rgba(0,0,0,0.85) 35%, 
      rgba(0,0,0,0.6) 50%, 
      rgba(0,0,0,0.3) 65%, 
      rgba(0,0,0,0) 85%);
  `}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0 18px;
		font-weight: 400 !important;
		font-size: 15px !important;
		line-height: 24px !important;
		font-size: 16px;
		& img {
			margin: 12px 0 18px;
			width: 100%;
		}
		& > ul > li {
			margin-left: 16px;
		}
	}
`;


export const ContentRegulation = styled(ContentInnerFilter)`
	& img {
		width: 100%;
		height: 100%;
		max-width: 400px;
		margin: 0 auto;
	}
	& table {
		width: 100%;
	}
	& p {
		margin-bottom: 8px;
	}
	& h2 {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 10px;
		margin-top: 26px;
		@media screen and (max-width: 768px) {
			font-size: 18px;
		}
	}
	& h3 {
		margin-top: 20px;
		margin-bottom: 16px;
		font-size: 20px;
		font-weight: 700;
		@media screen and (max-width: 768px) {
			font-size: 18px;
		}
	}
	& td p {
		width: 100%;
		display:flex;
		flex-direction: column;
	}
	& td {
		padding: 6px;
	}
`;
