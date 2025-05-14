import IModel from "./IModel";

export default class Payment implements IModel<Payment> {
	id?: number | null;
	name?: string | null;
	code?: string | null;
	logoUrl?: string | null;
	bpmId?: string | null;

	constructor(input?: Partial<Payment>) {
		this.id = input?.id;
		this.name = input?.name;
		this.code = input?.code;
		this.logoUrl = input?.logoUrl;
		this.bpmId = input?.bpmId;
	}

	parse(json?: any): Payment {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	clone(): Payment {
		return new Payment({
			...this,
		});
	}
}
