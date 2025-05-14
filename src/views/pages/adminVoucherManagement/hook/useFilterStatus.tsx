import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ActiveType, ActiveTypeMap } from "../../../../models/Service";
import { truncate } from "fs/promises";
export const userStatusList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: "Hoạt động",
		value: "true",
		object: "",
	},
	{ label: "Không hoạt động", value: "false", object: "" },
];

export default function useFilterStatus() {
	const { filterActive } = useCommonListFunctions();

	const filterInitial = (listVal: SelectOptionType[], compareVal: string) => {
		const result = listVal.filter((item) => {
			return item.value === compareVal;
		});
		if (result) return result[0];
		else return listVal[0];
	};

	const [activeSelected, setActiveSelected] = useState<SelectOptionType>(() =>
		filterInitial(userStatusList, filterActive?.toString() || "")
	);
	return {
		activeSelected,
		setActiveSelected,
	};
}

export function useStatusFilter() {
	const { filterActive, doFilterActive } = useCommonListFunctions();
	const initialStatus = filterActive ? filterActive.toString() : "";
	const [statusSelected, setStatusSelected] = useState<SelectOptionType>(
		() => userStatusList.find((item) => item.value === initialStatus) || userStatusList[0]
	);
	const handleFilter = (value: string) => {
		setStatusSelected(userStatusList.find((item) => item.value == value) || userStatusList[0]);
		if (doFilterActive) {
			doFilterActive(value);
		}
	};
	return { statusSelected, handleFilter };
}
