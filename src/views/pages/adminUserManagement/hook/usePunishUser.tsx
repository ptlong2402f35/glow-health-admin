import { activeUser, punishUser } from "../../../../services/AddUserService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

export default function usePunishUser(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();

	const doPunishUser = async (id?: number | null | undefined, punishType?: boolean | null | undefined) => {
		try {
			await punishUser(id, punishType);
			openAlertDialog?.(AlertType.Success, "Thay đổi thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		doPunishUser,
	};
}
