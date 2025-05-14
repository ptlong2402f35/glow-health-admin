import { useContext, useState } from "react";
import { UpdateStaffService, UptoTopService } from "../../../../services/StaffService";
import { uploadMutipleAvatars } from "../../../../services/PersonalService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { AdminPartnerDetailManagementContext } from "../../partnerDetail/PartnerDetail";
import { UptoTopServiceHR } from "../../../../services/HRService";

export default function useUptoTopStaffService(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerDetailManagementContext);
	const uptoTopStaffService = async (id: number, staffServiceId: number) => {
		try {
			ctx?.isHR ?
			await UptoTopServiceHR(id, staffServiceId.toString())
			:
			await UptoTopService(id, staffServiceId.toString());
			openAlertDialog?.(AlertType.Success, "Leen top thành công!", () => {
				props.reload();
			});
		} catch (error) {
			console.log("Error:", error);
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		uptoTopStaffService,
	};
}
