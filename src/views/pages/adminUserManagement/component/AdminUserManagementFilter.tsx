import { useEffect, useState } from "react";
import React from "react";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import useFilterList, { userRoleList } from "../hook/useFilterList";
import { SelectOptionType } from "react-select";
import {
	AdminUserManagementFilterWrap,
	StyleAddUser,
	RebateImgWrap,
	RebateImg,
	AdminUserManagementFilterBox,
	AdminUserManagementFilterTitle,
	AdminUserManagementFilterBoxDate,
	AdminUserManagementFilterPriceWrap,
	xStyleTableCellRespHead,
	AdminUserManagementCheckBoxWrap,
	AdminUserManagementCheckBoxIcon,
	AdminTableRowStyle,
	StyleRebateTextPending,
	PaginationWrapper,
	AdminUserManagementClearButton,
	ButtonIsFilterVisible,
	AdminUserManagementFilterWrapv3,
	AdminUserManagementFilterBoxv3,
	AdminUserManagementFilterBoxAmDuong,
	AdminUserManagementFilterWrapv4,
} from "../styled/AdminUserManagementStyle";
import { SmSelectSearchBox } from "../../../controls/components/selectSearchBox/SelectSearchBox";
import DialogUserCreated from "./DialogUserCreated";
import SearchPanel from "./SearchPanel";
import { useBanerFilter, userStatusList } from "../hook/useFilterBaner";
import { useHistory, useLocation } from "react-router";
import { filterCommonListToParams } from "../../../hooks/useCommonList/commonHelper";
import { AdminOrderManagementFilterItem } from "../../adminOrderManagement/styled/StyledAdminOrdermanagement";
import { AdminOrderManagementStoreControl } from "../hook/useFilterStore";
import { useFilteruseFilterLunisolar, userLunisolarList } from "../hook/useFilterLunisolar";
import { useFilterSpam, userSpamList } from "../hook/useFilterSpam";
import { usePunishFilter, userPunishList } from "../hook/useFilterPunish";

