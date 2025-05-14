import { NullLiteral } from "typescript";
import IModel from "./IModel";

export default class UserAddress implements IModel<UserAddress> {
	id?: number | null;
	customerName?: string | null | undefined;
	phone?: string | null;
	default?: Boolean | null;
	active?: Boolean | null;
	customerId?: number | null;
	provinceId?: number | null;
	districtId?: number | null;
	communeId?: number | null;
	address?: string | null;
	lat?: number | null;
	long?: number | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	rawProvince?: string | null;
	rawDistrict?: string | null;
	rawCommune?: string | null;
	rawDetail?: string | null;
	province?: AddressPro | null;
	district?: AddressPro | null;
	commune?: AddressPro | null;
	note?: string | null;

	constructor(input?: Partial<UserAddress>) {
		this.id = input?.id;
		this.customerName = input?.customerName;
		this.phone = input?.phone;
		this.default = input?.default;
		this.active = input?.active;
		this.customerId = input?.customerId;
		this.provinceId = input?.provinceId;
		this.districtId = input?.districtId;
		this.communeId = input?.communeId;
		this.address = input?.address;
		this.lat = input?.lat;
		this.long = input?.long;
		this.createdAt = input?.createdAt;
		this.rawProvince = input?.rawProvince;
		this.rawDistrict = input?.rawDistrict;
		this.rawCommune = input?.rawCommune;
		this.rawDetail = input?.rawDetail;
		this.note = input?.note;
	}

	parse(json?: any): UserAddress {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			customerName: json.customerName,
			phone: json.phone,
			default: json.default,
			active: json.active,
			customerId: json.customerId,
			provinceId: json.provinceId,
			districtId: json.districtId,
			communeId: json.communeId,
			address: json.address,
			lat: json.lat,
			long: json.long,
			createdAt: json.createdAt && new Date(json.createdAt),
			updatedAt: json.updatedAt && new Date(json.updatedAt),
			rawProvince: json.rawProvince,
			rawDistrict: json.rawDistrict,
			rawCommune: json.rawCommune,
			rawDetail: json.rawDetail,
			note: json.note,
		});

		return this;
	}

	parseFromDetailData(json?: any): UserAddress {
		return this.parse(json);
	}

	clone(): UserAddress {
		return new UserAddress({
			...this,
		});
	}
}

export class AddressPro implements IModel<AddressPro> {
	id: string | null;
	name: string | null;

	constructor(input?: Partial<AddressPro>) {
		this.name = input?.name || null;
		this.id = input?.id || null;
	}

	parse(json: any): AddressPro {
		Object.assign(this, {
			...json,
		});

		return this;
	}
	clone(): AddressPro {
		return new AddressPro({
			...this,
		});
	}
}
