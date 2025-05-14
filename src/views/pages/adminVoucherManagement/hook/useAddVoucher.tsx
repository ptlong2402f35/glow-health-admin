import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import VoucherService from "../../../../services/VoucherService";

export default function useCreatedVoucher(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const createdVoucher = async (
		name: string,
		code: string,
		endTime: Date,
		startTime: Date,
		quantity: string,
		type: string,
		value: string,
		minValueOrder: string,
		maxReduce: string,
		condition: string,
		setIsDisable?: (val: boolean) => void
	) => {
		try {
			setIsDisable?.(true);
			await VoucherService.CreatedVoucher(
				name,
				code,
				endTime,
				startTime,
				quantity,
				type,
				value,
				minValueOrder,
				maxReduce,
				condition
			);
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		createdVoucher,
	};
}
