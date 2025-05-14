import IModel from "./IModel";
import Transaction from "./Transaction";

export const FormType = {
	AutoFill: 1,
	Create: 2,
};
export default class WithdrawRequest implements IModel<WithdrawRequest> {
	id?: number | null;
	userId?: string | null;
	status?: number | null;
	currencyId?: number | null;
	amount?: number | null;
	description?: string | null;
	bankInfo?: string | null;
	declineReason?: null;
	createdAt?: string | null;
	updatedAt?: string | null;
	deletedAt?: null;
	walletTransaction?: Transaction;

	constructor(input?: Partial<WithdrawRequest>) {
		this.id = input?.id;
		this.userId = input?.userId;
		this.status = input?.status;
		this.currencyId = input?.currencyId;
		this.amount = input?.amount;
		this.description = input?.description;
		this.bankInfo = input?.bankInfo;
		this.declineReason = input?.declineReason;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.deletedAt = input?.deletedAt;
		this.walletTransaction = input?.walletTransaction;
	}

	parse(json?: any): WithdrawRequest {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}

	clone(): WithdrawRequest {
		return new WithdrawRequest({
			...this,
		});
	}
}

export interface WithdrawRequestCount {
	count: number;
}
