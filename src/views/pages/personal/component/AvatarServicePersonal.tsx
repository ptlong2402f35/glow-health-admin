import React from "react";
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
import StaffDetail from "../../../../models/StaffDetail";
import { AddImgProfilePersonal, AddImgProfilePersonalLabel } from "../styled/StylePersonal";

export const AvatarServicePersonalMulti = (props: {
	staffDetail?: StaffDetail;
	existedImage?: string | undefined | null;
	type: boolean;
	avatarSet?: (val: ImageInputData) => void;
	avtMultiData: ImageInputData[];
	setAvtMultiData: (imageDatas: ImageInputData[]) => void;
	openImgDialog: (val: boolean) => void;
	orther?: string;
}) => {
	const { onUploadInputChange, onRemoveImageClicked } = useImageUploadInput({
		type: UploadInputType.Multiple,
		imageDatas: props.avtMultiData,
		onImageDatasChange: props.setAvtMultiData,
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
			<AddImgProfilePersonal>
				<AddImgProfilePersonalLabel>Thêm ảnh</AddImgProfilePersonalLabel>
				<label htmlFor={`personal_change_avatar_multi` + props.orther}>
					<img src="./static/img/plus.png" />
					<StylePagePersonContentChangeAvtInput
						type={"file"}
						onChange={onUploadInputChange}
						accept="image/*"
						id={`personal_change_avatar_multi` + props.orther}
						multiple
					/>
				</label>
			</AddImgProfilePersonal>
			<AdminProductMultiImgWrap>
				{props.avtMultiData.map((imageData, index) => (
					<AdminProductMultiImgDiv key={index}>
						<AdminProductMultiImgDelete onClick={() => handleRemoveButtonClick(imageData)}>
							<i
								className="fa fa-times"
								aria-hidden="true"></i>
						</AdminProductMultiImgDelete>
						<AdminProductMultiImg
							id={`personal_input_${index}`}
							src={imageData.urlData || props.existedImage || ("" as any)}></AdminProductMultiImg>
					</AdminProductMultiImgDiv>
				))}
			</AdminProductMultiImgWrap>
		</Fragment>
	);
};
