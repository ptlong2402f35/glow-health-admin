import React, { Fragment } from "react";
import ReferRecord from "../../../models/ReferRecord";
import { CommonTableHeadCell, useCommonTableStyles } from "../../controls/components/commonTable/CommonTable";
import { StyleCommonTableContainerResp } from "../adminUserManagement/styled/StyledTableUserManagement";
import { Table, TableBody, TableCell, TableHead } from "@material-ui/core";
import { AdminTableRowStyle, xStyleTableCellRespHead } from "../adminUserManagement/styled/AdminUserManagementStyle";
import { CommonTableHeadCellResp } from "../../controls/components/commonTable/StyledCommonTableResp";
import ErrorBoundary from "../../../utils/ErrorBoundary";
import { ProductTableRowStyle } from "../adminProductManagement/styled/ProductManagementStyle";
import moment from "moment";

export default function ReferStatsTable(props: { page: number; perPage: number; records: ReferRecord[] }) {
	const classes = useCommonTableStyles();

	return (
		<Fragment>
			<StyleCommonTableContainerResp>
				<Table aria-label="simple table">
					<TableHead>
						<AdminTableRowStyle>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								STT
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Họ tên
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								MST cá nhân
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								CCCD
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Ngày sinh
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Địa chỉ
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Ngày cấp
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Nơi cấp
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Tổng thu nhập
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Khấu trừ TNCN 10%
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Thực lĩnh
							</CommonTableHeadCell>
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.records.map((item, idx) => (
							<ErrorBoundary key={idx}>
								<ProductTableRowStyle>
									<TableCell align="center">
										{((props.page || 1) - 1) * props.perPage + idx + 1}
									</TableCell>
									<TableCell align="center">
										{item.staff?.name || item.user?.userName || "--"}
									</TableCell>
									<TableCell align="center">{item.staff?.taxId || "--"}</TableCell>
									<TableCell align="center">{item.staff?.identifyCard || "--"}</TableCell>
									<TableCell align="center">
										{(item.staff?.birthDay &&
											moment(item.staff?.birthDay).format("HH:mm DD-MM-YYYY")) ||
											"--"}
									</TableCell>
									<TableCell align="center">{item.staff?.identifyAddress || "--"}</TableCell>
									<TableCell align="center">{item.staff?.dateOfIssueIdentify || "--"}</TableCell>
									<TableCell align="center">{item.staff?.placeOfIssueIdentify || "--"}</TableCell>
									<TableCell align="center">
										{(Math.round((item.totalCommissionValue || 0) * 100) / 100).toLocaleString(
											"en-US"
										)}
									</TableCell>
									<TableCell align="center">
										{(Math.round((item.taxFee || 0) * 100) / 100).toLocaleString("en-US")}
									</TableCell>
									<TableCell align="center">
										{(Math.round((item.actualCommissionValue || 0) * 100) / 100).toLocaleString(
											"en-US"
										)}
									</TableCell>
								</ProductTableRowStyle>
							</ErrorBoundary>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
		</Fragment>
	);
}
