import React from "react";
import {
	HomeContentInner,
	HomeDownloadImg,
	HomeDownloadImgInner,
	HomeDownloadSection,
	HomeDownloadWrap,
	HomeLeftContentDownloadBtn,
	HomeLeftContentDownloadBtnImg,
	HomeLeftContentDownloadBtnImgWr,
	HomeLeftContentDownloadItem,
	HomeLeftContentDownloadLink,
	HomeLeftContentDownloadQr,
	HomeLeftContentDownloadQrImg,
	HomeLeftContentHeader,
	HomeLeftContentItemContent,
	HomeLeftContentSectionItemRight,
	HomeLeftContentWrapper,
} from "./styled/StyleHomeDownload";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";

export default function HomeDownload(props: { homeDownloadRef: React.RefObject<HTMLDivElement> }) {
	const { lang } = useLanguage();
	return (
		<HomeDownloadWrap ref={props.homeDownloadRef}>
			<HomeContentInner>
				<HomeDownloadSection>
					<HomeLeftContentWrapper>
						<HomeLeftContentHeader>{TranslateLabels[lang]?.HOME_DOWNLOAD_TITLE}</HomeLeftContentHeader>
						<HomeLeftContentItemContent>
							{TranslateLabels[lang]?.HOME_DOWNLOAD_CONTENT}
						</HomeLeftContentItemContent>
						<HomeLeftContentSectionItemRight>
							<HomeLeftContentDownloadLink>
								<HomeLeftContentDownloadItem>
									<HomeLeftContentDownloadQr>
										<HomeLeftContentDownloadQrImg src="./static/img/qrappstore.62ab5af3.png" />
									</HomeLeftContentDownloadQr>
									<HomeLeftContentDownloadBtn>
										<HomeLeftContentDownloadBtnImgWr href="https://itunes.apple.com/vn/app/glow/id6443428819?l=vi">
											<HomeLeftContentDownloadBtnImg src="./static/img/appstoredl.png" />
										</HomeLeftContentDownloadBtnImgWr>
									</HomeLeftContentDownloadBtn>
								</HomeLeftContentDownloadItem>
								<HomeLeftContentDownloadItem>
									<HomeLeftContentDownloadQr>
										<HomeLeftContentDownloadQrImg src="./static/img/qrchplay.e63ac16d.png" />
									</HomeLeftContentDownloadQr>
									<HomeLeftContentDownloadBtn>
										<HomeLeftContentDownloadBtnImgWr href="https://play.google.com/store/apps/details?id=com.glow.mobileApp&pli=1">
											<HomeLeftContentDownloadBtnImg src="./static/img/ggplaydl.png" />
										</HomeLeftContentDownloadBtnImgWr>
									</HomeLeftContentDownloadBtn>
								</HomeLeftContentDownloadItem>
							</HomeLeftContentDownloadLink>
						</HomeLeftContentSectionItemRight>
					</HomeLeftContentWrapper>
					<HomeDownloadImg>
						<HomeDownloadImgInner src={TranslateLabels[lang]?.HOME_DOWNLOAD_IMG} />
					</HomeDownloadImg>
				</HomeDownloadSection>
			</HomeContentInner>
		</HomeDownloadWrap>
	);
}
