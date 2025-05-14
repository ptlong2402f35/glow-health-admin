import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	StyleEditIcon,
	StylePagePersonContentChangeButton,
	StylePagePersonContentInput,
	StylePagePersonContentKey,
	StylePagePersonContentRightInfo,
	StylePagePersonHeader,
	StylePagePersonWrapRight,
	StyledPaPersonContentChangeBtn,
	StylePasswordWrap,
	StyledPaPersonContentChangeBtnRes,
	StylePagePersonInputWrap,
	xStylePageSet,
	PersonalTextError,
	StylePagePersonPasswordInputWrap,
} from "./component/StylePerson";
import { usePersonalChangePassword } from "./hooks/useChangePassword";
import { TextError } from "../login/styled/LoginStyles";
import {
	StyledPersonalInfov2ChangeBtn,
	StyledPersonalInfov2ChangeBtnWrap,
	StyledPersonalInfov2ChangeConfirmBtn,
	StyledPersonalInfov2ChangeContentItem,
	StyledPersonalInfov2ChangeWrap,
	StyledPersonalInfov2Contain,
	StyledPersonalInfov2ContentItem,
	StyledPersonalInfov2ContentWrap,
	StyledPersonalInfov2ControlField,
	StyledPersonalInfov2ControlWrap,
	StyledPersonalInfov2LockChange,
	StyledPersonalInfov2LockWrap,
	StyledPersonalInfov2Name,
	StyledPersonalInfov2TextChange,
	StyledPersonalInfov2TextInfo,
	StyledPersonalInfov2TextLabel,
	StyledPersonalInfov2TextPass,
	StyledPersonalInfov2UnChangeSection,
	StyledPersonalPassContentWrap,
	StyledPersonalPassWordWrap,
} from "./styled/StylePersonalInfo";
import useSubmitUpdate from "./hooks/useSubmitUpdatePersonalInfo";
import User from "../../../models/User";

export default function PersonalPassword(props: {
	setPageType: (val: string) => void;
	userEmail: string | null | undefined;
}) {
	const [isDisable, setIsDisable] = useState(false);
	const schema = yup.object().shape({
		oldPassword: yup.string().trim().required("Vui lòng nhập trường này").min(8, "Mật khẩu gồm ít nhất 8 kí tự"),
		newPassword: yup.string().trim().required("Vui lòng nhập trường này").min(8, "Mật khẩu gồm ít nhất 8 kí tự"),
		rePassword: yup
			.string()
			.trim()
			.required("Vui lòng nhập trường này")
			.oneOf([yup.ref("newPassword"), null], "Mật khẩu nhập lại không chính xác"),
	});

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<{
		oldPassword: string;
		newPassword: string;
		rePassword: string;
	}>({
		resolver: yupResolver(schema),
	});

	const { useConfirmChangePasswword } = usePersonalChangePassword({
		setIsDisable: setIsDisable,
		setClearInput: reset,
	});

	const onChangePassword = (data: { oldPassword: string; newPassword: string; rePassword: string }) => {
		useConfirmChangePasswword(props.userEmail || "", data.oldPassword, data.newPassword, data.rePassword);
	};

	return (
		<StylePagePersonWrapRight>
			<form onSubmit={handleSubmit(onChangePassword)}>
				<StylePagePersonHeader>Đổi mật khẩu</StylePagePersonHeader>
				<StylePasswordWrap>
					<StylePagePersonContentRightInfo>
						<StylePagePersonContentKey xStylePageSet={xStylePageSet}>Mật khẩu cũ</StylePagePersonContentKey>
						<StylePagePersonPasswordInputWrap>
							<StylePagePersonInputWrap>
								<StylePagePersonContentInput
									{...register("oldPassword")}
									type="password"
								/>
								<StyleEditIcon src="./static/img/ic_describe.png"></StyleEditIcon>
							</StylePagePersonInputWrap>
							<PersonalTextError>{errors?.oldPassword?.message}</PersonalTextError>
						</StylePagePersonPasswordInputWrap>
					</StylePagePersonContentRightInfo>
					<StylePagePersonContentRightInfo>
						<StylePagePersonContentKey xStylePageSet={xStylePageSet}>
							Mật khẩu mới
						</StylePagePersonContentKey>
						<StylePagePersonPasswordInputWrap>
							<StylePagePersonInputWrap>
								<StylePagePersonContentInput
									{...register("newPassword")}
									type="password"
								/>
								<StyleEditIcon src="./static/img/ic_describe.png"></StyleEditIcon>
							</StylePagePersonInputWrap>
							<PersonalTextError>{errors?.newPassword?.message}</PersonalTextError>
						</StylePagePersonPasswordInputWrap>
					</StylePagePersonContentRightInfo>
					<StylePagePersonContentRightInfo>
						<StylePagePersonContentKey xStylePageSet={xStylePageSet}>
							Nhập lại mật khẩu mới
						</StylePagePersonContentKey>
						<StylePagePersonPasswordInputWrap>
							<StylePagePersonInputWrap>
								<StylePagePersonContentInput
									{...register("rePassword")}
									type="password"
								/>
								<StyleEditIcon src="./static/img/ic_describe.png"></StyleEditIcon>
							</StylePagePersonInputWrap>
							<PersonalTextError>{errors?.rePassword?.message}</PersonalTextError>
						</StylePagePersonPasswordInputWrap>
					</StylePagePersonContentRightInfo>
				</StylePasswordWrap>
				<StylePagePersonContentChangeButton>
					<StyledPaPersonContentChangeBtn
						isDisable={isDisable}
						disabled={isDisable}>
						Đổi mật khẩu
					</StyledPaPersonContentChangeBtn>
					<StyledPaPersonContentChangeBtnRes
						isDisable={isDisable}
						disabled={isDisable}>
						Đổi mật khẩu
					</StyledPaPersonContentChangeBtnRes>
				</StylePagePersonContentChangeButton>
			</form>
		</StylePagePersonWrapRight>
	);
}
