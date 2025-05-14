import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import Collect from "../../../../models/Collect";
import CollectService from "../../../../services/CollectService";

export default function useExportListCollectAll(props:{countPages:number}) {
    const loadListAllCollect = async (
        fromDate?: Date |null| undefined,
        toDate?: Date |null| undefined,
    ) => {
        let mergedData: Collect[] = [];
        try {

            const startOfDayFromDate = fromDate ? new Date(fromDate.setHours(0, 0, 0, 0)) : undefined;
            const endOfDayToDate = toDate ? new Date(toDate.setHours(23, 59, 59, 999)) : new Date();
            const maxPages = Math.min(props.countPages, 200);
            for (let i = 1; i <= maxPages; i++) {
                const res = await CollectService.getListCollect(
                    i,
                    PERPAGE.Admin,
                    startOfDayFromDate,
                    endOfDayToDate
                );
                mergedData = [...mergedData, ...res.data];
            }
            return mergedData;
        } catch {
        } finally {
        }
    };
    return {
        loadListAllCollect
    };
}
