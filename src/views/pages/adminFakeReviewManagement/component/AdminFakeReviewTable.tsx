import React, { Fragment, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import {
	AdminFakeReviewTableRowStyle,
	StyledAdminFakeReviewTableContainer,
} from "../styled/AdminFakeReviewManagementStyle";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import AdminOrderTableRowItem from "../../adminOrderManagement/AdminOrderTableRowItem";
import FakeReview from "../../../../models/FakeReview";
import AdminFakeReviewTableRowItem from "./AdminFakeReviewTableRowItem";
import AdminFakeReviewCreateBatchDialog from "./AdminFakeReviewCreateBatchDialog";
import AdminFakeReviewUpdateDialog from "./AdminFakeReviewUpdateDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import useHandleFakeReview from "../hooks/useHandleFakeReview";

export default function AdminFakeReviewTable(props: { reviews: FakeReview[]; reload: () => void }) {
	const classes = useCommonTableStyles();
	const [openCreateDialog, setOpenCreateDialog] = useState(false);
	const [openUpdDialog, setOpenUpdDialog] = useState(false);
	const [selectReview, setSelectReview] = useState<FakeReview>();

	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { openAlertDialog } = useAlertDialog();
	const { onDeleteFakeReview } = useHandleFakeReview({
		onSuccess: () => {
			openAlertDialog?.(AlertType.Success, "Xoá thành công!", () => {
				props.reload?.();
			});
		},
		onBeginLoad: openLoadingDialog,
		onEndLoad: closeLoadingDialog,
		onFail: () => openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra"),
	});

	const handleDeleteFakeReview = (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn xoá?",
			() => {},
			() => onDeleteFakeReview({ id }),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const onCloseUpdDialog = () => {
		setOpenUpdDialog(false);
	};

	return (
		<Fragment>
			<StyledAdminFakeReviewTableContainer>
				<Table aria-label="simple table">
					<TableHead>
						<AdminFakeReviewTableRowStyle>
							<CommonTableHeadCellResp
								className={classes.th}
								align="center">
								Id
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								className={classes.th}
								align="center">
								Kỹ thuật viên
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								className={classes.th}
								align="center">
								Đánh giá
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								className={classes.th}
								align="center">
								Điểm đánh giá
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								className={classes.th}
								align="center">
								Ngày hiển thị
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								className={classes.th}
								align="center">
								Ngày tạo
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								className={classes.th}
								align="center">
								Ngày cập nhật
							</CommonTableHeadCellResp>

							<CommonTableHeadCellResp
								className={classes.th}
								align="center">
								Chi tiết
							</CommonTableHeadCellResp>
						</AdminFakeReviewTableRowStyle>
					</TableHead>
					<TableBody>
						{(props.reviews || []).map((review) => (
							<Fragment key={review.id + "fake-review"}>
								<AdminFakeReviewTableRowItem
									review={review}
									setSelectReview={setSelectReview}
									setOpenUpdDialog={setOpenUpdDialog}
									handleDeleteFakeReview={handleDeleteFakeReview}
								/>
							</Fragment>
						))}
					</TableBody>
				</Table>
			</StyledAdminFakeReviewTableContainer>
			<AdminFakeReviewUpdateDialog
				open={openUpdDialog}
				onClose={onCloseUpdDialog}
				reload={props.reload}
				review={selectReview}
			/>
		</Fragment>
	);
}
