import BookingService from "./BookingService";
import IModel from "./IModel";
import Payment from "./Payment";
import { Image } from "./Service";
import Staff from "./Staff";
import Store from "./Store";
import UserGlow from "./UserGlow";

export enum OrderStatusv2 {
	Done = "3",
	Cancel = "4",
	Pending = "1",
	Approved = "2",
	Denied = "5",
	StaffCancel = "6",
}

export const OrderStatusIdListv2 = [
	OrderStatusv2.Done,
	OrderStatusv2.Cancel,
	OrderStatusv2.Pending,
	OrderStatusv2.Approved,
	OrderStatusv2.Denied,
	OrderStatusv2.StaffCancel,
];

export const OrderStatusLabelMapv2 = new Map([
	[OrderStatusv2.Done, "Hoàn thành"],
	[OrderStatusv2.Cancel, "Khách hủy đơn"],
	[OrderStatusv2.Pending, "Chờ xác nhận"],
	[OrderStatusv2.Approved, "Đã duyệt"],
	[OrderStatusv2.Denied, "Từ chối nhận đơn"],
	[OrderStatusv2.StaffCancel, "KTV hủy đơn"],
]);

export const OrderStatusLabelMapv2Pro = new Map([
	[3, "Hoàn thành"],
	[4, "Khách hủy đơn"],
	[1, "Chờ xác nhận"],
	[2, "Đã duyệt"],
	[5, "Từ chối nhận đơn"],
	[6, "KTV hủy đơn"],
]);

export const OrderStatusLabelMapv3 = new Map([
	[OrderStatusv2.Done, "Đã sử dụng"],
	[OrderStatusv2.Cancel, "Đã hết hạn"],
	[OrderStatusv2.Pending, "Đã xác nhận"],
	[OrderStatusv2.Approved, "Đã xác nhận"],
	[OrderStatusv2.Denied, "Đã hết hạn"],
]);

export const OrderStatusLabelMapv3EN = new Map([
	[OrderStatusv2.Done, "Used"],
	[OrderStatusv2.Cancel, "Expired"],
	[OrderStatusv2.Pending, "Confirmed"],
	[OrderStatusv2.Approved, "Confirmed"],
	[OrderStatusv2.Denied, "Expired"],
]);

export const OrderStatusLabelMapv3KR = new Map([
	[OrderStatusv2.Done, "사용함"],
	[OrderStatusv2.Cancel, "만료됨"],
	[OrderStatusv2.Pending, "확인됨"],
	[OrderStatusv2.Approved, "확인됨"],
	[OrderStatusv2.Denied, "만료됨"],
]);

export enum OfferTypeStatus {
	Often = 1,
	Recruitment = 2,
	Accepted = 3,
	UnAccepted = 4,
}

export const OfferTypeStatusMapv2 = new Map([
	[OfferTypeStatus.Often, "Thường"],
	[OfferTypeStatus.Recruitment, "Tuyển dụng"],
	[OfferTypeStatus.Accepted, "Tuyển dụng đã chấp nhận"],
	[OfferTypeStatus.UnAccepted, "Tuyển dụng chưa chấp nhận"],
]);

export enum OfferBrowseStatus {
	Browse = 9,
}
export const OfferBrowseStatusMapv2 = new Map([[OfferBrowseStatus.Browse, "Chờ duyệt"]]);

export enum OrderTimerType {
	Often = 1,
	Appointment = 2,
}

export const OrderTimerTypeMap = new Map([
	[OfferTypeStatus.Often, "Đơn thường"],
	[OfferTypeStatus.Recruitment, "Hẹn lịch"],
]);

export enum OrderCancelOriginType {
	Both = 1,
	Customer = 2,
	Staff = 3,
	No = 4,
}

export const OrderCancelOriginTypeMap = new Map([
	[OrderCancelOriginType.No, "Không"],
	[OrderCancelOriginType.Both, "Cả hai"],
	[OrderCancelOriginType.Customer, "Khách hàng"],
	[OrderCancelOriginType.Staff, "KTV"],

]);

export default class Orderv2 implements IModel<Orderv2> {
	id?: number | null;
	staffId?: number | null;
	voucherId?: number | null;
	discount?: number | null;
	total?: number | null;
	totalPay?: number | null;
	customerAddress?: string | null;
	createdAt?: string | null;
	updatedAt?: string | null;
	userCustomer?: UserGlow | null;
	staff?: Staff | null;
	status?: OrderStatusv2 | null;
	code?: string | null;
	payment?: Payment | null;
	voucher?: number | null;
	booking?: BookingService[] | null;
	customerUserId?: number | null;
	fee?: number | null;
	isPaid?: boolean | null;
	earningRate?: number | null;
	noteReview?: string | null;
	rateReview?: number | null;
	acceptedForwarderCount?: number | null;
	forwarderCount?: number | null;
	isUserBanned?: boolean | null;
	store?: Store | null;
	expiredAt?: Date;
	cashback?: string;
	detailLink?: string;
	noteFeedback?: string | null;
	rateFeedback?: number | null;
	staffReasonCancel?: string;
	staffReasonCancelImages?: Image[] | null;
	secondaryStatus?: string;
	offerType?: OfferTypeStatus | null;
	offerStatus?: OfferBrowseStatus | null;
	orderTimerType?: number | null;
	timerTime?: Date;
	endDate?: Date;
	offerDescription?: string;
	offerImages?: string[];
	originCancelType?: number | null;
	chatBoxId?: string;

