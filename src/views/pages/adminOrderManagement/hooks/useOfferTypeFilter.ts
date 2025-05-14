import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ActiveType, ActiveTypeMap } from "../../../../models/User";
import { OfferTypeStatus, OfferTypeStatusMapv2 } from "../../../../models/Orderv2";
export const userOfferType: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: OfferTypeStatusMapv2.get(OfferTypeStatus.Often) || "",
		value: OfferTypeStatus.Often.toString(),
		object: "",
	},
	{
		label: OfferTypeStatusMapv2.get(OfferTypeStatus.Recruitment) || "",
		value: OfferTypeStatus.Recruitment.toString(),
		object: "",
	},
	{
		label: OfferTypeStatusMapv2.get(OfferTypeStatus.Accepted) || "",
		value: OfferTypeStatus.Accepted.toString(),
		object: "",
	},
	{
		label: OfferTypeStatusMapv2.get(OfferTypeStatus.UnAccepted) || "",
		value: OfferTypeStatus.UnAccepted.toString(),
		object: "",
	},
];

export function OfferTypeFilter() {
	const { filterActive, doFilterActive } = useCommonListFunctions();
	const initialStatus = filterActive ? filterActive.toString() : "";
	const [statusSelected, setStatusSelected] = useState<SelectOptionType>(
		() => userOfferType.find((item) => item.value === initialStatus) || userOfferType[0]
	);

	useEffect(() => {
		setStatusSelected(userOfferType.find((item) => item.value === filterActive?.toString()) || userOfferType[0]);
	}, [filterActive]);

	const handleFilterOfferType = (value: string) => {
		setStatusSelected(userOfferType.find((item) => item.value === value) || userOfferType[0]);
		if (doFilterActive) {
			doFilterActive(value);
		}
	};

	return { statusSelected, handleFilterOfferType };
}
