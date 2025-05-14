import React from "react";
import Select, { SelectOptionType } from "react-select";

const customStyles = {
	singleValue: (provided?: any | null, state?: any | null) => ({
		...provided,
		color: "var(--text-color0)",
	}),
	valueContainer: (provided?: any | null, state?: any | null) => ({
		...provided,
		padding: "12px 20px 12px 20px",
		fontFamily: "SF-Pro-Display",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: "14px",
		lineHeight: "19px",
		color: "var(--text-color0)",
		height: "55px",
		"@media screen and (max-width: 768px)": {
			padding: "11px 20px 11px 20px",
			height: "45px",
		},
	}),
	control: (provided?: any | null, state?: any | null) => ({
		...provided,
		border: "1px solid var(--border-color)",
		fontSize: "14px",
		borderRadius: "100px",
	}),
};

const smStyles = {
	singleValue: customStyles.singleValue,
	valueContainer: (provided?: any | null, state?: any | null) => ({
		...customStyles.valueContainer(provided, state),
		fontWeight: "normal",
		padding: "6px 15px 6px 15px",
		height: "35px",
	}),
	control: customStyles.control,
};

const xStylesOrder = {
	singleValue: smStyles.singleValue,
	valueContainer: (provided?: any | null, state?: any | null) => ({
		...smStyles.valueContainer(provided, state),
		"@media screen and (max-width: 768px)": {
			padding: "10px 20px 10px 20px",
		},
	}),
	control: (provided?: any | null, state?: any | null) => ({
		...smStyles.control(provided, state),
		border: "1px solid #B6B6B6",
		borderRadius: "100px",
		height: "40px",
		boxShadow: "0px 2px 5.599999904632568px 0px #080D081",
	}),
	indicatorSeparator: () => ({
		width: "0px",
	}),
};
const StylesFinan = {
	singleValue: xStylesOrder.singleValue,
	valueContainer: (provided?: any | null, state?: any | null) => ({
		...xStylesOrder.valueContainer(provided, state),
		"@media screen and (max-width: 768px)": {
			padding: "10px 20px 10px 10px",
		},
	}),
	control: xStylesOrder.control,
	indicatorSeparator: xStylesOrder.indicatorSeparator,
	menu: (provided?: any | null, state?: any | null) => ({
		...provided,
		"@media screen and (max-width: 768px)": {
			width: "250px",
		},
	}),
};

const smStylesResponsive = {
	singleValue: smStyles.singleValue,
	valueContainer: (provided?: any | null, state?: any | null) => ({
		...smStyles.valueContainer(provided, state),
		"@media screen and (max-width: 768px)": {
			padding: "6px 15px 6px 15px",
			height: "35px",
		},
	}),
	control: smStyles.control,
};

const xsStylesResponsive = {
	singleValue: smStyles.singleValue,
	valueContainer: (provided?: any | null, state?: any | null) => ({
		...smStyles.valueContainer(provided, state),
		"@media screen and (max-width: 768px)": {
			padding: "4px 15px 4px 15px",
			height: "30px",
		},
	}),
	control: (provided?: any | null, state?: any | null) => ({
		...smStyles.control(provided, state),
		"@media screen and (max-width: 768px)": {
			minHeight: "32px",
		},
	}),

	dropdownIndicator: (provided?: any | null, state?: any | null) => ({
		...provided,
		"@media screen and (max-width: 768px)": {
			padding: "5px",
		},
	}),
};

export default function SelectSearchBox(props: {
	className?: string;
	id?: string;
	options: SelectOptionType[];
	value: SelectOptionType;
	onChange: (val: SelectOptionType) => void;
}) {
	return (
		<Select
			{...props}
			styles={customStyles}
		/>
	);
}

export function SmSelectSearchBox(props: {
	isSearchable?: boolean;
	className?: string;
	id?: string;
	placeholder?: string;
	options: SelectOptionType[];
	value: SelectOptionType;
	onChange: (val: SelectOptionType) => void;
	responsive?: boolean;
	extraSmall?: boolean;
}) {
	return (
		<Select
			{...props}
			styles={props.responsive ? (props.extraSmall ? xsStylesResponsive : smStylesResponsive) : smStyles}
			placeholder={props.placeholder}
			isSearchable={props.isSearchable}
		/>
	);
}

export function SmSelectSearchBoxOrder(props: {
	isSearchable?: boolean;
	className?: string;
	id?: string;
	placeholder?: string;
	options: SelectOptionType[];
	value: SelectOptionType;
	onChange: (val: SelectOptionType) => void;
	responsive?: boolean;
	extraSmall?: boolean;
}) {
	return (
		<Select
			{...props}
			styles={xStylesOrder}
			placeholder={props.placeholder}
			isSearchable={props.isSearchable}
		/>
	);
}

export function SmSelectSearchBoxFinan(props: {
	isSearchable?: boolean;
	className?: string;
	id?: string;
	placeholder?: string;
	options: SelectOptionType[];
	value: SelectOptionType;
	onChange: (val: SelectOptionType) => void;
	responsive?: boolean;
	extraSmall?: boolean;
}) {
	return (
		<Select
			{...props}
			styles={StylesFinan}
			placeholder={props.placeholder}
			isSearchable={props.isSearchable}
		/>
	);
}

export function SmSelectSearchBoxFilter(props: {
	isSearchable?: boolean;
	className?: string;
	id?: string;
	placeholder?: string;
	options: SelectOptionType[];
	value: SelectOptionType;
	onChange: (val: SelectOptionType) => void;
	responsive?: boolean;
	extraSmall?: boolean;
}) {
	return (
		<Select
			{...props}
			styles={props.responsive ? (props.extraSmall ? xsStylesResponsive : smStylesResponsive) : xStylesOrder}
			placeholder={props.placeholder}
			isSearchable={props.isSearchable}
		/>
	);
}
