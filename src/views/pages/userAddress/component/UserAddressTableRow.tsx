import React, { useState } from "react";
import UserAddress from "../../../../models/UserAddress";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import { AdminTableRowStyle, StyleAddUser } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { TableCell } from "@material-ui/core";
import {
	$xStyleConstWidthTable,
	StyleTableCell,
	StyleTableCellRespContain,
	StyleTableCellText,
	StyledAdminTableRowControlField,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import DialogUserAddressUpdate from "./DialogUserAddressUpdate";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { defaultUserAddress, deleteUserAddress } from "../../../../services/AllAddressService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import useDeleteUserAddress from "../hook/useDeleteUserAddress";
import useConfirmDefaultAddress from "../hook/useConfirmDefaultAddress";

export default function UserAddressTableRow(props: {
	index: number;
	val: UserAddress;
	reload: () => void;
	setIsEditing: (value: boolean) => void;
	setUserAddressDetail: (value: UserAddress) => void;
}) {
	const classes = useCommonTableStyles();
	const { openAlertDialog } = useAlertDialog();
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { onDeleteAddress } = useDeleteUserAddress({ id: props.val.id, reload: props.reload });
	const { onDefaultAddress } = useConfirmDefaultAddress({ id: props.val.id, reload: props.reload });

	const onConfirmDeleteAddress = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn xóa địa chỉ này?",
			() => {},
			() => {
				onDeleteAddress();
			}
		);
	};

	const onConfirmDefaultAddress = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn đặt địa chỉ này làm địa chỉ mặc định?",
			() => {},
			() => {
				onDefaultAddress();
			}
		);
	};

	const onOpenAddress = () => {
		props.setUserAddressDetail(props.val);
		props.setIsEditing(true);
	};

	return (
		<AdminTableRowStyle
			className={classes.tr}
			key={props.val.id}>
			{/* <TableCell
				className={classes.td}
				align="center">
				{" "}
				<StyleTableCellRespContain>
					<StyleTableCell>
						<AdminCheckBox
							isSelected={props.isSelected}
							item={props.val}
							onSelected={props.onSelected}
						/>
					</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthSmTable}>
					<StyleTableCellText>{props.index}</StyleTableCellText>
				</StyleTableCellRespContain>
			</TableCell> */}
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCellText>{props.index}</StyleTableCellText>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCellText>{props.val.customerName}</StyleTableCellText>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCellText>{props.val.phone || "--"}</StyleTableCellText>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.address || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.note || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.province?.name || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.district?.name || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.commune?.name || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.long ? props.val.long.toFixed(3) : "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.lat ? props.val.lat.toFixed(3) : "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.default ? "Mặc định" : "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>
						<StyledAdminTableRowControlField onClick={onOpenAddress}>
							<img src="./static/img/personal_change_icon.jpg" />
						</StyledAdminTableRowControlField>
						<StyledAdminTableRowControlField onClick={() => onConfirmDeleteAddress()}>
							<img src="./static/img/trash.png" />
						</StyledAdminTableRowControlField>
						<StyleAddUser onClick={() => onConfirmDefaultAddress()}>Mặc định</StyleAddUser>
					</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
		</AdminTableRowStyle>
	);
}
