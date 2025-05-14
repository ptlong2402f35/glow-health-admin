import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const PartnerContentWrapper = styled.div`
	// padding-top: 60px;
`;

export const PartnerContentInner = styled.div`
	position: relative;
	margin: auto;
	max-width: 1440px;
	width: 85%;
	@media screen and (max-width: 768px) {
		position: relative;
		max-width: 1440px;
		padding: 0 16px;
		margin: 0;
		width: 100%;
	}
`;

export const PartnerSection1 = styled.div`
	padding-top: 120px;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding-top: 40px;
	}
`;
export const PartnerSection1LeftWrapper = styled.div`
	width: 40%;
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 24px;
	}
`;

export const PartnerSection1SubTitle = styled.h1`
	margin-bottom: 8px;
	color: #5b7a4f;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
`;
export const PartnerSection1Title = styled.h2`
	margin-top: 12px;
	color: #5b7a4f;
	font-size: 28px;
	line-height: 36px;
	font-weight: 600;
	// font-family: Yeseva-One;
`;
export const PartnerSection1RightWrapper = styled.div`
	width: 60%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const PartnerSection1RightText = styled.div`
	text-align: justify;
	font-size: 20px;
	font-weight: 400;
	line-height: 27px;
	color: #080d08;
	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 22px;
	}
`;

export const PartnerSection1RightButtonA = styled.a`
	text-align: justify;
	font-size: 20px;
	font-weight: 400;
	line-height: 27px;
	color: #080d08;
`;
export const PartnerSection1RightButton = styled.div`
	margin-top: 40px;
	color: #fcfdfc;
	text-align: center;
	width: 190px;
	height: 48px;
	font-size: 16px;
	font-weight: 500;
	border-radius: 24px;
	padding: 12px 24px;
	background-color: #5b7a4f;
	opacity: 1;
	transition: opacity 0.2s;
	cursor: pointer;

	&:hover {
		opacity: 0.3;
	}
`;
export const PartnerSection1RightButtonImg = styled.img``;

export const PartnerSection2 = styled.div`
	max-width: 1440px;
	margin: auto;
	width: 85%;
	padding-top: 120px;
	@media screen and (max-width: 768px) {
		margin: 0;
		width: 100%;
		padding-top: 60px;
	}
`;

export const PartnerSection2ImgWrap = styled.div``;

export const PartnerSection2Img = styled.img`
	width: 100%;
`;

export const PartnerSection3 = styled.div`
	padding-top: 80px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 120px;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		padding-bottom: 0;
	}
`;
export const PartnerSection3LeftWrap = styled.div`
	width: 35%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const PartnerSection3LeftImgWrap = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const PartnerSection3LeftImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const PartnerSection3RightWrap = styled.div`
	width: 60%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const PartnerSection3RightTitle = styled.h2`
	// font-family: Yeseva-One;
	font-size: 48px;
	font-weight: 400;
	line-height: 60px;
	color: #333438;
	margin-bottom: 120px;
	@media screen and (max-width: 768px) {
		line-height: 44px;
		font-size: 32px;
		margin-bottom: 40px;
	}
`;
export const PartnerSection3RightItems = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;
export const PartnerSection3RightItem = styled.div`
	display: flex;
	padding: 24px 24px;
	border-bottom: 1px solid #e6e7e6;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: flex;
		padding: 24px 24px;
		border-bottom: 1px solid #e6e7e6;
	}
`;
export const PartnerSection3RightItemLeft = styled.div`
	width: 38px;
	margin-right: 24px;
	height: 74px;
	color: #b5b6b5;
	// font-family: Yeseva-One;
	font-weight: 400;
	font-size: 64px;
	line-height: 74px;
`;
export const PartnerSection3RightItemRight = styled.div`
	width: 80%;
`;
export const PartnerSection3RightItemTitle = styled.h3`
margin-bottom: 12px;
color: #333438;
// font-family: Yeseva-One;
font-weight: 400;
font-size: 24px;
@media screen and (max-width: 768px) {
		font-size: 20px;
	}
}
`;
export const PartnerSection3RightItemBody = styled.div`
	width: 70%;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #525652;
	@media screen and (max-width: 768px) {
		width: 100%;
		font-size: 15px;
	}
`;

export const PartnerSection4MainWraper = styled.div`
	background-color: #e0e9dd;
	padding-top: 120px;
`;
export const PartnerSection4 = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const PartnerSection4LeftWrapper = styled.div`
	width: 50%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const PartnerSection4LeftTitle = styled.h2`
	margin-bottom: 40px;
	// font-family: Yeseva-One;
	font-weight: 400;
	line-height: 60px;
	font-size: 48px;
	color: #333438;
	@media screen and (max-width: 768px) {
		font-size: 32px;
		line-height: 44px;
	}
`;

export const PartnerSection4ItemRight = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const PartnerSection4RightWrapper = styled.div`
	width: 50%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const PartnerSection4DownloadImgWrapper = styled.div`
	display: flex;
	width: 100%;
`;

export const PartnerSection4DownloadImg = styled.img`
	object-fit: contain;
	width: 100%;
`;

export const PartnerSection4LeftWrapperItem = styled.div`
	border-bottom: 1px solid #b9ccb0;
	width: 70%;
	display: flex;
	padding: 24px 24px;
	&:last-child {
		border-bottom: 0px solid #b9ccb0;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const PartnerSection4LeftContentDownloadLink = styled.div`
	display: flex;
`;
export const PartnerSection4LeftTitleRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		margin-bottom: 8px;
		color: #5b7a4f;
		font-size: 16px;
		font-weight: 500;
		line-height: 24px;
		display: flex;
	}
`;
