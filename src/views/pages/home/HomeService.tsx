import React from "react";
import {
	HomeServiceContentInner,
	HomeServiceFlexWrap,
	HomeServiceImg,
	HomeServiceImgInner,
	HomeServiceLeftContentHeader,
	HomeServiceLeftContentImg,
	HomeServiceLeftContentItem,
	HomeServiceLeftContentItems2,
	HomeServiceLeftContentItems2Flex,
	HomeServiceLeftContentItemsHeader2,
	HomeServiceLeftContentItemsText,
	HomeServiceLeftContentWrapper,
	HomeServiceWrap,
} from "./styled/HomeService";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";

export default function HomeService() {
	const { lang } = useLanguage();
	return (
		<HomeServiceWrap>
			<HomeServiceContentInner>
				<HomeServiceFlexWrap>
					<HomeServiceLeftContentWrapper>
						<HomeServiceLeftContentHeader>
							{" "}
							{TranslateLabels[lang]?.HOME_SERVICE_TITLE}
						</HomeServiceLeftContentHeader>
						<HomeServiceLeftContentItems2>
							<HomeServiceLeftContentItems2Flex>
								<HomeServiceLeftContentImg src="./static/img/mass.png" />
								<HomeServiceLeftContentItem>
									<HomeServiceLeftContentItemsHeader2>
										{" "}
										{TranslateLabels[lang]?.HOME_SERVICE_TITLE_1}
									</HomeServiceLeftContentItemsHeader2>
									<HomeServiceLeftContentItemsText>
										{" "}
										{TranslateLabels[lang]?.HOME_SERVICE_CONTENT_1}
									</HomeServiceLeftContentItemsText>
								</HomeServiceLeftContentItem>
							</HomeServiceLeftContentItems2Flex>
							<HomeServiceLeftContentItems2Flex>
								<HomeServiceLeftContentImg src="./static/img/Nail.png" />
								<HomeServiceLeftContentItem>
									<HomeServiceLeftContentItemsHeader2>
										{TranslateLabels[lang]?.HOME_SERVICE_TITLE_2}
									</HomeServiceLeftContentItemsHeader2>
									<HomeServiceLeftContentItemsText>
										{TranslateLabels[lang]?.HOME_SERVICE_CONTENT_2}
									</HomeServiceLeftContentItemsText>
								</HomeServiceLeftContentItem>
							</HomeServiceLeftContentItems2Flex>
							<HomeServiceLeftContentItems2Flex>
								<HomeServiceLeftContentImg src="./static/img/Make.png" />
								<HomeServiceLeftContentItem>
									<HomeServiceLeftContentItemsHeader2>
										{TranslateLabels[lang]?.HOME_SERVICE_TITLE_3}
									</HomeServiceLeftContentItemsHeader2>
									<HomeServiceLeftContentItemsText>
										{TranslateLabels[lang]?.HOME_SERVICE_CONTENT_3}
									</HomeServiceLeftContentItemsText>
								</HomeServiceLeftContentItem>
							</HomeServiceLeftContentItems2Flex>
							<HomeServiceLeftContentItems2Flex>
								<HomeServiceLeftContentImg src="./static/img/Hair.png" />
								<HomeServiceLeftContentItem>
									<HomeServiceLeftContentItemsHeader2>
										{TranslateLabels[lang]?.HOME_SERVICE_TITLE_4}
									</HomeServiceLeftContentItemsHeader2>
									<HomeServiceLeftContentItemsText>
										{TranslateLabels[lang]?.HOME_SERVICE_CONTENT_4}
									</HomeServiceLeftContentItemsText>
								</HomeServiceLeftContentItem>
							</HomeServiceLeftContentItems2Flex>
						</HomeServiceLeftContentItems2>
					</HomeServiceLeftContentWrapper>
					<HomeServiceImg>
						<HomeServiceImgInner src="./static/img/ServiceRight.png" />
					</HomeServiceImg>
				</HomeServiceFlexWrap>
			</HomeServiceContentInner>
		</HomeServiceWrap>
	);
}