export default function AdminUserManagementFilter(props: { reload: () => void }) {
	// const { filterKeyword, doFilterKeyword } = useSearchProductsFunctions();

	// const [text, setText] = useState("");

	// const onSearch = (val: string) => doFilterKeyword?.(val);

	const [openAddUserDialog, setOpenAddUserDialog] = useState(false);

	const {
		doChangeRoleId,
		filterKeyword,
		doFilterKeyword,
		doClearFilter,
		filterStore,
		doFilterStore,
		filterStates,
		doFilterStates,
		filterLunisolar,
		doFilterLunisolar,
	} = useCommonListFunctions();

	const { roleIdSelected, setRoleIdSelected } = useFilterList();
	const { statusSelected, handleFilterBaner } = useBanerFilter();
	const { lunisolarSelected, handleFilterLunisolar } = useFilteruseFilterLunisolar();
	const { spamSelected, handleFilterSpam } = useFilterSpam();
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const { punishSelected, handleFilterPunish } = usePunishFilter();

	const handleFilter = (val: SelectOptionType, filter?: (val: any) => void, set?: (val: any) => void) => {
		filter?.(val.value);
		set?.(val);
	};
	const handleReload = () => {
		props.reload();
	};

	const handleClearFilter = () => {
		const filtersActive =
			filterKeyword ||
			filterStates ||
			lunisolarSelected.value ||
			filterStore ||
			roleIdSelected.value != 0 ||
			statusSelected.value;

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
			{/* <AdminUserManagementFilterWrapv3 className={isFilterVisible ? "visible" : ""}>
				<AdminUserManagementFilterBox>
					<AdminUserManagementFilterTitle>Lọc theo cơ sở</AdminUserManagementFilterTitle>
					<AdminOrderManagementStoreControl
						filterStaffId={parseInt(filterStore || "0")}
						doChangeStaffId={doFilterStore}
					/>
				</AdminUserManagementFilterBox>
				<AdminUserManagementFilterBoxv3>
					<AdminUserManagementFilterTitle>Lọc theo tên đối tác</AdminUserManagementFilterTitle>
					<SearchPanel
						placeholder="Nhập tên đối tác"
						filterKeyword={filterStates}
						doFilterKeyword={doFilterStates}
					/>
				</AdminUserManagementFilterBoxv3>
				<AdminUserManagementFilterBoxAmDuong>
					<AdminUserManagementFilterTitle>Lọc TK Âm/Dương</AdminUserManagementFilterTitle>
					<AdminFilterSearchSelect
						isSearchable={false}
						options={userLunisolarList}
						value={lunisolarSelected}
						setvalue={(val) => handleFilterLunisolar(val.value)}
					/>
				</AdminUserManagementFilterBoxAmDuong>
				<AdminUserManagementFilterBoxAmDuong>
					<AdminUserManagementFilterTitle>Lọc theo Spam</AdminUserManagementFilterTitle>
					<AdminFilterSearchSelect
						isSearchable={false}
						options={userSpamList}
						value={spamSelected}
						setvalue={(val) => handleFilterSpam(val.value)}
					/>
				</AdminUserManagementFilterBoxAmDuong>
				<AdminUserManagementFilterBoxAmDuong>
					<AdminUserManagementFilterTitle>Lọc theo Phạt</AdminUserManagementFilterTitle>
					<AdminFilterSearchSelect
						isSearchable={false}
						options={userPunishList}
						value={punishSelected}
						setvalue={(val) => handleFilterPunish(val.value)}
					/>
				</AdminUserManagementFilterBoxAmDuong>
			</AdminUserManagementFilterWrapv3>
			<AdminUserManagementFilterWrapv4 className={isFilterVisible ? "visible" : ""}>
				<AdminUserManagementFilterBox>
					<AdminUserManagementFilterTitle>Lọc theo người dùng</AdminUserManagementFilterTitle>
					<SearchPanel
						placeholder="Nhập SĐT người dùng"
						filterKeyword={filterKeyword}
						doFilterKeyword={doFilterKeyword}
					/>
				</AdminUserManagementFilterBox>
				<AdminUserManagementFilterBox>
					<AdminUserManagementFilterTitle>Lọc theo Vai trò</AdminUserManagementFilterTitle>
					<AdminFilterSearchSelect
						isSearchable={false}
						options={userRoleList}
						value={roleIdSelected}
						setvalue={(val) => handleFilter(val, doChangeRoleId, setRoleIdSelected)}
					/>
				</AdminUserManagementFilterBox>
				<AdminUserManagementFilterBox>
					<AdminUserManagementFilterTitle>Lọc theo blacklist</AdminUserManagementFilterTitle>
					<AdminFilterSearchSelect
						isSearchable={false}
						options={userStatusList}
						value={statusSelected}
						setvalue={(val) => handleFilterBaner(val.value)}
					/>
				</AdminUserManagementFilterBox>

				<div>
					<AdminUserManagementFilterTitle>Hủy lọc</AdminUserManagementFilterTitle>
					<AdminUserManagementClearButton onClick={handleClearFilter}>
						<i
							className="fa fa-refresh"
							aria-hidden="true"></i>
					</AdminUserManagementClearButton>
				</div> */}
				<AdminUserManagementFilterBox>
					<StyleAddUser
						onClick={() => {
							setOpenAddUserDialog(true);
						}}>
						+ Thêm người dùng
					</StyleAddUser>
					<DialogUserCreated
						openAddUserDialog={openAddUserDialog}
						setOpenAddUserDialog={setOpenAddUserDialog}
						reload={props.reload}
					/>
				</AdminUserManagementFilterBox>
				{/* <AdminUserManagementFilterBoxDate>
				<DateRangeInput
					fromDate={(filterFromDate && filterFromDate) || null}
					onDateFromChange={handleChangeFromDate}
					toDate={(filterToDate && filterToDate) || null}
					onDateToChange={handleChangeToDate}
				/>
			</AdminUserManagementFilterBoxDate> */}
			{/* </AdminUserManagementFilterWrapv4> */}
		</div>
	);
}

export const AdminFilterSearchSelect = (props: {
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
