import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import UserManagement from "../../../../models/UserGlow";
import {
	StyleColorTextValue,
	StyleCommonTableContainerResp,
	StyleTableCell,
	StyleTableCellRespLabel,
	TableCellResLabelStyle,
	$xStyleTableContainerRespTbodyTr,
	$xStyleTableContainerResp,
	$xStyleTableContainerRespTbodyTrTd,
	StyleTableCellRespContain,
	$xStyleConstWidthTable,
	StyleTableCellText,
	$xStyleConstWidthSmTable,
} from "../styled/StyledTableUserManagement";
import {
	RebateImgWrap,
	RebateImg,
	AdminUserManagementFilterWrap,
	AdminUserManagementFilterBox,
	AdminUserManagementFilterTitle,
	AdminUserManagementFilterBoxDate,
	AdminUserManagementFilterPriceWrap,
	xStyleTableCellRespHead,
	AdminUserManagementCheckBoxWrap,
	AdminUserManagementCheckBoxIcon,
	AdminTableRowStyle,
	StyleRebateTextPending,
	StyleAddUser,
	PaginationWrapper,
} from "../styled/AdminUserManagementStyle";
import AdminTableRow from "./AdminTableRow";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import { CommonTableBodyCellResp } from "../../../controls/components/commonTable/CommonTable";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import DialogUserUpdate from "./DialogUserUpdate";
import UserGlow from "../../../../models/UserGlow";
import DialogGetFeedback from "./DialogGetFeedback";

export function AdminUserManagementTable(props: {
	listUser: UserManagement[];
	count: number;
	reload: () => void;
	isItemSelected: (item: UserManagement) => boolean;
	isItemSelectedAll: (item: UserManagement[]) => boolean;
	onItemSelectedChange: (item: UserManagement, checked: boolean) => void;
	onItemSelectedAll: (item: UserManagement[], checked: boolean) => false | undefined;
}) {
	const { page } = useCommonListFunctions();
	const classes = useCommonTableStyles();
	const [isEditing, setIsEditing] = useState(false);
	const [userDetail, setUserDetail] = useState<UserGlow>();

	const [isOpenDialog, setIsOpenDialog] = useState(false);

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
								Ảnh đại diện
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Đối tác
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Tên đăng nhập
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Số điện thoại
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Số dư ví
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								E-mail
							</CommonTableHeadCellResp>
							{/* <CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Vai trò
							</CommonTableHeadCellResp> */}
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Ngày tạo
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Cơ sở
							</CommonTableHeadCellResp>

							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Giới tính
							</CommonTableHeadCellResp>	
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Thao tác
							</CommonTableHeadCellResp>
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.listUser.map((val, index) => (
							<AdminTableRow
								reload={props.reload}
								key={index}
								index={index + 1 + ((page && (page - 1) * PERPAGE.Admin) || 0)}
								val={val}
								isSelected={props.isItemSelected}
								onSelected={props.onItemSelectedChange}
								setUserDetail={setUserDetail}
								setIsEditing={setIsEditing}
								setIsOpenDialog={setIsOpenDialog}
							/>
						))}
					</TableBody>
				</Table>
				<DialogUserUpdate
					openAddUserDialog={isEditing}
					setOpenAddUserDialog={setIsEditing}
					userDetail={userDetail}
					reload={props.reload}
				/>
				<DialogGetFeedback
					isOpenDialog={isOpenDialog}
					setIsOpenDialog={setIsOpenDialog}
					userDetailId={userDetail?.id}
				/>
			</StyleCommonTableContainerResp>
		</React.Fragment>
	);
}
