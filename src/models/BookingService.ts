import IModel from "./IModel";

export default class BookingService implements IModel<BookingService> {
	id?: number | null;
	unit?: string | null;
	price?: number | null;
	amount?: number | null;
	serviceName?: string | null;
	imageUrl?: string | null;
	programNote?: string;

	constructor(input?: Partial<BookingService>) {
		this.id = input?.id;
		this.unit = input?.unit;
		this.price = input?.price;
		this.amount = input?.amount;
		this.serviceName = input?.serviceName;
		this.imageUrl = input?.imageUrl;
		this.programNote = input?.programNote;
	}

	parse(json?: any): BookingService {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	parseList(jsons?: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new BookingService().parse(item));
	}

	clone(): BookingService {
		return new BookingService({
			...this,
		});
	}
}
