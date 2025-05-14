import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ActiveType, ActiveTypeMap, SpamType, SpamTypeMap } from "../../../../models/User";
export const userPunishList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: SpamTypeMap.get(SpamType.Positive) || "",
		value: SpamType.Positive.toString(),
		object: "",
	},
	{ label: SpamTypeMap.get(SpamType.Minus) || "", value: SpamType.Minus.toString(), object: "" },
];

export function usePunishFilter() {
	const { filterPunish, doFilterPunish } = useCommonListFunctions();
	const initialStatus = filterPunish ? filterPunish.toString() : "";
	const [punishSelected, setPunishSelected] = useState<SelectOptionType>(
		() => userPunishList.find((item) => item.value === initialStatus) || userPunishList[0]
	);

	useEffect(() => {
		setPunishSelected(userPunishList.find((item) => item.value === filterPunish?.toString()) || userPunishList[0]);
	}, [filterPunish]);

	const handleFilterPunish = (value: string) => {
		setPunishSelected(userPunishList.find((item) => item.value === value) || userPunishList[0]);
		if (doFilterPunish) {
			doFilterPunish(value);
		}
	};

	return { punishSelected, handleFilterPunish };
}
