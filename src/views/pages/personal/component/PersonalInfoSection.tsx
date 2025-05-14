import React, { Fragment } from "react";

import { StylePagePersonContentKey, StylePagePersonContentRightInfo, StylePagePersonContentValue } from "./StylePerson";
import User from "../../../../models/User";

export const PersonalInfoSection = (props: { user: User | undefined }) => {
	return (
		<Fragment>
			{/* <StylePagePersonContentRightInfo>
				<StylePagePersonContentKey>Họ và Tên</StylePagePersonContentKey>
				<StylePagePersonContentValue>{props.user?.userName}</StylePagePersonContentValue>
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
				<StylePagePersonContentValue>{props.user?.phone}</StylePagePersonContentValue>
			</StylePagePersonContentRightInfo>
			<StylePagePersonContentRightInfo>
				<StylePagePersonContentKey>Tài khoản ngân hàng</StylePagePersonContentKey>
				<StylePagePersonContentValue>{props.user?.bankName}</StylePagePersonContentValue>
			</StylePagePersonContentRightInfo> */}
		</Fragment>
	);
};
