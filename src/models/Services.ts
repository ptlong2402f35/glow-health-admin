import IModel from "./IModel";
import User from "./User";

export interface StaffServices {
	id?: number | null;
}

export default class Services implements IModel<Services> {
	id?: number | null;
	price?: number | null;
	unit?: string | null;
	imageUrl?: string | null;
	StaffServices?: StaffServices | null;
	name?: string | null;

	constructor(input?: Partial<Services>) {
		this.id = input?.id;
		this.name = input?.name;
		this.price = input?.price;
		this.unit = input?.unit;
		this.imageUrl = input?.imageUrl;
		this.StaffServices = input?.StaffServices;
	}

	parse(json?: any): Services {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			name: json.name,
			price: json.price,
			unit: json.unit,
			imageUrl: json.imageUrl,
			StaffServices: json.StaffServices,
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Services().parse(item));
	}

	clone(): Services {
		return new Services({
			...this,
		});
	}
}
