import IModel from "./IModel";
import User from "./User";

export enum OrderStatus {
	Purchased = 2,
	Settled = 3,
	Canceled = 4,
	TemporarySettled = 5,
}

export enum UserRole {
	Customer = 4,
	Owner = 2,
	Staff = 3,
	Admin = 1,
}

export const UserRoleLabelMap = new Map([
	[UserRole.Customer, "Khách hàng"],
	[UserRole.Owner, "Chủ cơ sở"],
	[UserRole.Staff, "KTV"],
	[UserRole.Admin, "Admin"],
]);

export const OrderStatusIdList = [
	OrderStatus.Purchased,
	OrderStatus.Settled,
	OrderStatus.Canceled,
	OrderStatus.TemporarySettled,
];

export const OrderStatusLabelMap = new Map([
	[OrderStatus.Purchased, "Đã mua"],
	[OrderStatus.Settled, "Đã chốt"],
	[OrderStatus.Canceled, "Đã hủy"],
	[OrderStatus.TemporarySettled, "Đã mua"],
]);
export const OrderStatusLabelMapv2 = new Map([
	[OrderStatus.Purchased, "Đang xử lý"],
	[OrderStatus.Settled, "Đã nhận chiết khấu"],
	[OrderStatus.Canceled, "Đã hủy đơn"],
	[OrderStatus.TemporarySettled, "Đang xử lý"],
]);
export const OrderStatusLabelMapv2Res = new Map([
	[OrderStatus.Purchased, "Đang xử lý"],
	[OrderStatus.Settled, "Đã nhận CK"],
	[OrderStatus.Canceled, "Đã hủy đơn"],
	[OrderStatus.TemporarySettled, "Đang xử lý"],
]);

OrderStatusLabelMap.get(OrderStatus.Purchased);

export default class Order implements IModel<Order> {
	id?: number | null;
	phone?: string | null;
	name?: string | null;
	userId?: number | null;
	createdAt?: Date | null;
	active?: Boolean;
	totalMoney?: number | null;
	roleId?: number | null;
	userName?: string | null;
	email?: string | null;
	urlImage?: string | null;
	taobaoOrderId?: string | null;
	adzoneId?: string | null;
	promotionId?: string | null;
	productId?: string | null;
	productName?: string | null;
	productImg?: string | null;
	productAllImgs?: string[] | null;
	recalledAt?: Date | null;
	settledAt?: Date | null;
	expiredAt?: Date | null;
	isExpired?: boolean | null;
	totalPrice?: number | null;
	paidAmount?: number | null;
	rebateAmount?: number | null;
	rebateRate?: number | null;
	originalRebateAmount?: number | null;
	originalRebateRate?: number | null;
	status?: OrderStatus | null;
	productQuantity?: number | null;
	category?: string | null;
	user?: User | null;
	purchasedAt?: Date | null;
	temporarySettledAt?: Date | null;

	constructor(input?: Partial<Order>) {
		this.id = input?.id;
		this.phone = input?.phone;
		this.name = input?.name;
		this.createdAt = input?.createdAt;
		this.active = input?.active;
		this.totalMoney = input?.totalMoney;
		this.roleId = input?.roleId;
		this.userName = input?.userName;
		this.email = input?.email;
		this.urlImage = input?.urlImage;
		this.taobaoOrderId = input?.taobaoOrderId;
		this.adzoneId = input?.adzoneId;
		this.promotionId = input?.promotionId;
		this.productId = input?.productId;
		this.userId = input?.userId;
		this.productName = input?.productName;
		this.productImg = input?.productImg;
		this.productAllImgs = input?.productAllImgs;
		this.recalledAt = input?.recalledAt;
		this.settledAt = input?.settledAt;
		this.createdAt = input?.createdAt;
		this.expiredAt = input?.expiredAt;
		this.isExpired = input?.isExpired;
		this.totalPrice = input?.totalPrice || 0;
		this.paidAmount = input?.paidAmount || 0;
		this.rebateAmount = input?.rebateAmount || 0;
		this.rebateRate = input?.rebateRate || 0;
		this.originalRebateAmount = input?.originalRebateAmount || 0;
		this.originalRebateRate = input?.originalRebateRate || 0;
		this.status = input?.status;
		this.productQuantity = input?.productQuantity || 0;
		this.category = input?.category;
		this.user = input?.user;
		this.purchasedAt = input?.purchasedAt;
		this.temporarySettledAt = input?.temporarySettledAt;
	}

	parse(json?: any): Order {
		if (!json) return this;

		let status: OrderStatus | null = null;
		switch (json.status) {
			case 2:
				status = OrderStatus.Purchased;
				break;
			case 3:
				status = OrderStatus.Settled;
				break;
			case 4:
				status = OrderStatus.Canceled;
				break;
			case 5:
				status = OrderStatus.TemporarySettled;
				break;
		}

		Object.assign(this, {
			...json,
			id: json.id,
			phone: json.phone,
			name: json.name,
			role: json.role,
			createdAt: json.createdAt,
			totalMoney: json.totalMoney,
			active: json.active,
			roleId: json.roleId,
			userName: json.userName,
			email: json.email,
			urlImage: json.urlImage,
		});

		return this;
	}

	clone(): Order {
		return new Order({
			...this,
		});
	}
}
