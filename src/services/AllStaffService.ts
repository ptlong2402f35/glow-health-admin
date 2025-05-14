import http from "./http";
import { DefaultModel } from "../models/IModel";
import Staff, { StaffRequest } from "../models/Staff";
import StaffDetail from "../models/StaffDetail";
import StaffAddressPath from "../models/StaffAddressPath";

export const getAllStaff = async (
	inPage: number,
	inPerPage: number,
	keyWord?: string,
	status?: string,
	phone?: string,
	provice?: number | null,
	storeId?: number | null,
	online?: string,
	verification?: string,
	branch?: boolean,
	identify?: string,
	certificate?: string,
	care?: string,
	punish?: string
): Promise<{
	data: Staff[];
	count: number;
}> => {
	// let createdAt;
	// if (fromDate && toDate) {
	// 	createdAt = { between: [fromDate, toDate] };
	// }
	let isPunish: boolean | undefined;
	let usePunish: boolean | undefined;

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
			`/staff?perPage=${inPerPage}&page=${inPage || 1}&search=${keyWord || ""}&active=true&phone=${
				phone || ""
			}&provinceId=${provice || ""}&storeId=${storeId || ""}&online=${online || ""}&validationStatus=${
				verification || ""
			}&types=${branch ? "3" : "1;2"}&hasIdentifyCard=${identify || ""}&hasCertificate=${
				certificate || ""
			}&glowCareStatus=${care}
			&isPunished=${isPunish || ""}&usePunished=${usePunish}`
		),
	]);
	return {
		data: DefaultModel.parseList<Staff>(data.docs, () => new Staff()),
		count: data.total || 0,
	};
};

export const getStaffDetail = async (staffId: number): Promise<StaffDetail> => {
	// let createdAt;
	// if (fromDate && toDate) {
	// 	createdAt = { between: [fromDate, toDate] };
	// }
	// await new Promise((resolve) => setTimeout(resolve, 5000));
	let { data } = await http.get(`/staff-by-admin/${staffId}`);

	return new StaffDetail().parse(data);
};

export const getProvince = async (search?: string): Promise<{ data: StaffAddressPath[] }> => {
	let { data } = await http.get(`/province/?search=${search || ""}&perPage=100`);

	return { data: DefaultModel.parseList<StaffAddressPath>(data.docs, () => new StaffAddressPath()) };
};

export const getDistrict = async (provinceId: number | null | undefined): Promise<{ data: StaffAddressPath[] }> => {
	let { data } = await http.get(`/district/?perPage=100&provinceId=${provinceId}`);
	return { data: DefaultModel.parseList<StaffAddressPath>(data.docs, () => new StaffAddressPath()) };
};

export const getCommune = async (districtId: number): Promise<{ data: StaffAddressPath[] }> => {
	let { data } = await http.get(`/commune/?perPage=100&districtId=${districtId}`);

	return { data: DefaultModel.parseList<StaffAddressPath>(data.docs, () => new StaffAddressPath()) };
};

export async function punishStaff(
	id: number | null | undefined,
	punishTyppe: boolean | null | undefined,
	duration: number
) {
	const params = {
		punish: punishTyppe,
		duration: duration,
	};

	await http.post(`/punish-staff/${id}`, params);
}

export const getStaffRequest = async (
	inPage: number,
	inPerPage: number,
	type?: string,
	status?: string,
	
): Promise<{
	data: StaffRequest[];
	count: number;
	type: number;
	status: number;
}> => {


	let [{ data }] = await Promise.all([
		http.get(
			`/service-request?perPage=${inPerPage}&page=${inPage || 1}&type=${type || ""}&status=${status || ""}`
		),
	]);
	return {
		data: DefaultModel.parseList<StaffRequest>(data.docs, () => new StaffRequest()),
		count: data.total || 0,
		type: data.docs.type || 0,
		status: data.docs.status || 0,
	};
};