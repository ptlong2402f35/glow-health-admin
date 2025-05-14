import React, { useEffect, useState } from "react";
import useDescriptionLang from "../hook/useGetDesLang";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import useUpdateDescriptionLang from "../hook/useUpdateDescriptionLang";
import { DescriptionLang } from "./DescriptionLangDialog";
import DescriptionLangInner from "./DescriptionLangInner";
import { useParams } from "react-router";
import { PageCenter, PageHeader, PageWrap } from "../../../controls/components/form/Page";
import { UserFormBankButtonCreated, UserFormBankButtonCreatedv2 } from "../../personal/component/StylePerson";

export default function DescriptionLangManagement(props:{isHR?:boolean}) {
	let { id } = useParams<{ id: string }>();
	let userIdNumber = parseInt(id);
	const { reload, description } = useDescriptionLang({ id: userIdNumber,isHR: props.isHR|| false });
	const [editedDescriptions, setEditedDescriptions] = useState<DescriptionLang[]>(description);
	const { loadUpdate } = useUpdateDescriptionLang({isHR: props.isHR|| false});

	const { openAlertDialog } = useAlertDialog();
	const handleUpdateDescriptionStaff = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi mô tả này?",
			() => {},
			() => handleSave(),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const handleSave = async () => {
		try {
			await loadUpdate(userIdNumber, editedDescriptions);
		} catch (error) {}
	};
	useEffect(() => {
		if (description) {
			setEditedDescriptions(description);
		}
	}, [description]);

	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Cập nhật mô tả đa ngữ</PageHeader>
				<UserFormBankButtonCreatedv2 onClick={handleUpdateDescriptionStaff}>
					Cập nhật
				</UserFormBankButtonCreatedv2>
				{description && (
					<DescriptionLangInner
						description={description}
						setEditedDescriptions={setEditedDescriptions}
						editedDescriptions={editedDescriptions}
					/>
				)}
			</PageCenter>
		</PageWrap>
	);
}
