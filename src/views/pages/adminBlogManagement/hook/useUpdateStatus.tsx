import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { UpdateStatusBlog } from "../../../../services/BlogService";

export default function useUpdateActive(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const updateActive = async (id: number, status: number) => {
		try {
			await UpdateStatusBlog(id, status);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		updateActive,
	};
}
