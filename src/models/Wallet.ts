import IModel from "./IModel";

export default class Wallet implements IModel<Wallet> {
	id?: number | null;
	userId?: number | null;
	totalValue?: number | null;
	pendingValue?: number | null;
	currencyId?: number | null;

	constructor(input?: Partial<Wallet>) {
		this.id = input?.id;
		this.userId = input?.userId;
		this.totalValue = input?.totalValue;
		this.pendingValue = input?.pendingValue;
		this.currencyId = input?.currencyId;
	}

	parse(json?: any): Wallet {
		if (!json) return this;

		Object.assign(this, {
			...json,
			totalValue: json.totalValue ? parseFloat(json.totalValue) : 0,
			pendingValue: json.pendingValue ? parseFloat(json.pendingValue) : 0,
		});

		return this;
	}

	clone(): Wallet {
		return new Wallet({
			...this,
		});
	}
}
