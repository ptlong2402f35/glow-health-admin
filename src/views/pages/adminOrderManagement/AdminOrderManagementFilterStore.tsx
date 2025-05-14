import React, { useContext, useEffect, useState } from "react";
import { SmSelectAsyncSearchBox } from "../../controls/components/selectAsyncSearchBox/SelectAsyncSearchBox";
import { convertToSelectOptions } from "./AdminOrderManagementFilterStaff";
import StoreService from "../../../services/StoreService";
import { SelectAsyncOptionType } from "react-select/async";
import { AdminPartnerCreatedManagementContext } from "../partnerDetail/CreatedParnerDetail";
import HRService from "../../../services/HRService";
import { AdminPartnerDetailManagementContext } from "../partnerDetail/PartnerDetail";

export function AdminOrderManagementStoreControl(props: {
	filterStaffId?: number;
	doChangeStaffId?: (value: any) => void;
}) {
	const [selectedId, setSelectedId] = useState<number>(props.filterStaffId || 0);
	useEffect(() => {
		setSelectedId(props.filterStaffId || 0);
	}, [props.filterStaffId]);
	const ctx = useContext(AdminPartnerCreatedManagementContext)
	const ctr = useContext(AdminPartnerDetailManagementContext)
	const loadStaffList = async (input: string, setOpts: (val: SelectAsyncOptionType[]) => void) => {
		try {
			const data = (ctr?.isHR ||ctx?.isHR) ? await HRService.getListStoreOptionHR(0, 0, input)
			: await StoreService.getListStoreOption(0, 0, input);
			const res = data.data;
			if (res) {
				const selectOpts = convertToSelectOptions(res);
				const filteredOptions = selectOpts.filter((option: any) =>
					option.label.toLowerCase().includes(input.toLowerCase())
				);
				const clearOption = { label: "Tất cả", value: "" };
				setOpts?.([clearOption, ...filteredOptions]);
				return [clearOption, ...filteredOptions];
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
