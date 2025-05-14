import * as React from "react";
import { useEffect,createContext, useState } from "react";
import { PageCenter, PageWrap, PageHeader } from "../../controls/components/form/Page";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PageCenterInner, PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import AdminUserManagementFilter from "../adminUserManagement/component/AdminUserManagementFilter";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import { getFilterStaffRequestList } from "./hook/ListStaffReview";
import { AdminPartnerRequestTable } from "./component/AdminPartnerRequestTable";


export const AdminPartnerManagementContext = createContext<{
    isHR?: boolean;
} | null>(null);
export default function AdminReviewUpdateProfileManagement(props: { store?: boolean, isHR?: boolean }) {
    const { listStaff, count, reload } = getFilterStaffRequestList({ branch: props?.store, isHR: props?.isHR });
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
                    <PageHeader>Quản lý cập nhật Profile</PageHeader>

                    {/* <AdminPartnerManagementFilter
                        reload={reload}
                        identifyMode={identifyMode}
                        setIdentifyMode={setIdentifyMode}
                    /> */}
                    <PaginationWrapper>
                        <NumberPaginationBox
                            page={page || 1}
                            count={count}
                            per={PERPAGE.Admin}
                            onChange={(val) => doChangePage?.(val)}
                        />
                    </PaginationWrapper>
                    <AdminPartnerRequestTable
                        listStaff={listStaff}
                        count={count}
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
                </PageCenterInner>
            </PageCenter>
        </PageWrap>
        </AdminPartnerManagementContext.Provider>
    );
}
