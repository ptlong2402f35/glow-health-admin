import React, { useContext, useEffect, useState } from "react";
import { SelectAsyncOptionType } from "react-select/async";
import { convertToSelectOptions } from "../../adminOrderManagement/AdminOrderManagementFilterStaff";
import { SmSelectAsyncSearchBox } from "../../../controls/components/selectAsyncSearchBox/SelectAsyncSearchBox";
import { getProvince } from "../../../../services/AllStaffService";
import StoreService from "../../../../services/StoreService";
import HRService from "../../../../services/HRService";
import { AdminPartnerManagementContext } from "../PartnerManagement";

export function AdminParnerManagementStoreStaffControl(props: {
	filterStaffId: number;
	doChangeStaffId?: (value: any) => void;
}) {
	const [selectedId, setSelectedId] = useState<number>(props.filterStaffId);
		const ctx = useContext(AdminPartnerManagementContext);
	
	const loadStaffList = async (input: string, setOpts: (val: SelectAsyncOptionType[]) => void) => {
		try {
			const data = ctx?.isHR ? await HRService.getListStoreOptionHR(0, 0, input) : await StoreService.getListStoreOption(0, 0, input);
			if (data) {
				const selectOpts = convertToSelectOptions(data.data);
				const filteredOptions = selectOpts.filter((option: any) =>
					option.label.toLowerCase().includes(input.toLowerCase())
				);
				const clearOption = { label: "Hủy chọn", value: "" };
				setOpts?.([clearOption, ...filteredOptions]);
				return [clearOption, ...filteredOptions];
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
