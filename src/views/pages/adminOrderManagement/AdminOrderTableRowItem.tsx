import React, { useContext, useState } from "react";
import Orderv2, {
	OfferBrowseStatus,
	OfferBrowseStatusMapv2,
	OfferTypeStatus,
	OfferTypeStatusMapv2,
	OrderCancelOriginTypeMap,
	OrderStatusLabelMapv2,
	OrderStatusLabelMapv2Pro,
	OrderStatusv2,
	OrderTimerTypeMap,
} from "../../../models/Orderv2";
import {
	AdminOrderInfoImgFlexRow,
	AdminOrderInfoImgRowContain,
	AdminOrderInfoRowExtend,
	AdminOrderInfoRowItemColorContain,
	AdminOrderInfoRowItemImg,
	AdminOrderInfoRowItemImgWrap,
	AdminOrderInfoRowItemLabel,
	AdminOrderInfoRowItemWrap,
	AdminOrderInfoRowValue,
	AdminOrderRowStyle,
	AdminOrderStatusLabelTextItem,
	TableCellDate,
	TableCellFlex,
	TableCellImg,
	TableCellTitle,
	xStyleFlexTableCell,
} from "./styled/StyledAdminOrdermanagement";
import { TableCell } from "@material-ui/core";
import { useCommonTableStyles } from "../../controls/components/commonTable/CommonTable";
import useCancelAdminOrders from "./hooks/useCancelAdminOrders";
import useAlertDialog from "../../hooks/useAlertDialog";
import { AlertType } from "../../hooks/common/useAttachAlertDialog";
import moment from "moment";
import AdminOrderManagementItemControl from "./AdminOrderManagementItemControl";
import { StyleTableCellRespContain } from "../adminUserManagement/styled/StyledTableUserManagement";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Popover } from "@material-ui/core";
import { AdminParnerOptionOperation } from "../adminPartnerManagement/styled/StyleParner";
import useAcceptOfferOrder from "./hooks/useAcceptOfferOrder";
import useDenyOfferOrder from "./hooks/useDenyOfferOrder";
import { AdminOrderWrapContext } from "./AdminOrderManagement";
import { useHistory } from "react-router";

