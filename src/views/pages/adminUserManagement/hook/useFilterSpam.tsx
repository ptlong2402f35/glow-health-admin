import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { Lunisolar, LunisolarMap, SpamType, SpamTypeMap } from "../../../../models/User";
export const userSpamList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: SpamTypeMap.get(SpamType.Positive) || "",
		value: SpamType.Positive.toString(),
		object: "",
	},
	{ label: SpamTypeMap.get(SpamType.Minus) || "", value: SpamType.Minus.toString(), object: "" },
];

export function useFilterSpam() {
	const { filterSpam, doFilterSpam } = useCommonListFunctions();
	const initialStatus = filterSpam ? filterSpam.toString() : "";
	const [spamSelected, setSpamSelected] = useState<SelectOptionType>(
		() => userSpamList.find((item) => item.value === initialStatus) || userSpamList[0]
	);

	useEffect(() => {
		setSpamSelected(userSpamList.find((item) => item.value === filterSpam?.toString()) || userSpamList[0]);
	}, [filterSpam]);

	const handleFilterSpam = (value: string) => {
		setSpamSelected(userSpamList.find((item) => item.value === value) || userSpamList[0]);
		if (doFilterSpam) {
			doFilterSpam(value);
		}
	};

	return { spamSelected, handleFilterSpam };
}
