import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { ScopeType } from "../../../../models/Service";

export default function useCreatedService() {
	const { openAlertDialog } = useAlertDialog();
	const createdService = async (
		name: string,
		code: string,
		price: string,
		unit: string,
		serviceGroup: string | null | undefined,
		imageUrl: ImageInputData | null | undefined,
		images: any | null | undefined,
		type: number,
		description: string,
		reload: () => void,
		setIsDisable?: (val: boolean) => void
	) => {
		let avatarLink: string | null | undefined;
		if (imageUrl && !imageUrl?.isExisted) {
			const avatar = await uploadAvatar(imageUrl);
			avatarLink = avatar.path;
		}
		let avatarMuti;
		if (images && !images?.isExisted) {
			const avatar = await uploadMutipleAvatars(images);
			avatarMuti = avatar;
		}

		try {
			setIsDisable?.(true);
			await ProductService.CreatedService(
				name,
				code,
				price,
				unit,
				serviceGroup,
				avatarLink,
				avatarMuti,
				type,
				description
			);
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		createdService,
	};
}
