import { useContext } from "react";
import { activeUser, punishUser } from "../../../../services/AddUserService";
import { punishStaff } from "../../../../services/AllStaffService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { punishStaffHR } from "../../../../services/HRService";

export default function usePunishPartner(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerManagementContext);

	const doPunishPartner = async (
		id?: number | null | undefined,
		punishType?: boolean | null | undefined,
		duration?: number
	) => {
		try {
			ctx?.isHR ?  
			await punishStaffHR(id, punishType, (duration || 0) * 60)
			:
			await punishStaff(id, punishType, (duration || 0) * 60);
			openAlertDialog?.(AlertType.Success, "Thay đổi thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		doPunishPartner,
	};
}
