import React, { createContext, useEffect, useRef, useState } from "react";
import {
	ForgotPassword,
	FormBackDialogLoginImg,
	FormLoginContinue,
	FormLoginDescription,
	FormLoginInput,
	FormLoginInputImg,
	FormLoginInputImgWrap,
	FormLoginInputWrap,
	FormLoginPageWrap,
	FormLoginTitle,
} from "../styled/StyledLogin";
import useAuthentication from "../hook/useLogin";
import PhoneAuthen, { SendOTP } from "../../../../models/Login";
import useLoginForRefresh from "../hook/LoginForRefesh";
import usePostOTP from "../hook/usePostOTP";
import { SendOTPToPhone } from "../../../../services/LoginService";
import useSignUp from "../hook/SignUp";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";

export default function FormRegister(props: {
	otp: string;
	phoneAuthen?: PhoneAuthen;
	setIsExist: (val: number) => void;
	setInfoOTP: (val: SendOTP | undefined) => void;
	lang: string;
	idToken: string;
	selectedCountryCode: string;
}) {
	const [password, setPassword] = useState("");
	const { openAlertDialog } = useAlertDialog();
	const { doSignUp } = useSignUp({ setIsExist: props.setIsExist });
	const [loading, setLoading] = useState(false);

	const handleSave = async () => {
		if (password.length < 6) {
			openAlertDialog?.(AlertType.Fail, `${TranslateLabels[props.lang]?.LOGIN_PASSWORD_SIX}`);
			return;
		}
		setLoading(true);
		await doSignUp(props.otp, props.phoneAuthen?.phone || "", password, props.idToken, props.selectedCountryCode);
		setLoading(false);
	};

	const handleCancel = async () => {
		props.setInfoOTP(undefined);
	};
	return (
		<>
			<FormRegisterInner
				password={password}
				setPassword={setPassword}
				handleCancel={handleCancel}
				handleSave={handleSave}
				lang={props.lang}
				loading={loading}
			/>
		</>
	);
}

export function FormRegisterInner(props: {
	password: string;
	setPassword: (val: string) => void;
	handleCancel: () => Promise<void>;
	handleSave: () => Promise<void>;
	lang: string;
	loading: boolean;
}) {
	return (
		<>
			<FormBackDialogLoginImg
				onClick={props.handleCancel}
				src={"/static/img/direction-left01.png"}
			/>
			<FormLoginTitle>{TranslateLabels[props.lang]?.LOGIN_CREATED_PASSWORD}</FormLoginTitle>
			<FormLoginDescription>{TranslateLabels[props.lang]?.LOGIN_PASSWORD_SIX}</FormLoginDescription>
			<FormLoginInputWrap>
				<FormLoginInput
					type="password"
					placeholder={TranslateLabels[props.lang]?.LOGIN_ENTER_PASSWORD}
					value={props.password}
					onChange={(e) => props.setPassword(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							props.handleSave();
						}
					}}
				/>
			</FormLoginInputWrap>

			<FormLoginContinue
				onClick={props.handleSave}
				disabled={props.loading}>
				{TranslateLabels[props.lang]?.LOGIN_CONTINUE}
			</FormLoginContinue>
		</>
	);
}
