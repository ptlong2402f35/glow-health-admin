import React, { useEffect, useState } from "react";
import StoreService from "../../../../services/StoreService";
import { SmSelectAsyncSearchBox } from "../../../controls/components/selectAsyncSearchBox/SelectAsyncSearchBox";
import { convertToSelectOptions } from "../../adminOrderManagement/AdminOrderManagementFilterStaff";
import { SelectAsyncOptionType } from "react-select/async";

export function AdminOrderManagementStoreControl(props: {
	filterStaffId?: number;
	doChangeStaffId?: (value: any) => void;
}) {
	const [selectedId, setSelectedId] = useState<number>(props.filterStaffId || 0);
	useEffect(() => {
		setSelectedId(props.filterStaffId || 0);
	}, [props.filterStaffId]);
	const loadStaffList = async (input: string, setOpts: (val: SelectAsyncOptionType[]) => void) => {
		try {
			const data = await StoreService.getListStoreOption(0, 0, input);
			const res = data.data;
			if (res) {
				const selectOpts = convertToSelectOptions(res);
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
