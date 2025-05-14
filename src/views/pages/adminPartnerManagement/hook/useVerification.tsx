import { useState, useEffect, useContext } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { StaffBackToWork, VerificationStaffService } from "../../../../services/StaffService";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { VerificationStaffServiceHR } from "../../../../services/HRService";
import { AdminPartnerDetailManagementContext } from "../../partnerDetail/PartnerDetail";

export default function useVerification(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerManagementContext);
	const ctr = useContext(AdminPartnerDetailManagementContext);

	const doVerification = async (id: number, validationStatus: number) => {
		try {
			(ctx?.isHR || ctr?.isHR) ? 
			await VerificationStaffServiceHR(id, validationStatus)
			:
			await VerificationStaffService(id, validationStatus);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		doVerification,
	};
}
