import { assignOwnerUser, updateUserInfo } from "../../../../services/AddUserService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";

export default function useSubmitUpdateUser(props: {
	setOpenBankInformationDialog: (value: boolean) => void;
	existedImage?: string | undefined | null;
	NoPickStore: number | null | undefined;
}) {
	const { openAlertDialog } = useAlertDialog();

	const useUpdateUser = async (
		email?: string | null | undefined,
		phone?: string | null | undefined,
		password?: string | null | undefined,
		id?: number | null | undefined,
		imageAvatar?: ImageInputData | null | undefined,
		reload?: () => void,
		selectedOwner?: string | null | undefined,
		gender?: number | null | undefined,
		selectedCountry?: string | null | undefined,
		setIsDisable?: (val: boolean) => void
	) => {
		setIsDisable?.(true);
		let avatarLink;
		if (imageAvatar && !imageAvatar?.isExisted) {
			const avatar = await uploadAvatar(imageAvatar);
			avatarLink = avatar.path;
		} else if (imageAvatar && imageAvatar?.isExisted) {
			avatarLink = imageAvatar?.urlData;
		}
		const selectedOwnerNumber = selectedOwner ? parseInt(selectedOwner) : undefined;
		try {
			await updateUserInfo(email, phone, password, id, avatarLink, selectedOwnerNumber, gender, selectedCountry);
			if (!selectedOwner && !props.NoPickStore) {
				reload?.();
				openAlertDialog?.(AlertType.Success, "Cập nhật thông tin thành công!", () => {
					props.setOpenBankInformationDialog(false);
				});
			} else if (selectedOwner === props.NoPickStore?.toString()) {
				reload?.();
				openAlertDialog?.(AlertType.Success, "Cập nhật thông tin thành công!", () => {
					props.setOpenBankInformationDialog(false);
				});
			} else {
			}
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		useUpdateUser,
	};
}
export function useAssignOwnerUpdateUser(props: {
	setOpenBankInformationDialog: (value: boolean) => void;
	existedImage?: string | undefined | null;
}) {
	const { openAlertDialog } = useAlertDialog();

	const useUpdateUserAssign = async (
		storeId?: string | null | undefined,
		id?: number | null | undefined,
		reload?: () => void,
		setIsDisable?: (val: boolean) => void
	) => {
		setIsDisable?.(true);
		const PartIntStoreId = parseInt(storeId || "");

		try {
			await assignOwnerUser(id, PartIntStoreId);
			reload?.();
			openAlertDialog?.(AlertType.Success, "Cập nhật thông tin thành công!", () => {
				props.setOpenBankInformationDialog(false);
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		useUpdateUserAssign,
	};
}
