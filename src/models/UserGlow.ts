import IModel from "./IModel";
import Orderv2 from "./Orderv2";
import Staff, { GenderType } from "./Staff";

export enum UserRole {
	Customer = 4,
	Owner = 2,
	Staff = 3,
	Admin = 1,
}

export const UserRoleLabelMap = new Map([
	[UserRole.Customer, "Khách hàng"],
	[UserRole.Owner, "Chủ cơ sở"],
	[UserRole.Staff, "KTV"],
	[UserRole.Admin, "Admin"],
]);

export enum Lang {
	VietNam = "vi",
	Korea = "kr",
	English = "en",
	Japan = "jp",
	China = "cn",
}

export const LangLabelMap = new Map([
	[Lang.VietNam, "Việt Nam"],
	[Lang.Korea, "Hàn Quốc"],
	[Lang.English, "Tiếng Anh"],
	[Lang.Japan, "Nhật Bản"],
	[Lang.China, "Trung Quốc"],
]);

export enum LangNumber {
	VietNam = "1",
	Korea = "2",
	English = "3",
	Japan = "4",
	China = "5",
}

export const LangNumberLabelMap = new Map([
	[LangNumber.VietNam, "Việt Nam"],
	[LangNumber.Korea, "한국"],
	[LangNumber.English, "Others"],
	[LangNumber.Japan, "日本"],
	[LangNumber.China, "中国"],
]);

export default class UserGlow implements IModel<UserGlow> {
	id?: number | null;
	userName?: string | null | undefined;
	email?: string | null;
	urlImage?: string | null;
	roleId?: number | null;
	active?: boolean | null;
	password?: string | null;
	phone?: string | null;
	numberFailedLogin?: number | null;
	totalMoney?: number | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	isBanned?: boolean | null;
	storeId?: number | null;
	storeOwner?: StoreOwner | null;
	gender?: GenderType | null;
	country?: Country | null;
	countryId?: string | null;
	staff?: Staff | null;
	punishmentType?: number | null;
	orderCancelRate?: number | null;
	thumbnailImage?: string | null;

	constructor(input?: Partial<UserGlow>) {
		this.id = input?.id;
		this.userName = input?.userName;
		this.email = input?.email;
		this.urlImage = input?.urlImage;
		this.roleId = input?.roleId;
		this.active = input?.active;
		this.password = input?.password;
		this.phone = input?.phone;
		this.numberFailedLogin = input?.numberFailedLogin;
		this.urlImage = input?.urlImage;
		this.totalMoney = input?.totalMoney;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.isBanned = input?.isBanned;
		this.storeId = input?.storeId;
		this.storeOwner = input?.storeOwner;
		this.gender = input?.gender;
		this.country = input?.country;
		this.countryId = input?.countryId;
		this.staff = input?.staff;
		this.punishmentType = input?.punishmentType;
		this.orderCancelRate = input?.orderCancelRate;
		this.thumbnailImage = input?.thumbnailImage;
	}

	parse(json?: any): UserGlow {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			phone: json.phone,
			name: json.name,
			role: json.role,
			totalMoney: json.totalMoney,
			active: json.active,
			roleId: json.roleId,
			userName: json.userName,
			email: json.email,
			urlImage: json.urlImage,
			createdAt: json.createdAt && new Date(json.createdAt),
			updatedAt: json.updatedAt && new Date(json.updatedAt),
			isBanned: json.isBanned,
			storeId: json.storeId,
			storeOwner: json.storeOwner,
			gender: json.gender,
			country: json.country,
			countryId: json.countryId,
			staff: json.staff,
			punishmentType: json.punishmentType,
			orderCancelRate: json.orderCancelRate,
			thumbnailImage: json.thumbnailImage,
		});

		return this;
	}

	parseFromDetailData(json?: any): UserGlow {
		return this.parse(json);
	}
	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new UserGlow().parse(item));
	}

	clone(): UserGlow {
		return new UserGlow({
			...this,
		});
	}
}

export class StoreOwner implements IModel<StoreOwner> {
	id?: number | null;
	name?: string | null | undefined;
	status?: string | null;

	constructor(input?: Partial<StoreOwner>) {
		this.id = input?.id;
		this.name = input?.name;
		this.status = input?.status;
	}

	parse(json?: any): StoreOwner {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			name: json.name,
			status: json.status,
		});

		return this;
	}

	parseFromDetailData(json?: any): StoreOwner {
		return this.parse(json);
	}

	clone(): StoreOwner {
		return new StoreOwner({
			...this,
		});
	}
}

export class Country implements IModel<Country> {
	id?: number | null;
	name?: string | null | undefined;
	code?: string | null;
	viName?: string | null;

	constructor(input?: Partial<Country>) {
		this.id = input?.id;
		this.name = input?.name;
		this.code = input?.code;
		this.viName = input?.viName;
	}

	parse(json?: any): Country {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			name: json.name,
			code: json.code,
			viName: json.viName,
		});

		return this;
	}

	parseFromDetailData(json?: any): Country {
		return this.parse(json);
	}

	clone(): Country {
		return new Country({
			...this,
		});
	}
}

export class VoucherUser implements IModel<VoucherUser> {
	message?: string | null;
	orderId?: number | null;
	order?: Orderv2 | null;

	constructor(input?: Partial<VoucherUser>) {
		this.message = input?.message;
		this.orderId = input?.orderId;
		this.order = input?.order;
	}

	parse(json?: any): VoucherUser {
		if (!json) return this;

		Object.assign(this, {
			...json,
			message: json.message,
			orderId: json.orderId,
			order: json.order,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new VoucherUser().parse(item));
	}

	clone(): VoucherUser {
		return new VoucherUser({
			...this,
		});
	}
}
