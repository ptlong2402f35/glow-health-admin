import { ImageInputData, convertUrlsToImageDatas } from "../views/hooks/useImageUploadInput";
import BookingService from "./BookingService";
import IModel from "./IModel";
import { OrderStatusv2 } from "./Orderv2";
import Staff, { BreadCrumb } from "./Staff";
import StaffService from "./StaffService";
export enum StatusType {
	APPROVED = "true",
	PENDING = "false",
}
export const StatusTypeMap = new Map([
	[StatusType.APPROVED, "Hoạt động"],
	[StatusType.PENDING, "Ngừng hoạt động"],
]);

export enum ActiveType {
	ACCTIVE = "true",
	UNACCTIVE = "false",
}
export const ActiveTypeMap = new Map([
	[ActiveType.ACCTIVE, "Hoạt động"],
	[ActiveType.UNACCTIVE, "Ngừng hoạt động"],
]);

export enum ScopeType {
	IndividualStaff = 1,
	Universal = 2,
	StationStaff = 3,
}
export const ScopeTypeMap = new Map([
	[ScopeType.Universal, "Dành cho KTV tại nhà và cơ sở spa"],
	[ScopeType.IndividualStaff, "Dành cho KTV tại nhà"],
	[ScopeType.StationStaff, "Dành cho cơ sở spa"],
]);

export default class Service implements IModel<Service> {
	id?: number | null;
	name?: string | null;
	code?: string | null;
	price?: string | null;
	imageUrl?: string | null;
	active?: boolean | null | undefined;
	status?: StatusType | null | undefined;
	description?: string | null;
	unit?: string | null;
	createdByUserId?: number | null;
	handleByUserId?: number | null;
	originPrice?: number | null;
	sortIndex?: number | null;
	serviceGroup?: ServiceGroupAll | null | undefined;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	createdByUser?: CreatedByUser;
	handleByUser?: HandleByUser;
	images: Image[] | null | undefined;
	scope?: number | null;
	displayReducedValuePercentage?: number | null;
	staffService?: StaffService;
	displayOriginalPrice?: number | null;
	displayReducedAmount?: number | null;
	displayReducedPercentage?: number | null;
	displayReducedPrice?: number | null;
	displayReducedValue?: number | null;
	displayCashback?: number;
	url?: string;
	staffId?: number;
	hint?: HintProduct[] | null;

	constructor(input?: Partial<Service>) {
		this.id = input?.id;
		this.name = input?.name;
		this.code = input?.code;
		this.price = input?.price;
		this.imageUrl = input?.imageUrl;
		this.active = input?.active;
		this.status = input?.status;
		this.description = input?.description;
		this.unit = input?.unit;
		this.createdByUserId = input?.createdByUserId;
		this.handleByUserId = input?.handleByUserId;
		this.originPrice = input?.originPrice;
		this.sortIndex = input?.sortIndex;
		this.serviceGroup = input?.serviceGroup;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.createdByUser = input?.createdByUser;
		this.handleByUser = input?.handleByUser;
		this.images = input?.images;
		this.scope = input?.scope;
		this.displayReducedValuePercentage = input?.displayReducedValuePercentage;
		this.staffService = input?.staffService;
		this.displayOriginalPrice = input?.displayOriginalPrice;
		this.displayReducedAmount = input?.displayReducedAmount;
		this.displayReducedPercentage = input?.displayReducedPercentage;
		this.displayReducedPrice = input?.displayReducedPrice;
		this.displayReducedValue = input?.displayReducedValue;
		this.displayCashback = input?.displayCashback;
		this.url = input?.url;
		this.staffId = input?.staffId;
	}

	parse(json?: any): Service {
		if (!json) return this;

		Object.assign(this, {
			...json,
			createdAt: json.createdAt && new Date(json.createdAt),
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Service().parse(item));
	}

	clone(): Service {
		return new Service({
			...this,
		});
	}
}

export class CreatedByUser implements IModel<CreatedByUser> {
	id?: number | null;
	userName?: string | null;
	email?: string | null;

	constructor(input?: Partial<CreatedByUser>) {
		this.id = input?.id;
		this.userName = input?.userName;
		this.email = input?.email;
	}

	parse(json?: any): CreatedByUser {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	clone(): CreatedByUser {
		return new CreatedByUser({
			...this,
		});
	}
}

export class HandleByUser implements IModel<HandleByUser> {
	id?: number | null;
	userName?: string | null;
	email?: string | null;

	constructor(input?: Partial<HandleByUser>) {
		this.id = input?.id;
		this.userName = input?.userName;
		this.email = input?.email;
	}

	parse(json?: any): HandleByUser {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	clone(): HandleByUser {
		return new HandleByUser({
			...this,
		});
	}
}
export class ServiceGroupAll implements IModel<ServiceGroupAll> {
	serviceGroup?: ServiceGroup | null;
	service?: Service | null;

