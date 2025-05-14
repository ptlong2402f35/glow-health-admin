import IModel from "./IModel";
import User from "./User";

export const CurrencyIds = {
	CNY: 1,
	JPY: 2,
	VND: 3,
};

export const CurrencyFlagIconMap = new Map([
	[CurrencyIds.CNY, "./static/img/chn.png"],
	[CurrencyIds.JPY, "./static/img/jap.png"],
	[CurrencyIds.VND, "./static/img/vie.png"],
]);

export const CurrencyShortMap = new Map([
	[CurrencyIds.CNY, "CNY"],
	[CurrencyIds.JPY, "JPY"],
	[CurrencyIds.VND, "VND"],
]);

export enum WithdrawRequestStatus {
	New = 1,
	Accepted = 2,
	Declined = 3,
	Canceled = 4,
}

export const WithdrawRequestStatusLabelMap = new Map([
	[WithdrawRequestStatus.New, "Mới tạo"],
	[WithdrawRequestStatus.Accepted, "Đã chốt"],
	[WithdrawRequestStatus.Declined, "Đã từ chối"],
	[WithdrawRequestStatus.Canceled, "Đã hủy"],
]);

export enum TransactionType {
	No= "",
	PublicMoney = "add",
	Deduction = "sub",
}
export const TransactionTypeMap = new Map([
	[TransactionType.No, "Vui lòng chọn"],
	[TransactionType.PublicMoney, "Nạp tiền"],
	[TransactionType.Deduction, "Rút tiền"],
]);

export enum TransactionStyle {
	No= 0,
    CustomerPunish= 1,
    StaffPaidOrderFee= 2,
    StaffPaidBannerFee= 3,
    StoreMaintain= 4,
    StoreRegisterStaff= 5,
    AdminAdd= 6,
    AdminMinus= 7,
    FowarderPurchase= 8,
    ForwarderReward= 9,
    CommissionFinishOrder= 10,
    CommissionNewCustomer= 11,
    StaffGetOrderFee= 12,
    CustomerPaidOrderFee= 13,
    Recharge= 14,
    RefundOrderFee= 15,
    CustomerCashback= 16
}
export const TransactionStyleMap = new Map([
	[TransactionStyle.No, "--"],
	[TransactionStyle.CustomerPunish, "Glow Phạt KTV"],
	[TransactionStyle.StaffPaidOrderFee, "KTV gửi phí Glow"],
	[TransactionStyle.StaffPaidBannerFee, "Phí đặt banner"],
	[TransactionStyle.StoreMaintain, "Phí duy trì spa"],
	[TransactionStyle.StoreRegisterStaff, "Phí thêm KTV của spa"],
	[TransactionStyle.AdminAdd, "Glow hỗ trợ tiền"],
	[TransactionStyle.AdminMinus, "GD rút tiền"],
	[TransactionStyle.FowarderPurchase, "GD mua lượt ứng tuyển"],
	[TransactionStyle.ForwarderReward, "GD thưởng ứng tuyển"],
	[TransactionStyle.CommissionFinishOrder, "GD thưởng chiết khấu do hoàn thành đơn"],
	[TransactionStyle.CommissionNewCustomer, "GD thưởng chiết khấu do đăng ký mới"],
	[TransactionStyle.StaffGetOrderFee, "GD KTV hoàn thành đơn"],
	[TransactionStyle.CustomerPaidOrderFee, "GD khách hàng thanh toán trước"],
	[TransactionStyle.Recharge, "Nạp tiền"],
	[TransactionStyle.RefundOrderFee, "Giao dịch hoàn tiền"],
	// [TransactionStyle.CustomerCashback, "Hoàn tiền cho khách hàng"],
]);

export const PaymentMethodId = {
	Cash: 1,
	ThirdParty: 2,
	GlowWallet: 3,
};

export default class Transaction implements IModel<Transaction> {
	id?: number | null;
	add?: boolean | null;
	code?: string | null;
	content?: string | null;
	forUserId?: number | null;
	money?: number | null;
	orderId?: number | null;
	status?: boolean | null;
	success?: boolean | null;
	totalMoney?: number | null;
	updatedAt?: Date | null;
	createdAt?: Date | null;
	user?: User | null;
	userCreated?: User | null;
	type?:TransactionStyle | null;

	constructor(input?: Partial<Transaction>) {
		this.id = input?.id;
		this.add = input?.add;
		this.code = input?.code;
		this.content = input?.content;
		this.forUserId = input?.forUserId;
		this.money = input?.money;
		this.orderId = input?.orderId;
		this.status = input?.status;
		this.success = input?.success;
		this.totalMoney = input?.totalMoney;
		this.updatedAt = input?.updatedAt;
		this.createdAt = input?.createdAt;
		this.user = input?.user;
		this.userCreated = input?.userCreated;
		this.type = input?.type;
	}

	parse(json?: any): Transaction {
		if (!json) return this;

		Object.assign(this, {
			...json,
			updatedAt: json.updatedAt && new Date(json.updatedAt),
			createdAt: json.createdAt && new Date(json.createdAt),
		});

		return this;
	}

	clone(): Transaction {
		return new Transaction({
			...this,
		});
	}
}
