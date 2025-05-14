import React, { useEffect, useRef, useState } from "react";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import AdminAddBlog from "./AdminAddBlog";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useCreatedBlog from "../hook/useCreatedBlog";
import UploadImgContentBlog from "../hook/UploadImgContent";

export default function DialogAddBlog(props: {
	openAddVoucherDialog: boolean;
	setOpenAddVoucherDialog: (value: boolean) => void;
	reload: () => void;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const editorRef = useRef<any>(null);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [subContent, setSubContent] = useState("");
	const [banner, setBanner] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const { createdBlog } = useCreatedBlog({
		reload: props.reload,
		setOpenAddVoucherDialog: props.setOpenAddVoucherDialog,
	});
	const { handleSaveButtonClick } = UploadImgContentBlog({ editorRef });
	const handleSave = async () => {
		setIsSaving(true);
		await handleSaveButtonClick();
		const updatedContent = await handleSaveButtonClick();
		await createdBlog(title, updatedContent, subContent, banner[0]);
		setIsSaving(false);
	};

	const handleClose = () => {
		props.setOpenAddVoucherDialog(false);
	};

	return (
		<DialogWrap
			disableEnforceFocus={true}
			open={props.openAddVoucherDialog}
			onClose={(e, reason) => {
				if (reason !== "backdropClick") {
					handleClose();
				}
			}}
			title="Thêm mới Blog"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleSave}
						disabled={isSaving}>
						{" "}
						{isSaving ? "Đang lưu..." : "Lưu"}
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
