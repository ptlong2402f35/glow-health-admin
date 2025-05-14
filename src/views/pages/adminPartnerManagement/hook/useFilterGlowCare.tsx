import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { CareTypeMap, CareType, IdentifTypeMap, IdentifyType } from "../../../../models/Staff";
export const useGlowCareList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: CareTypeMap.get(CareType.UnActive) || "",
		value: CareType.UnActive.toString(),
		object: "",
	},
	{
		label: CareTypeMap.get(CareType.Active) || "",
		value: CareType.Active.toString(),
		object: "",
	},
	{
		label: CareTypeMap.get(CareType.Block) || "",
		value: CareType.Block.toString(),
		object: "",
	},
];

export function useFilterGlowCare() {
	const { filterGlowCare, doFilterGlowCare } = useCommonListFunctions();
	const initialStatus = filterGlowCare ? filterGlowCare.toString() : "";
	const [glowCareSelected, setGlowCareSelected] = useState<SelectOptionType>(
		() => useGlowCareList.find((item) => item.value === initialStatus) || useGlowCareList[0]
	);

	useEffect(() => {
		setGlowCareSelected(
			useGlowCareList.find((item) => item.value === filterGlowCare?.toString()) || useGlowCareList[0]
		);
	}, [filterGlowCare]);

	const handleFilterGlowCare = (value: string) => {
		setGlowCareSelected(useGlowCareList.find((item) => item.value === value) || useGlowCareList[0]);
		if (doFilterGlowCare) {
			doFilterGlowCare(value);
		}
	};

	return { glowCareSelected, handleFilterGlowCare };
}
