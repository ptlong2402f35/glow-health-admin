import React, { useContext, useEffect, useState } from "react";
import { SmSelectAsyncSearchBox } from "../../../controls/components/selectAsyncSearchBox/SelectAsyncSearchBox";
import { SelectAsyncOptionType } from "react-select/async";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { Tags } from "../../../../models/Staff";
import useStaticContext from "../../../hooks/useStaticContext";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { CustomOutlinedInput } from "../styled/MapStyled";
import { SelectMapWrap } from "../../FilterAtHome/styled/ListStaffAtHome";
export function FilterTagControl(props: {
	filterTagId?: number;
	doChangeTagId?: (value: any) => void;
	listOption: Tags[];
}) {
	const [selectedId, setSelectedId] = useState<number>(props.filterTagId || 0);


		useEffect(() => {
			setSelectedId(props.filterTagId || 0);
		}, [props.filterTagId]);

	return (
		<SmSelectTagMap
			selectedId={selectedId}
			onChange={(value: any) => {
				setSelectedId(value);
				props.doChangeTagId?.(value);
			}}
			options={props.listOption}
		/>
	);
}


export function SmSelectTagMap(props: {
	className?: string;
	selectedId?: string | number;
	onChange?: (val: string | number, item: any) => void;
	options: Tags[];
}) {
	const handleChange = (e: any) => {
		const value = e.target.value;

		if (value === "") {
			props.onChange?.("", { id: 0, name: "Tất cả" });
			return;
		}

		const selectedItem = props.options.find((opt) => opt.id.toString() === value);
		props.onChange?.(value, selectedItem || { id: 0, name: "" });
	};

	return (
		<SelectMapWrap>
		<FormControl fullWidth className={props.className} variant="outlined">
			<Select
				displayEmpty
				value={
					props.selectedId !== undefined && props.selectedId !== null && props.selectedId !== 0
						? props.selectedId.toString()
						: ""
				}
				onChange={handleChange}
				input={<CustomOutlinedInput />}
			>
				<MenuItem value="">
				Lọc Tag
				</MenuItem>
				{props.options?.map((opt) => (
					<MenuItem key={opt.id.toString()} value={opt.id.toString()}>
						{opt.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
		</SelectMapWrap>
	);
}
