import { useRef } from "react";
import http from "../../../../services/http";

export default function UploadImgContentBlogMutiLang(props: { editorRef: React.MutableRefObject<any[]> }) {
	const handleSaveButtonClick = async () => {
		let updatedContentMuti = [];
		if (props.editorRef.current) {
			for (let refItem of props.editorRef.current) {
				const newContent = refItem?.getContent();
				const imgTags = Array.from(
					new DOMParser().parseFromString(newContent, "text/html").querySelectorAll("img")
				);
				const imageUrls = imgTags
					.map((imgTag) => imgTag.getAttribute("src"))
					.filter((url) => url !== null) as string[];

				const imageInputDataArray = await Promise.all(
					imageUrls.map(async (imageUrl) => {
						if (imageUrl.includes("data:image")) {
							const response = await fetch(imageUrl);
							const blob = await response.blob();
							return new File([blob], "image.png", { type: response.headers.get("content-type") || "" });
						} else {
							return imageUrl;
						}
					})
				);

				let updatedContent = newContent;

				for (let i = 0; i < imageUrls.length; i++) {
					const imageUrl = imageUrls[i];
					const imageInputData = imageInputDataArray[i];

					try {
						if (imageUrl && imageInputData) {
							if (typeof imageInputData === "string") {
								updatedContent = updatedContent.replace(imageUrl, imageInputData);
							} else {
								const value = new FormData();
								value.append("image", imageInputData);
								const uploadUrl = "/aws-upload-single-image";
								const uploadedUrl = await http.post(uploadUrl, value);

								updatedContent = updatedContent.replace(imageUrl, uploadedUrl.data.path);
							}
						}
					} catch (error) {
						console.error(error);
					}
				}
				updatedContentMuti.push(updatedContent);
			}

			return updatedContentMuti;
		}
	};
	return {
		handleSaveButtonClick,
	};
}
