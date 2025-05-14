import { useState, useEffect, useContext } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	StaffUpdateStatus,
	UpdateDescriptionStaffService,
	updateDescriptionLangStaff,
} from "../../../../services/StaffService";
import { DescriptionLang } from "../DescriptionLang/DescriptionLangDialog";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { updateDescriptionLangStaffHR } from "../../../../services/HRService";

export default function useUpdateDescriptionLang(props: { reload?: () => void,isHR?: boolean }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerManagementContext);
	const loadUpdate = async (id: number, description: DescriptionLang[]) => {
		try {
			(ctx?.isHR || props.isHR) ?  
			await updateDescriptionLangStaffHR(id, description)
			:
			await updateDescriptionLangStaff(id, description);
			openAlertDialog?.(AlertType.Success, "Thay đổi mô tả đa ngữ thành công!", () => {
				props.reload?.();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		loadUpdate,
	};
}
