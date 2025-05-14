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
import { Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";
import { Tags } from "../../../../models/Staff";

export default function TagsManagementTableBody(props: {
	val: Tags;
	reload: () => void;
	openUpdateStoreDialog: boolean;
	setOpenUpdateStoreDialog: (value: boolean) => void;
	setList: (val: Tags) => void;
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
		props.setOpenUpdateStoreDialog(true);
	};
	const open = Boolean(anchorEl);
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">{props.val.id}</TableCell>
				<TableCell align="left">{props.val.name}</TableCell>
				<TableCell align="left">{props.val.serviceGroup}</TableCell>
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
