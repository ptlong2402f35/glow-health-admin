import { useEffect, useState } from "react";
// import AccountanceService from "../../../../services/AccountanceService";
import OrderRecord from "../../../../models/OrderRecord";

export default function useListOrderStats(props: {
	page?: number | null;
	perPage?: number | null;
	filterFromDate?: Date | null;
	filterToDate?: Date | null;
	onBeginLoad?: () => void;
	onEndLoad?: () => void;
}) {
	const [records, setRecords] = useState<OrderRecord[]>([]);
	const [count, setCount] = useState(0);
	const [pages, setPages] = useState(0);

	const load = async (inPage: number, inPerPage: number, inFromDate?: Date | null, inToDate?: Date | null) => {
		props?.onBeginLoad?.();
		try {
			// let startOfDayFromDate = inFromDate && new Date(inFromDate.setHours(0, 0, 0, 0));
			// let endOfDayToDate = inToDate && new Date(inToDate.setHours(23, 59, 59, 999));
			// let {
			// 	docs,
			// 	pages: oPages,
			// 	total,
			// } = await AccountanceService.getOrderStats(
			// 	inPage,
			// 	inPerPage,
			// 	startOfDayFromDate || undefined,
			// 	endOfDayToDate || undefined
			// );

			// setRecords(docs);
			// setCount(total);
			// setPages(oPages);
		} finally {
			props?.onEndLoad?.();
		}
	};

	const reload = () => {
		load(props?.page || 1, props?.perPage || 20, props?.filterFromDate, props?.filterToDate);
	};

	useEffect(() => {
		load(props.page || 1, props.perPage || 20, props.filterFromDate, props.filterToDate);
	}, [props?.page, props?.filterFromDate || undefined, props?.filterToDate || undefined]);

	return {
		records,
		reload,
		count,
		pages,
	};
}
