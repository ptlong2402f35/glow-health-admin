import IModel from "./IModel";
import { Image, StaffServiceHome, StaffServicePrice } from "./Service";
import Services from "./Services";
import StaffAddressPath from "./StaffAddressPath";
import { Review } from "./StaffDetail";
import StaffService from "./StaffService";
import Store from "./Store";
import UserGlow from "./UserGlow";

export enum ValidateStatusType {
	Verification = 3,
	NotVerified = 1,
}
export const ValidateStatusTypeMap = new Map([
	[ValidateStatusType.Verification, "Đã xác minh"],
	[ValidateStatusType.NotVerified, "Chưa xác minh"],
]);

export enum OnlineType {
	ONLINE = "true",
	OFFLINE = "false",
}
export const OnlineTypeMap = new Map([
	[OnlineType.ONLINE, "ONLINE"],
	[OnlineType.OFFLINE, "OFFLINE"],
]);

export enum IdentifyType {
	EXIST = "true",
	UNEXIST = "false",
}
export const IdentifTypeMap = new Map([
	[IdentifyType.EXIST, "Có"],
	[IdentifyType.UNEXIST, "Không"],
]);

export enum GenderType {
	Nu = 2,
	Nam = 1,
}
export const GenderTypeMap = new Map([
	[GenderType.Nam, "Nam"],
	[GenderType.Nu, "Nữ"],
]);

export enum StaffType {
	Individual = 1,
	StoreMember = 2,
}

export const StaffTypeMap = new Map([
	[StaffType.Individual, "KTV "],
	[StaffType.StoreMember, "Chủ cơ sở"],
]);

export enum CareType {
	UnActive = 1,
	Active = 2,
	Block = 3,
}
export const CareTypeMap = new Map([
	[CareType.UnActive, "Đã tắt"],
	[CareType.Active, "Đã bật"],
	[CareType.Block, "Chưa kích hoạt"],
]);

export type YoutubeEmbedUrl = {
	videoId: string;
	thumbnailImage: string;
	url: string;
	start: string;
};

export enum StaffStatusType {
	Waiting = 1,
	Accept = 2,
	Refuse = 3,
	KTVCancel = 4,
}

export const StaffTypeStatusMap = new Map([
	[StaffStatusType.Waiting, "Đang chờ"],
	[StaffStatusType.Accept, "Chấp nhận"],
	[StaffStatusType.Refuse, "Từ chối"],
	[StaffStatusType.KTVCancel, "KTV hủy"],
]);

export enum StaffRequestType {
	Waiting = 1,
	Accept = 2,
}

export const StaffTypeRequestMap = new Map([
	[StaffRequestType.Waiting, "Thông tin"],
	[StaffRequestType.Accept, "Dịch vụ"],
]);

export default class Staff implements IModel<Staff> {
	id?: number | null;
	name?: string | null;
	active?: boolean | null;
	birthDay?: string | null;
	userId?: number | null;
	gender?: boolean | null;
	online?: boolean | null;
	description?: string | null;
	busy?: boolean | null;
	rateAvg?: number | null;
	countReview?: number | null;
	workAtStore?: boolean | null;
	workAtHome?: boolean | null;
	createdAt?: Date | null;
	user?: UserGlow | null;
	province?: StaffAddressPath | null;
	district?: StaffAddressPath | null;
	services?: Services | null;
	reviews?: Review[] | null;
	validateStatus?: ValidateStatusType | null;
	store?: Store | null;
	minPrice?: number | null;
	maxPrice?: number | null;
	breadcrumb?: BreadCrumb[] | null;
	pageTitle?: string | null;
	hashTag?: BreadCrumb[] | null;
	images?: Image[] | null;
	serviceTree?: ServiceTree[] | null;
	url?: string | null;
	type?: number;
	workTime?: string;
	reviewProps?: ReviewProps[];
	address?: string;
	serviceGroups?: string[];
	identifyCard?: string;
	glowCareStatus?: CareType | null;
	certificateImages?: string[];
	punishmentType?: number;
	punishEndAt?: Date | null;
	nearestTitle?: string | null;
	labelData?: LabelData | null;
	dateOfIssueIdentify?: string | null;
	placeOfIssueIdentify?: string | null;
	identifyAddress?: string | null;
	taxId?: string | null;
	identifyImages?: string[] | null;
	storeMembers?: Staff[] | null;
	socialMedia?: SocialMediaType | null;
	orderCancelRate?: number | null;
	promotionalVideos?: YoutubeEmbedUrl[] | null;
	lat?: number | null;
	long?: number | null;
	identifyName?: string;
	tags?: Tags[] | null;
	isOpen?: boolean;

