import { useState } from "react";
import { SendOTP } from "../../../../models/Login";
import {
	InitForgetPassword,
	OTPForgetPassword,
	UpdateOTPtPassword,
	UpdateOTPtPasswordFireBase,
	VerifyOTP,
} from "../../../../services/LoginService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

export default function useUpdateOTPNumber(props: {
	setIsExist: (val: number) => void;
	setOTPView: (val: boolean) => void;
	confirmationResult?: any;
}) {
	const { openAlertDialog } = useAlertDialog();
	const doRePass = async (phone: string, otp: string, password: string, idToken: string) => {
		try {
			if (props.confirmationResult) {
				await UpdateOTPtPasswordFireBase(idToken, password);
			} else {
				await UpdateOTPtPassword(phone, otp, password);
			}

			openAlertDialog?.(AlertType.Success, "Mật khẩu thay đổi thành công", () => {
				props.setIsExist(1);
			});
		} catch (error: any) {
			openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!", () => {
				props.setOTPView(false);
			});
		} finally {
		}
	};

	return {
		doRePass,
	};
}