	constructor(input?: Partial<ServiceGroupAll>) {
		this.serviceGroup = input?.serviceGroup ? new ServiceGroup(input.serviceGroup) : null;
		this.service = input?.service ? new Service(input.service) : null;
	}

	parse(json?: any): ServiceGroupAll {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	clone(): ServiceGroupAll {
		return new ServiceGroupAll({
			...this,
		});
	}
}

export class ServiceGroup {
	name?: string | null | undefined;
	image?: string | null | undefined;
	imageLighter?: string | null | undefined;
	transName?: string | null | undefined;
	url?: string | null;

	constructor(input?: Partial<ServiceGroup>) {
		this.name = input?.name || null;
		this.image = input?.image || null;
		this.imageLighter = input?.imageLighter || null;
		this.transName = input?.transName || null;
		this.url = input?.url || null;
	}

	parse(json?: any): ServiceGroup {
		if (!json) return this;

		Object.assign(this, {
			...json,
			name: json.name,
			image: json.image,
			imageLighter: json.imageLighter,
			transName: json.transName,
			url: json.url,
		});

		return this;
	}
	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new ServiceGroup().parse(item));
	}

	clone(): ServiceGroup {
		return new ServiceGroup({
			name: this.name,
			image: this.image,
			imageLighter: this.imageLighter,
			transName: this.transName,
			url: this.url,
		});
	}
}

export class Image {
	createdAt?: Date | null | undefined;
	destination?: string | null | undefined;
	encoding?: string | null | undefined;
	fieldname?: string | null | undefined;
	filename?: string | null | undefined;
	id?: number | null | undefined;
	localOrder?: string | null | undefined;
	mimetype?: string | null | undefined;
	model?: string | null | undefined;
	originalname?: string | null | undefined;
	path?: string | null | undefined;
	referenceId?: number | null | undefined;
	size?: number | null | undefined;
	updatedAt?: Date | null | undefined;
	isVideo?: boolean | null | undefined;
	urlVideo?: string | null | undefined;
	thumbnailPath?: string | null | undefined;

	constructor(input?: Partial<Image>) {
		this.createdAt = input?.createdAt || null;
		this.destination = input?.destination || null;
		this.encoding = input?.encoding || null;
		this.fieldname = input?.fieldname || null;
		this.filename = input?.filename || null;
		this.id = input?.id || null;
		this.localOrder = input?.localOrder || null;
		this.mimetype = input?.mimetype || null;
		this.model = input?.model || null;
		this.originalname = input?.originalname || null;
		this.path = input?.path || null;
		this.referenceId = input?.referenceId || null;
		this.size = input?.size || null;
		this.updatedAt = input?.updatedAt || null;
		this.isVideo = input?.isVideo || null;
		this.urlVideo = input?.urlVideo || null;
		this.thumbnailPath = input?.thumbnailPath || null;
	}

	clone(): Image {
		return new Image({
			createdAt: this.createdAt,
			destination: this.destination,
			encoding: this.encoding,
			fieldname: this.fieldname,
			filename: this.filename,
			id: this.id,
			localOrder: this.localOrder,
			mimetype: this.mimetype,
			model: this.model,
			originalname: this.originalname,
			path: this.path,
			referenceId: this.referenceId,
			size: this.size,
			updatedAt: this.updatedAt,
			isVideo: this.isVideo,
			urlVideo: this.urlVideo,
			thumbnailPath: this.thumbnailPath,
		});
	}
}

export class TopService {
	id?: string | null | undefined;
	label?: string | null | undefined;
	params?: TopServiceParam | null | undefined;
	link?: string | null | undefined;

	constructor(input?: Partial<TopService>) {
		this.id = input?.id || null;
		this.label = input?.label || null;
		this.params = input?.params || null;
	}
	parse(json?: any): TopService {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}
	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new TopService().parse(item));
	}
	clone(): TopService {
		return new TopService({
			id: this.id,
			label: this.label,
			params: this.params,
		});
	}
}

export class TopServiceParam {
	coordinateDistance?: string | null | undefined;
	isProgramActive?: boolean;
	maxPrice?: string | null | undefined;
	minPrice?: string | null | undefined;
	multipleServiceGroups?: string | null | undefined;
	multipleServiceIds?: string | null | undefined;
	reducedMaxPrice?: string | null | undefined;
	reducedMinPrice?: string | null | undefined;
	sortDistance?: boolean;
	sortDistancePriority?: number | null | undefined;
	sortReducedAmount?: string | null | undefined;
	sortReducedAmountPriority?: string | null | undefined;
	sortReducedPercentage?: string | null | undefined;
	sortReducedPercentagePriority?: string | null | undefined;
	sortReducedPrice?: boolean;
	sortReducedPricePriority?: number | null | undefined;
	sortReducedValue?: string | null | undefined;
	sortReducedValuePriority?: string | null | undefined;
	staffType?: number | null | undefined;

