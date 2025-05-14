import React, { createContext, useEffect, useRef, useState } from "react";
import { CodeOTPLoginInner, CodeSendOTPInner } from "./CodeOTPLogin";
import usePostOTP from "../hook/usePostOTP";
import PhoneAuthen, { SendOTP } from "../../../../models/Login";
import { OTPForgetPassword, SendOTPToPhone, UpdateOTPtPassword } from "../../../../services/LoginService";
import usePostOTPEnterPass from "../hook/usePostOTPEnterPass";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { FormRegisterInner } from "./FormRegister";
import useUpdateOTPNumber from "../hook/useUpdateOTPPass";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import useVerifyOTPEnterPass from "../hook/useVerifyOTPEnterPass";
import { setupRecaptcha } from "../hook/useLogin";

declare var firebase: any;
declare global {
	interface Window {
		recaptchaVerifier: any;
	}
}

export default function CodeOTPEnterPassword(props: {
	phoneAuthen?: PhoneAuthen;
	setIsExist: (val: number) => void;
	setInfoOTPEnPas: (val: SendOTP | undefined) => void;
	infoOTPEnPass: SendOTP | undefined;
	doOTP: (phone: string) => Promise<void>;
	phoneNumber: string;
	lang: string;
	confirmationResult?: any;
	setConfirmationResult: (val: any) => void;
}) {
	const [otpView, setOTPView] = useState(false);
	const [otp, setOTP] = useState("");
	const { openAlertDialog } = useAlertDialog();
	const { doOtp } = useVerifyOTPEnterPass({ setOTPView: setOTPView });
	const [idToken, setIdToken] = useState("");
	const { doOTP, infoOTP, setInfoOTP } = usePostOTP({ phoneAuthen: props.phoneAuthen });
	const [loading, setLoading] = useState(false);
	const handleSave = async () => {
		if (otp.length < 6) {
			openAlertDialog?.(AlertType.Success, "OTP dài 6 ký tự");
			return;
		}
		if (props.confirmationResult) {
			try {
				setLoading(true);
				const userCredential = await props.confirmationResult.confirm(otp);

				const idToken = await userCredential.user.getIdToken();
				setIdToken(idToken);
				await doOTP(idToken);
				setOTPView(true);
				setLoading(false);
			} catch (error) {
				console.error("Lỗi OTP", error);
				openAlertDialog?.(AlertType.Fail, "Mã OTP không chính xác", () => {
					setLoading(false);
				});
			}
		} else {
			setLoading(true);
			await doOtp(props.phoneNumber, otp);
			setLoading(false);
		}
	};
	const handleReSendSMS = async () => {
		if (props.confirmationResult) {
			setupRecaptcha();
			const appVerifier = window.recaptchaVerifier;
			const result = await firebase.auth().signInWithPhoneNumber(props.phoneNumber, appVerifier);
			props.setConfirmationResult(result);
		} else {
			await OTPForgetPassword(props.phoneNumber || "");
		}
	};
	const handleCancel = async () => {
		props.setIsExist(1);
	};
	return (
		<>
			{!otpView ? (
				<CodeSendOTPInner
					handleCancel={handleCancel}
					phoneAuthen={props.phoneAuthen}
					handleReSendSMS={handleReSendSMS}
					setOTP={setOTP}
					handleSave={handleSave}
					lang={props.lang}
					loading={loading}
				/>
			) : (
				<FormEnterPassword
					otp={otp}
					phoneAuthen={props.phoneAuthen}
					setIsExist={props.setIsExist}
					setOTPView={setOTPView}
					phoneNumber={props.phoneNumber}
					lang={props.lang}
					idToken={idToken}
					confirmationResult={props.confirmationResult}
					loading={loading}
					setLoading={setLoading}
				/>
			)}
		</>
	);
}

export function FormEnterPassword(props: {
	otp: string;
	phoneAuthen?: PhoneAuthen;
	setIsExist: (val: number) => void;
	setOTPView: (val: boolean) => void;
	phoneNumber: string;
	lang: string;
	idToken: string;
	confirmationResult?: any;
	loading: boolean;
	setLoading: (val: boolean) => void;
}) {
	const [password, setPassword] = useState("");
	const { openAlertDialog } = useAlertDialog();
	const { doRePass } = useUpdateOTPNumber({
		setIsExist: props.setIsExist,
		setOTPView: props.setOTPView,
		confirmationResult: props.confirmationResult,
	});

	const handleSave = async () => {
		if (password.length < 6) {
			openAlertDialog?.(AlertType.Fail, `${TranslateLabels[props.lang]?.LOGIN_PASSWORD_SIX}`);
			return;
		}
		props.setLoading(true);
		await doRePass(props.phoneNumber, props.otp, password, props.idToken);
		props.setLoading(false);
	};

	const handleCancel = async () => {
		props.setOTPView(false);
	};
	return (
		<>
			<FormRegisterInner
				password={password}
				setPassword={setPassword}
				handleCancel={handleCancel}
				handleSave={handleSave}
				lang={props.lang}
				loading={props.loading}
			/>
		</>
	);
}
