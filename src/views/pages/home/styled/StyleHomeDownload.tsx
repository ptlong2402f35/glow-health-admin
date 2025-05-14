import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HomeDownloadWrap = styled.div`
	padding-top: 140px;
	width: 100%;
	background-color: #faf9f7;
	@media screen and (max-width: 768px) {
		padding-top: 50px;
	}
`;
export const HomeContentInner = styled.div`
	position: relative;
	margin: auto;
	max-width: 1440px;
	width: 85%;
	@media screen and (max-width: 768px) {
		margin: 0;
		width: 100%;
		padding: 0 16px;
	}
`;
export const HomeDownloadSection = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const HomeLeftContentWrapper = styled.div`
	width: 50%;
	max-width: 450px;
	@media screen and (max-width: 768px) {
		margin-left: 0;
		width: 100%;
	}
`;

export const HomeLeftContentHeader = styled.div`
	text-align: left;
	font-size: 48px;
	background: #333438;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	line-height: 60px;
	margin-bottom: 16px;
	// font-family: Yeseva-One;
	@media screen and (max-width: 768px) {
		margin-bottom: 16px;
		font-size: 32px;
		line-height: 44px;
	}
`;

export const HomeLeftContentItemContent = styled.div`
	max-width: 380px;
	background: #525652;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 16px;
	line-height: 20px;
	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 20px;
		width: 100%;
	}
`;

export const HomeLeftContentSectionItemRight = styled.div`
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const HomeLeftContentDownloadLink = styled.div`
	display: flex;
	margin-top: 200px;
	@media screen and (max-width: 768px) {
		margin-top: 44px;
		margin-bottom: 40px;
	}
`;
export const HomeLeftContentDownloadItem = styled.div`
	border-radius: 8px;
	padding: 4px;
	background-color: #bfc7b2;
	width: 160px;
	height: 220px;
	&:first-child {
		margin-right: 20px;
	}
	@media screen and (max-width: 768px) {
		height: auto;
		width: 50%;
		&:first-child {
			margin-right: 12px;
		}
	}
`;
export const HomeLeftContentDownloadQr = styled.div`
	margin-bottom: 4px;
`;
export const HomeLeftContentDownloadQrImg = styled.img`
	object-fit: fill;
	height: 100%;
	width: 100%;
`;
export const HomeLeftContentDownloadBtn = styled.div`
	width: 100%;
`;
export const HomeLeftContentDownloadBtnImgWr = styled.a``;
export const HomeLeftContentDownloadBtnImg = styled.img`
	object-fit: fill;
	height: 100%;
	width: 100%;
	opacity: 1;
	transition: opacity 0.2s;
	cursor: pointer;

	&:hover {
		opacity: 0.3;
	}
`;

export const HomeDownloadImg = styled.div`
	max-width: 689px;
	width: 50%;
	max-height: 856px;
	display: flex;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const HomeDownloadImgInner = styled.img`
	width: 100%;
`;
