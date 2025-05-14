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
import { OTPInput } from "./OTPInput";
import usePostOTP from "../hook/usePostOTP";
import { SendOTPToPhone } from "../../../../services/LoginService";
import FormRegister from "./FormRegister";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

declare var firebase: any;
declare global {
	interface Window {
		recaptchaVerifier: any;
	}
}
const setupRecaptcha = () => {
	const recaptchaContainer = document.createElement("div");
	recaptchaContainer.id = "recaptcha-container";
	document.body.appendChild(recaptchaContainer);

	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptchaContainer, {
		size: "invisible",
		callback: (response: any) => {
			console.log("Recaptcha verified");
		},
		"expired-callback": () => {
			console.error("Recaptcha expired");
		},
	});
};

export default function CodeOTPLogin(props: {
	phoneAuthen?: PhoneAuthen;
	setIsExist: (val: number) => void;
	lang: string;
	confirmationResult?: any;
	selectedCountryCode: string;
	infoOTPEnPass: SendOTP | undefined;
	setConfirmationResult: (val: any) => void;
}) {
	const { doOTP, infoOTP, setInfoOTP } = usePostOTP({ phoneAuthen: props.phoneAuthen });
	const [otp, setOTP] = useState("");
	const [idToken, setIdToken] = useState("");
	const { openAlertDialog } = useAlertDialog();
	const [loading, setLoading] = useState(false);

	const handleSave = async () => {
		if (props.phoneAuthen?.isForeign) {
			if (props.confirmationResult) {
				try {
					setLoading(true);
					const userCredential = await props.confirmationResult.confirm(otp);

					const idToken = await userCredential.user.getIdToken();
					setIdToken(idToken);
					await doOTP(idToken);
				} catch (error) {
					console.error("Lỗi OTP", error);
					openAlertDialog?.(AlertType.Fail, "Mã OTP không chính xác", () => {
						setLoading(false);
					});
				}
			}
		} else {
			setLoading(true);
			await doOTP(props.phoneAuthen?.isForeign ? props.confirmationResult : props.phoneAuthen?.phone || "", otp);
			setLoading(false);
		}
	};
	const handleReSendSMS = async () => {
		setLoading(true);

		setLoading(false);
		if (props.confirmationResult) {
			setupRecaptcha();
			const appVerifier = window.recaptchaVerifier;
			const result = await firebase.auth().signInWithPhoneNumber(props.phoneAuthen?.phone, appVerifier);
			if (result) {
				openAlertDialog?.(AlertType.Success, "Gửi SMS thành công");
			}
			props.setConfirmationResult(result);
		} else {
			try {
				await SendOTPToPhone(props.phoneAuthen?.phone || "");
				openAlertDialog?.(AlertType.Success, "Gửi SMS thành công");
			} catch (error: any) {
				openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!");
			}
		}
	};
	const handleCancel = async () => {
		props.setIsExist(1);
	};

	return (
		<>
			<CodeOTPLoginInner
				handleCancel={handleCancel}
				infoOTP={infoOTP}
				phoneAuthen={props.phoneAuthen}
				handleReSendSMS={handleReSendSMS}
				setOTP={setOTP}
				handleSave={handleSave}
				setIsExist={props.setIsExist}
				otp={otp}
				setInfoOTP={setInfoOTP}
				lang={props.lang}
				idToken={idToken}
				selectedCountryCode={props.selectedCountryCode}
				loading={loading}
			/>
		</>
	);
}

export function CodeOTPLoginInner(props: {
	handleCancel: () => Promise<void>;
	infoOTP: SendOTP | undefined;
	phoneAuthen?: PhoneAuthen;
	handleReSendSMS: () => Promise<void>;
	setOTP: (val: string) => void;
	handleSave: () => Promise<void>;
	setIsExist: (val: number) => void;
	otp: string;
	setInfoOTP: (val: SendOTP | undefined) => void;
	lang: string;
	idToken: string;
	selectedCountryCode: string;
	loading: boolean;
}) {
	return (
		<>
			{!props.infoOTP?.code ? (
				<>
					<CodeSendOTPInner
						handleCancel={props.handleCancel}
						phoneAuthen={props.phoneAuthen}
						handleReSendSMS={props.handleReSendSMS}
						setOTP={props.setOTP}
						handleSave={props.handleSave}
						lang={props.lang}
						loading={props.loading}
					/>
				</>
			) : (
				<>
					<FormRegister
						otp={props.otp}
						phoneAuthen={props.phoneAuthen}
						setIsExist={props.setIsExist}
						setInfoOTP={props.setInfoOTP}
						// setOTPView={setOTPView}
						lang={props.lang}
						idToken={props.idToken}
						selectedCountryCode={props.selectedCountryCode}
					/>
				</>
			)}
		</>
	);
}

export function CodeSendOTPInner(props: {
	handleCancel: () => Promise<void>;
	phoneAuthen?: PhoneAuthen;
	handleReSendSMS: () => Promise<void>;
	setOTP: (val: string) => void;
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
			<FormLoginTitle>{TranslateLabels[props.lang]?.LOGIN_VERIFICATION_SDT}</FormLoginTitle>
			<FormLoginDescription>
				{TranslateLabels[props.lang]?.LOGIN_OTP_SDT} {props.phoneAuthen?.phone}
			</FormLoginDescription>
			<OTPInput
				length={6}
				setEnteredOTP={props.setOTP}
				handleSave={props.handleSave}
			/>

			<ForgotPassword onClick={props.handleReSendSMS}>
				{TranslateLabels[props.lang]?.LOGIN_RE_SEND_SMS}
			</ForgotPassword>
			<FormLoginContinue
				onClick={props.handleSave}
				disabled={props.loading}>
				{TranslateLabels[props.lang]?.LOGIN_CONTINUE}
			</FormLoginContinue>
		</>
	);
}
