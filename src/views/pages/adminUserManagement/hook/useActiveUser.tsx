import { activeUser } from "../../../../services/AddUserService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

export default function useactiveUser(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();

	const doActiveUser = async (id?: number | null | undefined, activeTyppe?: boolean | null | undefined) => {
		try {
			await activeUser(id, activeTyppe);
			openAlertDialog?.(AlertType.Success, "Thay đổi thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		doActiveUser,
	};
}
