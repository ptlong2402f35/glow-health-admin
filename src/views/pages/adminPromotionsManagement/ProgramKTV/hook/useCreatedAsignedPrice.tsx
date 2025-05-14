import { useParams } from "react-router";
import { createdPromotionAssignedServices } from "../../../../../services/PromotionService";
import { AlertType } from "../../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../../hooks/useAlertDialog";

export default function useCreatedAsignedPrice(props: { filterStaffId: number; reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();

	let { id } = useParams<{ id: string }>();
	const ProId = parseInt(id);

	const createdAsignedPrice = async (price: number[]) => {
		try {
			await createdPromotionAssignedServices(ProId, props.filterStaffId, price);
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		createdAsignedPrice,
	};
}
