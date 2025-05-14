import IModel from "./IModel";
import User from "./User";
import Services from "./Services";
import { ActiveType, Image } from "./Service";
import StaffService from "./StaffService";
import Store from "./Store";
import { Tags, YoutubeEmbedUrl } from "./Staff";

export interface StaffAddressPath {
	id?: number | null;
	name?: string | null;
	code?: string | null;
	type?: string | null;
	centerPoint?: string | null;
	rank?: string | null;
	provinceId: number | null;
	createdAt: Date | null;
	updatedAt: string | null;
}

export type WorkTimeType = {
	date: {
		from: string;
		to: string;
	};
	hour: {
		from: string;
		to: string;
	};
};

export default class StaffDetail implements IModel<StaffDetail> {
	placeIssue?: string | null;
	id?: number;
	name?: string | null;
	active?: ActiveType | undefined;
	birthDay?: string | null;
	userId?: number;
	gender?: Boolean;
	online?: Boolean | null;
	description?: string | null;
	busy?: Boolean | null;
	rateAvg?: number | null;
	countReview?: number | null;
	workAtStore?: Boolean | null;
	workAtHome?: Boolean | null;
	createdAt?: Date | null;
	user?: User | null;
	province?: StaffAddressPath | null;
	district?: StaffAddressPath | null;
	commune?: StaffAddressPath | null;
	provinceId?: number | null;
	staffService?: StaffService[] | null;
	phone?: string | null;
	address?: string | null;
	urlImage?: string | null;
	identifyCard?: string | null;
	phoneFamily?: string | null;
	taxId?: string | null;
	taxPlaceIssue?: string | null;
	reviews?: Review[] | null;
	images: Image[] | null | undefined;
	coordinate?: Coordinate | null;
	storeId?: number | null;
	communeId?: number | null;
	districtId?: number | null;
	workTime?: WorkTimeType[] | null;
	type?: number | null;
	store?: Store | null;
	identifyImages: Image[] | null | undefined;
	selfImages?: string;
	validateStatus?: number;
	certificateImages?: Image[] | null | undefined;
	socialMedia?: SocialMedia | null;
	promotionalVideos?: YoutubeEmbedUrl[] | null;
	identifyName?: string | null;
	identifyBirthday?: string | null;
	identifyAddress?: string | null;
	placeOfIssueIdentify?: string | null;
	dateOfIssueIdentify?: string | null;
	tags?: Tags[] | null;
	staffRole?: number | null;

	constructor(input?: Partial<StaffDetail>) {
		this.placeIssue = input?.placeIssue;
		this.id = input?.id;
		this.name = input?.name;
		this.active = input?.active;
		this.birthDay = input?.birthDay;
		this.userId = input?.userId;
		this.gender = input?.gender;
		this.online = input?.online;
		this.description = input?.description;
		this.busy = input?.busy;
		this.rateAvg = input?.rateAvg;
		this.countReview = input?.countReview;
		this.workAtStore = input?.workAtStore;
		this.workAtHome = input?.workAtHome;
		this.createdAt = input?.createdAt;
		this.user = input?.user;
		this.province = input?.province;
		this.district = input?.district;
		this.commune = input?.commune;
		this.provinceId = input?.provinceId;
		this.staffService = input?.staffService;
		this.phone = input?.phone;
		this.address = input?.address;
		this.urlImage = input?.urlImage;
		this.identifyCard = input?.identifyCard;
		this.phoneFamily = input?.phoneFamily;
		this.taxId = input?.taxId;
		this.taxPlaceIssue = input?.taxPlaceIssue;
		this.reviews = input?.reviews || [];
		this.images = input?.images;
		this.coordinate = input?.coordinate;
		this.storeId = input?.storeId;
		this.communeId = input?.communeId;
		this.districtId = input?.districtId;
		this.workTime = input?.workTime;
		this.type = input?.type;
		this.store = input?.store;
		this.identifyImages = input?.identifyImages;
		this.selfImages = input?.selfImages;
		this.validateStatus = input?.validateStatus;
		this.certificateImages = input?.certificateImages;
		this.socialMedia = input?.socialMedia;
		this.promotionalVideos = input?.promotionalVideos || [];
		this.identifyName = input?.identifyName;
		this.identifyBirthday = input?.identifyBirthday;
		this.identifyAddress = input?.identifyAddress;
		this.placeOfIssueIdentify = input?.placeOfIssueIdentify;
		this.dateOfIssueIdentify = input?.dateOfIssueIdentify;
		this.tags = input?.tags;
		this.staffRole = input?.staffRole;
	}

