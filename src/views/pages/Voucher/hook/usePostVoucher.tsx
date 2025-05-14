import { useContext, useState } from "react";
import { SendOTP } from "../../../../models/Login";
import { UpdateGenerCountry, VerifyOTP } from "../../../../services/LoginService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { PublicComponentsWrapContext } from "../../../controls/public/PublicComponentsWrap";
import { PostVoucherUser } from "../../../../services/VoucherService";
import { VoucherUser } from "../../../../models/UserGlow";
import Orderv2 from "../../../../models/Orderv2";
import useLoadingDialog from "../../../hooks/useLoadingDialog";

export default function usePostVoucher(props: { setIsDialogOpen?: (val: boolean) => void }) {
	const { openAlertDialog } = useAlertDialog();
	const [infoVoucher, setInfoVoucher] = useState<VoucherUser>();
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const doVoucher = async (staffId: number, priceIds: number) => {
		openLoadingDialog?.();
		try {
			let res = await PostVoucherUser(staffId, priceIds);
			props.setIsDialogOpen?.(true);
			setInfoVoucher(res);
		} catch (error: any) {
			openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!");
		} finally {
			closeLoadingDialog?.();
		}
	};
	return {
		doVoucher,
		infoVoucher,
	};
}
