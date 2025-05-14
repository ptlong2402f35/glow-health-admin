import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import AddStoreInput from "./StoreInput";
import useUpdateStore from "../hook/useUpdateStore";
import Store from "../../../../models/Store";

export default function DialogUpdateStore(props: {
	openUpdateStoreDialog: boolean;
	setOpenUpdateStoreDialog: (value: boolean) => void;
	reload: () => void;
	store?: Store;
}) {
	const { openAlertDialog } = useAlertDialog();
	const { doUpdate } = useUpdateStore({ reload: props.reload });
	const [name, setName] = useState(props.store?.name || "");
	const [long, setLong] = useState(props.store?.storeCoordinate?.coordinates?.[0] || 0);
	const [lat, setLat] = useState(props.store?.storeCoordinate?.coordinates?.[1] || 0);

	const handleUpdate = async () => {
		let hasError = false;

		if (!name) {
			openAlertDialog?.(AlertType.Fail, "Tên không được để trống");
			hasError = true;
		}
		if (hasError) {
			return;
		}
		await doUpdate(props.store?.id, name, long, lat);

		props.setOpenUpdateStoreDialog(false);
	};

	useEffect(() => {
		setName(props.store?.name || "");
		setLong(props.store?.storeCoordinate?.coordinates?.[0] || 0);
		setLat(props.store?.storeCoordinate?.coordinates?.[1] || 0);
	}, [props.openUpdateStoreDialog]);

	const handleClose = () => {
		setName(props.store?.name || "");
		setLong(props.store?.storeCoordinate?.coordinates?.[0] || 0);
		setLat(props.store?.storeCoordinate?.coordinates?.[1] || 0);

		props.setOpenUpdateStoreDialog(false);
	};

	return (
		<DialogWrap
			open={props.openUpdateStoreDialog}
			onClose={handleClose}
			title="Sửa cơ sở"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated onClick={handleUpdate}>Cập nhật</UserFormServiceButtonCreated>
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
