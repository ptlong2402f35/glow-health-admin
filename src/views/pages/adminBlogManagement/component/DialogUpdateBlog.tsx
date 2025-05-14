import React, { useEffect, useRef, useState } from "react";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import AdminAddBlog from "./AdminAddBlog";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import Blog from "../../../../models/Blog";
import useUpdateBlog from "../hook/useUpdateBlog";
import UploadImgContentBlog from "../hook/UploadImgContent";
import useGetDetailBlog from "../hook/useBlogDetail";

export default function DialogUpdatedBlog(props: {
	openUpdateBlogDialog: boolean;
	setOpenUpdateBlogDialog: (value: boolean) => void;
	reload: () => void;
	blog: Blog | undefined;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const editorRef = useRef<any>(null);
	const { blogDetail } = useGetDetailBlog({ id: props.blog?.id });

	const [title, setTitle] = useState(blogDetail?.title || "");
	const [content, setContent] = useState(blogDetail?.content || "");
	const [subContent, setSubContent] = useState(blogDetail?.subContent || "");
	const [banner, setBanner] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const { doUpdate } = useUpdateBlog({
		reload: props.reload,
		setOpenUpdateBlogDialog: props.setOpenUpdateBlogDialog,
	});
	const { handleSaveButtonClick } = UploadImgContentBlog({ editorRef });
	const handleSave = async () => {
		setIsSaving(true);
		const updatedContent = await handleSaveButtonClick();
		await doUpdate(blogDetail?.id || 0, title, updatedContent, subContent, banner[0]);
		setIsSaving(false);
	};

	const handleClose = () => {
		props.setOpenUpdateBlogDialog(false);
	};

	useEffect(() => {
		setTitle(blogDetail?.title || "");
		setContent(blogDetail?.content || "");
		setSubContent(blogDetail?.subContent || "");
		setBanner(convertUrlsToImageDatas([blogDetail?.image || ""]));
	}, [props.openUpdateBlogDialog, blogDetail]);

	return (
		<DialogWrap
			disableEnforceFocus={true}
			open={props.openUpdateBlogDialog}
			onClose={(e, reason) => {
				if (reason !== "backdropClick") {
					handleClose();
				}
			}}
			title="Sửa Blog"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleSave}
						disabled={isSaving}>
						{" "}
						Lưu
					</UserFormServiceButtonCreated>
				</>
			}>
			<AdminAddBlog
				title={title}
				setTitle={setTitle}
				content={content}
				setContent={setContent}
				subContent={subContent}
				setSubContent={setSubContent}
				banner={banner}
				setBanner={setBanner}
				editorRef={editorRef}
			/>
		</DialogWrap>
	);
}
