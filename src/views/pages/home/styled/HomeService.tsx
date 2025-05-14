import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HomeServiceWrap = styled.div`
	padding-top: 100px;
	background-color: #e0e9dd;
	background-size: cover;
	background-image: url(./static/img/bgsv.jpg);
	@media screen and (max-width: 768px) {
		padding-top: 52px;
	}
`;
export const HomeServiceContentInner = styled.div`
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

export const HomeServiceFlexWrap = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const HomeServiceLeftContentWrapper = styled.div`
	width: 50%;
	@media screen and (max-width: 768px) {
		margin-left: 0;
		width: 100%;
	}
`;

export const HomeServiceLeftContentHeader = styled.div`
	margin-bottom: 100px;
	// font-family: Yeseva-One;
	text-align: left;
	font-size: 48px;
	background: #333438;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	line-height: 60px;
	@media screen and (max-width: 768px) {
		margin-bottom: 44px;
		font-size: 32px;
		line-height: 44px;
	}
`;
export const HomeServiceLeftContentItems2 = styled.div`
	width: 320px;
`;
export const HomeServiceLeftContentItems2Flex = styled.div`
	margin-bottom: 30px;
	display: flex;
	@media screen and (max-width: 768px) {
		margin-top: 24px;
	}
`;
export const HomeServiceLeftContentItem = styled.div`
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
export const HomeServiceLeftContentItemsHeader2 = styled.div`
	margin-bottom: 12px;
	background: #5b7a4f;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 18px;
	// font-family: Yeseva-One;
	@media screen and (max-width: 768px) {
		font-size: 16px;
		line-height: 24px;
	}
`;
export const HomeServiceLeftContentItemsText = styled.div`
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;
	color: #525652;
	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 20px;
	}
`;

export const HomeServiceImg = styled.div`
width: 50%;
display: flex;
@media screen and (max-width: 768px) {
		margin-top: 8px;
    width: 100%;
	}
}
`;
export const HomeServiceLeftContentImg = styled.img`
margin-right: 24px;
width: 72px;
}
`;
export const HomeServiceImgInner = styled.img`
width: 100%;
}
`;
export const SpaceSpan = styled.span`
margin-right: 4px;
}
`;
