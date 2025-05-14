import React, { useEffect, useState } from "react";

import Staff from "../../../../models/Staff";
import { offlineReviewStaff, ReviewStaffv2 } from "../../../../services/StaffService";
import FakeReview from "../../../../models/FakeReview";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";

export default function useGetReviewStaff(props?: CommonListType, id?: number, link?: string) {
	const { staticContext } = useStaticContext();
	const [star, setStar] = useState<FakeReview[]>(() => {
		if (staticContext?.data?.dataReviewStaff) {
			return staticContext?.data?.dataReviewStaff as FakeReview[];
		}
		return [];
	});
	const [swipeIdx, setSwipeIdx] = useState(0);
	const [isLastPage, setIsLastPage] = useState(false);
	const [page, setPage] = useState(1);
	const [offset, setOffset] = useState(0);
	const [fakeOffset, setFakeOffset] = useState(0);
	const [filterStar, setFilterStar] = useState<string>("");
	const [count, setCount] = useState(() => {
		if (staticContext?.data?.totalReviewStaff) {
			return staticContext?.data?.totalReviewStaff as number;
		}
		return 0;
	});

	const loadStar = async (loadMore = false, inPage: number, perPage: number) => {
		try {
			// const res = await ReviewStaffv2(props.id, page, 10, offset, fakeOffset,filterStar, props.link);

			let res = await withSsrRawDataMulti<Promise<{ data: any; docs: FakeReview[]; total: number }>>(
				(raw) => offlineReviewStaff(raw),
				() => ReviewStaffv2(id, inPage, perPage, offset, fakeOffset, filterStar, link),
				(raw) => raw?.dataReviewStaff,
				(ctx) => (ctx.dataReviewStaff = null)
			);

			if (loadMore) {
				setStar((prevStar) => [...prevStar, ...res.docs]);
			} else {
				setStar(res.docs);
			}
			setIsLastPage(res.data.length < 10);
			setOffset(res.data.offset);
			setFakeOffset(res.data.fakeOffset);
			setCount(res.total);
		} catch {
			setStar([]);
		}
	};

	const reload = () => {
		setPage(1);
		setOffset(0);
		setFakeOffset(0);
		loadStar(false, props?.page || 1, props?.perPage || PERPAGE.PerPage);
	};

	useEffect(() => {
		if (id) {
			reload();
		}
	}, [id, filterStar, props?.page, props?.perPage]);

	// useEffect(() => {
	// 	if (star.length - 5 < swipeIdx && swipeIdx > 0 && !isLastPage) {
	// 		setPage((prevPage) => prevPage + 1);
	// 		loadStar(true);
	// 	}
	// }, [swipeIdx]);

	return {
		star,
		reload,
		swipeIdx,
		setSwipeIdx,
		setPage,
		page,
		setFilterStar,
		count,
	};
}

export const getFilteGetReviewStaff = (prop: { id: number; link?: string }) => {
	const hookResult = (props: CommonListType) => useGetReviewStaff(props, prop.id, prop?.link);
	return useCommonListWrap(PERPAGE.PerPage, hookResult);
};
