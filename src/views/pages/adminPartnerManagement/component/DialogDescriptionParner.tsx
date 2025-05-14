import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium, DialogWrapSmall } from "../../../controls/components/dialogWrap/DialogWrap";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
	UserFormServiceButtonCreatedv2,
	UserFormServiceButtonLang,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import { DescriptionParnerTextArea, DescriptionParnerTextDiv } from "../styled/StyleParner";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useUpdateDescriptionStaff from "../hook/useUpdateDescription";
import DialogDescriptionLang from "../DescriptionLang/DescriptionLangDialog";

export default function DialogDescriptionParner(props: {
	openAddDescriptionParnerDialog: boolean;
	setOpenDescriptionParnerDialog: (value: boolean) => void;
	reload: () => void;
	description?: string | null;
	id?: number | null;
}) {
	const [editMode, setEditMode] = useState(false);
	const [editedDescription, setEditedDescription] = useState(props.description || "");
	const { loadUpdate } = useUpdateDescriptionStaff({ reload: props.reload });
	const [openUpdateLangDialog, setOpenUpdateLangDialog] = useState(false);

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
		setEditMode(false);
		setEditedDescription(props.description || "");
		props.setOpenDescriptionParnerDialog(false);
	};
	const handleSave = async () => {
		try {
			await loadUpdate(props.id || 0, editedDescription);
			handleClose();
		} catch (error) {}
	};
	const handleEdit = () => {
		setEditMode(true);
	};

	const handleOpenLangClick = () => {
		setOpenUpdateLangDialog(true);
	};
	return (
		<DialogWrapMedium
			open={props.openAddDescriptionParnerDialog}
			onClose={handleClose}
			title="Mô tả"
			actions={
				<>
					<UserFormServiceButtonLang onClick={handleOpenLangClick}>Sửa đa ngữ</UserFormServiceButtonLang>
					{editMode ? (
						<UserFormServiceButtonCreatedv2 onClick={handleUpdateDescriptionStaff}>
							Lưu
						</UserFormServiceButtonCreatedv2>
					) : (
						<UserFormServiceButtonCreatedv2 onClick={handleEdit}>Sửa</UserFormServiceButtonCreatedv2>
					)}
					<UserFormServiceButtonClose onClick={handleClose}>Thoát</UserFormServiceButtonClose>
				</>
			}>
			<>
				{editMode ? (
					<DescriptionParnerTextArea
						// Cho chữ không bị gạch chân màu đỏ đỏ
						spellCheck={false}
						value={editedDescription}
						onChange={(e) => setEditedDescription(e.target.value)}
					/>
				) : (
					<DescriptionParnerTextDiv
						dangerouslySetInnerHTML={{ __html: props.description?.replace(/\n/g, "<br>") || "" }}
					/>
				)}
				<DialogDescriptionLang
					openUpdateLangDialog={openUpdateLangDialog}
					setOpenUpdateLangDialog={setOpenUpdateLangDialog}
					reload={props.reload}
					id={props.id}
					setOpenDescriptionParnerDialog={props.setOpenDescriptionParnerDialog}
				/>
			</>
		</DialogWrapMedium>
	);
}
