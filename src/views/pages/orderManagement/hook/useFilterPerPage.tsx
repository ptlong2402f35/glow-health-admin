import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import { OrderStatus, OrderStatusLabelMapv2 } from "../../../../models/Order";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { PERPAGE } from "./useGetListHook";

export const perPageList: SelectOptionType[] = [
	{ label: "20", value: "20", object: "" },
	{ label: "50", value: "50", object: "" },
	{ label: "100", value: "100", object: "" },
];

export default function useFilterPerPage() {
	const { filterPerPage } = useCommonListFunctions();

	const filterInitial = (listVal: SelectOptionType[], compareVal: string) => {
		const result = listVal.filter((item) => {
			return item.value === compareVal;
		});
		if (result) return result[0];
		else return listVal[0];
	};

	const [perPageSelected, setPerPageSelected] = useState<SelectOptionType>(() =>
		filterInitial(perPageList, (filterPerPage || PERPAGE.PerPage).toString())
	);
	return {
		perPageSelected,
		setPerPageSelected,
	};
}
