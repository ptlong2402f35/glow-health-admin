import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { TextField, Theme, makeStyles } from "@material-ui/core";
import { FilterDateWrap, TransactionHisFilterDateRangeInputOrder } from "./StyledDateRangeInput";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		margin: theme.spacing(1),
	},
}));
export default function DateRangeInputFinan(props: {
	fromDate: Date | null;
	onDateFromChange: (date: Date | null) => void;
	toDate: Date | null;
	onDateToChange: (date: Date | null) => void;
}) {
	const classes = useStyles();
	const [fromDate, setFromDate] = useState(props.fromDate);
	const [toDate, setToDate] = useState(props.toDate);
	const [openFromDate, setOpenFromDate] = useState(false);
	const [openToDate, setOpenToDate] = useState(false);

	const handleFromDateChange = (date: Date | null) => {
		setFromDate(date);
		setOpenFromDate(false);
		props.onDateFromChange(date);
	};

	const handleToDateChange = (date: Date | null) => {
		setToDate(date);
		setOpenToDate(false);
		props.onDateToChange(date);
	};

	return (
		<div className={classes.root}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<FilterDateWrap>
					<TransactionHisFilterDateRangeInputOrder
						disableToolbar
						variant="inline"
						format="dd-MM-yyyy"
						margin="normal"
						value={fromDate}
						onChange={handleFromDateChange}
						placeholder="Chọn ngày"
						KeyboardButtonProps={{
							"aria-label": "change date",
							style: { display: "none" },
						}}
						open={openFromDate}
						onOpen={() => setOpenFromDate(true)}
						onClose={() => setOpenFromDate(false)}
						TextFieldComponent={(props) => (
							<TextField
								{...props}
								onClick={() => setOpenFromDate(true)}
							/>
						)}
					/>
					<TransactionHisFilterDateRangeInputOrder
						disableToolbar
						variant="inline"
						format="dd-MM-yyyy"
						margin="normal"
						value={toDate}
						onChange={handleToDateChange}
						placeholder="Chọn ngày"
						KeyboardButtonProps={{
							"aria-label": "change date",
							style: { display: "none" },
						}}
						open={openToDate}
						onOpen={() => setOpenToDate(true)}
						onClose={() => setOpenToDate(false)}
						TextFieldComponent={(props) => (
							<TextField
								{...props}
								onClick={() => setOpenToDate(true)}
							/>
						)}
					/>
				</FilterDateWrap>
			</MuiPickersUtilsProvider>
		</div>
	);
}
