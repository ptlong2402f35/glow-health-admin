import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { UpdatePromotion } from "../../../../services/PromotionService";
import { PromotionType, hasDurationType } from "../../../../models/Promotions";

export default function useUpdatePromotion() {
	const { openAlertDialog } = useAlertDialog();
	const updatePromotions = async (
		id: number,
		name: string,
		type: number,
		percentage: number,
		amount: number,
		hasDuration: number,
		startAt: Date,
		expireAt: Date,
		totalQuantity: number,
		note: string,
		reload: () => void
	) => {
		try {
			await UpdatePromotion(
				id,
				name,
				type,
				percentage,
				amount,
				hasDuration === hasDurationType.Limited,
				startAt,
				expireAt,
				totalQuantity,
				note
			);
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		updatePromotions,
	};
}
