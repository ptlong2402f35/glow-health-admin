import { useState } from "react";
import React from "react";
import {
	AdminProductrManagementFilterLeft,
	AdminProductrManagementFilterRight,
	AdminProductrManagementFilterSearch,
	AdminProductrManagementFilterWrap,
	ButtonAddAdminProductManagement,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogAddPromotion from "./DialogAddPromotion";
import { AdminUserManagementFilterTitle } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import SearchPanel from "../../adminUserManagement/component/SearchPanel";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import {
	AdminOrderManagementFilterItem,
	AdminOrderManagementFilterLabel,
} from "../../adminOrderManagement/styled/StyledAdminOrdermanagement";
import { AdminOrderManagementStoreControl } from "../../adminOrderManagement/AdminOrderManagementFilterStore";
import { AdminOrderManagementStaffControl } from "../../adminOrderManagement/AdminOrderManagementFilterStaff";
import { AdminPromotionManagementUserIdControl } from "../hook/AdminPromotionManagementFilterUserId";
import {
	AdminPromotionManagementFilterItem,
	AdminPromotionManagementFilterLeft,
	AdminPromotionManagementFilterSearch,
} from "../styled/StyledPromotion";
import { AdminUserManagementFilterClearButton } from "../../adminPartnerManagement/styled/StyleParner";

export default function PromotionManagementFilter(props: { reload: () => void }) {
	const [openAddStoreDialog, setOpenAddStoreDialog] = useState(false);
	const { filterKeyword, doFilterKeyword, filterStore, doFilterStore, filterUserId, doFilterUserId, doClearFilter } =
		useCommonListFunctions();

	const handleReload = () => {
		props.reload();
	};

	const handleClearFilter = () => {
		const filtersActive = filterKeyword || filterStore || filterUserId;

		if (filtersActive) {
			doClearFilter?.();
		} else {
			handleReload();
		}
	};
	return (
		<AdminProductrManagementFilterWrap className="visible">
			<AdminPromotionManagementFilterLeft>
				<AdminPromotionManagementFilterSearch>
					<AdminUserManagementFilterTitle>Lọc theo tên</AdminUserManagementFilterTitle>
					<SearchPanel
						placeholder="Tìm kiếm"
						filterKeyword={filterKeyword}
						doFilterKeyword={doFilterKeyword}
					/>
				</AdminPromotionManagementFilterSearch>
				<AdminPromotionManagementFilterItem>
					<AdminOrderManagementFilterLabel>Lọc theo cơ sở</AdminOrderManagementFilterLabel>
					<AdminOrderManagementStoreControl
						filterStaffId={parseInt(filterStore || "0")}
						doChangeStaffId={doFilterStore}
					/>
				</AdminPromotionManagementFilterItem>
				<AdminPromotionManagementFilterItem>
					<AdminOrderManagementFilterLabel>Lọc theo người tạo</AdminOrderManagementFilterLabel>
					<AdminPromotionManagementUserIdControl
						filterStaffId={filterUserId || 0}
						doChangeStaffId={doFilterUserId}
					/>
				</AdminPromotionManagementFilterItem>
			</AdminPromotionManagementFilterLeft>
			<AdminProductrManagementFilterRight>
				<div>
					<AdminUserManagementFilterTitle>Hủy lọc</AdminUserManagementFilterTitle>
					<AdminUserManagementFilterClearButton onClick={handleClearFilter}>
						<i
							className="fa fa-refresh"
							aria-hidden="true"></i>
					</AdminUserManagementFilterClearButton>
				</div>
				<ButtonAddAdminProductManagement
					onClick={() => {
						setOpenAddStoreDialog(true);
					}}>
					Thêm
				</ButtonAddAdminProductManagement>
			</AdminProductrManagementFilterRight>
			<DialogAddPromotion
				openAddStoreDialog={openAddStoreDialog}
				setOpenAddStoreDialog={setOpenAddStoreDialog}
				reload={props.reload}
			/>
		</AdminProductrManagementFilterWrap>
	);
}
