import React, { useEffect, useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import { Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router";
import useAlertDialog from "../../../../hooks/useAlertDialog";
import { AlertType } from "../../../../hooks/common/useAttachAlertDialog";
import { ProductTableRowStyle } from "../../../adminProductManagement/styled/ProductManagementStyle";
import { StyleTableCellRespContain } from "../../../adminUserManagement/styled/StyledTableUserManagement";
import { AdminParnerOptionOperation } from "../../../adminPartnerManagement/styled/StyleParner";
import { StatusType } from "../../../../../models/Service";
import StaffDetail from "../../../../../models/StaffDetail";
import { RebateImg, RebateImgWrap } from "../../../adminUserManagement/styled/AdminUserManagementStyle";
import { StaffTypeMap } from "../../../../../models/Staff";

export default function PromotionStaffManagementTableBody(props: {
	val: StaffDetail;
	reload: () => void;
	openUpdatePromotionDialog: boolean;
	setOpenUpdatePromotionDialog: (value: boolean) => void;
	setList: (val: StaffDetail) => void;
}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onEditService = async () => {
		props.setList(props.val);
		props.setOpenUpdatePromotionDialog(true);
	};
	const open = Boolean(anchorEl);
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">{props.val.id}</TableCell>
				<TableCell align="center">
					<RebateImgWrap>
						<RebateImg
							src={props.val.user?.urlImage || "./static/img/profile-circle.png"}
							alt=""
						/>
					</RebateImgWrap>
				</TableCell>
				<TableCell align="left">{props.val.name}</TableCell>

				<TableCell align="left">{props.val.user?.phone}</TableCell>
				<TableCell align="left">{props.val.type && StaffTypeMap.get(props.val.type)}</TableCell>

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
