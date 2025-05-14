import React, { useEffect, useState } from "react";
import { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import AddServicePersonalInput from "./AddServicePersonalInput";
import UpdateServicePersonalInput from "./UpdateServicePersonalInput";
import useUpdateStaffService from "../hooks/useUpdateStaffService";
import StaffService from "../../../../models/StaffService";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function UpdateServicePersonalDialog(props: {
	openUpdateServiceDialog: boolean;
	setOpenUpdateServiceDialog: (value: boolean) => void;
	reload: () => void;
	serviceId: number;
	staffId?: number | undefined;
	staffService?: StaffService;
}) {
	const [service, setService] = useState(0);
	const { updateStaffService } = useUpdateStaffService({ reload: props.reload });
	const [experienceYears, setExperienceYears] = useState("0");
	const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(
		convertUrlsToImageDatas(
			props.staffService?.images?.map((image) => image?.path || "").filter((val) => val) || []
		)
	);
	const { openAlertDialog } = useAlertDialog();
	useEffect(() => {
		setService(props.staffService?.id || 0);
		setExperienceYears((props.staffService?.experienceYears || 0).toString());
		setAvtMultiData(
			convertUrlsToImageDatas(
				props.staffService?.images?.map((image) => image?.path || "").filter((val) => val) || []
			)
		);
	}, [props.openUpdateServiceDialog]);

	const handleSave = async () => {
		let hasError = false;

		if (!experienceYears) {
			openAlertDialog?.(AlertType.Fail, "Vui lòng nhập số năm kinh nghiệm");
			hasError = true;
		}

		if (hasError) {
			return;
		}
		await updateStaffService(props.staffId || 0, service, experienceYears, avtMultiData);

		props.setOpenUpdateServiceDialog(false);
	};

	const handleClose = () => {
		props.setOpenUpdateServiceDialog(false);
	};

	return (
		<>
			<DialogWrapMedium
				open={props.openUpdateServiceDialog}
				onClose={handleClose}
				title="Cập nhật thông tin dịch vụ"
				actions={
					<>
						<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
						<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
					</>
				}>
				<UpdateServicePersonalInput
					staffService={props.staffService}
					setExperienceYears={setExperienceYears}
					experienceYears={experienceYears}
					setAvtMultiData={setAvtMultiData}
					avtMultiData={avtMultiData}
				/>
			</DialogWrapMedium>
		</>
	);
}
