import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import TransactionService from "../../../../services/TransactionService";
import { AddStore } from "../../../../services/StoreService";

export default function useCreatedStore() {
	const { openAlertDialog } = useAlertDialog();
	const createdStore = async (name: string, long: number, lat: number, reload: () => void) => {
		try {
			await AddStore(name, long, lat);
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		createdStore,
	};
}
