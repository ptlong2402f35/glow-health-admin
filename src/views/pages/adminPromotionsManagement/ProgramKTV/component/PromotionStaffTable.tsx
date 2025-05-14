import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import {
	$xStyleConstWidthSmTable,
	StyleCommonTableContainerResp,
} from "../../../adminUserManagement/styled/StyledTableUserManagement";
import {
	AdminTableRowStyle,
	xStyleTableCellRespHead,
} from "../../../adminUserManagement/styled/AdminUserManagementStyle";
import { CommonTableHeadCellResp } from "../../../../controls/components/commonTable/StyledCommonTableResp";
import { useCommonTableStyles } from "../../../../controls/components/commonTable/CommonTable";
import StaffDetail from "../../../../../models/StaffDetail";
import PromotionStaffManagementTableBody from "./PromotionStaffTableBody";
import DialogUpdatePromotionStaff from "./DialogUpdatePromotion";

export function StaffPromotionManagementTable(props: { listStaffPromotions: StaffDetail[]; reload: () => void }) {
	const classes = useCommonTableStyles();
	const [openUpdatePromotionDialog, setOpenUpdatePromotionDialog] = useState(false);
	const [list, setList] = useState<StaffDetail>();

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
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Ảnh
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Tên
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Số điện thoại
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Loại KTV
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
						{props.listStaffPromotions.map((val, index) => (
							<PromotionStaffManagementTableBody
								val={val}
								reload={props.reload}
								openUpdatePromotionDialog={openUpdatePromotionDialog}
								setOpenUpdatePromotionDialog={setOpenUpdatePromotionDialog}
								setList={setList}
							/>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
			<DialogUpdatePromotionStaff
				openUpdatePromotionDialog={openUpdatePromotionDialog}
				setOpenUpdatePromotionDialog={setOpenUpdatePromotionDialog}
				reload={props.reload}
				list={list}
			/>
		</React.Fragment>
	);
}
