import React, { Fragment } from "react";
import UserGLow from "../../../../models/UserGlow";
import TableCell from "@material-ui/core/TableCell";
import StringManipulator from "../../../../utils/StringManipulator";
import moment from "moment";
import UserGlow, { UserRoleLabelMap } from "../../../../models/UserGlow";
import { useState } from "react";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import Popover from "@material-ui/core/Popover";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Link, useHistory } from "react-router-dom";
import Staff, { CareType, StaffRequest, ValidateStatusType } from "../../../../models/Staff";
import {
	AdminTableRowStyle,
	RebateImg,
	RebateImgWrap,
	StyleRebateTextPending,
	StyleRebateTextPendingCareStatus,
	StyleRebateTextPendingIdentifyCard,
	StyleRebateTextPendingPunish,
	StyleRebateTextPendingVerification,
	StyleRebateTextPendingcertificateImages,
} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import {
	$xStyleConstWidthTable,
	StyleFilterCell,
	StyleTableAdminFlex,
	StyleTableCell,
	StyleTableCellFilter,
	StyleTableCellRespContain,
	StyleTableCellRespContainName,
	StyleTableCellText,
	StyledAdminTableRowControlField,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { LinkRespContainName } from "../../adminPartnerManagement/styled/StyleParner";

export default function StaffRequestTableRow(props: {
	index: number;
	val: StaffRequest;
	reload: () => void;
}) {
	const classes = useCommonTableStyles();
	return (
		<AdminTableRowStyle
			className={classes.tr}
			key={props.val.id}>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCell>
					<Link to={`/technicians/${props.val.id}`}>
						<RebateImgWrap>
							<RebateImg
								// src={props.val.staff?.user?.urlImage || "./static/img/profile-circle.png"}
								alt=""
							/>
						</RebateImgWrap>
					</Link>
				</StyleTableCell>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContainName>
					<LinkRespContainName to={`/technicians/${props.val.id}`}>
						{/* <StyleTableCellText>{props.val.staff?.name}</StyleTableCellText> */}
					</LinkRespContainName>
				</StyleTableCellRespContainName>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCellText>{props.val.id}</StyleTableCellText>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					{/* <StyleTableCell>{props.val.staff?.user?.phone || "--"}</StyleTableCell> */}
				</StyleTableCellRespContain>
			</TableCell>

			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>{props.val.type || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>{props.val.status || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>

			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>
						{(props.val.createdAt && moment(props.val.createdAt).format("HH:mm DD-MM-YYYY")) || "--"}
					</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
		
				{/* <TableCell
					className={classes.td}
					align="center">
					<StyleTableCellRespContain>
						<PopoverAdminPartner
							val={props.val}
							reload={props.reload}
							setOpenPanishParnerDialog={setOpenPanishParnerDialog}
						/>
					</StyleTableCellRespContain>
				</TableCell> */}

		</AdminTableRowStyle>
	);
}

