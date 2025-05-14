import React, { useState } from "react";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import {
	$xStyleConstWidthSmTable,
	$xStyleConstWidthTable,
	StyleCommonTableContainerResp,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { AdminTableRowStyle, xStyleTableCellRespHead } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import Store from "../../../../models/Store";
import StoreManagementTableBody from "./AdminStoreTablyBody";
import DialogUpdateStore from "./UpdateStoreDialog";
export function StoreManagementTable(props: { listStore: Store[]; reload: () => void }) {
	const classes = useCommonTableStyles();
	const [openUpdateStoreDialog, setOpenUpdateStoreDialog] = useState(false);
	const [list, setList] = useState<Store>();

	return (
		<React.Fragment>
			<StyleCommonTableContainerResp>
				<Table aria-label="simple table">
					<TableHead>
						<AdminTableRowStyle>
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
								Tên
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Trạng thái
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								SĐT chủ cơ sở
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Tỷ lệ hủy đơn
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Ngày tạo
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Chi tiết
							</CommonTableHeadCellResp>
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.listStore.map((val, index) => (
							<StoreManagementTableBody
								key={index}
								val={val}
								reload={props.reload}
								setOpenUpdateStoreDialog={setOpenUpdateStoreDialog}
								openUpdateStoreDialog={openUpdateStoreDialog}
								setList={setList}
							/>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
			<DialogUpdateStore
				openUpdateStoreDialog={openUpdateStoreDialog}
				setOpenUpdateStoreDialog={setOpenUpdateStoreDialog}
				reload={props.reload}
				store={list}
			/>
		</React.Fragment>
	);
}
