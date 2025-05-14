import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import { getFilterCollectList } from "./hook/useListCollect";
import { AdminCollectTable } from "./component/AdminCollectTable";
import { AdminCollectFilter } from "./component/AdminCollectFilter";
import useExportListCollectAll from "./hook/useExportListCollectAll";

export default function CollectFeeManagement() {
    const { page, doChangePage } = useCommonListFunctions();
    const { listCollect, reload, count, countPages } = getFilterCollectList();
    const {} = useExportListCollectAll({countPages:countPages})
    return (
        <PageWrap>
            <PageCenter>
                <PageHeader>Quản lý đối soát thu phí</PageHeader>
                <AdminCollectFilter reload={reload} countPages={countPages}/>
                <AdminCollectTable listCollect={listCollect} />
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