	constructor(input?: Partial<Orderv2>) {
		this.id = input?.id;
		this.staffId = input?.staffId;
		this.voucherId = input?.voucherId;
		this.discount = input?.discount;
		this.total = input?.total;
		this.totalPay = input?.totalPay;
		this.customerAddress = input?.customerAddress;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.userCustomer = input?.userCustomer;
		this.staff = input?.staff;
		this.status = input?.status;
		this.code = input?.code;
		this.payment = input?.payment;
		this.voucher = input?.voucher || 0;
		this.booking = input?.booking || [];
		this.customerUserId = input?.customerUserId || 0;
		this.fee = input?.fee || 0;
		this.isPaid = input?.isPaid || null;
		this.earningRate = input?.earningRate || null;
		this.noteReview = input?.noteReview || null;
		this.rateReview = input?.rateReview || null;
		this.acceptedForwarderCount = input?.acceptedForwarderCount || null;
		this.forwarderCount = input?.forwarderCount || null;
		this.isUserBanned = input?.isUserBanned || null;
		this.store = input?.store || null;
		this.expiredAt = input?.expiredAt;
		this.cashback = input?.cashback;
		this.detailLink = input?.detailLink;
		this.noteFeedback = input?.noteFeedback;
		this.rateFeedback = input?.rateFeedback;
		this.staffReasonCancel = input?.staffReasonCancel;
		this.staffReasonCancelImages = input?.staffReasonCancelImages;
		this.secondaryStatus = input?.secondaryStatus;
		this.offerType = input?.offerType;
		this.offerStatus = input?.offerStatus;
		this.orderTimerType = input?.orderTimerType;
		this.timerTime = input?.timerTime;
		this.endDate = input?.endDate;
		this.offerDescription = input?.offerDescription;
		this.offerImages = input?.offerImages;
		this.originCancelType = input?.originCancelType;
		this.chatBoxId = input?.chatBoxId;
	}

	parse(json?: any): Orderv2 {
		if (!json) return this;

		// let status: OrderStatusv2 | null = null;
		// switch (json.status) {
		// 	case "DONE":
		// 		status = OrderStatusv2.Done;
		// 		break;
		// 	case "CANCEL":
		// 		status = OrderStatusv2.Cancel;
		// 		break;
		// 	case "PENDING":
		// 		status = OrderStatusv2.Pending;
		// 		break;
		// 	case "APPROVED":
		// 		status = OrderStatusv2.Approved;
		// 		break;
		// 	case "DENIED":
		// 		status = OrderStatusv2.Denied;
		// 		break;
		// }

		Object.assign(this, {
			...json,
			id: json.id,
			staffId: json.staffId,
			voucherId: json.voucherId,
			discount: json.discount || 0,
			total: json.total || 0,
			totalPay: json.totalPay || 0,
			customerAddress: json.customerAddress,
			userCustomer: json.userCustomer ? new UserGlow().parse(json.userCustomer) : null,
			staff: json.staff && new Staff().parse(json.staff),
			code: json.code,
			payment: json.payment && new Payment().parse(json.payment),
			voucher: json.voucher,
			booking: json.booking && new BookingService().parseList(json.booking),
			customerUserId: json.customerUserId || 0,
			createdAt: json.createdAt && new Date(json.createdAt),
			updatedAt: json.updatedAt && new Date(json.updatedAt),
			fee: json.fee || 0,
			isPaid: json.is_paid,
			status: json.status,
			forwarderCount: json.forwarderCount,
			acceptedForwarderCount: json.acceptedForwarderCount,
			isUserBanned: json.isUserBanned,
			store: json.store,
			secondaryStatus: json.secondaryStatus,
			offerType: json.offerType,
			orderTimerType: json.orderTimerType,
			timerTime: json.timerTime,
			endDate: json.endDate,
			offerDescription: json.offerDescription,
			offerImages: json.offerImages,
			originCancelType: json.originCancelType,
			chatBoxId: json.chatBoxId,
		});

		return this;
	}

	static parseList<T extends IModel<T>>(jsons: any, constructor: () => T): T[] {
		if (!jsons || !jsons.length) return [];

		return jsons.map((item: any) => constructor().parse(item));
	}

	clone(): Orderv2 {
		return new Orderv2({
			...this,
		});
	}
}
