import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { UpdateActiveVoucher } from "../../../../services/VoucherService";

export default function useUpdateActiveVoucher(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const updateActive = async (id: number,status: number) => {
		try {
			await UpdateActiveVoucher(id,status);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		updateActive,
	};
}
