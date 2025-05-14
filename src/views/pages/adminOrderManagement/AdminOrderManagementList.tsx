import React, { Fragment, useState } from "react";
import Orderv2 from "../../../models/Orderv2";
import { CommonTableHeadCellResp } from "../../controls/components/commonTable/StyledCommonTableResp";
import { AdminOrderTableRowStyle, StyledAdminOrderTableContainer } from "./styled/StyledAdminOrdermanagement";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import { useCommonTableStyles } from "../../controls/components/commonTable/CommonTable";
import AdminOrderTableRowItem from "./AdminOrderTableRowItem";
import DialogProofCancellation from "./DialogProofCancellation";

export default function AdminOrderManagementList(props: { listOrders: Orderv2[];reload: () => void; }) {
	const classes = useCommonTableStyles();
	const [isEditing, setIsEditing] = useState(false);
	const [order, setOrder] = useState<Orderv2>();
	return (
		<StyledAdminOrderTableContainer>
			<Table aria-label="simple table">
				<TableHead>
					<AdminOrderTableRowStyle>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							id
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Thời gian
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Loại đơn
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Loại đơn hẹn lịch
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Giờ hẹn lịch
						</CommonTableHeadCellResp>
						
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Số điện thoại
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Kỹ thuật viên
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Mã đơn hàng
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Tổng thanh toán
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Khuyến mãi
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Doanh thu
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Vị trí
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Nhân viên thực hiện
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Dịch vụ
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Trạng thái
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Thanh toán
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Ứng tuyển
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Đánh giá
						</CommonTableHeadCellResp>

						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Tên cơ sở
						</CommonTableHeadCellResp>

						<CommonTableHeadCellResp
							// $xStyleConstWidthHead={$xStyleConstWidthSmTable}
							// // $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Chi tiết
						</CommonTableHeadCellResp>
						<CommonTableHeadCellResp
							// $xStyleTableCellRespHead={xStyleTableCellRespHead}
							className={classes.th}
							align="center">
							Thao tác
						</CommonTableHeadCellResp>
					</AdminOrderTableRowStyle>
				</TableHead>
				<TableBody>
					{(props.listOrders || []).map((order) => (
						<Fragment key={order.id + "admin-order"}>
							<AdminOrderTableRowItem
								order={order}
								setOrder={setOrder}
								setIsEditing={setIsEditing}
							/>
						</Fragment>
					))}
				</TableBody>
			</Table>
			<DialogProofCancellation
				isEditing={isEditing}
				setIsEditing={setIsEditing}
				order={order}
				reload={props.reload}
			/>
		</StyledAdminOrderTableContainer>
	);
}
