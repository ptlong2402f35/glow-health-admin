import IModel from "./IModel";
import Store from "./Store";
import User from "./User";

export enum StatusType {
	APPROVED = 1,
	PENDING = 2,
}
export const StatusTypeMap = new Map([
	[StatusType.APPROVED, "Hoạt động"],
	[StatusType.PENDING, "Ngừng hoạt động"],
]);
export enum PromotionType {
	Glow = 1,
	Spa = 2,
}
export const PromotionTypeMap = new Map([
	[PromotionType.Glow, "Glow"],
	[PromotionType.Spa, "Spa"],
]);
export enum hasDurationType {
	Limited = 1,
	UnLimited = 0,
}
export const hasDurationTypeMap = new Map([
	[hasDurationType.Limited, "Có thời hạn"],
	[hasDurationType.UnLimited, "Không thời hạn"],
]);

export default class Promotions implements IModel<Promotions> {
	id?: number | null;
	name?: string | null;
	type?: PromotionType | null;
	status?: number | null;
	percentage?: number | null;
	amount?: number | null;
	startAt?: Date | null;
	expireAt?: Date | null;
	durationType?: number | null;
	cycleType?: number | null;
	cycleStartAt?: Date | null;
	cycleEndAt?: Date | null;
	totalQuantity?: number | null;
	restQuantity?: number | null;
	isActive?: boolean | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	isDisplayed?: boolean | null;
	store?: Store | null;
	creatorUser?: User | null;
	note?: string | null;

	constructor(input?: Partial<Promotions>) {
		this.id = input?.id;
		this.name = input?.name;
		this.type = input?.type;
		this.status = input?.status;
		this.percentage = input?.percentage;
		this.amount = input?.amount;
		this.startAt = input?.startAt;
		this.expireAt = input?.expireAt;
		this.durationType = input?.durationType;
		this.cycleType = input?.cycleType;
		this.cycleStartAt = input?.cycleStartAt;
		this.cycleEndAt = input?.cycleEndAt;
		this.totalQuantity = input?.totalQuantity;
		this.restQuantity = input?.restQuantity;
		this.isActive = input?.isActive;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.isDisplayed = input?.isDisplayed;
		this.store = input?.store;
		this.creatorUser = input?.creatorUser;
		this.note = input?.note;
	}

	parse(json?: any): Promotions {
		if (!json) return this;

		Object.assign(this, {
			...json,
			createdAt: json.createdAt && new Date(json.createdAt),
		});

		return this;
	}

	clone(): Promotions {
		return new Promotions({
			...this,
		});
	}
}
