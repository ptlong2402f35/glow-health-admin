import React, { useEffect } from "react";
import UserGLow from "../../../../models/UserGlow";
import TableCell from "@material-ui/core/TableCell";
import StringManipulator from "../../../../utils/StringManipulator";
import moment from "moment";
import UserGlow, { UserRoleLabelMap } from "../../../../models/UserGlow";
import { useState } from "react";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";

import {
	StyleTableCell,
	StyleTableCellRespContain,
	$xStyleConstWidthTable,
	StyleTableCellText,
	StyledAdminTableRowControlField,
	StyleTableAdminFlex,
	BlackListAdminUser,
} from "../styled/StyledTableUserManagement";
import {
	RebateImgWrap,
	RebateImg,
	AdminTableRowStyle,
	StyleRebateTextPending,
	StyleUserAddress,
	StyleUserBan,
	StyleTableCellBackList,
	StyleTableCellBackListInner,
} from "../styled/AdminUserManagementStyle";
import DialogUserUpdate from "./DialogUserUpdate";
import DialogUserCreated from "./DialogUserCreated";
import { Link } from "react-router-dom";
import useBanUser from "../hook/useBanUser";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useactiveUser from "../hook/useActiveUser";
import { Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";
import { GenderTypeMap } from "../../../../models/Staff";
import useActiveStaff from "../hook/useActiveStaff";
import useBlockSpamUser from "../hook/useBlockSpam";
import usePunishUser from "../hook/usePunishUser";
import { CustomerPunishmentType } from "../../../../models/User";

export default function AdminTableRow(props: {
	index: number;
	val: UserGLow;
	reload: () => void;
	isSelected: (item: UserGlow) => boolean;
	onSelected: (item: UserGlow, checked: boolean) => void;
	setUserDetail: (value: UserGlow) => void;
	setIsEditing: (value: boolean) => void;
	setIsOpenDialog: (value: boolean) => void;
}) {
	const classes = useCommonTableStyles();

	const [isEditing, setIsEditing] = useState(false);
	const { doBanUser } = useBanUser({ reload: props.reload });
	const { doActiveUser } = useactiveUser({ reload: props.reload });
	const { doActiveStaff } = useActiveStaff({ reload: props.reload });
	const { useBlockSpam } = useBlockSpamUser({ reload: props.reload });
	const { doPunishUser } = usePunishUser({ reload: props.reload });
	const { openAlertDialog } = useAlertDialog();
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleBanUser = async (id: number) => {
		const banValue = !props.val.isBanned;
		const confirmationMessage = props.val.isBanned
			? "Đưa tài khoản người dùng ra khỏi danh sách Blacklist?"
			: "Thêm tài khoản người dùng vào danh sách Blacklist?";
		openAlertDialog?.(
			AlertType.Confirm,
			confirmationMessage,
			() => {},
			() => doBanUser(id || 0, banValue),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const handleActiveUser = async (id: number, activeType: boolean) => {
		const confirmationMessage = props.val.active
			? "Xác nhận hủy kích hoạt tài khoản?"
			: "Xác nhận kích hoạt tài khoản?";
		openAlertDialog?.(
			AlertType.Confirm,
			confirmationMessage,
			() => {},
			() => doActiveUser(id || 0, activeType),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const handleActiveStaff = async (id: number, activeType: boolean) => {
		const confirmationMessage = props.val.staff?.active ? "Xác nhận hủy đối tác?" : "Xác nhận khôi phục đối tác";
		openAlertDialog?.(
			AlertType.Confirm,
			confirmationMessage,
			() => {},
			() => doActiveStaff(id || 0, activeType),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const handleBlockSpam = async (id: number) => {
		const confirmationMessage = "Chắc chắn hủy chặn spam người này";
		openAlertDialog?.(
			AlertType.Confirm,
			confirmationMessage,
			() => {},
			() => useBlockSpam(id || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const handlePunishUser = async (id: number, punishmentType: number) => {
		const punishType = punishmentType === 0 ? true : false;
		const confirmationMessage = "Chắc chắn phạt người này";
		openAlertDialog?.(
			AlertType.Confirm,
			confirmationMessage,
			() => {},
			() => doPunishUser(id || 0, punishType),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const onConfirmOpenChange = () => {
		props.setUserDetail(props.val);
		props.setIsEditing(true);
	};

	const onConfirmFeedback = () => {
		props.setUserDetail(props.val);
		props.setIsOpenDialog(true);
	};
	const open = Boolean(anchorEl);

	return (
		<AdminTableRowStyle
			$RebateActive={props.isSelected(props.val)}
			className={classes.tr}
			key={props.val.id}>
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
				<StyleTableCell>
					<RebateImgWrap onClick={onConfirmOpenChange}>
						<RebateImg
							src={props.val.urlImage || "./static/img/profile-circle.png"}
							alt=""
						/>
					</RebateImgWrap>
				</StyleTableCell>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleRebateTextPending $xIsOnline={props.val.active}>
						{props.val.active ? "Kích hoạt" : "Chưa kích hoạt"}
					</StyleRebateTextPending>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCellText>{props.val.userName || "--"}</StyleTableCellText>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>{props.val.phone || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>{StringManipulator.formatBalance(props.val.totalMoney)} đ</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain $xStyleConstWidthTable={$xStyleConstWidthTable}>
					<StyleTableCell>{props.val.email || "--"}</StyleTableCell>
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
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>{props.val.storeOwner?.name || ""}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>
						<StyleTableCell>{GenderTypeMap.get(props.val.gender || 1)}</StyleTableCell>
					</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>


			<TableCell
				className={classes.td}
				align="center">
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
								<AdminParnerOptionOperation onClick={onConfirmOpenChange}>
									Sửa
								</AdminParnerOptionOperation>
							
								<>
									{props.val.active ? (
										<AdminParnerOptionOperation
											onClick={() => handleActiveUser(props.val.id || 0, false)}>
											Hủy kích hoạt
										</AdminParnerOptionOperation>
									) : (
										<AdminParnerOptionOperation
											onClick={() => handleActiveUser(props.val.id || 0, true)}>
											Kích hoạt
										</AdminParnerOptionOperation>
									)}
								</>
							</div>
						</Popover>
					</div>
				</StyleTableCellRespContain>
			</TableCell>
		</AdminTableRowStyle>
	);
}
