import UserManagement from "../models/UserGlow";
import http from "./http";
import { DefaultModel } from "../models/IModel";
import { CommonListType } from "../views/hooks/useCommonList/useCommonListWrap";
import FakeReview from "../models/FakeReview";

export const getAllUser = async (
	inPage: number,
	inPerPage: number,
	keyWord?: string,
	status?: number,
	fromDate?: Date,
	toDate?: Date,
	isBanned?: string,
	store?: string,
	nameKTV?: string,
	lunisolar?: string,
	spam?: string,
	punish?: string
): Promise<{
	data: UserManagement[];
	count: number;
}> => {
	// let createdAt;
	// if (fromDate && toDate) {
	// 	createdAt = { between: [fromDate, toDate] };
	// }
	let isSpam: boolean | undefined;
	let useSpam: boolean | undefined;
	let isPunish: boolean | undefined;
	let usePunish: boolean | undefined;

	if (spam === "1") {
		isSpam = true;
		useSpam = true;
	} else if (spam === "2") {
		isSpam = false;
		useSpam = true;
	} else {
		useSpam = false;
	}

	if (punish === "1") {
		isPunish = true;
		usePunish = true;
	} else if (punish === "2") {
		isPunish = false;
		usePunish = true;
	} else {
		usePunish = false;
	}

	let [{ data }] = await Promise.all([
		http.get(
			`/user/admin-get-user?perPage=${inPerPage}&page=${inPage || 1}&roleId=${status || ""}&search=${keyWord || ""}&isBanned=${
				isBanned || ""
			}&useBanned=${isBanned ? true : false}&storeId=${store || ""}&staffName=${nameKTV || ""}&balanceDegree=${
				lunisolar || ""
			}&isSpam=${isSpam || ""}&useSpam=${useSpam}&isPunished=${isPunish || ""}&usePunished=${usePunish}`
		),
	]);
	return {
		data: DefaultModel.parseList<UserManagement>(data.docs, () => new UserManagement()),
		count: data.total || 0,
	};
};

export const getFeedback = async (
	inPage: number,
	id?: number
): Promise<{
	data: FakeReview[];
	count: number;
}> => {
	// let createdAt;
	// if (fromDate && toDate) {
	// 	createdAt = { between: [fromDate, toDate] };
	// }

	let [{ data }] = await Promise.all([
		http.get(`/admin-feedbacks?perPage=50&page=${inPage || 1}&userId=${id || ""}`),
	]);
	return {
		data: DefaultModel.parseList<FakeReview>(data.docs, () => new FakeReview()),
		count: data.total || 0,
	};
};
