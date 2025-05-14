import { StringDecoder } from "string_decoder";
import Staff, { BreadCrumb, LabelData, ReviewProps, Tags, TopStaffParam } from "../models/Staff";
import http from "./http";
import { DescriptionLang } from "../views/pages/adminPartnerManagement/DescriptionLang/DescriptionLangDialog";
import StaffAddressPath from "../models/StaffAddressPath";
import FakeReview from "../models/FakeReview";
import environments from "../environment";
import axios from "axios";
import { DefaultModel } from "../models/IModel";
import Service, { StaffServiceHome, StaffServicePrice, TopService } from "../models/Service";

export const StaffPerPageDefault = 10;

export default async function getStaffList(props: {
	searchName?: string;
	active?: boolean;
	storageId?: number;
	serviceIds?: number;
	perPage?: number;
	page?: number;
	phone?: string;
}) {
	const params: any = {
		...(props.searchName && { search: props.searchName }),
		...(props.active && { active: props.active }),
		...(props.storageId && { storageId: props.storageId }),
		...(props.serviceIds && { serviceIds: props.serviceIds }),
		perPage: props.perPage || StaffPerPageDefault,
		...(props.page && { page: props.page }),
		...(props.phone && { phone: props.phone }),
	};
	const { data } = await http.get(`/staff?${new URLSearchParams(params).toString()}`);
	return new Staff().parseList(data.docs);
}

export const StaffBackToWork = async (id: number, active: boolean) => {
	let { data } = await http.put(`/deactive-staff-by-admin/${id}`, {
		    "active": active
	});

	return data;
};

export const StaffUpdateStatus = async (id: number) => {
	let { data } = await http.put(`/admin-staff-status/${id}`);

	return data;
};

export const StaffUpdateBusy = async (id: number, busy: number) => {
	let { data } = await http.put(`/admin-update-staff-busy/${id}`, { busy: busy });

	return data;
};

export const ServiceStaffPartner = async (id: number) => {
	let { data } = await http.get(`/staff-new-service?staffId=${id}&sortGroup=true`);

	return data;
};

export const AddStaffPartner = async (
	id: number,
	serviceId: string,
	prices: { unit: string; price: number }[],
	nameService: string
) => {
	const simplifiedPrices = prices.map(({ unit, price }) => ({ unit, price }));
	let { data } = await http.post(`/admin-add-staff-service`, {
		staffId: id,
		serviceId: serviceId,
		prices: simplifiedPrices,
		name: nameService,
	});

	return data;
};

export const UpdateStaffPartner = async (
	staffId: number,
	staffServiceId: number,
	allowUpdatePrices: boolean,
	allowUpdateExperienceYears: boolean,
	allowUpdateImages: boolean,
	serviceId: number,
	prices: { unit: string; price: number }[]
) => {
	let { data } = await http.post(`/admin-update-staff-service`, {
		staffId: staffId,
		staffServiceId: staffServiceId,
		prices: prices,
	});

	return data;
};

export const RemoveStaffPartner = async (id: number) => {
	let { data } = await http.delete(`remove-staff-service/${id}`);

	return data;
};

export const StaffServiPrice = async (id: number, serviceId: number) => {
	let { data } = await http.get(`/price-staff-service?staffId=${id}&serviceId=${serviceId}`);

	return data;
};

