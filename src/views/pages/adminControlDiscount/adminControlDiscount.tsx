import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import { getFilterDiscountList } from "./hook/useListDiscount";
import { AdminDiscountTable } from "./component/AdminDiscountTable";
import useExportListCollectAll from "./hook/useExportListDiscountAll";
import { AdminDiscountFilter } from "./component/AdminDiscountFilter";

export default function DiscountManagement() {
    const { page, doChangePage } = useCommonListFunctions();
    const { listDiscount, reload, count, countPages } = getFilterDiscountList();
    const {} = useExportListCollectAll({countPages:countPages})
    return (
        <PageWrap>
            <PageCenter>
                <PageHeader>Quản lý đối soát chiết khấu</PageHeader>
                <AdminDiscountFilter reload={reload} countPages={countPages}/>
                <AdminDiscountTable listDiscount={listDiscount} />
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
