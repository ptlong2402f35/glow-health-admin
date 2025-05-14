import React, { useEffect, useState } from "react";
import { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import AddServicePersonalInput from "./AddServicePersonalInput";
import UpdateServicePersonalInput from "./UpdateServicePersonalInput";
import UpdateServicePriceInput from "./UpdateServicePriceInput";
import useUpdatePricePersonal from "../hooks/useUpdatePriceKTV";
import useGetPriceStaffService from "../hooks/useGetPriceStaffService";

export default function UpdateServicePriceDialog(props: {
	openUpdatePriceDialog: boolean;
	setOpenUpdatePriceDialog: (value: boolean) => void;
	reload: () => void;
	serviceId: number;
	serviceStaffId: number;
	serviceName: string;
	staffService: any;
	staffId?: number;
	description: string;
}) {
	const [service, setService] = useState(0);

	const { updateListService, prices, setPrices } = useUpdatePricePersonal({ reload: props.reload });
	const [nameService, setNameService] = useState(props.staffService?.name);
	const [descriptionService, setDescriptionService] = useState(props.description);
	useEffect(() => {
		setService(props.staffService?.service?.id || 0);
		setNameService(props.staffService?.name);
		setDescriptionService(props.description);
	}, [props.openUpdatePriceDialog]);

	const handleSave = async () => {
		await updateListService(props.staffId || 0, props.staffService.id, prices, nameService, descriptionService);
		props.setOpenUpdatePriceDialog(false);
	};

	const handleClose = () => {
		props.setOpenUpdatePriceDialog(false);
	};

	return (
		<>
			<DialogWrapMedium
				open={props.openUpdatePriceDialog}
				onClose={handleClose}
				title="Cập nhật bảng giá dịch vụ"
				actions={
					<>
						<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
						<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
					</>
				}>
				<UpdateServicePriceInput
					service={service}
					setService={setService}
					serviceId={props.serviceId}
					prices={prices}
					setPrices={setPrices}
					serviceStaffId={props.serviceStaffId}
					serviceName={props.serviceName}
					staffService={props.staffService}
					setNameService={setNameService}
					nameService={nameService}
					descriptionService={descriptionService}
					setDescriptionService={setDescriptionService}
				/>
			</DialogWrapMedium>
		</>
	);
}
