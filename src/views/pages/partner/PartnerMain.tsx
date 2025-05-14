import React, { useRef } from "react";
import {
	PartnerContentInner,
	PartnerContentWrapper,
	PartnerSection1,
	PartnerSection1LeftWrapper,
	PartnerSection1RightButton,
	PartnerSection1RightButtonA,
	PartnerSection1RightButtonImg,
	PartnerSection1RightText,
	PartnerSection1RightWrapper,
	PartnerSection1SubTitle,
	PartnerSection1Title,
	PartnerSection2,
	PartnerSection2Img,
	PartnerSection2ImgWrap,
	PartnerSection3,
	PartnerSection3LeftImg,
	PartnerSection3LeftImgWrap,
	PartnerSection3LeftWrap,
	PartnerSection3RightItem,
	PartnerSection3RightItemBody,
	PartnerSection3RightItemLeft,
	PartnerSection3RightItemRight,
	PartnerSection3RightItemTitle,
	PartnerSection3RightItems,
	PartnerSection3RightTitle,
	PartnerSection3RightWrap,
	PartnerSection4,
	PartnerSection4DownloadImg,
	PartnerSection4DownloadImgWrapper,
	PartnerSection4ItemRight,
	PartnerSection4LeftContentDownloadLink,
	PartnerSection4LeftTitle,
	PartnerSection4LeftTitleRes,
	PartnerSection4LeftWrapper,
	PartnerSection4LeftWrapperItem,
	PartnerSection4MainWraper,
	PartnerSection4RightWrapper,
} from "./styled/StyledPartner";
import {
	HomeLeftContentDownloadBtn,
	HomeLeftContentDownloadBtnImg,
	HomeLeftContentDownloadBtnImgWr,
	HomeLeftContentDownloadItem,
	HomeLeftContentDownloadLink,
	HomeLeftContentDownloadQr,
	HomeLeftContentDownloadQrImg,
} from "../home/styled/StyleHomeDownload";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";

