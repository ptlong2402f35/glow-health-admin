import React, { useContext } from "react";
import Orderv2, { OrderStatusv2 } from "../../../models/Orderv2";
import {
	AdminOrderManagementItemsControlWrap,
	AdminOrderManagementItemsControlBtn,
	xStyleCancelIcon,
	xStyleFeedbackIcon,
	xStyleFinishIcon,
} from "./styled/StyledAdminOrdermanagement";
import { AlertType } from "../../hooks/common/useAttachAlertDialog";
import useCancelAdminOrders from "./hooks/useCancelAdminOrders";
import useAlertDialog from "../../hooks/useAlertDialog";
import { AdminOrderWrapContext } from "./AdminOrderManagement";
import useFinishAdminOrder from "./hooks/useFinishAdminOrders";

export default function AdminOrderManagementItemControl(props: { order: Orderv2 }) {
	const ctx = useContext(AdminOrderWrapContext);
	const { openAlertDialog } = useAlertDialog();
	const onOpenCancel = (order: Orderv2) => {
		ctx?.setOpenCancelDialog(true);
		ctx?.setOrderSelected(order);
	};

	const onOpenFeedback = (order: Orderv2) => {
		ctx?.setOpenFeedbackDialog(true);
		ctx?.setOrderSelected(order);
	};

	const { onAdminConfirmSubmitFinishOrder } = useFinishAdminOrder({
		onSuccess: () => openAlertDialog?.(AlertType.Success, "Hoàn thành đơn thành công!", () => ctx.reload?.()),
		onFail: () => openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!"),
	});

	return (
		<AdminOrderManagementItemsControlWrap>
			{checkFinishedStatus(props.order) && (
				<AdminOrderManagementItemsControlBtn
					$xStyleColorIcon={xStyleFinishIcon}
					onClick={() => onAdminConfirmSubmitFinishOrder(props.order?.id || 0)}
					title="Hoàn thành đơn">
					<i
						className="fa fa-check"
						aria-hidden="true"></i>
				</AdminOrderManagementItemsControlBtn>
			)}
			{checkFeedbackedStatus(props.order) && (
				<AdminOrderManagementItemsControlBtn
					$xStyleColorIcon={xStyleFeedbackIcon}
					onClick={() => onOpenFeedback(props.order)}
					title="Đánh giá">
					<i
						className="fa fa-star"
						aria-hidden="true"></i>
				</AdminOrderManagementItemsControlBtn>
			)}
			<AdminOrderManagementItemsControlBtn
				$xStyleColorIcon={xStyleCancelIcon}
				onClick={() => onOpenCancel(props.order)}
				title="Hủy đơn">
				<i
					className="fa fa-times"
					aria-hidden="true"></i>
			</AdminOrderManagementItemsControlBtn>
		</AdminOrderManagementItemsControlWrap>
	);
}

export const checkFinishedStatus = (order: Orderv2) => {
	return [OrderStatusv2.Pending, OrderStatusv2.Approved ].includes(order.status as any);
};
export const checkFeedbackedStatus = (order: Orderv2) => {
	return [OrderStatusv2.Approved, OrderStatusv2.Done].includes(order.status as any);
};
