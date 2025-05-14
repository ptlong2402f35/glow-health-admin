import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { ScopeType } from "../../../../models/Service";
import TagsService, { AddTag } from "../../../../services/TagService";

export default function useCreatedTags() {
	const { openAlertDialog } = useAlertDialog();
	const createdTags = async (
		name: string,
		serviceGroup: string | null | undefined,
		reload: () => void,
		setIsDisable?: (val: boolean) => void
	) => {
		
		try {
			setIsDisable?.(true);
			await AddTag(
				name,
				serviceGroup,
				
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
		createdTags,
	};
}
