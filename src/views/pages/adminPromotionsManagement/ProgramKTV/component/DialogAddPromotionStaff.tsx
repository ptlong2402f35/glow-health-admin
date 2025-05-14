import React, { useEffect, useState } from "react";
import useAlertDialog from "../../../../hooks/useAlertDialog";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../../controls/components/dialogWrap/DialogWrap";
import AddPromotionStaffInput from "./AddPromotionStaffInput";
import useGetAssignedPromotion from "../hook/useGetAssignedPromotion";
import useCreatedAsignedPrice from "../hook/useCreatedAsignedPrice";

export default function DialogAddPromotionStaff(props: {
	openAddStoreDialog: boolean;
	setOpenAddStoreDialog: (value: boolean) => void;
	reload: () => void;
}) {
	const [price, setPrice] = useState<number[]>([]);
	const [filterStaffId, setFilterStaffId] = useState<number>(0);
	const { listAssignedPromotions } = useGetAssignedPromotion({ filterStaffId });
	const { createdAsignedPrice } = useCreatedAsignedPrice({ filterStaffId, reload: props.reload });

	const handleSave = async () => {
		await createdAsignedPrice(price);

		props.setOpenAddStoreDialog(false);
	};

	const handleClose = () => {
		props.setOpenAddStoreDialog(false);
	};
	useEffect(() => {
		setPrice([]);
		setFilterStaffId(0);
	}, [props.openAddStoreDialog]);

	return (
		<DialogWrap
			open={props.openAddStoreDialog}
			onClose={handleClose}
			title="Thêm KTV áp dụng"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
				</>
			}>
			<AddPromotionStaffInput
				filterStaffId={filterStaffId}
				setFilterStaffId={setFilterStaffId}
				listAssignedPromotions={listAssignedPromotions}
				price={price}
				setPrice={setPrice}
			/>
		</DialogWrap>
	);
}
