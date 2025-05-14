import React, { useEffect, useState } from "react";

import Staff, { ReviewProps } from "../../../../models/Staff";
import { DetailStaff, ReviewProperty, offlineDetailStaff } from "../../../../services/StaffService";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function useGetReviewProperty(props: {}) {
	const [reviewProperty, setReviewProperty] = useState<ReviewProps[]>([]);

	const loadReview = async () => {
		try {
			var prods = await ReviewProperty();

			setReviewProperty(prods);
		} catch {
			setReviewProperty([]);
		}
	};
	const reload = () => {
		loadReview();
	};
	useEffect(() => {
		reload();
	}, []);
	return {
		reviewProperty,
		reload,
	};
}
