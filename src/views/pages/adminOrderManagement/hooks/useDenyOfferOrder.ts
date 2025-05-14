import { useState } from "react";
import { acceptAdminOrder, cancelAdminOrder, denyAdminOrder } from "../../../../services/AdminOrderService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function useDenyOfferOrder(props: { onSuccess?: () => void; onFail?: () => void }) {
	const [loading, setLoading] = useState(false);
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();

	const onDenyOfferOrder = async (id: number | null | undefined) => {
		setLoading(true);
		try {
			openLoadingDialog?.();
			await denyAdminOrder(id);
			props.onSuccess?.();
		} catch (err) {
			console.error(err);
			props.onFail?.();
		} finally {
			setLoading(false);
			closeLoadingDialog?.();
		}
	};

	const onDenyCancelAdminOrder = (id: number | null | undefined) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Xác nhận gỡ tin cho đơn hàng này",
			() => {},
			() => onDenyOfferOrder(id)
		);
	};

	return {
		onDenyCancelAdminOrder,
		loading,
	};
}
