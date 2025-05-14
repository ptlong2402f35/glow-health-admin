import React from "react";
import { changeUserPassword } from "../../../../services/PersonalService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useLoadingDialog from "../../../hooks/useLoadingDialog";

export const usePersonalChangePassword = (props: {
	setIsDisable?: (val: boolean) => void;
	setClearInput?: () => void;
}) => {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();
	const useConfirmChangePasswword = async (
		email: string,
		oldPassword: string,
		newPassword: string,
		rePassword: string
	) => {
		if (newPassword.length < 8) {
			openAlertDialog?.(AlertType.Fail, "Mật khẩu mới không đủ 8 kí tự");
			return;
		}
		if (rePassword !== newPassword) {
			openAlertDialog?.(AlertType.Fail, "Nhập lại mật khẩu mới không chính xác");
			return;
		}
		try {
			openLoadingDialog?.();
			props.setIsDisable?.(true);
			await changeUserPassword(email, oldPassword, newPassword);
			openAlertDialog?.(AlertType.Success, "Đổi mật khẩu thành công");
			props.setClearInput?.();
		} catch (errors: any) {
			switch (errors.response.status) {
				case 401: {
					openAlertDialog?.(AlertType.Fail, "Mật khẩu cũ không chính xác");
					break;
				}
				default: {
					openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
					break;
				}
			}
		} finally {
			closeLoadingDialog?.();
			props.setIsDisable?.(false);
		}
	};
	return {
		useConfirmChangePasswword,
	};
};
