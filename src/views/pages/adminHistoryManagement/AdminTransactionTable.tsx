import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import {
	$xStyleConstWidthSmTable,
	StyleCommonTableContainerResp,
} from "../adminUserManagement/styled/StyledTableUserManagement";
import { AdminTableRowStyle, xStyleTableCellRespHead } from "../adminUserManagement/styled/AdminUserManagementStyle";
import { useCommonTableStyles } from "../../controls/components/commonTable/CommonTable";
import { CommonTableHeadCellResp } from "../../controls/components/commonTable/StyledCommonTableResp";
import Transaction from "../../../models/Transaction";
import AdminTransactionTableBody from "./AdminTransactionTableBody";

export function AdminTransactionTable(props: { listTransaction: Transaction[] }) {
	const classes = useCommonTableStyles();

	return (
		<React.Fragment>
			<StyleCommonTableContainerResp>
				<Table aria-label="simple table">
					<TableHead>
						<AdminTableRowStyle>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Mã giao dịch
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Chủ ví Glow
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Người tạo giao dịch
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Nội dung giao dịch
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Số tiền giao dịch
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Số dư sau giao dịch
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Loại giao dịch
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Trạng thái
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Thời gian giao dịch
							</CommonTableHeadCellResp>
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.listTransaction.map((val, index) => (
							<AdminTransactionTableBody
								key={index}
								val={val}
							/>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
		</React.Fragment>
	);
}
