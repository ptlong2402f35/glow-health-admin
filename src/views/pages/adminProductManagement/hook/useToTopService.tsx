import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function useToTopService(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const doToTop = async (id: number) => {
		try {
			await ProductService.ToTopService(id);
			openAlertDialog?.(AlertType.Success, "Lên Top thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		doToTop,
	};
}
