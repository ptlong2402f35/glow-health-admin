import React from "react";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { AdminTransactionFilter } from "../adminHistoryManagement/AdminTransactionManagementFilter";
import useLoadingDialog from "../../hooks/useLoadingDialog";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import useListOrderStats from "./hooks/useListOrderStats";
import OrderStatsTable from "./OrderStatsTable";
import { OrderStatsFilter } from "./OrderStatsFilter";

const PerPage = 50;

export default function OrderStats() {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { page, doChangePage, filterFromDate, filterToDate } = useCommonListFunctions();

	const { count, pages, records, reload } = useListOrderStats({
		page: page,
		perPage: PerPage,
		filterFromDate: filterFromDate,
		filterToDate: filterToDate,
		onBeginLoad: openLoadingDialog,
		onEndLoad: closeLoadingDialog,
	});

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Hóa đơn doanh thu hàng ngày</PageHeader>
				<OrderStatsFilter />
				<OrderStatsTable
					records={records}
					page={page || 1}
					perPage={PerPage}
				/>

				<PaginationWrapper>
					<NumberPaginationBox
						page={page || 1}
						count={count}
						per={PerPage}
						onChange={(val) => doChangePage?.(val)}
					/>
				</PaginationWrapper>
			</PageCenter>
		</PageWrap>
	);
}
