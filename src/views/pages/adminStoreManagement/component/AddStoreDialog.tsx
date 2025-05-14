import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useCreatedStore from "../hook/useAddStore";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import AddStoreInput from "./StoreInput";

export default function DialogAddStore(props: {
	openAddStoreDialog: boolean;
	setOpenAddStoreDialog: (value: boolean) => void;
	reload: () => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const { createdStore } = useCreatedStore();
	const [name, setName] = useState("");
	const [long, setLong] = useState(0);
	const [lat, setLat] = useState(0);

	const handleSave = async () => {
		let hasError = false;

		if (!name) {
			openAlertDialog?.(AlertType.Fail, "Tên không được để trống");
			hasError = true;
		}
		if (hasError) {
			return;
		}
		await createdStore(name, long, lat, props.reload);

		props.setOpenAddStoreDialog(false);
	};

	const handleClose = () => {
		setName("");
		setLong(0);
		setLat(0);

		props.setOpenAddStoreDialog(false);
	};

	return (
		<DialogWrap
			open={props.openAddStoreDialog}
			onClose={handleClose}
			title="Thêm cơ sở"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
				</>
			}>
			<AddStoreInput
				name={name}
				setName={setName}
				long={long}
				setLong={setLong}
				lat={lat}
				setLat={setLat}
			/>
		</DialogWrap>
	);
}
