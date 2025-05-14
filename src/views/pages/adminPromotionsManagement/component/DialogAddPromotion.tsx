import React, { useEffect, useState } from "react";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import AddPromotionInput from "./AddPromotionInput";
import { PromotionType, hasDurationType } from "../../../../models/Promotions";
import useCreatedPromotion from "../hook/useAddPromotion";

export default function DialogAddPromotion(props: {
	openAddStoreDialog: boolean;
	setOpenAddStoreDialog: (value: boolean) => void;
	reload: () => void;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const { openAlertDialog } = useAlertDialog();
	const { createdPromotions } = useCreatedPromotion();
	const [name, setName] = useState("");
	const [type, setType] = useState(PromotionType.Glow);
	const [percentage, setPercentage] = useState(0);
	const [amount, setAmount] = useState(0);
	const [hasDuration, setHasDuration] = useState(hasDurationType.Limited);
	const [startAt, setStartAt] = useState(new Date());
	const [expireAt, setExpireAt] = useState(new Date());
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [note, setNote] = useState("");

	const handleSave = async () => {
		setIsSaving(true);

		let hasError = false;

		if (!name) {
			openAlertDialog?.(AlertType.Fail, "Tên không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (!percentage && !amount) {
			openAlertDialog?.(AlertType.Fail, "Số tiền hoặc phần trăm phải có giá trị");
			hasError = true;
			setIsSaving(false);
		}

		if (!startAt) {
			openAlertDialog?.(AlertType.Fail, "Ngày bắt đầu không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (!expireAt) {
			openAlertDialog?.(AlertType.Fail, "Ngày kết thúc không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (hasError) {
			return;
		}
		await createdPromotions(
			name,
			type,
			percentage,
			amount,
			hasDuration,
			startAt,
			expireAt,
			totalQuantity,
			note,
			props.reload
		);

		props.setOpenAddStoreDialog(false);
	};

	const handleClose = () => {
		props.setOpenAddStoreDialog(false);
	};
	useEffect(() => {
		setName("");
		setType(PromotionType.Glow);
		setPercentage(0);
		setAmount(0);
		setHasDuration(hasDurationType.Limited);
		setStartAt(new Date());
		setExpireAt(new Date());
		setTotalQuantity(0);
		setNote("");
	}, [props.openAddStoreDialog]);

	return (
		<DialogWrap
			open={props.openAddStoreDialog}
			onClose={handleClose}
			title="Thêm chương trình khuyến mãi"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
				</>
			}>
			<AddPromotionInput
				name={name}
				setName={setName}
				type={type}
				setType={setType}
				percentage={percentage}
				setPercentage={setPercentage}
				amount={amount}
				setAmount={setAmount}
				hasDuration={hasDuration}
				setHasDuration={setHasDuration}
				startAt={startAt}
				setStartAt={setStartAt}
				expireAt={expireAt}
				setExpireAt={setExpireAt}
				totalQuantity={totalQuantity}
				setTotalQuantity={setTotalQuantity}
				note={note}
				setNote={setNote}
			/>
			<></>
		</DialogWrap>
	);
}
