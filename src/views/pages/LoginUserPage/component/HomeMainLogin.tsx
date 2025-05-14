import React, { useState } from "react";
import {
	HomeInstructWrapv2,
	HomeInstructInnerv3,
	HomeInstructPhoneDownloadResTitle,
} from "../../home/styled/StyleHomeIntroMenu";
import { HomeInstructNew, HomeRes } from "../../home/styled/HomeStyles";
import FormLogin from "./FormLogin";
import { HomeMainV4Left, HomeMainV4LeftLogin } from "../../home/HomeMainv4";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";
import { HomeWeb } from "../styled/StyledLogin";
// import FormLoginv222 from "../login";

export default function HomeMainLogin(props: { setPhoneNumber: (val: string) => void; phoneNumber: string }) {
	const { lang } = useLanguage();
	return (
		<HomeInstructWrapv2 id="home-instruct">
			<HomeInstructNew login={true}>
				<HomeInstructInnerv3 login={true}>
					<HomeWeb>
						<HomeMainV4LeftLogin login={true} />
					</HomeWeb>
					<HomeRes>
						<HomeInstructPhoneDownloadResTitle login={true}>
							{TranslateLabels[lang]?.HOME_PAGEV2_TITLE}
							{TranslateLabels[lang]?.HOME_PAGEV2_TITLE_V2}
						</HomeInstructPhoneDownloadResTitle>
					</HomeRes>
					<FormLogin
						setPhoneNumber={props.setPhoneNumber}
						phoneNumber={props.phoneNumber}
					/>
					{/* <FormLoginv222 /> */}
				</HomeInstructInnerv3>
			</HomeInstructNew>
		</HomeInstructWrapv2>
	);
}
