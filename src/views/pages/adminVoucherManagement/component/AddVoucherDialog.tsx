import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import VoucherInput from "./VoucherInput";
import useCreatedVoucher from "../hook/useAddVoucher";
import { ConditionType, VoucherType } from "../../../../models/Voucher";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function DialogAddVoucher(props: {
	openAddVoucherDialog: boolean;
	setOpenAddVoucherDialog: (value: boolean) => void;
	reload: () => void;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const { createdVoucher } = useCreatedVoucher({ reload: props.reload });
	const [name, setName] = useState("");
	const [endTime, setEndTime] = useState(new Date());
	const [maxReduce, setMaxReduce] = useState("");
	const [minValueOrder, setMinValueOrder] = useState("");
	const [code, setCode] = useState("");
	const [quantity, setQuantity] = useState("");
	const [startTime, setStartTime] = useState(new Date());
	const [type, setType] = useState("");
	const [value, setValue] = useState("");
	const [condition, setCondition] = useState(ConditionType.TieuChuan);
	const { openAlertDialog } = useAlertDialog();

	const handleSave = async () => {
		setIsSaving(true);

		
		await createdVoucher(
			name,
			code,
			endTime,
			startTime,
			quantity,
			type,
			value,
			minValueOrder,
			maxReduce,
			condition
		);
		setIsSaving(false);
		props.setOpenAddVoucherDialog(false);
	};

	const handleClose = () => {
		setName("");
		setCode("");
		setStartTime(new Date());
		setQuantity("");
		setType(VoucherType.PhanTram);
		setValue("");
		setMinValueOrder("");
		setMaxReduce("");
		setEndTime(new Date());
		setCondition(ConditionType.TieuChuan);
		props.setOpenAddVoucherDialog(false);
	};

	return (
		<DialogWrap
			open={props.openAddVoucherDialog}
			onClose={handleClose}
			title="Thêm mới voucher"
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
			<VoucherInput
				name={name}
				setName={setName}
				code={code}
				setCode={setCode}
				startTime={startTime}
				setStartTime={setStartTime}
				quantity={quantity}
				setQuantity={setQuantity}
				type={type}
				setType={setType}
				value={value}
				setValue={setValue}
				minValueOrder={minValueOrder}
				setMinValueOrder={setMinValueOrder}
				maxReduce={maxReduce}
				setMaxReduce={setMaxReduce}
				endTime={endTime}
				setEndTime={setEndTime}
				condition={condition}
				setCondition={setCondition}
			/>
		</DialogWrap>
	);
}
