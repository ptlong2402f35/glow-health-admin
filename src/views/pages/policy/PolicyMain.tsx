import React, { useEffect } from "react";
import {
	PolicyBody,
	PolicyBodyCSTitle,
	PolicyBodyDateSubTitle,
	PolicyBodyDateSubTitle2,
	PolicyContainer,
	PolicyMainInner,
	PolicyMainTitle,
	PolicyTextBody,
	PolicyTextBodydiv,
	PolicyTextBodyp,
} from "./styled/StyledPolicy";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";

export default function PolicyMain() {
	const { lang } = useLanguage();

	return (
		<PolicyMainInner>
			<PolicyMainTitle>{TranslateLabels[lang]?.POLICY_TITLE}</PolicyMainTitle>
			<PolicyContainer>
				<PolicyBody>
					<PolicyBodyDateSubTitle2>{TranslateLabels[lang]?.POLICY_UPDATE} </PolicyBodyDateSubTitle2>
					<PolicyBodyCSTitle>{TranslateLabels[lang]?.POLICY_TITLE_A}</PolicyBodyCSTitle>
					<PolicyTextBody>{TranslateLabels[lang]?.POLICY_CONTENT_1}</PolicyTextBody>
					<PolicyBodyCSTitle>{TranslateLabels[lang]?.POLICY_TITLE_B}</PolicyBodyCSTitle>
					<PolicyBodyCSTitle>{TranslateLabels[lang]?.POLICY_TITLE_1}</PolicyBodyCSTitle>
					<PolicyTextBody>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_2}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_3}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_4}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_5}</PolicyTextBodyp>
						<PolicyTextBodydiv>
							<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_6}</PolicyTextBodyp>
							<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_7} </PolicyTextBodyp>
							<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_8} </PolicyTextBodyp>
							<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_9} </PolicyTextBodyp>
							<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_10} </PolicyTextBodyp>
							<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_11}</PolicyTextBodyp>
							<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_12}</PolicyTextBodyp>
							<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_CONTENT_13}</PolicyTextBodyp>
						</PolicyTextBodydiv>
					</PolicyTextBody>
					<PolicyBodyCSTitle> {TranslateLabels[lang]?.POLICY_TITLE_2} </PolicyBodyCSTitle>
					<PolicyTextBody>
						<PolicyTextBodyp> {TranslateLabels[lang]?.POLICY_TITLE2_CONTENT_1} </PolicyTextBodyp>
						<PolicyTextBodyp> {TranslateLabels[lang]?.POLICY_TITLE2_CONTENT_2}</PolicyTextBodyp>
						<PolicyTextBodyp> {TranslateLabels[lang]?.POLICY_TITLE2_CONTENT_3}</PolicyTextBodyp>
						<PolicyTextBodyp> {TranslateLabels[lang]?.POLICY_TITLE2_CONTENT_4}</PolicyTextBodyp>
						<PolicyTextBodyp> {TranslateLabels[lang]?.POLICY_TITLE2_CONTENT_5}</PolicyTextBodyp>
					</PolicyTextBody>
					<PolicyBodyCSTitle>{TranslateLabels[lang]?.POLICY_TITLE_3}</PolicyBodyCSTitle>
					<PolicyTextBody>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_1}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_2}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_3}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_4}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_5}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_6}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_7}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_8}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_9}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_10}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_11}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_12}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_13}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_14}</PolicyTextBodyp>
						<PolicyTextBodyp>{TranslateLabels[lang]?.POLICY_TITLE3_CONTENT_15}</PolicyTextBodyp>
					</PolicyTextBody>
				</PolicyBody>
			</PolicyContainer>
		</PolicyMainInner>
	);
}
