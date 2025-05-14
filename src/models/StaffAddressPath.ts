import IModel from "./IModel";
import User from "./User";
import Services from "./Services";

export default class StaffAddressPath implements IModel<StaffAddressPath> {
	id?: number;
	name?: string | null;
	code?: string | null;
	type?: string | null;
	centerPoint?: string | null;
	rank?: string | null;
	provinceId?: number | null;
	districtId?: number | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	district?: DistrictUrl[] | null;
	url?: string | null;
	apartmentUrl?: string | null;

	constructor(input?: Partial<StaffAddressPath>) {
		this.id = input?.id;
		this.name = input?.name;
		this.code = input?.code;
		this.type = input?.type;
		this.centerPoint = input?.centerPoint;
		this.rank = input?.rank;
		this.provinceId = input?.provinceId;
		this.districtId = input?.provinceId;
		this.updatedAt = input?.updatedAt;
		this.createdAt = input?.createdAt;
		this.apartmentUrl = input?.apartmentUrl;
	}

	parse(json?: any): StaffAddressPath {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			name: json.name,
			code: json.code,
			type: json.type,
			centerPoint: json.centerPoint,
			rank: json.rank,
			provinceId: json.provinceId,
			districtId: json.districtId,
			updatedAt: json.updatedAt && new Date(json.updatedAt),
			createdAt: json.createdAt && new Date(json.createdAt),
			apartmentUrl: json.apartmentUrl,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new StaffAddressPath().parse(item));
	}

	clone(): StaffAddressPath {
		return new StaffAddressPath({
			...this,
		});
	}
}

export class DistrictUrl implements IModel<DistrictUrl> {
	id?: number;
	name?: string | null;
	stdName?: string | null;
	url?: string | null;

	constructor(input?: Partial<DistrictUrl>) {
		this.id = input?.id;
		this.name = input?.name;
		this.stdName = input?.stdName;
		this.url = input?.url;
	}

	parse(json?: any): DistrictUrl {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			name: json.name,
			stdName: json.stdName,
			url: json.url,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new DistrictUrl().parse(item));
	}

	clone(): DistrictUrl {
		return new DistrictUrl({
			...this,
		});
	}
}
