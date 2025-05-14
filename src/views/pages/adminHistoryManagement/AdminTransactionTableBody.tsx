import React, { useState } from "react";
import Transaction, { TransactionStyle, TransactionStyleMap } from "../../../models/Transaction";
import { ProductTableRowStyle } from "../adminProductManagement/styled/ProductManagementStyle";
import TableCell from "@material-ui/core/TableCell";
import moment from "moment";

export default function AdminTransactionTableBody(props: { val: Transaction }) {
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">{props.val.code}</TableCell>

				<TableCell align="center">{props.val.user?.phone}</TableCell>

				<TableCell align="center">{props.val.userCreated?.phone}</TableCell>

				<TableCell align="center">{props.val.content}</TableCell>
				<TableCell align="center">
					<>
						{props.val.add ? "+" : "-"}
						{props.val.money} đ
					</>
				</TableCell>
				<TableCell align="center">{props.val.totalMoney} đ</TableCell>
				<TableCell align="center">{TransactionStyleMap.get(props.val.type||TransactionStyle.No)}</TableCell>

				<TableCell align="center">{props.val.success ? <>Thành công</> : <>Thất bại</>}</TableCell>
				<TableCell align="center">
					{(props.val.createdAt && moment(props.val?.createdAt).format("HH:mm DD-MM-YYYY")) || ""}
				</TableCell>
			</ProductTableRowStyle>
		</>
	);
}
