import React, { useEffect, useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
	StyleTableCell,
	StyleTableCellRespContain,
	StyleTableCellText,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import {} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	ButtonAdminProductManagement,
	ProductTableRowStyle,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import Store, { StatusType, StatusTypeMap } from "../../../../models/Store";
import moment from "moment";
import useStatusStore from "../hook/useUpdateStatus";
import { Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";

export default function StoreManagementTableBody(props: {
	val: Store;
	reload: () => void;
	openUpdateStoreDialog: boolean;
	setOpenUpdateStoreDialog: (value: boolean) => void;
	setList: (val: Store) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const { loadStatus } = useStatusStore({ reload: props.reload });

	const onUpdateStatus = async (id: number, status: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi trạng thái chủ cơ sở này?",
			() => {},
			() => loadStatus(id || 0, status),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onEditService = async () => {
		props.setList(props.val);
		props.setOpenUpdateStoreDialog(true);
	};
	const open = Boolean(anchorEl);
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">{props.val.id}</TableCell>
				<TableCell align="left">{props.val.name}</TableCell>

				<TableCell align="center">
					<>
						{props.val.status == StatusType.ACCTIVE
							? StatusTypeMap.get(StatusType.ACCTIVE)
							: StatusTypeMap.get(StatusType.UNACCTIVE)}
					</>
				</TableCell>

				<TableCell align="center">{props.val.walletOwner?.phone || "--"}</TableCell>
				<TableCell>{Math.round((props.val.orderCancelRate || 0) * 100) / 100}%</TableCell>

				<TableCell align="center">
					{(props.val.createdAt && moment(props.val.createdAt).format("HH:mm DD-MM-YYYY")) || "--"}
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
									<AdminParnerOptionOperation onClick={onEditService}>Sửa</AdminParnerOptionOperation>
								</div>
							</Popover>
						</div>
					</StyleTableCellRespContain>
				</TableCell>
			</ProductTableRowStyle>
		</>
	);
}
