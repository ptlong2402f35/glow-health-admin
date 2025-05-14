import React, { Fragment, useEffect, useState } from "react";
import useImageUploadInput, {
	ImageInputData,
	UploadInputType,
	convertUrlsToImageDatas,
} from "../../../hooks/useImageUploadInput";
import StaffService from "../../../../models/StaffService";
import { StylePagePersonContentChangeAvtInput, StylePagePersonContentInput } from "./StylePerson";
import {
	AdminProductMultiImg,
	AdminProductMultiImgWrap,
} from "../../adminProductManagement/styled/ProductManagementStyle";

export default function UpdateServicePersonalInput(props: {
	staffService?: StaffService;
	setExperienceYears: (value: string) => void;
	experienceYears: string;
	avtMultiData: ImageInputData[];
	setAvtMultiData: (imageDatas: ImageInputData[]) => void;
}) {
	const [openImgMultiDialog, setOpenImgMultiDialog] = useState(false);
	const handleExperienceYearsChange = (event: any) => {
		props.setExperienceYears(event.target.value);
	};

	return (
		<>
			<div>
				<label>Năm kinh nghiệm</label>
				<StylePagePersonContentInput
					placeholder="Nhập năm kinh nghiệm"
					value={props.experienceYears || ""}
					onChange={handleExperienceYearsChange}></StylePagePersonContentInput>
			</div>
			<div>
				<AvatarServiceStaffMulti
					type={true}
					avtMultiData={props.avtMultiData}
					setAvtMultiData={props.setAvtMultiData}
					openImgDialog={setOpenImgMultiDialog}
				/>
			</div>
		</>
	);
}

export const AvatarServiceStaffMulti = (props: {
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
			<label>Thêm ảnh</label>
			<label htmlFor="staff_change_avatar_multi">
				<img src="./static/img/plus.png" />
				<StylePagePersonContentChangeAvtInput
					type={"file"}
					onChange={onUploadInputChange}
					accept="image/*"
					id="staff_change_avatar_multi"
				/>
			</label>
			<AdminProductMultiImgWrap>
				{props.avtMultiData.map((imageData, index) => (
					<div
						key={index}
						onClick={onOpenImgDialog}>
						<AdminProductMultiImg
							id={`staff_input_${index}`}
							src={imageData.urlData || props.existedImage || ("" as any)}></AdminProductMultiImg>
					</div>
				))}
			</AdminProductMultiImgWrap>
		</Fragment>
	);
};
