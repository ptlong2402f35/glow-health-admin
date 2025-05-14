import IModel from "./IModel";
import { Image } from "./Service";
import Staff from "./Staff";
import User from "./User";

export type FakeReviewType = {
	rateReview?: number | null;
	noteReview?: string | null;
	urlImage?: string | null;
	reviewTime?: string | null;
};

export default class FakeReview implements IModel<FakeReview> {
	id?: number | null;
	staffId?: number | null;
	rateReview?: number | null;
	noteReview?: string | null;
	reviewTime?: Date | null;
	urlImage?: string | null;
	staff?: Staff | null;
	updatedAt?: Date | null;
	createdAt?: Date | null;
	userCustomer?: User;
	staffServiceName?: string[];
	reviewImages?: Image[];
	rateFeedback?: number | null;
	noteFeedback?: string | null;

	constructor(input?: Partial<FakeReview>) {
		this.id = input?.id;
		this.staffId = input?.staffId;
		this.rateReview = input?.rateReview;
		this.noteReview = input?.noteReview;
		this.reviewTime = input?.reviewTime;
		this.urlImage = input?.urlImage;
		this.staff = input?.staff;
		this.updatedAt = input?.updatedAt;
		this.createdAt = input?.createdAt;
		this.userCustomer = input?.userCustomer;
		this.staffServiceName = input?.staffServiceName;
		this.reviewImages = input?.reviewImages;
		this.rateFeedback = input?.rateFeedback;
		this.noteFeedback = input?.noteFeedback;
	}

	parse(json?: any): FakeReview {
		if (!json) return this;

		Object.assign(this, {
			...json,
			reviewTime: json.reviewTime && new Date(json.reviewTime),
			updatedAt: json.updatedAt && new Date(json.updatedAt),
			createdAt: json.createdAt && new Date(json.createdAt),
		});

		return this;
	}

	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new FakeReview().parse(item));
	}

	clone(): FakeReview {
		return new FakeReview({
			...this,
		});
	}
}
