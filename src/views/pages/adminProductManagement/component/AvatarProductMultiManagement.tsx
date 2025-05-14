import React from "react";
import { Fragment, useEffect } from "react";
import useImageUploadInput, { ImageInputData, UploadInputType } from "../../../hooks/useImageUploadInput";
import { StylePagePersonContentChangeAvtInput } from "../../personal/component/StylePerson";
import {
	AdminProductMultiImg,
	AdminProductMultiImgWrap,
	AdminProductSingleImg,
	ButtonAddAdminProductManagement,
} from "../styled/ProductManagementStyle";

export const AvtProductMultiManagementSection = (props: {
	existedImage?: string | undefined | null;
	type: boolean;
	avatarSet?: (val: ImageInputData) => void;
	avtMultiData: ImageInputData[];
	setAvtMultiData: (imageDatas: ImageInputData[]) => void;
	openImgDialog: (val: boolean) => void;
}) => {
	const { onUploadInputChange } = useImageUploadInput({
		type: UploadInputType.Multiple,
		imageDatas: props.avtMultiData,
		onImageDatasChange: props.setAvtMultiData,
	});
	const onOpenImgDialog = () => {
		props.openImgDialog(true);
	};
	useEffect(() => {
		props.setAvtMultiData(props.avtMultiData);
	}, [props.avtMultiData]);

	return (
		<Fragment>
			<label>Thêm ảnh dịch vụ</label>
			<label htmlFor="personal_change_avatar_multi">
				<img src="./static/img/plus.png" />
				<StylePagePersonContentChangeAvtInput
					type={"file"}
					onChange={onUploadInputChange}
					accept="image/*"
					id="personal_change_avatar_multi"
				/>
			</label>
			<AdminProductMultiImgWrap>
				{props.avtMultiData.map((imageData, index) => (
					<div
						key={index}
						onClick={onOpenImgDialog}>
						<AdminProductMultiImg
							id={`personal_input_${index}`}
							src={imageData.urlData || props.existedImage || ("" as any)}></AdminProductMultiImg>
					</div>
				))}
			</AdminProductMultiImgWrap>
		</Fragment>
	);
};
