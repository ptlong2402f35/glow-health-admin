import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { getFilterVoucherList } from "./hook/useGetListVoucher";
import { VoucherManagementTable } from "./component/VoucherTable";
import AdminVoucherManagementFilter from "./component/VoucherFilter";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";

export default function AdminVoucherManagement() {
	const { page, doChangePage } = useCommonListFunctions();
	const { listVoucher, count, reload } = getFilterVoucherList();
	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý Voucher</PageHeader>
				<AdminVoucherManagementFilter reload={reload} />
				<VoucherManagementTable
					listVoucher={listVoucher}
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
