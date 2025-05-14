import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styled from "styled-components";

export const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const HomeIntrolBannerWrap = styled.div`
	padding-top: 50px;
	position: relative;
	color: #fff;
	width: 100%;
	background-size: cover;
	background-image: url(./static/img/backgroundBanner.jpg);
	@media screen and (max-width: 768px) {
		padding-top: 15px;
	}
`;

export const HomeIntrolBannerInner = styled.div`
	width: 85%;
	height: inherit;
	position: relative;
	margin: auto;
	max-width: 1440px;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		margin: 0;
		width: 100%;
		padding: 16px;
		height: inherit;
	}
`;

export const HomeIntrolBannerRight = styled.div`
	max-width: 550px;
	padding-left: 30px;
	display: flex;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const HomeIntrolBannerLeft = styled.div`
	width: 50%;
	@media screen and (max-width: 768px) {
		margin-left: 0;
		width: 100%;
	}
`;

export const HomeIntrolBannerRightImg = styled.img`
	width: 100%;
`;
export const HomeIntrolBannerLeftText1 = styled.div`
	max-width: 580px;
	// font-family: Yeseva-One;
	background: linear-gradient(113.57deg, hsla(0, 0%, 100%, 0.9) 4.78%, #c8d6c2 75.37%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 400;
	font-size: 50px;
	line-height: 80px;
	@media screen and (max-width: 768px) {
		font-size: 40px;
		line-height: 48px;
		width: 100%;
	}
`;

export const HomeIntrolBannerLeftText2 = styled.div`
	margin-top: 10px;
	width: 450px;
	font-size: 15px;
	line-height: 22px;
	background: hsla(0, 0%, 100%, 0.68);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 22px;
		width: 100%;
		width: 100%;
	}
`;
export const HomeIntrolBannerLeftButton1 = styled.div`
	margin-top: 24px;
	display: flex;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
`;
export const HomeIntrolBannerLeftButtonDownload = styled.a`
	cursor: pointer;
	color: #536dfe;
	text-decoration: none;
	opacity: 1;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.3;
	}
`;
export const HomeIntrolBannerLeftButtonDownloadInner = styled.div`
	color: #5b7a4f;
	min-width: 190px;
	height: 48px;
	font-size: 16px;
	font-weight: 500;
	border-radius: 24px;
	padding: 12px 24px;
	background-color: #fff;
	@media screen and (max-width: 768px) {
		margin-bottom: 24px;
		width: 190px;
	}
`;
export const HomeIntrolBannerLeftButtonDownloadImage = styled.img`
border-style: none;
vertical-align: middle;
margin-left:4px;
}
`;
export const HomeIntrolBannerLeftButtonPartnerWrap = styled.div`
margin-left: 44px;
margin-top: auto;
margin-bottom: auto;
background: #eaebea;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
@media screen and (max-width: 768px) {
    margin: 0;
width: 100%;
}
}
`;
export const HomeIntrolBannerLeftButtonPartner = styled(Link)`
cursor: pointer;
color: #eaebea;
text-decoration: none;
opacity: 1; 
transition: opacity 0.2s;
font-size:16px;

&:hover {
  opacity: 0;
}
}
`;
export const HomeIntrolBannerLeftIntroDownloadButton = styled.div`
margin-right: 18px;
height: 55px;
}
`;
export const HomeIntrolBannerLeftIntroDownloadButtonv2 = styled.div`
margin-right: 18px;
height: 50px;
}
`;
export const HomeIntrolBannerLeftIntroDownloadButton2 = styled.div`
height: 55px;
}
`;
export const HomeIntrolBannerLeftIntroDownloadButton2v2 = styled.div`
height: 50px;
}
`;
export const HomeIntrolBannerLeftIntroDownloadA = styled.a`
cursor: pointer;
color: #536dfe;
}
`;
export const HomeIntrolBannerLeftIntroDownloadImg = styled.img`
height: 100%;
opacity: 1; 
transition: opacity 0.2s;
width:170px;

&:hover {
  opacity: 0.3;
}
}
`;
export const HomeIntrolBannerLeftIntroDownloadImgv2 = styled.img`
height: 100%;
opacity: 1; 
transition: opacity 0.2s;
width:150px;

&:hover {
  opacity: 0.3;
}
}
`;
export const HomeIntrolBannerLeftIntroDownload = styled.div`
padding-top: 150px;
    display: flex;
    padding-bottom: 48px;
    @media screen and (max-width: 768px) {
       display:none;
width: 100%;
}
}
`;
export const HomeIntrolBannerRightRes = styled.div`
display:none;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-top: 0;
        margin-bottom: 0;
        display:block;
}
}
`;

export const AutoPlaySwipeableViewsRes = styled(AutoPlaySwipeableViews)`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;

export const AutoPlaySwipeableViewsWeb = styled(AutoPlaySwipeableViews)`
	display: block;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
