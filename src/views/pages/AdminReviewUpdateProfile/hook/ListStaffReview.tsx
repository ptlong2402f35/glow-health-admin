import { useState, useEffect, useRef } from "react";
import { getAllUser } from "../../../../services/AllUserService";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import UserManagement from "../../../../models/UserGlow";
import Staff, { StaffRequest } from "../../../../models/Staff";
import { getAllStaff, getStaffRequest } from "../../../../services/AllStaffService";
import { getAllStaffHR } from "../../../../services/HRService";

export default function useListStaffReview(branch?: boolean,isHR?: boolean, props?: CommonListType) {
    const [listStaff, setListStaff] = useState<StaffRequest[]>([]);
    const [count, setCount] = useState(0);
    const loadListAllUser = async (
        inPage: number,
        inPerPage: number,
        type?: string,
        status?: string | undefined,
    ) => {
        props?.onBeginLoad?.();
        try {
            var data = isHR ? await getStaffRequest
            (
                    inPage,
                    inPerPage,
                    type,
                    status,
                ): 
                await getStaffRequest(
                inPage,
                inPerPage,
                type,
                status,
            );
            setListStaff(data.data);
            setCount(data.count);
        } catch {
            setListStaff([]);
            setCount(0);
        } finally {
            props?.onEndLoad?.();
        }
    };
    const reload = () => {
        loadListAllUser(
            props?.page || 1,
            props?.perPage || 0,
            props?.filterKeyword || undefined,
            props?.filterStates || "",
        );
    };
    useEffect(() => {
        reload();
    }, [
        props?.page,
        props?.filterKeyword,
        props?.filterStates,
    ]);
    return {
        listStaff,
        count,
        reload,
    };
}

export const getFilterStaffRequestList = (prop: { branch?: boolean,isHR?: boolean }) => {
    const PerPage = PERPAGE.Admin;
    const hookResult = (props: CommonListType) => useListStaffReview(prop?.branch, prop?.isHR, props);
    return useCommonListWrap(PERPAGE.Admin, hookResult);
};
