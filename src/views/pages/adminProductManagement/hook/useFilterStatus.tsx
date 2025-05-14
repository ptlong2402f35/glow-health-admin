import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ActiveType, ActiveTypeMap } from "../../../../models/Service";
export const userStatusList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: ActiveTypeMap.get(ActiveType.ACCTIVE) || "",
		value: ActiveType.ACCTIVE.toString(),
		object: "",
	},
	{ label: ActiveTypeMap.get(ActiveType.UNACCTIVE) || "", value: ActiveType.UNACCTIVE.toString(), object: "" },
];

export function useStatusFilter() {
	const { filterStates, doFilterStates } = useCommonListFunctions();
	const initialStatus = filterStates ? filterStates.toString() : "";
	const [statusSelected, setStatusSelected] = useState<SelectOptionType>(
		() => userStatusList.find((item) => item.value === initialStatus) || userStatusList[0]
	);

	const handleFilter = (value: string) => {
		setStatusSelected(userStatusList.find((item) => item.value === value) || userStatusList[0]);
		if (doFilterStates) {
			doFilterStates(value);
		}
	};

	return { statusSelected, handleFilter };
}
