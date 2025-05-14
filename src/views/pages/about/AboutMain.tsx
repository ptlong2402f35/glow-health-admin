import React from "react";
import {
	AboutContent1,
	AboutContent1Img,
	AboutContent1ImgWrap,
	AboutContent2,
	AboutContentHeader,
	AboutContentHeader2,
	AboutContentInner,
	AboutContentItem1,
	AboutContentItem2,
	AboutMainHeader,
	AboutMainHeader2,
	AboutSubHeader,
	AboutSubTitle,
	AboutTextBody,
	AboutTextContent,
	AboutTextContentImg,
	AboutTextContentImgWrap,
	AboutTextHeader,
	AboutUl,
} from "./styled/StyledAbout";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";

export default function AboutMain() {
	const { lang } = useLanguage();
	return (
		<AboutContentInner>
			<AboutContentHeader>
				<AboutSubHeader>{TranslateLabels[lang]?.ABOUT_TITLE_TOP}</AboutSubHeader>
				<AboutMainHeader>{TranslateLabels[lang]?.ABOUT_TITLE_BOTTOM}</AboutMainHeader>
			</AboutContentHeader>

			<AboutContent1>
				<AboutContent1ImgWrap>
					<AboutContent1Img
						src="./static/img/aboutimg1.jpg"
						alt={TranslateLabels[lang]?.ALT_IMG_ABOUT_1}
					/>
				</AboutContent1ImgWrap>
				<AboutTextContent>
					<AboutTextHeader>{TranslateLabels[lang]?.ABOUT_TITLE_1}</AboutTextHeader>
					<AboutTextBody>
						{TranslateLabels[lang]?.ABOUT_CONTENT_1}
						<br />
						<br />
						{TranslateLabels[lang]?.ABOUT_CONTENT_2}
					</AboutTextBody>
					<AboutTextContentImgWrap>
						<AboutTextContentImg src="./static/img/Elip.png" alt="Biểu tượng elip" />
					</AboutTextContentImgWrap>
				</AboutTextContent>
			</AboutContent1>
			<AboutContent2>
				<AboutContentHeader2>
					<AboutMainHeader2>
						{TranslateLabels[lang]?.ABOUT_TITLE_2}
						<br />
						{TranslateLabels[lang]?.ABOUT_TITLE_2_BOTTOM}
					</AboutMainHeader2>
				</AboutContentHeader2>
				<AboutContentItem1>
					<AboutTextContent>
						<AboutTextBody>
							{TranslateLabels[lang]?.ABOUT_CONTENT_3}
							<br />
							<br />
							{TranslateLabels[lang]?.ABOUT_CONTENT_4}
							<br />
							<br />
							{TranslateLabels[lang]?.ABOUT_CONTENT_5}
							<br />
							<br />
							<AboutSubTitle>{TranslateLabels[lang]?.ABOUT_CONTENT_6}</AboutSubTitle>
						</AboutTextBody>
					</AboutTextContent>
					<AboutContent1ImgWrap>
						<AboutContent1Img
							src="./static/img/aboutimg2.png"
							alt={TranslateLabels[lang]?.ALT_IMG_ABOUT_2}
						/>
					</AboutContent1ImgWrap>
				</AboutContentItem1>
				<AboutContentItem2>
					<AboutContent1ImgWrap>
						<AboutContent1Img
							src="./static/img/about3.bf5441e0.png"
							alt={TranslateLabels[lang]?.ALT_IMG_ABOUT_3}
						/>
					</AboutContent1ImgWrap>
					<AboutTextContent>
						<AboutTextBody>
							<AboutSubTitle>{TranslateLabels[lang]?.ABOUT_CONTENT_7}</AboutSubTitle>
							{TranslateLabels[lang]?.ABOUT_CONTENT_8}
							<AboutSubTitle>{TranslateLabels[lang]?.ABOUT_CONTENT_9}</AboutSubTitle>
							{TranslateLabels[lang]?.ABOUT_CONTENT_10}
							<AboutSubTitle>{TranslateLabels[lang]?.ABOUT_CONTENT_11}</AboutSubTitle>
							<AboutUl>
								<li>{TranslateLabels[lang]?.ABOUT_CONTENT_12}</li>
								<li>{TranslateLabels[lang]?.ABOUT_CONTENT_13}</li>
								<li>{TranslateLabels[lang]?.ABOUT_CONTENT_14}</li>
								<li>{TranslateLabels[lang]?.ABOUT_CONTENT_15}</li>
								<li>{TranslateLabels[lang]?.ABOUT_CONTENT_16}</li>
							</AboutUl>
						</AboutTextBody>
					</AboutTextContent>
				</AboutContentItem2>
			</AboutContent2>
		</AboutContentInner>
	);
}
