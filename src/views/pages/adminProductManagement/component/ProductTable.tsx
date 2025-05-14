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
import ProductManagementTableBody from "./ProductManagementTableBody";
import Service from "../../../../models/Service";
import useListDetailProducts from "../hook/useGetListDetailProduct";
import DialogUpdateService from "./UpdateProductDialog";
import UpdateServicePriceDialog from "./UpdateProductDefaultDialog";

export function ProductManagementTable(props: { listProduct: Service[]; reload: () => void }) {
	const classes = useCommonTableStyles();
	const [openUpdateServiceDialog, setOpenUpdateServiceDialog] = useState(false);
	const [openUpdatePriceServiceDialog, setOpenUpdatePriceServiceDialog] = useState(false);
	const { doListDetailProducts, listDetail } = useListDetailProducts();
	const [list, setList] = useState<Service>();

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
								Tên
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
								{" "}
								Nhóm dịch vụ
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
						{props.listProduct.map((val, index) => (
							<ProductManagementTableBody
								key={index}
								val={val}
								reload={props.reload}
								setOpenUpdateServiceDialog={setOpenUpdateServiceDialog}
								openUpdateServiceDialog={openUpdateServiceDialog}
								doListDetailProducts={doListDetailProducts}
								setList={setList}
								openUpdatePriceServiceDialog={openUpdatePriceServiceDialog}
								setOpenUpdatePriceServiceDialog={setOpenUpdatePriceServiceDialog}
							/>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
			<DialogUpdateService
				openUpdateServiceDialog={openUpdateServiceDialog}
				setOpenUpdateServiceDialog={setOpenUpdateServiceDialog}
				reload={props.reload}
				service={list}
			/>
			<UpdateServicePriceDialog
				openUpdateServiceDialog={openUpdatePriceServiceDialog}
				setOpenUpdateServiceDialog={setOpenUpdatePriceServiceDialog}
				reload={props.reload}
				service={list}
			/>
		</React.Fragment>
	);
}
