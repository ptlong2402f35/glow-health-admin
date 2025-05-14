import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import TransactionService from "../../../../services/TransactionService";

export default function useCreatedTransaction() {
	const { openAlertDialog } = useAlertDialog();
	const createdService = async (
		money: string,
		content: string,
		userId: string,
		type: string,
		selectedTransactionStyle: number,
		reload: () => void,
		setIsDisable?: (val: boolean) => void
	) => {
		try {
			setIsDisable?.(true);
			await TransactionService.createdTransaction(content, parseFloat(money), parseInt(userId), type,selectedTransactionStyle);
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!", () => {
				setIsDisable?.(false);
			});
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		createdService,
	};
}
