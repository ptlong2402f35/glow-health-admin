import React from "react";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { AdminOrderManagementFilterDate } from "../adminOrderManagement/AdminOrderManagementControl";
import { AdminUserManagementFilterTitle } from "../adminUserManagement/styled/AdminUserManagementStyle";
import useExportRefer from "./hooks/useExportRefer";
import useLoadingDialog from "../../hooks/useLoadingDialog";
import useAlertDialog from "../../hooks/useAlertDialog";
import { AlertType } from "../../hooks/common/useAttachAlertDialog";
import {
	AdminTransactionAddButtton,
	AdminTransactionFilterDate,
	AdminTransactionFilterLeft,
	AdminTransactionFilterRight,
	AdminTransactionFilterWrap,
} from "../adminHistoryManagement/styled/StyledAdminTransaction";

export function ReferStatsFilter() {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();

	const { filterFromDate, filterToDate, doFilterFromDate, doFilterToDate, doClearFilter } = useCommonListFunctions();

	const { load } = useExportRefer({
		filterFromDate: filterFromDate,
		filterToDate: filterToDate,
		onBeginLoad: openLoadingDialog,
		onEndLoad: closeLoadingDialog,
	});

	const doExport = () => {
		openAlertDialog?.(AlertType.Confirm, "Xuất dữ liệu và tải về file excel?", undefined, load);
	};

	return (
		<div>
			<AdminTransactionFilterWrap className="visible">
				<AdminTransactionFilterLeft>
					<AdminTransactionFilterDate>
						<AdminUserManagementFilterTitle>Lọc theo thời gian</AdminUserManagementFilterTitle>
						<AdminOrderManagementFilterDate
							fromDate={(filterFromDate && filterFromDate) || null}
							toDate={(filterToDate && filterToDate) || null}
							doFilterFromDate={doFilterFromDate}
							doFilterToDate={doFilterToDate}
						/>
					</AdminTransactionFilterDate>
				</AdminTransactionFilterLeft>
				<AdminTransactionFilterRight>
					<AdminTransactionAddButtton onClick={doExport}>Xuất Excel</AdminTransactionAddButtton>
				</AdminTransactionFilterRight>
			</AdminTransactionFilterWrap>
		</div>
	);
}
