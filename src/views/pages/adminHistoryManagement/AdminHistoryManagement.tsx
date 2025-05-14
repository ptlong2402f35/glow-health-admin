import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { AdminTransactionFilter } from "./AdminTransactionManagementFilter";
import { AdminTransactionTable } from "./AdminTransactionTable";
import { getFilterTransactionList } from "./hook/useListTransaction";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";

export default function HistoryManagement(props:{accountant?: boolean}) {
	const { page, doChangePage } = useCommonListFunctions();
	const { listTransaction, reload, count, countTotal } = getFilterTransactionList({accountant:props.accountant});
	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý giao dịch</PageHeader>
				<AdminTransactionFilter
					countTotal={countTotal}
					reload={reload}
					accountant={props.accountant}
				/>
				<AdminTransactionTable listTransaction={listTransaction} />
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
