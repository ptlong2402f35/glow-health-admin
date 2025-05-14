import React, { useState } from "react";
import { getFilterStoreList } from "./hook/useListStore";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import AdminStoreManagementFilter from "./component/AdminStoreFilter";
import { StoreManagementTable } from "./component/AdminStoreTable";

export default function AdminStoreManagement() {
	const { listStore, reload, count } = getFilterStoreList();
	const { page, doChangePage } = useCommonListFunctions();

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý cơ sở Spa</PageHeader>
				<AdminStoreManagementFilter reload={reload} />
				<StoreManagementTable
					listStore={listStore}
					reload={reload}
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
