import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ActiveType, ActiveTypeMap } from "../../../../models/Service";
import { truncate } from "fs/promises";

export const userStarList: SelectOptionType[] = [
	{ label: "Tất cả", value: "0", object: "" },
	{ label: "1 Sao", value: "1", object: "" },
	{ label: "2 Sao", value: "2", object: "" },
	{ label: "3 Sao", value: "3", object: "" },
	{ label: "4 Sao", value: "4", object: "" },
	{ label: "5 Sao", value: "5", object: "" },
];

export const userStarListEN: SelectOptionType[] = [
	{ label: "All", value: "0", object: "" },
	{ label: "1 Star", value: "1", object: "" },
	{ label: "2 Star", value: "2", object: "" },
	{ label: "3 Star", value: "3", object: "" },
	{ label: "4 Star", value: "4", object: "" },
	{ label: "5 Star", value: "5", object: "" },
];

export const userStarListKR: SelectOptionType[] = [
	{ label: "모두", value: "0", object: "" },
	{ label: "1 평가", value: "1", object: "" },
	{ label: "2 평가", value: "2", object: "" },
	{ label: "3 평가", value: "3", object: "" },
	{ label: "4 평가", value: "4", object: "" },
	{ label: "5 평가", value: "5", object: "" },
];

export function useStarFilter() {
	const { filterStar, doFilterStar } = useCommonListFunctions();
	const initialStatus = filterStar ? filterStar.toString() : "";
	const [starSelected, setStarSelected] = useState<SelectOptionType>(
		() => userStarList.find((item) => item.value === initialStatus) || userStarList[0]
	);
	const handleStarFilter = (value: string) => {
		setStarSelected(userStarList.find((item) => item.value === value) || userStarList[0]);
		if (doFilterStar) {
			doFilterStar(value === "0" ? "" : value);
		}
	};
	return { starSelected, handleStarFilter };
}
