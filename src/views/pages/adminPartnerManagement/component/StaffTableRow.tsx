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
import Staff, { CareType, ValidateStatusType } from "../../../../models/Staff";
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
import {
	AdminParnerOptionOperation,
	DescriptionParnerTableCell,
	LinkRespContainName,
	StaffIdentifyDialogBtn,
} from "../styled/StyleParner";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useUpdateStatusStaff from "../hook/useUpdateStatusStaff";
import useStaffBackToWord from "../hook/useStaffBackToWord";
import useVerification from "../hook/useVerification";
import useUpdateBusytaff from "../hook/useBusyStaff";
import DialogDescriptionParner from "./DialogDescriptionParner";
import useUpdateDescriptionStaff from "../hook/useUpdateDescription";
import useSendAds from "../hook/useCreatedStaff";
import useUpdateGlowCare from "../hook/useUpdateGlowCare";
import usePunishPartner from "../hook/usePunishPartner";
import DialogPanishStaff from "./DialogPanishStaff";
import IdentifyUpdateDialog from "./IdentifyUpdateDialog";

export default function StaffTableRow(props: {
	index: number;
	val: Staff;
	reload: () => void;
	identifyMode?: boolean;
}) {
	const classes = useCommonTableStyles();
	const [openAddDescriptionParnerDialog, setOpenDescriptionParnerDialog] = useState(false);
	const [openPanishParnerDialog, setOpenPanishParnerDialog] = useState(false);
	const [openUpdIdentify, setOpenUpdIdentify] = useState(false);

	const calculateAge = (val: string | null | undefined) => {
		if (!val) return "--";
		const today = moment();
		const birthDate = moment(val);
		const age = today.diff(birthDate, "years");
		return age + 1;
	};

	// const truncatedDescription = props.val.description
	// 	? props.val.description.length > 20
	// 		? `${props.val.description.substring(0, 20)}...`
	// 		: props.val.description
	// 	: "--";

	const truncatedDescription = props.val.description ? props.val.description : "--";

	const handleClick = () => {
		setOpenDescriptionParnerDialog(true);
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
				<StyleTableCell>
					<Link to={`/technicians/${props.val.id}`}>
						<RebateImgWrap>
							<RebateImg
								src={props.val.user?.urlImage || "./static/img/profile-circle.png"}
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
						<StyleTableCellText>{props.val.name}</StyleTableCellText>
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
					<StyleTableCell>{props.val.user?.phone || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>
						{props.val.birthDay || "--"} ({calculateAge(props.val.birthDay)} tuổi)
					</StyleTableCell>
					<StyleTableCell></StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>{props.val.gender ? "Nam" : "Nữ"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			{!props.identifyMode && (
				<TableCell
					className={classes.td}
					align="center">
					<StyleTableCellRespContain>
						<DescriptionParnerTableCell>
							{truncatedDescription}
						</DescriptionParnerTableCell>
					</StyleTableCellRespContain>
				</TableCell>
			)}
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleRebateTextPending $xIsOnline={props.val.online && props.val.active}>
						{props.val.online && props.val.active ? "Online" : "Offline"}
					</StyleRebateTextPending>
				</StyleTableCellRespContain>
			</TableCell>
			{/* <TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleRebateTextPending $xIsOnline={props.val.active}>
						{props.val.active ? "Đang hoạt động" : "Không hoạt động"}
					</StyleRebateTextPending>
				</StyleTableCellRespContain>
			</TableCell> */}
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>{props.val.province?.name || "--"}</StyleTableCell>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleRebateTextPending $xIsOnline={!props.val.busy}>
						{props.val.busy && props.val.busy ? "Bận" : "Rảnh"}
					</StyleRebateTextPending>
				</StyleTableCellRespContain>
			</TableCell>
			<TableCell
				className={classes.td}
				align="center">
				<StyleTableCellRespContain>
					<StyleTableCell>{props.val.store?.name || "--"}</StyleTableCell>
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
			{!props.identifyMode && (
				<TableCell
					className={classes.td}
					align="center">
					<StyleTableCellRespContain>
						<PopoverAdminPartner
							val={props.val}
							reload={props.reload}
							setOpenPanishParnerDialog={setOpenPanishParnerDialog}
						/>
					</StyleTableCellRespContain>
				</TableCell>
			)}
			{props.identifyMode && (
				<TableCell
					className={classes.td}
					align="center">
					<StyleTableCellRespContain>
						<StaffIdentifyDialogBtn onClick={() => setOpenUpdIdentify(true)}>
							{props.val.identifyCard &&
								props.val.dateOfIssueIdentify &&
								props.val.placeOfIssueIdentify && (
									<Fragment>
										<i className="fa fa-check" />
										&nbsp;
									</Fragment>
								)}
							CCCD
						</StaffIdentifyDialogBtn>
					</StyleTableCellRespContain>
				</TableCell>
			)}
			<DialogDescriptionParner
				openAddDescriptionParnerDialog={openAddDescriptionParnerDialog}
				setOpenDescriptionParnerDialog={setOpenDescriptionParnerDialog}
				reload={props.reload}
				description={props.val.description}
				id={props.val.id}
			/>
			<DialogPanishStaff
				openAddDescriptionParnerDialog={openPanishParnerDialog}
				setOpenDescriptionParnerDialog={setOpenPanishParnerDialog}
				reload={props.reload}
				val={props.val}
			/>
			<IdentifyUpdateDialog
				open={openUpdIdentify}
				onClose={() => setOpenUpdIdentify(false)}
				staff={props.val}
			/>
		</AdminTableRowStyle>
	);
}

export function PopoverAdminPartner(props: {
	val: Staff;
	reload: () => void;
	setOpenPanishParnerDialog: (val: boolean) => void;
}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const { loadStaffBackToWork } = useStaffBackToWord({ reload: props.reload });
	const { loadUpdateStatusStaff } = useUpdateStatusStaff({ reload: props.reload });
	const { doVerification } = useVerification({ reload: props.reload });
	const { openAlertDialog } = useAlertDialog();
	const history = useHistory();
	const { loadUpdateBusyStaff } = useUpdateBusytaff({ reload: props.reload });
	const { doSendAds } = useSendAds({ reload: props.reload });
	const { doCare } = useUpdateGlowCare({ reload: props.reload });
	const { doPunishPartner } = usePunishPartner({ reload: props.reload });
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSeeDetailsClick = () => {
		const id = props.val.id;

		history.push(`/technicians/${id}`);
	};
	const handleUpdateBusy = async (id: number, busy: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi trạng thái kỹ thuật viên này?",
			() => {},
			() => loadUpdateBusyStaff(id || 0, busy),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const handleSendAds = async (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Gửi thông báo cho 100 người",
			() => {},
			() => doSendAds(id || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const handleCare = async (id: number, status: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Thay đổi Glow Care",
			() => {},
			() => doCare(id || 0, status),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const handleBackToWork = async (id: number,  active: boolean) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi trạng thái kỹ thuật viên này?",
			() => {},
			() => loadStaffBackToWork(id || 0, active),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const handleUpdateStatusStaff = async (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi Online/Offline kỹ thuật viên này?",
			() => {},
			() => loadUpdateStatusStaff(id || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const handleVerification = async (id: number, validateStatus: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi xác minh kỹ thuật viên này?",
			() => {},
			() => doVerification(id || 0, validateStatus || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const handlePunishPartner = async (id: number, punishmentType: number, duration?: number) => {
		const punishType = punishmentType === 0 ? true : false;
		const confirmationMessage = "Chắc chắn hủy phạt người này";
		openAlertDialog?.(
			AlertType.Confirm,
			confirmationMessage,
			() => {},
			() => doPunishPartner(id || 0, punishType, duration),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	return (
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
					<AdminParnerOptionOperation onClick={handleSeeDetailsClick}>
						Xem chi tiết
					</AdminParnerOptionOperation>
					{props.val?.active ? (
						<div>
							<AdminParnerOptionOperation onClick={() => handleUpdateStatusStaff(props.val.id || 0)}>
								{" "}
								{props.val?.online ? "Đặt chế độ Offline" : "Đặt chế độ Online"}
							</AdminParnerOptionOperation>
							<AdminParnerOptionOperation onClick={() => handleBackToWork(props.val.id || 0, false)}>
								Nghỉ việc
							</AdminParnerOptionOperation>
						</div>
					) : (
						<AdminParnerOptionOperation onClick={() => handleBackToWork(props.val.id || 0, true)}>
							Trở lại làm việc
						</AdminParnerOptionOperation>
					)}
					{/* {props.val.validateStatus === ValidateStatusType.Verification ? (
						<AdminParnerOptionOperation onClick={() => handleVerification(props.val.id || 0, 1)}>
							Hủy xác minh
						</AdminParnerOptionOperation>
					) : (
						<AdminParnerOptionOperation onClick={() => handleVerification(props.val.id || 0, 3)}>
							Xác minh
						</AdminParnerOptionOperation>
					)} */}
					{props.val.busy ? (
						<AdminParnerOptionOperation onClick={() => handleUpdateBusy(props.val.id || 0, 2)}>
							Đặt rảnh
						</AdminParnerOptionOperation>
					) : (
						<AdminParnerOptionOperation onClick={() => handleUpdateBusy(props.val.id || 0, 1)}>
							Đặt bận
						</AdminParnerOptionOperation>
					)}
					{/* <AdminParnerOptionOperation onClick={() => handleSendAds(props.val.id || 0)}>
						Gửi quảng cáo
					</AdminParnerOptionOperation> */}

					{/* {props.val.glowCareStatus === CareType.Active ? (
						<AdminParnerOptionOperation onClick={() => handleCare(props.val.id || 0, 1)}>
							Hủy GlowCare
						</AdminParnerOptionOperation>
					) : (
						<AdminParnerOptionOperation onClick={() => handleCare(props.val.id || 0, 2)}>
							Kích Hoạt GlowCare
						</AdminParnerOptionOperation>
					)} */}
					{/* {props.val.punishmentType === 0 ? (
						<AdminParnerOptionOperation onClick={() => props.setOpenPanishParnerDialog(true)}>
							Phạt
						</AdminParnerOptionOperation>
					) : (
						<AdminParnerOptionOperation onClick={() => handlePunishPartner(props.val.id || 0, 1, 0)}>
							Hủy phạt
						</AdminParnerOptionOperation>
					)} */}
				</div>
			</Popover>
		</div>
	);
}
