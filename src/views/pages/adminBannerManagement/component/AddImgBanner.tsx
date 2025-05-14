import React, { Fragment, useEffect } from "react";
import useImageUploadInput, { ImageInputData, UploadInputType } from "../../../hooks/useImageUploadInput";
import StaffDetail from "../../../../models/StaffDetail";
import {
	AdminImgDelete,
	StylePagePersonContentAvt,
	StylePagePersonContentAvtImg,
	StylePagePersonContentAvtWrap,
	StylePagePersonContentChangeAvt,
	StylePagePersonContentChangeAvtInput,
	StyleUpdateAvatar,
} from "../../personal/component/StylePerson";
import { StyleBannerContentAvt } from "../styled/StyledBannerManagement";

export const AvtBannerManagementSection = (props: {
	// existedImage?: string | undefined | null;
	avtData: ImageInputData;
	setAvtData: (imageData: ImageInputData | null) => void;
	// openImgDialog: (val: boolean) => void;
	htmlFor?: string;
}) => {
	const { onUploadInputChange, onRemoveImageClicked } = useImageUploadInput({
		type: UploadInputType.Single,
		imageDatas: [props.avtData],
		onImageDatasChange: (imageDatas: ImageInputData[]) =>
			props.setAvtData(imageDatas?.length ? imageDatas[0] : null),
	});

	const handleRemoveButtonClick = (imageData: ImageInputData) => {
		onRemoveImageClicked(imageData);
	};

	return (
		<Fragment>
			<StylePagePersonContentAvtWrap>
				<StyleBannerContentAvt>
					{props.avtData?.urlData && (
						<AdminImgDelete onClick={() => handleRemoveButtonClick(props.avtData)}>
							<i
								className="fa fa-times"
								aria-hidden="true"></i>
						</AdminImgDelete>
					)}
					<StylePagePersonContentAvtImg
						id="personal_input"
						alt="err"
						src={
							(props.avtData?.urlData || "./static/img/no-avatar.png") as any
						}></StylePagePersonContentAvtImg>
				</StyleBannerContentAvt>
				<StylePagePersonContentChangeAvt htmlFor={`personal_change_avatar_${props.htmlFor}`}>
					<StyleUpdateAvatar src="./static/img/personUpdateIcon.jpg" />
					<StylePagePersonContentChangeAvtInput
						type={"file"}
						onChange={onUploadInputChange}
						accept="image/*"
						id={`personal_change_avatar_${props.htmlFor}`}
					/>
				</StylePagePersonContentChangeAvt>
			</StylePagePersonContentAvtWrap>
		</Fragment>
	);
};
