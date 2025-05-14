import * as React from "react";
import { useEffect, useState } from "react";
import { PageCenter, PageWrap, PageHeader } from "../../controls/components/form/Page";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import SearchPanel from "./component/SearchPanel";
import { AdminUserManagementTable } from "./component/AdminUserManagementTable";

import {
	RebateImgWrap,
	RebateImg,
	AdminUserManagementFilterWrap,
	AdminUserManagementFilterBox,
	AdminUserManagementFilterTitle,
	AdminUserManagementFilterBoxDate,
	AdminUserManagementFilterPriceWrap,
	xStyleTableCellRespHead,
	AdminUserManagementCheckBoxWrap,
	AdminUserManagementCheckBoxIcon,
	AdminTableRowStyle,
	StyleRebateTextPending,
	StyleAddUser,
	PaginationWrapper,
	AdminUserCountMain,
	AdminUserCountTitle,
} from "./styled/AdminUserManagementStyle";
import DialogUserCreated from "./component/DialogUserCreated";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { getFilterAdminList } from "./hook/useListUser";
import UserManagement from "../../../models/UserGlow";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import { SmSelectSearchBox } from "../../controls/components/selectSearchBox/SelectSearchBox";
import { SelectOptionType } from "react-select";
import useListSelectedItems from "../../hooks/useListSelectedItems";
import AdminUserManagementFilter from "./component/AdminUserManagementFilter";

// export const AdminCheckBox = (props: {
// 	isSelected: (item: Order) => boolean;
// 	item: Order;
// 	onSelected: (item: Order, checked: boolean) => void;
// }) => {
// 	return (
// 		<AdminUserManagementCheckBoxWrap>
// 			<span></span>
// 			<AdminUserManagementCheckBoxIcon $RebateActive={props.isSelected(props.item)}></AdminUserManagementCheckBoxIcon>
// 			<input
// 				type={"checkbox"}
// 				checked={props.isSelected(props.item)}
// 				onChange={(e) => props.onSelected(props.item, e.target.checked)}></input>
// 		</AdminUserManagementCheckBoxWrap>
// 	);
// };

export default function AdminUserManagement() {
	const { listUser, count, reload } = getFilterAdminList();
	const { selectedItems, isItemSelected, isItemSelectedAll, onItemSelectedAll, onItemSelectedChange, clearSelected } =
		useListSelectedItems<UserManagement, number | null | undefined>(null, (item: UserManagement) => item.id);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [checkDate, setcheckDate] = useState(0);
	const { page, filterRoleId, filterUserIdString, filterFromDate, filterToDate, filterKeyword, doChangePage } =
		useCommonListFunctions();

	useEffect(() => {
		clearSelected();
	}, [filterRoleId, filterUserIdString, checkDate]);

	useEffect(() => {
		if (filterFromDate && filterToDate) {
			setcheckDate(filterFromDate.getTime() + filterToDate.getTime());
		}
	}, [filterFromDate, filterToDate]);
	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý người dùng</PageHeader>

				<AdminUserManagementFilter reload={reload} />
				<PaginationWrapper>
					<NumberPaginationBox
						page={page || 1}
						count={count}
						per={PERPAGE.Admin}
						onChange={(val) => doChangePage?.(val)}
					/>
				</PaginationWrapper>
				<AdminUserCountTitle>
					Tổng số người dùng:&nbsp;&nbsp;<AdminUserCountMain>{count}</AdminUserCountMain>
				</AdminUserCountTitle>
				<AdminUserManagementTable
					listUser={listUser}
					count={count}
					reload={reload}
					isItemSelected={isItemSelected}
					isItemSelectedAll={isItemSelectedAll}
					onItemSelectedChange={onItemSelectedChange}
					onItemSelectedAll={onItemSelectedAll}
				/>
				<PaginationWrapper>
					<NumberPaginationBox
						page={page || 1}
						count={count}
						per={PERPAGE.Admin}
						onChange={(val) => doChangePage?.(val)}
					/>
				</PaginationWrapper>
			</PageCenter>
		</PageWrap>
	);
}
