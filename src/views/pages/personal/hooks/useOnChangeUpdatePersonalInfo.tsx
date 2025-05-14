import { updatePersonalInfo, uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import useUpdateUserInfo from "../../../hooks/auth/useUpdateUserInfo";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ChangeEventHandler, useState } from "react";
import User from "../../../../models/User";
import useGetInfoHook from "./useGetInfoHook";
import UserManagement from "../../../../models/UserGlow";

export default function useOnChangeUpdate(props: { personalInfo: UserManagement | undefined }) {
	const { updateUserInfo } = useUpdateUserInfo();
	const { openAlertDialog } = useAlertDialog();
	const [_, setRefresh] = useState({});
	const { reload } = useGetInfoHook({});
	const onUploadInputChangeRes: ChangeEventHandler<HTMLInputElement> = async (e) => {
		if (!e.target.files) return;
		if (e.target.files.length === 0) return;
		let imageData: ImageInputData = {
			isExisted: false,
			urlData: null,
			domData: e.target.files[0],
		};
		let avatarLink: string | null | undefined;
		if (!imageData?.isExisted) {
			const avatar = await uploadAvatar(imageData);
			avatarLink = avatar.path;
		}
		try {
			await updatePersonalInfo(null, null, null, avatarLink, null, null, null);
			reload?.();
			openAlertDialog?.(AlertType.Success, "Cập nhật ảnh đại diện thành công!");
			setTimeout(() => {
				updateUserInfo?.(avatarLink || null, null, null);
			}, 500);
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
		setTimeout(() => {
			const now = new Date();
			if (props.personalInfo) {
				props.personalInfo.urlImage = avatarLink + "?t=" + now.getTime();
			}
			setRefresh({});
		}, 50);
		setRefresh({});
	};
	const onUploadInputChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
		if (!e.target.files) return;
		if (e.target.files.length === 0) return;
		let imageData: ImageInputData = {
			isExisted: false,
			urlData: null,
			domData: e.target.files[0],
		};
		let avatarLink: string | null | undefined;
		if (!imageData?.isExisted) {
			const avatar = await uploadAvatar(imageData);
			avatarLink = avatar.path;
		}
		{
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
		setRefresh({});
	};

	return {
		onUploadInputChangeRes,
		onUploadInputChange,
	};
}
