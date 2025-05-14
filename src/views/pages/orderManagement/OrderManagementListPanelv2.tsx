import moment from "moment";
import React, { useEffect, useState } from "react";
import Order, { OrderStatusLabelMapv2, OrderStatusLabelMapv2Res } from "../../../models/Order";
import StringManipulator from "../../../utils/StringManipulator";
import { SpanNorm, SpanResp } from "../../controls/components/form/Responsive";
import {
	ContentCode,
	ContentCodeTittle,
	ContentCodev2,
	CopyIcon,
	CopyImg,
	OrderIconTick,
	OrderManagementBody,
	OrderManagementBodyLeft,
	OrderManagementBodyLeftImage,
	OrderManagementBodyLeftImageBlock,
	OrderManagementBodyLeftPrice,
	OrderManagementBodyLeftTextTitle,
	OrderManagementBodyPrice,
	OrderManagementBodyRes,
	OrderManagementBodyRight,
	OrderManagementBodyRightPrice,
	OrderManagementBodyRightTitle,
	OrderManagementBodyRightTitleRes,
	OrderManagementBodyRightTitleV2Res,
	OrderManagementBox,
	OrderManagementHeaderContent,
	OrderManagementHeaderContentCode,
	OrderManagementHeaderContentLeft,
	OrderManagementHeaderContentRight,
	OrderManagementHeaderContentRightRes,
	OrderManagementHeaderContentStatus,
	OrderManagementHeaderContentTime,
	OrderManagementHeaderInBody,
	OrderManagementHeaderInBodyRes,
	OrderManagementHeaderTextTitle,
	OrderManagementStylePaidAmount,
	OrderManagementStyleRebateAmount,
	OrderManagementStyleTitle,
	OrderManagementStyleTitleDate,
	OrderManagementStyleTitleDateSmall,
	OrderManagementTabList,
	TickIconBuy,
	TickIconReceive,
} from "./styled/StyledOrderManagement";
import ToolTipWrapper from "../../controls/components/toolTipWrapper/ToolTipWrapper";
import formatOrderId from "./hook/useFormatCodeHook";
import useDateOrder from "./hook/useDateOrder";
import useImageDialog from "../../hooks/useImageDialog";

