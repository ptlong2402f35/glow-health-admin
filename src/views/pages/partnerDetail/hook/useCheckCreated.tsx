import { useContext, useState } from "react";
import { CheckCreatedStaff } from "../../../../services/StaffService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { Check } from "../../../../models/StaffDetail";
import { AdminPartnerDetailManagementContext } from "../PartnerDetail";
import { CheckCreatedStaffHR } from "../../../../services/HRService";
import { AdminPartnerCreatedManagementContext } from "../CreatedParnerDetail";

export default function useCheckCreated() {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerCreatedManagementContext);
	const useCheck = async (
		phone?: string | null | undefined,
		setIsDisable?: (val: boolean) => void,
		onSuccess?: (data: Check) => void
	) => {
		try {
			
			const data = ctx?.isHR ? await CheckCreatedStaffHR(phone): await CheckCreatedStaff(phone) ;
			onSuccess?.(data);
		} catch {
			openAlertDialog?.(AlertType.Fail, "Vui lòng nhập số điện thoại");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		useCheck,
	};
}
