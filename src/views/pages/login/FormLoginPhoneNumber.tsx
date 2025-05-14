import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import AuthService from "../../../services/AuthService";
import { AuthenticationContext } from "../../controls/auth/AuthenticationWrap";
import { IFormLoiginPhoneNumber } from "../../interface/interfaceLoginPhoneNumber";
import { loginOTPSetCode, loginOTPSetPhoneNumber } from "./hook/useFireBase";
import { getBackPath } from "./hook/useGetBackPack";
import {
	FormLoginWrap,
	InputPhoneNumber,
	LabelInputPhoneNumber,
	ButtonInputPhoneNumber,
	ButtonCloseForm,
	Capcha,
} from "./styled/LoginStyles";

interface Iprops {
	closeForm: boolean;
	setCloseForm: Function;
}

export default function FormLoginPhoneNumber({ closeForm, setCloseForm }: Iprops) {
	const history = useHistory();
	const { search } = useLocation();
	const backPath = getBackPath(search);
	const authCtx = useContext(AuthenticationContext);
	const { onLoginSuccess } = authCtx || {};
	const { register, handleSubmit } = useForm<IFormLoiginPhoneNumber>();

	const onSubmitPhoneNumber = async (data: IFormLoiginPhoneNumber) => {
		if (!data.phoneNumber) {
			return;
		}
		var convertNumber = data.phoneNumber.trim();
		if (convertNumber.startsWith("0")) {
			convertNumber = "+84" + convertNumber.substring(1, convertNumber.length);
		}
		var res = await loginOTPSetPhoneNumber(convertNumber, "login-recaptcha-box");
		if (res.state) {
		}
	};

	const onSubmitOtp = async (data: IFormLoiginPhoneNumber) => {
		var res = await loginOTPSetCode(data.codeOtp);
		if (res && res.value && res.value.accessToken) {
			try {
				let user = await AuthService.loginPhoneNumber(res.value.accessToken);
				onLoginSuccess?.(user, () => {
					if (backPath) {
						history.push(backPath);
					} else {
						history.push("/");
					}
				});
			} catch (err) {
				console.error(err);
			}
		}
	};

	return (
		<FormLoginWrap closeForm={closeForm}>
			<form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
				<ButtonCloseForm onClick={() => setCloseForm(!closeForm)}>X</ButtonCloseForm>
				<LabelInputPhoneNumber>Nhập số điện thoại</LabelInputPhoneNumber>
				<InputPhoneNumber {...register("phoneNumber")} />
				<ButtonInputPhoneNumber type="submit">Nhận mã OTP</ButtonInputPhoneNumber>
				<Capcha id="login-recaptcha-box"></Capcha>
			</form>
			<form onSubmit={handleSubmit(onSubmitOtp)}>
				<LabelInputPhoneNumber>Nhập mã xác thực OTP</LabelInputPhoneNumber>
				<InputPhoneNumber {...register("codeOtp")} />
				<ButtonInputPhoneNumber type="submit">Xác nhận</ButtonInputPhoneNumber>
			</form>
		</FormLoginWrap>
	);
}
