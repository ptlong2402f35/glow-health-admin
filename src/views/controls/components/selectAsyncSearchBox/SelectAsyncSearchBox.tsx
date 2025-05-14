import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AsyncSelect, { SelectAsyncOptionType } from "react-select/async";
import { CustomOutlinedInput } from "../../../pages/MapSpa/styled/MapStyled";
import { SelectMapWrap } from "../../../pages/FilterAtHome/styled/ListStaffAtHome";

const DefaultOption = {
	value: "0",
	label: "Tất cả",
	object: null,
};

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

const customStylesMap = {
	container: (provided: any) => ({
	  ...provided,
	  width: "100%",
	  minWidth:"100px",
	}),
	control: (provided: any) => ({
	  ...provided,
	  minHeight: "28px",
	  height: "28px",
	  borderRadius: "100px",
	  border: "1px solid rgb(255, 255, 255)",
	  boxShadow: "rgba(8, 13, 8, 0.08) 0px 2px 5.6px 0px",
	}),
	valueContainer: (provided: any) => ({
	  ...provided,
	  padding: "0 8px",
	  height: "28px",
	  cursor: "pointer",
	  pointerEvents: "auto",
	}),
	input: (provided: any) => ({
	  ...provided,
	  margin: "0px",
	  padding: "0px",
	  height: "28px",
	  display: "none",
	}),
	indicatorSeparator: () => ({
	  display: "none",
	}),
	indicatorsContainer: (provided: any) => ({
	  ...provided,
	  height: "28px",
	}),
	dropdownIndicator: (provided: any) => ({
	  ...provided,
	  padding: "4px",
	}),
	menu: (provided: any) => ({
	  ...provided,
	  borderRadius: "8px",
	  boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
	  top: "28px",
	}),
  };
  

export function SmSelectAsyncSearchBox(props: {
	className?: string;
	selectedId?: string | number;
	onChange?: (val: string | number, item: SelectAsyncOptionType) => void;
	responsive?: boolean;
	extraSmall?: boolean;
	loadOptionPromise?: (input: string, setOpts: (opts: SelectAsyncOptionType[]) => void) => void;
}) {
	const [options, setOptions] = useState<SelectAsyncOptionType[]>([DefaultOption]);
	const [selected, setSelected] = useState<SelectAsyncOptionType | null>();

	const loadOptions = (inputValue: string) => props.loadOptionPromise?.(inputValue, setOptions);

	const onSelectChange = (item: any) => {
		if (item?.value === DefaultOption.value) {
			props.onChange?.("", DefaultOption);
		} else {
			props.onChange?.(item?.value, item);
		}
	};

	const autoSelect = () => {
		if (!props.selectedId) {
			setSelected(DefaultOption);
			return;
		}

		var find = options.find((item) => item.value === props.selectedId);
		if (find) setSelected(find);
		else setSelected(null);
	};

	useEffect(() => {
		autoSelect();
	}, [props.selectedId, options]);

	return (
		<AsyncSelect
			{...props}
			styles={props.responsive ? (props.extraSmall ? xsStylesResponsive : smStylesResponsive) : smStyles}
			value={(selected && selected) || undefined}
			loadOptions={loadOptions}
			defaultOptions
			onChange={onSelectChange}
			noOptionsMessage={() => "Không có dữ liệu hiển thị"}
		/>
	);
}


// export function SmSelectTagMap(props: {
// 	className?: string;
// 	selectedId?: string | number;
// 	onChange?: (val: string | number, item: SelectAsyncOptionType) => void;
// 	responsive?: boolean;
// 	extraSmall?: boolean;
// 	loadOptionPromise?: (input: string, setOpts: (opts: SelectAsyncOptionType[]) => void) => void;
// }) {
// 	const [options, setOptions] = useState<SelectAsyncOptionType[]>([DefaultOption]);
// 	const [selected, setSelected] = useState<SelectAsyncOptionType | null>();

// 	const loadOptions = (inputValue: string) => props.loadOptionPromise?.(inputValue, setOptions);

// 	const onSelectChange = (item: any) => {
// 		if (item?.value === DefaultOption.value) {
// 			props.onChange?.("", DefaultOption);
// 		} else {
// 			props.onChange?.(item?.value, item);
// 		}
// 	};

// 	const autoSelect = () => {
// 		if (!props.selectedId) {
// 			setSelected(DefaultOption);
// 			return;
// 		}

// 		var find = options.find((item) => item.value === props.selectedId);
// 		if (find) setSelected(find);
// 		else setSelected(null);
// 	};

// 	useEffect(() => {
// 		autoSelect();
// 	}, [props.selectedId, options]);

// 	return (
// 		<AsyncSelect
// 			{...props}
// 			styles={customStylesMap}
// 			value={(selected && selected) || undefined}
// 			loadOptions={loadOptions}
// 			defaultOptions
// 			onChange={onSelectChange}
// 			noOptionsMessage={() => "Không có dữ liệu hiển thị"}
// 		/>
// 	);
// }



// import { useEffect, useState } from "react";
// import {
// 	FormControl,
// 	InputLabel,
// 	Select,
// 	MenuItem,
// 	SelectChangeEvent,
// } from "@mui/material";

export function SmSelectTagMap(props: {
	className?: string;
	selectedId?: string | number;
	onChange?: (val: string | number, item: SelectAsyncOptionType) => void;
	responsive?: boolean;
	extraSmall?: boolean;
	loadOptionPromise?: (
		input: string,
		setOpts: (opts: SelectAsyncOptionType[]) => void
	) => void;
	name: string;
}) {
	const [options, setOptions] = useState<SelectAsyncOptionType[]>([]);
	const [selected, setSelected] = useState<string>("");

	useEffect(() => {
		props.loadOptionPromise?.("", (opts) => {
			setOptions(opts);
		});
	}, []);

	useEffect(() => {
		if (props.selectedId !== undefined) {
			setSelected(props.selectedId.toString());
		}
	}, [props.selectedId]);

	const handleChange = (event: any) => {
		const value = event.target.value;
		setSelected(value);

		const selectedItem = options.find(
			(item) => item.value.toString() === value
		);
		if (selectedItem) {
			props.onChange?.(selectedItem.value, selectedItem);
		}
	};

	return (
		<SelectMapWrap>
		<FormControl fullWidth className={props.className} variant="outlined">
			<Select
				value={selected}
				onChange={handleChange}
				input={<CustomOutlinedInput />}
		
			>

				{options.map((opt) => (
					<MenuItem key={opt.value} value={opt.value.toString()}>
						{opt.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
		</SelectMapWrap>
	);
}