export default function PartnerMain() {
	const { lang } = useLanguage();
	const homeDownloadRef = useRef<HTMLDivElement>(null);

	const handleScrollToHomeDownload = () => {
		if (homeDownloadRef.current) {
			homeDownloadRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<PartnerContentWrapper>
			<PartnerContentInner>
				<PartnerSection1>
					<PartnerSection1LeftWrapper>
						<PartnerSection1SubTitle>{TranslateLabels[lang]?.PARTNER_TITLE_TOP}</PartnerSection1SubTitle>
						<PartnerSection1Title>{TranslateLabels[lang]?.PARTNER_TITLE_BOTTOM}</PartnerSection1Title>
					</PartnerSection1LeftWrapper>
					<PartnerSection1RightWrapper>
						<PartnerSection1RightText>{TranslateLabels[lang]?.PARTNER_CONTENT_1}</PartnerSection1RightText>
						<PartnerSection1RightButtonA onClick={handleScrollToHomeDownload}>
							<PartnerSection1RightButton>
								{TranslateLabels[lang]?.PARTNER_DOWNLOAD}
								<PartnerSection1RightButtonImg src="./static/img/ArrowWhite.png" alt="Biểu tượng mũi tên"/>
							</PartnerSection1RightButton>
						</PartnerSection1RightButtonA>
					</PartnerSection1RightWrapper>
				</PartnerSection1>
			</PartnerContentInner>
			<PartnerSection2>
				<PartnerSection2ImgWrap>
					<PartnerSection2Img
						src="./static/img/partnersection2.19662cd9.png"
						alt={TranslateLabels[lang]?.ALT_IMG_PARTNER_1}
					/>
				</PartnerSection2ImgWrap>
			</PartnerSection2>

			<PartnerContentInner>
				<PartnerSection3>
					<PartnerSection3LeftWrap>
						<PartnerSection3LeftImgWrap>
							<PartnerSection3LeftImg
								src="./static/img/partner3.108c718b.png"
								alt={TranslateLabels[lang]?.ALT_IMG_PARTNER_2}
							/>
						</PartnerSection3LeftImgWrap>
					</PartnerSection3LeftWrap>
					<PartnerSection3RightWrap>
						<PartnerSection3RightTitle>{TranslateLabels[lang]?.PARTNER_TITLE_1}</PartnerSection3RightTitle>
						<PartnerSection3RightItems>
							<PartnerSection3RightItem>
								<PartnerSection3RightItemLeft>1</PartnerSection3RightItemLeft>
								<PartnerSection3RightItemRight>
									<PartnerSection3RightItemTitle>
										{TranslateLabels[lang]?.PARTNER_TITLE_2}
									</PartnerSection3RightItemTitle>
									<PartnerSection3RightItemBody>
										{TranslateLabels[lang]?.PARTNER_CONTENT2}
									</PartnerSection3RightItemBody>
								</PartnerSection3RightItemRight>
							</PartnerSection3RightItem>

							<PartnerSection3RightItem>
								<PartnerSection3RightItemLeft>2</PartnerSection3RightItemLeft>
								<PartnerSection3RightItemRight>
									<PartnerSection3RightItemTitle>
										{TranslateLabels[lang]?.PARTNER_TITLE_3}
									</PartnerSection3RightItemTitle>
									<PartnerSection3RightItemBody>
										{TranslateLabels[lang]?.PARTNER_CONTENT_3}
									</PartnerSection3RightItemBody>
								</PartnerSection3RightItemRight>
							</PartnerSection3RightItem>

							<PartnerSection3RightItem>
								<PartnerSection3RightItemLeft>3</PartnerSection3RightItemLeft>
								<PartnerSection3RightItemRight>
									<PartnerSection3RightItemTitle>
										{TranslateLabels[lang]?.PARTNER_TITLE_4}
									</PartnerSection3RightItemTitle>
									<PartnerSection3RightItemBody>
										{TranslateLabels[lang]?.PARTNER_CONTENT_4}
									</PartnerSection3RightItemBody>
								</PartnerSection3RightItemRight>
							</PartnerSection3RightItem>
						</PartnerSection3RightItems>
					</PartnerSection3RightWrap>
				</PartnerSection3>
			</PartnerContentInner>

			<PartnerSection4MainWraper ref={homeDownloadRef}>
				<PartnerContentInner>
					<PartnerSection4>
						<PartnerSection4LeftWrapper>
							<PartnerSection4LeftTitleRes>
								{TranslateLabels[lang]?.PARTNER_TITLE_RES}
							</PartnerSection4LeftTitleRes>
							<PartnerSection4LeftTitle>
								{TranslateLabels[lang]?.PARTNER_TITLE_5}
							</PartnerSection4LeftTitle>

							<PartnerSection4LeftWrapperItem>
								<PartnerSection3RightItemLeft>1</PartnerSection3RightItemLeft>
								<PartnerSection4ItemRight>
									<PartnerSection3RightItemTitle>
										{TranslateLabels[lang]?.PARTNER_TITLE_DOWNLOAD_1}
									</PartnerSection3RightItemTitle>
									<PartnerSection4LeftContentDownloadLink>
										<HomeLeftContentDownloadItem>
											<HomeLeftContentDownloadQr>
												<HomeLeftContentDownloadQrImg
													src="./static/img/qrappstore.62ab5af3.png"
													alt={TranslateLabels[lang]?.ALT_IMG_PARTNER_DL_IOS_QR}
												/>
											</HomeLeftContentDownloadQr>
											<HomeLeftContentDownloadBtn>
												<HomeLeftContentDownloadBtnImgWr href="https://apps.apple.com/vn/app/glow/id6443428819">
													<HomeLeftContentDownloadBtnImg
														src="./static/img/appstoredl.png"
														alt={TranslateLabels[lang]?.ALT_IMG_PARTNER_DL_IOS}
													/>
												</HomeLeftContentDownloadBtnImgWr>
											</HomeLeftContentDownloadBtn>
										</HomeLeftContentDownloadItem>
										<HomeLeftContentDownloadItem>
											<HomeLeftContentDownloadQr>
												<HomeLeftContentDownloadQrImg
													src="./static/img/qrchplay.e63ac16d.png"
													alt={TranslateLabels[lang]?.ALT_IMG_PARTNER_DL_ADR_QR}
												/>
											</HomeLeftContentDownloadQr>
											<HomeLeftContentDownloadBtn>
												<HomeLeftContentDownloadBtnImgWr href="https://play.google.com/store/apps/details?id=com.glow.mobileApp">
													<HomeLeftContentDownloadBtnImg
														src="./static/img/ggplaydl.png"
														alt={TranslateLabels[lang]?.ALT_IMG_PARTNER_DL_ADR}
													/>
												</HomeLeftContentDownloadBtnImgWr>
											</HomeLeftContentDownloadBtn>
										</HomeLeftContentDownloadItem>
									</PartnerSection4LeftContentDownloadLink>
								</PartnerSection4ItemRight>
							</PartnerSection4LeftWrapperItem>

							<PartnerSection4LeftWrapperItem>
								<PartnerSection3RightItemLeft>2</PartnerSection3RightItemLeft>
								<PartnerSection4ItemRight>
									<PartnerSection3RightItemTitle>
										{TranslateLabels[lang]?.PARTNER_TITLE_DOWNLOAD_2}
									</PartnerSection3RightItemTitle>
								</PartnerSection4ItemRight>
							</PartnerSection4LeftWrapperItem>
							<PartnerSection4LeftWrapperItem>
								<PartnerSection3RightItemLeft>3</PartnerSection3RightItemLeft>
								<PartnerSection4ItemRight>
									<PartnerSection3RightItemTitle>
										{TranslateLabels[lang]?.PARTNER_TITLE_DOWNLOAD_3}
									</PartnerSection3RightItemTitle>
								</PartnerSection4ItemRight>
							</PartnerSection4LeftWrapperItem>
						</PartnerSection4LeftWrapper>
						<PartnerSection4RightWrapper>
							<PartnerSection4DownloadImgWrapper>
								<PartnerSection4DownloadImg
									src={TranslateLabels[lang]?.PARTNER_SRC_IMG}
									alt={TranslateLabels[lang]?.ALT_IMG_PARTNER_3}
								/>
							</PartnerSection4DownloadImgWrapper>
						</PartnerSection4RightWrapper>
					</PartnerSection4>
				</PartnerContentInner>
			</PartnerSection4MainWraper>
		</PartnerContentWrapper>
	);
}
