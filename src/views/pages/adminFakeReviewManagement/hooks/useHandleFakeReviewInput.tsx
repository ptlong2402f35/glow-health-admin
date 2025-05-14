import { useState } from "react";
import { FakeReviewType } from "../../../../models/FakeReview";
import moment from "moment";

export default function useHandleFakeReviewInput(props: {}) {
	const [_, setRefresh] = useState({});
	const [review, setReview] = useState<FakeReviewType[]>([
		{
			rateReview: 5,
			noteReview: "",
			reviewTime: moment().format("HH:mm DD-MM-YYYY"),
		},
	]);

	const handleUpdateNote = (value: string, review: FakeReviewType) => {
		review.noteReview = value;
		setRefresh({});
	};
	const handleUpdateRate = (value: number, review: FakeReviewType) => {
		review.rateReview = value;
		setRefresh({});
	};

	const handleUpdateDate = (value: string, review: FakeReviewType) => {
		review.reviewTime = value;
		setRefresh({});
	};

	const handleAddReview = () => {
		review.push({
			rateReview: 5,
			noteReview: "",
			reviewTime: moment().format("HH:mm DD-MM-YYYY"),
		});
		setRefresh({});
	};

	const handleRemoveReview = (item: FakeReviewType) => {
		let index = review.indexOf(item);
		if (index >= 0) {
			review.splice(index, 1);
			setRefresh({});
		}
	};

	const resetInputData = () => {
		setReview([
			{
				rateReview: 5,
				noteReview: "",
				reviewTime: moment().format("HH:mm DD-MM-YYYY"),
			},
		]);
	};

	return {
		review,
		handleUpdateNote,
		handleUpdateRate,
		handleAddReview,
		handleRemoveReview,
		resetInputData,
		handleUpdateDate,
	};
}
