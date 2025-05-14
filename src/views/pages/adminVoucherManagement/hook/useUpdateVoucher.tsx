import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import VoucherService from "../../../../services/VoucherService";

export default function useUpdateVoucher(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const doUpdate = async (
		name: string,
		code: string,
		endTime: Date,
		startTime: Date,
		quantity: string,
		type: string,
		value: string,
		minValueOrder: string,
		maxReduce: string,
		id: number,
		condition: string,
		setIsDisable?: (val: boolean) => void
	) => {
		try {
			setIsDisable?.(true);
			await VoucherService.UpdateVoucher(
				name,
				code,
				endTime,
				startTime,
				quantity,
				type,
				value,
				minValueOrder,
				maxReduce,
				id,
				condition
			);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		doUpdate,
	};
}
