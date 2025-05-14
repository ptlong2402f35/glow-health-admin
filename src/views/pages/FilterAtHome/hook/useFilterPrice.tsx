import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ActiveType, ActiveTypeMap } from "../../../../models/Service";
import { truncate } from "fs/promises";

export const userPriceList: SelectOptionType[] = [
	{ label: "Tất cả", value: "0", object: "" },
	{ label: "Dưới 300K", value: "1", object: "" },
	{ label: "300K - 500K", value: "2", object: "" },
	{ label: "500K - 1000K", value: "3", object: "" },
	{ label: "Trên 1000K", value: "4", object: "" },
];

export const userPriceListEN: SelectOptionType[] = [
	{ label: "All", value: "0", object: "" },
	{ label: "Under 300K", value: "1", object: "" },
	{ label: "300K - 500K", value: "2", object: "" },
	{ label: "500K - 1000K", value: "3", object: "" },
	{ label: "Above 1000K", value: "4", object: "" },
];

export const userPriceListKR: SelectOptionType[] = [
	{ label: "모두", value: "0", object: "" },
	{ label: "300K 미만", value: "1", object: "" },
	{ label: "300K - 500K", value: "2", object: "" },
	{ label: "500K - 1000K", value: "3", object: "" },
	{ label: "1000K 이상", value: "4", object: "" },
];

export function usePriceFilter() {
	const { filterPrice, doFilterPrice } = useCommonListFunctions();
	const initialStatus = filterPrice ? filterPrice.toString() : "";
	const [priceSelected, setPriceSelected] = useState<SelectOptionType>(
		() => userPriceList.find((item) => item.value === initialStatus) || userPriceList[0]
	);
	const handlePriceFilter = (value: string) => {
		setPriceSelected(userPriceList.find((item) => item.value === value) || userPriceList[0]);
		if (doFilterPrice) {
			doFilterPrice(value === "0" ? "" : value);
		}
	};
	return { priceSelected, handlePriceFilter };
}
