import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ActiveType, ActiveTypeMap } from "../../../../models/User";
export const userStatusList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: ActiveTypeMap.get(ActiveType.ACCTIVE) || "",
		value: ActiveType.ACCTIVE.toString(),
		object: "",
	},
	{ label: ActiveTypeMap.get(ActiveType.UNACCTIVE) || "", value: ActiveType.UNACCTIVE.toString(), object: "" },
];

export function useBanerFilter() {
	const { filterActive, doFilterActive } = useCommonListFunctions();
	const initialStatus = filterActive ? filterActive.toString() : "";
	const [statusSelected, setStatusSelected] = useState<SelectOptionType>(
		() => userStatusList.find((item) => item.value === initialStatus) || userStatusList[0]
	);

	useEffect(() => {
		setStatusSelected(userStatusList.find((item) => item.value === filterActive?.toString()) || userStatusList[0]);
	}, [filterActive]);

	const handleFilterBaner = (value: string) => {
		setStatusSelected(userStatusList.find((item) => item.value === value) || userStatusList[0]);
		if (doFilterActive) {
			doFilterActive(value);
		}
	};

	return { statusSelected, handleFilterBaner };
}
