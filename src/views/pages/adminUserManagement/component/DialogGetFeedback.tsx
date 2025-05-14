import React, { useEffect, useState } from "react";

import {
	UserFormBankButtonClose,
	UserFormBankButtonCreated,
	UserFormBankButtonCreatedv2,
} from "../../personal/component/StylePerson";

import CreateUserInfor from "./CreateUserInfor";
import { DialogWrapAddUser, DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useLoadingDialog from "../../../hooks/useLoadingDialog";

import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";

import { ParamsAddUserForm, ParamsUpdateUserForm } from "../../../../services/AddUserService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { DialogWrapFootBtn } from "../../../controls/components/dialogWrap/StyledDialogWrap";
import UserGlow from "../../../../models/UserGlow";
import useSubmitUpdateUser, { useAssignOwnerUpdateUser } from "../hook/useSubmitUpdateUser";
import UpdateUserInfor from "./UpdateUserInfor";
import { GenderType } from "../../../../models/Staff";
import useGetFeedback from "../hook/useGetFeedback";
import moment from "moment";
import { AdminTableRowStyle, PaginationWrapper, xStyleTableCellRespHead } from "../styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import {
	$xStyleConstWidthSmTable,
	$xStyleTableContainerResp,
	$xStyleTableContainerRespTbodyTr,
	$xStyleTableContainerRespTbodyTrTd,
	StyleCommonTableContainerResp,
	StyleTableCellRespContain,
	StyleTableCellText,
} from "../styled/StyledTableUserManagement";
import { Table, TableBody, TableCell, TableHead } from "@material-ui/core";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import FakeReview from "../../../../models/FakeReview";

export default function DialogGetFeedback(props: {
	isOpenDialog: boolean;
	setIsOpenDialog: (value: boolean) => void;
	userDetailId?: number | undefined | null;
}) {
	const [page, setPage] = useState<number>(1);
	const { feedback, count } = useGetFeedback({
		id: props.userDetailId,
		page: page,
		isOpenDialog: props.isOpenDialog,
	});

	return (
		<DialogWrapMedium
			open={props.isOpenDialog}
			onClose={() => {
				props.setIsOpenDialog(false);
			}}
			title="Feedback người dùng"
			actions={
				<>
					<UserFormBankButtonClose
						onClick={() => {
							props.setIsOpenDialog(false);
						}}>
						Hủy
					</UserFormBankButtonClose>
				</>
			}>
			<div>
				<GetFeedbackInfo feedback={feedback} />
				<PaginationWrapper>
					<NumberPaginationBox
						page={page || 1}
						count={count}
						per={PERPAGE.Admin}
						onChange={(val) => setPage?.(val)}
					/>
				</PaginationWrapper>
			</div>
		</DialogWrapMedium>
	);
}

export function GetFeedbackInfo(props: { feedback: FakeReview[] }) {
	const classes = useCommonTableStyles();
	return (
		<React.Fragment>
			<StyleCommonTableContainerResp
				$isResTransaction={true}
				$xStyleTableContainerRespTbodyTrTd={$xStyleTableContainerRespTbodyTrTd}
				$xStyleTableContainerResp={$xStyleTableContainerResp}
				$xStyleTableContainerRespTbodyTr={$xStyleTableContainerRespTbodyTr}>
				<Table aria-label="simple table">
					<TableHead>
						<AdminTableRowStyle className={classes.tr}>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								ID
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Đánh giá
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Số sao
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Ngày
							</CommonTableHeadCellResp>
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.feedback.map((val, index) => (
							<AdminTableRowStyle
								// $RebateActive={props.isSelected(props.val)}
								className={classes.tr}
								key={val.id}>
								<TableCell
									className={classes.td}
									align="center">
									<StyleTableCellRespContain>
										<StyleTableCellText>{val.id}</StyleTableCellText>
									</StyleTableCellRespContain>
								</TableCell>
								<TableCell
									className={classes.td}
									align="center">
									{val.noteFeedback}
								</TableCell>

								<TableCell
									className={classes.td}
									align="center">
									{val.rateFeedback} sao
								</TableCell>

								<TableCell
									className={classes.td}
									align="center">
									<StyleTableCellRespContain>
										{(val.updatedAt && moment(val.updatedAt).format("HH:mm DD-MM-YYYY")) || "--"}
									</StyleTableCellRespContain>
								</TableCell>
							</AdminTableRowStyle>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
		</React.Fragment>
	);
}
