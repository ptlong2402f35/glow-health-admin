import React from "react";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE, getListHookWrap } from "./hook/useGetListHook";
import {
	OrderManagementTabInner,
	OrderManagementTabOuter,
	StyleFilterPerPage,
	StyleFilterPerPageTitle,
	StyleFilterPerPageTitleRes,
	StyleFilterPerPageWrap,
	StyleNumberPaginationBox,
} from "./styled/StyledOrderManagement";
import { PageOrderManagementNoListBox } from "./NoOrderManagement";
import OptionNumberPaginationBox from "../../controls/components/optionNumberPagination/optionNumberPagination";
import useFilterPerPage, { perPageList } from "./hook/useFilterPerPage";
import { SelectOptionType } from "react-select";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import OrderManagementListPanelv2 from "./OrderManagementListPanelv2";

export default function OrderManagementList() {
	const { order, count } = getListHookWrap();
	const { doChangeFilterPerPage } = useCommonListFunctions();
	const { page, doChangePage } = useCommonListFunctions();
	const handleFilter = (val: SelectOptionType, filter?: (val: any) => void, set?: (val: any) => void) => {
		filter?.(val.value);
		set?.(val);
	};
	const { perPageSelected, setPerPageSelected } = useFilterPerPage();
	return (
		<OrderManagementTabOuter>
			{order.length == 0 ? (
				<PageOrderManagementNoListBox />
			) : (
				<OrderManagementTabInner>
					<OrderManagementListPanelv2 orders={order} />
					<StyleFilterPerPageWrap>
						{/* <StyleFilterPerPage>
							<StyleFilterPerPageTitle>Hiển thị</StyleFilterPerPageTitle>
							<StyleFilterPerPageTitleRes>Show</StyleFilterPerPageTitleRes>
							<OptionNumberPaginationBox
								isSearchable={false}
								options={perPageList}
								value={perPageSelected}
								setValue={(val) => handleFilter(val, doChangeFilterPerPage, setPerPageSelected)}
							/>
						</StyleFilterPerPage> */}
						<StyleNumberPaginationBox>
							<NumberPaginationBox
								page={page || 1}
								count={count}
								per={PERPAGE.PerPage50}
								onChange={(val) => doChangePage?.(val)}
							/>
						</StyleNumberPaginationBox>
					</StyleFilterPerPageWrap>
				</OrderManagementTabInner>
			)}
		</OrderManagementTabOuter>
	);
}
