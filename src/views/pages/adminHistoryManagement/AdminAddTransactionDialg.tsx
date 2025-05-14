import React, { useEffect, useState } from "react";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../adminProductManagement/styled/ProductManagementStyle";
import { DialogWrapSmall, DialogWrapSmallTransaction } from "../../controls/components/dialogWrap/DialogWrap";
import AddProductInput from "./AdminTransactionInput";
import { TransactionStyle, TransactionType } from "../../../models/Transaction";
import useCreatedTransaction from "./hook/useCreatedTransaction";
import useAlertDialog from "../../hooks/useAlertDialog";
import { AlertType } from "../../hooks/common/useAttachAlertDialog";

export default function DialogAddTransaction(props: {
	openAddTransactionDialog: boolean;
	setOpenAddTransactionDialog: (value: boolean) => void;
	reload: () => void;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const [money, setMoney] = useState("");
	const [content, setContent] = useState("");
	const [serviceGroup, setServiceGroup] = useState("");
	const [selectedTransactionType, setSelectedTransactionType] = useState(TransactionType.No);
	const [selectedTransactionStyle, setSelectedTransactionStyle] = useState(TransactionStyle.CustomerPunish);
	const { createdService } = useCreatedTransaction();
	const { openAlertDialog } = useAlertDialog();

	const handleClose = () => {
		setMoney("");
		setContent("");
		setServiceGroup("");
		setSelectedTransactionType(TransactionType.PublicMoney);
		setSelectedTransactionStyle(TransactionStyle.CustomerPunish)

		props.setOpenAddTransactionDialog(false);
	};
	const handleSave = async () => {
		setIsSaving(true);
		let hasError = false;

		if (!money) {
			openAlertDialog?.(AlertType.Fail, "Tiền không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (!serviceGroup) {
			openAlertDialog?.(AlertType.Fail, "Vui lòng chọn Khách hàng/ chủ sở hữu");
			hasError = true;
			setIsSaving(false);
		}

		if (hasError) {
			return;
		}
		await createdService(money, content, serviceGroup, selectedTransactionType,selectedTransactionStyle, props.reload);
		setIsSaving(false);
		handleClose()
	};

	return (
		<DialogWrapSmallTransaction
			open={props.openAddTransactionDialog}
			onClose={handleClose}
			title="Tạo mới giao dịch"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleSave}
						disabled={isSaving}>
						{" "}
						{isSaving ? "Đang lưu..." : "Lưu"}
					</UserFormServiceButtonCreated>
				</>
			}>
			<AddProductInput
				money={money}
				setMoney={setMoney}
				content={content}
				setContent={setContent}
				serviceGroup={serviceGroup}
				setServiceGroup={setServiceGroup}
				selectedTransactionType={selectedTransactionType}
				setSelectedTransactionType={setSelectedTransactionType}
				selectedTransactionStyle={selectedTransactionStyle}
				setSelectedTransactionStyle={setSelectedTransactionStyle}
			/>
		</DialogWrapSmallTransaction>
	);
}
