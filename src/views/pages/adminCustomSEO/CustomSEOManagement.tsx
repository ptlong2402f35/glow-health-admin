import React, { useState } from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { getListCustomLink } from "./hook/useGetCustomLink";
import { CustomSEOManagementTable } from "./component/CustomSEOTable";
import AdminCustomManagementFilter from "./component/AdminCustomManagementFilter";

export default function AdminCustomSEOManagement() {
    const { listLink, reload, count } = getListCustomLink();
    const { page, doChangePage } = useCommonListFunctions();

    return (
        <PageWrap>
            <PageCenter>
                <PageHeader>Quản lý Custom Link</PageHeader>
                <AdminCustomManagementFilter reload={reload} />
                <CustomSEOManagementTable
                    listLink={listLink}
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
