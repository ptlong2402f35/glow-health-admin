import { UseFormReset } from "react-hook-form";
import { WorkTimeType } from "../../../../models/StaffDetail";
import { CreatedStaffPartner, updatePartnerInfo } from "../../../../services/AddPartnerService";
import { updateUserInfo } from "../../../../services/AddUserService";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { useHistory } from "react-router";
import { sendAds } from "../../../../services/StaffService";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { useContext } from "react";
import { sendAdsHR } from "../../../../services/HRService";

export default function useSendAds(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
		const ctx = useContext(AdminPartnerManagementContext);
	const history = useHistory();
	const doSendAds = async (id: number, setIsDisable?: (val: boolean) => void) => {
		setIsDisable?.(true);

		try {
			ctx?.isHR ?  
			await sendAdsHR(id)
			:
			await sendAds(id);
			openAlertDialog?.(AlertType.Success, "Gửi quảng cáo thành công!", () => {
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
		doSendAds,
	};
}
