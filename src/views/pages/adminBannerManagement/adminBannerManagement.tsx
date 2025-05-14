import React from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import useListBanner from "./hook/useGetBanner";
import AdminAddBanner from "./component/AdminAddBanner";
import { AdminReviewBanner } from "./component/AdminReviewBanner";

export default function BannerManagement() {
	const { listBanner, reload } = useListBanner();

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý banner</PageHeader>
				<AdminAddBanner
					listBanner={listBanner}
					reload={reload}
				/>
				<AdminReviewBanner
					listBanner={listBanner}
					reload={reload}
				/>
			</PageCenter>
		</PageWrap>
	);
}
