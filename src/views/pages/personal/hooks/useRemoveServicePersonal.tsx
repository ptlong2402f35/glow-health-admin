import { useContext } from "react";
import { RemoveStaffPartner } from "../../../../services/StaffService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AdminPartnerDetailManagementContext } from "../../partnerDetail/PartnerDetail";
import { RemoveStaffPartnerHR } from "../../../../services/HRService";

export default function useRemoveServicePersonal(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerDetailManagementContext);
	const removeService = async (id: number) => {
		try {
			ctx?.isHR ?
			await RemoveStaffPartnerHR(id)
			:
			await RemoveStaffPartner(id);
			openAlertDialog?.(AlertType.Success, "Xóa thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};
	return {
		removeService,
	};
}
