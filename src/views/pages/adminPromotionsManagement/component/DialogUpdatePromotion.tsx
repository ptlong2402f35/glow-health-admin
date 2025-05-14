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
import Promotions, { PromotionType, hasDurationType } from "../../../../models/Promotions";
import useCreatedPromotion from "../hook/useAddPromotion";
import useUpdatePromotion from "../hook/useUpdatePromotion";

export default function DialogUpdatePromotion(props: {
	openUpdatePromotionDialog: boolean;
	setOpenUpdatePromotionDialog: (value: boolean) => void;
	reload: () => void;
	promotion?: Promotions;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const { openAlertDialog } = useAlertDialog();
	const { updatePromotions } = useUpdatePromotion();
	const [name, setName] = useState(props.promotion?.name || "");
	const [type, setType] = useState(props.promotion?.type || PromotionType.Glow);
	const [percentage, setPercentage] = useState(props.promotion?.percentage || 0);
	const [amount, setAmount] = useState(props.promotion?.amount || 0);
	const [hasDuration, setHasDuration] = useState(
		props.promotion?.durationType ? hasDurationType.Limited : hasDurationType.UnLimited
	);
	const [startAt, setStartAt] = useState(props.promotion?.startAt || new Date());
	const [expireAt, setExpireAt] = useState(props.promotion?.expireAt || new Date());
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [note, setNote] = useState(props.promotion?.note || "");
	const [id, setId] = useState(0);

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
		await updatePromotions(
			id,
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

		props.setOpenUpdatePromotionDialog(false);
	};

	const handleClose = () => {
		props.setOpenUpdatePromotionDialog(false);
	};
	useEffect(() => {
		setName(props.promotion?.name || "");
		setType(props.promotion?.type || PromotionType.Glow);
		setPercentage(props.promotion?.percentage || 0);
		setAmount(props.promotion?.amount || 0);
		setHasDuration(props.promotion?.durationType ? hasDurationType.Limited : hasDurationType.UnLimited);
		setStartAt(props.promotion?.startAt || new Date());
		setExpireAt(props.promotion?.expireAt || new Date());
		setTotalQuantity(props.promotion?.totalQuantity || 0);
		setId(props.promotion?.id || 0);
		setNote(props.promotion?.note || "");
	}, [props.openUpdatePromotionDialog]);

	return (
		<DialogWrap
			open={props.openUpdatePromotionDialog}
			onClose={handleClose}
			title="Sửa khuyến mãi"
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
				promotion={props.promotion}
				note={note}
				setNote={setNote}
			/>
			<></>
		</DialogWrap>
	);
}
