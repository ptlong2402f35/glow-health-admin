import React, { useState } from "react";
import { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import AddServicePersonalInput from "./AddServicePersonalInput";
import useServicePersonal from "../hooks/useServicePersonal";
import useAddServicePersonal from "../hooks/useAddServiceKTV";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

export default function AddServicePersonalDialog(props: {
	openAddServiceDialog: boolean;
	setOpenAddServiceDialog: (value: boolean) => void;
	reload: () => void;
	serviceId: number;
}) {
	const { loadListService, prices, setPrices } = useAddServicePersonal({ reload: props.reload });
	const [service, setService] = useState("");
	const [nameService, setNameService] = useState("");
	const { openAlertDialog } = useAlertDialog();

	const handleSave = async () => {
		let hasError = false;

		if (!service) {
			openAlertDialog?.(AlertType.Fail, "Vui lòng chọn dịch vụ");
			hasError = true;
		}

		if (!prices || prices.length === 0) {
			openAlertDialog?.(AlertType.Fail, "Vui lòng điền ít nhất giá một dịch vụ");
			hasError = true;
		}

		if (hasError) {
			return;
		}
		await loadListService(props.serviceId, service, prices, nameService);
		setService("");
		setNameService("");
		setPrices([]);
		props.setOpenAddServiceDialog(false);
	};

	const handleClose = () => {
		setService("");
		setNameService("");
		setPrices([]);
		props.setOpenAddServiceDialog(false);
	};

	return (
		<>
			<DialogWrapMedium
				open={props.openAddServiceDialog}
				onClose={handleClose}
				title="Thêm dịch vụ cho kỹ thuật viên"
				actions={
					<>
						<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
						<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
					</>
				}>
				<AddServicePersonalInput
					service={service}
					setService={setService}
					serviceId={props.serviceId}
					prices={prices}
					setPrices={setPrices}
					setNameService={setNameService}
					nameService={nameService}
				/>
			</DialogWrapMedium>
		</>
	);
}
