import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const AboutContentInner = styled.div`
	width: 85%;
	position: relative;
	margin: auto;
	max-width: 1440px;
	@media screen and (max-width: 768px) {
		margin: 0;
		width: 100%;
		padding: 0 16px;
	}
`;

export const AboutContentHeader = styled.div`
	padding-top: 100px;
	margin-bottom: 110px;
	text-align: center;
	width: 860px;
	margin-right: auto;
	margin-left: auto;
	@media screen and (max-width: 768px) {
		margin-top: 0;
		padding-top: 60px;
		margin-bottom: 0;
		width: 100%;
	}
`;
export const AboutContentHeader2 = styled.div`
	padding-top: 160px;
	margin-bottom: 110px;
	text-align: center;
	width: 860px;
	margin-right: auto;
	margin-left: auto;
	@media screen and (max-width: 768px) {
		margin-top: 0;
		width: 100%;
		padding-top: 64px;
		margin-bottom: 44px;
	}
`;

export const AboutSubHeader = styled.h1`
	font-size: 20px;
	font-weight: 500;
	color: #5b7a4f;
	margin-bottom: 12px;
`;
export const AboutMainHeader = styled.h2`
	margin-bottom: 110px;
	// font-family: Yeseva-One;
	font-size: 60px;
	line-height: 80px;
	color: #5b7a4f;
	font-weight: 500;
	@media screen and (max-width: 768px) {
		font-size: 32px;
		line-height: 44px;
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 0;
	}
`;
export const AboutMainHeader2 = styled.h2`
	margin-bottom: 110px;
	// font-family: Yeseva-One;
	color: #5b7a4f;
	font-size: 36px;
	line-height: 44px;
	@media screen and (max-width: 768px) {
		font-size: 32px;
		line-height: 44px;
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 0;
	}
`;
export const AboutContent1 = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-top: 44px;
	}
`;

export const AboutContent1ImgWrap = styled.div`
	width: 55%;
	@media screen and (max-width: 768px) {
		margin-bottom: 24px;
		width: 100%;
	}
`;

export const AboutContent1Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

export const AboutTextContent = styled.div`
	position: relative;
	width: 40%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const AboutTextHeader = styled.div`
	// font-family: Yeseva-One;
	margin-bottom: 36px;
	color: #5b7a4f;
	font-size: 36px;
	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 28px;
		margin-top: 24px;
		margin-bottom: 12px;
	}
`;
export const AboutTextBody = styled.div`
	font-size: 18px;
	text-align: justify;
	font-weight: 400;
	line-height: 28px;
	color: #080d08;
	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 22px;
	}
`;

export const AboutTextContentImgWrap = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const AboutTextContentImg = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
`;
export const AboutContent2 = styled.div`
	padding-bottom: 120px;
	@media screen and (max-width: 768px) {
		padding-bottom: 64px;
	}
`;
export const AboutMainContent = styled.div`
	margin-bottom: 110px;
	// font-family: Yeseva-One;
	color: #5b7a4f;
	font-size: 36px;
	line-height: 44px;
`;
export const AboutContentItem1 = styled.div`
	margin-bottom: 150px;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		margin-bottom: 64px;
	}
`;

export const AboutContentItem2 = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const AboutSubTitle = styled.h3`
	// font-family: Yeseva-One;
	font-weight: 700;
	margin-bottom: 12px;
	margin-top: 12px;
	font-size: 18px;
	@media screen and (max-width: 768px) {
		margin-bottom: 8px;
		margin-top: 16px;
		font-size: 16px;
		line-height: 24px;
	}
`;

export const AboutUl = styled.ul`
	padding-left: 24px;
`;
