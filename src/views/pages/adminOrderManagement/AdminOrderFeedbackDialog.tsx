import React, { useEffect, useState } from "react";
import { DialogWrapMedium } from "../../controls/components/dialogWrap/DialogWrap";
import Orderv2 from "../../../models/Orderv2";
import {
	AdminOrderCancelDialogBtnWrap,
	AdminOrderCancelCloseBtn,
	AdminOrderCancelSubmitBtn,
	AdminOrderCancelReasonTextField,
	AdminOrderFeedbackDialogWrap,
	AdminOrderFeedbackLabel,
	AdminOrderFeedbackLabelUp,
} from "./styled/StyledAdminOrdermanagement";
import { SelectBoxOptionType, SmSelectBox } from "../../controls/components/selectBox/SelectBox";
import useFeedbackAdminOrder from "./hooks/useFeedbackAdminOrder";
import useAlertDialog from "../../hooks/useAlertDialog";
import { AlertType } from "../../hooks/common/useAttachAlertDialog";

export default function AdminOrderFeedbackDialog(props: {
	open: boolean;
	onClose: () => void;
	order: Orderv2 | undefined;
	reload: () => void;
}) {
	const [vote, setVote] = useState(0);
	const [feedback, setFeedback] = useState("");
	const { openAlertDialog } = useAlertDialog();
	const { onAdminSubmitFeedback, loading, voteOpts } = useFeedbackAdminOrder({
		onSuccess: () => {
			openAlertDialog?.(AlertType.Success, "Đánh giá thành công!", () => {
				props.reload?.();
				props.onClose();
			});
		},
		onFail: () => openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!"),
	});

	useEffect(() => {
		setVote((props.order && props.order.rateReview && props.order?.rateReview) || 0);
		setFeedback((props.order && props.order.noteReview && props.order?.noteReview) || "");
	}, [props.order]);

	return (
		<DialogWrapMedium
			open={props.open}
			onClose={props.onClose}
			title="Đánh giá KTV"
			actions={
				<AdminOrderCancelDialogBtnWrap>
					<AdminOrderCancelCloseBtn onClick={props.onClose}>Đóng</AdminOrderCancelCloseBtn>
					<AdminOrderCancelSubmitBtn
						onClick={() => onAdminSubmitFeedback(props.order?.id || 0, vote, feedback)}>
						Đồng ý
					</AdminOrderCancelSubmitBtn>
				</AdminOrderCancelDialogBtnWrap>
			}>
			<AdminOrderFeedBackContent
				order={props.order}
				vote={vote}
				feedback={feedback}
				setVote={setVote}
				setFeedback={setFeedback}
				voteOpts={voteOpts}
			/>
		</DialogWrapMedium>
	);
}

export function AdminOrderFeedBackContent(props: {
	order: Orderv2 | undefined;
	vote: number;
	feedback: string;
	setVote: (val: number) => void;
	setFeedback: (val: string) => void;
	voteOpts: SelectBoxOptionType[];
}) {
	return (
		<AdminOrderFeedbackDialogWrap>
			<AdminOrderFeedbackLabelUp>Rate số sao</AdminOrderFeedbackLabelUp>
			<SmSelectBox
				options={props.voteOpts}
				value={props.vote}
				onChange={props.setVote}
			/>
			<AdminOrderFeedbackLabel>Đánh giá Kỹ Thuật Viên</AdminOrderFeedbackLabel>
			<AdminOrderCancelReasonTextField
				value={props.feedback}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
					props.setFeedback(e.target.value)
				}></AdminOrderCancelReasonTextField>
		</AdminOrderFeedbackDialogWrap>
	);
}