	constructor(input?: Partial<TopServiceParam>) {
		this.coordinateDistance = input?.coordinateDistance || null;
		this.isProgramActive = input?.isProgramActive || false;
		this.maxPrice = input?.maxPrice || null;
		this.minPrice = input?.minPrice || null;
		this.multipleServiceGroups = input?.multipleServiceGroups || null;
		this.multipleServiceIds = input?.multipleServiceIds || null;
		this.reducedMaxPrice = input?.reducedMaxPrice || null;
		this.reducedMinPrice = input?.reducedMinPrice || null;
		this.sortDistance = input?.sortDistance || false;
		this.sortDistancePriority = input?.sortDistancePriority || null;
		this.sortReducedAmount = input?.sortReducedAmount || null;
		this.sortReducedAmountPriority = input?.sortReducedAmountPriority || null;
		this.sortReducedPercentage = input?.sortReducedPercentage || null;
		this.sortReducedPercentagePriority = input?.sortReducedPercentagePriority || null;
		this.sortReducedPrice = input?.sortReducedPrice || false;
		this.sortReducedPricePriority = input?.sortReducedPricePriority || null;
		this.sortReducedValue = input?.sortReducedValue || null;
		this.sortReducedValuePriority = input?.sortReducedValuePriority || null;
		this.staffType = input?.staffType || null;
	}

	clone(): TopServiceParam {
		return new TopServiceParam({
			coordinateDistance: this.coordinateDistance,
			isProgramActive: this.isProgramActive,
			maxPrice: this.maxPrice,
			minPrice: this.minPrice,
			multipleServiceGroups: this.multipleServiceGroups,
			multipleServiceIds: this.multipleServiceIds,
			reducedMaxPrice: this.reducedMaxPrice,
			reducedMinPrice: this.reducedMinPrice,
			sortDistance: this.sortDistance,
			sortDistancePriority: this.sortDistancePriority,
			sortReducedAmount: this.sortReducedAmount,
			sortReducedAmountPriority: this.sortReducedAmountPriority,
			sortReducedPercentage: this.sortReducedPercentage,
			sortReducedPercentagePriority: this.sortReducedPercentagePriority,
			sortReducedPrice: this.sortReducedPrice,
			sortReducedPricePriority: this.sortReducedPricePriority,
			sortReducedValue: this.sortReducedValue,
			sortReducedValuePriority: this.sortReducedValuePriority,
			staffType: this.staffType,
		});
	}
}

export class StaffServiceHome implements IModel<StaffServiceHome> {
	displayOriginalPrice?: number | null;
	displayReducedAmount?: number | null;
	displayReducedPercentage?: number | null;
	displayReducedPrice?: number | null;
	displayReducedValue?: number | null;
	displayReducedValuePercentage?: number | null;
	id?: string;
	name?: string;
	prices?: number | null;
	program?: string;
	service?: Service | null;
	serviceId?: number;
	staff?: Staff | null;
	staffId?: string;
	updatedAt?: Date | null;
	createdAt?: Date | null;
	staffService?: string;
	url?: string;
	images?: Image[];
	description?: string;
	countReview?: number;

	constructor(input?: Partial<StaffServiceHome>) {
		this.displayOriginalPrice = input?.displayOriginalPrice;
		this.displayReducedAmount = input?.displayReducedAmount;
		this.displayReducedPercentage = input?.displayReducedPercentage;
		this.displayReducedPrice = input?.displayReducedPrice;
		this.displayReducedValue = input?.displayReducedValue;
		this.displayReducedValuePercentage = input?.displayReducedValuePercentage;
		this.id = input?.id;
		this.name = input?.name;
		this.prices = input?.prices;
		this.program = input?.program;
		this.service = input?.service;
		this.serviceId = input?.serviceId;
		this.staff = input?.staff;
		this.staffId = input?.staffId;
		this.updatedAt = input?.updatedAt;
		this.createdAt = input?.createdAt;
		this.staffService = input?.staffService;
		this.url = input?.url;
		this.images = input?.images;
		this.description = input?.description;
		this.countReview = input?.countReview;
	}

