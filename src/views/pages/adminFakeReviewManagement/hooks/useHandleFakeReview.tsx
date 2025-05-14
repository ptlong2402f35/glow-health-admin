import React from "react";
import FakeReviewService from "../../../../services/FakeReviewService";
import { FakeReviewType } from "../../../../models/FakeReview";

export default function useHandleFakeReview(props: {
	onBeginLoad?: () => void;
	onSuccess?: () => void;
	onFail?: () => void;
	onEndLoad?: () => void;
}) {
	const onCreateFakeReview = async (data: { staffId: number; noteReview: string | null; rateReview: number }) => {
		props?.onBeginLoad?.();
		try {
			await FakeReviewService.createFakeReviews({
				staffId: data.staffId,
				rateReview: data.rateReview,
				noteReview: data.noteReview || "",
			});
			props?.onSuccess?.();
		} catch {
			props?.onFail?.();
		} finally {
			props?.onEndLoad?.();
		}
	};

	const onCreateBatchFakeReview = async (data: { staffId: number; reviews: FakeReviewType[] }) => {
		props?.onBeginLoad?.();
		try {
			await FakeReviewService.createFakeReviewsBatch({
				staffId: data.staffId,
				reviews: data.reviews,
			});
			props?.onSuccess?.();
		} catch {
			props?.onFail?.();
		} finally {
			props?.onEndLoad?.();
		}
	};

	const onUpdateFakeReview = async (data: {
		id: number;
		noteReview: string | null;
		rateReview: number;
		reviewTime: Date | null | undefined;
	}) => {
		props?.onBeginLoad?.();
		try {
			await FakeReviewService.updateFakeReviews({
				id: data.id,
				rateReview: data.rateReview,
				noteReview: data.noteReview || "",
				reviewTime: data.reviewTime,
			});
			props?.onSuccess?.();
		} catch {
			props?.onFail?.();
		} finally {
			props?.onEndLoad?.();
		}
	};

	const onDeleteFakeReview = async (data: { id: number }) => {
		props?.onBeginLoad?.();
		try {
			await FakeReviewService.deleteFakeReviews({
				id: data.id,
			});
			props?.onSuccess?.();
		} catch {
			props?.onFail?.();
		} finally {
			props?.onEndLoad?.();
		}
	};

	return {
		onCreateFakeReview,
		onCreateBatchFakeReview,
		onUpdateFakeReview,
		onDeleteFakeReview,
	};
}
