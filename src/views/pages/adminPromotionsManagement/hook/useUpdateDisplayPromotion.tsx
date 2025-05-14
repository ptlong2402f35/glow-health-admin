import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { updateDisplayPromotion } from "../../../../services/PromotionService";

export default function useUpdateDisplayPromotion(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const updateDisplay = async (id: number, status: boolean) => {
		try {
			await updateDisplayPromotion(id, status);
			openAlertDialog?.(AlertType.Success, "Cập nhật hiển thị thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		updateDisplay,
	};
}
