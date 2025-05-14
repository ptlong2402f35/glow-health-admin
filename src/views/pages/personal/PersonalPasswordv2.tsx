import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalTextError } from "./component/StylePerson";
import { usePersonalChangePassword } from "./hooks/useChangePassword";
import {
	StyledPersonalInfov2ChangeBtn,
	StyledPersonalInfov2ChangeBtnWrap,
	StyledPersonalInfov2ChangeConfirmBtn,
	StyledPersonalInfov2ChangeContentItem,
	StyledPersonalInfov2ChangeWrap,
	StyledPersonalInfov2Contain,
	StyledPersonalInfov2ContentWrap,
	StyledPersonalInfov2ControlField,
	StyledPersonalInfov2ControlWrap,
	StyledPersonalInfov2TextChange,
	StyledPersonalInfov2TextLabel,
	StyledPersonalInfov2TextPass,
	StyledPersonalInfov2UnChangeSection,
	StyledPersonalPassContentWrap,
	StyledPersonalPassWordWrap,
} from "./styled/StylePersonalInfo";
import User from "../../../models/User";
import UserManagement from "../../../models/UserGlow";

export default function PersonalPasswordv2(props: { personalData: UserManagement | undefined }) {
	const [changeType, setChangeType] = useState(false);

	return (
		<StyledPersonalPassWordWrap>
			<StyledPersonalInfov2Contain>
				{!changeType && (
					<StyledPersonalInfov2UnChangeSection>
						<StyledPersonalInfov2ControlWrap>
							<StyledPersonalInfov2ControlField onClick={() => setChangeType(true)}>
								<img src="./static/img/personal_change_icon.jpg" />
							</StyledPersonalInfov2ControlField>
						</StyledPersonalInfov2ControlWrap>
						<StyledPersonalInfov2ContentWrap>
							<StyledPersonalPassContentWrap>
								<StyledPersonalInfov2TextLabel>Mật khẩu:</StyledPersonalInfov2TextLabel>
								<StyledPersonalInfov2TextPass>**********</StyledPersonalInfov2TextPass>
							</StyledPersonalPassContentWrap>
						</StyledPersonalInfov2ContentWrap>
					</StyledPersonalInfov2UnChangeSection>
				)}

				{changeType && (
					<PersonalPasswordv2ChangeSection
						userEmail={props.personalData?.email}
						setChangeType={setChangeType}
					/>
				)}
			</StyledPersonalInfov2Contain>
		</StyledPersonalPassWordWrap>
	);
}

export function PersonalPasswordv2ChangeSection(props: {
	userEmail: string | null | undefined;
	setChangeType: (val: boolean) => void;
}) {
	const [isDisable, setIsDisable] = useState(false);
	const [isVisibleOldpass, setIsVisibleOldpass] = useState(false);
	const [isVisibleNewpass, setIsVisibleNewpass] = useState(false);
	const [isVisibleRepass, setIsVisibleRepass] = useState(false);
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

	const onCancelChange = () => {
		props.setChangeType(false);
		reset();
	};

	const onChangePassword = (data: { oldPassword: string; newPassword: string; rePassword: string }) => {
		useConfirmChangePasswword(props.userEmail || "", data.oldPassword, data.newPassword, data.rePassword);
		props.setChangeType(false);
	};
	return (
		<StyledPersonalInfov2ChangeWrap>
			<form onSubmit={handleSubmit(onChangePassword)}>
				<StyledPersonalInfov2ContentWrap>
					<StyledPersonalInfov2ChangeContentItem>
						<StyledPersonalInfov2TextLabel>Mật khẩu cũ:</StyledPersonalInfov2TextLabel>
						<StyledPersonalInfov2TextChange
							{...register("oldPassword")}
							type={isVisibleOldpass ? "text" : "password"}></StyledPersonalInfov2TextChange>
						<PersonalTextError>{errors?.oldPassword?.message}</PersonalTextError>
					</StyledPersonalInfov2ChangeContentItem>
					<StyledPersonalInfov2ChangeContentItem>
						<StyledPersonalInfov2TextLabel>Mật khẩu mới:</StyledPersonalInfov2TextLabel>
						<StyledPersonalInfov2TextChange
							{...register("newPassword")}
							type={isVisibleNewpass ? "text" : "password"}></StyledPersonalInfov2TextChange>
						<PersonalTextError>{errors?.newPassword?.message}</PersonalTextError>
					</StyledPersonalInfov2ChangeContentItem>
					<StyledPersonalInfov2ChangeContentItem>
						<StyledPersonalInfov2TextLabel>Nhập lại mật khẩu mới:</StyledPersonalInfov2TextLabel>
						<StyledPersonalInfov2TextChange
							{...register("rePassword")}
							type={isVisibleRepass ? "text" : "password"}></StyledPersonalInfov2TextChange>
						<PersonalTextError>{errors?.rePassword?.message}</PersonalTextError>
					</StyledPersonalInfov2ChangeContentItem>
				</StyledPersonalInfov2ContentWrap>
				<StyledPersonalInfov2ChangeBtnWrap>
					<StyledPersonalInfov2ChangeBtn
						onClick={onCancelChange}
						disabled={isDisable}
						$isDisable={isDisable}>
						Hủy
					</StyledPersonalInfov2ChangeBtn>
					<StyledPersonalInfov2ChangeConfirmBtn
						disabled={isDisable}
						$isDisable={isDisable}>
						Cập nhật
					</StyledPersonalInfov2ChangeConfirmBtn>
				</StyledPersonalInfov2ChangeBtnWrap>
			</form>
		</StyledPersonalInfov2ChangeWrap>
	);
}
