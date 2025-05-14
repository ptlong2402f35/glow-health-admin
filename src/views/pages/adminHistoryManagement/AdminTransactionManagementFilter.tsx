import React, { useState } from "react";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { AdminProductrManagementFilterSearch } from "../adminProductManagement/styled/ProductManagementStyle";
import SearchPanel from "../adminUserManagement/component/SearchPanel";
import { AdminOrderManagementFilterDate } from "../adminOrderManagement/AdminOrderManagementControl";
import {
	AdminTransactionFilterWrap,
	AdminTransactionFilterLeft,
	AdminTransactionFilterRight,
	AdminTransactionAddButtton,
	AdminTransactionCountTotal,
	AdminTransactionFilterDate,
	AdminOrderManagementReFilter,
	AdminUserManagementClearButton,
} from "./styled/StyledAdminTransaction";
import DialogAddTransaction from "./AdminAddTransactionDialg";
import { AdminOrderStatisticItemValue } from "../adminOrderManagement/styled/StyledAdminOrdermanagement";
import {
	AdminUserManagementFilterTitle,
	ButtonIsFilterVisible,
} from "../adminUserManagement/styled/AdminUserManagementStyle";

function formatNumberWithDot(number: any) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function AdminTransactionFilter(props: { countTotal: number; reload: () => void,accountant?: boolean }) {
	const {
		filterFromDate,
		filterToDate,
		doFilterFromDate,
		doFilterToDate,
		filterKeyword,
		doFilterKeyword,
		doClearFilter,
	} = useCommonListFunctions();
	const [openAddTransactionDialog, setOpenAddTransactionDialog] = useState(false);
	const [isFilterVisible, setIsFilterVisible] = useState(false);

	const formattedNumber = formatNumberWithDot(props.countTotal?.toFixed(0) || 0);

	const handleReload = () => {
		props.reload();
	};

	const handleClearFilter = () => {
		const filtersActive = filterFromDate || filterToDate || filterKeyword;

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
			<AdminTransactionFilterWrap className={isFilterVisible ? "visible" : ""}>
				<AdminTransactionFilterLeft>
				{ !props.accountant &&
					<div>
						Tổng tiền giao dịch:&nbsp;&nbsp;
						<AdminTransactionCountTotal>{formattedNumber} đ</AdminTransactionCountTotal>
					</div>
					}
					<AdminTransactionFilterDate>
						<AdminUserManagementFilterTitle>Lọc theo thời gian giao dịch</AdminUserManagementFilterTitle>
						<AdminOrderManagementFilterDate
							fromDate={(filterFromDate && filterFromDate) || null}
							toDate={(filterToDate && filterToDate) || null}
							doFilterFromDate={doFilterFromDate}
							doFilterToDate={doFilterToDate}
						/>
					</AdminTransactionFilterDate>
					<AdminProductrManagementFilterSearch>
						<AdminUserManagementFilterTitle>Lọc theo từ khóa</AdminUserManagementFilterTitle>
						<SearchPanel
							placeholder="Tìm kiếm"
							filterKeyword={filterKeyword}
							doFilterKeyword={doFilterKeyword}
						/>
					</AdminProductrManagementFilterSearch>
					<AdminOrderManagementReFilter>
						<AdminUserManagementFilterTitle>Hủy lọc</AdminUserManagementFilterTitle>
						<AdminUserManagementClearButton onClick={handleClearFilter}>
							<i
								className="fa fa-refresh"
								aria-hidden="true"></i>
						</AdminUserManagementClearButton>
					</AdminOrderManagementReFilter>
				</AdminTransactionFilterLeft>
				{/* { !props.accountant &&
				<AdminTransactionFilterRight>
					<AdminTransactionAddButtton
						onClick={() => {
							setOpenAddTransactionDialog(true);
						}}>
						Tạo giao dịch
					</AdminTransactionAddButtton>
				</AdminTransactionFilterRight>
				} */}
				<DialogAddTransaction
					openAddTransactionDialog={openAddTransactionDialog}
					setOpenAddTransactionDialog={setOpenAddTransactionDialog}
					reload={props.reload}
				/>
			</AdminTransactionFilterWrap>
		</div>
	);
}
