import IModel from "./IModel";
import Staff from "./Staff";
import Store from "./Store";
import UserAddress from "./UserAddress";
import UserGlow from "./UserGlow";

export default class OrderRecord implements IModel<OrderRecord> {
	id?: number;
	successTime?: Date;
	address?: string;
	customerAddress?: UserAddress;
	paymentMethodId?: number;
	totalPay?: number;
	totalReceive?: number;
	staff?: Staff;
	cashFlow?: number;
	glowCharge?: number;
	store?: Store;
	ownerStaff?: Staff;

	constructor(input?: Partial<OrderRecord>) {
		this.id = input?.id;
		this.successTime = input?.successTime;
		this.address = input?.address;
		this.customerAddress = input?.customerAddress;
		this.paymentMethodId = input?.paymentMethodId;
		this.totalPay = input?.totalPay;
		this.totalReceive = input?.totalReceive;
		this.staff = input?.staff;
		this.cashFlow = input?.cashFlow;
		this.glowCharge = input?.glowCharge;
		this.store = input?.store;
		this.ownerStaff = input?.ownerStaff;
	}

	parse(json?: any): OrderRecord {
		if (!json) return this;

		let addrData = undefined;
		try {
			if (json.customerAddress) {
				addrData = JSON.parse(json.customerAddress);
			}
		} catch (err) {
			console.error(err);
		}

		Object.assign(this, {
			...json,
			successTime: json.successTime && new Date(json.successTime),
			customerAddress: addrData && new UserAddress().parse(addrData),
			staff: json.staff && new Staff().parse(json.staff),
			store: json.store && new Store().parse(json.store),
			ownerStaff: json.ownerStaff && new Staff().parse(json.ownerStaff),
		});

		return this;
	}

	clone(): OrderRecord {
		return new OrderRecord({
			...this,
		});
	}
}
