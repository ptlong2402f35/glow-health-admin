import React, { useEffect, useState } from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { getFilterTagsList } from "./hook/useListTags";
import { TagsManagementTable } from "./component/AdminTagsTable";
import AdminTagsManagementFilter from "./component/AdminTagsFilter";

export default function AdminTagsManagement() {
    const hash = typeof window !== "undefined" && window ? window.location?.hash : undefined;
    useEffect(() => {
            if (hash === undefined) return;
    
            const timeout = setTimeout(() => {
                const distance = document.getElementById(hash.replace("#", ""))?.offsetTop || 0;
                window.scrollTo({
                    top: distance,
                    left: 0,
                    behavior: "smooth",
                });
                clearTimeout(timeout);
            }, 300);
        }, [hash]);
    const { listTags, reload, count } = getFilterTagsList();
    const { page, doChangePage } = useCommonListFunctions();

    return (
        <PageWrap>
            <PageCenter>
                <PageHeader>Quản lý cơ sở Spa</PageHeader>
                <AdminTagsManagementFilter reload={reload} />
                <TagsManagementTable
                    listTags={listTags}
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
