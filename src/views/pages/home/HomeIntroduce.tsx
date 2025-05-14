import React from "react";
import {
	HomeIntroduceContentHeader,
	HomeIntroduceContentHeader2,
	HomeIntroduceContentInner,
	HomeIntroduceContentItem2,
	HomeIntroduceContentItem2Img,
	HomeIntroduceContentItem2ImgWrap,
	HomeIntroduceIntroduceImg,
	HomeIntroduceIntroduceImgInner,
	HomeIntroduceIntroduceImgRes,
	HomeIntroduceIntroduceImgWeb,
	HomeIntroduceItemContent,
	HomeIntroduceItemText,
	HomeIntroduceLeftContentWrapper,
	HomeIntroducePartnerGlow,
	HomeIntroducePartnerGlowImg,
	HomeIntroducePartnerGlowWrapper,
	HomeIntroduceSectionWraper,
	HomeIntroduceWrapper,
	HomeIntroduceWrapper2,
} from "./styled/StyledHomeIntroduce";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";

export default function HomeIntroduce() {
	const { lang } = useLanguage();
	return (
		<HomeIntroduceSectionWraper>
			<HomeIntroduceContentInner>
				<HomeIntroduceWrapper>
					<HomeIntroduceLeftContentWrapper>
						<HomeIntroduceContentHeader>
							{TranslateLabels[lang]?.HOME_INTRODUCE_TITLE_1}
						</HomeIntroduceContentHeader>
						<HomeIntroduceContentItem2>
							<HomeIntroduceContentItem2ImgWrap>
								<HomeIntroduceContentItem2Img src="./static/img/Vector.png" />
							</HomeIntroduceContentItem2ImgWrap>
							<HomeIntroduceItemContent>
								<HomeIntroduceItemText>
									{TranslateLabels[lang]?.HOME_INTRODUCE_TITLE_1_CONTENT_1}
								</HomeIntroduceItemText>
							</HomeIntroduceItemContent>
						</HomeIntroduceContentItem2>
						<HomeIntroduceContentItem2>
							<HomeIntroduceContentItem2ImgWrap>
								<HomeIntroduceContentItem2Img src="./static/img/Vector.png" />
							</HomeIntroduceContentItem2ImgWrap>
							<HomeIntroduceItemContent>
								<HomeIntroduceItemText>
									{TranslateLabels[lang]?.HOME_INTRODUCE_TITLE_1_CONTENT_2}
								</HomeIntroduceItemText>
							</HomeIntroduceItemContent>
						</HomeIntroduceContentItem2>
						<HomeIntroduceContentItem2>
							<HomeIntroduceContentItem2ImgWrap>
								<HomeIntroduceContentItem2Img src="./static/img/Vector.png" />
							</HomeIntroduceContentItem2ImgWrap>
							<HomeIntroduceItemContent>
								<HomeIntroduceItemText>
									{TranslateLabels[lang]?.HOME_INTRODUCE_TITLE_1_CONTENT_3}
								</HomeIntroduceItemText>
							</HomeIntroduceItemContent>
						</HomeIntroduceContentItem2>
					</HomeIntroduceLeftContentWrapper>
					<HomeIntroduceIntroduceImg>
						<HomeIntroduceIntroduceImgInner src="./static/img/BannerIntroduce.png" />
					</HomeIntroduceIntroduceImg>
				</HomeIntroduceWrapper>
				<HomeIntroduceWrapper2>
					<HomeIntroduceIntroduceImgWeb>
						<HomeIntroduceIntroduceImgInner src="./static/img/BannerIntroduce2.png" />
					</HomeIntroduceIntroduceImgWeb>
					<HomeIntroduceLeftContentWrapper>
						<HomeIntroduceContentHeader2>
							{TranslateLabels[lang]?.HOME_INTRODUCE_TITLE_2}
						</HomeIntroduceContentHeader2>
						<HomeIntroduceContentItem2>
							<HomeIntroduceContentItem2ImgWrap>
								<HomeIntroduceContentItem2Img src="./static/img/Vector.png" />
							</HomeIntroduceContentItem2ImgWrap>
							<HomeIntroduceItemContent>
								<HomeIntroduceItemText>
									{TranslateLabels[lang]?.HOME_INTRODUCE_TITLE_2_CONTENT_1}
								</HomeIntroduceItemText>
							</HomeIntroduceItemContent>
						</HomeIntroduceContentItem2>
						<HomeIntroduceContentItem2>
							<HomeIntroduceContentItem2ImgWrap>
								<HomeIntroduceContentItem2Img src="./static/img/Vector.png" />
							</HomeIntroduceContentItem2ImgWrap>
							<HomeIntroduceItemContent>
								<HomeIntroduceItemText>
									{TranslateLabels[lang]?.HOME_INTRODUCE_TITLE_2_CONTENT_2}
								</HomeIntroduceItemText>
							</HomeIntroduceItemContent>
						</HomeIntroduceContentItem2>
						<HomeIntroduceContentItem2>
							<HomeIntroduceContentItem2ImgWrap>
								<HomeIntroduceContentItem2Img src="./static/img/Vector.png" />
							</HomeIntroduceContentItem2ImgWrap>
							<HomeIntroduceItemContent>
								<HomeIntroduceItemText>
									{TranslateLabels[lang]?.HOME_INTRODUCE_TITLE_2_CONTENT_3}
								</HomeIntroduceItemText>
							</HomeIntroduceItemContent>
						</HomeIntroduceContentItem2>
						<HomeIntroduceIntroduceImgRes>
							<HomeIntroduceIntroduceImgInner src="./static/img/BannerIntroduce2.png" />
						</HomeIntroduceIntroduceImgRes>
						<HomeIntroducePartnerGlowWrapper to="/partner">
							<HomeIntroducePartnerGlow>
								{TranslateLabels[lang]?.HOME_INTRODUCE_PARTNER}
								<HomeIntroducePartnerGlowImg src="./static/img/Arrow.png" />
							</HomeIntroducePartnerGlow>
						</HomeIntroducePartnerGlowWrapper>
					</HomeIntroduceLeftContentWrapper>
				</HomeIntroduceWrapper2>
			</HomeIntroduceContentInner>
		</HomeIntroduceSectionWraper>
	);
}
