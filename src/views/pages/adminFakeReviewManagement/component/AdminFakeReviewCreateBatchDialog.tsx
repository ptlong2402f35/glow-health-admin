import React, { Fragment, useEffect, useState } from "react";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import FakeReview, { FakeReviewType } from "../../../../models/FakeReview";
import {
	AdminFakeReviewDialogLabel,
	AdminFakeReviewDialogInput,
	AdminFakeReviewLabelI,
	AdminFakeReviewInputContainer,
	AdminFakeReviewInputItemAction,
	AdminFakeReviewInputItemActionButton,
	AdminFakeReviewInputWrap,
	FlexItemInputContainxStyle,
	AlertColorBtnxStyle,
	AdminFakereviewDialogWrap,
} from "../styled/AdminFakeReviewManagementStyle";
import useHandleFakeReview from "../hooks/useHandleFakeReview";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import { AdminOrderManagementStaffControl } from "../../adminOrderManagement/AdminOrderManagementFilterStaff";
import { SmSelectBox } from "../../../controls/components/selectBox/SelectBox";
import useHandleFakeReviewInput from "../hooks/useHandleFakeReviewInput";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TransactionHisFilterDateRangeInput } from "../../../controls/components/dateRangeInput/StyledDateRangeInput";

export const OptionRateReviewSelect = [
	{
		label: "1",
		value: 1,
	},
	{
		label: "2",
		value: 2,
	},
	{
		label: "3",
		value: 3,
	},
	{
		label: "4",
		value: 4,
	},
	{
		label: "5",
		value: 5,
	},
];
export default function AdminFakeReviewCreateBatchDialog(props: {
	open: boolean;
	onClose: () => void;
	reload?: () => void;
}) {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();
	const { onCreateBatchFakeReview } = useHandleFakeReview({
		onSuccess: () => {
			openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
				props.reload?.();
			});
			handleClose();
		},
		onBeginLoad: openLoadingDialog,
		onEndLoad: closeLoadingDialog,
		onFail: () => openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra"),
	});

	const [_, setRefresh] = useState({});
	const [staffId, setStaffId] = useState(0);
	const {
		review: fakeReview,
		handleUpdateNote,
		handleUpdateRate,
		handleAddReview,
		handleRemoveReview,
		handleUpdateDate,
		resetInputData,
	} = useHandleFakeReviewInput({});

	const handleCreate = async () => {
		if (!fakeReview.every((review) => review.rateReview)) {
			openAlertDialog?.(AlertType.Fail, "Điểm đánh giá không được để trống");
			return;
		}
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn tạo đánh giá?",
			() => {},
			() => onCreateBatchFakeReview({ staffId, reviews: fakeReview }),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const handleClose = () => {
		props.onClose();
		resetInputData();
	};

	return (
		<AdminFakereviewDialogWrap
			open={props.open}
			onClose={handleClose}
			title="Tạo mới đánh giá"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleCreate}
						disabled={!fakeReview.length}>
						Tạo mới
					</UserFormServiceButtonCreated>
				</>
			}>
			<AdminFakeReviewDialogInputBody
				reviewData={fakeReview}
				onUpdateNoteField={handleUpdateNote}
				staffId={staffId}
				setStaffId={setStaffId}
				onUpdateRateField={handleUpdateRate}
				onUpdateDateField={handleUpdateDate}
				needSelect={true}
				mutipleAction={true}
				itemAction={true}
				addInputItem={handleAddReview}
				removeInputItem={handleRemoveReview}
			/>
		</AdminFakereviewDialogWrap>
	);
}

