import { NullLiteral } from "typescript";
import IModel from "./IModel";

export enum StatusType {
	ACCTIVE = 1,
	UNACCTIVE = 2,
}
export const StatusTypeMap = new Map([
	[StatusType.ACCTIVE, "Kích hoạt"],
	[StatusType.UNACCTIVE, "Ngừng kích hoạt"],
]);

export default class Store implements IModel<Store> {
	id?: number | null;
	status?: number | null;
	name?: string | null;
	walletId?: number | null;
	walletOwnerId?: number | null;
	storeCoordinate?: StoreCoordinate | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	walletOwner?: WalletOwner | null;
	orderCancelRate?: number | null;

	constructor(input?: Partial<Store>) {
		this.id = input?.id;
		this.status = input?.status;
		this.name = input?.name;
		this.walletId = input?.walletId;
		this.walletOwnerId = input?.walletOwnerId;
		this.storeCoordinate = input?.storeCoordinate;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.orderCancelRate = input?.orderCancelRate;
	}

	parse(json?: any): Store {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			status: json.status,
			name: json.name,
			walletId: json.walletId,
			walletOwnerId: json.walletOwnerId,
			storeCoordinate: json.storeCoordinate,
			createdAt: json.createdAt && new Date(json.createdAt),
			updatedAt: json.updatedAt && new Date(json.updatedAt),
			WalletOwner: json.WalletOwner,
			orderCancelRate: json.orderCancelRate,
		});

		return this;
	}

	parseFromDetailData(json?: any): Store {
		return this.parse(json);
	}

	clone(): Store {
		return new Store({
			...this,
		});
	}
}

export class StoreCoordinate implements IModel<StoreCoordinate> {
	type?: string | null;
	coordinates?: [number, number] | null;

	constructor(input?: Partial<StoreCoordinate>) {
		this.type = input?.type;
		this.coordinates = input?.coordinates;
	}

	parse(json?: any): StoreCoordinate {
		if (!json) return this;

		Object.assign(this, {
			...json,
			type: json.type,
			coordinates: json.coordinates,
		});

		return this;
	}

	parseFromDetailData(json?: any): StoreCoordinate {
		return this.parse(json);
	}

	clone(): StoreCoordinate {
		return new StoreCoordinate({
			...this,
		});
	}
}

export class WalletOwner implements IModel<WalletOwner> {
	phone?: string | null;

	constructor(input?: Partial<WalletOwner>) {
		this.phone = input?.phone;
	}

	parse(json?: any): WalletOwner {
		if (!json) return this;

		Object.assign(this, {
			...json,
			type: json.type,
			coordinates: json.coordinates,
		});

		return this;
	}

	parseFromDetailData(json?: any): WalletOwner {
		return this.parse(json);
	}

	clone(): WalletOwner {
		return new WalletOwner({
			...this,
		});
	}
}
