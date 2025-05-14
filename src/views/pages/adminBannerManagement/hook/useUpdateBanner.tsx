import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import TransactionService from "../../../../services/TransactionService";
import BannerService from "../../../../services/BannerService";
import Banner from "../../../../models/Banner";

export default function useUpdateBanner() {
	const { openAlertDialog } = useAlertDialog();
	const updateBanner = async (dataBanner: Banner[], reload: () => void, setIsDisable?: (val: boolean) => void) => {
		try {
			setIsDisable?.(true);
			await BannerService.UpdateBanner(dataBanner);
			openAlertDialog?.(AlertType.Success, "Thay đổi thành công!", () => {
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
		updateBanner,
	};
}
