import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { OnlineType, OnlineTypeMap } from "../../../../models/Staff";
export const userOnlineList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: OnlineTypeMap.get(OnlineType.ONLINE) || "",
		value: OnlineType.ONLINE.toString(),
		object: "",
	},
	{ label: OnlineTypeMap.get(OnlineType.OFFLINE) || "", value: OnlineType.OFFLINE.toString(), object: "" },
];

export function useOnlineFilter() {
	const { filterOnline, doFilterOnline } = useCommonListFunctions();
	const initialStatus = filterOnline ? filterOnline.toString() : "";
	const [onlineSelected, setOnlineSelected] = useState<SelectOptionType>(
		() => userOnlineList.find((item) => item.value === initialStatus) || userOnlineList[0]
	);

	useEffect(() => {
		setOnlineSelected(userOnlineList.find((item) => item.value === filterOnline?.toString()) || userOnlineList[0]);
	}, [filterOnline]);

	const handleFilterOnline = (value: string) => {
		setOnlineSelected(userOnlineList.find((item) => item.value === value) || userOnlineList[0]);
		if (doFilterOnline) {
			doFilterOnline(value);
		}
	};

	return { onlineSelected, handleFilterOnline };
}
