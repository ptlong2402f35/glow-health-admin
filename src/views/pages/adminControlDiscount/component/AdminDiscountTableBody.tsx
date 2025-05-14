import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import moment from "moment";
import Collect, { CollectTypeMap } from "../../../../models/Collect";
import { ProductTableRowStyle } from "../../adminProductManagement/styled/ProductManagementStyle";
import { Width100 } from "../../adminHistoryManagement/styled/StyledAdminTransaction";

export default function AdminDiscountTableBody(props: { val: Collect }) {
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">
					<Width100>{(props.val.date && moment(props.val?.date).format("MM-YYYY")) || ""}</Width100>
				</TableCell>
				<TableCell align="center">{props.val.staff?.identifyName || ""}</TableCell>
				<TableCell align="left">{props.val.staff?.taxId || ""}</TableCell>

				<TableCell align="center">{props.val.staff?.identifyCard || ""}</TableCell>
				<TableCell align="left">
				<Width100>
					{(props.val.staff?.birthDay && moment(props.val.staff?.birthDay).format("DD-MM-YYYY")) || ""}
					</Width100>
				</TableCell>

				<TableCell align="center">{props.val.staff?.address || ""}</TableCell>
				<TableCell align="left">
				<Width100>
					{(props.val.staff?.dateOfIssueIdentify &&
						moment(props.val.staff?.dateOfIssueIdentify).format("DD-MM-YYYY")) ||
						""}
						</Width100>
				</TableCell>
				<TableCell align="center">{props.val.staff?.placeOfIssueIdentify || ""}</TableCell>
				<TableCell align="center">{Math.round((props.val.totalCommissionMoney || 0) * 100) / 100} đ</TableCell>
				<TableCell align="center">{Math.round((props.val.deductionCommissionMoney || 0) * 100) / 100} đ</TableCell>
				<TableCell align="center">{Math.round((props.val.totalMoney||0) * 100) / 100} đ</TableCell>
			</ProductTableRowStyle>
		</>
	);
}
