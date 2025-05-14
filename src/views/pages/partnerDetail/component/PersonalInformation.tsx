import React, { useState } from "react";
import { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import {
	StyledTimeWorkUpdateWrap,
	StyledTimeWorkTitle,
	StyledTimeWorkAddBtn,
	StyledTimeWorkUpdateInputWrap,
	StyledTimeWorkInputHead,
	StyledTimeWorkLabel,
	StyledTimeWorkInput,
	StyledTimeWorkElementLabel,
	StyledTimeWorkInputContainer,
	StyledTimeWorkDelBtn,
	StyledTimeWorkHeader,
	StylePersonalLabelInfoStaff,
} from "../styled/StylePartnerDetail";
import StaffDetail, { WorkTimeType } from "../../../../models/StaffDetail";
import ErrorBoundary from "../../../../utils/ErrorBoundary";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../../personal/component/StylePerson";
import { AvtUserManagementSection } from "../../personal/component/AvtUserManagementSection";
import { AvatarServicePersonalMulti } from "../../personal/component/AvatarServicePersonal";

export default function PersonalInformation(props: {
	identifyName: string;
	setidentifyName: (val: string) => void;
	identifyBirthday: string;
	setIdentifyBirthday: (val: string) => void;
	identifyAddress: string;
	setIdentifyAddress: (val: string) => void;
	dateOfIssueIdentify: string;
	setDateOfIssueIdentify: (val: string) => void;
	placeOfIssueIdentify: string;
	setPlaceOfIssueIdentify: (val: string) => void;
	imagesIdentify: ImageInputData[];
	setImagesIdentify: (imageDatas: ImageInputData[]) => void;
	imagesSelf: ImageInputData[];
	setImagesSelf: (imageDatas: ImageInputData[]) => void;
	identifyCard: string;
	setIdentifyCard: (val: string) => void;
	staffDetail?: StaffDetail;
}) {
	const [openImgDialog, setOpenImgDialog] = useState(false);
	const [openImgMultiDialog, setOpenImgMultiDialog] = useState(false);

	return (
		<>
			<div>
			<StylePersonalLabelBank>Tên</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Tên"
					value={props.identifyName || ""}
					onChange={(e) => props.setidentifyName(e.target.value)}
				/>
				{/* <StylePersonalLabelBank>Ngày sinh</StylePersonalLabelBank>
				<StylePagePersonContentInput
				 type="date"
					value={props.identifyBirthday ? props.identifyBirthday.split("T")[0] : ""}
					onChange={(e) => props.setIdentifyBirthday(e.target.value)}
				/> */}
				<StylePersonalLabelBank>Địa chỉ</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Địa chỉ"
					value={props.identifyAddress || ""}
					onChange={(e) => props.setIdentifyAddress(e.target.value)}
				/>
				<StylePersonalLabelBank>Ngày cấp</StylePersonalLabelBank>
				<StylePagePersonContentInput
					 type="date"
					value={props.dateOfIssueIdentify ? props.dateOfIssueIdentify.split("T")[0] : ""}
					onChange={(e) => props.setDateOfIssueIdentify(e.target.value)}
				/>
				<StylePersonalLabelBank>Nơi cấp</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nơi cấp"
					value={props.placeOfIssueIdentify || ""}
					onChange={(e) => props.setPlaceOfIssueIdentify(e.target.value)}
				/>
				<StylePersonalLabelBank>Số CMND</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập số CMND/CCCD"
					value={props.identifyCard || ""}
					onChange={(e) => props.setIdentifyCard(e.target.value)}
				/>
				<StylePersonalLabelInfoStaff>Ảnh Selfie</StylePersonalLabelInfoStaff>
				<AvtUserManagementSection
					existedImage={props.staffDetail?.selfImages}
					type={true}
					openImgDialog={setOpenImgDialog}
					avtData={props.imagesSelf}
					setAvtData={props.setImagesSelf}
					orther="identity"
				/>
				<StylePersonalLabelInfoStaff>Ảnh CMND/CCCD</StylePersonalLabelInfoStaff>
				<AvatarServicePersonalMulti
					type={true}
					avtMultiData={props.imagesIdentify}
					setAvtMultiData={props.setImagesIdentify}
					openImgDialog={setOpenImgMultiDialog}
					orther="identity"
				/>
			</div>
		</>
	);
}
