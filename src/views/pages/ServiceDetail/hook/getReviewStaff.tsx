import React, { useEffect, useState } from "react";

import Staff from "../../../../models/Staff";
import { ReviewServicev2, ReviewStaffv2, offlineReviewStaff } from "../../../../services/StaffService";
import FakeReview from "../../../../models/FakeReview";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function useGetReviewService(props: { id: number; link?: string }) {
	const { staticContext } = useStaticContext();
	const [star, setStar] = useState<FakeReview[]>(() => {
		if (staticContext?.data?.dataReviewService) {
			return staticContext?.data?.dataReviewService as FakeReview[];
		}
		return [];
	});
	const [swipeIdx, setSwipeIdx] = useState(0);
	const [page, setPage] = useState(1);
	const [offset, setOffset] = useState(0);
	const [fakeOffset, setFakeOffset] = useState(0);
	const [filterStar, setFilterStar] = useState<string>("");
	const [total, setTotal] = useState(() => {
		if (staticContext?.data?.totalReviewService) {
			return staticContext?.data?.totalReviewService as number;
		}
		return 0;
	});

	const loadStar = async () => {
		try {
			// const res = await ReviewStaffv2(props.id, page, 10, offset, fakeOffset,filterStar, props.link);

			let res = await withSsrRawDataMulti<Promise<{ data: FakeReview[]; total: number }>>(
				(raw) => offlineReviewStaff(raw),
				() => ReviewServicev2(props.id, page, 10, offset, fakeOffset, filterStar, props.link),
				(raw) => raw?.dataReviewService,
				(ctx) => (ctx.dataReviewService = null)
			);
			setStar(res.data);
			setTotal(res.total);
		} catch {
			setStar([]);
		}
	};

	const reload = () => {
		loadStar();
	};

	useEffect(() => {
		if (props.id) {
			reload();
		}
	}, [props.id, filterStar, page]);

	return {
		star,
		reload,
		swipeIdx,
		setSwipeIdx,
		setPage,
		page,
		setFilterStar,
		total,
	};
}
