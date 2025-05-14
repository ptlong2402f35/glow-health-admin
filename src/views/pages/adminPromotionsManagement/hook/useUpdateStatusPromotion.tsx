import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { UpdatePromotion, updateStatusPromotion } from "../../../../services/PromotionService";
import { PromotionType, hasDurationType } from "../../../../models/Promotions";

export default function useUpdateStatusPromotion(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const updateStatus = async (id: number, status: boolean) => {
		try {
			await updateStatusPromotion(id, status);
			openAlertDialog?.(AlertType.Success, "Cập nhật trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		updateStatus,
	};
}
