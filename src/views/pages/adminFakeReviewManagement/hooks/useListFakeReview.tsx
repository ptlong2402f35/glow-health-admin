import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import TransactionService from "../../../../services/TransactionService";
import Transaction from "../../../../models/Transaction";
import Review from "../../../../models/FakeReview";
import FakeReviewService from "../../../../services/FakeReviewService";

export default function useListFakeReviews(props?: CommonListType) {
	const [reviews, setReviews] = useState<Review[]>([]);
	const [count, setCount] = useState(0);
	const loadFakeReviews = async (inPage: number, inPerPage: number, keyWord?: string | undefined) => {
		props?.onBeginLoad?.();
		try {
			var res = await FakeReviewService.getListFakeReviews(inPage, inPerPage, keyWord);
			const data = res.data;
			setReviews(data);
			setCount(res.count);
		} catch {
			setReviews([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadFakeReviews(props?.page || 1, props?.perPage || 0, props?.filterKeyword || "");
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage, props?.filterKeyword]);
	return {
		reviews,
		reload,
		count,
	};
}

export const useGetListFakeReview = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListFakeReviews(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
