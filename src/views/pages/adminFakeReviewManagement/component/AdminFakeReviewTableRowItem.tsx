import React, { Fragment, useState } from "react";
import { TableCell } from "@material-ui/core";
import moment from "moment";
import FakeReview from "../../../../models/FakeReview";
import { AdminFakeReviewRowStyle } from "../styled/AdminFakeReviewManagementStyle";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import useAlertDialog from "../../../hooks/useAlertDialog";
import AdminOrderManagementItemControl from "../../adminOrderManagement/AdminOrderManagementItemControl";
import Popover from "@material-ui/core/Popover";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";

export default function AdminFakeReviewTableRowItem(props: {
	review: FakeReview;
	setSelectReview: (value: FakeReview) => void;
	setOpenUpdDialog: (value: boolean) => void;
	handleDeleteFakeReview: (value: number) => void;
}) {
	const classes = useCommonTableStyles();
	const { openAlertDialog } = useAlertDialog();

	return (
		<AdminFakeReviewRowStyle>
			<TableCell>{props.review.id || "--"}</TableCell>
			<TableCell>{props.review.staff?.name || "--"}</TableCell>
			<TableCell>{props.review.noteReview || "--"}</TableCell>
			<TableCell>{props.review.rateReview || "--"}</TableCell>
			<TableCell>
				{props.review.reviewTime ? moment(props.review?.reviewTime).format("HH:mm DD-MM-YYYY") : "--"}
			</TableCell>
			<TableCell>
				{(props.review.createdAt && moment(props.review?.createdAt).format("HH:mm DD-MM-YYYY")) || "--"}
			</TableCell>
			<TableCell>
				{(props.review.updatedAt && moment(props.review?.updatedAt).format("HH:mm DD-MM-YYYY")) || ""}
			</TableCell>
			<TableCell>
				<AdminFakeReviewDetailItem
					review={props.review}
					setSelectReview={props.setSelectReview}
					setOpenUpdDialog={props.setOpenUpdDialog}
					handleDeleteFakeReview={props.handleDeleteFakeReview}
				/>
			</TableCell>
		</AdminFakeReviewRowStyle>
	);
}

export function AdminFakeReviewDetailItem(props: {
	review: FakeReview;
	setSelectReview: (value: FakeReview) => void;
	setOpenUpdDialog: (value: boolean) => void;
	handleDeleteFakeReview: (value: number) => void;
}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDeleteReview = () => {
		props.handleDeleteFakeReview(props.review.id || 0);
	};

	const handleUpdateReview = () => {
		props.setSelectReview(props.review);
		props.setOpenUpdDialog(true);
	};
	return (
		<Fragment>
			<MoreVertIcon
				onClick={handleClick}
				style={{ cursor: "pointer" }}
			/>
			<Popover
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}>
				<div>
					<AdminParnerOptionOperation onClick={handleUpdateReview}>Chỉnh sửa</AdminParnerOptionOperation>
					<AdminParnerOptionOperation onClick={handleDeleteReview}>Xóa đánh giá</AdminParnerOptionOperation>
				</div>
			</Popover>
		</Fragment>
	);
}
