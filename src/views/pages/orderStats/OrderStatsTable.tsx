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
import OrderRecord from "../../../models/OrderRecord";
import { PaymentMethodId } from "../../../models/Transaction";

export default function OrderStatsTable(props: { page: number; perPage: number; records: OrderRecord[] }) {
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
								Ngày
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Tên KTV/Spa
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								MST/CCCD
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Địa chỉ
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Loại doanh thu
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Hình thức giao dịch
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Dòng tiền thu về
							</CommonTableHeadCell>
							<CommonTableHeadCell
								className={classes.th}
								align="center">
								Glow thu phí
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
										{(item.successTime && moment(item.successTime).format("HH:mm DD-MM-YYYY")) ||
											"--"}
									</TableCell>
									<TableCell align="center">{item.store?.name || item.staff?.name || "--"}</TableCell>
									<TableCell align="center">
										{item.ownerStaff?.identifyCard ||
											item.ownerStaff?.taxId ||
											item.staff?.identifyCard ||
											item.staff?.taxId ||
											"--"}
									</TableCell>
									<TableCell align="center">
										{item.ownerStaff?.identifyAddress || item.staff?.identifyAddress || "--"}
									</TableCell>
									<TableCell align="center">DT dịch vụ spa</TableCell>
									<TableCell align="center">
										{item.paymentMethodId === PaymentMethodId.Cash ? "COD" : "Thẻ VISA, Master"}
									</TableCell>
									<TableCell align="center">
										{(Math.round((item.cashFlow || 0) * 100) / 100).toLocaleString("en-US")}
									</TableCell>
									<TableCell align="center">
										{(Math.round((item.glowCharge || 0) * 100) / 100).toLocaleString("en-US")}
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
