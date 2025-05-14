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

export default function useFilterStatus() {
	const { filterStates } = useCommonListFunctions();

	const filterInitial = (listVal: SelectOptionType[], compareVal: string) => {
		const result = listVal.filter((item) => {
			return item.value === compareVal;
		});
		if (result) return result[0];
		else return listVal[0];
	};

	const [statusSelected, setStatusSelected] = useState<SelectOptionType>(() =>
		filterInitial(userStatusList, filterStates?.toString() || "")
	);
	return {
		statusSelected,
		setStatusSelected,
	};
}
