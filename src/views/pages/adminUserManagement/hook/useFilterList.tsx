import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import { OrderStatus, OrderStatusLabelMap, UserRoleLabelMap, UserRole } from "../../../../models/Order";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
export const userRoleList: SelectOptionType[] = [
	{ label: "All", value: "0", object: "" },
	{
		label: UserRoleLabelMap.get(UserRole.Admin) || "",
		value: UserRole.Admin.toString(),
		object: "",
	},
	{ label: UserRoleLabelMap.get(UserRole.Owner) || "", value: UserRole.Owner.toString(), object: "" },
	{ label: UserRoleLabelMap.get(UserRole.Staff) || "", value: UserRole.Staff.toString(), object: "" },
	{ label: UserRoleLabelMap.get(UserRole.Customer) || "", value: UserRole.Customer.toString(), object: "" },
];

export default function useFilterList() {
	const { filterUserIdString, filterRoleId } = useCommonListFunctions();

	const filterInitial = (listVal: SelectOptionType[], compareVal: string) => {
		const result = listVal.filter((item) => {
			return item.value === compareVal;
		});
		if (result) return result[0];
		else return listVal[0];
	};

	const [roleIdSelected, setRoleIdSelected] = useState<SelectOptionType>(() =>
		filterInitial(userRoleList, filterRoleId?.toString() || "")
	);
	useEffect(() => {
		setRoleIdSelected(userRoleList.find((item) => item.value === filterRoleId?.toString()) || userRoleList[0]);
	}, [filterRoleId]);
	return {
		roleIdSelected,
		setRoleIdSelected,
	};
}
