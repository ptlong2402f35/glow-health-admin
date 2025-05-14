import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import Staff from "../../../../models/Staff";
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
import StaffTableRow from "./StaffTableRow";

export function AdminPartnerManagementTable(props: {
	listStaff: Staff[];
	count: number;
	reload: () => void;
	identifyMode?: boolean;
}) {
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
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Ngày sinh
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Giới tính
							</CommonTableHeadCellResp>
							{!props.identifyMode && (
								<CommonTableHeadCellResp
									$xStyleConstWidthHead={$xStyleConstWidthTable}
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									{" "}
									Mô tả
								</CommonTableHeadCellResp>
							)}
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Online
							</CommonTableHeadCellResp>
							{/* <CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Trạng Thái
							</CommonTableHeadCellResp> */}
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Tỉnh
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Rảnh
							</CommonTableHeadCellResp>

							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Cơ sở
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Ngày tạo
							</CommonTableHeadCellResp>
							{!props.identifyMode && (
								<CommonTableHeadCellResp
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									Thao tác
								</CommonTableHeadCellResp>
							)}
							{props.identifyMode && (
								<CommonTableHeadCellResp
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									Thao tác
								</CommonTableHeadCellResp>
							)}
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.listStaff.map((val, index) => (
							<StaffTableRow
								reload={props.reload}
								key={index}
								index={index + 1 + ((page && (page - 1) * PERPAGE.Admin) || 0)}
								val={val}
								identifyMode={props.identifyMode}
							/>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
		</React.Fragment>
	);
}