export function AdminFakeReviewDialogInputBody(props: {
	reviewData?: FakeReviewType[] | null;
	onUpdateNoteField?: (value: string, review: FakeReviewType) => void | null;
	onUpdateRateField?: (value: number, review: FakeReviewType) => void | null;
	onUpdateDateField?: (date: string, review: FakeReviewType) => void | null;
	needSelect?: boolean | null;
	staffId?: number | null;
	setStaffId?: (value: number) => void;
	mutipleAction?: boolean | null;
	itemAction?: boolean | null;
	addInputItem?: () => void;
	removeInputItem?: (item: FakeReviewType) => void;
	rateReview?: number | null;
	setRateReview?: (val: number) => void;
	noteReview?: string | null;
	setNoteReview?: (val: string) => void;
	date?: string | null;
	setDate?: (date: string | null) => void;
}) {
	return (
		<Fragment>
			{props.needSelect && (
				<Fragment>
					<AdminFakeReviewLabelI>Chọn nhân viên</AdminFakeReviewLabelI>
					<AdminOrderManagementStaffControl
						filterStaffId={props.staffId || 0}
						doChangeStaffId={props.setStaffId}
					/>
				</Fragment>
			)}
			{props.itemAction && (
				<AdminFakeReviewInputItemAction>
					<AdminFakeReviewInputItemActionButton onClick={props.addInputItem}>
						Thêm
					</AdminFakeReviewInputItemActionButton>
				</AdminFakeReviewInputItemAction>
			)}
			{props.mutipleAction ? (
				<Fragment>
					{(props.reviewData || []).map((review, index) => (
						<AdminFakeReviewInputWrap
							key={index + "review-data-item"}
							isFlexStyle={props.itemAction || false}>
							<AdminFakeReviewInputElement
								rateReview={review.rateReview}
								setRateReview={(value) => props.onUpdateRateField?.(value, review)}
								noteReview={review.noteReview}
								setNoteReview={(value) => props.onUpdateNoteField?.(value, review)}
								date={review.reviewTime}
								setDate={(value) => props.onUpdateDateField?.(value, review)}
							/>
							{props.itemAction && (
								<AdminFakeReviewInputItemAction>
									<AdminFakeReviewInputItemActionButton
										$xStyle={AlertColorBtnxStyle}
										onClick={() => props.removeInputItem?.(review)}>
										Xoá
									</AdminFakeReviewInputItemActionButton>
								</AdminFakeReviewInputItemAction>
							)}
						</AdminFakeReviewInputWrap>
					))}
				</Fragment>
			) : (
				<AdminFakeReviewInputElement
					rateReview={props.rateReview}
					setRateReview={props.setRateReview}
					noteReview={props.noteReview}
					setNoteReview={props.setNoteReview}
					date={props.date}
					setDate={(value) => props.setDate?.(value)}
				/>
			)}
		</Fragment>
	);
}

export function AdminFakeReviewInputElement(props: {
	rateReview?: number | null;
	setRateReview?: (val: number) => void;
	noteReview?: string | null;
	setNoteReview?: (val: string) => void;
	date?: string | null;
	setDate?: (date: string) => void;
}) {
	return (
		<Fragment>
			<AdminFakeReviewInputContainer>
				<AdminFakeReviewDialogLabel>Đánh giá</AdminFakeReviewDialogLabel>
				<AdminFakeReviewDialogInput
					value={props.noteReview || ""}
					onChange={(e) => props.setNoteReview?.(e.target.value)}
				/>
			</AdminFakeReviewInputContainer>
			<AdminFakeReviewInputContainer>
				<AdminFakeReviewDialogLabel>Điểm đánh giá</AdminFakeReviewDialogLabel>
				<SmSelectBox
					options={OptionRateReviewSelect}
					value={props.rateReview || 5}
					onChange={(value) => props.setRateReview?.(value)}
				/>
			</AdminFakeReviewInputContainer>
			<AdminFakeReviewInputContainer>
				<AdminFakeReviewDialogLabel>Thời gian hiển thị</AdminFakeReviewDialogLabel>
				<AdminFakeReviewDialogInput
					value={props.date || ""}
					// onDateChange={props.setDate}
					onChange={(e) => props.setDate?.(e.target.value)}
					placeholder="HH:mm DD-MM-YYYY"
				/>
			</AdminFakeReviewInputContainer>
		</Fragment>
	);
}

export function AdminFakeReviewDateInput(props: {
	date: Date | null | undefined;
	onDateChange: (date: Date | null) => void;
}) {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<TransactionHisFilterDateRangeInput
				disableToolbar
				variant="inline"
				format="yyyy-MM-dd"
				margin="normal"
				value={props.date}
				onChange={props.onDateChange}
				placeholder="Chọn ngày"
				KeyboardButtonProps={{
					"aria-label": "change date",
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}
