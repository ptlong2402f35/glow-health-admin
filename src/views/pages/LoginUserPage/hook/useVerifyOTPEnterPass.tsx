import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import BlogService from "../../../../services/BlogService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { ForeignContent } from "../../../../models/Blog";
import { PhoneAuthentication, SendOTPToPhone, VerifyOTPEnterPass } from "../../../../services/LoginService";
import { useState } from "react";
import PhoneAuthen from "../../../../models/Login";

export default function useVerifyOTPEnterPass(props: { setOTPView: (val: boolean) => void }) {
	const { openAlertDialog } = useAlertDialog();
	const [phoneAuthen, setPhoneAuthen] = useState<PhoneAuthen>();
	const doOtp = async (phone: string, otp: string) => {
		try {
			let res = await VerifyOTPEnterPass(phone, otp);
			props.setOTPView(true);
		} catch (error: any) {
			openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	return {
		doOtp,
		phoneAuthen,
	};
}
