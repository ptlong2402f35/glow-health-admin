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
import { Tags } from "../../../../models/Staff";
import TagsManagementTableBody from "./AdminTagsTableyBody";
import DialogUpdateTag from "./UpdateTagDialog";
export function TagsManagementTable(props: { listTags: Tags[]; reload: () => void }) {
	const classes = useCommonTableStyles();
	const [openUpdateStoreDialog, setOpenUpdateStoreDialog] = useState(false);
	const [list, setList] = useState<Tags>();

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
								{" "}
								Dịch vụ
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
						{props.listTags.map((val, index) => (
							<TagsManagementTableBody
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
			<DialogUpdateTag
				openUpdateStoreDialog={openUpdateStoreDialog}
				setOpenUpdateStoreDialog={setOpenUpdateStoreDialog}
				reload={props.reload}
				val={list}
			/>
		</React.Fragment>
	);
}
