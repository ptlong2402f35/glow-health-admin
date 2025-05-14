import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import StoreService from "../../../../services/StoreService";
import Store from "../../../../models/Store";
import CustomLinkService from "../../../../services/CustomLinkService";
import MetaLoader from "../../../../models/MetaLoader";

export default function useListCustomLink(props?: CommonListType) {
    const [listLink, setListLink] = useState<MetaLoader[]>([]);
    const [count, setCount] = useState(0);
    const loadListLink = async (inPage: number, inPerPage: number, name:string,link: string, active: string) => {
        props?.onBeginLoad?.();
        try {
            var res = await CustomLinkService.getListCustomLink(inPage, inPerPage, name,link, active);
            const data = res.data;
            setListLink(data);
            setCount(res.count);
        } catch {
            setListLink([]);
        } finally {
            props?.onEndLoad?.();
        }
    };
    const reload = () => {
        loadListLink(props?.page || 1, props?.perPage || 0,  props?.filterKeyword || "", props?.filterIdentify|| "", props?.filterStates || "");
    };
    useEffect(() => {
        reload();
    }, [props?.page, props?.perPage, props?.filterKeyword, props?.filterIdentify, props?.filterStates]);
    return {
        listLink,
        reload,
        count,
    };
}

export const getListCustomLink = () => {
    const PerPage = PERPAGE.Admin;
    const hookResult = (props: CommonListType) => useListCustomLink(props);
    return useCommonListWrap(PERPAGE.Admin, hookResult);
};
