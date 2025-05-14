import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { getFilterPromotionsList } from "./hook/useGetPromotions";
import { PromotionManagementTable } from "./component/PromotionTable";
import PromotionManagementFilter from "./component/PromotionFilter";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";

export default function PromotionsManagement() {
	const { listPromotions, reload, count } = getFilterPromotionsList();
	const { page, doChangePage } = useCommonListFunctions();

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý chương trình khuyến mãi</PageHeader>
				<PromotionManagementFilter reload={reload} />
				<PromotionManagementTable
					listPromotions={listPromotions}
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
