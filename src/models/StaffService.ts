import IModel from "./IModel";
import Service, { Image } from "./Service";
import Staff from "./Staff";

export default class StaffService implements IModel<StaffService> {
	experienceYears?: number | null;
	images?: Image[];
	prices?: PricesService[] | null;
	service?: Service | undefined;
	id?: number;
	name?: string;
	description?: string;
	staff?: Staff;
	unit?: string;
	url?: string;
	displayReducedValuePercentage?: number | null;
	staffService?: StaffService;
	displayOriginalPrice?: number | null;
	displayReducedAmount?: number | null;
	displayReducedPercentage?: number | null;
	displayReducedPrice?: number | null;
	displayReducedValue?: number | null;
	displayCashback?: number;

	constructor(input?: Partial<StaffService>) {
		this.experienceYears = input?.experienceYears;
		this.images = input?.images;
		this.prices = input?.prices;
		this.service = input?.service;
		this.id = input?.id;
		this.description = input?.description;
		this.staff = input?.staff;
		this.unit = input?.unit;
		this.url = input?.url;
		this.displayReducedValuePercentage = input?.displayReducedValuePercentage;
		this.staffService = input?.staffService;
		this.displayOriginalPrice = input?.displayOriginalPrice;
		this.displayReducedAmount = input?.displayReducedAmount;
		this.displayReducedPercentage = input?.displayReducedPercentage;
		this.displayReducedPrice = input?.displayReducedPrice;
		this.displayReducedValue = input?.displayReducedValue;
		this.displayCashback = input?.displayCashback;
	}

	parse(json?: any): StaffService {
		if (!json) return this;

		Object.assign(this, {
			...json,
			experienceYears: json.experienceYears,
			images: json.images,
			prices: json.prices,
			service: json.service,
			id: json.id,
			description: json.description,
			staff: json.staff,
			unit: json.unit,
			url: json.url,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new StaffService().parse(item));
	}

	clone(): StaffService {
		return new StaffService({
			...this,
		});
	}
}

export class PricesService implements IModel<PricesService> {
	id?: number | null;
	unit?: Image[];
	price?: number | null;
	serviceStaffId?: number | undefined;
	staffId?: number;
	serviceGroup?: number;
	programAssignType?: number;
	programId?: number;
	isProgramActive?: number;
	reducedPercentage?: number;
	reducedAmount?: number;
	reducedValue?: number;
	reducedPrice?: number;
	createdAt?: number;
	updatedAt?: number;
	program?: number;
	isProgramAssigned?: number;
	displayReducedPrice?: number;
	displayOriginalPrice?: number;
	displayReducedValue?: number;

	constructor(input?: Partial<PricesService>) {
		this.id = input?.id;
		this.unit = input?.unit;
		this.price = input?.price;
		this.serviceStaffId = input?.serviceStaffId;
		this.staffId = input?.staffId;
		this.serviceGroup = input?.serviceGroup;
		this.programAssignType = input?.programAssignType;
		this.programId = input?.programId;
		this.isProgramActive = input?.isProgramActive;
		this.reducedPercentage = input?.reducedPercentage;
		this.reducedAmount = input?.reducedAmount;
		this.reducedValue = input?.reducedValue;
		this.reducedPrice = input?.reducedPrice;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.program = input?.program;
		this.isProgramAssigned = input?.isProgramAssigned;
		this.displayReducedPrice = input?.displayReducedPrice;
		this.displayReducedValue = input?.displayReducedValue;
		this.displayOriginalPrice = input?.displayOriginalPrice;
	}

	parse(json?: any): PricesService {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new PricesService().parse(item));
	}

	clone(): PricesService {
		return new PricesService({
			...this,
		});
	}
}
