import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { IdentifTypeMap, IdentifyType } from "../../../../models/Staff";
export const useIdentifyList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: IdentifTypeMap.get(IdentifyType.EXIST) || "",
		value: IdentifyType.EXIST.toString(),
		object: "",
	},
	{
		label: IdentifTypeMap.get(IdentifyType.UNEXIST) || "",
		value: IdentifyType.UNEXIST.toString(),
		object: "",
	},
];

export function useIdentifyFilter() {
	const { filterIdentify, doFilterIdentify } = useCommonListFunctions();
	const initialStatus = filterIdentify ? filterIdentify.toString() : "";
	const [IdentifySelected, setIdentifySelected] = useState<SelectOptionType>(
		() => useIdentifyList.find((item) => item.value === initialStatus) || useIdentifyList[0]
	);

	useEffect(() => {
		setIdentifySelected(
			useIdentifyList.find((item) => item.value === filterIdentify?.toString()) || useIdentifyList[0]
		);
	}, [filterIdentify]);

	const handleFilterIdentify = (value: string) => {
		setIdentifySelected(useIdentifyList.find((item) => item.value === value) || useIdentifyList[0]);
		if (doFilterIdentify) {
			doFilterIdentify(value);
		}
	};

	return { IdentifySelected, handleFilterIdentify };
}
