import React, { Fragment, useEffect, useState } from "react";
import {
	$xStyleConstWidthSmTable,
	StyleCommonTableContainerResp,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { AdminTableRowStyle, xStyleTableCellRespHead } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import { PersonalReviewTitle, ServicePersonalHeadTitle } from "../styled/StylePersonal";
import StaffDetail from "../../../../models/StaffDetail";
import {
	ButtonAddAdminProductManagement,
	ProductTableRowStyle,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import TableCell from "@material-ui/core/TableCell";
import ServicePersonalTable from "./ServicePersonalTable";
import AddServicePersonalDialog from "./AddServicePersonalDialog";
import UpdateServicePersonalDialog from "./UpdateServicePersonalDialog";
import UpdateServicePriceDialog from "./UpdateServicePriceDialog";
import StaffService from "../../../../models/StaffService";

export default function ServicePersonal(props: { reload: () => void; staffDetail?: StaffDetail | null | undefined }) {
	const classes = useCommonTableStyles();
	const [openAddServiceDialog, setOpenAddServiceDialog] = useState(false);
	const [openUpdateServiceDialog, setOpenUpdateServiceDialog] = useState(false);
	const [openUpdatePriceDialog, setOpenUpdatePriceDialog] = useState(false);
	const [serviceId, setServiceId] = useState(0);
	const [serviceName, setServiceName] = useState("");
	const [serviceStaffId, setServiceStaffId] = useState(0);
	const [staffService, setStaffService] = useState({
		prices: [{ unit: "", price: 0 }],
	});
	const [staffServicePersonal, setStaffServicePersonal] = useState<StaffService>();
	const [description, setDescription] = useState("");

	useEffect(() => {
		setServiceId(props.staffDetail?.id || 0);
	});
	return (
		<Fragment>
			<ServicePersonalHeadTitle>
				<PersonalReviewTitle>Dịch vụ của kỹ thuật viên</PersonalReviewTitle>
				<ButtonAddAdminProductManagement
					onClick={() => {
						setOpenAddServiceDialog(true);
					}}>
					Thêm
				</ButtonAddAdminProductManagement>
			</ServicePersonalHeadTitle>
			<div>
				<StyleCommonTableContainerResp>
					<Table aria-label="simple table">
						<TableHead>
							<AdminTableRowStyle>
								<CommonTableHeadCellResp
									$xStyleConstWidthHead={$xStyleConstWidthSmTable}
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									STT
								</CommonTableHeadCellResp>
								<CommonTableHeadCellResp
									$xStyleConstWidthHead={$xStyleConstWidthSmTable}
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									Tên dịch vụ
								</CommonTableHeadCellResp>
								<CommonTableHeadCellResp
									$xStyleConstWidthHead={$xStyleConstWidthSmTable}
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									Dịch vụ
								</CommonTableHeadCellResp>
								<CommonTableHeadCellResp
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									Bảng giá
								</CommonTableHeadCellResp>
								<CommonTableHeadCellResp
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									Nhóm dịch vụ
								</CommonTableHeadCellResp>
								<CommonTableHeadCellResp
									$xStyleConstWidthHead={$xStyleConstWidthSmTable}
									$xStyleTableCellRespHead={xStyleTableCellRespHead}
									className={classes.th}
									align="center">
									Chức năng
								</CommonTableHeadCellResp>
							</AdminTableRowStyle>
						</TableHead>
						<TableBody>
							{props.staffDetail?.staffService?.map((val, index) => (
								<ServicePersonalTable
									index={index}
									staffService={val}
									openUpdateServiceDialog={openUpdateServiceDialog}
									setOpenUpdateServiceDialog={setOpenUpdateServiceDialog}
									reload={props.reload}
									openUpdatePriceDialog={openUpdatePriceDialog}
									setOpenUpdatePriceDialog={setOpenUpdatePriceDialog}
									setServiceStaffId={setServiceStaffId}
									setServiceName={setServiceName}
									setStaffService={setStaffService}
									setStaffServicePersonal={setStaffServicePersonal}
									setDescription={setDescription}
									staffDetail={props.staffDetail}
								/>
							))}
						</TableBody>
					</Table>
				</StyleCommonTableContainerResp>
			</div>

			<AddServicePersonalDialog
				openAddServiceDialog={openAddServiceDialog}
				setOpenAddServiceDialog={setOpenAddServiceDialog}
				reload={props.reload}
				serviceId={serviceId}
			/>
			<UpdateServicePersonalDialog
				openUpdateServiceDialog={openUpdateServiceDialog}
				setOpenUpdateServiceDialog={setOpenUpdateServiceDialog}
				reload={props.reload}
				serviceId={serviceId}
				staffId={props.staffDetail?.id}
				staffService={staffServicePersonal}
			/>
			<UpdateServicePriceDialog
				openUpdatePriceDialog={openUpdatePriceDialog}
				setOpenUpdatePriceDialog={setOpenUpdatePriceDialog}
				reload={props.reload}
				serviceId={serviceId}
				serviceStaffId={serviceStaffId}
				serviceName={serviceName}
				staffService={staffService}
				staffId={props.staffDetail?.id}
				description={description}
			/>
		</Fragment>
	);
}
