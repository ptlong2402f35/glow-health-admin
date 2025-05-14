import { useState, useEffect, useRef } from "react";
import { getAllUser, getFeedback } from "../../../../services/AllUserService";
import FakeReview from "../../../../models/FakeReview";

export default function useGetFeedback(props: { id?: number | null; page: number; isOpenDialog: boolean }) {
	const [feedback, setFeedback] = useState<FakeReview[]>([]);
	const [count, setCount] = useState<number>(1);
	const loadListFeedback = async () => {
		try {
			var data = await getFeedback(props.page, props.id || 0);
			setFeedback(data.data);
			setCount(data.count);
		} catch (err) {
			console.error(err);
		} finally {
		}
	};
	useEffect(() => {
		if (props.id) {
			loadListFeedback();
		}
	}, [props.isOpenDialog, props.page]);

	return {
		feedback,
		count,
	};
}