	constructor(input?: Partial<Staff>) {
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
		this.services = input?.services;
		this.reviews = input?.reviews || [];
		this.validateStatus = input?.validateStatus;
		this.store = input?.store;
		this.minPrice = input?.minPrice;
		this.maxPrice = input?.maxPrice;
		this.breadcrumb = input?.breadcrumb;
		this.pageTitle = input?.pageTitle;
		this.hashTag = input?.hashTag;
		this.images = input?.images;
		this.serviceTree = input?.serviceTree;
		this.url = input?.url;
		this.type = input?.type;
		this.workTime = input?.workTime;
		this.reviewProps = input?.reviewProps;
		this.address = input?.address;
		this.serviceGroups = input?.serviceGroups;
		this.identifyCard = input?.identifyCard;
		this.glowCareStatus = input?.glowCareStatus;
		this.certificateImages = input?.certificateImages;
		this.punishmentType = input?.punishmentType;
		this.punishEndAt = input?.punishEndAt;
		this.nearestTitle = input?.nearestTitle;
		this.labelData = input?.labelData;
		this.dateOfIssueIdentify = input?.dateOfIssueIdentify;
		this.placeOfIssueIdentify = input?.placeOfIssueIdentify;
		this.identifyAddress = input?.identifyAddress;
		this.taxId = input?.taxId;
		this.identifyImages = input?.identifyImages || [];
		this.storeMembers = input?.storeMembers || [];
		this.socialMedia = input?.socialMedia;
		this.orderCancelRate = input?.orderCancelRate;
		this.promotionalVideos = input?.promotionalVideos || [];
		this.lat = input?.lat;
		this.long = input?.long;
		this.identifyName = input?.identifyName;
		this.tags = input?.tags;
		this.isOpen = input?.isOpen;
	}

	parse(json?: any): Staff {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			name: json.name,
			active: json.active,
			birthDay: json.birthDay,
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
			services: json.services,
			createdAt: json.createdAt && new Date(json.createdAt),
			reviews: json.reviews && json.reviews.map((reviewData: any) => new Review().parse(reviewData)),
			validateStatus: json.validateStatus,
			store: json.store,
			minPrice: json.minPrice,
			maxPrice: json.maxPrice,
			breadcrumb: json.breadcrumb,
			pageTitle: json.pageTitle,
			hashTag: json.hashTag,
			images: json.images,
			serviceTree: json.serviceTree,
			url: json.url,
			type: json.type,
			workTime: json.workTime,
			reviewProps: json.reviewProps,
			address: json.address,
			identifyCard: json.identifyCard,
			glowCareStatus: json.glowCareStatus,
			certificateImages: json.certificateImages,
			punishmentType: json.punishmentType,
			punishEndAt: json.punishEndAt,
			nearestTitle: json.nearestTitle,
			storeMembers: [...(json.storeMembers || [])],
			socialMedia: json.socialMedia,
			orderCancelRate: json.orderCancelRate,
			promotionalVideos:json.promotionalVideos,
			lat: json.coordinate?.coordinates?.length > 1 ? json.coordinate?.coordinates[1] : null,
			long: json.coordinate?.coordinates?.length > 0 ? json.coordinate?.coordinates[0] : null,
			identifyName: json.identifyName,
			tags: json.tags,
			isOpen: json.isOpen,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Staff().parse(item));
	}

	clone(): Staff {
		return new Staff({
			...this,
		});
	}
}

export class TopStaffParam {
	active?: boolean;
	workAtHome?: boolean;
	forceRandom?: boolean;
	orMultipleServiceGroups?: string | null | undefined;
	skipQuickForward?: boolean;
	types?: string | null | undefined;
	keyword?: string | null | undefined;

	constructor(input?: Partial<TopStaffParam>) {
		this.active = input?.active || false;
		this.workAtHome = input?.workAtHome || false;
		this.forceRandom = input?.forceRandom || false;
		this.orMultipleServiceGroups = input?.orMultipleServiceGroups || null;
		this.skipQuickForward = input?.skipQuickForward || false;
		this.types = input?.types || null;
		this.keyword = input?.keyword || null;
	}

	clone(): TopStaffParam {
		return new TopStaffParam({
			active: this.active,
			workAtHome: this.workAtHome,
			forceRandom: this.forceRandom,
			orMultipleServiceGroups: this.orMultipleServiceGroups,
			skipQuickForward: this.skipQuickForward,
			types: this.types,
			keyword: this.keyword,
		});
	}
}

export class BreadCrumb {
	label?: string | null | undefined;
	url?: string | null | undefined;

	constructor(input?: Partial<BreadCrumb>) {
		this.label = input?.label || "";
		this.url = input?.url || "";
	}

	parse(json?: any): BreadCrumb {
		if (!json) return this;

		Object.assign(this, {
			...json,
			label: json.label,
			url: json.url,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new BreadCrumb().parse(item));
	}

	clone(): BreadCrumb {
		return new BreadCrumb({
			label: this.label,
			url: this.url,
		});
	}
}

export class ServiceTree {
	name?: string | null | undefined;
	id?: string | null | undefined;
	serviceGroup?: string | null | undefined;
	staffService?: StaffService[] | null | undefined;
	isHead?: boolean | false;
	serviceGroupData?: string | null | undefined;
	staffServicePrices?: StaffServicePrice[] | null | undefined;

