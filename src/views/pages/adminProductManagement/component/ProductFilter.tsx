import { useState } from "react";
import React from "react";
import {
	AdminProductrManagementFilterLeft,
	AdminProductrManagementFilterRight,
	AdminProductrManagementFilterSearch,
	AdminProductrManagementFilterStatus,
	AdminProductrManagementFilterWrap,
	ButtonAddAdminProductManagement,
} from "../styled/ProductManagementStyle";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import SearchPanel from "../../adminUserManagement/component/SearchPanel";
import { SelectOptionType } from "react-select";
import { SmSelectSearchBox } from "../../../controls/components/selectSearchBox/SelectSearchBox";
import { useStatusFilter, userStatusList } from "../hook/useFilterStatus";
import DialogAddService from "./AddProductDialog";
import {
	AdminUserManagementFilterTitle,
	ButtonIsFilterVisible,
} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { useTypeFilter, userTypeList } from "../hook/useFilterType";
import { AdminUserManagementFilterClearButton } from "../../adminPartnerManagement/styled/StyleParner";

export default function AdminProductrManagementFilter(props: { reload: () => void }) {
	const [openAddServiceDialog, setOpenAddServiceDialog] = useState(false);
	const { filterKeyword, doFilterKeyword, doClearFilter } = useCommonListFunctions();
	const { statusSelected, handleFilter } = useStatusFilter();
	const { typeSelected, handleTypeFilter } = useTypeFilter();
	const [isFilterVisible, setIsFilterVisible] = useState(false);

	const handleReload = () => {
		props.reload();
	};

	const handleClearFilter = () => {
		const filtersActive = filterKeyword || statusSelected.value || typeSelected.value != "1;2;3";
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
					<AdminProductrManagementFilterStatus>
						<AdminUserManagementFilterTitle>Lọc theo trạng thái</AdminUserManagementFilterTitle>
						<ProductFilterStatusSelect
							isSearchable={false}
							options={userStatusList}
							value={statusSelected}
							setvalue={(val) => handleFilter(val.value)}
						/>
					</AdminProductrManagementFilterStatus>
					<AdminProductrManagementFilterSearch>
						<AdminUserManagementFilterTitle>Lọc theo tên</AdminUserManagementFilterTitle>
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
							setOpenAddServiceDialog(true);
						}}>
						Thêm
					</ButtonAddAdminProductManagement>
				</AdminProductrManagementFilterRight>
				<DialogAddService
					openAddServiceDialog={openAddServiceDialog}
					setOpenAddServiceDialog={setOpenAddServiceDialog}
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
