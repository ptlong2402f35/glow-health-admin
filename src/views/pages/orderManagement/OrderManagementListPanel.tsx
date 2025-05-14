import moment from "moment";
import React from "react";
import Order, { OrderStatus, OrderStatusLabelMap } from "../../../models/Order";
import StringManipulator from "../../../utils/StringManipulator";
import { SpanNorm, SpanResp } from "../../controls/components/form/Responsive";
import {
	CopyIcon,
	OrderManagementBody,
	OrderManagementBodyLeft,
	OrderManagementBodyLeftImage,
	OrderManagementBodyLeftImageBlock,
	OrderManagementBodyLeftPrice,
	OrderManagementBodyLeftText,
	OrderManagementBodyLeftTextTitle,
	OrderManagementBodyRes,
	OrderManagementBodyRight,
	OrderManagementBodyRightPrice,
	OrderManagementBodyRightTitle,
	OrderManagementBodyRightTitleRes,
	OrderManagementBodyRightTitleV2Res,
	OrderManagementBox,
	OrderManagementHeader,
	OrderManagementHeaderContentCode,
	OrderManagementHeaderContentLeft,
	OrderManagementHeaderContentRight,
	OrderManagementHeaderContentRightRes,
	OrderManagementHeaderContentStatus,
	OrderManagementHeaderContentTime,
	OrderManagementStylePaidAmount,
	OrderManagementStyleRebateAmount,
	OrderManagementStyleTitle,
	OrderManagementStyleTitleHide,
	OrderManagementStyleTitleRes,
	OrderManagementTabList,
} from "./styled/StyledOrderManagement";
import ToolTipWrapper from "../../controls/components/toolTipWrapper/ToolTipWrapper";

export default function OrderManagementListPanel(props: { orders: Order[] }) {
	return (
		<OrderManagementTabList>
			{props.orders.map((order) => (
				<OrderManagementBox key={order.id}>
					<OrderManagementHeader>
						<OrderManagementHeaderContentLeft>
							{order?.createdAt && (
								<OrderManagementHeaderContentTime>
									<SpanNorm>
										{order?.createdAt ? moment(order?.createdAt).format("HH:mm DD/MM/YYYY") : "--"}
									</SpanNorm>
									<SpanResp>
										{order?.createdAt ? moment(order?.createdAt).format("DD/MM/YYYY") : "--"}
									</SpanResp>
								</OrderManagementHeaderContentTime>
							)}
							<OrderManagementHeaderContentCode>{order?.taobaoOrderId}</OrderManagementHeaderContentCode>
							<CopyIdOrder value={order.taobaoOrderId} />
						</OrderManagementHeaderContentLeft>
						{order?.status ? (
							<OrderManagementHeaderContentRight>
								<OrderManagementHeaderContentStatus colorType={order?.status || 0}>
									{OrderStatusLabelMap.get(order?.status || 0)}
								</OrderManagementHeaderContentStatus>
							</OrderManagementHeaderContentRight>
						) : (
							""
						)}
					</OrderManagementHeader>

					<OrderManagementBody>
						<OrderManagementBodyLeft>
							<OrderManagementBodyLeftImageBlock>
								<OrderManagementBodyLeftImage src={order?.productImg || ""} />
							</OrderManagementBodyLeftImageBlock>

							<OrderManagementBodyRes>
								<OrderManagementBodyLeftText>
									<OrderManagementBodyLeftTextTitle>
										{order?.productName}
									</OrderManagementBodyLeftTextTitle>
									<OrderManagementBodyRightTitleRes>
										<OrderManagementHeaderContentLeft>
											<OrderManagementBodyRightTitle>
												<OrderManagementStyleTitleHide>
													<SpanNorm>Danh mục:&nbsp;</SpanNorm>
												</OrderManagementStyleTitleHide>
												{order?.category || "--"}
											</OrderManagementBodyRightTitle>

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
										<OrderManagementHeaderContentRightRes>
											<OrderManagementBodyRightTitle>
												<OrderManagementStyleTitleRes>Số lượng: </OrderManagementStyleTitleRes>x
												{order?.productQuantity || 0}
											</OrderManagementBodyRightTitle>
											{/* <OrderManagementBodyRightTitleV2Res>
												<OrderManagementStyleTitleRes> Tỉ lệ:</OrderManagementStyleTitleRes>
												<OrderManagementStyleRebateAmount>
													{" "}
													{StringManipulator.formatBalance((order?.rebateRate || 0) * 100)} %
												</OrderManagementStyleRebateAmount>
											</OrderManagementBodyRightTitleV2Res> */}
										</OrderManagementHeaderContentRightRes>
									</OrderManagementBodyRightTitleRes>
								</OrderManagementBodyLeftText>
							</OrderManagementBodyRes>
						</OrderManagementBodyLeft>
						<OrderManagementBodyRight>
							<OrderManagementBodyRightTitle>
								<OrderManagementBodyRightTitle>Giá trị đơn</OrderManagementBodyRightTitle>
								{/* <OrderManagementBodyRightTitle>Tỉ lệ chiết khấu</OrderManagementBodyRightTitle> */}
								<OrderManagementBodyRightTitle>Chiết khấu</OrderManagementBodyRightTitle>
							</OrderManagementBodyRightTitle>
							<OrderManagementBodyRightPrice>
								<OrderManagementBodyLeftPrice>
									{" "}
									{StringManipulator.formatBalance(order?.paidAmount)} Tệ
								</OrderManagementBodyLeftPrice>
								{/* <OrderManagementBodyLeftPrice>
									{" "}
									{StringManipulator.formatBalance((order?.rebateRate || 0) * 100)} %
								</OrderManagementBodyLeftPrice> */}
								<OrderManagementBodyLeftPrice>
									{" "}
									{StringManipulator.formatBalance(order?.rebateAmount)} Tệ
								</OrderManagementBodyLeftPrice>
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
				<CopyIcon
					onClick={() => copyValue(props.value, customProps.onClick)}
					className="material-icons">
					content_copy
				</CopyIcon>
			)}
		</ToolTipWrapper>
	);
}
