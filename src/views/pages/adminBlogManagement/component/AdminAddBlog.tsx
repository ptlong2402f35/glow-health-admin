import React, { useEffect, useState } from "react";
import {
	AdminProductDialogInputInner,
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../../personal/component/StylePerson";
import { AvtUserManagementSection } from "./ImageBannerBlog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { AdminContentBlogManagement } from "./AdminContentBlog";

export default function AdminAddBlog(props: {
	title: string;
	setTitle: (val: string) => void;
	content: string;
	setContent: (val: string) => void;
	subContent: string;
	setSubContent: (val: string) => void;
	banner: ImageInputData[];
	setBanner: (imageDatas: ImageInputData[]) => void;
	editorRef: React.MutableRefObject<any>;
}) {
	const [openImgDialog, setOpenImgDialog] = useState(false);
	return (
		<>
			<InputTitleService
				title={props.title}
				setTitle={props.setTitle}
			/>
			<InputSubContentService
				subContent={props.subContent}
				setSubContent={props.setSubContent}
			/>

			<AdminContentBlogManagement
				content={props.content}
				setContent={props.setContent}
				editorRef={props.editorRef}
			/>
			<AvtUserManagementSection
				existedImage={""}
				avtData={props.banner}
				setAvtData={props.setBanner}
				openImgDialog={setOpenImgDialog}
			/>
		</>
	);
}

export function InputTitleService(props: { title: string; setTitle: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Tiêu đề</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.title}
				onChange={(e) => props.setTitle(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}

export function InputSubContentService(props: { subContent: string; setSubContent: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Nội dung rút gọn</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.subContent}
				onChange={(e) => props.setSubContent(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}
