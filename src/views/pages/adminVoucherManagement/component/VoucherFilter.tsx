import { useState } from "react";
import React from "react";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import SearchPanel from "../../adminUserManagement/component/SearchPanel";
import { SelectOptionType } from "react-select";
import { SmSelectSearchBox } from "../../../controls/components/selectSearchBox/SelectSearchBox";
import {
	AdminProductrManagementFilterLeft,
	AdminProductrManagementFilterRight,
	AdminProductrManagementFilterSearch,
	AdminProductrManagementFilterStatus,
	AdminProductrManagementFilterWrap,
	AdminVoucherManagementFilterStatus,
	ButtonAddAdminProductManagement,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import useFilterStatus, { useStatusFilter, userStatusList } from "../hook/useFilterStatus";
import DialogAddVoucher from "./AddVoucherDialog";
import {
	AdminUserManagementFilterTitle,
	ButtonIsFilterVisible,
} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { AdminUserManagementFilterClearButton } from "../../adminPartnerManagement/styled/StyleParner";

export default function AdminVoucherManagementFilter(props: { reload: () => void }) {
	const [openAddVoucherDialog, setOpenAddVoucherDialog] = useState(false);
	const { filterKeyword, doFilterKeyword, doClearFilter } = useCommonListFunctions();
	const { statusSelected, handleFilter } = useStatusFilter();
	const [isFilterVisible, setIsFilterVisible] = useState(false);

	const handleReload = () => {
		props.reload();
	};

	const handleClearFilter = () => {
		const filtersActive = filterKeyword || statusSelected.value;
		if (filtersActive) {
			doClearFilter?.();
		} else {
			handleReload();
		}
	};
	return (
		<div>
			<ButtonIsFilterVisible onClick={() => setIsFilterVisible(!isFilterVisible)}>
				{isFilterVisible ? (
					<span>
						<i
							className="fa fa-angle-up"
							aria-hidden="true"></i>{" "}
						Lọc
					</span>
				) : (
					<span>
						<i
							className="fa fa-angle-down"
							aria-hidden="true"></i>{" "}
						Lọc
					</span>
				)}
			</ButtonIsFilterVisible>
			<AdminProductrManagementFilterWrap className={isFilterVisible ? "visible" : ""}>
				<AdminProductrManagementFilterLeft>
					<AdminVoucherManagementFilterStatus>
						<ProductFilterStatusSelect
							isSearchable={false}
							options={userStatusList}
							value={statusSelected}
							setvalue={(val) => handleFilter(val.value)}
						/>
					</AdminVoucherManagementFilterStatus>
					<AdminProductrManagementFilterSearch>
						<SearchPanel
							placeholder="Tìm kiếm"
							filterKeyword={filterKeyword}
							doFilterKeyword={doFilterKeyword}
						/>
					</AdminProductrManagementFilterSearch>
				</AdminProductrManagementFilterLeft>
				<AdminProductrManagementFilterRight>
					<div>
						<AdminUserManagementFilterTitle>Hủy lọc</AdminUserManagementFilterTitle>
						<AdminUserManagementFilterClearButton onClick={handleClearFilter}>
							<i
								className="fa fa-refresh"
								aria-hidden="true"></i>
						</AdminUserManagementFilterClearButton>
					</div>
					<ButtonAddAdminProductManagement
						onClick={() => {
							setOpenAddVoucherDialog(true);
						}}>
						Thêm
					</ButtonAddAdminProductManagement>
				</AdminProductrManagementFilterRight>
				<DialogAddVoucher
					openAddVoucherDialog={openAddVoucherDialog}
					setOpenAddVoucherDialog={setOpenAddVoucherDialog}
					reload={props.reload}
				/>
			</AdminProductrManagementFilterWrap>
		</div>
	);
}

export const ProductFilterStatusSelect = (props: {
	options: SelectOptionType[];
	value: SelectOptionType;
	setvalue: (val: SelectOptionType) => void;
	isSearchable?: boolean;
}) => {
	return (
		<SmSelectSearchBox
			isSearchable={props.isSearchable}
			options={props.options}
			value={props.value}
			onChange={props.setvalue}></SmSelectSearchBox>
	);
};
