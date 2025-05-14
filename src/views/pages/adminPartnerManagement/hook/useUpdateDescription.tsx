import { useState, useEffect, useContext } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { StaffUpdateStatus, UpdateDescriptionStaffService } from "../../../../services/StaffService";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { UpdateDescriptionStaffServiceHR } from "../../../../services/HRService";

export default function useUpdateDescriptionStaff(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerManagementContext);
	const loadUpdate = async (id: number, description: string) => {
		try {
			ctx?.isHR ? 
			await UpdateDescriptionStaffServiceHR(id, description) :
			await UpdateDescriptionStaffService(id, description);
			openAlertDialog?.(AlertType.Success, "Thay đổi mô tả thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		loadUpdate,
	};
}
