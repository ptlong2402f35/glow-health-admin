import * as React from "react";
import { useEffect,createContext, useState } from "react";
import { PageCenter, PageWrap, PageHeader } from "../../controls/components/form/Page";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { getFilterStaffList } from "./hook/useListStaff";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import AdminUserManagementFilter from "../adminUserManagement/component/AdminUserManagementFilter";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import { AdminPartnerManagementTable } from "./component/AdminPartnerManagementTable";
import AdminPartnerManagementFilter from "./component/AdminPartnerManagementFilter";
import AdminParnerManagementCount from "./component/AdminParnerManagementConnt";
import { PageCenterInner } from "./styled/StyleParner";

// export const AdminCheckBox = (props: {
// 	isSelected: (item: Order) => boolean;
// 	item: Order;
// 	onSelected: (item: Order, checked: boolean) => void;
// }) => {
// 	return (
// 		<AdminUserManagementCheckBoxWrap>
// 			<span></span>
// 			<AdminUserManagementCheckBoxIcon $RebateActive={props.isSelected(props.item)}></AdminUserManagementCheckBoxIcon>
// 			<input
// 				type={"checkbox"}
// 				checked={props.isSelected(props.item)}
// 				onChange={(e) => props.onSelected(props.item, e.target.checked)}></input>
// 		</AdminUserManagementCheckBoxWrap>
// 	);
// };
export const AdminPartnerManagementContext = createContext<{
    isHR?: boolean;
} | null>(null);
export default function AdminPartnerManagement(props: { store?: boolean, isHR?: boolean }) {
	const { listStaff, count, reload } = getFilterStaffList({ branch: props?.store, isHR: props?.isHR });
	const { page, filterKeyword, doChangePage } = useCommonListFunctions();
	const [identifyMode, setIdentifyMode] = useState(false);

	return (
		<AdminPartnerManagementContext.Provider
			value={{
				isHR: props.isHR,
				
			}}>
		<PageWrap>
			<PageCenter>
				<PageCenterInner>
					<PageHeader>Quản lý {props.store ? "Chi nhánh" : "Kỹ Thuật Viên tại nhà"}</PageHeader>

					<AdminPartnerManagementFilter
						reload={reload}
						identifyMode={identifyMode}
						setIdentifyMode={setIdentifyMode}
					/>
					<PaginationWrapper>
						<NumberPaginationBox
							page={page || 1}
							count={count}
							per={PERPAGE.Admin}
							onChange={(val) => doChangePage?.(val)}
						/>
					</PaginationWrapper>
					<AdminParnerManagementCount count={count} />
					<AdminPartnerManagementTable
						listStaff={listStaff}
						count={count}
						reload={reload}
						identifyMode={identifyMode}
					/>
					<PaginationWrapper>
						<NumberPaginationBox
							page={page || 1}
							count={count}
							per={PERPAGE.Admin}
							onChange={(val) => doChangePage?.(val)}
						/>
					</PaginationWrapper>
				</PageCenterInner>
			</PageCenter>
		</PageWrap>
		</AdminPartnerManagementContext.Provider>
	);
}
