import React, { useState } from "react";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { finishAdminOrder } from "../../../../services/AdminOrderService";

export default function useFinishAdminOrder(props: { onSuccess?: () => void; onFail?: () => void }) {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();

	const onAdminConfirmSubmitFinishOrder = (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn có chắc chắn muốn hoàn thành đơn hàng?",
			() => {},
			() => onAdminFinishOrder(id)
		);
	};

	const onAdminFinishOrder = async (id: number) => {
		try {
			openLoadingDialog?.();
			await finishAdminOrder(id);
			props.onSuccess?.();
		} catch (err) {
			console.error(err);
			props.onFail?.();
		} finally {
			closeLoadingDialog?.();
		}
	};
	return {
		onAdminConfirmSubmitFinishOrder,
	};
}
