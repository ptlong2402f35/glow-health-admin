import { useState } from "react";
import React from "react";
import {
	AdminProductrManagementFilterRight,
	AdminProductrManagementFilterWrap,
	ButtonAddAdminProductManagement,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogAddBlog from "./DialogAddBlog";

export default function AdminBlogFilter(props: { reload: () => void }) {
	const [openAddVoucherDialog, setOpenAddVoucherDialog] = useState(false);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	return (
		<div>
			<AdminProductrManagementFilterWrap>
				<AdminProductrManagementFilterRight>
					<ButtonAddAdminProductManagement
						onClick={() => {
							setOpenAddVoucherDialog(true);
						}}>
						Thêm
					</ButtonAddAdminProductManagement>
				</AdminProductrManagementFilterRight>
				<DialogAddBlog
					openAddVoucherDialog={openAddVoucherDialog}
					setOpenAddVoucherDialog={setOpenAddVoucherDialog}
					reload={props.reload}
				/>
			</AdminProductrManagementFilterWrap>
		</div>
	);
}
