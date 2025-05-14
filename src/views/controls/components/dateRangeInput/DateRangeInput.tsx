import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TransactionHisFilterDateRangeInput, TransactionHisFilterDateRangeLabel } from "./StyledDateRangeInput";

export default function DateRangeInput(props: {
	fromDate: Date | null;
	onDateFromChange: (date: Date | null) => void;
	toDate: Date | null;
	onDateToChange: (date: Date | null) => void;
}) {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<TransactionHisFilterDateRangeInput
				disableToolbar
				variant="inline"
				format="yyyy-MM-dd"
				margin="normal"
				value={props.fromDate}
				onChange={props.onDateFromChange}
				placeholder="Chọn ngày"
				KeyboardButtonProps={{
					"aria-label": "change date",
				}}
			/>
			<TransactionHisFilterDateRangeLabel>Tới</TransactionHisFilterDateRangeLabel>
			<TransactionHisFilterDateRangeInput
				disableToolbar
				variant="inline"
				format="yyyy-MM-dd"
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
