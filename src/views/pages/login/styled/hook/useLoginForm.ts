import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { AuthenticationContext } from "../../../../controls/auth/AuthenticationWrap";
import { getBackPath } from "../../hook/useGetBackPack";
import AuthService from "../../../../../services/AuthService";
import useAlertDialog from "../../../../hooks/useAlertDialog";
import { AlertType } from "../../../../hooks/common/useAttachAlertDialog";

export interface IFormInput {
	identify: string;
	password: string;
}

export default function useLoginForm() {
	const history = useHistory();
	const { search } = useLocation();
	const backPath = getBackPath(search);
	const authCtx = useContext(AuthenticationContext);
	const { onLoginSuccess } = authCtx || {};
	const { openAlertDialog } = useAlertDialog();
	const [disableButton, setDisableButton] = useState(false);

	const LoginErrorMsg = "Email hoặc tên đăng nhập không chính xác";

	const LoginANEErrorMsg = "Email does not exist. Please register";
	const LoginACCErrorMsg = "Account does not exist. Please register";
	const LoginIPErrorMsg = "Email hoặc tên đăng nhập không chính xác";
	const LoginENVErrorMsg = "Email is not verified";

	const login = async (data: IFormInput) => {
		setDisableButton(true);
		try {
			let user = await AuthService.login(data.identify, data.password);
			onLoginSuccess?.(user, () => {
				if (backPath) {
					history.push(backPath);
				} else {
					history.push("/dashboard");
				}
			});
		} catch (err: any) {
			if (err) {
				openAlertDialog?.(AlertType.Fail, "Sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại");
				// if (status == 401 && message && message.trim() == LoginANEErrorMsg) {
				// 	openAlertDialog?.(
				// 		AlertType.Fail,
				// 		"Email chưa được đăng ký trên hệ thống. Vui lòng kiểm tra lại email hoặc thực hiện đăng ký."
				// 	);
				// } else if (status == 401 && message && message.trim() == LoginIPErrorMsg) {
				// 	openAlertDialog?.(AlertType.Fail, "Vui lòng kiểm tra lại mật khẩu.");
				// } else if (status == 401 && message && message.trim() == LoginACCErrorMsg) {
				// 	openAlertDialog?.(
				// 		AlertType.Fail,
				// 		"Tài khoản chưa được đăng ký trên hệ thống. Vui lòng kiểm tra lại tài khoản hoặc thực hiện đăng ký."
				// 	);
				// } else if (status == 403 && message && message.trim() == LoginENVErrorMsg) {
				// 	openAlertDialog?.(
				// 		AlertType.Fail,
				// 		"Bạn chưa kích hoạt tài khoản. Vui lòng kiểm tra lại hòm mail của bạn."
				// 	);
			} else {
				openAlertDialog?.(AlertType.Fail, "Đăng nhập thất bại. Vui lòng thử lại");
			}
		} finally {
			setDisableButton(false);
		}
	};
	return { login, disableButton };
}
