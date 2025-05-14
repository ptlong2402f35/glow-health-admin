import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { DeleteBlog, UpdateStatusBlog } from "../../../../services/BlogService";

export default function useDeleteBlog(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const deleteBlog = async (id: number) => {
		try {
			await DeleteBlog(id);
			openAlertDialog?.(AlertType.Success, "Xóa bài viết thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		deleteBlog,
	};
}
