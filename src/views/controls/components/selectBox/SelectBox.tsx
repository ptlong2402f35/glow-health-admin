import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export type SelectBoxOptionType = { value: any; label: string };

const useStyles = makeStyles((theme) => ({
	formControl: {
		width: "100%",
	},
	select: {
		width: "100%",
		fontFamily: "SF-Pro-Display",
		fontSize: "14px",
		lineHeight: "20px",
		color: "var(--text-color0)",
		height: "55px",
		borderRadius: "100px",
		borderColor: "var(--border-color)",
		"@media(max-width: 768px)": {
			height: "45px",
		},
	},
	baseInput: {
		borderRadius: "100px !important",
		padding: "15px 50px 15px 20px",
		lineHeight: "20px",
		"@media(max-width: 768px)": {
			padding: "10px 50px 10px 20px",
		},
	},
	option: {
		fontFamily: "SF-Pro-Display",
		fontSize: "14px",
		lineHeight: "19px",
		color: "var(--text-color0)",
	},
	icon: {
		marginTop: "0px",
		marginRight: "7px",
		fontSize: "24px !important",
	},
}));

export default function SelectBox(props: {
	options: SelectBoxOptionType[];
	value: any;
	onChange: (val: any) => void;
	disabled?: boolean;
	displayEmpty?: boolean;
	renderValue?: (val: any) => any;
	customStyle?: () => any;
}) {
	const classes = props.customStyle?.() || useStyles();

	return (
		<FormControl
			variant="outlined"
			className={classes.formControl}>
			<Select
				className={classes.select}
				classes={{ select: classes.baseInput, iconOutlined: classes.icon }}
				value={props.value}
				onChange={(e) => props.onChange(e.target.value)}
				disabled={props.disabled}
				displayEmpty={props.displayEmpty}
				renderValue={props.renderValue}>
				{props.options.map((item, idx) => (
					<MenuItem
						key={idx}
						value={item.value}
						className={classes.option}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

const useSmStyles = makeStyles((theme) => ({
	formControl: {
		width: "100%",
	},
	select: {
		width: "100%",
		fontFamily: "SF-Pro-Display",
		fontSize: "14px",
		lineHeight: "20px",
		color: "var(--text-color0)",
		height: "35px",
		borderRadius: "100px",
		borderColor: "var(--border-color)",
	},
	baseInput: {
		borderRadius: "100px !important",
		padding: "6px 50px 6px 15px",
		lineHeight: "20px",
	},
	option: {
		fontFamily: "SF-Pro-Display",
		fontSize: "14px",
		lineHeight: "19px",
		color: "var(--text-color0)",
	},
	icon: {
		marginTop: "0px",
		marginRight: "7px",
		fontSize: "24px !important",
	},
}));

/**
 * items: [{ value, text }]
 * getter: (item) => { value, text }
 * value
 * onChange(val)
 * customStyle
 * className
 * disabled
 */
export function SmSelectBox(props: {
	options: SelectBoxOptionType[];
	value: any;
	onChange: (val: any) => void;
	disabled?: boolean;
	displayEmpty?: boolean;
	renderValue?: (val: any) => any;
	customStyle?: () => any;
}) {
	const classes = props.customStyle?.() || useSmStyles();

	return (
		<FormControl
			variant="outlined"
			className={classes.formControl}>
			<Select
				className={classes.select}
				classes={{ select: classes.baseInput, iconOutlined: classes.icon }}
				value={props.value}
				onChange={(e) => props.onChange(e.target.value)}
				disabled={props.disabled}>
				{props.options.map((item, idx) => (
					<MenuItem
						key={idx}
						value={item.value}
						className={classes.option}>
						{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export function SmMultipleSelectBox(props: {
	options: SelectBoxOptionType[];
	value: any[];
	onChange: (val: any) => void;
	disabled?: boolean;
	displayEmpty?: boolean;
	renderValue?: (val: any) => any;
	customStyle?: () => any;
}) {
	const classes = props.customStyle?.() || useSmStyles();

	const renderFunc = (selected: any) => {
		const tmpList: any[] = [];
		selected.forEach((item: any) => {
			props.options.forEach((opt) => {
				if (opt.value === item) tmpList.push(opt.label);
			});
		});
		if (tmpList.length) return tmpList.join("; ");
		return "";
	};

	const onHandleChange = (val: any[]) => {
		const valueOpts: SelectBoxOptionType[] = val.map((item) => {
			if (typeof item === "string") {
				return item;
			}
			return item?.value || "";
		});
		const result = [...valueOpts];

		props.onChange(result);
	};

	return (
		<FormControl
			variant="outlined"
			className={classes.formControl}>
			<Select
				className={classes.select}
				classes={{ select: classes.baseInput, iconOutlined: classes.icon }}
				value={props.value}
				onChange={(e) => {
					onHandleChange(e.target.value as any[]);
				}}
				disabled={props.disabled}
				multiple
				renderValue={(selected: any) => renderFunc(selected)}>
				{props.options.map((item, idx) => (
					<MenuItem
						key={idx}
						value={item.value}
						className={classes.option}>
						<input
							type="checkbox"
							checked={props.value.indexOf(item.value) > -1}
						/>
						&nbsp;{item.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
