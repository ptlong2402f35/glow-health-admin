import React, { useEffect, useState } from "react";
import { DialogWrapMediumBank, DialogWrapMediumFilter } from "../../../controls/components/dialogWrap/DialogWrap";
import { Lang, LangLabelMap, LangNumberLabelMap } from "../../../../models/UserGlow";
import Select from "react-select";
import {
	DialogInfoCountryOption,
	DialogInfoCountrySelect,
	DialogInfoCountryTitle,
	DialogInfoCountryWrap,
	DialogInfoGenderContent,
	DialogInfoGenderContentImg,
	DialogInfoGenderFeMale,
	DialogInfoGenderMale,
	DialogInfoGenderTitle,
	DialogInfoGenderWrap,
	DialogInfoUserContent,
	DialogInfoUserName,
	DialogInfoUserWrap,
	UserFormServiceButtonCreated,
} from "../styled/StyledLogin";
import useUpdateGenTry from "../hook/useUpdateGenderCountry";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";

export default function DialogUpdateCouGen(props: {
	isDialogOpen: boolean | undefined;
	setIsDialogOpen: ((val: boolean) => void) | undefined;
	// reload: () => void;
}) {
	const [selectedOption, setSelectedOption] = useState("1");
	const [gender, setGender] = useState("");
	const { doGentry } = useUpdateGenTry({});
	const [selectedGender, setSelectedGender] = useState("");
	const handleSave = async () => {
		await doGentry(gender || "", selectedOption || "");
	};
	const { lang } = useLanguage();
	return (
		<DialogWrapMediumBank
			disableEnforceFocus={true}
			open={props.isDialogOpen || false}
			onClose={() => {
				props.setIsDialogOpen && props.setIsDialogOpen(false);
			}}
			title=" "
			actions={
				<>
					<UserFormServiceButtonCreated onClick={handleSave}>
						{TranslateLabels[lang]?.LOGIN_SAVE}
					</UserFormServiceButtonCreated>
				</>
			}>
			<DialogInfoUserWrap>
				<DialogInfoUserName>{TranslateLabels[lang]?.LOGIN_INFO}</DialogInfoUserName>
				<DialogInfoUserContent>{TranslateLabels[lang]?.LOGIN_HELP_GLOW}</DialogInfoUserContent>
				<DialogInfoGenderWrap>
					<DialogInfoGenderTitle>{TranslateLabels[lang]?.LOGIN_SELECT_GENDER}</DialogInfoGenderTitle>
					<DialogInfoGenderContent>
						<DialogInfoGenderMale
							onClick={() => {
								setGender("1");
								setSelectedGender("male");
							}}
							active={selectedGender === "male"}>
							<DialogInfoGenderContentImg src="/static/img/male.jpg" />
							{TranslateLabels[lang]?.MALE}
						</DialogInfoGenderMale>
						<DialogInfoGenderFeMale
							onClick={() => {
								setGender("2");
								setSelectedGender("female");
							}}
							active={selectedGender === "female"}>
							<DialogInfoGenderContentImg src="/static/img/Female.jpg" />
							{TranslateLabels[lang]?.FEMALE}
						</DialogInfoGenderFeMale>
					</DialogInfoGenderContent>
				</DialogInfoGenderWrap>
				<DialogInfoCountryWrap>
					<DialogInfoCountryTitle>{TranslateLabels[lang]?.LOGIN_COUNTRY}</DialogInfoCountryTitle>
					<div>
						<DialogInfoCountrySelect
							value={selectedOption}
							onChange={(e) => setSelectedOption(e.target.value as any)}>
							{Array.from(LangNumberLabelMap.entries()).map(([condition, label]) => (
								<DialogInfoCountryOption
									key={condition}
									value={condition}>
									{label}
								</DialogInfoCountryOption>
							))}
						</DialogInfoCountrySelect>
					</div>
				</DialogInfoCountryWrap>
			</DialogInfoUserWrap>
		</DialogWrapMediumBank>
	);
}
