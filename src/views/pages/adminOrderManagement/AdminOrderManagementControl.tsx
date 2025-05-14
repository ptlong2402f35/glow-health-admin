import React, { useEffect, useState } from "react";
import { SmSelectSearchBox } from "../../controls/components/selectSearchBox/SelectSearchBox";
import { SelectOptionType } from "react-select";
import DateRangeInput from "../../controls/components/dateRangeInput/DateRangeInput";
import {
	CommonListFunctionsType,
	useExtendCommonListFunctions,
} from "../../hooks/useCommonList/useCommonListFunctions";
import { AdminOrderExtraParams, AdminOrderExtractor, AdminOrderParams } from "./hooks/useGetAdminOrders";
import {
	AdminOrderManagementControlWrap,
	AdminOrderManagementFilterItem,
	AdminOrderManagementFilterItemMaxWidth,
	AdminOrderManagementFilterItemWrap2,
	AdminOrderManagementFilterLabel,
	AdminUserManagementClearButton,
	AdminOrderManagementFilterItemWrap,
	AdminOrderManagementReFilter,
} from "./styled/StyledAdminOrdermanagement";
import useFilterStatus from "./hooks/useFilterStatus";
import { AdminOrderManagementStaffControl } from "./AdminOrderManagementFilterStaff";
import { SmMultipleSelectBox } from "../../controls/components/selectBox/SelectBox";
import SearchPanel from "../adminUserManagement/component/SearchPanel";
import {
	AdminProductrManagementFilterSearch,
	AdminProductrManagementFilterSearchSDT,
} from "../adminProductManagement/styled/ProductManagementStyle";
import {
	AdminUserManagementFilterTitle,
	ButtonIsFilterVisible,
} from "../adminUserManagement/styled/AdminUserManagementStyle";
import { AdminOrderManagementStoreControl } from "./AdminOrderManagementFilterStore";
import { OfferTypeFilter, userOfferType } from "./hooks/useOfferTypeFilter";
import { AdminFilterSearchSelect } from "../adminUserManagement/component/AdminUserManagementFilter";

