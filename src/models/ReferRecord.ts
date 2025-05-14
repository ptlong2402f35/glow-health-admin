import IModel from "./IModel";
import Staff from "./Staff";
import UserGlow from "./UserGlow";

export default class ReferRecord implements IModel<ReferRecord> {
	userId?: number;
	totalCommissionValue?: number;
	staff?: Staff;
	user?: UserGlow;
	taxFee?: number;
	actualCommissionValue?: number;

	constructor(input?: Partial<ReferRecord>) {
		this.userId = input?.userId;
		this.totalCommissionValue = input?.totalCommissionValue;
		this.staff = input?.staff;
		this.user = input?.user;
		this.taxFee = input?.taxFee;
		this.actualCommissionValue = input?.actualCommissionValue;
	}

	parse(json?: any): ReferRecord {
		if (!json) return this;

		Object.assign(this, {
			...json,
			user: json.userCustomer && new UserGlow().parse(json.user),
			staff: json.staff && new Staff().parse(json.staff),
		});

		return this;
	}

	clone(): ReferRecord {
		return new ReferRecord({
			...this,
		});
	}
}
