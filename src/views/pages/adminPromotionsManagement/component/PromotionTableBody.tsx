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
import moment from "moment";
import { Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";
import useStatusStore from "../../adminStoreManagement/hook/useUpdateStatus";
import Promotions, { PromotionType, PromotionTypeMap, StatusType, StatusTypeMap } from "../../../../models/Promotions";
import useUpdateStatusPromotion from "../hook/useUpdateStatusPromotion";
import { useHistory } from "react-router";
import useUpdateDisplayPromotion from "../hook/useUpdateDisplayPromotion";

export default function PromotionManagementTableBody(props: {
	val: Promotions;
	reload: () => void;
	openUpdatePromotionDialog: boolean;
	setOpenUpdatePromotionDialog: (value: boolean) => void;
	setList: (val: Promotions) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const { updateStatus } = useUpdateStatusPromotion({ reload: props.reload });
	const { updateDisplay } = useUpdateDisplayPromotion({ reload: props.reload });
	const history = useHistory();

	const onUpdateStatus = async (id: number, status: boolean) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi trạng thái chương trình này?",
			() => {},
			() => updateStatus(id || 0, status),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const onUpdateDisplay = async (id: number, status: boolean) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi hiển thị cho chương trình này?",
			() => {},
			() => updateDisplay(id || 0, status),
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
		props.setOpenUpdatePromotionDialog(true);
	};
	const open = Boolean(anchorEl);

	const handleSeeDetailsClick = () => {
		const id = props.val.id;

		history.push(`/promotions/${id}`);
	};
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">{props.val.id}</TableCell>

				<TableCell align="center">{props.val.name}</TableCell>

				<TableCell align="center">
					<>
						{props.val.type == PromotionType.Glow
							? PromotionTypeMap.get(PromotionType.Glow)
							: PromotionTypeMap.get(PromotionType.Spa)}
					</>
				</TableCell>

				<TableCell align="center">
					<>
						{props.val.status && props.val.status === StatusType.APPROVED
							? StatusTypeMap.get(StatusType.APPROVED)
							: StatusTypeMap.get(StatusType.PENDING)}
					</>
				</TableCell>

				<TableCell align="center">{props.val.isDisplayed ? "Có" : "Không"}</TableCell>

				<TableCell align="center">{props.val.percentage || "--"}%</TableCell>
				<TableCell align="center">{props.val.amount}</TableCell>
				<TableCell align="center">{props.val.store?.name || "--"}</TableCell>
				<TableCell align="center">{props.val.creatorUser?.phone || "--"}</TableCell>
				<TableCell align="center">{props.val.totalQuantity || 0}</TableCell>
				<TableCell align="center">{props.val.restQuantity || 0}</TableCell>
				<TableCell align="center">
					{(props.val.durationType &&
						props.val.startAt &&
						moment(props.val.startAt).format("HH:mm DD-MM-YYYY")) ||
						"--"}
				</TableCell>
				<TableCell align="center">
					{(props.val.durationType &&
						props.val.expireAt &&
						moment(props.val.expireAt).format("HH:mm DD-MM-YYYY")) ||
						"--"}
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
									{props.val.status === StatusType.APPROVED ? (
										<AdminParnerOptionOperation
											onClick={() => onUpdateStatus(props.val.id || 0, false)}>
											Ngừng KH
										</AdminParnerOptionOperation>
									) : (
										<AdminParnerOptionOperation
											onClick={() => onUpdateStatus(props.val.id || 0, true)}>
											Kích hoạt
										</AdminParnerOptionOperation>
									)}
									{props.val.isDisplayed ? (
										<AdminParnerOptionOperation
											onClick={() => onUpdateDisplay(props.val.id || 0, false)}>
											Ẩn khỏi Trang chủ
										</AdminParnerOptionOperation>
									) : (
										<AdminParnerOptionOperation
											onClick={() => onUpdateDisplay(props.val.id || 0, true)}>
											Hiện lên Trang chủ
										</AdminParnerOptionOperation>
									)}
									<AdminParnerOptionOperation onClick={handleSeeDetailsClick}>
										KTV áp dụng
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
