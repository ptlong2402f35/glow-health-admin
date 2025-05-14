import React, { useEffect, useState } from "react";
import { DialogWrapMedium } from "../../controls/components/dialogWrap/DialogWrap";
import Orderv2, { OrderCancelOriginType } from "../../../models/Orderv2";
import {
	AdminOrderCancelDialogBtnWrap,
	AdminOrderCancelCloseBtn,
	AdminOrderCancelSubmitBtn,
	AdminOrderOriginCancelDialogWrap,
	AdminOrderOriginCancelLabelUp,
} from "./styled/StyledAdminOrdermanagement";
import { SelectBoxOptionType, SmSelectBox } from "../../controls/components/selectBox/SelectBox";
import useFeedbackAdminOrder from "./hooks/useFeedbackAdminOrder";
import useUpdateOrderOriginCancel from "./hooks/useUpdateOrderOriginCancel";
import useAlertDialog from "../../hooks/useAlertDialog";
import { AlertType } from "../../hooks/common/useAttachAlertDialog";

export default function AdminOrderOriginCancelDialog(props: {
	open: boolean;
	onClose: () => void;
	order: Orderv2 | undefined;
	reload: () => void;
}) {
	const [cancelType, setCancelType] = useState(0);
	const { openAlertDialog } = useAlertDialog();
	const { onAdminUpdateOrderOriginCancel, cancelTypeOpts } = useUpdateOrderOriginCancel({
		onSuccess: () => {
			openAlertDialog?.(AlertType.Success, "Cập nhật thành công!", () => {
				props.reload?.();
				props.onClose();
			});
		},
		onFail: (message?: string) => openAlertDialog?.(AlertType.Fail, message || "Đã có lỗi xảy ra!"),
	});

	useEffect(() => {
		setCancelType(
			(props.order && props.order?.originCancelType && props.order.originCancelType) || OrderCancelOriginType.Both
		);
	}, [props.order]);

	return (
		<DialogWrapMedium
			open={props.open}
			onClose={props.onClose}
			title="Đối tượng hủy đơn"
			actions={
				<AdminOrderCancelDialogBtnWrap>
					<AdminOrderCancelCloseBtn onClick={props.onClose}>Đóng</AdminOrderCancelCloseBtn>
					<AdminOrderCancelSubmitBtn
						onClick={() => onAdminUpdateOrderOriginCancel(props.order?.id || 0, cancelType)}>
						Đồng ý
					</AdminOrderCancelSubmitBtn>
				</AdminOrderCancelDialogBtnWrap>
			}>
			<AdminOrderOriginCancelContent
				order={props.order}
				cancelType={cancelType}
				cancelTypeOpts={cancelTypeOpts}
				setCancelType={setCancelType}
			/>
		</DialogWrapMedium>
	);
}

export function AdminOrderOriginCancelContent(props: {
	order: Orderv2 | undefined;
	cancelType: number;
	setCancelType: (val: number) => void;
	cancelTypeOpts: SelectBoxOptionType[];
}) {
	return (
		<AdminOrderOriginCancelDialogWrap>
			<AdminOrderOriginCancelLabelUp>Chọn đối tượng hủy đơn</AdminOrderOriginCancelLabelUp>
			<SmSelectBox
				options={props.cancelTypeOpts}
				value={props.cancelType}
				onChange={props.setCancelType}
			/>
		</AdminOrderOriginCancelDialogWrap>
	);
}
