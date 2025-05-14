import { useState } from "react";
import PhoneAuthen, { SendOTP } from "../../../../models/Login";
import { VerifyOTP, VerifyOTPFireBase } from "../../../../services/LoginService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

export default function usePostOTP(props: { phoneAuthen?: PhoneAuthen | undefined }) {
	const { openAlertDialog } = useAlertDialog();
	const [infoOTP, setInfoOTP] = useState<SendOTP>();
	const doOTP = async (phone?: string, otp?: string) => {
		try {
			let res;
			if (props.phoneAuthen?.isForeign) {
				res = await VerifyOTPFireBase(phone);
			} else {
				res = await VerifyOTP(phone, otp);
			}

			setInfoOTP(res);
		} catch (error: any) {
			openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	return {
		doOTP,
		infoOTP,
		setInfoOTP,
	};
}
