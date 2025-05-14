import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import {} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { ProductTableRowStyle } from "../../adminProductManagement/styled/ProductManagementStyle";
import Voucher, { ConditionType } from "../../../../models/Voucher";
import moment from "moment";
import { StyleTableCellRespContain } from "../../adminUserManagement/styled/StyledTableUserManagement";
import { Popover } from "@material-ui/core";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useUpdateActiveVoucher from "../hook/useUpdateActive";
import { VoucherEffective, VoucherNoEffective } from "../styled/StyledAdminVoucher";

export default function VoucherManagementTableBody(props: {
	val: Voucher;
	reload: () => void;
	setOpenUpdateVoucherDialog: (value: boolean) => void;
	setVoucher: (value: Voucher) => void;
}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const { openAlertDialog } = useAlertDialog();
	const { updateActive } = useUpdateActiveVoucher({ reload: props.reload });

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	const handleUpdateStatusStaff = async (id: number, status: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi trạng thái Voucher này?",
			() => {},
			() => updateActive(id || 0, status),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const openUpdateDialog = () => {
		props.setOpenUpdateVoucherDialog(true);
		props.setVoucher(props.val);
	};

	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="center">{props.val.name}</TableCell>
				<TableCell align="center"> {props.val.code}</TableCell>
				<TableCell align="center">
					{props.val.quantity && props.val.used ? parseInt(props.val.quantity) - parseInt(props.val.used) : 0}
				</TableCell>
				<TableCell align="center">
					{(props.val.startAt && moment(props.val?.startAt).format("HH:mm DD-MM-YYYY")) || ""}
				</TableCell>

				<TableCell align="center">
					{(props.val.endAt && moment(props.val?.endAt).format("HH:mm DD-MM-YYYY")) || ""}
				</TableCell>
				<TableCell align="center">
					{props.val.status == "1" ? (
						<VoucherEffective>Có hiệu lực</VoucherEffective>
					) : (
						<VoucherNoEffective>Không hiệu lực</VoucherNoEffective>
					)}
				</TableCell>
				<TableCell align="center">
					{props.val.scope == "1" ? (
						<VoucherEffective>Cho tất cả</VoucherEffective>
					) : (
						<VoucherNoEffective>Đặc biệt</VoucherNoEffective>
					)}
				</TableCell>

				<TableCell align="center">
					<StyleTableCellRespContain>
						<div>
							<MoreVertIcon
								onClick={handleClick}
								style={{ cursor: "pointer" }}
							/>
							<Popover
								open={open}
								anchorEl={anchorEl}
								onClose={handleClose}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}>
								<div>
									<AdminParnerOptionOperation onClick={openUpdateDialog}>
										Xem chi tiết
									</AdminParnerOptionOperation>

									<AdminParnerOptionOperation
										onClick={() => handleUpdateStatusStaff(props.val.id || 0, props.val.status == "1" ? 2: 1)}>
										{props.val.status == "1" ? "Hủy kích hoạt" : "Kích hoạt"}
									</AdminParnerOptionOperation>
								</div>
							</Popover>
						</div>
					</StyleTableCellRespContain>
				</TableCell>
			</ProductTableRowStyle>
		</>
	);
}
