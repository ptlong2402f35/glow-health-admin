import IModel from "./IModel";

export default class PhoneAuthen implements IModel<PhoneAuthen> {
	isExist?: boolean;
	message?: string;
	needCaptcha?: boolean;
	isForeign?: boolean;
	useFirebaseAuthen?: boolean;
	phone?: string;
	constructor(input?: Partial<PhoneAuthen>) {
		this.isExist = input?.isExist;
		this.message = input?.message;
		this.needCaptcha = input?.needCaptcha;
		this.isForeign = input?.isForeign;
		this.useFirebaseAuthen = input?.useFirebaseAuthen;
		this.phone = input?.phone;
	}

	parse(json?: any): PhoneAuthen {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}
	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new PhoneAuthen().parse(item));
	}
	clone(): PhoneAuthen {
		return new PhoneAuthen({
			...this,
		});
	}
}

export class LoginRefresh implements IModel<LoginRefresh> {
	message: string | null;
	expiresIn: string | null;
	userId: number | null;
	token: string | null;
	refreshToken: string | null;
	refCode: number | null;

	constructor(input?: Partial<LoginRefresh>) {
		this.message = input?.message || null;
		this.expiresIn = input?.expiresIn || null;
		this.userId = input?.userId || null;
		this.token = input?.token || null;
		this.refreshToken = input?.refreshToken || null;
		this.refCode = input?.refCode || null;
	}

	parse(json?: any): LoginRefresh {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}
	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new LoginRefresh().parse(item));
	}
	clone(): LoginRefresh {
		return new LoginRefresh({
			...this,
		});
	}
}

export class SendOTP implements IModel<SendOTP> {
	message: string | null;
	code: string | null;
	needCaptcha?: boolean;
	useFirebaseAuthen?: boolean;
	phone?: number;

	constructor(input?: Partial<SendOTP>) {
		this.message = input?.message || null;
		this.code = input?.code || null;
		this.needCaptcha = input?.needCaptcha || false;
		this.useFirebaseAuthen = input?.useFirebaseAuthen || false;
		this.phone = input?.phone || 0;
	}

	parse(json?: any): SendOTP {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});

		return this;
	}
	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new SendOTP().parse(item));
	}
	clone(): SendOTP {
		return new SendOTP({
			...this,
		});
	}
}
