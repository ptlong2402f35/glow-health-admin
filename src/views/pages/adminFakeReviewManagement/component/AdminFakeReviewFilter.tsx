import React, { Fragment, useState } from "react";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import SearchPanel from "../../adminUserManagement/component/SearchPanel";
import {
	AdminFakeReviewFilterWrap,
	AdminFakeReviewContainer,
	AdminFakeReviewFilterSearchNameWrap,
	AdminFakeReviewFilterSearchNameLabel,
	AdminFakeReviewAddButton,
	AdminFakeReviewControlWrap,
} from "../styled/AdminFakeReviewManagementStyle";
import AdminFakeReviewCreateBatchDialog from "./AdminFakeReviewCreateBatchDialog";

export default function AdminFakeReviewFilter(props: { reload?: () => void }) {
	const [openCreateDialog, setCreateDialog] = useState(false);

	const onCloseCreateDialog = () => {
		setCreateDialog(false);
	};

	const onOpenCreateDialog = () => {
		setCreateDialog(true);
	};

	const { filterKeyword, doFilterKeyword } = useCommonListFunctions();
	return (
		<Fragment>
			<AdminFakeReviewFilterWrap>
				<AdminFakeReviewContainer>
					<AdminFakeReviewFilterSearchNameWrap>
						<AdminFakeReviewFilterSearchNameLabel>
							Lọc theo tên nhân viên
						</AdminFakeReviewFilterSearchNameLabel>
						<SearchPanel
							placeholder="Lọc theo tên NV"
							filterKeyword={filterKeyword}
							doFilterKeyword={doFilterKeyword}
						/>
					</AdminFakeReviewFilterSearchNameWrap>
				</AdminFakeReviewContainer>
				<AdminFakeReviewControlWrap>
					<AdminFakeReviewAddButton onClick={onOpenCreateDialog}>Thêm</AdminFakeReviewAddButton>
				</AdminFakeReviewControlWrap>
			</AdminFakeReviewFilterWrap>
			<AdminFakeReviewCreateBatchDialog
				open={openCreateDialog}
				onClose={onCloseCreateDialog}
				reload={props.reload}
			/>
		</Fragment>
	);
}
