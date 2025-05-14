import { useContext, useState } from "react";
import { updateStaffIdentify } from "../../../../services/StaffService";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { updateStaffIdentifyHR } from "../../../../services/HRService";

export const IdentifyFlag = {
	Idle: 1,
	Loading: 2,
	Success: 3,
	Failed: 4,
};

export default function useUpdateIdentify(props: {
	staffId: number;
	birthday?: string | null;
	identifyCard?: string | null;
	dateOfIssueIdentify?: string | null;
	placeOfIssueIdentify?: string | null;
	identifyAddress?: string | null;
	identifyName?: string | null;

}) {
	const [flag, setFlag] = useState(IdentifyFlag.Idle);
	const ctx = useContext(AdminPartnerManagementContext);

	const update = async () => {
		setFlag(IdentifyFlag.Loading);
		try {
			ctx?.isHR ? 
			await updateStaffIdentifyHR(props.staffId, {
				birthDay: props.birthday,
				identifyCard: props.identifyCard,
				dateOfIssueIdentify: props.dateOfIssueIdentify,
				placeOfIssueIdentify: props.placeOfIssueIdentify,
				identifyAddress: props.identifyAddress,
				identifyName: props.identifyName,
			})
			:
			await updateStaffIdentify(props.staffId, {
				birthDay: props.birthday,
				identifyCard: props.identifyCard,
				dateOfIssueIdentify: props.dateOfIssueIdentify,
				placeOfIssueIdentify: props.placeOfIssueIdentify,
				identifyAddress: props.identifyAddress,
				identifyName: props.identifyName,
			});

			setFlag(IdentifyFlag.Success);
		} catch (err) {
			console.error(err);
			setFlag(IdentifyFlag.Failed);
		}
	};

	return {
		flag,
		update,
	};
}
