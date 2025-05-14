import React from "react";
import {
	ControlCustomCheckbox,
	ControlCustomCheckboxInner,
} from "../../../controls/components/customCheckbox/StyledCustomCheckbox";
import { SelectOptionType } from "react-select";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";
import { Link } from "react-router-dom";
import useStaticContext from "../../../hooks/useStaticContext";

export const userGenderList: SelectOptionType[] = [
	{ label: "Tất cả", value: "All", object: "" },
	{ label: "Nam", value: "Male", object: "" },
	{ label: "Nữ", value: "Female", object: "" },
];

export const userGenderListEN: SelectOptionType[] = [
	{ label: "All", value: "All", object: "" },
	{ label: "Male", value: "Male", object: "" },
	{ label: "Female", value: "Female", object: "" },
];

export const userGenderListKR: SelectOptionType[] = [
	{ label: "모두", value: "All", object: "" },
	{ label: "남성", value: "Male", object: "" },
	{ label: "여성", value: "Female", object: "" },
];

export const CustomCheckbox = (props: {
	maleChecked: boolean;
	femaleChecked: boolean;
	setMaleChecked: (checked: boolean) => void;
	setFemaleChecked: (checked: boolean) => void;
	handleGenderFilter: () => void;
	doFilterGender: ((val: string | null) => void) | undefined;
	linkGetter?: (val: string) => string;
	filterGender?: string | null;
}) => {
	const { staticContext } = useStaticContext();
	const handleMaleCheckboxChange = () => {
		let selectedGenderValue = "";
		let maleChecked = !props.maleChecked;
		let femaleChecked = props.femaleChecked;

		if (maleChecked && femaleChecked) {
			selectedGenderValue = "All";
		} else if (maleChecked) {
			selectedGenderValue = "Male";
		} else if (femaleChecked) {
			selectedGenderValue = "Female";
		} else if (!maleChecked && !femaleChecked) {
			selectedGenderValue = "";
		}

		props.setMaleChecked(!props.maleChecked);
		if (props.doFilterGender) {
			props.doFilterGender(selectedGenderValue);
		}
	};

	const handleFemaleCheckboxChange = () => {
		let selectedGenderValue = "";
		let maleChecked = props.maleChecked;
		let femaleChecked = !props.femaleChecked;

		if (maleChecked && femaleChecked) {
			selectedGenderValue = "All";
		} else if (maleChecked) {
			selectedGenderValue = "Male";
		} else if (femaleChecked) {
			selectedGenderValue = "Female";
		} else if (!maleChecked && !femaleChecked) {
			selectedGenderValue = "";
		}

		props.setFemaleChecked(!props.femaleChecked);
		if (props.doFilterGender) {
			props.doFilterGender(selectedGenderValue);
		}
	};
	const { lang } = useLanguage();

	const FilterMale =
		props.filterGender === "Male"
			? ""
			: props.filterGender === "All"
			? "Female"
			: props.filterGender === "Female"
			? "All"
			: "Male";

	const FilterFeMale =
		props.filterGender === "Male"
			? "All"
			: props.filterGender === "All"
			? "Male"
			: props.filterGender === "Female"
			? ""
			: "Female";

	return (
		<div>
			{staticContext?.newStyle ? (
				<>
					<div>
						<label style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
							<Link
								to={props.linkGetter ? props.linkGetter(FilterMale) : ""}
								style={{
									display: "flex",
									alignItems: "center",
									textDecoration: "none",
									color: "inherit",
								}}>
								<InputMale
									handleMaleCheckboxChange={handleMaleCheckboxChange}
									maleChecked={props.maleChecked}
								/>
							</Link>
						</label>
					</div>
					<div>
						<label style={{ display: "flex", alignItems: "center" }}>
							<Link
								to={props.linkGetter ? props.linkGetter(FilterFeMale) : ""}
								style={{
									display: "flex",
									alignItems: "center",
									textDecoration: "none",
									color: "inherit",
								}}>
								<InputFeMale
									handleFemaleCheckboxChange={handleFemaleCheckboxChange}
									femaleChecked={props.femaleChecked}
								/>
							</Link>
						</label>
					</div>
				</>
			) : (
				<>
					<div>
						<label style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
							<InputMale
								handleMaleCheckboxChange={handleMaleCheckboxChange}
								maleChecked={props.maleChecked}
							/>
						</label>
					</div>
					<div>
						<label style={{ display: "flex", alignItems: "center" }}>
							<InputFeMale
								handleFemaleCheckboxChange={handleFemaleCheckboxChange}
								femaleChecked={props.femaleChecked}
							/>
						</label>
					</div>
				</>
			)}
		</div>
	);
};
export const InputMale = (props: { handleMaleCheckboxChange: () => void; maleChecked: boolean }) => {
	const { lang } = useLanguage();
	return (
		<>
			<span
				style={{
					width: "20px",
					height: "20px",
					backgroundColor: props.maleChecked ? "#5B7A4F" : "transparent",
					borderRadius: "5px",
					marginRight: "5px",
					border: "2px solid #5B7A4F",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				{props.maleChecked && <span style={{ color: "white" }}>✓</span>}
			</span>
			{TranslateLabels[lang]?.MALE}
		</>
	);
};

export const InputFeMale = (props: { handleFemaleCheckboxChange: () => void; femaleChecked: boolean }) => {
	const { lang } = useLanguage();
	return (
		<>
			<span
				style={{
					width: "20px",
					height: "20px",
					backgroundColor: props.femaleChecked ? "#5B7A4F" : "transparent",
					borderRadius: "5px",
					marginRight: "5px",
					border: "2px solid #5B7A4F",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				{props.femaleChecked && <span style={{ color: "white" }}>✓</span>}
			</span>
			{TranslateLabels[lang]?.FEMALE}
		</>
	);
};
