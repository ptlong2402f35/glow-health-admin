import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { UserFormServiceButtonClose, UserFormServiceButtonCreated } from "../styled/ProductManagementStyle";
import AddProductInput from "./AddProductInput";
import useCreatedService from "../hook/useCreatedProduct";
import useListServiceGrounpAll from "../hook/useServiceGroupAll";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import Service, { ScopeType } from "../../../../models/Service";
import useUpdateService from "../hook/useUpdateService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

// string[] | null | undefined
// (string | null | undefined)[] | null | undefined

export default function DialogUpdateService(props: {
	openUpdateServiceDialog: boolean;
	setOpenUpdateServiceDialog: (value: boolean) => void;
	reload: () => void;
	service?: Service;
}) {
	const [isSaving, setIsSaving] = useState(false);
	const { doUpdate } = useUpdateService({ reload: props.reload });
	const [name, setName] = useState(props.service?.name || "");
	const [code, setCode] = useState(props.service?.code || "1");
	const [price, setPrice] = useState(props.service?.price || "1");
	const [unit, setUnit] = useState(props.service?.unit || "1");
	const [serviceGroup, setServiceGroup] = useState(props.service?.serviceGroup || "");
	const [type, setType] = useState(props.service?.scope || ScopeType.Universal);

	const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([props.service?.imageUrl || ""]));
	const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(
		convertUrlsToImageDatas(props.service?.images?.map((image) => image?.path || "").filter((val) => val) || [])
	);
	const [description, setDescription] = useState(props.service?.description || "");

	const { openAlertDialog } = useAlertDialog();

	const handleUpdate = async () => {
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
		await doUpdate(
			props.service?.id,
			name,
			code,
			price,
			unit,
			serviceGroup as string,
			avtData[0],
			avtMultiData,
			type,
			description
		);
		setIsSaving(false);
		props.setOpenUpdateServiceDialog(false);
	};
	const { listAll } = useListServiceGrounpAll();

	useEffect(() => {
		setName(props.service?.name || "");
		setCode(props.service?.code || "1");
		setPrice(props.service?.price || "1");
		setUnit(props.service?.unit || "1");
		setServiceGroup(props.service?.serviceGroup || "");
		setType(props.service?.scope || ScopeType.Universal);

		setAvtData(convertUrlsToImageDatas([props.service?.imageUrl || ""]));
		setAvtMultiData(
			convertUrlsToImageDatas(
				(props.service?.images || []).map((image) => image?.path || "").filter((val) => val)
			)
		);
		setDescription(props.service?.description || "");
	}, [props.openUpdateServiceDialog]);

	const handleClose = () => {
		setName(props.service?.name || "");
		setCode(props.service?.code || "1");
		setPrice(props.service?.price || "1");
		setUnit(props.service?.unit || "1");
		setServiceGroup(props.service?.serviceGroup || "");

		setAvtData(convertUrlsToImageDatas([props.service?.imageUrl || ""]));
		setAvtMultiData(
			convertUrlsToImageDatas(
				(props.service?.images || []).map((image) => image?.path || "").filter((val) => val)
			)
		);
		setDescription(props.service?.description || "");

		props.setOpenUpdateServiceDialog(false);
	};

	return (
		<DialogWrapMedium
			open={props.openUpdateServiceDialog}
			onClose={handleClose}
			title="Sửa dịch vụ"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleUpdate}
						disabled={isSaving}>
						{isSaving ? `Đang sửa` : `Sửa`}
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
				serviceGroup={serviceGroup as string}
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
