import React from "react";
import Order from "../../../models/Order";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { getListHookWrap, PERPAGE } from "./hook/useGetListHook";
import OrderManagementListPanel from "./OrderManagementListPanel";
import {
	OrderManagementTabInner,
	OrderManagementTabOuter,
	StyleNumberPaginationBox,
} from "./styled/StyledOrderManagement";
import { PageOrderManagementNoListBox } from "./NoOrderManagement";

export default function OrderManagementAllTab() {
	const { page, doChangePage } = useCommonListFunctions();
	const { order, count } = getListHookWrap();

	return (
		<OrderManagementTabOuter>
			{order.length == 0 ? (
				<PageOrderManagementNoListBox />
			) : (
				<OrderManagementTabInner>
					<OrderManagementListPanel orders={order} />

					<StyleNumberPaginationBox>
						<NumberPaginationBox
							page={page || 1}
							count={count}
							per={PERPAGE.PerPage}
							onChange={(val) => doChangePage?.(val)}
						/>
					</StyleNumberPaginationBox>
				</OrderManagementTabInner>
			)}
		</OrderManagementTabOuter>
	);
}
