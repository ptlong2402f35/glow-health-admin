import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../../controls/components/form/Page";
import { getFilterStaffPromotionsList } from "./hook/useGetStaffPromotion";
import { useParams } from "react-router";
import { StaffPromotionManagementTable } from "./component/PromotionStaffTable";
import PromotionStaffManagementFilter from "./component/PromotionStaffFilter";

export default function PromotionsKTVManagement() {
	const { listStaffPromotions, reload } = getFilterStaffPromotionsList();
	let { id } = useParams<{ id: string }>();

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý KTV áp dụng chương trình</PageHeader>
				<PromotionStaffManagementFilter reload={reload} />
				<StaffPromotionManagementTable
					listStaffPromotions={listStaffPromotions}
					reload={reload}
				/>
			</PageCenter>
		</PageWrap>
	);
}
