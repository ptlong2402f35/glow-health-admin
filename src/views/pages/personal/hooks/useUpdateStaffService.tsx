import { useContext, useState } from "react";
import { UpdateStaffService } from "../../../../services/StaffService";
import { uploadMutipleAvatars } from "../../../../services/PersonalService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { AdminPartnerDetailManagementContext } from "../../partnerDetail/PartnerDetail";
import { UpdateStaffServiceHR } from "../../../../services/HRService";

export default function useUpdateStaffService(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerDetailManagementContext);
	const updateStaffService = async (id: number, staffServiceId: number, experienceYears: string, images: any) => {
		let avatarMuti;
		if (images && !images?.isExisted) {
			const avatar = await uploadMutipleAvatars(images);
			avatarMuti = avatar;
		}
		
		try {
			ctx?.isHR ?
			await UpdateStaffServiceHR(id, staffServiceId.toString(), experienceYears, avatarMuti)
			:
			await UpdateStaffService(id, staffServiceId.toString(), experienceYears, avatarMuti);
			openAlertDialog?.(AlertType.Success, "Sửa thành công!", () => {
				props.reload();
			});
		} catch (error) {
			console.log("Error:", error);
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		updateStaffService,
	};
}
