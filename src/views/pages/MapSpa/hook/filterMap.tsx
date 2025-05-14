import React, { useContext, useEffect, useState } from "react";
import { SmSelectAsyncSearchBox, SmSelectTagMap } from "../../../controls/components/selectAsyncSearchBox/SelectAsyncSearchBox";
import { TagMap } from "../../../../services/StaffService";
import { SelectAsyncOptionType } from "react-select/async";
import { SelectOptionType } from "react-select";
export function FilterMap(props: {
	filterId?: number;
	doChangeId?: (value: any) => void;
	options: SelectOptionType[];
	name: string;
}) {
	const [selectedId, setSelectedId] = useState<number>(props.filterId || 0);

	useEffect(() => {
		setSelectedId(props.filterId || 0);
	}, [props.filterId]);

	const loadTagList = async (input: string, setOpts: (val: SelectAsyncOptionType[]) => void) => {
		try {
			if (props.options) {
				const selectOpts = convertToSelectOptions(props.options);
				const filteredOptions = selectOpts.filter((option: any) =>
					option.label.toLowerCase().includes(input.toLowerCase())
				);
				const clearOption = { label: props.name ||"Tất cả", value: "0" };
				const filteredWithoutFirst = filteredOptions.slice(1);
setOpts?.([clearOption, ...filteredWithoutFirst]);
return [clearOption, ...filteredWithoutFirst];

			}
		} catch (err) {
			console.error(err);
		}
		setOpts([]);
		return;
	};

	return (
		<SmSelectTagMap
			selectedId={selectedId}
			onChange={(value: any) => {
				setSelectedId(value);
				props.doChangeId?.(value);
			}}
			loadOptionPromise={loadTagList}
			name={props.name}
		/>
	);
}


export function convertToSelectOptions(data: any) {
	let selectOptions = data.map((item: any) => ({
		value: item.value,
		label: item.label,
		object: "",
	}));
	return selectOptions;
}