export const UpdateServicePrice = async (
	staffId: number,
	staffServiceId: number,
	prices: { unit: string; price: number; itemId?: number }[],
	nameService: string,
	descriptionService: string
) => {
	const simplifiedPrices = prices.map((item) => ({ unit: item.unit, price: item.price, itemId: item.itemId }));
	let { data } = await http.put(`/update-staff-price`, {
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

export const UpdateStaffService = async (
	staffId: number,
	staffServiceId: string,
	experienceYears: string,
	avatarMuti: any
) => {
	let { data } = await http.patch(`/admin-update-staff-service`, {
		staffId: staffId,
		staffServiceId: staffServiceId,
		experienceYears: experienceYears,
		images: avatarMuti,
		allowUpdateExperienceYears: !!experienceYears || false,
		allowUpdateImages: avatarMuti.length > 0 || false,
	});

	return data;
};

export const VerificationStaffService = async (staffId: number, validationStatus: number) => {
	let { data } = await http.patch(`/admin-staff/${staffId}/update-validation`, {
		validationStatus: validationStatus,
	});

	return data;
};

export const CountryService = async () => {
	let { data } = await http.get(`/admin-get-country`);

	return data;
};

export const CheckCreatedStaff = async (phone?: string | null) => {
	let { data } = await http.post(`/staff-create-check`, {
		phone: phone,
	});

	return data?.check;
};
export const UpdateDescriptionStaffService = async (id?: number | null, description?: string | null) => {
	let { data } = await http.patch(`/staff/${id}/update-field-by-field`, {
		description: description,
		allowDescription: true,
	});

	return data;
};

export const getDescriptionLangStaff = async (id?: number | null) => {
	let { data } = await http.get(`/staff-description/${id}`);

	return data;
};

export const updateDescriptionLangStaff = async (id?: number | null, description?: DescriptionLang[] | null) => {
	let { data } = await http.patch(`/staff-description/${id}`, {
		allowUpdateDefault: true,
		data: description,
	});

	return data;
};

export const getTopService = async (lang?: string) => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	let { data } = await http.get(`/top-service-web`, {
		headers,
	});
	if (data.length > 0) {
		data.splice(0, 1);
	}

	return { data: DefaultModel.parseList<TopService>(data, () => new TopService()), count: 0 };
};

export const getTopServiceSSR = async (lang?: string) => {
	let headers = {
		"glow-lang": lang || "vi",
	};

	const { data } = await axios.get((environments.localApiRoot || environments.apiRoot) + `/top-service-web`, {
		timeout: environments.localApiTimeout || undefined,
		headers,
	});
	if (data.length > 0) {
		data.splice(0, 1);
	}

	return {
		dataTopService: DefaultModel.parseList<TopService>(data, () => new TopService()),
		rawTopService: data,
	};
};

export const offlinegetTopService = async (raw: any): Promise<{ data: TopService[]; count: number }> => {
	let data = DefaultModel.parseList<TopService>(raw, () => new TopService());
	const count = 0;
	return {
		data,
		count,
	};
};

export const getStaffService = async (perPage: number, page: number, param: any, lang?: string) => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	let params = param;
	let { data } = await http.get(`/staff-service-web?page=${page}&perPage=${perPage}`, {
		params,
		headers,
	});

	return {
		data: DefaultModel.parseList<StaffServiceHome>(data.docs, () => new StaffServiceHome()),
		count: data.total,
		getAllUrl: data.getAllUrl,
	};
};

export const getStaffServiceSSR = async (perPage: number, page: number, param: any, lang?: string) => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	let params = param;
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) + `/staff-service-web?page=${page}&perPage=${perPage}`,
		{
			params,
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);

	return {
		dataStaffServiceSSR: DefaultModel.parseList<StaffServiceHome>(data.docs, () => new StaffServiceHome()),
		// dataStaffServiceSSR:data,
		rawStaffServiceSSR: data,
		getAllUrl: data.getAllUrl,
	};
};

export const offlineGetStaffService = async (
	raw: any
): Promise<{ data: StaffServiceHome[]; count: number; getAllUrl: string }> => {
	let data = DefaultModel.parseList<StaffServiceHome>(raw.docs, () => new StaffServiceHome());
	const count = raw.total;
	const getAllUrl = raw.getAllUrl;
	return {
		data,
		count,
		getAllUrl,
	};
};

export const offlineGetListStaffService = async (
	raw: any
): Promise<{ data: StaffServiceHome[][]; count: number; getAllUrl: string[] }> => {
	let data: StaffServiceHome[][] = raw.map((doc: any) => {
		return DefaultModel.parseList<StaffServiceHome>(doc.docs, () => new StaffServiceHome());
	});
	let getAllUrl: string[] = raw.map((doc: any) => {
		return doc.getAllUrl;
	});

	const count = raw.total;

	return {
		data,
		count,
		getAllUrl,
	};
};

export const getTopStaff = async (lang: string) => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	let { data } = await http.get(`/top-staff-web`, {
		headers,
	});

	return { data: DefaultModel.parseList<TopService>(data, () => new TopService()), count: 0 };
};

export const getTopStaffSSR = async (lang?: string) => {
	let headers = {
		"glow-lang": lang || "vi",
	};

	const { data } = await axios.get((environments.localApiRoot || environments.apiRoot) + `/top-staff-web`, {
		timeout: environments.localApiTimeout || undefined,
		headers,
	});

	return { dataTopStaff: DefaultModel.parseList<TopService>(data, () => new TopService()), rawTopStaff: data };
};

export const offlinegetTopStaff = async (raw: any): Promise<{ data: TopService[]; count: number }> => {
	let data = DefaultModel.parseList<TopService>(raw, () => new TopService());
	const count = 0;
	return {
		data,
		count,
	};
};

export const getStaffListv2 = async (
	perPage?: number,
	page?: number,
	param?: any,
	lang?: string,
	search?: string
): Promise<{
	data: Staff[];
	link: string;
	count: number;
}> => {
	let params = param;
	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		...(search && { keyword: search }),
		isRecommend: true,
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(`/staff-web-v2?${new URLSearchParams(val).toString()}`, {
		headers,
		params,
	});
	return {
		data: DefaultModel.parseList<Staff>(data.docs, () => new Staff()),
		link: data.getAllUrl,
		count: data.total,
	};
};

export const getStaffListv2SSR = async (
	perPage?: number,
	page?: number,
	param?: any,
	lang?: string,
	search?: string
): Promise<{
	dataStaffListv2: Staff[];
	linkStaffListv2: string;
	rawStaffListv2: any;
	totalData: number;
}> => {
	let params = param;
	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		...(search && { keyword: search }),
		isRecommend: true,
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) + `/staff-web-v2?${new URLSearchParams(val).toString()}`,
		{
			params,
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	return {
		dataStaffListv2: DefaultModel.parseList<Staff>(data.docs, () => new Staff()),
		linkStaffListv2: data.getAllUrl,
		rawStaffListv2: data,
		totalData: data.total,
	};
};

