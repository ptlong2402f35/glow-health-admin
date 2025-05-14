import React from "react";
import {
	HomeInstructContentHeader,
	HomeInstructContentInner,
	HomeInstructContentItem,
	HomeInstructContentItemContent,
	HomeInstructContentItemHeader,
	HomeInstructContentItemImg,
	HomeInstructContentItems,
	HomeInstructWrapv2,
} from "./styled/HomeInstruct";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";

export default function HomeInstructv2() {
	const { lang } = useLanguage();
	return (
		<HomeInstructWrapv2>
			<HomeInstructContentInner>
				<HomeInstructContentHeader>
					{TranslateLabels[lang]?.HONE_INSTRAC_TITLE_TOP}
					<br />
					{TranslateLabels[lang]?.HONE_INSTRAC_TITLE_BOTTOM}
				</HomeInstructContentHeader>
				<HomeInstructContentItems>
					<HomeInstructContentItem>
						<HomeInstructContentItemImg src="./static/img/datlich.png" />
						<HomeInstructContentItemHeader>
							{TranslateLabels[lang]?.HONE_INSTRAC_TITLE_1}
						</HomeInstructContentItemHeader>
						<HomeInstructContentItemContent>
							{TranslateLabels[lang]?.HONE_INSTRAC_CONTENT_1}
						</HomeInstructContentItemContent>
					</HomeInstructContentItem>
					<HomeInstructContentItem>
						<HomeInstructContentItemImg src="./static/img/Choketnoi.png" />
						<HomeInstructContentItemHeader>
							{TranslateLabels[lang]?.HONE_INSTRAC_TITLE_2}
						</HomeInstructContentItemHeader>
						<HomeInstructContentItemContent>
							{TranslateLabels[lang]?.HONE_INSTRAC_CONTENT_2}
						</HomeInstructContentItemContent>
					</HomeInstructContentItem>
					<HomeInstructContentItem>
						<HomeInstructContentItemImg src="./static/img/Doitac.png" />
						<HomeInstructContentItemHeader>
							{TranslateLabels[lang]?.HONE_INSTRAC_TITLE_3}
						</HomeInstructContentItemHeader>
						<HomeInstructContentItemContent>
							{TranslateLabels[lang]?.HONE_INSTRAC_CONTENT_3}
						</HomeInstructContentItemContent>
					</HomeInstructContentItem>
				</HomeInstructContentItems>
			</HomeInstructContentInner>
		</HomeInstructWrapv2>
	);
}
