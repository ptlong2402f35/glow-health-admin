import { UseFormReset } from "react-hook-form";
import { WorkTimeType } from "../../../../models/StaffDetail";
import { CreatedStaffPartner, updatePartnerInfo } from "../../../../services/AddPartnerService";
import { updateUserInfo } from "../../../../services/AddUserService";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { useHistory } from "react-router";
import { useContext } from "react";
import { AdminPartnerDetailManagementContext } from "../PartnerDetail";
import { CreatedStaffPartnerHR } from "../../../../services/HRService";
import { AdminPartnerCreatedManagementContext } from "../CreatedParnerDetail";
import { tagAtttachByAdmin } from "../../../../services/TagService";

export default function useTag() {
	const { openAlertDialog } = useAlertDialog();
	const doTag = async (
		staffId?: number | null | undefined,
		tagId?: string[],
		reload?: () => void,
		setIsDisable?: (val: boolean) => void,
	) => {

		if (!tagId) return;

		const numericTags = tagId
			.map(id => Number(id))
			.filter(id => !isNaN(id) && id !== 0);

		const uniqueTags = new Set(numericTags);
		if (uniqueTags.size !== numericTags.length) {
			openAlertDialog?.(AlertType.Fail, "Không thể gắn tag trùng nhau!");
			return;
		}

		setIsDisable?.(true);

		try {
			await tagAtttachByAdmin(
				staffId,
				numericTags,
			)
			openAlertDialog?.(AlertType.Success, "Gắn tag thành công!", () => {
				reload?.();

			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		doTag,
	};
}
