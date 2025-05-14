import { useState } from "react";
import { acceptAdminOrder, cancelAdminOrder } from "../../../../services/AdminOrderService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function useAcceptOfferOrder(props: { onSuccess?: () => void; onFail?: () => void }) {
	const [loading, setLoading] = useState(false);
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();

	const onAcceptOfferOrder = async (id: number | null | undefined) => {
		setLoading(true);
		try {
			openLoadingDialog?.();
			await acceptAdminOrder(id);
			props.onSuccess?.();
		} catch (err) {
			console.error(err);
			props.onFail?.();
		} finally {
			setLoading(false);
			closeLoadingDialog?.();
		}
	};

	const onAcceptCancelAdminOrder = (id: number | null | undefined) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Xác nhận duyệt tin cho đơn hàng này",
			() => {},
			() => onAcceptOfferOrder(id)
		);
	};

	return {
		onAcceptCancelAdminOrder,
		loading,
	};
}
