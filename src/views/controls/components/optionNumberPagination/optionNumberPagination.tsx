import React from "react";
import Select, { SelectOptionType } from "react-select";

const customStyles = {
	singleValue: (provided?: any | null, state?: any | null) => ({
		...provided,
		color: "var(--text-color0)",
	}),
	valueContainer: (provided?: any | null, state?: any | null) => ({
		...provided,
		// padding: "12px 20px 12px 20px",
		fontFamily: "SF-Pro-Display",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: "14px",
		lineHeight: "19px",
		color: "var(--text-color0)",
		height: "32px",
		// "@media screen and (max-width: 768px)": {
		// 	padding: "11px 20px 11px 20px",
		// 	height: "45px",
		// },
	}),
	control: (provided?: any | null, state?: any | null) => ({
		...provided,
		width: "70px",
		background: "#F8F8F9",
		// border-color: "#fff",
		border: "1px solid #fff",
		// fontSize: "14px",
		// borderRadius: "100px",
	}),
	indicatorSeparator: () => ({
		width: "0px",
	}),
};
export default function OptionNumberPaginationBox(props: {
	options: SelectOptionType[];
	value: SelectOptionType;
	placeholder?: string;
	setValue: (val: SelectOptionType) => void;
	isSearchable?: boolean;
}) {
	return (
		<Select
			{...props}
			styles={customStyles}
			isSearchable={props.isSearchable}
			value={props.value}
			onChange={props.setValue}
		/>
	);
}
