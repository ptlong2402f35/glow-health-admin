import React, { Fragment, useEffect } from "react";
import {
	StylePagePersonContentAvt,
	StylePagePersonContentAvtImg,
	StylePagePersonContentAvtWrap,
	StylePagePersonContentChangeAvt,
	StylePagePersonContentChangeAvtInput,
	StylePagePersonContentChangeAvtWrap,
	StyleUpdateAvatar,
} from "./StylePerson";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import User from "../../../../models/User";
import useOnChangeUpdate from "../hooks/useOnChangeUpdatePersonalInfo";
import UserManagement from "../../../../models/UserGlow";

export default function AvtUserManagementSectionv2(props: {
	personalInfo: UserManagement | undefined;
	avatarSet?: (val: ImageInputData) => void;
	openImgDialog: (val: boolean) => void;
	avtData: ImageInputData[];
	setAvtData: (imageDatas: ImageInputData[]) => void;
	reload: () => void;
	setImgDialog: (val: string) => void;
}) {
	const { onUploadInputChangeRes } = useOnChangeUpdate({
		personalInfo: props.personalInfo,
	});
	const onUploadInputClick = (e: any) => {
		e.stopPropagation();
	};
	const onOpenImgDialog = () => {
		props.openImgDialog(true);
	};
	useEffect(() => {
		if (!props.avtData) return;
	}, [props.avtData]);

	useEffect(() => {
		props.setAvtData(convertUrlsToImageDatas([props.personalInfo?.urlImage || ""]));
		props.setImgDialog(props.personalInfo?.urlImage || "");
	}, [props.personalInfo?.urlImage]);

	return (
		<Fragment>
			<StylePagePersonContentAvtWrap>
				<StylePagePersonContentAvt>
					<StylePagePersonContentAvtImg
						id="personal_input"
						alt="err"
						src={(props.avtData[0]?.urlData || "") as any}></StylePagePersonContentAvtImg>
				</StylePagePersonContentAvt>
				<StylePagePersonContentChangeAvtWrap onClick={onOpenImgDialog}>
					<StylePagePersonContentChangeAvt
						htmlFor="personal_change_avatar"
						onClick={(e) => onUploadInputClick(e)}>
						<StyleUpdateAvatar src="./static/img/personUpdateIcon.jpg" />
						<StylePagePersonContentChangeAvtInput
							type={"file"}
							onChange={onUploadInputChangeRes}
							accept="image/*"
							id="personal_change_avatar"
						/>
					</StylePagePersonContentChangeAvt>
				</StylePagePersonContentChangeAvtWrap>
			</StylePagePersonContentAvtWrap>
		</Fragment>
	);
}
