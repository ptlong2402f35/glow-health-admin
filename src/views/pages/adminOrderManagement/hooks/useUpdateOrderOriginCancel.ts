import React, { useEffect, useState } from "react";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import { updateOrderOriginCancel } from "../../../../services/AdminOrderService";
import { SelectBoxOptionType } from "../../../controls/components/selectBox/SelectBox";
import { OrderCancelOriginTypeMap } from "../../../../models/Orderv2";

export default function useUpdateOrderOriginCancel(props: {
	onSuccess?: () => void;
	onFail?: (message?: string) => void;
}) {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const [cancelTypeOpts, setCancelTypeOpts] = useState<SelectBoxOptionType[]>([]);
	const onAdminUpdateOrderOriginCancel = async (id: number, data: number) => {
		try {
			openLoadingDialog?.();
			let resp = await updateOrderOriginCancel(id, data);
			props.onSuccess?.();
		} catch (err: any) {
			console.error(err);
			props.onFail?.(err?.response.data.message || "Đã có lỗi xảy ra!");
		} finally {
			closeLoadingDialog?.();
		}
	};

	useEffect(() => {
		let opts = [];
		for (let i = 1; i < OrderCancelOriginTypeMap?.size + 1; i++) {
			let item = OrderCancelOriginTypeMap.get(i);
			if (item)
				opts.push({
					value: i,
					label: `${item}`,
				});
		}
		setCancelTypeOpts(opts);
	}, []);

	return {
		onAdminUpdateOrderOriginCancel,
		cancelTypeOpts,
	};
}
