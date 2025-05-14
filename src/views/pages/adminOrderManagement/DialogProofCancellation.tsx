import React, { useEffect, useState } from "react";
import { UserFormBankButtonClose, UserFormBankButtonCreatedv2 } from "../personal/component/StylePerson";
import { DialogWrapAddUser } from "../../controls/components/dialogWrap/DialogWrap";
import Orderv2, { OrderCancelOriginType } from "../../../models/Orderv2";
import { AdminOrderOriginCancelLabelV2, ProofCancellationImg, ProofCancellationImgWrap } from "./styled/StyledAdminOrdermanagement";
import useAlertDialog from "../../hooks/useAlertDialog";
import useUpdateOrderOriginCancel from "./hooks/useUpdateOrderOriginCancel";
import { AlertType } from "../../hooks/common/useAttachAlertDialog";
import { AdminOrderOriginCancelContent } from "./AdminOrderOriginCancelDialog";

export default function DialogProofCancellation(props: {
	isEditing: boolean;
	setIsEditing: (value: boolean) => void;
	order?: Orderv2 | undefined;
	reload: () => void;
}) {

		const [cancelType, setCancelType] = useState(0);
		const { openAlertDialog } = useAlertDialog();
		const { onAdminUpdateOrderOriginCancel, cancelTypeOpts } = useUpdateOrderOriginCancel({
			onSuccess: () => {
				openAlertDialog?.(AlertType.Success, "Cập nhật thành công!", () => {
					props.reload?.();
					() => {
						props.setIsEditing(false);
					}
				});
			},
			onFail: (message?: string) => openAlertDialog?.(AlertType.Fail, message || "Đã có lỗi xảy ra!"),
		});
	
		useEffect(() => {
			setCancelType(
				(props.order && props.order?.originCancelType && props.order.originCancelType) || OrderCancelOriginType.Both
			);
		}, [props.order, props.isEditing]);

		const onChatBox = () => {
			window.open(`/chat/${props.order?.id}`, "_blank");
		};
	return (
		<DialogWrapAddUser
			open={props.isEditing}
			onClose={() => {
				props.setIsEditing(false);
			}}
			title="Lý do hủy đơn"
			actions={
				<>
					
					<UserFormBankButtonClose
						onClick={() => {
							props.setIsEditing(false);
						}}>
						Hủy
					</UserFormBankButtonClose>

					<UserFormBankButtonCreatedv2
						onClick={() => onAdminUpdateOrderOriginCancel(props.order?.id || 0, cancelType)}
						type="submit">
						Cập nhật
					</UserFormBankButtonCreatedv2>
					{props.order?.chatBoxId && (
									<UserFormBankButtonCreatedv2 onClick={onChatBox}>
										Mở Chat Box
									</UserFormBankButtonCreatedv2>
								)}
				</>
			}>
				<AdminOrderOriginCancelContent
							order={props.order}
							cancelType={cancelType}
							cancelTypeOpts={cancelTypeOpts}
							setCancelType={setCancelType}
						/>
			<>
				<div><AdminOrderOriginCancelLabelV2>Lý do hủy đơn :</AdminOrderOriginCancelLabelV2> {props.order?.staffReasonCancel}</div>
			</>
			<>
				<ProofCancellationImgWrap>
					{(props.order?.staffReasonCancelImages || []).map((val) => (
						<ProofCancellationImg src={val.path || ""} />
					))}
				</ProofCancellationImgWrap>
			</>
			
		</DialogWrapAddUser>
	);
}
