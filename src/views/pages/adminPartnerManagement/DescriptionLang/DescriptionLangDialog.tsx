import React, { useEffect, useState } from "react";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreatedv2,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useUpdateDescriptionStaff from "../hook/useUpdateDescription";
import DescriptionLangInner from "./DescriptionLangInner";
import useDescriptionLang from "../hook/useGetDesLang";
import useUpdateDescriptionLang from "../hook/useUpdateDescriptionLang";

export interface DescriptionLang {
	lang: string;
	description: string;
}

export default function DialogDescriptionLang(props: {
	openUpdateLangDialog: boolean;
	setOpenUpdateLangDialog: (value: boolean) => void;
	reload: () => void;
	id?: number | null;
	setOpenDescriptionParnerDialog: (value: boolean) => void;
}) {
	const { reload, description } = useDescriptionLang({ id: props.id || 1 });
	const [editedDescriptions, setEditedDescriptions] = useState<DescriptionLang[]>(description);
	const { loadUpdate } = useUpdateDescriptionLang({ reload: props.reload });

	const { openAlertDialog } = useAlertDialog();
	const handleUpdateDescriptionStaff = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi mô tả này?",
			() => {},
			() => handleSave(),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const handleClose = () => {
		props.setOpenUpdateLangDialog(false);
		props.setOpenDescriptionParnerDialog(false);
	};
	const handleSave = async () => {
		try {
			await loadUpdate(props.id || 0, editedDescriptions);
			handleClose();
		} catch (error) {}
	};
	useEffect(() => {
		if (description) {
			setEditedDescriptions(description);
		}
	}, [description]);

	return (
		<DialogWrap
			open={props.openUpdateLangDialog}
			onClose={handleClose}
			title="Mô tả đa ngữ"
			actions={
				<>
					<UserFormServiceButtonCreatedv2 onClick={handleUpdateDescriptionStaff}>
						Lưu
					</UserFormServiceButtonCreatedv2>
					<UserFormServiceButtonClose onClick={handleClose}>Thoát</UserFormServiceButtonClose>
				</>
			}>
			<DescriptionLangInner
				description={description}
				setEditedDescriptions={setEditedDescriptions}
				editedDescriptions={editedDescriptions}
			/>
		</DialogWrap>
	);
}
