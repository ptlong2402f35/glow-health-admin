import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { ValidateStatusType, ValidateStatusTypeMap } from "../../../../models/Staff";
export const useVerificationList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: ValidateStatusTypeMap.get(ValidateStatusType.Verification) || "",
		value: ValidateStatusType.Verification.toString(),
		object: "",
	},
	{
		label: ValidateStatusTypeMap.get(ValidateStatusType.NotVerified) || "",
		value: ValidateStatusType.NotVerified.toString(),
		object: "",
	},
];

export function useVerificationFilter() {
	const { filterVerification, doFilterVerification } = useCommonListFunctions();
	const initialStatus = filterVerification ? filterVerification.toString() : "";
	const [verificationSelected, setVerificationSelected] = useState<SelectOptionType>(
		() => useVerificationList.find((item) => item.value === initialStatus) || useVerificationList[0]
	);

	useEffect(() => {
		setVerificationSelected(
			useVerificationList.find((item) => item.value === filterVerification?.toString()) || useVerificationList[0]
		);
	}, [filterVerification]);

	const handleFilterVerification = (value: string) => {
		setVerificationSelected(useVerificationList.find((item) => item.value === value) || useVerificationList[0]);
		if (doFilterVerification) {
			doFilterVerification(value);
		}
	};

	return { verificationSelected, handleFilterVerification };
}
