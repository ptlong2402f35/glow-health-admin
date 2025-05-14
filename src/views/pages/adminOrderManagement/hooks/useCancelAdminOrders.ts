import { useState } from "react";
import { cancelAdminOrder } from "../../../../services/AdminOrderService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function useCancelAdminOrders(props: { onSuccess?: () => void; onFail?: () => void }) {
	const [loading, setLoading] = useState(false);
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();

	const onCancelAdminOrder = async (id: number | null | undefined, reason?: string) => {
		setLoading(true);
		try {
			openLoadingDialog?.();
			await cancelAdminOrder(id, reason);
			props.onSuccess?.();
		} catch (err) {
			console.error(err);
			props.onFail?.();
		} finally {
			setLoading(false);
			closeLoadingDialog?.();
		}
	};

	const onConfirmCancelAdminOrder = (id: number | null | undefined, reason?: string) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Xác nhận hủy đơn hàng này",
			() => {},
			() => onCancelAdminOrder(id, reason)
		);
	};

	return {
		onConfirmCancelAdminOrder,
		loading,
	};
}
