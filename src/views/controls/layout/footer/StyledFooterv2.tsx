import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlowLink } from "../../../pages/home/GlowLink";

export const FooterWrapper = styled.div`
	width: 100%;
	height: auto;
	background-color: #5b7a4f;

	// @media only screen and (max-width: 768px) {
	// 	padding: 32px 0px 24px 0px;
	// }
`;
export const FooterWrapperv2 = styled.div`
	width: 100%;
	height: auto;
	// background-color: #fff;
	background-image: url(./static/img/bgft.png);
	background-size: cover;
	background-repeat: no-repeat;
	background: #5d784f;

	// @media only screen and (max-width: 768px) {
	// 	padding: 32px 0px 24px 0px;
	// }
`;
export const FooterContentInner = styled.div`
position: relative;
    margin: auto;
    max-width: 1440px;
    width: 85%;
     @media screen and (max-width: 768px) {
		margin: 0;
    width: 100%;
    padding: 0 16px;
}
}
`;
export const FooterContentInnerv2 = styled.div`
position: relative;
    margin: auto;
    max-width: 1440px;
    width: 85%;
     @media screen and (max-width: 1000px) {
		margin: 0;
    width: 100%;
    padding: 32px 16px;
}
}
`;

export const FooterContent = styled.div`
padding-top: 60px;
    display: flex;
    justify-content: space-between;
    // padding-bottom: 20px;
    @media screen and (max-width: 768px) {
		flex-direction: column;
	}
	}
`;

export const FooterContentv3 = styled(FooterContent)`
padding-bottom:0;
    @media screen and (max-width: 1000px) {
		flex-direction: column;
		padding-top: 0px;
	}
	}
`;
export const FooterDescription = styled.div`
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const FooterDescriptionv2 = styled.div`
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	justify-content: flex-start;

	@media screen and (max-width: 1000px) {
		width: 100%;
	}
`;
export const FooterDescriptionMainHeader = styled.div`
	margin-bottom: 100px;
	@media screen and (max-width: 768px) {
		margin-bottom: 45px;
	}
`;
export const FooterDescriptionMainHeaderv2 = styled.div`
	@media screen and (max-width: 1000px) {
		margin-bottom: 20px;
	}
`;
export const FooterDescriptionMainHeaderA = styled.a``;
export const FooterDescriptionMainHeaderImg = styled.img`
	width: 81px;
`;
export const FooterDescriptionHeader = styled.div`
	// font-family: Yeseva-One;
	width: 300px;
	text-align: start;
	margin-bottom: 16px;
	font-size: 24px;
	font-weight: 700;
	line-height: 28px;
	background: linear-gradient(113.57deg, hsla(0, 0%, 100%, 0.9) 4.78%, #c8d6c2 75.37%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	color: transparent;
`;

export const FooterDescriptionHeaderv2 = styled.h2`
	// font-family: Yeseva-One;
	max-width: 450px;
	text-align: start;
	margin-top: 16px;
	font-size: 20px;
	line-height: 24px;
	// color: #63794f;
	font-weight: 500;
	color: #fff;
`;

export const FooterIcons = styled.div`
	display: flex;
`;
export const FooterIconsv2 = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 1000px) {
		margin-bottom: 16px;
		flex-direction: row;
	}
`;
export const FooterIconItemA = styled.a`
	@media screen and (max-width: 1000px) {
		margin: 0 2px;
	}
`;

export const FooterIconItem = styled.div`
	padding: 8px;
`;
export const FooterIconItemv2 = styled.div`
	padding: 2px;
`;
export const FooterIconItemImg = styled.img`
	width: 24px;
	opacity: 1;
	transition: opacity 0.2s;
	filter: brightness(0) invert(1);
	-webkit-filter: brightness(0) invert(1);

	&:hover {
		opacity: 0.3;
	}
`;

export const FooterQuickLinkGroup = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 1000px) {
		width: 100%;
		margin-bottom: 16px;
	}
`;
export const FooterQuickLink = styled.div`
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;
export const FooterQuickLinkv2 = styled.div`
	@media screen and (max-width: 1000px) {
		// width: 50%;
	}
`;
export const FooterQuickLinkv3 = styled.div`
	@media screen and (max-width: 768px) {
		margin-top: 20px;
		width: 50%;
	}
`;
export const FooterQuickLinkHeader = styled.div`
	opacity: 0.34;
	color: #eaeae8;
	font-weight: 500;
	font-size: 16px;
	width: 200px;
	padding: 8px;
	@media screen and (max-width: 768px) {
		width: 150px;
	}
`;
export const FooterQuickLinkHeaderv2 = styled.h3`
	// opacity: 0.34;
	color: #a6b592;
	font-weight: 500;
	font-size: 16px;
	width: 200px;
	padding: 8px;
	@media screen and (max-width: 1000px) {
		width: 150px;
		padding: 8px 0;
	}
`;
export const FooterQuickLinkItemA = styled(GlowLink)`
	text-decoration: none;
	opacity: 1;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.3;
	}
`;
export const FooterQuickLinkItem = styled.div`
	color: #eaeae8;
	font-weight: 500;
	font-size: 16px;
	width: 200px;
	padding: 8px;
	@media screen and (max-width: 768px) {
		width: 150px;
	}
`;
export const FooterQuickLinkItemv3 = styled.div`
	// color: #080d08;
	color: #dfe4dc;
	font-weight: 500;
	font-size: 16px;
	width: 200px;
	padding: 8px;
	@media screen and (max-width: 768px) {
		width: 150px;
		padding: 8px 0;
	}
`;
export const FooterQuickLinkItemv4 = styled(FooterQuickLinkItemv3)`
	@media screen and (max-width: 1000px) {
		width: 100%;
		font-size: 14px;
	}
`;
export const Footerv3RegisterforBCT = styled.div`
	width: 30%;
	display: flex;
	justify-content: flex-end;
	@media screen and (max-width: 768px) {
		// width: 150px;
	}
`;

export const Footerv3RegisterforBCTv2 = styled.div`
	// width: 30%;
	display: flex;
	margin-top: 26px;
	// justify-content: flex-end;
	@media screen and (max-width: 768px) {
		// width: 150px;
		margin-top: 0;
	}
`;

export const Footerv3RegisterforBCTImg = styled.img`
	width: 125px;
`;
export const Footerv3RegisterforBCTImgv2 = styled.img`
	width: 150px;
	@media screen and (max-width: 768px) {
		width: 180px;
		margin-top: 20px;
	}
`;
export const FooterContentInnerv3 = styled.div`
	width: 70%;
	display: flex;
`;
export const FooterQuickLinkItemv2 = styled.div`
	color: #eaeae8;
	font-weight: 500;
	font-size: 16px;
	// width: 200px;
	padding: 8px;
	@media screen and (max-width: 768px) {
		width: 150px;
	}
`;
export const FooterContentv2 = styled.div`
height:80px;
padding-top: 20px;
    display: flex;
    justify-content: space-between;
	padding-bottom: 20px;
    @media screen and (max-width: 768px) {
		flex-direction: column;
	}
	}
`;

export const FooterContentSEO = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	color: #eaeae8;
	padding-bottom: 40px;
`;
export const FooterContentSEORes = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	color: #eaeae8;
	padding-top: 20px;
`;
