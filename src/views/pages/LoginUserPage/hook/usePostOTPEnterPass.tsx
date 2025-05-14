import { useState } from "react";
import { SendOTP } from "../../../../models/Login";
import { InitForgetPassword, OTPForgetPassword, VerifyOTP } from "../../../../services/LoginService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
// import { setupRecaptcha } from "./useLogin";

declare var firebase: any;
declare global {
	interface Window {
		recaptchaVerifier: any;
	}
}

export default function usePostOTPEnterPass(props: { setConfirmationResult: (val: any) => void }) {
	const { openAlertDialog } = useAlertDialog();
	const [infoOTPEnPass, setInfoOTPEnPas] = useState<SendOTP>();

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
	const doOTP = async (phone: string) => {
		try {
			let res = await InitForgetPassword(phone);
			if (res.useFirebaseAuthen) {
				setupRecaptcha();
				const appVerifier = window.recaptchaVerifier;
				const result = await firebase.auth().signInWithPhoneNumber(phone, appVerifier);
				props.setConfirmationResult(result);
			} else {
				await OTPForgetPassword(phone);
			}
			setInfoOTPEnPas(res);
		} catch (error: any) {
			console.log(error);
			openAlertDialog?.(AlertType.Fail, error?.response?.data?.message || "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	return {
		doOTP,
		infoOTPEnPass,
		setInfoOTPEnPas,
	};
}
