import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import VoucherInput from "./VoucherInput";
import useCreatedVoucher from "../hook/useAddVoucher";
import Voucher, { ConditionType, VoucherType } from "../../../../models/Voucher";
import useUpdateVoucher from "../hook/useUpdateVoucher";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function DialogUpdateVoucher(props: {
	openUpdateVoucherDialog: boolean;
	setOpenUpdateVoucherDialog: (value: boolean) => void;
	reload: () => void;
	voucher: Voucher | null;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const { doUpdate } = useUpdateVoucher({ reload: props.reload });
	const [name, setName] = useState("");
	const [endTime, setEndTime] = useState(new Date());
	const [maxReduce, setMaxReduce] = useState("");
	const [minValueOrder, setMinValueOrder] = useState("");
	const [code, setCode] = useState("");
	const [quantity, setQuantity] = useState("");
	const [startTime, setStartTime] = useState(new Date());
	const [type, setType] = useState("");
	const [value, setValue] = useState("");
	const [id, setId] = useState(0);
	const [condition, setCondition] = useState(ConditionType.TieuChuan);
	const { openAlertDialog } = useAlertDialog();

	const handleSave = async () => {
		setIsSaving(true);

	
		await doUpdate(name, code, endTime, startTime, quantity, type, value, minValueOrder, maxReduce, id, condition);
		setIsSaving(false);
		props.setOpenUpdateVoucherDialog(false);
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

		props.setOpenUpdateVoucherDialog(false);
	};

	useEffect(() => {
		setName(props.voucher?.name || "");
		setCode(props.voucher?.code || "");
		setQuantity(props.voucher?.quantity || "");
		setType(props.voucher?.type || "");
		setValue(props.voucher?.value || "");
		setMinValueOrder(props.voucher?.minValueOrder || "");
		setMaxReduce(props.voucher?.maxReduce || "");
		setId(props.voucher?.id || 0);
		setEndTime(props.voucher?.endAt || new Date());
		setStartTime(props.voucher?.startAt || new Date());
		setCondition(props.voucher?.conditionType || ConditionType.TieuChuan);
	}, [props.openUpdateVoucherDialog]);
	return (
		<DialogWrap
			open={props.openUpdateVoucherDialog}
			onClose={handleClose}
			title="Sửa voucher"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleSave}
						disabled={isSaving}>
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
