import React from "react";
import {
	ControlCustomCheckbox,
	ControlCustomCheckboxInner,
} from "../../../controls/components/customCheckbox/StyledCustomCheckbox";
import { SelectOptionType } from "react-select";
import { CustomRadioInput, CustomRadioLabel, CustomRadioStarImg, CustomRadioStarWImg } from "../styled/ListStaffAtHome";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";
import { Link } from "react-router-dom";
import useStaticContext from "../../../hooks/useStaticContext";

export const CustomRadio = (props: {
	options: SelectOptionType[];
	value: string | null | undefined;
	setValue: (val: string) => void;
	linkGetter?: (val: string) => string;
}) => {
	const { staticContext } = useStaticContext();
	const handleCheckboxChange = (newValue: string) => {
		props.setValue(props.value === newValue ? "" : newValue);
	};

	return (
		<div>
			{props.options.map((option) => (
				<div key={option.value}>
					<>
						{staticContext?.newStyle ? (
							<Link
								to={props.linkGetter ? props.linkGetter(option.value) : ""}
								style={{
									display: "flex",
									alignItems: "center",
									textDecoration: "none",
									color: "inherit",
								}}>
								<CustomRadioLabel>
									<CustomRadioInnerSSR
										option={option}
										value={props.value}
										handleCheckboxChange={handleCheckboxChange}
									/>
								</CustomRadioLabel>
							</Link>
						) : (
							<CustomRadioLabel>
								<CustomRadioInner
									option={option}
									value={props.value}
									handleCheckboxChange={handleCheckboxChange}
								/>
							</CustomRadioLabel>
						)}
					</>
				</div>
			))}
		</div>
	);
};

export const CustomRadioInner = (props: {
	option: SelectOptionType;
	value: string | null | undefined;
	handleCheckboxChange: (newValue: string) => void;
}) => {
	return (
		<>
			<CustomRadioInput
				type="radio"
				checked={props.value === props.option.value || props.value === "0"}
				onChange={() => props.handleCheckboxChange(props.option.value)}
			/>
			{props.value === props.option.value && (
				<CustomRadioStarWImg
					src="./static/img/RadioButtonIcon.png"
					alt="Selected"
				/>
			)}
			{props.option.label}
		</>
	);
};

export const CustomRadioInnerSSR = (props: {
	option: SelectOptionType;
	value: string | null | undefined;
	handleCheckboxChange: (newValue: string) => void;
}) => {
	return (
		<>
			{props.value === props.option.value && (
				<CustomRadioStarWImg
					src="./static/img/RadioButtonIcon.png"
					alt="Selected"
				/>
			)}
			{props.option.label}
		</>
	);
};

export const CustomRadioStar = (props: {
	options: SelectOptionType[];
	value: string | null | undefined;
	setValue: (val: string) => void;
	linkGetter?: (val: string) => string;
}) => {
	const { staticContext } = useStaticContext();
	const handleCheckboxChange = (newValue: string) => {
		props.setValue(props.value === newValue ? "" : newValue);
	};
	return (
		<div>
			{props.options.map((option) => (
				<div key={option.value}>
					<>
						{staticContext?.newStyle ? (
							<>
								<Link
									to={props.linkGetter ? props.linkGetter(option.value) : ""}
									style={{
										display: "flex",
										alignItems: "center",
										textDecoration: "none",
										color: "inherit",
									}}>
									<CustomRadioLabel>
										<CustomRadioStarInner
											option={option}
											value={props.value}
											handleCheckboxChange={handleCheckboxChange}
										/>
									</CustomRadioLabel>
								</Link>
							</>
						) : (
							<CustomRadioLabel>
								<CustomRadioStarInner
									option={option}
									value={props.value}
									handleCheckboxChange={handleCheckboxChange}
								/>
							</CustomRadioLabel>
						)}
					</>
				</div>
			))}
		</div>
	);
};

export const CustomRadioStarInner = (props: {
	option: SelectOptionType;
	value: string | null | undefined;
	handleCheckboxChange: (newValue: string) => void;
}) => {
	const { lang } = useLanguage();
	return (
		<>
			{/* <CustomRadioInput
				type="radio"
				checked={props.value === props.option.value || props.value === "0"}
				onChange={() => props.handleCheckboxChange(props.option.value)}
			/> */}
			{props.option.value === "0" ? (
				<span>{TranslateLabels[lang]?.ALL}</span>
			) : (
				<>
					{props.value && props.value === props.option.value && (
						<CustomRadioStarWImg
							src="./static/img/RadioButtonIcon.png"
							alt="Selected"
						/>
					)}
					{[...Array(parseInt(props.option.label) || 0)].map((_, index) => (
						<CustomRadioStarImg
							key={index}
							src="./static/img/Star.png"
							alt="Star"
						/>
					))}
					{[...Array(5 - (parseInt(props.option.label) || 0))].map((_, index) => (
						<CustomRadioStarImg
							key={index}
							src="./static/img/unStar.png"
							alt="Unstar"
						/>
					))}
				</>
			)}
		</>
	);
};
