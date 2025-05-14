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
	StylePersonalLabelInfoStaffv2,
} from "../styled/StylePartnerDetail";
import StaffDetail, { WorkTimeType } from "../../../../models/StaffDetail";
import ErrorBoundary from "../../../../utils/ErrorBoundary";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { AvtUserManagementSection } from "../../personal/component/AvtUserManagementSection";
import { AvatarServicePersonalMulti } from "../../personal/component/AvatarServicePersonal";
import { StylePagePersonContentInput } from "../../personal/component/StylePerson";

export default function LinkSocial(props: {
	linkWebsite: string;
	setLinkWebsite: (val: string) => void;
	linkFacebook: string;
	setLinkFacebook: (val: string) => void;
	linkYoutube: string;
	setLinkYoutube: (val: string) => void;
	linkTiktok: string;
	setLinkTiktok: (val: string) => void;
	linkInstagram: string;
	setLinkInstagram: (val: string) => void;
}) {
	return (
		<>
			<div>
				<StylePersonalLabelInfoStaffv2>Link Website</StylePersonalLabelInfoStaffv2>
				<StylePagePersonContentInput
					placeholder="Nhập link Website"
					value={props.linkWebsite || ""}
					onChange={(e) => props.setLinkWebsite(e.target.value)}
				/>
				<StylePersonalLabelInfoStaffv2>Link Facebook</StylePersonalLabelInfoStaffv2>
				<StylePagePersonContentInput
					placeholder="Nhập link Facebook"
					value={props.linkFacebook || ""}
					onChange={(e) => props.setLinkFacebook(e.target.value)}
				/>
				<StylePersonalLabelInfoStaffv2>Link Youtube</StylePersonalLabelInfoStaffv2>
				<StylePagePersonContentInput
					placeholder="Nhập link Youtube"
					value={props.linkYoutube || ""}
					onChange={(e) => props.setLinkYoutube(e.target.value)}
				/>
				<StylePersonalLabelInfoStaffv2>Link Tiktok</StylePersonalLabelInfoStaffv2>
				<StylePagePersonContentInput
					placeholder="Nhập link Tiktok"
					value={props.linkTiktok || ""}
					onChange={(e) => props.setLinkTiktok(e.target.value)}
				/>
				<StylePersonalLabelInfoStaffv2>Link Instagram</StylePersonalLabelInfoStaffv2>
				<StylePagePersonContentInput
					placeholder="Nhập link Instagram"
					value={props.linkInstagram || ""}
					onChange={(e) => props.setLinkInstagram(e.target.value)}
				/>
			</div>
		</>
	);
}
