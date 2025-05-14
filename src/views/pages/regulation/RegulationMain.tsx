import React from "react";
import {
	PolicyBody,
	PolicyBodyCSTitle,
	PolicyBodyDateSubTitle,
	PolicyBodyDateSubTitle2,
	PolicyCSSubTitle,
	PolicyContainer,
	PolicyMainInner,
	PolicyMainTitle,
	PolicyTextBody,
	PolicyTextBodydiv,
	PolicyTextBodyp,
	PolicyTextBodyp0,
} from "../policy/styled/StyledPolicy";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import useStaticContext from "../../hooks/useStaticContext";

export default function RegulationMain() {
	const { lang } = useLanguage();
	const { staticContext } = useStaticContext();

	return (
		<PolicyMainInner>
			<PolicyMainTitle>{staticContext?.data?.h1Content||TranslateLabels[lang]?.REGULATION_TITLE} </PolicyMainTitle>
			<PolicyContainer>
				<PolicyBodyDateSubTitle2>{TranslateLabels[lang]?.REGULATION_UPDATE}</PolicyBodyDateSubTitle2>
				<br />
				<br />
				<PolicyTextBody>{TranslateLabels[lang]?.REGULATION_CONTENT}</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_I}</PolicyBodyCSTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_I_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_I_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_I_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_I_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_I_CONTENT_5}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_I_CONTENT_6}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_I_CONTENT_7}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_I_CONTENT_8}</PolicyTextBodyp0>
					<br />
				</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_II} </PolicyBodyCSTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_5}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_6}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_7}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_8}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_9}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_10}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_II_CONTENT_11}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_III} </PolicyBodyCSTitle>
				<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_III_1}</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_1_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_1_CONTENT_2}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_1_CONTENT_3}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_1_CONTENT_4}</PolicyTextBodyp0>

					<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_III_2}</PolicyCSSubTitle>
					<PolicyTextBodyp>
						<strong>{TranslateLabels[lang]?.REGULATION_III_21}</strong>
					</PolicyTextBodyp>
					<PolicyTextBodyp>{TranslateLabels[lang]?.REGULATION_III_21_CONTENT}</PolicyTextBodyp>
					<PolicyTextBodyp>
						<strong>{TranslateLabels[lang]?.REGULATION_III_22}</strong>
					</PolicyTextBodyp>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_22_CONTENT_1}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_22_CONTENT_2}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_22_CONTENT_3}</PolicyTextBodyp0>

					<PolicyTextBodyp>
						<strong>{TranslateLabels[lang]?.REGULATION_III_23}</strong>
					</PolicyTextBodyp>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_23_CONTENT_1}</PolicyTextBodyp0>
					<br />
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_23_CONTENT_2}</PolicyTextBodyp0>
					<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_III_3} </PolicyCSSubTitle>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_3_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_3_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_3_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_3_CONTENT_4}</PolicyTextBodyp0>
					<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_III_4}</PolicyCSSubTitle>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_4}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_5}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_6}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_7}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_8}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_9}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_10}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_11}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_12}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_13}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_14}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_15}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_16}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_17}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_18}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_19}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_20}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_III_4_CONTENT_21}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyBodyCSTitle> {TranslateLabels[lang]?.REGULATION_IV}</PolicyBodyCSTitle>
				<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_IV_1}</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_1_CONTENT}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{TranslateLabels[lang]?.REGULATION_IV_2} <br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_2_CONTENT_1}</PolicyTextBodyp0>
					{/* <PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_2_CONTENT_2}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_2_CONTENT_3}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_2_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_2_CONTENT_5}</PolicyTextBodyp0> */}
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{TranslateLabels[lang]?.REGULATION_IV_3}
					<br />{" "}
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_3_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_3_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_3_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_3_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IV_3_CONTENT_5}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyBodyCSTitle>
					{TranslateLabels[lang]?.REGULATION_V}
					<br />
				</PolicyBodyCSTitle>
				<PolicyCSSubTitle>
					{TranslateLabels[lang]?.REGULATION_V_1}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_V_1_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_5}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_6}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_7}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_8}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_9}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_10}</PolicyTextBodyp0>

					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_V_1_CONTENT_11}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_12}</PolicyTextBodyp0>

					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_V_1_CONTENT_13}.</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_1_CONTENT_14}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{" "}
					{TranslateLabels[lang]?.REGULATION_V_2}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_2_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_2_CONTENT_2}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_2_CONTENT_3}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_2_CONTENT_4}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_2_CONTENT_5}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_2_CONTENT_6}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_2_CONTENT_7}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{" "}
					{TranslateLabels[lang]?.REGULATION_V_3}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_3_CONTENT_1}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_3_CONTENT_2}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_3_CONTENT_3}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_3_CONTENT_4} </PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{" "}
					{TranslateLabels[lang]?.REGULATION_V_4}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_4_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_4_CONTENT_1}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{" "}
					{TranslateLabels[lang]?.REGULATION_V_5}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_1}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_5}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_6}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_7}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_8}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_9}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_10}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_11}</PolicyTextBodyp0>

					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_V_5_CONTENT_12}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{" "}
					{TranslateLabels[lang]?.REGULATION_V_6}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_V_6_CONTENT_0}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_V_6_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_V_6_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_V_6_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_V_6_CONTENT_4}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_VI} </PolicyBodyCSTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VI_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VI_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VI_CONTENT_3}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_VII}</PolicyBodyCSTitle>
				<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_VII_1}</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_1}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_4}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_5}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_6}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_7}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_8}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_9}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_10}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_11}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_12}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_1_CONTENT_13}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_VII_2}</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_2_CONTENT_1}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_2_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_2_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_2_CONTENT_4}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_2_CONTENT_5}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_2_CONTENT_6}</PolicyTextBodyp0>{" "}
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{TranslateLabels[lang]?.REGULATION_VII_3}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_3_CONTENT_1}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_3_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_3_CONTENT_3}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_VII_3_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_3_CONTENT_5}</PolicyTextBodyp0>{" "}
				</PolicyTextBody>
				<PolicyCSSubTitle>
					{TranslateLabels[lang]?.REGULATION_VII_4}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_1}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_2}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_3}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_5}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_6}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_7}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_8}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_9}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_10}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_11}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_12}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_13}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_14}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_15}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_16}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_17} </PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_18}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_19}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_20}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_21}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_22}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_23}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VII_4_CONTENT_24}</PolicyTextBodyp0>{" "}
				</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_VIII} </PolicyBodyCSTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VIII_CONTENT_1}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VIII_CONTENT_2}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VIII_CONTENT_3}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_VIII_CONTENT_4}</PolicyTextBodyp0>{" "}
				</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_IX}</PolicyBodyCSTitle>
				<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_IX_1}</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_1_CONTENT_1}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_1_CONTENT_2}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_1_CONTENT_3}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_1_CONTENT_4}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_1_CONTENT_5}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_1_CONTENT_6}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_1_CONTENT_7}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_IX_2}</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_1}</PolicyTextBodyp0> <br />
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_2}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_3}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_4}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_5}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_6}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_7}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_8}</PolicyTextBodyp0> <br />
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_9}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_10}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_IX_2_CONTENT_11}</PolicyTextBodyp0>{" "}
				</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_X}</PolicyBodyCSTitle>
				<PolicyCSSubTitle>
					{TranslateLabels[lang]?.REGULATION_X_1}
					<br />
				</PolicyCSSubTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_2}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_3}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_4}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_5}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_6}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_7}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_8}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_9}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_10}</PolicyTextBodyp0>
					<br />
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_11}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_12}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_13}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_14}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_14_1}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_14_2}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_14_3}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_15}</PolicyTextBodyp0>{" "}
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_1_CONTENT_16}</PolicyTextBodyp0>{" "}
					<PolicyCSSubTitle>{TranslateLabels[lang]?.REGULATION_X_2}</PolicyCSSubTitle>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_0} </PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_5}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_6}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_7}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_8}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_9}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_10}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_11}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_12}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_13}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_X_2_CONTENT_14}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyBodyCSTitle>{TranslateLabels[lang]?.REGULATION_XI} </PolicyBodyCSTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_XI_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_XI_CONTENT_2}</PolicyTextBodyp0>
				</PolicyTextBody>
				<PolicyBodyCSTitle> {TranslateLabels[lang]?.REGULATION_XII} </PolicyBodyCSTitle>
				<PolicyTextBody>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_XII_CONTENT_1}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_XII_CONTENT_2}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_XII_CONTENT_3}</PolicyTextBodyp0>
					<PolicyTextBodyp0>{TranslateLabels[lang]?.REGULATION_XII_CONTENT_4}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_XII_CONTENT_5}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_XII_CONTENT_6}</PolicyTextBodyp0>
					<PolicyTextBodyp0> {TranslateLabels[lang]?.REGULATION_XII_CONTENT_7}</PolicyTextBodyp0>
				</PolicyTextBody>
			</PolicyContainer>
		</PolicyMainInner>
	);
}
