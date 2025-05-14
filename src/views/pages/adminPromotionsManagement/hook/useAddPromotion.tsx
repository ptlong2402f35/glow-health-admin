import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { AddPromotion } from "../../../../services/PromotionService";
import { hasDurationType } from "../../../../models/Promotions";

export default function useCreatedPromotion() {
	const { openAlertDialog } = useAlertDialog();
	const createdPromotions = async (
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
			await AddPromotion(
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
		createdPromotions,
	};
}
