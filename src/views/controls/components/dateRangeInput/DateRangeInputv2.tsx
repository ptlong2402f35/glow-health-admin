import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
	TransactionHisFilterDateRangeInputOrder,
	TransactionHisFilterDateRangeLabelOrder,
} from "./StyledDateRangeInput";

const styles = {
	placeholderColor: {
		color: "red",
	},
};
export default function DateRangeInputOrder(props: {
	fromDate: Date | null;
	onDateFromChange: (date: Date | null) => void;
	toDate: Date | null;
	onDateToChange: (date: Date | null) => void;
}) {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<TransactionHisFilterDateRangeInputOrder
				disableToolbar
				variant="inline"
				format="dd-MM-yyyy"
				margin="normal"
				value={props.fromDate}
				onChange={props.onDateFromChange}
				placeholder="Chọn ngày"
				KeyboardButtonProps={{
					"aria-label": "change date",
				}}
			/>
			<TransactionHisFilterDateRangeLabelOrder>To</TransactionHisFilterDateRangeLabelOrder>
			<TransactionHisFilterDateRangeInputOrder
				disableToolbar
				variant="inline"
				format="dd-MM-yyyy"
				margin="normal"
				value={props.toDate}
				onChange={props.onDateToChange}
				placeholder="Chọn ngày"
				KeyboardButtonProps={{
					"aria-label": "change date",
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}
