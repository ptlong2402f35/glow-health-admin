import { useState } from "react";
import React from "react";
import {
	AdminProductrManagementFilterLeft,
	AdminProductrManagementFilterLeftv2,
	AdminProductrManagementFilterRight,
	AdminProductrManagementFilterSearch,
	AdminProductrManagementFilterWrap,
	AdminVoucherManagementFilterStatus,
	ButtonAddAdminProductManagement,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogAddCustom from "./CustomSEODialogAdd";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import SearchPanel from "../../adminUserManagement/component/SearchPanel";
import { ProductFilterStatusSelect } from "../../adminProductManagement/component/ProductFilter";
import { useStatusFilter } from "../../adminProductManagement/hook/useFilterStatus";
import { userStatusList } from "../../adminVoucherManagement/hook/useFilterStatus";
import { AdminUserManagementFilterTitle } from "../../adminUserManagement/styled/AdminUserManagementStyle";
// import DialogAddStore from "./AddStoreDialog";

export default function AdminCustomManagementFilter(props: { reload: () => void }) {
	const [openAddStoreDialog, setOpenAddStoreDialog] = useState(false);
	const { filterKeyword, doFilterKeyword, filterIdentify, doFilterIdentify } = useCommonListFunctions();
	const { statusSelected, handleFilter } = useStatusFilter();
	return (
		<AdminProductrManagementFilterWrap className="visible">
			<AdminProductrManagementFilterLeftv2>
				<AdminVoucherManagementFilterStatus>
					<AdminUserManagementFilterTitle>Lọc theo hoạt động</AdminUserManagementFilterTitle>
										<ProductFilterStatusSelect
											isSearchable={false}
											options={userStatusList}
											value={statusSelected}
											setvalue={(val) => handleFilter(val.value)}
										/>
									</AdminVoucherManagementFilterStatus>
				<AdminProductrManagementFilterSearch>
				<AdminUserManagementFilterTitle>Lọc theo tên</AdminUserManagementFilterTitle>
					<SearchPanel
						placeholder="Tìm kiếm theo tên"
						filterKeyword={filterKeyword}
						doFilterKeyword={doFilterKeyword}
					/>
				</AdminProductrManagementFilterSearch>
				<AdminProductrManagementFilterSearch>
				<AdminUserManagementFilterTitle>Lọc theo link</AdminUserManagementFilterTitle>
					<SearchPanel
						placeholder="Tìm kiếm theo link"
						filterKeyword={filterIdentify}
						doFilterKeyword={doFilterIdentify}
					/>
				</AdminProductrManagementFilterSearch>

			</AdminProductrManagementFilterLeftv2>
			<AdminProductrManagementFilterRight>
				<ButtonAddAdminProductManagement
					onClick={() => {
						setOpenAddStoreDialog(true);
					}}>
					Thêm
				</ButtonAddAdminProductManagement>
			</AdminProductrManagementFilterRight>
			<DialogAddCustom
				openAddVoucherDialog={openAddStoreDialog}
				setOpenAddVoucherDialog={setOpenAddStoreDialog}
				reload={props.reload}
			/>
		</AdminProductrManagementFilterWrap>
	);
}
