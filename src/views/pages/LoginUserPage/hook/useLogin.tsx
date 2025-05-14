import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import BlogService from "../../../../services/BlogService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { ForeignContent } from "../../../../models/Blog";
import { PhoneAuthentication, SendOTPToPhone } from "../../../../services/LoginService";
import { useState } from "react";
import PhoneAuthen from "../../../../models/Login";

declare var firebase: any;
declare global {
	interface Window {
		recaptchaVerifier: any;
	}
}

export const setupRecaptcha = () => {
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
		size: "invisible",
		callback: (response: any) => {
			console.log("Recaptcha verified");
		},
		"expired-callback": () => {
			console.error("Recaptcha expired");
		},
	});
};

export default function useAuthentication(props: {}) {
	const { openAlertDialog } = useAlertDialog();
	const [phoneAuthen, setPhoneAuthen] = useState<PhoneAuthen>();
	const [confirmationResult, setConfirmationResult] = useState<any>(null);

	const doAutthen = async (phone: string) => {
		try {
			let res = await PhoneAuthentication(phone);
			setPhoneAuthen(res.data);
			if (!res.data.isExist) {
				if (res.data.isForeign) {
					setupRecaptcha();
					const appVerifier = window.recaptchaVerifier;
					const result = await firebase.auth().signInWithPhoneNumber(phone, appVerifier);
					setConfirmationResult(result);
				} else {
					await SendOTPToPhone(res.data.phone || "0");
				}
			}
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	return {
		doAutthen,
		phoneAuthen,
		confirmationResult,
		setConfirmationResult,
	};
}
