import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import BlogService from "../../../../services/BlogService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { ForeignContent } from "../../../../models/Blog";

export default function useUpdateBlog(props: {
	reload?: () => void;
	setOpenUpdateBlogDialog?: (value: boolean) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const doUpdate = async (
		id: number,
		title: string,
		content: string,
		subContent: string,
		banner: ImageInputData | null | undefined,
		setIsDisable?: (val: boolean) => void
	) => {
		let avatarLink;
		if (banner && !banner?.isExisted) {
			const avatar = await uploadAvatar(banner);
			avatarLink = avatar.path;
		} else if (banner && banner?.isExisted) {
			avatarLink = banner?.urlData;
		}
		try {
			setIsDisable?.(true);
			await BlogService.UpdateBlog(id, title, avatarLink, content, subContent);
			openAlertDialog?.(AlertType.Success, "Cập nhật thành công!", () => {
				props.reload?.();
				props.setOpenUpdateBlogDialog?.(false);
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
