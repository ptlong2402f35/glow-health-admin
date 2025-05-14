import { useState } from "react";
import React from "react";
import {
	AdminProductrManagementFilterLeft,
	AdminProductrManagementFilterRight,
	AdminProductrManagementFilterWrap,
	ButtonAddAdminProductManagement,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogAddTag from "./AddTagsDialog";

export default function AdminTagsManagementFilter(props: { reload: () => void }) {
	const [openAddStoreDialog, setOpenAddStoreDialog] = useState(false);

	return (
		<AdminProductrManagementFilterWrap className="visible">
			<AdminProductrManagementFilterLeft></AdminProductrManagementFilterLeft>
			<AdminProductrManagementFilterRight>
				<ButtonAddAdminProductManagement
					onClick={() => {
						setOpenAddStoreDialog(true);
					}}>
					Thêm
				</ButtonAddAdminProductManagement>
			</AdminProductrManagementFilterRight>
			<DialogAddTag
				openAddStoreDialog={openAddStoreDialog}
				setOpenAddStoreDialog={setOpenAddStoreDialog}
				reload={props.reload}
			/>
		</AdminProductrManagementFilterWrap>
	);
}
