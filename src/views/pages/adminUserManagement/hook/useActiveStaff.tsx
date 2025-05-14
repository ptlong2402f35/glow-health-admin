import { activeStaff, activeUser } from "../../../../services/AddUserService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

export default function useActiveStaff(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();

	const doActiveStaff = async (id?: number | null | undefined, activeTyppe?: boolean | null | undefined) => {
		try {
			await activeStaff(id, activeTyppe);
			openAlertDialog?.(AlertType.Success, "Thay đổi thành công!", () => {
				props.reload();
			});
		} catch (error: any) {
			if (error.response && error.response.status === 422) {
				const errorMessage = error.response.data.message;
				openAlertDialog?.(AlertType.Fail, errorMessage);
			} else {
				openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
			}
		}
	};

	return {
		doActiveStaff,
	};
}
