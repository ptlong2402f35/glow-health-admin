import React, { Fragment, useState } from "react";

import {
	IconUpdateBankInformation,
	StyleEditIcon,
	StylePagePersonContentButton,
	StylePagePersonContentInput,
	StylePagePersonContentInputWrap,
	StylePagePersonContentKey,
	StylePagePersonContentRightInfo,
	StylePagePersonContentValue,
} from "./StylePerson";
import User from "../../../../models/User";
import { PersonalInfo } from "../Personalv2";

export const UpdatePersonalInfoSection = (props: {
	user: User | undefined;
	input: PersonalInfo;
	setInput: (arrow: (val: PersonalInfo) => PersonalInfo) => void;
}) => {
	const [openBankInformationDialog, setopenBankInformationDialog] = useState(false);
	const changePhone = (val: string) => {
		props.setInput((prev: PersonalInfo) => ({
			...prev,
			phone: val,
		}));
	};
	const changeFirstName = (val: string) => {
		props.setInput((prev: PersonalInfo) => ({
			...prev,
			firstName: val,
		}));
	};

	const changeLastName = (val: string) => {
		props.setInput((prev: PersonalInfo) => ({
			...prev,
			lastName: val,
		}));
	};

	return (
		<Fragment>
			<StylePagePersonContentRightInfo>
				<StylePagePersonContentKey>Họ</StylePagePersonContentKey>
				<StylePagePersonContentInputWrap>
					<StylePagePersonContentInput
						value={props.input.firstName || ""}
						onChange={(e) => changeFirstName(e.target.value)}
					/>
					<StyleEditIcon src="./static/img/ic_describe.png"></StyleEditIcon>
				</StylePagePersonContentInputWrap>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePagePersonContentKey>Tên</StylePagePersonContentKey>
				<StylePagePersonContentInputWrap>
					<StylePagePersonContentInput
						value={props.input.lastName || ""}
						onChange={(e) => changeLastName(e.target.value)}
					/>
					<StyleEditIcon src="./static/img/ic_describe.png"></StyleEditIcon>
				</StylePagePersonContentInputWrap>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePagePersonContentKey>Tài khoản</StylePagePersonContentKey>
				<StylePagePersonContentValue>{props.user?.account}</StylePagePersonContentValue>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePagePersonContentKey>Email</StylePagePersonContentKey>
				<StylePagePersonContentValue>{props.user?.email}</StylePagePersonContentValue>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePagePersonContentKey>Số điện thoại</StylePagePersonContentKey>
				<StylePagePersonContentInputWrap>
					<StylePagePersonContentInput
						value={props.input.phone || ""}
						placeholder="Thêm số điện thoại"
						onChange={(e) => changePhone(e.target.value)}
					/>
					<StyleEditIcon src="./static/img/ic_describe.png"></StyleEditIcon>
				</StylePagePersonContentInputWrap>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePagePersonContentKey>Tài khoản ngân hàng</StylePagePersonContentKey>
				<StylePagePersonContentInputWrap>
					<IconUpdateBankInformation>
						<StylePagePersonContentButton
							onClick={() => {
								setopenBankInformationDialog(true);
							}}>
							"+ Thông tin ngân hàng"
						</StylePagePersonContentButton>
						<StyleEditIcon src="./static/img/ic_describe.png"></StyleEditIcon>
					</IconUpdateBankInformation>
				</StylePagePersonContentInputWrap>
			</StylePagePersonContentRightInfo>
			{/* <DialogBankInformation
				openBankInformationDialog={openBankInformationDialog}
				setopenBankInformationDialog={setopenBankInformationDialog}
				reload={reload}
			/> */}
		</Fragment>
	);
};
