import React, { useEffect, useState } from "react";
import { DialogWrapMedium } from "../../controls/components/dialogWrap/DialogWrap";
import Orderv2 from "../../../models/Orderv2";
import {
	AdminOrderCancelContentWrap,
	AdminOrderCancelConfirmText,
	AdminOrderCancelConfirmLabelCode,
	AdminOrderCancelReasonLabel,
	AdminOrderCancelReasonTextField,
	AdminOrderCancelDialogBtnWrap,
	AdminOrderCancelSubmitBtn,
	AdminOrderCancelCloseBtn,
} from "./styled/StyledAdminOrdermanagement";

export default function AdminOrderCancelDialog(props: {
	open: boolean;
	onClose: () => void;
	order: Orderv2 | undefined;
	submit: (order: Orderv2 | undefined, reason: string) => void;
}) {
	const [cancelReason, setCancelReason] = useState(
		`Kỹ thuật viên ${props.order?.staff?.name || ""} đang bận. Vui lòng chọn kỹ thuật viên khác.`
	);

	useEffect(() => {
		setCancelReason(`Kỹ thuật viên ${props.order?.staff?.name || ""} đang bận. Vui lòng chọn kỹ thuật viên khác.`);
	}, [props.order]);
	return (
		<DialogWrapMedium
			open={props.open}
			onClose={props.onClose}
			title="Xác nhận hủy đơn"
			actions={
				<AdminOrderCancelDialogBtnWrap>
					<AdminOrderCancelCloseBtn onClick={props.onClose}>Đóng</AdminOrderCancelCloseBtn>
					<AdminOrderCancelSubmitBtn onClick={() => props?.submit(props.order, cancelReason)}>
						Đồng ý
					</AdminOrderCancelSubmitBtn>
				</AdminOrderCancelDialogBtnWrap>
			}>
			<AdminOrderCancelContentDialog
				order={props.order}
				reason={cancelReason}
				setReason={setCancelReason}
			/>
		</DialogWrapMedium>
	);
}

export function AdminOrderCancelContentDialog(props: {
	order: Orderv2 | undefined;
	reason: string;
	setReason: (val: string) => void;
}) {
	return (
		<AdminOrderCancelContentWrap>
			<AdminOrderCancelConfirmText>
				Bạn có chắc chắn muốn hủy đơn hàng:{" "}
				<AdminOrderCancelConfirmLabelCode>#{props.order?.code || ""}</AdminOrderCancelConfirmLabelCode>
			</AdminOrderCancelConfirmText>
			<AdminOrderCancelReasonLabel>Lý do hủy đơn</AdminOrderCancelReasonLabel>
			<AdminOrderCancelReasonTextField
				value={props.reason}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => props.setReason(e.target.value)}
				placeholder="Nhập lí do hủy đơn"></AdminOrderCancelReasonTextField>
		</AdminOrderCancelContentWrap>
	);
}
