import React, { Fragment, useEffect } from "react";
import {
	AdminImgDelete,
	StylePagePersonContentAvt,
	StylePagePersonContentAvtImg,
	StylePagePersonContentAvtWrap,
	StylePagePersonContentChangeAvt,
	StylePagePersonContentChangeAvtInput,
	StyleUpdateAvatar,
} from "./StylePerson";
import useImageUploadInput, { ImageInputData, UploadInputType } from "../../../hooks/useImageUploadInput";
import StaffDetail from "../../../../models/StaffDetail";
import { PersonalReview } from "./PersonalReviewSection";

export const AvtUserManagementSection = (props: {
	existedImage?: string | undefined | null;
	type: boolean;
	avatarSet?: (val: ImageInputData) => void;
	avtData: ImageInputData[];
	setAvtData: (imageDatas: ImageInputData[]) => void;
	openImgDialog: (val: boolean) => void;
	staffDetail?: StaffDetail | undefined;
	orther?: string;
}) => {
	const { onUploadInputChange, onRemoveImageClicked } = useImageUploadInput({
		type: UploadInputType.Single,
		imageDatas: props.avtData,
		onImageDatasChange: props.setAvtData,
	});
	const onOpenImgDialog = () => {
		props.openImgDialog(true);
	};
	const handleRemoveButtonClick = (imageData: ImageInputData) => {
		onRemoveImageClicked(imageData);
	};
	useEffect(() => {
		props.setAvtData(props.avtData || []);
	}, [props.avtData]);

	useEffect(() => {
		if (props.existedImage) {
			const updatedAvtData = [...props.avtData];
			if (updatedAvtData[0]) {
				updatedAvtData[0].urlData = props.existedImage;
			}
			props.setAvtData(updatedAvtData);
		}
	}, [props.existedImage]);
	return (
		<Fragment>
			<StylePagePersonContentAvtWrap>
				<StylePagePersonContentAvt>
					{props.avtData[0]?.urlData && (
						<AdminImgDelete onClick={() => handleRemoveButtonClick(props.avtData[0])}>
							<i
								className="fa fa-times"
								aria-hidden="true"></i>
						</AdminImgDelete>
					)}
					<StylePagePersonContentAvtImg
						id="personal_input"
						alt="err"
						src={
							(props.avtData[0]?.urlData || "./static/img/profile-circle.png") as any
						}></StylePagePersonContentAvtImg>
				</StylePagePersonContentAvt>
				<StylePagePersonContentChangeAvt htmlFor={`personal_change_avatar` + props.orther}>
					<StyleUpdateAvatar src="./static/img/personUpdateIcon.jpg" />
					<StylePagePersonContentChangeAvtInput
						type={"file"}
						onChange={onUploadInputChange}
						accept="image/*"
						id={`personal_change_avatar` + props.orther}
					/>
				</StylePagePersonContentChangeAvt>
			</StylePagePersonContentAvtWrap>
		</Fragment>
	);
};
