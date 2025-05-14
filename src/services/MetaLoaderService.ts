import axios from "axios";
import environments from "../environment";
import { DefaultModel } from "../models/IModel";
import Order, { OrderStatus } from "../models/Order";
import http from "./http";
import MetaLoader from "../models/MetaLoader";

export default async function getCustomSEOConfig(props: {}) {
	const params: any = {};
	const { data } = await http.get(`/custom-seo-config?${new URLSearchParams(params).toString()}`);
	return new MetaLoader().parseList(data);
}
