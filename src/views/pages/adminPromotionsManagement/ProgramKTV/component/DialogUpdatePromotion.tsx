import React, { useEffect, useState } from "react";
import useAlertDialog from "../../../../hooks/useAlertDialog";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../../controls/components/dialogWrap/DialogWrap";
import AddPromotionStaffInput, { PromotionStaffInputService } from "./AddPromotionStaffInput";
import useGetAssignedPromotion from "../hook/useGetAssignedPromotion";
import useCreatedAsignedPrice from "../hook/useCreatedAsignedPrice";
import StaffDetail from "../../../../../models/StaffDetail";

export default function DialogUpdatePromotionStaff(props: {
	openUpdatePromotionDialog: boolean;
	setOpenUpdatePromotionDialog: (value: boolean) => void;
	reload: () => void;
	list: StaffDetail | undefined;
}) {
	const [price, setPrice] = useState<number[]>([]);
	const [filterStaffId, setFilterStaffId] = useState<number>(props.list?.id || 0);
	const { listAssignedPromotions } = useGetAssignedPromotion({ filterStaffId: filterStaffId });
	const { createdAsignedPrice } = useCreatedAsignedPrice({
		filterStaffId: filterStaffId,
		reload: props.reload,
	});

	const handleSave = async () => {
		await createdAsignedPrice(price);

		props.setOpenUpdatePromotionDialog(false);
	};

	const handleClose = () => {
		props.setOpenUpdatePromotionDialog(false);
	};
	useEffect(() => {
		if (!props.openUpdatePromotionDialog) {
			setPrice([]);
			setFilterStaffId(0);
		} else {
			setFilterStaffId(props.list?.id || 0);
		}
	}, [props.openUpdatePromotionDialog, props.list]);

	return (
		<DialogWrap
			open={props.openUpdatePromotionDialog}
			onClose={handleClose}
			title="Sửa KTV áp dụng"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
				</>
			}>
			<PromotionStaffInputService
				price={price}
				setPrice={setPrice}
				listAssignedPromotions={listAssignedPromotions}
			/>
			<></>
		</DialogWrap>
	);
}
