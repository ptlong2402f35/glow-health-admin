import * as React from "react";
import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { CareTypeMap, CareType, IdentifTypeMap, IdentifyType } from "../../../../models/Staff";
export const useCertificateList: SelectOptionType[] = [
	{ label: "Tất cả", value: "", object: "" },
	{
		label: IdentifTypeMap.get(IdentifyType.EXIST) || "",
		value: IdentifyType.EXIST.toString(),
		object: "",
	},
	{
		label: IdentifTypeMap.get(IdentifyType.UNEXIST) || "",
		value: IdentifyType.UNEXIST.toString(),
		object: "",
	},
];

export function useFilterCertificate() {
	const { filterCertificate, doFilterCertificate } = useCommonListFunctions();
	const initialStatus = filterCertificate ? filterCertificate.toString() : "";
	const [certificateSelected, setCertificateSelected] = useState<SelectOptionType>(
		() => useCertificateList.find((item) => item.value === initialStatus) || useCertificateList[0]
	);

	useEffect(() => {
		setCertificateSelected(
			useCertificateList.find((item) => item.value === filterCertificate?.toString()) || useCertificateList[0]
		);
	}, [filterCertificate]);

	const handleFilterCertificate = (value: string) => {
		setCertificateSelected(useCertificateList.find((item) => item.value === value) || useCertificateList[0]);
		if (doFilterCertificate) {
			doFilterCertificate(value);
		}
	};

	return { certificateSelected, handleFilterCertificate };
}
