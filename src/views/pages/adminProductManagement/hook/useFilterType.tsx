import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ActiveType, ActiveTypeMap, ScopeType, ScopeTypeMap } from "../../../../models/Service";
export const userTypeList: SelectOptionType[] = [
	{ label: "Tất cả", value: "1;2;3", object: "" },
	{
		label: ScopeTypeMap.get(ScopeType.IndividualStaff) || "",
		value: "1;2",
		object: "",
	},
	{ label: ScopeTypeMap.get(ScopeType.StationStaff) || "", value: "2;3", object: "" },
];

export function useTypeFilter() {
	const { filterVerification, doFilterVerification } = useCommonListFunctions();
	const initialStatus = filterVerification ? filterVerification.toString() : "";
	const [typeSelected, setTypeSelected] = useState<SelectOptionType>(
		() => userTypeList.find((item) => item.value === initialStatus) || userTypeList[0]
	);

	const handleTypeFilter = (value: string) => {
		setTypeSelected(userTypeList.find((item) => item.value === value) || userTypeList[0]);
		if (doFilterVerification) {
			doFilterVerification(value);
		}
	};

	return { typeSelected, handleTypeFilter };
}