export default function AdminOrderTableRowItem(props: {
	order: Orderv2;
	setOrder: (val: Orderv2 | undefined) => void;
	setIsEditing: (val: boolean) => void;
}) {
	const classes = useCommonTableStyles();
	const { openAlertDialog } = useAlertDialog();
	const ctx = useContext(AdminOrderWrapContext);

	let revenueValue = calcRevenueValue(
		props.order.totalPay || 0,
		props.order.discount || 0,
		props.order.earningRate || 0
	);
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	const customerAddress = JSON.parse(props.order?.customerAddress || "[]");
	const onConfirmOpenChange = () => {
		props.setOrder(props.order);
		props.setIsEditing(true);
	};

	const { onAcceptCancelAdminOrder } = useAcceptOfferOrder({
		onSuccess: () => {
			openAlertDialog?.(AlertType.Success, "Duyệt đơn thành công", () => {
				ctx?.reload?.();
			});
		},
		onFail: () => openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra"),
	});

	const { onDenyCancelAdminOrder } = useDenyOfferOrder({
		onSuccess: () => {
			openAlertDialog?.(AlertType.Success, "Hủy đơn thành công", () => {
				ctx?.reload?.();
			});
		},
		onFail: () => openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra"),
	});
	const onOpenOrderOriginCancelDialog = () => {
		ctx?.setOrderSelected(props.order);
		ctx?.setOpenOriginCancelDialog(true);
	};
	const history = useHistory();
	const onChatBox = () => {
		window.open(`/chat/${props.order.id}`, "_blank");
	};
	return (
		<AdminOrderRowStyle>
			<TableCell>
				<AdminOrderInfoRowItemWrap>{props.order.id || "--"}</AdminOrderInfoRowItemWrap>
			</TableCell>
			<TableCell>
				{(props.order.createdAt && moment(props.order?.createdAt).format("HH:mm DD-MM-YYYY")) || ""}
			</TableCell>
			<TableCell>
				{OfferTypeStatusMapv2.get(props.order.offerType || OfferTypeStatus.Often)}{" "}
				<div>
					{props.order.offerType === OfferTypeStatus.Recruitment
						? props.order.offerStatus === OfferBrowseStatus.Browse
							? OfferBrowseStatusMapv2.get(OfferBrowseStatus.Browse)
							: "Đã duyệt"
						: null}
				</div>
			</TableCell>

			<TableCell>{OrderTimerTypeMap.get(props.order.orderTimerType || 1)}</TableCell>

			<TableCell>
				<TableCellFlex>
					<TableCellTitle>Giờ hẹn:</TableCellTitle>
					<TableCellDate>
						{(props.order.timerTime && moment(props.order?.timerTime).format("HH:mm DD-MM-YYYY")) || "--"}
					</TableCellDate>
				</TableCellFlex>
				<TableCellFlex>
					<TableCellTitle>Giờ kết thúc:</TableCellTitle>
					<TableCellDate>
						{(props.order.endDate && moment(props.order?.endDate).format("HH:mm DD-MM-YYYY")) || "--"}
					</TableCellDate>
				</TableCellFlex>
			</TableCell>
			<TableCell>{props.order.userCustomer?.phone || "--"}</TableCell>
			<TableCell>{props.order.staff?.user?.phone || "--"}</TableCell>
			<TableCell>{props.order.code || "--"}</TableCell>
			<TableCell>
				<div>{`${props.order.totalPay} đ`}</div>
				<AdminOrderStatusLabelTextItem $isActive={props.order.isPaid}>
					{props.order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
				</AdminOrderStatusLabelTextItem>
			</TableCell>
			<TableCell>
				{props.order.discount || 0} {"đ"}
			</TableCell>
			<TableCell>
				<AdminOrderInfoRowValue $isInterest={revenueValue > 0}>
					{revenueValue} {"đ"}
				</AdminOrderInfoRowValue>
			</TableCell>
			<AdminOrderInfoRowExtend $isLargeSize={true}>
				<div>
					<b>Tại nhà </b> {convertJsonAddress(props.order.customerAddress || "")}
				</div>
				<div>
					<b>SĐT: {customerAddress?.phone}</b>
				</div>
				<div>
					<b>Note: {customerAddress?.note || "--"}</b>
				</div>
			</AdminOrderInfoRowExtend>
			<AdminOrderInfoRowExtend $isExNormalSize={true}>
				<AdminOrderInfoImgFlexRow>
					<AdminOrderInfoRowItemImgWrap>
						<AdminOrderInfoRowItemImg
							src={props.order.staff?.user?.urlImage || ""}
							alt="error"></AdminOrderInfoRowItemImg>
					</AdminOrderInfoRowItemImgWrap>
					<AdminOrderInfoRowItemLabel>{props.order.staff?.name}</AdminOrderInfoRowItemLabel>
				</AdminOrderInfoImgFlexRow>
			</AdminOrderInfoRowExtend>
			<AdminOrderInfoRowExtend $isExNormalSize={true}>
				{(props.order.booking || [])?.map((item) => (
					<AdminOrderInfoImgRowContain key={item.id}>
						<AdminOrderInfoRowItemImgWrap $isXsmall={true}>
							<AdminOrderInfoRowItemImg
								src={item.imageUrl || ""}
								alt="error"></AdminOrderInfoRowItemImg>
						</AdminOrderInfoRowItemImgWrap>
						<AdminOrderInfoRowItemLabel $isSmallLabel>{item.serviceName}</AdminOrderInfoRowItemLabel>
					</AdminOrderInfoImgRowContain>
				))}
			</AdminOrderInfoRowExtend>
			<AdminOrderInfoRowExtend
				$xStyleRowCell={xStyleFlexTableCell}
				$isExNormalSize>
				<AdminOrderInfoRowItemWrap>
					{/* <AdminOrderInfoRowItemColorContain $status={props.order.status || ""}> */}
						{ OrderStatusLabelMapv2Pro.get(props.order?.status as any) || "--"}
					{/* </AdminOrderInfoRowItemColorContain> */}
				</AdminOrderInfoRowItemWrap>
			</AdminOrderInfoRowExtend>
			<TableCell>{props.order.payment?.name}</TableCell>
			<TableCell>{props.order.acceptedForwarderCount || ""}</TableCell>
			<TableCell>
				<div>{props.order.rateReview ? props.order.rateReview + " sao" : ""}</div>
				{props.order.noteReview || ""}
			</TableCell>

			<TableCell>{props.order.store?.name || ""}</TableCell>

			<TableCell>
				<AdminOrderManagementItemControl order={props.order} />
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
								{props.order.chatBoxId && (
									<AdminParnerOptionOperation onClick={onChatBox}>
										Chat Box
									</AdminParnerOptionOperation>
								)}

								<AdminParnerOptionOperation onClick={onConfirmOpenChange}>
									Lý do hủy đơn
								</AdminParnerOptionOperation>

								<AdminParnerOptionOperation onClick={() => onDenyCancelAdminOrder(props.order.id || 0)}>
									Hủy đơn
								</AdminParnerOptionOperation>

							</div>
						</Popover>
					</div>
				</StyleTableCellRespContain>
			</TableCell>
		</AdminOrderRowStyle>
	);
}

export function convertJsonAddress(addressJson: string) {
	if (!addressJson) return "";
	let address = JSON.parse(addressJson);
	return address?.customerName && address?.customerName + " - " + address?.address;
}

export function calcRevenueValue(totalValue: number, saleValue: number, rate: number) {
	return totalValue - (totalValue + saleValue) * rate;
}
