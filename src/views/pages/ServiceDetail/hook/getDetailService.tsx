import React, { useEffect, useState } from "react";

import Staff from "../../../../models/Staff";
import {
	DetailService,
	DetailStaff,
	offlineDetailService,
	offlineDetailStaff,
} from "../../../../services/StaffService";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import Service, { StaffServicePrice } from "../../../../models/Service";

export default function useGetDetailService(props: { group?: string; servicelink?: string; lang: string }) {
	const { staticContext } = useStaticContext();
	const [service, setService] = useState<StaffServicePrice | undefined>(() => {
		if (staticContext?.data?.dataDetailService) {
			return staticContext?.data?.dataDetailService as StaffServicePrice;
		}
		return undefined;
	});

	const loadStaff = async () => {
		try {
			// var res = await DetailStaff(props.group, props.link);
			// let prods = await DetailService(props.group, props.servicelink,props.lang);

			let prods = await withSsrRawDataMulti<Promise<{ data: StaffServicePrice; count: number }>>(
				(raw) => offlineDetailService(raw),
				() => DetailService(props.group, props.servicelink, props.lang),
				(raw) => raw?.dataDetailService,
				(ctx) => (ctx.dataDetailService = null)
			);

			setService(prods.data);
		} catch {
			setService(undefined);
		}
	};
	const reload = () => {
		loadStaff();
	};
	useEffect(() => {
		if (props.servicelink) {
			reload();
		}
	}, [props.lang]);
	return {
		service,
		reload,
	};
}
