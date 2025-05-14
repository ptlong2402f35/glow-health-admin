import React, { useState } from "react";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { AdminUserManagementClearButton, AdminUserManagementFilterTitle, ButtonIsFilterVisible } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { AdminTransactionAddButtton, AdminTransactionFilterDate, AdminTransactionFilterLeft, AdminTransactionFilterRight, AdminTransactionFilterWrap } from "../../adminHistoryManagement/styled/StyledAdminTransaction";
import { AdminOrderManagementFilterDate } from "../../adminOrderManagement/AdminOrderManagementControl";
import { AdminOrderManagementReFilter } from "../../adminOrderManagement/styled/StyledAdminOrdermanagement";

import moment from "moment";
import Collect, { CollectTypeMap } from "../../../../models/Collect";
import useExportListDiscountAll from "../hook/useExportListDiscountAll";
import exportToExcel from "../../adminControlFeeCollection/hook/exportToExcel";

export function AdminDiscountFilter(props: { reload: () => void, countPages: number }) {
	const {
		filterFromDate,
		filterToDate,
		doFilterFromDate,
		doFilterToDate,
		doClearFilter,
	} = useCommonListFunctions();
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const handleReload = () => {
		props.reload();
	};

	const handleClearFilter = () => {
		const filtersActive = filterFromDate || filterToDate;

		if (filtersActive) {
			doClearFilter?.();
		} else {
			handleReload();
		}
	};

	const { loadListAllDiscount } = useExportListDiscountAll({ countPages: props.countPages });
	const [loading, setLoading] = useState(false);

	const handleExport = async () => {
		setLoading(true); 
		try {
		const data = await loadListAllDiscount(filterFromDate, filterToDate);
	
		const formattedData = data?.map((val: Collect) => ({
			"Ngày tháng": val.date ? moment(val.date).format("MM-YYYY") : "",
			"Tên": val.staff?.identifyName || "",
			"MST cá nhân": val.staff?.taxId || "",
			"CCCD": val.staff?.identifyCard || "",
			"Ngày sinh": (val.staff?.birthDay && moment(val.staff?.birthDay).format("HH:mm MM-YYYY")) || "",
			"Địa chỉ": val.staff?.address,
			"Ngày cấp": (val.staff?.dateOfIssueIdentify && moment(val.staff?.dateOfIssueIdentify).format("HH:mm MM-YYYY")) || "",
			"Nơi cấp": val.staff?.placeOfIssueIdentify || "",
			"Tổng thu nhập": Math.round((val.totalCommissionMoney || 0) * 100) / 100 || "",
			"Khấu trừ TNCN 10%": Math.round((val.deductionCommissionMoney || 0) * 100) / 100 || "",
			"Thực lĩnh": Math.round((val.totalMoney || 0) * 100) / 100,
		}));
	
		exportToExcel(formattedData, "DanhSachChietKhau.xlsx");
		} catch (error) {
			console.error("Lỗi khi export:", error);
		} finally {
			setLoading(false);
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
			<AdminTransactionFilterWrap className={isFilterVisible ? "visible" : ""}>
				<AdminTransactionFilterLeft>
					<AdminTransactionFilterDate>
						<AdminUserManagementFilterTitle>Lọc theo thời gian giao dịch</AdminUserManagementFilterTitle>
						<AdminOrderManagementFilterDate
							fromDate={(filterFromDate && filterFromDate) || null}
							toDate={(filterToDate && filterToDate) || null}
							doFilterFromDate={doFilterFromDate}
							doFilterToDate={doFilterToDate}
						/>
					</AdminTransactionFilterDate>
					<AdminOrderManagementReFilter>
						<AdminUserManagementFilterTitle>Hủy lọc</AdminUserManagementFilterTitle>
						<AdminUserManagementClearButton onClick={handleClearFilter}>
							<i
								className="fa fa-refresh"
								aria-hidden="true"></i>
						</AdminUserManagementClearButton>
					</AdminOrderManagementReFilter>
				</AdminTransactionFilterLeft>
				<AdminTransactionFilterRight>
				<AdminTransactionAddButtton onClick={handleExport} disabled={loading}>
	{loading ? "Đang xuất..." : "Export Excel"}
</AdminTransactionAddButtton>
								</AdminTransactionFilterRight>
			</AdminTransactionFilterWrap>
		</div>
	);
}
