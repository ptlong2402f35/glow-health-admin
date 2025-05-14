import { addBlockSpam, addUserInfo } from "../../../../services/AddUserService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";

export default function useBlockSpamUser(props: { reload?: () => void }) {
	const { openAlertDialog } = useAlertDialog();

	const useBlockSpam = async (id?: number) => {
		try {
			await addBlockSpam(id);

			openAlertDialog?.(AlertType.Success, "Hủy chặn người dùng thành công!");
			props.reload?.();
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		useBlockSpam,
	};
}
