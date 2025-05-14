import axios from "axios";
import Blog, { ForeignContent } from "../models/Blog";
import { DefaultModel } from "../models/IModel";

import http from "./http";
import environments from "../environment";
import Chatbox, { Message } from "../models/Chatbox";
import { PERPAGE } from "../views/pages/orderManagement/hook/useGetListHook";

export const getAdminDetailChat = async (id: string): Promise<Chatbox> => {
	let { data } = await http.get(`/chat-box-detail-by-admin?orderId=${id}`);

	return new Chatbox().parse(data);
};

export const getAdminDetailMessage = async (page?: number, perPage?: number, id?: number) => {
    let params: any = {
        chatBoxId: id || 0,
        perPage: perPage || PERPAGE.Admin,
        page: page || 1,
    };
	let { data } = await http.get(`/chat-message-by-admin?${new URLSearchParams(params).toString()}`);

	return {data: DefaultModel.parseList<Message>(data?.docs, () => new Message()), count: data.total}
};