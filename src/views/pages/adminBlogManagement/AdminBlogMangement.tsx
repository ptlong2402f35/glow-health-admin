import React from "react";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import AdminBlogFilter from "./component/AdminBlogFilter";
import { getFilterBlogList } from "./hook/useGetBlog";
import { BlogManagementTable } from "./component/AdminBlogTable";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";

export default function AdminBlogManagement() {
	const { page, doChangePage, getPathChangePage } = useCommonListFunctions();
	const { listBlog, reload, count } = getFilterBlogList();

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý Blog</PageHeader>
				<AdminBlogFilter reload={reload} />
				<BlogManagementTable
					listBlog={listBlog}
					reload={reload}
				/>

				<PaginationWrapper>
					<NumberPaginationBox
						page={page || 1}
						count={count}
						per={PERPAGE.Admin}
						onChange={(val) => doChangePage?.(val)}
						linkGetter={(val) => (getPathChangePage ? getPathChangePage(val) : "")}
					/>
				</PaginationWrapper>
			</PageCenter>
		</PageWrap>
	);
}
