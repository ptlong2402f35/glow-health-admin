import React, { useState } from "react";
import { Table, TableBody, TableHead } from "@material-ui/core";
import {
	$xStyleConstWidthSmTable,
	$xStyleConstWidthTable,
	$xStyleTableContainerResp,
	$xStyleTableContainerRespTbodyTr,
	$xStyleTableContainerRespTbodyTrTd,
	StyleCommonTableContainerResp,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import {
	AdminTableRowStyle,
	AdminUserManagementFilterBox,
	AdminUserManagementFilterBoxv2,
	AdminUserManagementFilterWrap,
	AdminUserManagementFilterWrapv2,
	StyleAddUser,
	xStyleTableCellRespHead,
} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import useListUserAddress from "../hook/useListUserAddress";
import UserAddressTableRow from "./UserAddressTableRow";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import DialogUserAddressAdd from "./DialogUserAddressAdd";
import { Link } from "react-router-dom";
import DialogUserAddressUpdate from "./DialogUserAddressUpdate";
import UserAddress from "../../../../models/UserAddress";

export default function UserAddressTable(props: { userId: number }) {
	const classes = useCommonTableStyles();
	const { page } = useCommonListFunctions();
	const [openAddUserAddressDialog, setOpenAddUserAddressDialog] = useState(false);
	let { reload, listUserAddress } = useListUserAddress(props.userId);
	const [isEditing, setIsEditing] = useState(false);
	const [userAddressDetail, setUserAddressDetail] = useState<UserAddress>();
	return (
		<React.Fragment>
			<AdminUserManagementFilter
				openAddUserAddressDialog={openAddUserAddressDialog}
				setOpenAddUserAddressDialog={setOpenAddUserAddressDialog}
				userId={props.userId}
				reload={reload}
			/>
			<StyleCommonTableContainerResp
				$isResTransaction={true}
				$xStyleTableContainerRespTbodyTrTd={$xStyleTableContainerRespTbodyTrTd}
				$xStyleTableContainerResp={$xStyleTableContainerResp}
				$xStyleTableContainerRespTbodyTr={$xStyleTableContainerRespTbodyTr}>
				<Table aria-label="simple table">
					<TableHead>
						<AdminTableRowStyle className={classes.tr}>
							{/* <CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								<AdminUserManagementCheckBoxWrap>
									<span></span>
									<AdminUserManagementCheckBoxIcon
										$RebateActive={props.isItemSelectedAll(props.rebate)}></AdminUserManagementCheckBoxIcon>
									<input
										type={"checkbox"}
										checked={props.isItemSelectedAll(props.rebate)}
										onChange={(e) =>
											props.onItemSelectedAll(props.rebate, e.target.checked)
										}></input>
								</AdminUserManagementCheckBoxWrap>
							</CommonTableHeadCellResp> */}
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								STT
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Tên Khách Hàng
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Số điện thoại
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Địa chỉ
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Note
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Tỉnh
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Huyện
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Xã
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Kinh độ
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Vĩ độ
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Mặc định
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
						{listUserAddress.map((val, index) => (
							<UserAddressTableRow
								index={index + 1}
								key={index}
								val={val}
								reload={reload}
								setUserAddressDetail={setUserAddressDetail}
								setIsEditing={setIsEditing}
							/>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
			<DialogUserAddressUpdate
				openAddUserAddressDialog={isEditing}
				setOpenAddUserAddressDialog={setIsEditing}
				userAddressDetail={userAddressDetail}
				reload={reload}
			/>
		</React.Fragment>
	);
}

export function AdminUserManagementFilter(props: {
	openAddUserAddressDialog: boolean;
	setOpenAddUserAddressDialog: (value: boolean) => void;
	userId: number;
	reload: () => void;
}) {
	return (
		<AdminUserManagementFilterWrapv2>
			<AdminUserManagementFilterBoxv2>
				<Link
					style={{ textDecoration: "none" }}
					to="/users"
					className="link">
					<StyleAddUser>Quay lại</StyleAddUser>
				</Link>
			</AdminUserManagementFilterBoxv2>
			<AdminUserManagementFilterBoxv2>
				<StyleAddUser
					onClick={() => {
						props.setOpenAddUserAddressDialog(true);
					}}>
					+ Thêm địa chỉ
				</StyleAddUser>
			</AdminUserManagementFilterBoxv2>
			{/* <AdminUserManagementFilterBoxDate>
				<DateRangeInput
					fromDate={(filterFromDate && filterFromDate) || null}
					onDateFromChange={handleChangeFromDate}
					toDate={(filterToDate && filterToDate) || null}
					onDateToChange={handleChangeToDate}
				/>
			</AdminUserManagementFilterBoxDate> */}
			<DialogUserAddressAdd
				userId={props.userId}
				openAddUserAddressDialog={props.openAddUserAddressDialog}
				setOpenAddUserAddressDialog={props.setOpenAddUserAddressDialog}
				reload={props.reload}
			/>
		</AdminUserManagementFilterWrapv2>
	);
}
