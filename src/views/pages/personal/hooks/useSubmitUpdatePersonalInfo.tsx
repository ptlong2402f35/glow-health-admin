import { updatePersonalInfo, uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import useUpdateUserInfo from "../../../hooks/auth/useUpdateUserInfo";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function useSubmitUpdate() {
	const { updateUserInfo } = useUpdateUserInfo();
	const { openAlertDialog } = useAlertDialog();

	const useConfirmUpdate = async (
		firstName?: string | null | undefined,
		lastName?: string | null | undefined,
		phoneNumber?: string | null | undefined,
		changeType?: () => void,
		reload?: () => void,
		imageAvatar?: ImageInputData,
		setIsDisable?: (val: boolean) => void,
		willUpdateAvatar?: boolean
	) => {
		let avatarLink: string | null | undefined;
		setIsDisable?.(true);
		if (imageAvatar && !imageAvatar?.isExisted) {
			const avatar = await uploadAvatar(imageAvatar);
			avatarLink = avatar[0].publicUrl;
		}

		try {
			await updatePersonalInfo(firstName, lastName, phoneNumber, willUpdateAvatar ? avatarLink : null);
			reload?.();
			changeType?.();
			openAlertDialog?.(AlertType.Success, "Cập nhật thông tin cá nhân thành công!");
			setTimeout(() => {
				updateUserInfo?.(avatarLink || null, firstName || "", lastName || "");
			}, 1000);
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		useConfirmUpdate,
	};
}
