import { useContext, useState } from "react";
import { SendOTP } from "../../../../models/Login";
import { UpdateGenerCountry, VerifyOTP } from "../../../../services/LoginService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { PublicComponentsWrapContext } from "../../../controls/public/PublicComponentsWrap";
import { GetOrderInfo, PostVoucherUser } from "../../../../services/VoucherService";
import { VoucherUser } from "../../../../models/UserGlow";

export default function useGetOrder(props: {}) {
	const { openAlertDialog } = useAlertDialog();
	const [infoOrder, setInfoOrder] = useState<VoucherUser>();
	const doOrder = async (orderId: number) => {
		try {
			let res = await GetOrderInfo(orderId);
			setInfoOrder(res);
		} catch (error: any) {
			openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!");
		} finally {
		}
	};
	return {
		doOrder,
		infoOrder,
	};
}
