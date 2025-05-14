import React from "react";
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
	PolicyTextBodyp0,
} from "../policy/styled/StyledPolicy";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import useStaticContext from "../../hooks/useStaticContext";

export default function RulesMain() {
	const { lang } = useLanguage();
	const { staticContext } = useStaticContext();

	return (
		<PolicyMainInner>
			<PolicyMainTitle>{staticContext?.data?.h1Content ||TranslateLabels[lang]?.SERVICE_TITLE}</PolicyMainTitle>
			<PolicyContainer>
				<PolicyBodyDateSubTitle2>{TranslateLabels[lang]?.SERVICE_UPDATE}</PolicyBodyDateSubTitle2>
				<PolicyTextBodydiv>
					<PolicyBodyCSTitle>{TranslateLabels[lang]?.SERVICE_TITLE_A}</PolicyBodyCSTitle>
					<PolicyTextBody>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_A_CONTENT_1}</PolicyTextBodyp0>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_A_CONTENT_2}</PolicyTextBodyp0>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_A_CONTENT_3}</PolicyTextBodyp0>
					</PolicyTextBody>
					<PolicyBodyCSTitle>{TranslateLabels[lang]?.SERVICE_TITLE_B}</PolicyBodyCSTitle>
					<PolicyTextBody>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_B_CONTENT_1}</PolicyTextBodyp0>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_B_CONTENT_2}</PolicyTextBodyp0>
					</PolicyTextBody>
					<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_TITLE_C}</PolicyBodyCSTitle>
					<PolicyTextBody>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_C_CONTENT_1}</PolicyTextBodyp0>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_C_CONTENT_2}</PolicyTextBodyp0>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_C_CONTENT_3}</PolicyTextBodyp0>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_C_CONTENT_4}</PolicyTextBodyp0>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_C_CONTENT_5}</PolicyTextBodyp0>
					</PolicyTextBody>
					<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_TITLE_D} </PolicyBodyCSTitle>
					<PolicyTextBody>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_D_CONTENT}</PolicyTextBodyp0>
						<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_D_TITLE_1} </PolicyBodyCSTitle>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_D_TITLE_1_CONTENT}</PolicyTextBodyp0>
						<PolicyBodyCSTitle>{TranslateLabels[lang]?.SERVICE_D_TITLE_2} </PolicyBodyCSTitle>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_D_TITLE_2_CONTENT}</PolicyTextBodyp0>
						<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_D_TITLE_3} </PolicyBodyCSTitle>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_D_TITLE_3_CONTENT}</PolicyTextBodyp0>
						<PolicyBodyCSTitle>{TranslateLabels[lang]?.SERVICE_D_TITLE_4} </PolicyBodyCSTitle>
						<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_D_TITLE_4_CONTENT}</PolicyTextBodyp0>
						<PolicyBodyCSTitle>{TranslateLabels[lang]?.SERVICE_TITLE_E}</PolicyBodyCSTitle>
						<PolicyTextBody>
							<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_E_TITLE_1} </PolicyBodyCSTitle>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_1_CONTENT}</PolicyTextBodyp0>
							<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_E_TITLE_2}</PolicyBodyCSTitle>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_2_CONTENT_1}</PolicyTextBodyp0>

							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_2_CONTENT_2}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_2_CONTENT_3}</PolicyTextBodyp0>
							<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_E_TITLE_3} </PolicyBodyCSTitle>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_3_CONTENT}</PolicyTextBodyp0>
							<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_E_TITLE_4} </PolicyBodyCSTitle>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_4_CONTENT}</PolicyTextBodyp0>
							<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_E_TITLE_5} </PolicyBodyCSTitle>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_5_CONTENT_1}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_5_CONTENT_2}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_5_CONTENT_3}</PolicyTextBodyp0>
							<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_E_TITLE_6}</PolicyBodyCSTitle>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_E_TITLE_6_CONTENT}</PolicyTextBodyp0>
						</PolicyTextBody>
						<PolicyBodyCSTitle>{TranslateLabels[lang]?.SERVICE_TITLE_F}</PolicyBodyCSTitle>
						<PolicyTextBody>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_F_CONTENT_1}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_F_CONTENT_2}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_F_CONTENT_3}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_F_CONTENT_4}</PolicyTextBodyp0>
						</PolicyTextBody>
						<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_TITLE_G} </PolicyBodyCSTitle>
						<PolicyTextBody>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_G_CONTENT}</PolicyTextBodyp0>
						</PolicyTextBody>
						<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_TITLE_H} </PolicyBodyCSTitle>
						<PolicyTextBody>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_H_CONTENT_1}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_H_CONTENT_2}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_H_CONTENT_3}</PolicyTextBodyp0>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_H_CONTENT_4}</PolicyTextBodyp0>
							<br />
						</PolicyTextBody>
						<PolicyBodyCSTitle> {TranslateLabels[lang]?.SERVICE_TITLE_I}</PolicyBodyCSTitle>
						<PolicyTextBody>
							<PolicyTextBodyp0>{TranslateLabels[lang]?.SERVICE_I_CONTENT}</PolicyTextBodyp0>
						</PolicyTextBody>
					</PolicyTextBody>
				</PolicyTextBodydiv>
			</PolicyContainer>
		</PolicyMainInner>
	);
}
