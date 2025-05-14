import { useState, useEffect } from "react";
import { getAdminDetailMessage } from "../../../../services/ChatBox";
import Chatbox, { Message } from "../../../../models/Chatbox";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";

export default function useAdminGetDetailMess(props?: CommonListType, id?: number) {
    const [message, setMessage] = useState<Message[]>([]);
    const [count, setCount] = useState<number>(0);
    const loadListAllUser = async (inPage: number,) => {
        try {
            var data = await getAdminDetailMessage(inPage,PERPAGE.Admin,id || 0);
            setMessage(data.data);
            setCount(data.count)
        } catch {
            setMessage([]);
        }
    };
    const reload = () => {
        loadListAllUser(props?.page||0);
    };
    useEffect(() => {
        if (id) {
            reload();
        }
    }, [id, props?.page||0]);
    return {
        message,
        reload,
        count
    };
}

export const getAdminDetailMess = (prop:{id: number}) => {
    const hookResult = (props: CommonListType) => useAdminGetDetailMess(props, prop.id);
    return useCommonListWrap(PERPAGE.Admin, hookResult);
};