import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import { Tags } from "../../../../models/Staff";
import AddTagsInput from "./TagsInput";
import useUpdateTag from "../hook/useUpdateTag";
import useListServiceGrounpAll from "../../adminProductManagement/hook/useServiceGroupAll";
export default function DialogUpdateTag(props: {
	openUpdateStoreDialog: boolean;
	setOpenUpdateStoreDialog: (value: boolean) => void;
	reload: () => void;
	val?: Tags;
}) {
	const { openAlertDialog } = useAlertDialog();
		const { listAll } = useListServiceGrounpAll();
	
	const { doUpdate } = useUpdateTag({ reload: props.reload });
	const [name, setName] = useState(props.val?.name || "");
		const [serviceGroup, setServiceGroup] = useState(props.val?.serviceGroup || "");

	const handleUpdate = async () => {
		let hasError = false;

		if (!name) {
			openAlertDialog?.(AlertType.Fail, "Tên không được để trống");
			hasError = true;
		}
		if (hasError) {
			return;
		}
		await doUpdate(props.val?.id||0, name,serviceGroup );

		props.setOpenUpdateStoreDialog(false);
	};

	useEffect(() => {
		setName(props.val?.name || "");
		setServiceGroup(props.val?.serviceGroup || "");
	}, [props.openUpdateStoreDialog]);

	const handleClose = () => {
		setName(props.val?.name || "");
		setServiceGroup(props.val?.serviceGroup || "");

		props.setOpenUpdateStoreDialog(false);
	};

	return (
		<DialogWrapMedium
			open={props.openUpdateStoreDialog}
			onClose={handleClose}
			title="Sửa Tag"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated onClick={handleUpdate}>Cập nhật</UserFormServiceButtonCreated>
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
