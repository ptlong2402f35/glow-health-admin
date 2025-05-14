import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { ProductManagementTable } from "./component/ProductTable";
import AdminProductrManagementFilter from "./component/ProductFilter";
import { getFilterProductList } from "./hook/useGetProductList";
import useListServiceGrounpAll from "./hook/useServiceGroupAll";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";

export default function ProductManagement() {
	const { listProduct, reload, count } = getFilterProductList();
	const { page, doChangePage } = useCommonListFunctions();

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý sản phẩm - dịch vụ</PageHeader>
				<AdminProductrManagementFilter reload={reload} />
				<PaginationWrapper>
					<NumberPaginationBox
						page={page || 1}
						count={count}
						per={PERPAGE.Admin}
						onChange={(val) => doChangePage?.(val)}
					/>
				</PaginationWrapper>
				<ProductManagementTable
					listProduct={listProduct}
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
