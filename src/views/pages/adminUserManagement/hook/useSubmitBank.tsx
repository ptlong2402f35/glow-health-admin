import { addUserInfo } from "../../../../services/AddUserService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";

export default function useSubmitUpdateUser(props: { setOpenAddUserDialog: (value: boolean) => void }) {
	const { openAlertDialog } = useAlertDialog();

	const useConfirmUpdateUser = async (
		// email?: string | null | undefined,
		phone?: string | null | undefined,
		password?: string | null | undefined,
		userName?: string | null | undefined,
		// name?: string | null | undefined,
		imageAvatar?: ImageInputData | null | undefined,
		gender?: number | null | undefined,
		selectedCountry?: string | null | undefined,
		reload?: () => void
	) => {
		let avatarLink: string | null | undefined;
		if (imageAvatar && !imageAvatar?.isExisted) {
			const avatar = await uploadAvatar(imageAvatar);
			avatarLink = avatar.path;
		}
		try {
			await addUserInfo(phone, password, userName, avatarLink, gender, selectedCountry);

			openAlertDialog?.(AlertType.Success, "Thêm người dùng thành công!", () => {
				props.setOpenAddUserDialog(false);
			});
			reload?.();
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		useConfirmUpdateUser,
	};
}
