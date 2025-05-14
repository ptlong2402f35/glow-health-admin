import React, { useEffect, useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
	StyleTableCell,
	StyleTableCellRespContain,
	StyleTableCellText,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import { RebateImg } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	ButtonAdminProductManagement,
	ProductTableRowStyle,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import Store, { StatusType, StatusTypeMap } from "../../../../models/Store";
import moment from "moment";
import { Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";
import Blog from "../../../../models/Blog";
import { BlogListContentTitle } from "../../blog/styled/blogStyled";
import { Link, useHistory } from "react-router-dom";
import MetaLoader from "../../../../models/MetaLoader";
import useUpdateActiveCustomLink from "../hook/useUpdateActiveCustomLink";

export default function CustomSEOManagementTableBody(props: {
	val: MetaLoader;
	reload: () => void;
	openUpdateCustomDialog: boolean;
	setOpenUpdateCustomDialog: (value: boolean) => void;
	setList: (val: MetaLoader) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onEditService = async () => {
		props.setList(props.val);
		props.setOpenUpdateCustomDialog(true);
	};

	const { doActive } = useUpdateActiveCustomLink({ reload: props.reload });

	const onUpdateStatus = async (id: string, status: boolean) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi trạng thái Blog này?",
			() => {},
			() => doActive(id, status),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const open = Boolean(anchorEl);
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">{props.val.id}</TableCell>
				<TableCell align="left">{props.val.name}</TableCell>
				<TableCell align="center">
					<>
						{props.val.active	? "Hoạt động" : "Không hoạt động"}
					</>
				</TableCell>

				<TableCell align="center">{props.val.originalLink || "--"}</TableCell>
                <TableCell align="center">{props.val.newLink || "--"}</TableCell>
                <TableCell align="center">{props.val.title || "--"}</TableCell>
                <TableCell align="center">{props.val.description || "--"}</TableCell>
                <TableCell align="center">{props.val.keyword || "--"}</TableCell>
				<TableCell align="center">{props.val.h1Content || "--"}</TableCell>

				<TableCell align="center">
					{(props.val.updatedAt && moment(props.val.updatedAt).format("HH:mm DD-MM-YYYY")) || "--"}
				</TableCell>
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
									{props.val.active ? (
										<AdminParnerOptionOperation
											onClick={() => onUpdateStatus(props.val.id || "0", false)}>
											Ngừng KH
										</AdminParnerOptionOperation>
									) : (
										<AdminParnerOptionOperation
											onClick={() => onUpdateStatus(props.val.id || "0", true)}>
											Kích hoạt
										</AdminParnerOptionOperation>
									)}
								</div>
							</Popover>
						</div>
					</StyleTableCellRespContain>
				</TableCell>
			</ProductTableRowStyle>
		</>
	);
}
