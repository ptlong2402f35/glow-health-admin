import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import BlogService from "../../../../services/BlogService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { ForeignContent } from "../../../../models/Blog";
import http from "../../../../services/http";

export default function useUpdateBlogMutiLang(props: {
	reload?: () => void;
	setOpenUpdateBlogDialog?: (value: boolean) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const doUpdate = async (
		id: number,
		editedBlogMutiLang: ForeignContent[],
		updatedContent?: any[],
		setIsDisable?: (val: boolean) => void
	) => {
		const updatedBlogs = await Promise.all(
			editedBlogMutiLang.map(async (item, index) => {
				let avatarLink = item.image;
				if (avatarLink?.startsWith("data:image")) {
					const response = await fetch(avatarLink);
					const blob = await response.blob();

					const imageFile = new File([blob], "image.png", {
						type: response.headers.get("content-type") || "",
					});

					const formData = new FormData();
					formData.append("image", imageFile);
					const uploadUrl = "/aws-upload-single-image";
					const { data } = await http.post(uploadUrl, formData);
					avatarLink = data.path;
				}
				return {
					...item,
					content: updatedContent?.[index],
					image: avatarLink,
				};
			})
		);
		try {
			setIsDisable?.(true);
			await BlogService.UpdateBlogMutiLang(id, updatedBlogs);
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
