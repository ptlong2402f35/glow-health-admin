import { useContext, useState } from "react";
import { AddStaffPartner, UpdateServicePrice } from "../../../../services/StaffService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { AdminPartnerDetailManagementContext } from "../../partnerDetail/PartnerDetail";
import { UpdateServicePriceHR } from "../../../../services/HRService";

export default function useUpdatePricePersonal(props: { reload: () => void }) {
	const [prices, setPrices] = useState<{ unit: string; price: number; id: number; itemId?: number }[]>([]);

	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerDetailManagementContext);
	const updateListService = async (
		id: number,
		staffServiceId: number,
		prices: { unit: string; price: number; itemId?: number }[],
		nameService: string,
		descriptionService: string
	) => {
		try {
			ctx?.isHR ?
			await UpdateServicePriceHR(id, staffServiceId, prices, nameService, descriptionService)
			:
			await UpdateServicePrice(id, staffServiceId, prices, nameService, descriptionService);
			openAlertDialog?.(AlertType.Success, "Sửa thành công!", () => {
				props.reload();
			});
		} catch (error) {
			console.log("Error:", error);
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		updateListService,
		setPrices,
		prices,
	};
}
