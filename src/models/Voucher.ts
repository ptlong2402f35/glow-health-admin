import IModel from "./IModel";

export enum VoucherType {
PhanTram = "phan_tram",
	GiaTien = "gia_tien",
}
export const VoucherTypeMap = new Map([
	[VoucherType.PhanTram, "Phần trăm"],
	[VoucherType.GiaTien, "Giá tiền"],
]);
export enum ConditionType {
	TichXanh = "2",
	TieuChuan = "1",
}
export const ConditionTypeMap = new Map([
	[ConditionType.TichXanh, "Cho tất cả"],
	[ConditionType.TieuChuan, "Đặc biệt"],
]);
export default class Voucher implements IModel<Voucher> {
	id?: number | null;
	active?: boolean | null;
	code?: string | null | undefined;
	maxReduce?: string | null;
	minValueOrder?: string | null;
	name?: string | null;
	quantity?: string | null;
	status?: string | null;
	type?: VoucherType | null;
	used?: string | null;
	value?: string | null;
	createdAt?: Date | null;
	startAt?: Date | null;
	endAt?: Date | null;
	conditionType?: ConditionType | null;	
	scope?: string | null;


	constructor(input?: Partial<Voucher>) {
		this.id = input?.id;
		this.active = input?.active;
		this.code = input?.code;
		this.maxReduce = input?.maxReduce;
		this.minValueOrder = input?.minValueOrder;
		this.name = input?.name;
		this.quantity = input?.quantity;
		this.status = input?.status;
		this.type = input?.type;
		this.used = input?.used;
		this.value = input?.value;
		this.createdAt = input?.createdAt;
		this.startAt = input?.startAt;
		this.endAt = input?.endAt;
		this.conditionType = input?.conditionType;
		this.scope = input?.scope;
	}

	parse(json?: any): Voucher {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			active: json.active,
			code: json.code,
			maxReduce: json.maxReduce,
			minValueOrder: json.minValueOrder,
			name: json.name,
			quantity: json.quantity,
			status: json.status,
			type: json.type,
			used: json.used,
			value: json.value,
			createdAt: json.createdAt && new Date(json.createdAt),
			startAt: json.startAt && new Date(json.startAt),
			endAt: json.endAt && new Date(json.endAt),
			conditionType: json.conditionType,
			scope: json.scope,
		});

		return this;
	}

	parseFromDetailData(json?: any): Voucher {
		return this.parse(json);
	}

	clone(): Voucher {
		return new Voucher({
			...this,
		});
	}
}
