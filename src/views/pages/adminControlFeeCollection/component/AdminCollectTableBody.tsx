import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import moment from "moment";
import Collect, { CollectTypeMap } from "../../../../models/Collect";
import { ProductTableRowStyle } from "../../adminProductManagement/styled/ProductManagementStyle";
import { Width100 } from "../../adminHistoryManagement/styled/StyledAdminTransaction";

export default function AdminCollectTableBody(props: { val: Collect }) {
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">
					<Width100>
				{(props.val.date && moment(props.val?.date).format("MM-YYYY")) || ""}
				</Width100>
				</TableCell>

				<TableCell align="center">{props.val.staff?.identifyName || ""}</TableCell>

				<TableCell align="center">{props.val.staff?.identifyCard || ""}</TableCell>

				<TableCell align="center">{props.val.staff?.address || ""}</TableCell>
				<TableCell align="center">
				{CollectTypeMap.get(props.val.type || 0)}
				</TableCell>
				<TableCell align="center">{Math.round((props.val.totalMoney || 0) * 100) / 100} đ</TableCell>
			</ProductTableRowStyle>
		</>
	);
}
