import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import AddStoreInput from "./TagsInput";
import useListServiceGrounpAll from "../../adminProductManagement/hook/useServiceGroupAll";
import AddTagsInput from "./TagsInput";
import useCreatedTags from "../hook/useCreatedTags";

export default function DialogAddTag(props: {
	openAddStoreDialog: boolean;
	setOpenAddStoreDialog: (value: boolean) => void;
	reload: () => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const { createdTags } = useCreatedTags();
	const [name, setName] = useState("");
	const [serviceGroup, setServiceGroup] = useState("");
	
	const { listAll } = useListServiceGrounpAll();
	

	const handleSave = async () => {
		let hasError = false;

		if (!name) {
			openAlertDialog?.(AlertType.Fail, "Tên không được để trống");
			hasError = true;
		}
		if (hasError) {
			return;
		}
		await createdTags(name, serviceGroup, props.reload);

		props.setOpenAddStoreDialog(false);
	};

	const handleClose = () => {
		setName("");
		setServiceGroup("");
		props.setOpenAddStoreDialog(false);
	};

	return (
		<DialogWrapMedium
			open={props.openAddStoreDialog}
			onClose={handleClose}
			title="Thêm Tag"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
				</>
			}>
			<AddTagsInput
				name={name}
				setName={setName}
				serviceGroup={serviceGroup}
				setServiceGroup={setServiceGroup}
				listAll={listAll}

			/>
		</DialogWrapMedium>
	);
}
