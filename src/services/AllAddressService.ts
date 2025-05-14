import UserManagement from "../models/UserGlow";
import http from "./http";
import { DefaultModel } from "../models/IModel";
import { CommonListType } from "../views/hooks/useCommonList/useCommonListWrap";
import UserAddress from "../models/UserAddress";
import StaffAddressPath from "../models/StaffAddressPath";
import environments from "../environment";
import axios from "axios";

export interface ParamsUpdateUserAddressForm {
	customerName: string;
	phone: string;
	address: string;
	long: number;
	lat: number;
	provinceId: number;
	districtId: number;
	communeId: number;
}

export interface ParamsAddUserAddressForm {
	customerName: string;
	phone: string;
	address: string;
	long: number;
	lat: number;
	provinceId: number;
	districtId: number;
	communeId: number;
}

export const getAllUserAddress = async (
	userId: number
): Promise<{
	data: UserAddress[];
}> => {
	// let createdAt;
	// if (fromDate && toDate) {
	// 	createdAt = { between: [fromDate, toDate] };
	// }

	let [{ data }] = await Promise.all([http.get(`/admin-customer-address?userId=${userId}`)]);
	return {
		data: DefaultModel.parseList<UserAddress>(data, () => new UserAddress()),
	};
};
export async function updateUserAddress(
	addressId: number | null | undefined,
	customerName: string | null | undefined,
	phone: string | null | undefined,
	address: string | null | undefined,
	provinceId?: number | null | undefined,
	districtId?: number | null | undefined,
	communeId?: number | null | undefined,
	long?: number | null | undefined,
	lat?: number | null | undefined,
	note?: string | null | undefined
) {
	const params = {
		allowCustomerName: true,
		customerName: customerName ?? null,
		allowPhone: true,
		phone: phone ?? null,
		allowAddress: true,
		address: address ?? null,
		districtId: districtId ?? null,
		provinceId: provinceId ?? null,
		communeId: communeId ?? null,
		long: long ?? null,
		lat: lat ?? null,
		allowProvinceId: true,
		allowDistrictId: true,
		allowCommuneId: true,
		allowLong: true,
		allowLat: true,
		allowNote: true,
		note: note ?? "",
	};

	await http.patch(`/admin-customer-address/${addressId}`, params);
}
export async function deleteUserAddress(addressId: number | null | undefined) {
	const params = {
		allowActive: true,
		active: false,
	};

	await http.patch(`/admin-customer-address/${addressId}`, params);
}

export async function defaultUserAddress(addressId: number | null | undefined) {
	await http.patch(`/admin-customer-address/${addressId}/set-default`);
}

export async function addUserAddress(
	userId: number | null | undefined,
	customerName: string | null | undefined,
	phone: string | null | undefined,
	address: string | null | undefined,
	districtId?: number | null | undefined,
	communeId?: number | null | undefined,
	provinceId?: number | null | undefined,
	long?: number | null | undefined,
	lat?: number | null | undefined
) {
	const params = {
		name: customerName ?? null,
		phone: phone ?? null,
		address: address ?? null,
		districtId: districtId ?? null,
		provinceId: provinceId ?? null,
		communeId: communeId ?? null,
		long: long ?? null,
		lat: lat ?? null,
	};

	await http.post(`/admin-customer-address?userId=${userId}`, params);
}

export const UrlAddress = async (
	url?: any,
	lang?: string
): Promise<{
	data: StaffAddressPath[];
	backUrl: string;
	locationType: string;
	count: number;
}> => {
	const val: any = {
		urlData: url,
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(`/location-list/0/for-staff-service?${new URLSearchParams(val).toString()}`, {
		headers,
	});
	return {
		data: new StaffAddressPath().parseList(data.data),
		locationType: data.locationType,
		backUrl: data.backUrl,
		count: 0,
	};
};

export const UrlAddressSSR = async (url?: any, apartment?: string, lang?: string) => {
	const val: any = {
		urlData: url,
		apartmentUrl: apartment,
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		// (environments.localApiRoot || environments.apiRoot) + `/location-list?${new URLSearchParams(val).toString()}`,
		(environments.localApiRoot || environments.apiRoot) +
			`/location-list/0/for-staff-service?${new URLSearchParams(val).toString()}`,

		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	return {
		dataUrlAddress: new StaffAddressPath().parseList(data.data),
		dataLocationType: data.locationType,
		dataUrl: data.backUrl,
		rawUrlAddress: data,
	};
};

export const offlineUrlAddress = async (
	raw: any
): Promise<{
	data: StaffAddressPath[];
	backUrl: string;
	locationType: string;
	count: number;
}> => {
	let data = DefaultModel.parseList<StaffAddressPath>(raw.data.data, () => new StaffAddressPath());
	let locationType = raw.data.locationType;
	let backUrl = raw.data.backUrl;
	let count = 0;

	return {
		data: data,
		locationType: locationType,
		backUrl: backUrl,
		count: count,
	};
};
