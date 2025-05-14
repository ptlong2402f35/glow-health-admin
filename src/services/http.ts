import axios from "axios";
import environments from "../environment";
import { ApiResultErrorException } from "../utils/constants";
import { proxyStorage } from "../utils/proxyStorage";

const http = axios.create({
	baseURL: environments.apiRoot || "",
	headers: {},
});

http.interceptors.request.use(async (config) => {
	let accessToken = proxyStorage()?.getItem("token");
	let headers: any = config.headers;
	if (headers && !headers?.["Authorization"]) {
		headers["Authorization"] = accessToken ? `Bearer ${accessToken}` : "";
	}
	return config;
});

http.interceptors.response.use(async (resp) => {
	if (resp.data && resp.data.isError) {
		throw `${ApiResultErrorException}, message: ${resp.data?.errorMessage || "none"}`;
	}
	return resp;
});

export default http;
