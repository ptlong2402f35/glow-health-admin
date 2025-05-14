import React, { useEffect, useState } from "react";

import { SelectAsyncOptionType } from "react-select/async";
import getStaffList from "../../../../services/StaffService";
import { SmSelectAsyncSearchBox } from "../../../controls/components/selectAsyncSearchBox/SelectAsyncSearchBox";

export function AdminPromotionManagementUserIdControl(props: {
	filterStaffId?: number;
	doChangeStaffId?: (value: any) => void;
}) {
	const [selectedId, setSelectedId] = useState<number>(props.filterStaffId || 0);
	useEffect(() => {
		setSelectedId(props.filterStaffId || 0);
	}, [props.filterStaffId]);
	const loadStaffList = async (input: string, setOpts: (val: SelectAsyncOptionType[]) => void) => {
		try {
			const data = await getStaffList({ phone: input, active: true });
			if (data) {
				const selectOpts = convertToSelectOptions(data);
				setOpts?.(selectOpts);
				return selectOpts;
			}
		} catch (err) {
			console.error(err);
		}

		setOpts([]);
		return;
	};

	// useEffect(() => {
	// 	if (props.filterStaffId) setSelectedId(props.filterStaffId);
	// }, [props.filterStaffId]);

	return (
		<SmSelectAsyncSearchBox
			selectedId={selectedId}
			onChange={(value: any) => {
				setSelectedId(value);
				props.doChangeStaffId?.(value);
			}}
			loadOptionPromise={loadStaffList}
		/>
	);
}

export function convertToSelectOptions(data: any) {
	let selectOptions = data.map((item: any) => ({
		value: item.userId,
		label: item.user?.phone + " - " + item.name,
		object: "",
	}));
	selectOptions.unshift({
		value: "",
		label: "Tất cả",
		object: "",
	});
	return selectOptions;
}
