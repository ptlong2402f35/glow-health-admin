import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PageBody, PageCenter, PageInner, PageTitle, PageTitleInner } from "../../controls/components/form/Page";
import { OrderManagementListWrap, OrderManagementPageWrap } from "../../controls/components/tabsView/StyledTabsView";
import TabLinksView from "../../controls/components/tabsView/TabLinksView";
import OrderManagementAllTab from "./OrderManagementAllTab";
import OrderManagementCanceledTab from "./OrderManagementCanceledTab";
import OrderManagementPurchasedTab from "./OrderManagementPurchasedTab";
import OrderManagementSettledTab from "./OrderManagementSettledTab";
import Order from "../../../models/Order";
import { getListHookWrap } from "./hook/useGetListHook";

export default function OrderManagement() {
	const { tabId } = useParams<{ tabId: string }>();
	const [tab, setTab] = useState(convertTabId(tabId));
	const tabNames = ["Tất cả đơn", "Đơn đã mua", "Đơn đã chốt chiết khấu", "Đơn bị hủy"];
	const tabLinks = ["/order", "/order/purchased", "/order/settled", "/order/canceled"];

	useEffect(() => {
		setTab(convertTabId(tabId));
	}, [tabId]);

	return (
		<OrderManagementPageWrap>
			<PageCenter>
				<PageInner>
					<PageTitle>
						<PageTitleInner>Đơn hàng của tôi</PageTitleInner>
					</PageTitle>
					<PageBody>
						<OrderManagementListWrap>
							<TabLinksView
								value={tab || 0}
								onChange={(val) => setTab(val)}
								tabNames={tabNames}
								tabLinks={tabLinks}
								tabs={[
									<OrderManagementAllTab />,
									<OrderManagementPurchasedTab />,
									<OrderManagementSettledTab />,
									<OrderManagementCanceledTab />,
								]}
								tabsClassName={[]}
								id="order-management-tab"
							/>
						</OrderManagementListWrap>
					</PageBody>
				</PageInner>
			</PageCenter>
		</OrderManagementPageWrap>
	);
}

export function convertTabId(params: string) {
	switch (params) {
		case "purchased":
			return 1;
		case "settled":
			return 2;
		case "canceled":
			return 3;
		default:
			return 0;
	}
}
