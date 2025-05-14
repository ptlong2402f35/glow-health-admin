import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import { useGetListFakeReview } from "./hooks/useListFakeReview";
import AminFakeReviewFilter from "./component/AdminFakeReviewFilter";
import AdminFakeReviewTable from "./component/AdminFakeReviewTable";

export default function AdminFakeReviewManagement() {
	const { page, doChangePage } = useCommonListFunctions();
	const { reviews, reload, count } = useGetListFakeReview();
	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý Fake Review</PageHeader>
				<AminFakeReviewFilter reload={reload} />
				<AdminFakeReviewTable
					reviews={reviews}
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
