import React, { useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium, DialogWrapSmall } from "../../../controls/components/dialogWrap/DialogWrap";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
	UserFormServiceButtonCreatedv2,
	UserFormServiceButtonLang,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import { DescriptionParnerTextArea, DescriptionParnerTextDiv } from "../styled/StyleParner";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useUpdateDescriptionStaff from "../hook/useUpdateDescription";
import DialogDescriptionLang from "../DescriptionLang/DescriptionLangDialog";
import usePunishPartner from "../hook/usePunishPartner";
import Staff from "../../../../models/Staff";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../../personal/component/StylePerson";

export default function DialogPanishStaff(props: {
	openAddDescriptionParnerDialog: boolean;
	setOpenDescriptionParnerDialog: (value: boolean) => void;
	reload: () => void;
	val: Staff;
}) {
	const { doPunishPartner } = usePunishPartner({ reload: props.reload });
	const [duration, setDuration] = useState(1440);
	const handleClose = () => {
		props.setOpenDescriptionParnerDialog(false);
	};
	const handleSave = async () => {
		try {
			const punishType = props.val.punishmentType === 0 ? true : false;
			await doPunishPartner(props.val.id || 0, punishType, duration);
			handleClose();
		} catch (error) {}
	};
	const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDuration(Number(e.target.value));
	};

	const formatDuration = (minutes: number) => {
		const days = Math.floor(minutes / 1440);
		const hours = Math.floor((minutes % 1440) / 60);
		const mins = minutes % 60;
		return `${days} ngày ${hours} giờ ${mins} phút`;
	};

	return (
		<DialogWrapSmall
			open={props.openAddDescriptionParnerDialog}
			onClose={handleClose}
			title="Thời gian phạt"
			actions={
				<>
					<UserFormServiceButtonCreatedv2 onClick={handleSave}>Lưu</UserFormServiceButtonCreatedv2>
					<UserFormServiceButtonClose onClick={handleClose}>Thoát</UserFormServiceButtonClose>
				</>
			}>
			<>
				<StylePersonalLabelBank>Số phút</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập số phút"
					value={duration}
					onChange={handleDurationChange}
				/>
				<StylePersonalLabelBank>{formatDuration(duration)}</StylePersonalLabelBank>
			</>
		</DialogWrapSmall>
	);
}
