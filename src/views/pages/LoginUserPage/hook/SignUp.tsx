import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import BlogService from "../../../../services/BlogService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { ForeignContent } from "../../../../models/Blog";
import { PhoneAuthentication, SendOTPToPhone, SignUp } from "../../../../services/LoginService";
import { useState } from "react";
import PhoneAuthen from "../../../../models/Login";
import useLoginForRefresh from "./LoginForRefesh";

export default function useSignUp(props: { setIsExist: (val: number) => void }) {
	const { openAlertDialog } = useAlertDialog();
	// const [phoneAuthen,setPhoneAuthen] = useState<PhoneAuthen>()
	const { dologin, userInfo } = useLoginForRefresh({});
	const doSignUp = async (
		otp: string,
		phone: string,
		password: string,
		idToken?: string,
		selectedCountryCode?: string
	) => {
		try {
			let res = await SignUp(otp, phone, password, idToken);
			openAlertDialog?.(AlertType.Success, "Đăng kí tài khoản thành công", () => {
				props.setIsExist(1);
				dologin(phone || "", password, selectedCountryCode || "+84");
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	return {
		doSignUp,
	};
}
