import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import Collect from "../../../../models/Collect";
import { StyleCommonTableContainerResp } from "../../adminUserManagement/styled/StyledTableUserManagement";
import { AdminTableRowStyle, xStyleTableCellRespHead } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import AdminCollectTableBody from "./AdminCollectTableBody";

export function AdminCollectTable(props: { listCollect: Collect[] }) {
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
								ngày tháng
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Tên KTV/SPA
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								MST/CCCD
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Địa chỉ
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Loại doanh thu
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Số tiền
							</CommonTableHeadCellResp>
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.listCollect.map((val, index) => (
							<AdminCollectTableBody
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
