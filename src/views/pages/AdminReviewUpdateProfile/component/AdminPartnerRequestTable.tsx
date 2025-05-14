import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import Staff, { StaffRequest } from "../../../../models/Staff";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import {
	$xStyleConstWidthSmTable,
	$xStyleConstWidthTable,
	$xStyleTableContainerResp,
	$xStyleTableContainerRespTbodyTr,
	$xStyleTableContainerRespTbodyTrTd,
	StyleCommonTableContainerResp,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import { AdminTableRowStyle, xStyleTableCellRespHead } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import AdminTableRow from "../../adminUserManagement/component/AdminTableRow";
import StaffRequestTableRow from "./StaffTableRow";

export function AdminPartnerRequestTable(props: { listStaff: StaffRequest[]; count: number; reload: () => void}) {
	const { page } = useCommonListFunctions();
	const classes = useCommonTableStyles();
	return (
		<React.Fragment>
			<StyleCommonTableContainerResp
				$isResTransaction={true}
				$xStyleTableContainerRespTbodyTrTd={$xStyleTableContainerRespTbodyTrTd}
				$xStyleTableContainerResp={$xStyleTableContainerResp}
				$xStyleTableContainerRespTbodyTr={$xStyleTableContainerRespTbodyTr}>
				<Table aria-label="simple table">
					<TableHead>
						<AdminTableRowStyle className={classes.tr}>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Ảnh đại diện
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Họ tên
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								ID
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Số điện thoại
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Loại thay đổi
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Trạng thái
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Ngày tạo
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Thao tác
							</CommonTableHeadCellResp>
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.listStaff.map((val, index) => (
							<StaffRequestTableRow
								reload={props.reload}
								key={index}
								index={index + 1 + ((page && (page - 1) * PERPAGE.Admin) || 0)}
								val={val}
							/>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
		</React.Fragment>
	);
}
