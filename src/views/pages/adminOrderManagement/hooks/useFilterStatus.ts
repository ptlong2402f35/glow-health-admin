import { useEffect, useState } from "react";
import { SelectOptionType } from "react-select";
import { OrderStatus, OrderStatusIdList, OrderStatusLabelMap } from "../../../../models/Order";
import { OrderStatusIdListv2, OrderStatusLabelMapv2 } from "../../../../models/Orderv2";

export default function useFilterStatus(props: { filterStatus?: string }) {
	const statusOptions: SelectOptionType[] = [
		// {
		//     label: "Tất cả",
		//     value: ``,
		//     object: "",
		// },
	];

	//setup statusOpts
	OrderStatusIdListv2.forEach((id) => {
		statusOptions.push({
			label: OrderStatusLabelMapv2.get(id) || "",
			value: id.toString(),
			object: "",
		});
	});
	const setupInitialStatus = (selectOpts: SelectOptionType[], compareVal: string | undefined) => {
		const listCompare = compareVal?.split(";");
		const initialStatus: string[] = [];
		listCompare?.forEach((item) => {
			const acceptInitial = selectOpts.find((opt) => opt.value === item || "");
			if (acceptInitial) initialStatus.push(acceptInitial.value);
		});
		return initialStatus || [selectOpts[0].value];
	};

	const [status, setStatus] = useState<string[]>(() => setupInitialStatus(statusOptions, props.filterStatus || ""));

	useEffect(() => {
		setStatus(setupInitialStatus(statusOptions, props.filterStatus || ""));
	}, [props.filterStatus]);

	return {
		status,
		setStatus,
		statusOptions,
	};
}
