import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { uploadAvatar } from "../../../../services/PersonalService";
import http from "../../../../services/http";
import { convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import { StylePersonalLabelBank } from "../../personal/component/StylePerson";
import { AdminContentBlogManagementWrap } from "../../blog/styled/blogStyled";

export default function AdminContentBlogManagementMuti(props: {
	content: string;
	setContent: (val: string) => void;
	editorRef: React.MutableRefObject<any>;
	setRef: (editor: any) => void;
	id?: string;
}) {
	const customImageAltPlugin = (editor: any) => {
		editor.ui.registry.addButton("altimage", {
			text: "+ văn bản thay thế",
			icon: null,
			onAction: function () {
				const selectedImage = editor.selection.getNode();
				const currentAltText = selectedImage.alt || "";
				const altText = prompt("Thêm văn bản thay thế cho ảnh:", currentAltText);
				if (altText !== null && selectedImage.nodeName === "IMG") {
					selectedImage.alt = altText;
				}
			},
		});

		editor.ui.registry.getAll().icons;
	};

	return (
		<AdminContentBlogManagementWrap id={props.id}>
			<StylePersonalLabelBank>Nội dung</StylePersonalLabelBank>
			<Editor
				apiKey="2jtl2ilui08eclz397cor6blr6vhpgcd1228i0eo2tgo3pjy"
				onInit={(evt: any, editor: any) => {
					// props.editorRef.current = editor;
					props.setRef(editor);
					customImageAltPlugin(editor);
				}}
				initialValue={props.content}
				init={{
					height: 500,
					menubar: true,
					plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table paste code help wordcount",
						"link",
						"removeformat",
						"textcolor",
						"heading",
						"altimage",
						"media",
					],
					toolbar:
						"undo redo | formatselect | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link removeformat | fontsizeinput | lineheight| styleselect|code|image|altimage| media ",
					automatic_uploads: true,
					file_picker_types: "image",
					setup: (editor: any) => {
						// editor.on('ObjectResized', (e: any) => {
						// 	if (e.target.nodeName === 'IMG') {
						// 		editor.dom.setAttrib(e.target, 'width', '100');
						// 	}
						// });
						editor.on("PastePostProcess", (e: any) => {
							const images = e.node.querySelectorAll("img");
							images.forEach((img: any) => {
								editor.dom.setAttrib(img, "width", "200");
							});
						});
					},
				}}
			/>
		</AdminContentBlogManagementWrap>
	);
}

export function AdminContentBlogManagement(props: {
	content: string;
	setContent: (val: string) => void;
	editorRef: React.MutableRefObject<any>;
}) {
	const customImageAltPlugin = (editor: any) => {
		editor.ui.registry.addButton("altimage", {
			text: "+ văn bản thay thế",
			icon: null,
			onAction: function () {
				const selectedImage = editor.selection.getNode();
				const currentAltText = selectedImage.alt || "";
				const altText = prompt("Thêm văn bản thay thế cho ảnh:", currentAltText);
				if (altText !== null && selectedImage.nodeName === "IMG") {
					selectedImage.alt = altText;
				}
			},
		});

		editor.ui.registry.getAll().icons;
	};

	return (
		<AdminContentBlogManagementWrap>
			<StylePersonalLabelBank>Nội dung</StylePersonalLabelBank>
			<Editor
				apiKey="2jtl2ilui08eclz397cor6blr6vhpgcd1228i0eo2tgo3pjy"
				onInit={(evt: any, editor: any) => {
					props.editorRef.current = editor;
					customImageAltPlugin(editor);
				}}
				initialValue={props.content}
				init={{
					height: 500,
					menubar: true,
					plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table paste code help wordcount",
						"link",
						"removeformat",
						"textcolor",
						"heading",
						"altimage",
						"media",
					],
					toolbar:
						"undo redo | formatselect | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | link removeformat | fontsizeinput | lineheight| styleselect|code|image|altimage| media ",
					automatic_uploads: true,
					file_picker_types: "image",
					setup: (editor: any) => {
						// editor.on('ObjectResized', (e: any) => {
						// 	if (e.target.nodeName === 'IMG') {
						// 		editor.dom.setAttrib(e.target, 'width', '100');
						// 	}
						// });
						editor.on("PastePostProcess", (e: any) => {
							const images = e.node.querySelectorAll("img");
							images.forEach((img: any) => {
								editor.dom.setAttrib(img, "width", "200");
							});
						});
					},
				}}
			/>
		</AdminContentBlogManagementWrap>
	);
}
