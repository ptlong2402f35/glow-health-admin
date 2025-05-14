import React from "react";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { AdminTransactionFilter } from "../adminHistoryManagement/AdminTransactionManagementFilter";
import { ReferStatsFilter } from "./ReferStatsFilter";
import ReferStatsTable from "./ReferStatsTable";
// import useListRefer from "./hooks/useListRefer";
import useLoadingDialog from "../../hooks/useLoadingDialog";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";

const PerPage = 50;

export default function ReferStats() {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { page, doChangePage, filterFromDate, filterToDate } = useCommonListFunctions();

	// const { count, pages, records, reload } = useListRefer({
	// 	page: page,
	// 	perPage: PerPage,
	// 	filterFromDate: filterFromDate,
	// 	filterToDate: filterToDate,
	// 	onBeginLoad: openLoadingDialog,
	// 	onEndLoad: closeLoadingDialog,
	// });

	return (
		<PageWrap>
			{/* <PageCenter>
				<PageHeader>Thông tin Affiliate</PageHeader>
				<ReferStatsFilter />
				<ReferStatsTable
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
			</PageCenter> */}
		</PageWrap>
	);
}
