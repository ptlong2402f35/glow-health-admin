import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { StaffUpdateBusy } from "../../../../services/StaffService";
import { useContext } from "react";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { StaffUpdateBusyHR } from "../../../../services/HRService";

export default function useUpdateBusytaff(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
		const ctx = useContext(AdminPartnerManagementContext);
	const loadUpdateBusyStaff = async (id: number, busy: number) => {
		try {
			ctx?.isHR ?  
			await StaffUpdateBusyHR(id, busy)
			:
			await StaffUpdateBusy(id, busy);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		loadUpdateBusyStaff,
	};
}