export default function AdminOrderManagementControl(props: { reload: () => void }) {
	const {
		page,
		filterStaffId,
		filterFromDate,
		filterToDate,
		filterStatusString,
		filterKeyword,
		doFilterFromDate,
		doFilterToDate,
		doChangeFilterField,
		doFilterKeyword,
		doClearFilter,
		filterPhone,
		doFilterPhone,
		filterStore,
		doFilterStore,
	} = useExtendCommonListFunctions(
		AdminOrderExtractor,
		AdminOrderExtraParams,
		(nFilter: AdminOrderParams, nFunctions: CommonListFunctionsType) => ({
			...nFilter,
			...nFunctions,
		})
	);

	const { status, setStatus, statusOptions } = useFilterStatus({
		filterStatus: (filterStatusString && filterStatusString) || undefined,
	});
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const { statusSelected, handleFilterOfferType } = OfferTypeFilter();
	const doChangeStaffId = (value: any) => {
		doChangeFilterField?.({
			filterStaffId: value,
		});
	};
	const doChangeStoreId = (value: any) => {
		doChangeFilterField?.({
			filterStore: value,
		});
	};

	const doChangeStatusString = (value: any) => {
		doChangeFilterField?.({
			filterStatusString: value,
		});
	};
	const handleReload = () => {
		props.reload();
	};
	const handleClearFilter = () => {
		const filtersActive =
			filterFromDate ||
			filterToDate ||
			status.length > 0 ||
			filterStore ||
			filterStaffId ||
			filterKeyword ||
			filterPhone;

		if (filtersActive) {
			doClearFilter?.();
		} else {
			handleReload();
		}
	};

	return (
		<div>
			<ButtonIsFilterVisible onClick={() => setIsFilterVisible(!isFilterVisible)}>
				{isFilterVisible ? (
					<span>
						<i
							className="fa fa-angle-up"
							aria-hidden="true"></i>{" "}
						Lọc
					</span>
				) : (
					<span>
						<i
							className="fa fa-angle-down"
							aria-hidden="true"></i>{" "}
						Lọc
					</span>
				)}
			</ButtonIsFilterVisible>
			<AdminOrderManagementControlWrap className={isFilterVisible ? "visible" : ""}>
				<AdminOrderManagementFilterItemWrap>
					<AdminOrderManagementFilterItem>
						<AdminOrderManagementFilterLabel>Lọc theo thời gian</AdminOrderManagementFilterLabel>
						<AdminOrderManagementFilterDate
							fromDate={(filterFromDate && filterFromDate) || null}
							toDate={(filterToDate && filterToDate) || null}
							doFilterFromDate={doFilterFromDate}
							doFilterToDate={doFilterToDate}
						/>
					</AdminOrderManagementFilterItem>
					<AdminOrderManagementFilterItemMaxWidth>
						<AdminOrderManagementFilterLabel>Lọc theo trạng thái</AdminOrderManagementFilterLabel>
						<AdminOrderManagementFilterInput
							options={statusOptions}
							value={status}
							setvalue={(value) => {
								setStatus(value);
								doChangeStatusString(value.join(";"));
							}}
						/>
					</AdminOrderManagementFilterItemMaxWidth>
					<AdminOrderManagementFilterItem>
						<AdminOrderManagementFilterLabel>Lọc theo cơ sở</AdminOrderManagementFilterLabel>
						<AdminOrderManagementStoreControl
							filterStaffId={parseInt(filterStore || "0")}
							doChangeStaffId={doFilterStore}
						/>
					</AdminOrderManagementFilterItem>
				</AdminOrderManagementFilterItemWrap>
				<AdminOrderManagementFilterItemWrap2>
					<AdminOrderManagementFilterItem>
						<AdminOrderManagementFilterLabel>Lọc theo nhân viên</AdminOrderManagementFilterLabel>
						<AdminOrderManagementStaffControl
							filterStaffId={parseInt(filterStaffId || "0")}
							doChangeStaffId={doChangeStaffId}
						/>
					</AdminOrderManagementFilterItem>

					<AdminProductrManagementFilterSearch>
						<AdminOrderManagementFilterLabel>Lọc theo mã đơn</AdminOrderManagementFilterLabel>
						<SearchPanel
							placeholder="Lọc theo mã đơn"
							filterKeyword={filterKeyword}
							doFilterKeyword={doFilterKeyword}
						/>
					</AdminProductrManagementFilterSearch>
					<AdminProductrManagementFilterSearchSDT>
						<AdminOrderManagementFilterLabel>Lọc theo SDT</AdminOrderManagementFilterLabel>
						<SearchPanel
							placeholder="Lọc theo SDT"
							filterKeyword={filterPhone}
							doFilterKeyword={doFilterPhone}
						/>
					</AdminProductrManagementFilterSearchSDT>
					{/* <AdminProductrManagementFilterSearchSDT>
						<AdminOrderManagementFilterLabel>Lọc theo tuyển dụng</AdminOrderManagementFilterLabel>
						<AdminFilterSearchSelect
							isSearchable={false}
							options={userOfferType}
							value={statusSelected}
							setvalue={(val) => handleFilterOfferType(val.value)}
						/>
					</AdminProductrManagementFilterSearchSDT> */}
					<AdminOrderManagementReFilter>
						<AdminUserManagementFilterTitle>Hủy lọc</AdminUserManagementFilterTitle>
						<AdminUserManagementClearButton onClick={handleClearFilter}>
							<i
								className="fa fa-refresh"
								aria-hidden="true"></i>
						</AdminUserManagementClearButton>
					</AdminOrderManagementReFilter>
				</AdminOrderManagementFilterItemWrap2>
			</AdminOrderManagementControlWrap>
		</div>
	);
}

export function AdminOrderManagementFilterInput(props: {
	options: SelectOptionType[];
	value: string[];
	setvalue: (val: string[]) => void;
}) {
	return (
		<SmMultipleSelectBox
			options={props.options}
			value={props.value}
			onChange={props.setvalue}></SmMultipleSelectBox>
	);
}

export function AdminOrderManagementFilterDate(props: {
	fromDate: Date | null;
	toDate: Date | null;
	doFilterFromDate?: (date: Date | null) => void;
	doFilterToDate?: (date: Date | null) => void;
}) {
	const handleChangeFromDate = (date: Date | null) => {
		props.doFilterFromDate?.(date);
	};

	const handleChangeToDate = (date: Date | null) => {
		props.doFilterToDate?.(date);
	};

	return (
		<DateRangeInput
			fromDate={props.fromDate}
			toDate={props.toDate}
			onDateFromChange={handleChangeFromDate}
			onDateToChange={handleChangeToDate}
		/>
	);
}
