import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import VoucherService from "../../../../services/VoucherService";
import BlogService from "../../../../services/BlogService";

export default function useCreatedBlog(props: {
	reload: () => void;
	setOpenAddVoucherDialog: (value: boolean) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const createdBlog = async (
		title: string,
		content: string,
		subContent: string,
		banner: ImageInputData | null | undefined,
		setIsDisable?: (val: boolean) => void
	) => {
		let avatarLink: string | null | undefined;
		if (banner && !banner?.isExisted) {
			const avatar = await uploadAvatar(banner);
			avatarLink = avatar.path;
		}
		try {
			setIsDisable?.(true);
			await BlogService.CreatedBlog(title, avatarLink, content, subContent);
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				props.reload();
				props.setOpenAddVoucherDialog(false);
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		createdBlog,
	};
}