	constructor(input?: Partial<ServiceTree>) {
		this.name = input?.name || "";
		this.id = input?.id || "";
		this.serviceGroup = input?.serviceGroup || "";
		this.staffService = input?.staffService || null;
		this.isHead = input?.isHead || false;
		this.serviceGroupData = input?.serviceGroupData || "";
		this.staffServicePrices = input?.staffServicePrices || [];
	}

	parse(json?: any): ServiceTree {
		if (!json) return this;

		Object.assign(this, {
			...json,
			name: json.name,
			id: json.id,
			serviceGroup: json.serviceGroup,
			staffService: json.staffService,
			isHead: json.isHead,
			serviceGroupData: json.serviceGroupData,
			staffServicePrices: json.staffServicePrices,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new ServiceTree().parse(item));
	}

	clone(): ServiceTree {
		return new ServiceTree({
			...this,
		});
	}
}

export class ReviewProps {
	name?: string | null | undefined;
	id?: string | null | undefined;
	shortName?: string | null | undefined;
	image?: string | null | undefined;
	transName?: string | false;
	rateReview?: number | null | undefined;
	type?: number;

	constructor(input?: Partial<ReviewProps>) {
		this.name = input?.name || "";
		this.id = input?.id || "";
		this.shortName = input?.shortName || "";
		this.image = input?.image || null;
		this.transName = input?.transName || false;
		this.rateReview = input?.rateReview;
		this.type = input?.type;
	}

	parse(json?: any): ReviewProps {
		if (!json) return this;

		Object.assign(this, {
			...json,
			name: json.name,
			id: json.id,
			shortName: json.shortName,
			image: json.image,
			transName: json.transName,
			rateReview: json.rateReview,
			type: json.type,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new ReviewProps().parse(item));
	}

	clone(): ReviewProps {
		return new ReviewProps({
			...this,
		});
	}
}

export class LabelData {
	commune?: StaffAddressPath | null | undefined;
	district?: StaffAddressPath | null | undefined;
	province?: StaffAddressPath | null | undefined;
	apartment?: StaffAddressPath | null | undefined;
	url?: string | null | undefined;

	constructor(input?: Partial<LabelData>) {
		this.commune = input?.commune;
		this.district = input?.district;
		this.province = input?.province;
		this.url = input?.url || "";
	}

	parse(json?: any): LabelData {
		if (!json) return this;

		Object.assign(this, {
			...json,
			commune: json.commune,
			district: json.district,
			province: json.province,
			url: json.url,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new LabelData().parse(item));
	}

	clone(): LabelData {
		return new LabelData({
			url: this.url,
		});
	}
}

export class SocialMediaType {
	facebook?: string | null | undefined;
	instagram?: string | null | undefined;
	tiktok?: string | null | undefined;
	website?: string | null | undefined;
	youtube?: string | null | undefined;

	constructor(input?: Partial<SocialMediaType>) {
		this.facebook = input?.facebook;
		this.instagram = input?.instagram;
		this.tiktok = input?.tiktok;
		this.website = input?.website;
		this.youtube = input?.youtube;
	}

	parse(json?: any): SocialMediaType {
		if (!json) return this;

		Object.assign(this, {
			...json,
			facebook: json.facebook,
			instagram: json.instagram,
			tiktok: json.tiktok,
			website: json.website,
			youtube: json.youtube,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new SocialMediaType().parse(item));
	}

	clone(): SocialMediaType {
		return new SocialMediaType({});
	}
}


export class Tags {
	id: number;
	name?: string | null | undefined;
	link?: string | null | undefined;
	serviceGroup?: string | null | undefined;
	type?: number | null | undefined;
	active?: boolean;
	foreignLink?: ForeignLink[];
	createdAt?: Date | null;
	updatedAt?: Date | null;
	filterUrl?: string | null | undefined;


	constructor(input?: Partial<Tags>) {
		this.id = input?.id||0;
		this.name = input?.name;
		this.link = input?.link;
		this.serviceGroup = input?.serviceGroup;
		this.type = input?.type;
		this.active = input?.active;
		this.foreignLink = input?.foreignLink;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.filterUrl = input?.filterUrl;
	}

	parse(json?: any): Tags {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Tags().parse(item));
	}

	clone(): Tags {
		return new Tags({});
	}
}

export class StaffRequest {
	id: number;
	fromUserId?: string | null | undefined;
	referenceId?: string | null | undefined;
	type?: string | null | undefined;
	status?: number | null | undefined;
	staff?: Staff[] | null | undefined;
	createdAt?: Date | null;
	updatedAt?: Date | null;


	constructor(input?: Partial<StaffRequest>) {
		this.id = input?.id||0;
		this.fromUserId = input?.fromUserId;
		this.referenceId = input?.referenceId;
		this.type = input?.type;
		this.status = input?.status;
		this.staff = input?.staff;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
	}

	parse(json?: any): StaffRequest {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new StaffRequest().parse(item));
	}

	clone(): StaffRequest {
		return new StaffRequest({});
	}
}



interface ForeignLink {
	lang: string;
	link: string;
  }