	parse(json?: any): StaffDetail {
		if (!json) return this;

		Object.assign(this, {
			...json,
			placeIssue: json.placeIssue,
			id: json.id,
			name: json.name,
			active: json.active,
			userId: json.userId,
			gender: json.gender,
			online: json.online,
			description: json.description,
			busy: json.busy,
			rateAvg: json.rateAvg || 0,
			countReview: json.countReview || 0,
			workAtHome: json.workAtHome,
			user: json.user,
			province: json.province,
			district: json.district,
			provinceId: json.provinceId,
			staffService: json.staffService,
			phone: json.phone,
			address: json.address,
			urlImage: json.urlImage,
			identifyCard: json.identifyCard,
			phoneFamily: json.phoneFamily,
			taxId: json.taxId,
			taxPlaceIssue: json.taxPlaceIssue,
			createdAt: json.createdAt && new Date(json.createdAt),
			birthDay: json.birthDay,
			reviews: json.reviews && json.reviews.map((res: any) => new Review().parse(res)),
			images: json.images,
			coordinate: json.coordinate,
			storeId: json.storeId,
			communeId: json.communeId,
			districtId: json.districtId,
			workTime: json.workTime,
			store: json.store,
			identifyImages:
				json.identifyImages &&
				json.identifyImages.map((url: string, index: number) => ({
					createdAt: new Date().toISOString(),
					destination: null,
					encoding: null,
					fieldname: null,
					filename: null,
					id: index,
					localOrder: null,
					mimetype: null,
					model: null,
					originalname: null,
					path: url,
					referenceId: null,
					size: null,
					updatedAt: new Date().toISOString(),
				})),
			selfImages: json.selfImages,
			validateStatus: json.validateStatus,
			certificateImages:
				json.certificateImages &&
				json.certificateImages.map((url: string, index: number) => ({
					createdAt: new Date().toISOString(),
					destination: null,
					encoding: null,
					fieldname: null,
					filename: null,
					id: index,
					localOrder: null,
					mimetype: null,
					model: null,
					originalname: null,
					path: url,
					referenceId: null,
					size: null,
					updatedAt: new Date().toISOString(),
				})),
			socialMedia: json.socialMedia,
			promotionalVideos:json.promotionalVideos,
			identifyName:json.identifyName,
			identifyBirthday:json.identifyBirthday,
			identifyAddress:json.identifyAddress,
			placeOfIssueIdentify:json.placeOfIssueIdentify,
			dateOfIssueIdentify:json.dateOfIssueIdentify,
			tags:json.tags,
			staffRole:json.staffRole,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new StaffDetail().parse(item));
	}

	clone(): StaffDetail {
		return new StaffDetail({
			...this,
		});
	}
}

export class Review implements IModel<Review> {
	id?: number | null;
	noteReview?: string | null;
	rateReview?: number | null;
	updatedAt?: Date | null;
	successTime?: number | null;
	userCustomer?: UserCustomer | null;
	staff?: string | null;

	constructor(input?: Partial<Review>) {
		this.id = input?.id;
		this.noteReview = input?.noteReview;
		this.rateReview = input?.rateReview;
		this.updatedAt = input?.updatedAt;
		this.successTime = input?.successTime;
		this.userCustomer = input?.userCustomer;
		this.staff = input?.staff;
	}

	parse(json?: any): Review {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			noteReview: json.noteReview,
			rateReview: json.rateReview,
			updatedAt: json.updatedAt,
			successTime: json.successTime,
			userCustomer: json.userCustomer,
			staff: json.staff,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Review().parse(item));
	}

	clone(): Review {
		return new Review({
			...this,
		});
	}
}

export class UserCustomer implements IModel<UserCustomer> {
	id?: number | null;
	phone?: number | null;
	urlImage?: string | null;
	userName?: string | null;

	constructor(input?: Partial<UserCustomer>) {
		this.id = input?.id;
		this.phone = input?.phone;
		this.urlImage = input?.urlImage;
		this.userName = input?.userName;
	}

	parse(json?: any): UserCustomer {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			phone: json.phone,
			urlImage: json.urlImage,
			userName: json.userName,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new UserCustomer().parse(item));
	}

	clone(): UserCustomer {
		return new UserCustomer({
			...this,
		});
	}
}

export class Coordinate implements IModel<Review> {
	coordinates?: [number, number] | null;

	constructor(input?: Partial<Coordinate>) {
		this.coordinates = input?.coordinates;
	}

	parse(json?: any): Coordinate {
		if (!json) return this;

		Object.assign(this, {
			...json,
			coordinates: json.coordinates,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Coordinate().parse(item));
	}

	clone(): Coordinate {
		return new Coordinate({
			...this,
		});
	}
}

export class Check implements IModel<Check> {
	isPhoneExist?: boolean | null;
	isStaffExist?: boolean | null;
	isValid?: boolean | null;

	constructor(input?: Partial<Check>) {
		this.isPhoneExist = input?.isPhoneExist;
		this.isStaffExist = input?.isStaffExist;
		this.isValid = input?.isValid;
	}

	parse(json?: any): Check {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Check().parse(item));
	}

	clone(): Check {
		return new Check({
			...this,
		});
	}
}

export class SocialMedia implements IModel<SocialMedia> {
	facebook?: string | null;
	youtube?: string | null;
	tiktok?: string | null;
	instagram?: string | null;
	website?: string | null;

	constructor(input?: Partial<SocialMedia>) {
		this.facebook = input?.facebook;
		this.youtube = input?.youtube;
		this.tiktok = input?.tiktok;
		this.instagram = input?.instagram;
		this.website = input?.website;
	}

	parse(json?: any): SocialMedia {
		if (!json) return this;

		Object.assign(this, {
			...json,
			facebook: json.facebook,
			youtube: json.youtube,
			tiktok: json.tiktok,
			instagram: json.instagram,
			website: json.website,
		});

		return this;
	}

	clone(): SocialMedia {
		return new SocialMedia({
			...this,
		});
	}
}
