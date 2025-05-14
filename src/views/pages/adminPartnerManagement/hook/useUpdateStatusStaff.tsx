import { useState, useEffect, useContext } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { StaffUpdateStatus } from "../../../../services/StaffService";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { StaffUpdateStatusHR } from "../../../../services/HRService";

export default function useUpdateStatusStaff(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerManagementContext);
	const loadUpdateStatusStaff = async (id: number) => {
		try {
			ctx?.isHR ? await StaffUpdateStatusHR(id)
			: await StaffUpdateStatus(id);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		loadUpdateStatusStaff,
	};
}
