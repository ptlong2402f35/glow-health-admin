import { useContext, useState } from "react";
import { AddStaffPartner } from "../../../../services/StaffService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { AddStaffPartnerHR } from "../../../../services/HRService";
import { AdminPartnerDetailManagementContext } from "../../partnerDetail/PartnerDetail";

export default function useAddServicePersonal(props: { reload: () => void }) {
	const [prices, setPrices] = useState<{ unit: string; price: number; id: number }[]>([]);
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminPartnerDetailManagementContext);
	const loadListService = async (
		id: number,
		serviceId: string,
		prices: { unit: string; price: number }[],
		nameService: string
	) => {
		try {
			ctx?.isHR ?
			await AddStaffPartnerHR(id, serviceId, prices, nameService)
			:
			await AddStaffPartner(id, serviceId, prices, nameService);
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				props.reload();
			});
		} catch (error) {
			console.log("Error:", error);
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		loadListService,
		setPrices,
		prices,
	};
}
