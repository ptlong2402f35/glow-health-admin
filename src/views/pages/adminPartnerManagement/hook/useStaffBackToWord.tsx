import { useState, useEffect, useContext } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { StaffBackToWork } from "../../../../services/StaffService";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { StaffBackToWorkHR } from "../../../../services/HRService";

export default function useStaffBackToWord(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
		const ctx = useContext(AdminPartnerManagementContext);
	const loadStaffBackToWork = async (id: number,  active: boolean) => {
		try {
			await StaffBackToWork(id, active);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		loadStaffBackToWork,
	};
}
