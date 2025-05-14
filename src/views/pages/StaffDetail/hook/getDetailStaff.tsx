import React, { useEffect, useState } from "react";

import Staff from "../../../../models/Staff";
import { DetailStaff, offlineDetailStaff } from "../../../../services/StaffService";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function useGetDetailStaff(props: { group?: string; link?: string; lang: string }) {
	const { staticContext } = useStaticContext();
	// const [staff, setStaff] = useState<Staff>();
	const [staff, setStaff] = useState<Staff | undefined>(() => {
		if (staticContext?.data?.dataDetailStaff) {
			return staticContext?.data?.dataDetailStaff as Staff;
		}
		return undefined;
	});

	const loadStaff = async () => {
		try {
			// var res = await DetailStaff(props.group, props.link);

			let prods = await withSsrRawDataMulti<Promise<{ data: Staff; count: number }>>(
				(raw) => offlineDetailStaff(raw),
				() => DetailStaff(props.group, props.link, props.lang),
				(raw) => raw?.dataDetailStaff,
				(ctx) => (ctx.dataDetailStaff = null)
			);

			setStaff(prods.data);
		} catch {
			setStaff(undefined);
		}
	};
	const reload = () => {
		loadStaff();
	};
	useEffect(() => {
		if (props.link) {
			reload();
		}
	}, [props.lang, props.link]); //bỏ theo dõi thì khôgn bị gọi undf
	return {
		staff,
		reload,
	};
}
