import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { Lunisolar, LunisolarMap } from "../../../../models/User";
export const userLunisolarList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: LunisolarMap.get(Lunisolar.Positive) || "",
		value: Lunisolar.Positive.toString(),
		object: "",
	},
	{ label: LunisolarMap.get(Lunisolar.Minus) || "", value: Lunisolar.Minus.toString(), object: "" },
];

export function useFilteruseFilterLunisolar() {
	const { filterLunisolar, doFilterLunisolar } = useCommonListFunctions();
	const initialStatus = filterLunisolar ? filterLunisolar.toString() : "";
	const [lunisolarSelected, setLunisolarSelected] = useState<SelectOptionType>(
		() => userLunisolarList.find((item) => item.value === initialStatus) || userLunisolarList[0]
	);

	useEffect(() => {
		setLunisolarSelected(
			userLunisolarList.find((item) => item.value === filterLunisolar?.toString()) || userLunisolarList[0]
		);
	}, [filterLunisolar]);

	const handleFilterLunisolar = (value: string) => {
		setLunisolarSelected(userLunisolarList.find((item) => item.value === value) || userLunisolarList[0]);
		if (doFilterLunisolar) {
			doFilterLunisolar(value);
		}
	};

	return { lunisolarSelected, handleFilterLunisolar };
}
