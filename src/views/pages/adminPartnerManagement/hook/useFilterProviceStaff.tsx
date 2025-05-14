import React, { useEffect, useState } from "react";
import { SelectAsyncOptionType } from "react-select/async";
import { convertToSelectOptions } from "../../adminOrderManagement/AdminOrderManagementFilterStaff";
import { SmSelectAsyncSearchBox } from "../../../controls/components/selectAsyncSearchBox/SelectAsyncSearchBox";
import { getProvince } from "../../../../services/AllStaffService";

export function AdminParnerManagementStaffControl(props: {
	filterStaffId: number;
	doChangeStaffId?: (value: any) => void;
}) {
	const [selectedId, setSelectedId] = useState<number>(props.filterStaffId);
	const loadStaffList = async (input: string, setOpts: (val: SelectAsyncOptionType[]) => void) => {
		try {
			const data = await getProvince(input);
			if (data) {
				const selectOpts = convertToSelectOptions(data.data);
				const clearOption = { label: "Hủy chọn", value: "" };
				setOpts?.([clearOption, ...selectOpts]);
				return [clearOption, ...selectOpts];
			}
		} catch (err) {
			console.error(err);
		}

		setOpts([]);
		return;
	};

	useEffect(() => {
		setSelectedId(props.filterStaffId);
	}, [props.filterStaffId]);

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
