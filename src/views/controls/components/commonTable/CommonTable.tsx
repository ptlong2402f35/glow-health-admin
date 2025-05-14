import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import { CommonTableHeadCellBox } from "./StyledCommonTable";
import { CommonTableCellRespLabel } from "./StyledCommonTableResp";

export const useCommonTableStyles = makeStyles({
	container: {
		boxShadow: "none",
		fontSize: 14,
		fontFamily: "SF-Pro-Display",
	},
	table: {},
	tr: {},
	th: {
		fontFamily: "inherit",
		fontStyle: "normal",
		fontSize: "14px",
		lineHeight: "20px",
		fontWeight: 600,
		textAlign: "center",
		color: "var(--text-color)",
		padding: "8px 4px 8px 4px",
		backgroundColor: "#b9def5",
	},
	td: {
		fontFamily: "inherit",
		fontStyle: "normal",
		fontSize: "14px",
		color: "var(--text-color)",
		padding: "8px 4px 8px 4px",
		marginLeft: "-16px",
	},
	td_left: {
		paddingLeft: 32,
	},
	td_left_v2: {
		paddingLeft: 32,
		fontFamily: "inherit",
		fontStyle: "normal",
		fontSize: "14px",
		color: "var(--text-color)",
		padding: "8px 4px 8px 4px",
	},
	td_right: {
		paddingRight: 32,
	},
});

export function CommonTableHeadCell(props: TableCellProps) {
	return (
		<TableCell {...props}>
			<CommonTableHeadCellBox>{props.children}</CommonTableHeadCellBox>
		</TableCell>
	);
}

export interface CommonTableCellProps extends TableCellProps {
	label?: string;
}

export function CommonTableBodyCellResp(props: CommonTableCellProps) {
	return (
		<TableCell {...props}>
			<CommonTableCellRespLabel>{props.label || ""}</CommonTableCellRespLabel>
			{props.children}
		</TableCell>
	);
}
