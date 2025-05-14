import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { UserFormServiceButtonClose, UserFormServiceButtonCreated } from "../styled/ProductManagementStyle";
import AddProductInput from "./AddProductInput";
import useCreatedService from "../hook/useCreatedProduct";
import useListServiceGrounpAll from "../hook/useServiceGroupAll";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ScopeType } from "../../../../models/Service";

export default function DialogAddService(props: {
	openAddServiceDialog: boolean;
	setOpenAddServiceDialog: (value: boolean) => void;
	reload: () => void;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const { createdService } = useCreatedService();
	const [name, setName] = useState("");
	const [code, setCode] = useState("1");
	const [price, setPrice] = useState("1");
	const [unit, setUnit] = useState("1");
	const [serviceGroup, setServiceGroup] = useState("");
	const [type, setType] = useState(ScopeType.Universal);
	const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(convertUrlsToImageDatas([]));
	const { openAlertDialog } = useAlertDialog();
	const [description, setDescription] = useState("");

	const handleSave = async () => {
		setIsSaving(true);
		let hasError = false;

		if (!name) {
			openAlertDialog?.(AlertType.Fail, "Tên không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (!code) {
			openAlertDialog?.(AlertType.Fail, "Code không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (!price) {
			openAlertDialog?.(AlertType.Fail, "Giá không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (!unit) {
			openAlertDialog?.(AlertType.Fail, "Đơn vị không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (!serviceGroup) {
			openAlertDialog?.(AlertType.Fail, "Nhóm dịch vụ không được để trống");
			hasError = true;
			setIsSaving(false);
		}

		if (hasError) {
			return;
		}
		await createdService(
			name,
			code,
			price,
			unit,
			serviceGroup,
			avtData[0],
			avtMultiData,
			type,
			description,
			props.reload
		);
		setIsSaving(false);
		props.setOpenAddServiceDialog(false);
	};
	const { listAll } = useListServiceGrounpAll();

	const handleClose = () => {
		setName("");
		setCode("1");
		setPrice("1");
		setUnit("1");
		setServiceGroup("");
		setType(ScopeType.Universal);
		setDescription("");

		setAvtData(convertUrlsToImageDatas([""]));
		setAvtMultiData(convertUrlsToImageDatas([]));

		props.setOpenAddServiceDialog(false);
	};

	return (
		<DialogWrapMedium
			open={props.openAddServiceDialog}
			onClose={handleClose}
			title="Thêm dịch vụ"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleSave}
						disabled={isSaving}>
						{isSaving ? `Đang lưu` : `Lưu`}
					</UserFormServiceButtonCreated>
				</>
			}>
			<AddProductInput
				name={name}
				setName={setName}
				// code={code}
				// setCode={setCode}
				// price={price}
				// setPrice={setPrice}
				// unit={unit}
				// setUnit={setUnit}
				serviceGroup={serviceGroup}
				setServiceGroup={setServiceGroup}
				listAll={listAll}
				avtData={avtData}
				setAvtData={setAvtData}
				avtMultiData={avtMultiData}
				setAvtMultiData={setAvtMultiData}
				type={type}
				setType={setType}
				description={description}
				setDescription={setDescription}
			/>
		</DialogWrapMedium>
	);
}
