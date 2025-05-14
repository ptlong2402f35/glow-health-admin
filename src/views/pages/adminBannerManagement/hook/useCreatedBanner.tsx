import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import TransactionService from "../../../../services/TransactionService";
import BannerService from "../../../../services/BannerService";
import Banner from "../../../../models/Banner";

export default function useCreatedBanner() {
	const { openAlertDialog } = useAlertDialog();
	const createdBanner = async (
		listBanner: Banner[],
		group: string,
		updatedItemsArray: {
			action: string;
			path: (
				| {
						lang: string;
						value: any;
				  }
				| undefined
			)[];
		}[],
		reload: () => void,
		setIsDisable?: (val: boolean) => void
	) => {
		try {
			setIsDisable?.(true);
			await BannerService.CreatedBanner(listBanner, group, updatedItemsArray);
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
		createdBanner,
	};
}
