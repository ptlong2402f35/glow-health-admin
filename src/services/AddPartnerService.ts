import { WorkTimeType } from "../models/StaffDetail";
import http from "./http";

export interface ParamsUpdatePartnerForm {
	name: string;
	id: number;
	userId: number;
	birthDay: string;
	gender: Boolean;
	address: string;
	description: string;
	districtId: number;
	provinceId: number;
	communeId: number;
	phone: string;
	identifyCard: string;
	placeIssue: string;
	phoneFamily: string;
	taxPlaceIssue: string;
	long: number;
	lat: number;
}

export async function updatePartnerInfo(
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
		gender: gender,
		userId: userId ?? null,
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
			staffRole: staffType,
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

	await http.put(`/staff-by-admin/${id}`, params);
}

export const CreatedStaffPartner = async (
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
		gender: gender,
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
			staffRole: staffType,
		}),
	};
	let { data } = await http.post(`/staff-by-admin`, params);

	return data;
};
