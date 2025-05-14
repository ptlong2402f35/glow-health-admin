import React from "react";
import { Fragment, useEffect } from "react";
import useImageUploadInput, { ImageInputData, UploadInputType } from "../../../hooks/useImageUploadInput";
import { StylePagePersonContentChangeAvtInput } from "../../personal/component/StylePerson";
import {
	AdminProductSingleImg,
	AdminProductSingleImgLabel,
	AdminProductSingleImgWrap,
} from "../styled/ProductManagementStyle";

export const AvtProductManagementSection = (props: {
	existedImage?: string | undefined | null;
	type: boolean;
	avatarSet?: (val: ImageInputData) => void;
	avtData: ImageInputData[];
	setAvtData: (imageDatas: ImageInputData[]) => void;
	openImgDialog: (val: boolean) => void;
}) => {
	const { onUploadInputChange } = useImageUploadInput({
		type: UploadInputType.Single,
		imageDatas: props.avtData,
		onImageDatasChange: props.setAvtData,
	});
	const onOpenImgDialog = () => {
		props.openImgDialog(true);
	};
	useEffect(() => {
		props.setAvtData(props.avtData);
	}, [props.avtData]);

	return (
		<Fragment>
			<label>Ảnh đại diện</label>
			<AdminProductSingleImgWrap onClick={onOpenImgDialog}>
				<AdminProductSingleImg
					id="personal_input"
					src={(props.avtData[0]?.urlData || props.existedImage || "") as any}></AdminProductSingleImg>

				<AdminProductSingleImgLabel htmlFor="personal_change_avatar">
					<img src="./static/img/personUpdateIcon.jpg" />
					<StylePagePersonContentChangeAvtInput
						type={"file"}
						onChange={onUploadInputChange}
						accept="image/*"
						id="personal_change_avatar"
					/>
				</AdminProductSingleImgLabel>
			</AdminProductSingleImgWrap>
		</Fragment>
	);
};