export default function OrderManagementListPanelv2(props: { orders: Order[] }) {
	const { openMultipleImageDialog } = useImageDialog();
	const onMainImageClicked = (imgIndex: number) => {
		if (openMultipleImageDialog) {
			const productImages = props.orders
				.map((order) => order.productImg)
				.filter((productImg): productImg is string => !!productImg);
			openMultipleImageDialog(productImages, imgIndex);
		}
	};

	return (
		<OrderManagementTabList>
			{props.orders.map((order, idx) => (
				<OrderManagementBox key={order.id}>
					{/* <OrderManagementHeader>
						<OrderManagementHeaderContentLeft></OrderManagementHeaderContentLeft>
					</OrderManagementHeader> */}
					<OrderManagementHeaderInBodyRes>
						<OrderManagementHeaderContentCode>
							<ContentCodeTittle>Mã đơn:</ContentCodeTittle>{" "}
							<ContentCode>{order?.taobaoOrderId}</ContentCode>
							<ContentCodev2>{formatOrderId(order?.taobaoOrderId)}</ContentCodev2>
						</OrderManagementHeaderContentCode>
						<CopyIdOrder value={order.taobaoOrderId} />
						{order?.status ? (
							<OrderManagementHeaderContentRightRes>
								<OrderManagementHeaderContentStatus colorType={order?.status || 0}>
									{OrderStatusLabelMapv2Res.get(order?.status || 0)}
								</OrderManagementHeaderContentStatus>
							</OrderManagementHeaderContentRightRes>
						) : (
							""
						)}
					</OrderManagementHeaderInBodyRes>
					<OrderManagementBody>
						<OrderManagementBodyLeft>
							<OrderManagementBodyLeftImageBlock onClick={() => onMainImageClicked(idx)}>
								<OrderManagementBodyLeftImage src={order?.productImg || ""} />
							</OrderManagementBodyLeftImageBlock>
							<OrderManagementBodyRes>
								<OrderManagementHeaderTextTitle>
									<OrderManagementHeaderInBody>
										<OrderManagementHeaderContentCode>
											<ContentCodeTittle>Mã đơn:</ContentCodeTittle>{" "}
											<ContentCode>{order?.taobaoOrderId}</ContentCode>
										</OrderManagementHeaderContentCode>
										<CopyIdOrder value={order.taobaoOrderId} />
										{order?.status ? (
											<OrderManagementHeaderContentRight>
												<OrderManagementHeaderContentStatus colorType={order?.status || 0}>
													{OrderStatusLabelMapv2.get(order?.status || 0)}
												</OrderManagementHeaderContentStatus>
											</OrderManagementHeaderContentRight>
										) : (
											""
										)}
									</OrderManagementHeaderInBody>
									<OrderManagementBodyLeftTextTitle>
										{order?.productName}
									</OrderManagementBodyLeftTextTitle>
								</OrderManagementHeaderTextTitle>
								<OrderManagementBodyRightTitleRes>
									<OrderManagementHeaderContentLeft>
										<OrderManagementBodyRightTitleV2Res>
											<OrderManagementStyleTitle>Giá trị đơn:</OrderManagementStyleTitle>
											<OrderManagementStylePaidAmount>
												{" "}
												{StringManipulator.formatBalance(order?.paidAmount)} Tệ
											</OrderManagementStylePaidAmount>
										</OrderManagementBodyRightTitleV2Res>

										<OrderManagementBodyRightTitleV2Res>
											<OrderManagementStyleTitle> Chiết khấu:</OrderManagementStyleTitle>

											<OrderManagementStyleRebateAmount>
												{" "}
												{StringManipulator.formatBalance(order?.rebateAmount)} Tệ
											</OrderManagementStyleRebateAmount>
										</OrderManagementBodyRightTitleV2Res>
									</OrderManagementHeaderContentLeft>
									<OrderManagementHeaderContentRightRes></OrderManagementHeaderContentRightRes>
									<OrderManagementHeaderContent>
										<OrderIconTick>
											<TickIconBuy className="fa fa-check-circle" />
										</OrderIconTick>
										<OrderManagementStyleTitleDate>Mua hàng:</OrderManagementStyleTitleDate>
										<OrderManagementStyleTitleDateSmall>
											Mua:
										</OrderManagementStyleTitleDateSmall>{" "}
										{order?.purchasedAt && (
											<OrderManagementHeaderContentTime>
												<SpanNorm>
													{order?.purchasedAt
														? moment(order?.purchasedAt).format("DD/MM/YYYY")
														: "--"}
												</SpanNorm>
												<SpanResp>
													{order?.purchasedAt
														? moment(order?.purchasedAt).format("DD/MM/YYYY")
														: "--"}
												</SpanResp>
											</OrderManagementHeaderContentTime>
										)}
									</OrderManagementHeaderContent>
									{order.status === 3 ? (
										<OrderManagementHeaderContent>
											<OrderIconTick>
												<TickIconBuy className="fa fa-check-circle" />
											</OrderIconTick>
											<OrderManagementStyleTitleDate>Ngày về ví:</OrderManagementStyleTitleDate>
											<OrderManagementStyleTitleDateSmall>
												Về ví:
											</OrderManagementStyleTitleDateSmall>{" "}
											{order?.settledAt && (
												<OrderManagementHeaderContentTime>
													<SpanNorm>
														{order?.settledAt
															? moment(order?.settledAt).format("DD/MM/YYYY")
															: "--"}
													</SpanNorm>
													<SpanResp>
														{order?.settledAt
															? moment(order?.settledAt).format("DD/MM/YYYY")
															: "--"}
													</SpanResp>
												</OrderManagementHeaderContentTime>
											)}
										</OrderManagementHeaderContent>
									) : order?.status === 4 ? (
										<OrderManagementHeaderContent>
											<OrderIconTick>
												<TickIconReceive className="fa fa-check-circle" />
											</OrderIconTick>
											<OrderManagementStyleTitleDate>Ngày hủy đơn:</OrderManagementStyleTitleDate>
											<OrderManagementStyleTitleDateSmall>
												Hủy:
											</OrderManagementStyleTitleDateSmall>{" "}
											{order?.recalledAt && (
												<OrderManagementHeaderContentTime>
													<SpanNorm>
														{order?.recalledAt
															? moment(order?.recalledAt).format("DD/MM/YYYY")
															: "--"}
													</SpanNorm>
													<SpanResp>
														{order?.recalledAt
															? moment(order?.recalledAt).format("DD/MM/YYYY")
															: "--"}
													</SpanResp>
												</OrderManagementHeaderContentTime>
											)}
										</OrderManagementHeaderContent>
									) : (
										<OrderManagementHeaderContent>
											<OrderIconTick>
												<TickIconReceive className="fa fa-check-circle" />
											</OrderIconTick>
											<OrderManagementStyleTitleDate>
												Về ví dự kiến:
											</OrderManagementStyleTitleDate>
											<OrderManagementStyleTitleDateSmall>
												Dự kiến:
											</OrderManagementStyleTitleDateSmall>{" "}
											{order?.temporarySettledAt ? (
												<OrderManagementHeaderContentTime>
													<SpanNorm>
														{moment(order?.temporarySettledAt)
															.add(1, "months")
															.date(useDateOrder())
															.format("DD/MM/YYYY")}
													</SpanNorm>
													<SpanResp>
														{moment(order?.temporarySettledAt)
															.add(1, "months")
															.date(useDateOrder())
															.format("DD/MM/YYYY")}
													</SpanResp>
												</OrderManagementHeaderContentTime>
											) : (
												<OrderManagementHeaderContentTime>
													<SpanNorm>Chưa xác định</SpanNorm>
													<SpanResp>Chưa xác định</SpanResp>
												</OrderManagementHeaderContentTime>
											)}
										</OrderManagementHeaderContent>
									)}
								</OrderManagementBodyRightTitleRes>
							</OrderManagementBodyRes>
						</OrderManagementBodyLeft>
						<OrderManagementBodyRight>
							<OrderManagementBodyRightTitle>
								{/* <OrderManagementBodyRightTitle>Giá trị đơn</OrderManagementBodyRightTitle> */}
								{/* <OrderManagementBodyRightTitle>Tỉ lệ chiết khấu</OrderManagementBodyRightTitle> */}
								{/* <OrderManagementBodyRightTitle>Chiết khấu</OrderManagementBodyRightTitle> */}
							</OrderManagementBodyRightTitle>
							<OrderManagementBodyRightPrice>
								<OrderManagementBodyLeftPrice>
									{" "}
									{StringManipulator.formatBalance(order?.paidAmount)} ¥
								</OrderManagementBodyLeftPrice>
								{/* <OrderManagementBodyLeftPrice>
									{" "}
									{StringManipulator.formatBalance((order?.rebateRate || 0) * 100)} %
								</OrderManagementBodyLeftPrice> */}
								<OrderManagementBodyLeftPrice>
									{"x "}
									{order?.productQuantity || 0}
								</OrderManagementBodyLeftPrice>
								<OrderManagementBodyPrice>
									{" "}
									{StringManipulator.formatBalance(order?.rebateAmount)} ¥
								</OrderManagementBodyPrice>
							</OrderManagementBodyRightPrice>
						</OrderManagementBodyRight>
					</OrderManagementBody>
				</OrderManagementBox>
			))}
		</OrderManagementTabList>
	);
}
export function CopyIdOrder(props: { value: string | null | undefined }) {
	const copyValue = (value: string | null | undefined, customOnclick: () => void) => {
		value ? navigator.clipboard.writeText(value) : null;
		customOnclick();
	};
	return (
		<ToolTipWrapper title={"Đã sao chép"}>
			{(customProps) => (
				<CopyIcon onClick={() => copyValue(props.value, customProps.onClick)}>
					<CopyImg src="./static/img/fi-sr-duplicate.png" />
				</CopyIcon>
			)}
		</ToolTipWrapper>
	);
}
