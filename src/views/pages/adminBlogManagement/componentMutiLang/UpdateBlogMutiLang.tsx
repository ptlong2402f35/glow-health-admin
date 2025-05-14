import React, { useEffect, useRef, useState } from "react";
import { PageCenter, PageHeader, PageWrap } from "../../../controls/components/form/Page";
import {
	StylePagePersonContentInput,
	StylePersonalLabelBank,
	UserFormBankButtonCreatedv2,
} from "../../personal/component/StylePerson";
import Blog, { ForeignContent } from "../../../../models/Blog";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useUpdateBlog from "../hook/useUpdateBlog";
import UploadImgContentBlog from "../hook/UploadImgContent";
import { useParams } from "react-router";
import useGetDetailBlog from "../hook/useBlogDetail";
import AdminAddBlog from "../component/AdminAddBlog";
import { AvtUserManagementSection } from "../component/ImageBannerBlog";
import { Lang, LangLabelMap } from "../../../../models/UserGlow";
import { uploadAvatar } from "../../../../services/PersonalService";
import http from "../../../../services/http";
import UploadImgContentBlogMutiLang from "../hook/UploadImgContentMutiLang";
import useUpdateBlogMutiLang from "../hook/useUpdateBlogMutiLang";
import AdminContentBlogManagementMuti from "../component/AdminContentBlog";
import { UpdateBlogMutiLangButton, UpdateBlogMutiLangDiv } from "../styled/BlogManagementStyle";

const selectedTabStyle = {
	backgroundColor: "var(--primary-color)",
	color: "#fff",
};

export default function UpdateBlogMutiLang() {
	const editorReflang = useRef<any>();
	let { id } = useParams<{ id: string }>();
	let userIdNumber = parseInt(id);
	const { blogDetail } = useGetDetailBlog({ id: userIdNumber });
	const editorRef = useRef<any[]>(Array(blogDetail?.foreignContent?.length || 4).fill(0));

	const { doUpdate } = useUpdateBlogMutiLang({});
	const { handleSaveButtonClick } = UploadImgContentBlogMutiLang({ editorRef });
	const [editedBlogMutiLang, setEditedBlogMutiLang] = useState<ForeignContent[]>(blogDetail?.foreignContent || []);

	const handleSave = async () => {
		const updatedContent = await handleSaveButtonClick();

		await doUpdate(blogDetail?.id || 0, editedBlogMutiLang, updatedContent);
	};

	useEffect(() => {
		setEditedBlogMutiLang(blogDetail?.foreignContent || []);
	}, [blogDetail]);

	const [selectedTab, setSelectedTab] = useState("kr");

	useEffect(() => {
		setSelectedTab("kr");
	}, [blogDetail]);

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Cập nhật Blog đa ngôn ngữ</PageHeader>
				<UserFormBankButtonCreatedv2 onClick={handleSave}>Cập nhật</UserFormBankButtonCreatedv2>
				<UpdateBlogMutiLangDiv>
					{blogDetail?.foreignContent?.map((item, index) => (
						<UpdateBlogMutiLangButton
							key={index}
							onClick={() => setSelectedTab(item.lang || "")}
							style={selectedTab === item.lang ? selectedTabStyle : {}}>
							{LangLabelMap.get(item.lang as Lang)}
						</UpdateBlogMutiLangButton>
					))}
				</UpdateBlogMutiLangDiv>
				{blogDetail?.foreignContent?.length && (
					<UpdateBlogMutiLangInner
						foreignContent={blogDetail?.foreignContent || []}
						editedBlogMutiLang={editedBlogMutiLang}
						setEditedBlogMutiLang={setEditedBlogMutiLang}
						selectedTab={selectedTab}
						editorRef={editorRef}
					/>
				)}
			</PageCenter>
		</PageWrap>
	);
}

export function UpdateBlogMutiLangInner(props: {
	foreignContent: ForeignContent[];
	editedBlogMutiLang: ForeignContent[];
	setEditedBlogMutiLang: (value: ForeignContent[]) => void;
	selectedTab: string;
	editorRef: React.MutableRefObject<any[]>;
}) {
	const [openImgDialog, setOpenImgDialog] = useState(false);

	const [images, setImages] = useState<ImageInputData[][]>(
		props.foreignContent.map((data) => convertUrlsToImageDatas([data.image || ""]))
	);

	const [content, setContent] = useState<string[]>(props.foreignContent.map((data) => data.content || ""));

	const handleLangChange = (index: number, subContent: string) => {
		const updatedContent = [...props.editedBlogMutiLang];
		updatedContent[index].subContent = subContent;
		props.setEditedBlogMutiLang(updatedContent);
	};

	const handleTitleChange = (index: number, title: string) => {
		const updatedContent = [...props.editedBlogMutiLang];
		updatedContent[index].title = title;
		props.setEditedBlogMutiLang(updatedContent);
	};

	const handleImageChange = (index: number, data: ImageInputData[]) => {
		const updatedImages = [...images];
		updatedImages[index] = data;
		setImages(updatedImages);
		const updatedContent = [...props.editedBlogMutiLang];
		if (updatedContent[index]) {
			updatedContent[index].image = data[0]?.urlData as string;
		}
		props.setEditedBlogMutiLang(updatedContent);
	};

	const handleContentChange = (index: number, newContent: string) => {
		const updatedContent = [...content];
		updatedContent[index] = newContent;
		setContent(updatedContent);
		const updatedBlogContent = [...props.editedBlogMutiLang];
		updatedBlogContent[index].content = newContent;
		props.setEditedBlogMutiLang(updatedBlogContent);
	};

	return (
		<>
			{props.foreignContent?.map((item, index) => (
				<div
					key={index}
					style={{ display: props.selectedTab === item.lang ? "block" : "none" }}>
					<StylePersonalLabelBank>Tiêu đề</StylePersonalLabelBank>
					<StylePagePersonContentInput
						type="text"
						value={props.editedBlogMutiLang[index]?.title || ""}
						onChange={(e) => handleTitleChange(index, e.target.value)}
						placeholder="Tiêu đề"
					/>
					<StylePersonalLabelBank>Nội dung rút gọn</StylePersonalLabelBank>
					<StylePagePersonContentInput
						type="text"
						value={props.editedBlogMutiLang[index]?.subContent || ""}
						onChange={(e) => handleLangChange(index, e.target.value)}
						placeholder="Tóm tắt nội dung"
					/>
					<AdminContentBlogManagementMuti
						content={content[index]}
						setContent={(newContent) => handleContentChange(index, newContent)}
						editorRef={props.editorRef}
						setRef={(editor) => {
							props.editorRef.current[index] = editor;
						}}
						id={`content-${index}`}
					/>

					<AvtUserManagementSection
						existedImage={""}
						avtData={images[index]}
						setAvtData={(data) => handleImageChange(index, data)}
						openImgDialog={setOpenImgDialog}
						index={index}
					/>
				</div>
			))}
		</>
	);
}
