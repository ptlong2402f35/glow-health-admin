import React, { ChangeEventHandler, useEffect, useState } from "react";

import {
	StyleAvatarUser,
	StyleAvatarUserWrap,
	StyleInformationUser,
	StylePagePersonContentAvtImg,
	StylePagePersonContentAvtMenu,
	StylePagePersonContentAvtWrapMenu,
	StylePagePersonContentAvtWrapMenuRes,
	StylePagePersonContentChangeAvtInput,
	StylePagePersonContentChangeAvtMenu,
	StylePagePersonMenu,
	StylePagePersonText,
	StylePagePersonText1,
	StyleUpdateAvatar,
} from "./StylePerson";
import User from "../../../../models/User";
import useOnChangeUpdate from "../hooks/useOnChangeUpdatePersonalInfo";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import { PersonalInfo } from "../Personalv2";
import UserManagement from "../../../../models/UserGlow";

export default function PersonalInfoMenu(props: {
	personalInfo: UserManagement | undefined;
	openImgDialog: (val: boolean) => void;
	setInput: (arrow: (val: PersonalInfo) => PersonalInfo) => void;
	input: PersonalInfo;
	avatarData: ImageInputData[];
	setImageAvt: (val: string) => void;
	setAvatarData: (imageDatas: ImageInputData[]) => void;
}) {
	const onOpenImgDialog = () => {
		props.openImgDialog(true);
	};
	const { onUploadInputChangeRes } = useOnChangeUpdate({ personalInfo: props.personalInfo });
	useEffect(() => {
		props.setAvatarData(props.avatarData);
	}, [props.avatarData]);

	useEffect(() => {
		props.setAvatarData(convertUrlsToImageDatas([props.personalInfo?.urlImage || ""]));
	}, [props.personalInfo]);
	return (
		<>
			<StylePagePersonMenu>
				<StyleAvatarUserWrap>
					<StyleAvatarUser>
						<StylePagePersonContentAvtWrapMenu>
							<StylePagePersonContentAvtMenu onClick={onOpenImgDialog}>
								<StylePagePersonContentAvtImg
									id="personal_input"
									src={(props.personalInfo?.urlImage || "") as any}></StylePagePersonContentAvtImg>
							</StylePagePersonContentAvtMenu>
							<StylePagePersonContentChangeAvtMenu htmlFor="personal_change_avatars">
								<StyleUpdateAvatar src="./static/img/updateavatar.png" />
								<StylePagePersonContentChangeAvtInput
									type={"file"}
									onChange={onUploadInputChangeRes}
									accept="image/*"
									id="personal_change_avatars"
								/>
							</StylePagePersonContentChangeAvtMenu>
						</StylePagePersonContentAvtWrapMenu>
						<StylePagePersonContentAvtWrapMenuRes>
							<StylePagePersonContentAvtMenu>
								<StylePagePersonContentAvtImg
									id="personal_input"
									alt="err"
									src={(props.avatarData[0]?.urlData || "") as any}></StylePagePersonContentAvtImg>
							</StylePagePersonContentAvtMenu>
						</StylePagePersonContentAvtWrapMenuRes>
					</StyleAvatarUser>
				</StyleAvatarUserWrap>
				<StyleInformationUser>
					<StylePagePersonText>Tài khoản của</StylePagePersonText>
					<StylePagePersonText1>
						{props.input.userName ? `${props.input.userName}` : `${props.personalInfo?.userName}`}
					</StylePagePersonText1>
				</StyleInformationUser>
			</StylePagePersonMenu>
		</>
	);
}