	parse(json?: any): StaffServiceHome {
		if (!json) return this;

		Object.assign(this, {
			...json,
			displayOriginalPrice: json.displayOriginalPrice,
			displayReducedAmount: json.displayReducedAmount,
			displayReducedPercentage: json.displayReducedPercentage,
			displayReducedPrice: json.displayReducedPrice,
			displayReducedValue: json.displayReducedValue,
			displayReducedValuePercentage: json.displayReducedValuePercentage,
			id: json.id,
			name: json.name,
			prices: json.prices,
			program: json.program,
			service: json.service,
			serviceId: json.serviceId,
			staff: json.staff,
			staffId: json.staffId,
			updatedAt: json.updatedAt,
			createdAt: json.createdAt,
			staffService: json.staffService,
			url: json.url,
			images: json.images,
			description: json.description,
			countReview: json.countReview,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new StaffServiceHome().parse(item));
	}

	clone(): StaffServiceHome {
		return new StaffServiceHome({
			...this,
		});
	}
}

export class StaffServicePrice implements IModel<StaffServicePrice> {
	displayOriginalPrice?: number | null;
	displayReducedAmount?: number | null;
	displayReducedPercentage?: number | null;
	displayReducedPrice?: number | null;
	displayReducedValue?: number | null;
	displayReducedValuePercentage?: number | null;
	id?: string;
	name?: string;
	prices?: number | null;
	program?: string;
	service?: Service | null;
	serviceId?: number;
	staff?: Staff | null;
	staffId?: number;
	updatedAt?: Date | null;
	createdAt?: Date | null;
	staffService?: StaffServiceHome;
	unit?: string;
	displayCashback?: number;
	breadcrumb?: BreadCrumb[] | null;
	pageTitle?: string;
	displayExpiredAt?: Date;
	url?: string;
	serviceStaffId?: string;
	serviceGroup?: string;
	booking?: BookingService[];
	totalPay?: string;
	expiredAt?: Date;
	cashback?: number;
	status?: OrderStatusv2;

	constructor(input?: Partial<StaffServicePrice>) {
		this.displayOriginalPrice = input?.displayOriginalPrice;
		this.displayReducedAmount = input?.displayReducedAmount;
		this.displayReducedPercentage = input?.displayReducedPercentage;
		this.displayReducedPrice = input?.displayReducedPrice;
		this.displayReducedValue = input?.displayReducedValue;
		this.displayReducedValuePercentage = input?.displayReducedValuePercentage;
		this.id = input?.id;
		this.name = input?.name;
		this.prices = input?.prices;
		this.program = input?.program;
		this.service = input?.service;
		this.serviceId = input?.serviceId;
		this.staff = input?.staff;
		this.staffId = input?.staffId;
		this.updatedAt = input?.updatedAt;
		this.createdAt = input?.createdAt;
		this.staffService = input?.staffService;
		this.unit = input?.unit;
		this.displayCashback = input?.displayCashback;
		this.breadcrumb = input?.breadcrumb;
		this.pageTitle = input?.pageTitle;
		this.displayExpiredAt = input?.displayExpiredAt;
		this.url = input?.url;
		this.serviceStaffId = input?.serviceStaffId;
		this.serviceGroup = input?.serviceGroup;
		this.booking = input?.booking;
		this.totalPay = input?.totalPay;
		this.expiredAt = input?.expiredAt;
		this.cashback = input?.cashback;
		this.status = input?.status;
	}

	parse(json?: any): StaffServicePrice {
		if (!json) return this;

		Object.assign(this, {
			...json,
			displayOriginalPrice: json.displayOriginalPrice,
			displayReducedAmount: json.displayReducedAmount,
			displayReducedPercentage: json.displayReducedPercentage,
			displayReducedPrice: json.displayReducedPrice,
			displayReducedValue: json.displayReducedValue,
			displayReducedValuePercentage: json.displayReducedValuePercentage,
			id: json.id,
			name: json.name,
			prices: json.prices,
			program: json.program,
			service: json.service,
			serviceId: json.serviceId,
			staff: json.staff,
			staffId: json.staffId,
			updatedAt: json.updatedAt,
			createdAt: json.createdAt,
			staffService: json.staffService,
			unit: json.unit,
			displayCashback: json.displayCashback,
			breadcrumb: json.breadcrumb,
			pageTitle: json.pageTitle,
			displayExpiredAt: json.displayExpiredAt,
			url: json.url,
			serviceGroup: json.serviceGroup,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new StaffServicePrice().parse(item));
	}

	clone(): StaffServicePrice {
		return new StaffServicePrice({
			...this,
		});
	}
}

export class HintProduct implements IModel<HintProduct> {
	id?: number | null;
	price?: number | null;
	uneditable?: boolean | null;
	unit?: string | null;
	itemId?: number;

	constructor(input?: Partial<HintProduct>) {
		this.id = input?.id;
		this.price = input?.price;
		this.uneditable = input?.uneditable;
		this.unit = input?.unit;
		this.itemId = input?.itemId;
	}

	parse(json?: any): HintProduct {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	clone(): HintProduct {
		return new HintProduct({
			...this,
		});
	}
}
