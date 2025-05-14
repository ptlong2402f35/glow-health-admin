import { DefaultModel } from "../models/IModel";
import FakeReview, { FakeReviewType } from "../models/FakeReview";

import http from "./http";
import moment from "moment";

export default class FakeReviewService {
	public static async getListFakeReviews(
		inPage: number,
		inPerPage: number,
		search: string | undefined
	): Promise<{
		data: FakeReview[];
		count: number;
	}> {
		let results = await http.get(`/fake-review?page=${inPage}&perPage=${inPerPage}&search=${search}`);
		return {
			data: DefaultModel.parseList<FakeReview>(results.data?.docs, () => new FakeReview()),
			count: results.data?.total,
		};
	}

	public static async createFakeReviews(props: { staffId: number; rateReview: number; noteReview: string }) {
		let results = await http.post(`fake-review`, {
			staffId: props.staffId,
			rateReview: props.rateReview,
			noteReview: props.noteReview,
			urlImage: "",
		});
		return results;
	}

	public static async createFakeReviewsBatch(props: { staffId: number; reviews: FakeReviewType[] }) {
		let processedDateReviews = props.reviews.map((item) => ({
			...item,
			reviewTime: item.reviewTime ? moment(item.reviewTime, "HH:mm DD-MM-YYYY").toDate() : new Date(),
		}));
		let results = await http.post(`fake-review-batch`, {
			staffId: props.staffId,
			reviews: processedDateReviews,
		});
		return results;
	}

	public static async updateFakeReviews(props: {
		id: number;
		rateReview: number;
		noteReview: string;
		reviewTime: Date | null | undefined;
	}) {
		let results = await http.patch(`fake-review/${props.id}`, {
			rateReview: props.rateReview,
			noteReview: props.noteReview,
			urlImage: "",
			reviewTime: props.reviewTime,
		});
		return results;
	}

	public static async deleteFakeReviews(props: { id: number }) {
		let results = await http.delete(`fake-review/${props.id}`);
		return results;
	}
}
