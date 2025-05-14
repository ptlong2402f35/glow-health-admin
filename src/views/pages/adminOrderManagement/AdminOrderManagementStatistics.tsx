import React, { useEffect, useState } from "react";
import {
	AdminOrderStatisticsWrap,
	AdminOrderStatisticsContain,
	AdminOrderStatisticRow,
	AdminOrderStatisticItem,
	AdminOrderStatisticItemValue,
	ButtonAdminOrderStatistics,
} from "./styled/StyledAdminOrdermanagement";
import { getAdminOrdersCoundWrap, getAdminOrdersCount } from "./hooks/useGetCountAdminOrder";

export default function AdminOrderManagementStatistics(props: { data: any; reload: () => void }) {
	const { countDatas, loading, handleloadData } = getAdminOrdersCoundWrap();
	const [loaded, setLoaded] = useState(false);

	const handleButtonClick = () => {
		if (!loaded) {
			handleloadData();
			setLoaded(true);
		}
	};
	useEffect(() => {
		setLoaded(false);
	}, [props.reload]);
	return (
		<AdminOrderStatisticsWrap>
			<ButtonAdminOrderStatistics onClick={handleButtonClick}>Xem doanh số</ButtonAdminOrderStatistics>
			{loaded && (
				<AdminOrderStatisticsContain>
					<AdminOrderStatisticRow>
						<AdminOrderStatisticItem>
							Tổng thanh toán:{" "}
							<AdminOrderStatisticItemValue $isRenue>
								{new Intl.NumberFormat().format(countDatas.totalMoney) || 0} đ
							</AdminOrderStatisticItemValue>
						</AdminOrderStatisticItem>
						<AdminOrderStatisticItem>
							Doanh thu:{" "}
							<AdminOrderStatisticItemValue $isRenue>
								{new Intl.NumberFormat().format(countDatas.totalIncome?.toFixed(0))} đ
							</AdminOrderStatisticItemValue>
						</AdminOrderStatisticItem>
						<AdminOrderStatisticItem>
							Đơn đã hoàn thành:{" "}
							<AdminOrderStatisticItemValue>{countDatas.totalOrderDone}</AdminOrderStatisticItemValue>
						</AdminOrderStatisticItem>
					</AdminOrderStatisticRow>
					<AdminOrderStatisticRow>
						<AdminOrderStatisticItem>
							Hủy bởi nhân viên:{" "}
							<AdminOrderStatisticItemValue>{countDatas.totalOrderReject}</AdminOrderStatisticItemValue>
						</AdminOrderStatisticItem>
						<AdminOrderStatisticItem>
							Hủy bởi khách hàng:{" "}
							<AdminOrderStatisticItemValue>{countDatas.totalOrderCancel}</AdminOrderStatisticItemValue>
						</AdminOrderStatisticItem>
						<AdminOrderStatisticItem>
							Hủy bởi hệ thống:{" "}
							<AdminOrderStatisticItemValue>
								{countDatas.totalOrderSysCancel}
							</AdminOrderStatisticItemValue>
						</AdminOrderStatisticItem>
					</AdminOrderStatisticRow>
				</AdminOrderStatisticsContain>
			)}
		</AdminOrderStatisticsWrap>
	);
}
