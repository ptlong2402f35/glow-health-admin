import React, { useState } from "react";
import Banner from "../../../../models/Banner";
import {
	AdminReviewBannerButtonWrap,
	AdminReviewBannerGroup,
	AdminReviewBannerIngredient,
	AdminReviewBannerItem,
	AdminReviewBannerItemAction,
	AdminReviewBannerItems,
	AdminReviewBannerWrap,
	StyleBannerContentAvt,
} from "../styled/StyledBannerManagement";
import { StylePagePersonContentAvtImg } from "../../personal/component/StylePerson";
import {
	StyleAddUser,
	StyleDaleteBanner,
	StyleUpdateBanner,
} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import DialogUpdateBanner from "./UpdateBannerDialog";
import useUpdateBanner from "../hook/useUpdateBanner";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

export function AdminReviewBanner(props: { listBanner: Banner[]; reload: () => void }) {
	const [openUpdateBanner, setOpenUpdateBanner] = useState(false);
	const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
	const [selectedBannerIndex, setSelectedBannerIndex] = useState(0);
	const { updateBanner } = useUpdateBanner();
	const { openAlertDialog } = useAlertDialog();

	const openBanner = (banner: Banner, index: number) => {
		setSelectedBanner(banner);
		setSelectedBannerIndex(index);
		setOpenUpdateBanner(true);
	};

	const onDeleteBanner = async (index: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn xóa Banner này không?",
			() => {},
			() => deleteBanner(index),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const deleteBanner = async (index: number) => {
		const clonedListBanner = [...props.listBanner];
		clonedListBanner.splice(index, 1);
		await updateBanner(clonedListBanner, props.reload);
		setOpenUpdateBanner(false);
	};

	return (
		<AdminReviewBannerWrap>
			{props.listBanner.map((val, index) => (
				<AdminReviewBannerIngredient key={index}>
					<AdminReviewBannerGroup>{val.group || "Chưa đặt tên"}</AdminReviewBannerGroup>
					<AdminReviewBannerButtonWrap>
						<StyleUpdateBanner onClick={() => openBanner(val, index)}>Sửa</StyleUpdateBanner>
						<StyleDaleteBanner onClick={() => onDeleteBanner(index)}>Xóa</StyleDaleteBanner>
					</AdminReviewBannerButtonWrap>
					<AdminReviewBannerItems>
						{val.items?.map((items, index) => {
							return (
								<AdminReviewBannerItem key={index}>
									<div>
										<StyleBannerContentAvt>
											<StylePagePersonContentAvtImg
												id="personal_input"
												src={
													items?.path?.[0]?.value || "./static/img/no-avatar.png"
												}></StylePagePersonContentAvtImg>
										</StyleBannerContentAvt>
										{/* <AdminReviewBannerItemAction> {items?.action}</AdminReviewBannerItemAction> */}
									</div>
								</AdminReviewBannerItem>
							);
						})}
					</AdminReviewBannerItems>
				</AdminReviewBannerIngredient>
			))}
			{selectedBanner && (
				<DialogUpdateBanner
					openAddBannerDialog={openUpdateBanner}
					setOpenAddBannerDialog={setOpenUpdateBanner}
					reload={props.reload}
					selectedBanner={selectedBanner}
					selectedBannerIndex={selectedBannerIndex}
					listBanner={props.listBanner}
				/>
			)}
		</AdminReviewBannerWrap>
	);
}