export const offlineGetListStaffServicev2 = async (
	raw: any
): Promise<{ data: Staff[][]; count: number; getAllUrls: string[] }> => {
	let data: Staff[][] = raw.map((doc: any) => {
		return DefaultModel.parseList<Staff>(doc.docs, () => new Staff());
	});

	const count = raw.total;
	const getAllUrls: string[] = raw.map((doc: any) => doc.getAllUrl);

	return {
		data,
		count,
		getAllUrls,
	};
};

export const offlineGetSearchListStaffServicev2 = async (raw: any): Promise<{ data: Staff[]; count: number }> => {
	let data: Staff[] = raw.map((doc: any) => {
		return DefaultModel.parseList<Staff>(doc.docs, () => new Staff());
	});

	const count = raw.total;

	return {
		data,
		count,
	};
};

export const ListStaffAtHome = async (
	perPage?: number,
	page?: number,
	url?: any,
	genderStaff?: string | null,
	price?: string | null,
	star?: string | null,
	lang?: string | null,
	apartment?: string | null
): Promise<{
	data: Staff[];
	breadcrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
	labelData?: LabelData;
}> => {
	let useGender: boolean | null = null;
	let gender: boolean | null = null;
	let minPrice: number | null = null;
	let maxPrice: number | null = null;
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (genderStaff === "Male") {
		useGender = true;
		gender = true;
	} else if (genderStaff === "Female") {
		useGender = true;
		gender = false;
	}

	if (price === "1") {
		maxPrice = 300000;
	} else if (price === "2") {
		minPrice = 300000;
		maxPrice = 500000;
	} else if (price === "3") {
		minPrice = 500000;
		maxPrice = 1000000;
	} else if (price === "4") {
		minPrice = 1000000;
	}

	if (star === "1") {
		maxRate = 2;
	} else if (star === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (star === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (star === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (star === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		skipQuickForward: true,
		...(useGender && { useGender: useGender }),
		...(gender && { gender: gender }),
		...(minPrice && { minPrice: minPrice }),
		...(maxPrice && { maxPrice: maxPrice }),
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
		...(apartment && { apartmentUrl: apartment }),
		forceRandom: true,
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(`/staff-web-v2/${url}?${new URLSearchParams(val).toString()}`, {
		headers,
	});
	return {
		data: new Staff().parseList(data.docs),
		breadcrumb: new BreadCrumb().parseList(data.breadcrumb),
		count: data.total,
		pageType: data.pagetype,
		pageTitle: data.pageTitle,
		labelData: data.labelData,
	};
};

export const ListStaffAtHomeSSR = async (
	perPage?: number,
	page?: number,
	url?: any,
	genderStaff?: string | null,
	price?: string | null,
	star?: string | null,
	lang?: string | null,
	apartment?: string | null
): Promise<{
	dataListStaffAtHome: Staff[];
	rawListStaffAtHome: any;
	pageType: number[];
	pageTitle: string;
	breadcrumb: BreadCrumb[];
	labelData?: LabelData;
	totalData?: number;
}> => {
	let useGender: boolean | null = null;
	let gender: boolean | null = null;
	let minPrice: number | null = null;
	let maxPrice: number | null = null;
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (genderStaff === "Male") {
		useGender = true;
		gender = true;
	} else if (genderStaff === "Female") {
		useGender = true;
		gender = false;
	}

	if (price === "1") {
		maxPrice = 300000;
	} else if (price === "2") {
		minPrice = 300000;
		maxPrice = 500000;
	} else if (price === "3") {
		minPrice = 500000;
		maxPrice = 1000000;
	} else if (price === "4") {
		minPrice = 1000000;
	}

	if (star === "1") {
		maxRate = 2;
	} else if (star === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (star === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (star === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (star === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		skipQuickForward: true,
		...(useGender && { useGender: useGender }),
		...(gender && { gender: gender }),
		...(minPrice && { minPrice: minPrice }),
		...(maxPrice && { maxPrice: maxPrice }),
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
		...(apartment && { apartmentUrl: apartment }),
		forceRandom: true,
	};

	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) +
			`/staff-web-v2/${url}?${new URLSearchParams(val).toString()}`,
		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	let breadcrumb = DefaultModel.parseList<BreadCrumb>(data.breadcrumb, () => new BreadCrumb());
	return {
		dataListStaffAtHome: new Staff().parseList(data.docs),
		rawListStaffAtHome: data,
		pageType: data.pagetype,
		pageTitle: data.pageTitle,
		breadcrumb: breadcrumb,
		labelData: data.labelData,
		totalData: data.total,
	};
};

export const offlineListStaffAtHome = async (
	raw: any
): Promise<{
	data: Staff[];
	breadcrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
	labelData?: LabelData;
}> => {
	let data = DefaultModel.parseList<Staff>(raw.docs, () => new Staff());
	let breadcrumb = DefaultModel.parseList<BreadCrumb>(raw.breadcrumb, () => new BreadCrumb());

	return {
		data: data,
		breadcrumb: breadcrumb,
		count: raw.total,
		pageType: raw.pagetype,
		pageTitle: raw.pageTitle,
		labelData: raw.labelData,
	};
};

export const UrlAddress = async (
	url?: any,
	apartment?: string,
	lang?: string
): Promise<{
	data: StaffAddressPath[];
	backUrl: string;
	locationType: string;
	count: number;
}> => {
	const val: any = {
		urlData: url,
		apartmentUrl: apartment || "",
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	// const { data } = await http.get(`/location-list?${new URLSearchParams(val).toString()}`);
	const { data } = await http.get(`/location-list-v2?${new URLSearchParams(val).toString()}`, {
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
			`/location-list-v2?${new URLSearchParams(val).toString()}`,

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

export const offlineUrlAddressMap = async (
	raw: any
): Promise<{
	data: StaffAddressPath[];
	backUrl: string;
	locationType: string;
	count: number;
}> => {
	let data = DefaultModel.parseList<StaffAddressPath>(raw.data, () => new StaffAddressPath());
	let locationType = raw.locationType;
	let backUrl = raw.backUrl;
	let count = 0;

	return {
		data: data,
		locationType: locationType,
		backUrl: backUrl,
		count: count,
	};
};
export const DetailStaff = async (group?: string, url?: string, lang?: string) => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	const val: any = {
		includeStoreMembers: true,
	};
	const { data } = await http.get(`/staff-detail-web/${group}/${url}?${new URLSearchParams(val).toString()}`, {
		headers,
	});
	// const { data } = await http.get(`/staff/1?isGroupService=true`);
	return { data: new Staff().parse(data), count: 0 };
};

export const DetailStaffSSR = async (group?: string, url?: string, lang?: string) => {
	// const { data } = await http.get(`/staff-detail-web/${group}/${url}`);
	let headers = {
		"glow-lang": lang || "vi",
	};
	const val: any = {
		includeStoreMembers: true,
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) +
			`/staff-detail-web/${group}/${url}?${new URLSearchParams(val).toString()}`,
		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	// const { data } = await http.get(`/staff/1?isGroupService=true`);
	return { dataDetailStaff: new Staff().parse(data), rawDetailStaff: data };
};

export const offlineDetailStaff = async (raw: any): Promise<{ data: Staff; count: number }> => {
	let data = new Staff().parse(raw);

	const count = 0;

	return {
		data,
		count,
	};
};
export const ReviewStaffv2 = async (
	staffId?: number,
	page?: number,
	perPage?: number,
	offset?: number,
	fakeOffset?: number,
	filterStar?: string,
	staffServiceId?: string
) => {
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (filterStar === "1") {
		maxRate = 2;
	} else if (filterStar === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (filterStar === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (filterStar === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (filterStar === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		...(staffServiceId && { staffServiceId: staffServiceId }),
		page: page || 1,
		...(perPage && { perPage: perPage || 10 }),
		// offset: offset || 0,
		// fakeOffset: fakeOffset || 0,
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
	};

	const { data } = await http.get(`/staff/${staffId}/review-v3?${new URLSearchParams(val).toString()}`);
	return data;
};

export const ReviewServicev2 = async (
	staffId?: number,
	page?: number,
	perPage?: number,
	offset?: number,
	fakeOffset?: number,
	filterStar?: string,
	staffServiceId?: string
) => {
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (filterStar === "1") {
		maxRate = 2;
	} else if (filterStar === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (filterStar === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (filterStar === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (filterStar === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		...(staffServiceId && { staffServiceId: staffServiceId }),
		page: page || 1,
		...(perPage && { perPage: perPage || 10 }),
		// offset: offset || 0,
		// fakeOffset: fakeOffset || 0,
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
	};

	const { data } = await http.get(`/staff/${staffId}/review-v3?${new URLSearchParams(val).toString()}`);
	return { data: new FakeReview().parseList(data.docs), total: data.total };
};

export const ReviewStaffv2SSR = async (
	staffId?: number,
	page?: number,
	perPage?: number,
	offset?: number,
	fakeOffset?: number,
	filterStar?: string,
	staffServiceId?: string
) => {
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (filterStar === "1") {
		maxRate = 2;
	} else if (filterStar === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (filterStar === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (filterStar === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (filterStar === "5") {
		minRate = 5;
		maxRate = 6;
	}
	const val: any = {
		...(staffServiceId && { staffServiceId: staffServiceId }),
		page: page || 1,
		...(perPage && { perPage: perPage || 10 }),
		// offset: offset || 0,
		// fakeOffset: fakeOffset || 0,
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
	};

	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) +
			`/staff/${staffId}/review-v3?${new URLSearchParams(val).toString()}`,
		{
			timeout: environments.localApiTimeout || undefined,
			// headers
		}
	);
	// const { data } = await http.get(`staff/${staffId}/review-v3?${new URLSearchParams(val).toString()}`);
	return {
		dataReviewService: new FakeReview().parseList(data.docs),
		rawReviewService: data,
		totalReviewService: data.total,
	};
};

export const offlineReviewStaff = async (
	raw: any
): Promise<{
	data: any;
	docs: FakeReview[];
	total: number;
}> => {
	let docs = DefaultModel.parseList<FakeReview>(raw.docs, () => new FakeReview());
	const count = raw.total;

	return {
		data: raw,
		docs: docs,
		total: count,
	};
};

export const ListServiceFilter = async (
	perPage?: number,
	page?: number,
	url?: any,
	star?: string | null,
	lang?: string | null,
	apartment?: string | null
): Promise<{
	data: Service[];
	breadcrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
}> => {
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (star === "1") {
		maxRate = 2;
	} else if (star === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (star === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (star === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (star === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		skipQuickForward: true,
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
		...(apartment && { apartmentUrl: apartment }),
		forceRandom: true,
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(`/staff-service-flatten-web/${url}?${new URLSearchParams(val).toString()}`, {
		headers,
	});
	return {
		data: new Service().parseList(data.docs),
		breadcrumb: new BreadCrumb().parseList(data.breadcrumb),
		count: data.total,
		pageType: data.pagetype,
		pageTitle: data.pageTitle,
	};
};

export const ListSerrviceAtHomeSSR = async (
	perPage?: number,
	page?: number,
	url?: any,
	star?: string | null,
	lang?: string | null,
	apartment?: string | null
): Promise<{
	dataListStaffAtHome: Service[];
	rawListStaffAtHome: any;
	pageType: number[];
	pageTitle: string;
	breadcrumb: BreadCrumb[];
	totalData?: number;
}> => {
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (star === "1") {
		maxRate = 2;
	} else if (star === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (star === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (star === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (star === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		skipQuickForward: true,
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
		...(apartment && { apartmentUrl: apartment }),
		forceRandom: true,
	};

	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) +
			`/staff-service-flatten-web/${url}?${new URLSearchParams(val).toString()}`,
		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	let breadcrumb = DefaultModel.parseList<BreadCrumb>(data.breadcrumb, () => new BreadCrumb());

	return {
		dataListStaffAtHome: new Service().parseList(data.docs),
		rawListStaffAtHome: data,
		pageType: data.pageType,
		pageTitle: data.pageTitle,
		breadcrumb: breadcrumb,
		totalData: data.total,
	};
};

export const offlineListSerrviceAtHome = async (
	raw: any
): Promise<{
	data: Service[];
	breadcrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
}> => {
	let data = DefaultModel.parseList<Service>(raw.docs, () => new Service());
	let breadcrumb = DefaultModel.parseList<BreadCrumb>(raw.breadcrumb, () => new BreadCrumb());

	return {
		data: data,
		breadcrumb: breadcrumb,
		count: raw.total,
		pageType: raw.pagetype,
		pageTitle: raw.pageTitle,
	};
};

export const DetailService = async (group?: string, url?: string, lang?: string) => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(`/staff-service-price-web/${group}/${url}`, {
		headers,
	});
	// const { data } = await http.get(`/staff/1?isGroupService=true`);
	return { data: new StaffServicePrice().parse(data), count: 0 };
};

export const DetailServiceSSR = async (group?: string, url?: string, lang?: string) => {
	// const { data } = await http.get(`/staff-detail-web/${group}/${url}`);
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) + `/staff-service-price-web/${group}/${url}`,
		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	// const { data } = await http.get(`/staff/1?isGroupService=true`);
	return { dataDetailService: new StaffServicePrice().parse(data), rawDetailService: data };
};

export const offlineDetailService = async (raw: any): Promise<{ data: StaffServicePrice; count: number }> => {
	let data = new StaffServicePrice().parse(raw);

	const count = 0;

	return {
		data,
		count,
	};
};

export const ReviewProperty = async () => {
	const { data } = await http.get(`/review-property`);
	return new ReviewProps().parseList(data);
};

export const StaffReviewv4 = async (
	staffId: number,
	serviceId: string,
	reviewData: {
		type: number;
		rateReview: number;
	}[],
	noteReview: string,
	avatarMuti: any
) => {
	const { data } = await http.post(`/staff/${staffId}/review-v4`, {
		staffId: staffId,
		staffServiceId: serviceId,
		reviewData: reviewData,
		noteReview: noteReview,
		images: avatarMuti,
	});
	return data;
};

export const getStaffListSuggest = async (
	perPage?: number,
	page?: number,
	param?: any,
	lang?: string,
	districtId?: number,
	orMultipleServiceGroups?: string,
	type?: number
): Promise<{
	data: Staff[];
	link: string;
}> => {
	let params = param;
	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		...(districtId && { districtId: districtId }),
		...(orMultipleServiceGroups && { orMultipleServiceGroups: orMultipleServiceGroups }),
		...(type && { types: type }),
		isRecommend: true,
	};

	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(`/staff-web-v2?${new URLSearchParams(val).toString()}`, {
		headers,
		params,
	});
	return {
		data: DefaultModel.parseList<Staff>(data.docs, () => new Staff()),
		link: data.getAllUrl,
	};
};

export const getStaffListvSuggestSSR = async (
	perPage?: number,
	page?: number,
	param?: any,
	lang?: string,
	districtId?: number,
	orMultipleServiceGroups?: string,
	type?: number
): Promise<{
	dataStaffListSuggestv2: Staff[];
	linkStaffListSuggestv2: string;
	rawStaffListSuggestv2: any;
}> => {
	let params = param;
	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		...(districtId && { districtId: districtId }),
		...(orMultipleServiceGroups && { orMultipleServiceGroups: orMultipleServiceGroups }),
		...(type && { types: type }),
		isRecommend: true,
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) + `/staff-web-v2?${new URLSearchParams(val).toString()}`,
		{
			params,
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	return {
		dataStaffListSuggestv2: DefaultModel.parseList<Staff>(data.docs, () => new Staff()),
		linkStaffListSuggestv2: data.getAllUrl,
		rawStaffListSuggestv2: data,
	};
};

export const offlineGetListStaffServiceSuggest = async (raw: any): Promise<{ data: Staff[] }> => {
	let data = DefaultModel.parseList<Staff>(raw?.docs, () => new Staff());

	return {
		data,
	};
};

export const ListStaffHashtag = async (
	perPage?: number,
	page?: number,
	url?: any,
	genderStaff?: string | null,
	price?: string | null,
	star?: string | null,
	lang?: string | null,
	apartment?: string | null
): Promise<{
	data: Staff[];
	breadcrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
}> => {
	let useGender: boolean | null = null;
	let gender: boolean | null = null;
	let minPrice: number | null = null;
	let maxPrice: number | null = null;
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (genderStaff === "Male") {
		useGender = true;
		gender = true;
	} else if (genderStaff === "Female") {
		useGender = true;
		gender = false;
	}

	if (price === "1") {
		maxPrice = 300000;
	} else if (price === "2") {
		minPrice = 300000;
		maxPrice = 500000;
	} else if (price === "3") {
		minPrice = 500000;
		maxPrice = 1000000;
	} else if (price === "4") {
		minPrice = 1000000;
	}

	if (star === "1") {
		maxRate = 2;
	} else if (star === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (star === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (star === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (star === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		skipQuickForward: true,
		...(useGender && { useGender: useGender }),
		...(gender && { gender: gender }),
		...(minPrice && { minPrice: minPrice }),
		...(maxPrice && { maxPrice: maxPrice }),
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
		...(apartment && { apartmentUrl: apartment }),
		forceRandom: true,
		// minPrice:10
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(`/staff-web-by-service/${url}?${new URLSearchParams(val).toString()}`, {
		headers,
	});
	return {
		data: new Staff().parseList(data.docs),
		breadcrumb: new BreadCrumb().parseList(data.breadcrumb),
		count: data.total,
		pageType: data.pagetype,
		pageTitle: data.pageTitle,
	};
};

export const ListStaffHashtagSSR = async (
	perPage?: number,
	page?: number,
	url?: any,
	genderStaff?: string | null,
	price?: string | null,
	star?: string | null,
	lang?: string | null,
	apartment?: string | null
): Promise<{
	dataListStaffHashTags: Staff[];
	rawListStaffHashTags: any;
	pageType: number[];
	pageTitle: string;
	breadcrumb: BreadCrumb[];
	totalData?: number;
	labelData?: LabelData;
}> => {
	let useGender: boolean | null = null;
	let gender: boolean | null = null;
	let minPrice: number | null = null;
	let maxPrice: number | null = null;
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (genderStaff === "Male") {
		useGender = true;
		gender = true;
	} else if (genderStaff === "Female") {
		useGender = true;
		gender = false;
	}

	if (price === "1") {
		maxPrice = 300000;
	} else if (price === "2") {
		minPrice = 300000;
		maxPrice = 500000;
	} else if (price === "3") {
		minPrice = 500000;
		maxPrice = 1000000;
	} else if (price === "4") {
		minPrice = 1000000;
	}

	if (star === "1") {
		maxRate = 2;
	} else if (star === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (star === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (star === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (star === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		skipQuickForward: true,
		...(useGender && { useGender: useGender }),
		...(gender && { gender: gender }),
		...(minPrice && { minPrice: minPrice }),
		...(maxPrice && { maxPrice: maxPrice }),
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
		...(apartment && { apartmentUrl: apartment }),
		forceRandom: true,
	};

	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) +
			`/staff-web-by-service/${url}?${new URLSearchParams(val).toString()}`,
		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	let breadcrumb = DefaultModel.parseList<BreadCrumb>(data.breadcrumb, () => new BreadCrumb());
	return {
		dataListStaffHashTags: new Staff().parseList(data.docs),
		rawListStaffHashTags: data,
		pageType: data.pageType,
		pageTitle: data.pageTitle,
		breadcrumb: breadcrumb,
		totalData: data.total,
		labelData: data.labelData,
	};
};

export const offlineListStaffHashtag = async (
	raw: any
): Promise<{
	data: Staff[];
	breadcrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
}> => {
	let data = DefaultModel.parseList<Staff>(raw.docs, () => new Staff());
	let breadcrumb = DefaultModel.parseList<BreadCrumb>(raw.breadcrumb, () => new BreadCrumb());

	return {
		data: data,
		breadcrumb: breadcrumb,
		count: raw.total,
		pageType: raw.pagetype,
		pageTitle: raw.pageTitle,
	};
};

export const UrlAddressHashTags = async (
	url?: any,
	apartment?: string,
	lang?: string
): Promise<{
	data: StaffAddressPath[];
	backUrl: string;
	locationType: string;
	count: number;
}> => {
	const val: any = {
		urlData: url,
		apartmentUrl: apartment || "",
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	// const { data } = await http.get(`/location-list?${new URLSearchParams(val).toString()}`);
	const { data } = await http.get(`/location-list-by-service?${new URLSearchParams(val).toString()}`, {
		headers,
	});

	return {
		data: new StaffAddressPath().parseList(data.data),
		locationType: data.locationType,
		backUrl: data.backUrl,
		count: 0,
	};
};

export const UrlAddressHashTagsSSR = async (url?: any, apartment?: string, lang?: string) => {
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
			`/location-list-by-service?${new URLSearchParams(val).toString()}`,

		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	return {
		dataUrlAddressHashTags: new StaffAddressPath().parseList(data.data),
		dataLocationTypeHashTags: data.locationType,
		dataUrlHashTags: data.backUrl,
		rawUrlAddressHashTags: data,
	};
};

export const offlineUrlAddressHashTags = async (
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

export const sendAds = async (id: number) => {
	let { data } = await http.post(`/ads-staff/${id}`);

	return data;
};

export const useGlowCare = async (id: number, status: number) => {
	let { data } = await http.post(`/apply-glow-care/${id}`, {
		glowCareStatus: status,
	});

	return data;
};
export const ListServiceHome = async (
	perPage?: number,
	page?: number,
	lang?: string | null
): Promise<{
	data: Service[];
	count: number;
}> => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(
		`/staff-service-flatten-web?page=${page || 1}&hasCoordinate=false&perPage=${
			perPage || StaffPerPageDefault
		}&sortDistance=true&isProgramActive=true&staffType=3&sortDistancePriority=1&sortReducedPercentage=true&sortReducedPercentagePriority=2`,
		{
			headers,
		}
	);
	return { data: new Service().parseList(data.docs), count: data.total };
};

export const ListServiceHomeSSR = async (
	perPage?: number,
	page?: number,
	lang?: string | null
): Promise<{
	dataListServiceHome: Service[];
	rawListServiceHome: any;
}> => {
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) +
			`/staff-service-flatten-web?page=${page || 1}&hasCoordinate=false&perPage=${
				perPage || StaffPerPageDefault
			}&sortDistance=true&isProgramActive=true&staffType=3&sortDistancePriority=1&sortReducedPercentage=true&sortReducedPercentagePriority=2`,
		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);

	return { dataListServiceHome: new Service().parseList(data.docs), rawListServiceHome: data };
};

export const offlineGetListService = async (
	raw: any
): Promise<{ data: Service[]; count: number; getAllUrl: string }> => {
	let data = DefaultModel.parseList<Service>(raw.docs, () => new Service());
	const count = raw.total;
	const getAllUrl = raw.getAllUrl;
	return {
		data,
		count,
		getAllUrl,
	};
};

export const updateStaffIdentify = async (
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
	await http.put(`/staff-by-accountant/${staffId}`, {
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

export const UptoTopService = async (staffId: number, staffServiceId: string) => {
	let { data } = await http.patch(`/admin-update-staff-service`, {
		staffId: staffId,
		staffServiceId: staffServiceId,
		allowUpdateTopDisplay: true,
		updateTopDisplay: true,
	});

	return data;
};



export const ListStaffMap = async (
	perPage?: number,
	page?: number,
	url?: any,
	genderStaff?: string | null,
	price?: string | null,
	star?: string | null,
	lang?: string | null,
	apartment?: string | null,
	tag?: string | null,
): Promise<{
	data: Staff[];
	breadcrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
	labelData?: LabelData;
	lat: string;
	lng: string;
	fillterTag: string[];
}> => {
	let useGender: boolean | null = null;
	let gender: boolean | null = null;
	let minPrice: number | null = null;
	let maxPrice: number | null = null;
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (genderStaff === "Male") {
		useGender = true;
		gender = true;
	} else if (genderStaff === "Female") {
		useGender = true;
		gender = false;
	}

	if (price === "1") {
		maxPrice = 300000;
	} else if (price === "2") {
		minPrice = 300000;
		maxPrice = 500000;
	} else if (price === "3") {
		minPrice = 500000;
		maxPrice = 1000000;
	} else if (price === "4") {
		minPrice = 1000000;
	}

	if (star === "1") {
		maxRate = 2;
	} else if (star === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (star === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (star === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (star === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		skipQuickForward: true,
		...(useGender && { useGender: useGender }),
		...(gender && { gender: gender }),
		...(minPrice && { minPrice: minPrice }),
		...(maxPrice && { maxPrice: maxPrice }),
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
		...(apartment && { apartmentUrl: apartment }),
		...(tag && { tagIds: tag }),

		forceRandom: true,
	};
	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await http.get(`/staff-web-v2/${url}?${new URLSearchParams(val).toString()}`, {
		headers,
	});
	return {
		data: new Staff().parseList(data.docs),
		breadcrumb: new BreadCrumb().parseList(data.breadcrumb),
		count: data.total,
		pageType: data.pagetype,
		pageTitle: data.pageTitle,
		labelData: data.labelData,
		lat: data.filterLocationLat,
		lng: data.filterLocationLong,
		fillterTag: data.filterServicegroup,
	};
};

export const ListStaffMapSSR = async (
	perPage?: number,
	page?: number,
	url?: any,
	genderStaff?: string | null,
	price?: string | null,
	star?: string | null,
	lang?: string | null,
	apartment?: string | null
): Promise<{
	dataListStaffAtHome: Staff[];
	rawListStaffAtHome: any;
	pageType: number[];
	pageTitle: string;
	breadcrumb: BreadCrumb[];
	labelData?: LabelData;
	totalData?: number;
	lat: string;
	lng: string;
	fillterTag: string[];
}> => {
	let useGender: boolean | null = null;
	let gender: boolean | null = null;
	let minPrice: number | null = null;
	let maxPrice: number | null = null;
	let minRate: number | null = null;
	let maxRate: number | null = null;

	if (genderStaff === "Male") {
		useGender = true;
		gender = true;
	} else if (genderStaff === "Female") {
		useGender = true;
		gender = false;
	}

	if (price === "1") {
		maxPrice = 300000;
	} else if (price === "2") {
		minPrice = 300000;
		maxPrice = 500000;
	} else if (price === "3") {
		minPrice = 500000;
		maxPrice = 1000000;
	} else if (price === "4") {
		minPrice = 1000000;
	}

	if (star === "1") {
		maxRate = 2;
	} else if (star === "2") {
		minRate = 2;
		maxRate = 3;
	} else if (star === "3") {
		minRate = 3;
		maxRate = 4;
	} else if (star === "4") {
		minRate = 4;
		maxRate = 5;
	} else if (star === "5") {
		minRate = 5;
		maxRate = 6;
	}

	const val: any = {
		perPage: perPage || StaffPerPageDefault,
		...(page && { page: page }),
		skipQuickForward: true,
		...(useGender && { useGender: useGender }),
		...(gender && { gender: gender }),
		...(minPrice && { minPrice: minPrice }),
		...(maxPrice && { maxPrice: maxPrice }),
		...(minRate && { minRate: minRate }),
		...(maxRate && { maxRate: maxRate }),
		...(apartment && { apartmentUrl: apartment }),
		forceRandom: true,
	};

	let headers = {
		"glow-lang": lang || "vi",
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) +
			`/staff-web-v2/${url}?${new URLSearchParams(val).toString()}`,
		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	let breadcrumb = DefaultModel.parseList<BreadCrumb>(data.breadcrumb, () => new BreadCrumb());
	return {
		dataListStaffAtHome: new Staff().parseList(data.docs),
		rawListStaffAtHome: data,
		pageType: data.pagetype,
		pageTitle: data.pageTitle,
		breadcrumb: breadcrumb,
		labelData: data.labelData,
		totalData: data.total,
		lat: data.filterLocationLat,
		lng: data.filterLocationLong,
		fillterTag: data.filterServicegroup,
	};
};

export const offlineListStaffMap = async (
	raw: any
): Promise<{
	data: Staff[];
	breadcrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
	labelData?: LabelData;
	lat: string;
	lng: string;
	fillterTag: string[];
}> => {
	let data = DefaultModel.parseList<Staff>(raw.docs, () => new Staff());
	let breadcrumb = DefaultModel.parseList<BreadCrumb>(raw.breadcrumb, () => new BreadCrumb());

	return {
		data: data,
		breadcrumb: breadcrumb,
		count: raw.total,
		pageType: raw.pagetype,
		pageTitle: raw.pageTitle,
		labelData: raw.labelData,
		lat: raw.filterLocationLat,
		lng: raw.filterLocationLong,
		fillterTag: raw.filterServicegroup,
	};
};


export const TagMap = async (fillterTag?:string[]
): Promise<{
	data: Tags[];
}> => {
console.log("fillterTag",fillterTag)
	const val: any = {
		multipleServiceGroup : fillterTag &&  fillterTag.join(';')

	};
	let headers = {

	};
	const { data } = await http.get(`/tag?${new URLSearchParams(val).toString()}`, {
		headers,
	});

	return {
		data: new Tags().parseList(data),
	};
};

export const TagMapSSR = async (fillterTag: string[]) : Promise<{
	dataTagMapAddress: Tags[];
	rawTagMap: any;
}> =>  {
	const val: any = {
		multipleServiceGroup : fillterTag &&  fillterTag.join(';')

	};
	let headers = {
		
	};
	const { data } = await axios.get(
		(environments.localApiRoot || environments.apiRoot) +
			`/tag?${new URLSearchParams(val).toString()}`,

		{
			timeout: environments.localApiTimeout || undefined,
			headers,
		}
	);
	return {
		dataTagMapAddress: new Tags().parseList(data),
		rawTagMap: data
	};
};

export const offlineTagMap = async (
	raw: any
): Promise<{
	data: Tags[];
}> => {
	let data = DefaultModel.parseList<Tags>(raw, () => new Tags());
	return {
		data: data,
	};
};