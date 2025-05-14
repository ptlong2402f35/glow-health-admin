import React, { useState } from "react";
import { Fragment, useEffect } from "react";
import useImageUploadInput, {
	ImageInputData,
	UploadInputType,
	convertUrlsToImageDatas,
} from "../../../hooks/useImageUploadInput";
import { StylePagePersonContentChangeAvtInput } from "../../personal/component/StylePerson";
import {
	AdminProductMultiImg,
	AdminProductMultiImgDelete,
	AdminProductMultiImgDiv,
	AdminProductMultiImgWrap,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import { AddImgProfilePersonal, AddImgProfilePersonalLabel } from "../../personal/styled/StylePersonal";
import { AddImgProfilePersonalv2, DialogGetInfoVoucherAdminProductMultiImg } from "../styled/StaffDetailStyle";

export const AvatarServicePersonalMulti = (props: {
	existedImage?: string | undefined | null;
	type: boolean;
	avatarSet?: (val: ImageInputData) => void;
	avtMultiData: ImageInputData[];
	setAvtMultiData: (imageDatas: ImageInputData[]) => void;
	openImgDialog: (val: boolean) => void;
}) => {
	const [numImagesSelected, setNumImagesSelected] = useState(0);
	const { onUploadInputChange, onRemoveImageClicked } = useImageUploadInput({
		type: UploadInputType.Multiple,
		imageDatas: props.avtMultiData,
		onImageDatasChange: (imageDatas) => {
			setNumImagesSelected(imageDatas.length);
			props.setAvtMultiData(imageDatas);
		},
	});
	const onOpenImgDialog = () => {
		props.openImgDialog(true);
	};
	const handleRemoveButtonClick = (imageData: ImageInputData) => {
		onRemoveImageClicked(imageData);
	};
	useEffect(() => {
		props.setAvtMultiData(props.avtMultiData);
	}, [props.avtMultiData]);

	return (
		<Fragment>
			<AdminProductMultiImgWrap>
				{props.avtMultiData.map((imageData, index) => (
					<AdminProductMultiImgDiv key={index}>
						<AdminProductMultiImgDelete onClick={() => handleRemoveButtonClick(imageData)}>
							<i
								className="fa fa-times"
								aria-hidden="true"></i>
						</AdminProductMultiImgDelete>
						<DialogGetInfoVoucherAdminProductMultiImg
							id={`personal_input_${index}`}
							src={
								imageData.urlData || props.existedImage || ("" as any)
							}></DialogGetInfoVoucherAdminProductMultiImg>
					</AdminProductMultiImgDiv>
				))}
			</AdminProductMultiImgWrap>
			{numImagesSelected < 6 && (
				<div>
					<AddImgProfilePersonalv2 htmlFor="personal_change_avatar_multi">
						<img src="./static/img/plusv2.png" />
						<StylePagePersonContentChangeAvtInput
							type={"file"}
							onChange={onUploadInputChange}
							accept="image/*"
							id="personal_change_avatar_multi"
							multiple
						/>
					</AddImgProfilePersonalv2>
				</div>
			)}
		</Fragment>
	);
};
