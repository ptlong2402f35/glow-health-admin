import { useContext, useState } from "react";
import { SendOTP } from "../../../../models/Login";
import { UpdateGenerCountry, VerifyOTP } from "../../../../services/LoginService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { PublicComponentsWrapContext } from "../../../controls/public/PublicComponentsWrap";

export default function useUpdateGenTry(props: {}) {
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(PublicComponentsWrapContext);
	const doGentry = async (gender: string, selectedOption: string) => {
		try {
			let res = await UpdateGenerCountry(gender, selectedOption);
			openAlertDialog?.(AlertType.Success, "Lưu thông tin thành công");
			ctx?.setIsDialogOpen(false);
		} catch (error: any) {
			openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	return {
		doGentry,
	};
}
