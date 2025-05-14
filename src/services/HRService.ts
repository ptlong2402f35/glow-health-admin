import { DefaultModel } from "../models/IModel";
import Staff from "../models/Staff";
import StaffDetail, { WorkTimeType } from "../models/StaffDetail";
import Store from "../models/Store";
import User from "../models/User";
import { DescriptionLang } from "../views/pages/adminPartnerManagement/DescriptionLang/DescriptionLangDialog";
import http from "./http";



export default class HRService {
	public static async login(account: string, password: string): Promise<User> {
		const { data } = await http.post(`/login-human-resource`, {
			email_username: account,
			password: password,
		});

		return new User().parse(data);
	}

	public static async validate(token: string): Promise<void> {
		await http.get(`/me-human-resource`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
	public static async getListStoreOptionHR(
		inPage?: number,
		inPerPage?: number,
		searchName?: string
	): Promise<{
		data: Store[];
		count: number;
	}> {
		let params: any = {
			name: searchName || "",
		};
		let results = await Promise.all([
			http.get(
				`/store-option-by-hr?perPage=${inPerPage || 20}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`
			),
		]);
		return {
			data: DefaultModel.parseList<Store>(results[0].data?.docs, () => new Store()),
			count: results[0].data?.total,
		};
	}
}
export const StaffUpdateStatusHR = async (id: number) => {
	let { data } = await http.put(`/staff-status-by-hr/${id}`);

	return data;
};


export const getAllStaffHR = async (
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
			`/staff-by-hr?perPage=${inPerPage}&page=${inPage || 1}&search=${keyWord || ""}&active=true&phone=${
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

export const StaffBackToWorkHR = async (id: number) => {
	let { data } = await http.put(`/adstaff-by-hr`, {
		id: id,
	});

	return data;
};

export const VerificationStaffServiceHR = async (staffId: number, validationStatus: number) => {
	let { data } = await http.patch(`/staff-validation-by-hr/${staffId}`, {
		validationStatus: validationStatus,
	});

	return data;
};

export const StaffUpdateBusyHR = async (id: number, busy: number) => {
	let { data } = await http.put(`/staff-busy-by-hr/${id}`, { busy: busy });

	return data;
};
export const sendAdsHR = async (id: number) => {
	let { data } = await http.post(`/ads-staff-by-hr/${id}`);

	return data;
};
export const useGlowCareHR = async (id: number, status: number) => {
	let { data } = await http.post(`/apply-glow-care-by-hr/${id}`, {
		glowCareStatus: status,
	});

	return data;
};
export async function punishStaffHR(
	id: number | null | undefined,
	punishTyppe: boolean | null | undefined,
	duration: number
) {
	const params = {
		punish: punishTyppe,
		duration: duration,
	};

	await http.post(`/punish-staff-by-hr/${id}`, params);
}

export const updateDescriptionLangStaffHR = async (id?: number | null, description?: DescriptionLang[] | null) => {
	let { data } = await http.patch(`/staff-description-by-hr/${id}`, {
		allowUpdateDefault: true,
		data: description,
	});

	return data;
};

export const getStaffDetailHR = async (staffId: number): Promise<StaffDetail> => {
	// let createdAt;
	// if (fromDate && toDate) {
	// 	createdAt = { between: [fromDate, toDate] };
	// }
	// await new Promise((resolve) => setTimeout(resolve, 5000));
	let { data } = await http.get(`/staff-by-hr/${staffId}`);

	return new StaffDetail().parse(data);
};


export async function updatePartnerInfoHR(
	birthDay: string | null | undefined,
	name: string | null | undefined,
	gender: Boolean | undefined,
	userId: number | null | undefined,
	id: number | null | undefined,
	address: string | null | undefined,
	phone: string | null | undefined,
	placeIssue: string | null | undefined,
	identifyCard: string | null | undefined,
	phoneFamily: string | null | undefined,
	description: string | null | undefined,
	provinceId: number | null | undefined,
	districtId: number | null | undefined,
	communeId: number | null | undefined,
	urlData: string | null | undefined,
	avatarMuti: any | null | undefined,
	long: number | null | undefined,
	lat: number | null | undefined,
	storeId: number | null | undefined,
	workTime?: WorkTimeType[] | null | undefined,
	staffType?: number | null | undefined,
	avatarLinkSelf?: string | null,
	pathList?: any | null,
	pathListCertificate?: any | null,
	linkWebsite?: string,
	linkFacebook?: string,
	linkYoutube?: string,
	linkTiktok?: string,
	linkInstagram?: string,
	linkYoutubeView?: string[],
	identifyName?: string,
	identifyBirthday?: string,
	identifyAddress?: string,
	dateOfIssueIdentify?: string,
	placeOfIssueIdentify?: string,
) {
	const params = {
		birthDay: birthDay ?? null,
		name: name ?? null,
		gender: gender ?? null,
		userId: userId ?? null,
		id: id ?? null,
		address: address ?? null,
		phone: phone ?? null,
		placeIssue: placeIssue ?? null,
		allowIdentifyCard: true,
		identifyCard: identifyCard,
		// indetifyNumber: identifyCard ?? null,
		phoneFamily: phoneFamily ?? null,
		description: description ?? null,
		districtId: districtId ?? null,
		provinceId: provinceId ?? null,
		communeId: communeId ?? null,
		urlImage: urlData ?? null,
		images: avatarMuti ?? null,
		long: long ?? null,
		lat: lat ?? null,
		storeId: storeId ?? null,
		allowStoreId: true,
		workTime,
		...(staffType && {
			allowStoreStation: true,
			storeStaffType: staffType,
		}),
		allowSelfImages: true,
		selfImages: avatarLinkSelf,
		allowIdentifyImages: true,
		identifyImages: pathList,
		allowCertificateImages: true,
		certificateImages: pathListCertificate,
		allowSocialMedia: true,
		socialMedia: {
			facebook: linkFacebook,
			youtube: linkYoutube,
			tiktok: linkTiktok,
			instagram: linkInstagram,
			website: linkWebsite,
		},
		allowPromotionalVideos: true,
		promotionalVideos:linkYoutubeView,
		allowIdentifyName: true,
		identifyName: identifyName,
		// allowIdentifyBirthday: identifyBirthday ?? false,
		// identifyBirthday: identifyBirthday,
		allowDateOfIssueIdentify: dateOfIssueIdentify ? true : false,
		dateOfIssueIdentify: dateOfIssueIdentify,
		allowPlaceOfIssueIdentify: true,
		placeOfIssueIdentify: placeOfIssueIdentify,
		allowIdentifyAddress: true,
		identifyAddress: identifyAddress,
	};

	await http.put(`/staff-by-hr`, params);
}

export const UpdateServicePriceHR = async (
	staffId: number,
	staffServiceId: number,
	prices: { unit: string; price: number; itemId?: number }[],
	nameService: string,
	descriptionService: string
) => {
	const simplifiedPrices = prices.map((item) => ({ unit: item.unit, price: item.price, itemId: item.itemId }));
	let { data } = await http.put(`/update-staff-price-by-hr`, {
		staffId: staffId,
		staffServiceId: staffServiceId,
		prices: simplifiedPrices,
		name: nameService,
		allowName: true,
		allowDescription: true,
		description: descriptionService,
	});

	return data;
};

export const UpdateStaffServiceHR = async (
	staffId: number,
	staffServiceId: string,
	experienceYears: string,
	avatarMuti: any
) => {
	let { data } = await http.patch(`/staff-service-by-hr`, {
		staffId: staffId,
		staffServiceId: staffServiceId,
		experienceYears: experienceYears,
		images: avatarMuti,
		allowUpdateExperienceYears: !!experienceYears || false,
		allowUpdateImages: avatarMuti.length > 0 || false,
	});

	return data;
};

export const UptoTopServiceHR = async (staffId: number, staffServiceId: string) => {
	let { data } = await http.patch(`/staff-service-by-hr`, {
		staffId: staffId,
		staffServiceId: staffServiceId,
		allowUpdateTopDisplay: true,
		updateTopDisplay: true,
	});

	return data;
};

export const RemoveStaffPartnerHR = async (id: number) => {
	let { data } = await http.delete(`/remove-staff-service-by-hr/${id}`);

	return data;
};

export const CheckCreatedStaffHR = async (phone?: string | null) => {
	let { data } = await http.post(`/staff-create-check-by-hr`, {
		phone: phone,
	});

	return data?.check;
};

export const CreatedStaffPartnerHR = async (
	birthDay: string | null | undefined,
	name: string | null | undefined,
	gender: Boolean | undefined,
	userId: number | null | undefined,
	address: string | null | undefined,
	phone: string | null | undefined,
	placeIssue: string | null | undefined,
	identifyNumber: string | null | undefined,
	phoneFamily: string | null | undefined,
	description: string | null | undefined,
	provinceId: number | null | undefined,
	districtId: number | null | undefined,
	communeId: number | null | undefined,
	urlData: string | null | undefined,
	avatarMuti: any | null | undefined,
	long: number | null | undefined,
	lat: number | null | undefined,
	storeId: number | null | undefined,
	workTime?: WorkTimeType[] | null | undefined,
	staffType?: number | null | undefined
) => {
	const params = {
		birthDay: birthDay ?? null,
		name: name ?? null,
		gender: gender ?? null,
		userId: userId ?? null,
		address: address ?? null,
		phone: phone ?? null,
		placeIssue: placeIssue ?? null,
		indetifyNumber: identifyNumber ?? null,
		phoneFamily: phoneFamily ?? null,
		description: description ?? null,
		districtId: districtId ?? null,
		provinceId: provinceId ?? null,
		communeId: communeId ?? null,
		urlImage: urlData ?? null,
		images: avatarMuti ?? null,
		long: long ?? null,
		lat: lat ?? null,
		storeId: storeId ?? null,
		workTime,
		...(staffType && {
			allowStoreStation: true,
			storeStaffType: staffType,
		}),
	};
	let { data } = await http.post(`/staff-by-hr`, params);

	return data;
};

export const UpdateDescriptionStaffServiceHR = async (id?: number | null, description?: string | null) => {
	let { data } = await http.patch(`/staff/${id}/update-field-by-field-by-hr`, {
		description: description,
		allowDescription: true,
	});

	return data;
};

export const getDescriptionLangStaffHR = async (id?: number | null) => {
	let { data } = await http.get(`/staff-description-by-hr/${id}`);

	return data;
};

export const AddStaffPartnerHR = async (
	id: number,
	serviceId: string,
	prices: { unit: string; price: number }[],
	nameService: string
) => {
	const simplifiedPrices = prices.map(({ unit, price }) => ({ unit, price }));
	let { data } = await http.post(`/add-price-staff-service-by-hr`, {
		staffId: id,
		serviceId: serviceId,
		prices: simplifiedPrices,
		name: nameService,
	});

	return data;
};


export const updateStaffIdentifyHR = async (
	staffId: number,
	data: {
		birthDay?: string | null;
		identifyCard?: string | null;
		dateOfIssueIdentify?: string | null;
		placeOfIssueIdentify?: string | null;
		identifyAddress?: string | null;
		identifyName?: string | null;
	}
) => {
	await http.put(`/staff-by-hr/${staffId}`, {
		allowBirthDay: true,
		birthDay: data.birthDay,
		allowIdentifyAddress: true,
		identifyAddress: data.identifyAddress,
		allowDateOfIssueIdentify: true,
		dateOfIssueIdentify: data.dateOfIssueIdentify,
		allowPlaceOfIssueIdentify: true,
		placeOfIssueIdentify: data.placeOfIssueIdentify,
		allowIdentifyCard: true,
		identifyCard: data.identifyCard,
		allowIdentifyName: true,
		identifyName: data.identifyName,
	});
};