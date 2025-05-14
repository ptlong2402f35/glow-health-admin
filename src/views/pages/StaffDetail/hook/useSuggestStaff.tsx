import React, { useEffect, useState } from "react";

import Staff from "../../../../models/Staff";
import {
	ReviewStaffv2,
	getStaffListSuggest,
	offlineGetListStaffServiceSuggest,
} from "../../../../services/StaffService";
import FakeReview from "../../../../models/FakeReview";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { useParams } from "react-router";

export default function useGetStaffSuggest(props: {
	lang?: string;
	districtId?: number;
	orMultipleServiceGroups?: string;
	type?: number;
}) {
	const { staticContext } = useStaticContext();
	const [staff, setStaff] = useState<Staff[]>(() => {
		if (staticContext?.data?.dataStaffListSuggestv2) {
			return staticContext?.data?.dataStaffListSuggestv2 as Staff[];
		}
		return [];
	});
	const [swipeIdx, setSwipeIdx] = useState(0);
	const [page, setPage] = useState(1);
	let { link } = useParams<{ link: string }>();

	const loadStar = async () => {
		try {
			let prods = await withSsrRawDataMulti<Promise<{ data: Staff[] }>>(
				(raw) => offlineGetListStaffServiceSuggest(raw),
				() =>
					getStaffListSuggest(
						11,
						1,
						"",
						props.lang,
						props.districtId,
						props.orMultipleServiceGroups,
						props.type
					),
				(raw) => raw?.dataStaffListSuggestv2,
				(ctx) => (ctx.dataStaffListSuggestv2 = null)
			);

			setStaff(prods.data);
		} catch (err) {
			console.error(err);
		}
	};

	const reload = () => {
		loadStar();
	};

	useEffect(() => {
		if (link) {
			reload();
		}
	}, [link]);

	return {
		staff,
		reload,
		swipeIdx,
		setSwipeIdx,
		setPage,
		page,
	};
}
