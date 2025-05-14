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
import Service from "../../../../models/Service";
import Voucher from "../../../../models/Voucher";
import VoucherManagementTableBody from "./VoucherTableBody";
import DialogUpdateVoucher from "./UpdateVoucherDialog";

export function VoucherManagementTable(props: { listVoucher: Voucher[]; reload: () => void }) {
	const classes = useCommonTableStyles();
	const [openUpdateVoucherDialog, setOpenUpdateVoucherDialog] = useState(false);
	const [voucher, setVoucher] = useState<Voucher | null>(null);

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
								Voucher
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Code
							</CommonTableHeadCellResp>
							
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Đã dùng
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Thời gian bắt đầu
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Thời gian hết hạn
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
								Loại điều kiện
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
						{props.listVoucher.map((val, index) => (
							<VoucherManagementTableBody
								key={index}
								val={val}
								reload={props.reload}
								setOpenUpdateVoucherDialog={setOpenUpdateVoucherDialog}
								setVoucher={setVoucher}
							/>
						))}
					</TableBody>
				</Table>
				<DialogUpdateVoucher
					openUpdateVoucherDialog={openUpdateVoucherDialog}
					setOpenUpdateVoucherDialog={setOpenUpdateVoucherDialog}
					reload={props.reload}
					voucher={voucher}
				/>
			</StyleCommonTableContainerResp>
		</React.Fragment>
	);
}
