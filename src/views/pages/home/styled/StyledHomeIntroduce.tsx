import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeIntroduceSectionWraper = styled.div`
	padding-bottom: 110px;
	background-color: #e0e9dd;
	width: 100%;
	padding-top: 150px;
	@media screen and (max-width: 768px) {
		padding-top: 0;
		padding-bottom: 20px;
	}
`;

export const HomeIntroduceContentInner = styled.div`
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
export const HomeIntroduceWrapper = styled.div`
display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
		    flex-direction: column;
    margin-bottom: 80px;
	}
}
`;
export const HomeIntroduceWrapper2 = styled.div`
display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
}
`;

export const HomeIntroduceLeftContentWrapper = styled.div`
width: 50%;
@media screen and (max-width: 768px) {
		    margin-left: 0;
    width: 100%;
	}
}
`;
export const HomeIntroduceContentHeader = styled.div`
margin-bottom: 100px;
// font-family: Yeseva-One;
text-align: left;
font-size: 48px;
background: #333438;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
line-height: 60px;
color: rgb(8, 13, 8);
    font-weight: 400;
}
@media screen and (max-width: 768px) {
		padding-top: 50px;
		font-size: 32px;
    line-height: 44px;
	margin-bottom: 44px;
	}
`;
export const HomeIntroduceContentItem2 = styled.div`
	max-width: 450px;
	margin-bottom: 30px;
	display: flex;
`;
export const HomeIntroduceContentItem2ImgWrap = styled.div``;

export const HomeIntroduceContentItem2Img = styled.img`
	width: 17px;
	margin-right: 24px;
`;

export const HomeIntroduceItemContent = styled.div`
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

export const HomeIntroduceItemText = styled.div`
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;
	color: #525652;
	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 20px;
	}
`;

export const HomeIntroduceIntroduceImg = styled.div`
width: 45%;
@media screen and (max-width: 768px) {
		    width: 100%;
	}
}
`;

export const HomeIntroduceIntroduceImgWeb = styled(HomeIntroduceIntroduceImg)`

@media screen and (max-width: 768px) {
		    display:none;
	}
}
`;
export const HomeIntroduceIntroduceImgRes = styled(HomeIntroduceIntroduceImg)`
display:none;
@media screen and (max-width: 768px) {
            display: block;
            padding-top: 20px;
            margin-bottom: 90px;
	}
}
`;
export const HomeIntroduceIntroduceImgInner = styled.img`
width: 100%;
}
`;

export const HomeIntroduceContentHeader2 = styled(HomeIntroduceContentHeader)`
	margin-top: 160px;
	@media screen and (max-width: 768px) {
		margin-top: 0;
	}
`;

export const HomeIntroducePartnerGlowWrapper = styled(Link)`
	text-decoration: none;
	opacity: 1;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.3;
	}
`;
export const HomeIntroducePartnerGlow = styled.div`
background-image: url(data:image/png;base64,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);
    padding: 40px;
    background-repeat: no-repeat;
    color: rgb(91, 122, 79);
}
}
`;
export const HomeIntroducePartnerGlowImg = styled.img`
	margin-left: 8px;
`;
