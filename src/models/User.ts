import IModel from "./IModel";

export enum UserRole {
	Super = "super",
	Admin = "admin",
	User = "user",
	Guest = "guest",
}

export enum UserStatus {
	Pending = 1,
	Active = 2,
	Disabled = 3,
	Waiting = 4,
}

export enum UserVerifyStatus {
	Normal = 1,
	Verified = 2,
}

export enum UserVerifyLevel {
	Unset = 1,
	Bronze = 2,
	Silver = 3,
	Gold = 4,
	Diamond = 5,
}

export interface IUser {
	id: string | null;
	role: UserRole | null;
	token: string | null;
	refreshToken: string | null;
}

export enum ActiveType {
	ACCTIVE = "true",
	UNACCTIVE = "false",
}
export const ActiveTypeMap = new Map([
	[ActiveType.ACCTIVE, "Bị Ban"],
	[ActiveType.UNACCTIVE, "Không bị Ban"],
]);

export enum Lunisolar {
	Positive = "1",
	Minus = "-1",
}
export const LunisolarMap = new Map([
	[Lunisolar.Positive, "Dương"],
	[Lunisolar.Minus, "Âm"],
]);

export enum SpamType {
	Positive = "1",
	Minus = "2",
}
export const SpamTypeMap = new Map([
	[SpamType.Positive, "Có"],
	[SpamType.Minus, "Không"],
]);

export const CustomerPunishmentType = {
	Unknown: -1,
	General: 1,
};

export default class User implements IUser, IModel<User> {
	urlImage: string | null;
	id: string | null;
	role: UserRole | null;
	token: string | null;
	refreshToken: string | null;
	expireTime: Date | null;
	avatar?: string | null;
	userName?: string | null;
	account?: string | null;
	status?: UserStatus | null;
	password?: string | null;
	email?: string | null;
	firstName?: string | null;
	lastName?: string | null;
	phone?: string | null;
	activeCode?: string | null;
	verifyStatus?: UserVerifyStatus | null;
	verifyLevel?: UserVerifyLevel | null;
	totalPostCount?: number | null;
	totalPostSuccess?: number | null;
	ratePostSuccess?: number | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	deletedAt?: Date | null;
	bankInfo?: string | null;
	bankName?: string | null;
	bankCardId?: string | null;
	bankOwner?: string | null;
	gender?: number;
	countryId?: number;
	thumbnailImage?: string;
	accessToken?: string;

	constructor(input?: Partial<User>) {
		this.urlImage = input?.urlImage || null;
		this.id = input?.id || null;
		this.role = input?.role || UserRole.User;
		this.token = input?.accessToken || null;
		this.refreshToken = input?.refreshToken || null;
		this.expireTime = input?.expireTime || null;
		this.avatar = input?.avatar;
		this.userName = input?.userName;
		this.account = input?.account;
		this.status = input?.status;
		this.password = input?.password;
		this.email = input?.email;
		this.firstName = input?.firstName;
		this.lastName = input?.lastName;
		this.phone = input?.phone;
		this.activeCode = input?.activeCode;
		this.verifyStatus = input?.verifyStatus;
		this.verifyLevel = input?.verifyLevel;
		this.totalPostCount = input?.totalPostCount;
		this.totalPostSuccess = input?.totalPostSuccess;
		this.ratePostSuccess = input?.ratePostSuccess;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.deletedAt = input?.deletedAt;
		this.bankInfo = input?.bankInfo;
		this.bankName = input?.bankName;
		this.bankCardId = input?.bankCardId;
		this.bankOwner = input?.bankOwner;
		this.gender = input?.gender;
		this.countryId = input?.countryId;
		this.thumbnailImage = input?.thumbnailImage;

		// this.createUserName();
	}

	parse(json: any): User {
		if (!json) return this;

		let status: UserStatus | null = null;
		if (json.status != 0) {
			status = UserStatus.Disabled;
		} else if (json.status) {
			status = UserStatus.Active;
		}

		let role: UserRole | null = null;
		if (json.role == "Admin" || json.role == "Worker") {
			role = UserRole.Admin;
		} else if (json.role) {
			role = UserRole.User;
		}

		Object.assign(this, {
			...json,
			account: json.accountName,
			status: status,
			role: role,
			// phone: json.phoneNumber,
			avatar: json.avatarLink,
			createdAt: json.createdAt && new Date(json.createdAt),
			expireTime: json.tokenExpire && new Date(json.tokenExpire),
			token: json.accessToken,
		});

		// this.createUserName();

		return this;
	}

	createUserName() {
		this.userName = [this.firstName, this.lastName].filter((val) => val).join(" ");
	}

	clone(): User {
		return new User({
			...this,
		});
	}
}
