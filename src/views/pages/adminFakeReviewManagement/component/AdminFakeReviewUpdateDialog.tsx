import React, { Fragment, useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import FakeReview, { FakeReviewType } from "../../../../models/FakeReview";
import { AdminFakeReviewDialogLabel, AdminFakeReviewDialogInput } from "../styled/AdminFakeReviewManagementStyle";
import useHandleFakeReview from "../hooks/useHandleFakeReview";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import { AdminOrderManagementStaffControl } from "../../adminOrderManagement/AdminOrderManagementFilterStaff";
import { AdminFakeReviewDialogInputBody } from "./AdminFakeReviewCreateBatchDialog";
import moment from "moment";

export default function AdminFakeReviewUpdateDialog(props: {
	open: boolean;
	onClose: () => void;
	reload: () => void;
	review?: FakeReview;
}) {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();

	const [rateReview, setRateReview] = useState(props.review?.rateReview);
	const [noteReview, setNoteReview] = useState(props.review?.noteReview);
	const [dateReview, setDateReview] = useState(
		moment(props.review?.reviewTime).format("HH:mm DD-MM-YYYY") || moment().format("HH:mm DD-MM-YYYY")
	);
	const { onUpdateFakeReview } = useHandleFakeReview({
		onSuccess: () => {
			openAlertDialog?.(AlertType.Success, "Sửa thành công!", () => {
				props.reload?.();
			});
			props.onClose?.();
		},
		onBeginLoad: openLoadingDialog,
		onEndLoad: closeLoadingDialog,
		onFail: () => openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra"),
	});

	const handleUpdate = async () => {
		if (!rateReview) {
			openAlertDialog?.(AlertType.Fail, "Điểm đánh giá không được để trống");
			return;
		}
		if (!props.review) {
			openAlertDialog?.(AlertType.Fail, "Điểm đánh giá không được để trống");
			return;
		}
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn chỉnh sửa?",
			() => {},
			() =>
				onUpdateFakeReview({
					id: props.review?.id || 0,
					rateReview,
					noteReview: noteReview || "",
					reviewTime: dateReview ? moment(dateReview, "HH:mm DD-MM-YYYY").toDate() : new Date(),
				}),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	useEffect(() => {
		setRateReview(props.review?.rateReview);
		setNoteReview(props.review?.noteReview);
		setDateReview(
			moment(props.review?.reviewTime).format("HH:mm DD-MM-YYYY") || moment().format("HH:mm DD-MM-YYYY")
		);
	}, [props.review]);

	return (
		<DialogWrapMedium
			open={props.open}
			onClose={props.onClose}
			title="Cập nhật đánh giá"
			actions={
				<>
					<UserFormServiceButtonClose onClick={props.onClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated onClick={handleUpdate}>Cập nhật</UserFormServiceButtonCreated>
				</>
			}>
			<AdminFakeReviewDialogInputBody
				rateReview={rateReview}
				setRateReview={setRateReview}
				noteReview={noteReview}
				setNoteReview={setNoteReview}
				date={dateReview}
				setDate={(value) => setDateReview(value || "")}
			/>
		</DialogWrapMedium>
	);
}
