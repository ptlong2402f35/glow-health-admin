import { UseFormReset } from "react-hook-form";
import { WorkTimeType } from "../../../../models/StaffDetail";
import { CreatedStaffPartner, updatePartnerInfo } from "../../../../services/AddPartnerService";
import { updateUserInfo } from "../../../../services/AddUserService";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { useHistory } from "react-router";
import { sendAds, useGlowCare } from "../../../../services/StaffService";
import { useContext } from "react";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { useGlowCareHR } from "../../../../services/HRService";

export default function useUpdateGlowCare(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerManagementContext);
	const history = useHistory();
	const doCare = async (id: number, status: number, setIsDisable?: (val: boolean) => void) => {
		setIsDisable?.(true);

		try {
			ctx?.isHR ?  
			await useGlowCareHR(id, status)
			:
			await useGlowCare(id, status);
			openAlertDialog?.(AlertType.Success, "Thay đổi thành công!", () => {
				props.reload();
			});
		} catch (error: any) {
			if (error.response && error.response.status === 422) {
				const errorMessage = error.response.data.message;
				openAlertDialog?.(AlertType.Fail, errorMessage);
			} else {
				openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
			}
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		doCare,
	};
}
