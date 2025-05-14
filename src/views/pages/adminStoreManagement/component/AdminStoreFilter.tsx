import { useState } from "react";
import React from "react";
import {
	AdminProductrManagementFilterLeft,
	AdminProductrManagementFilterRight,
	AdminProductrManagementFilterWrap,
	ButtonAddAdminProductManagement,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogAddStore from "./AddStoreDialog";

export default function AdminStoreManagementFilter(props: { reload: () => void }) {
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
			<DialogAddStore
				openAddStoreDialog={openAddStoreDialog}
				setOpenAddStoreDialog={setOpenAddStoreDialog}
				reload={props.reload}
			/>
		</AdminProductrManagementFilterWrap>
	);
}
