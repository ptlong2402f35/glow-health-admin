import { addUserInfo, banUser } from "../../../../services/AddUserService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";

export default function useBanUser(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();

	const doBanUser = async (id?: number | null | undefined, ban?: boolean | null | undefined) => {
		try {
			await banUser(id, ban);
			openAlertDialog?.(AlertType.Success, "Thay đổi thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		doBanUser,
	};
}
