import React, { useState } from "react";
import {
	StylePagePersonContentArea,
	StylePagePersonContentInput,
	StylePersonalLabelBank,
} from "../../personal/component/StylePerson";
import {
	AdminProductDialogInputInnerv2,
	AdminProductDialogInputLeft,
	AdminProductDialogInputWrap,
	SelectWrapper,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import { ConditionType, ConditionTypeMap, VoucherType, VoucherTypeMap } from "../../../../models/Voucher";
import {
	DateTimePicker,
	KeyboardDateTimePicker,
	KeyboardTimePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { TransactionHisFilterDateRangeInput } from "../../../controls/components/dateRangeInput/StyledDateRangeInput";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";
import Promotions, {
	PromotionType,
	PromotionTypeMap,
	hasDurationType,
	hasDurationTypeMap,
} from "../../../../models/Promotions";
import {
	AdminVoucherDialogInput,
	AdminVoucherDialogInputPromotion,
	AdminVoucherDialogInputPromotionv2,
} from "../../adminVoucherManagement/styled/StyledAdminVoucher";
import { TransactionHisFilterDateTimeRangeInput } from "../styled/StyledPromotion";
export default function AddPromotionInput(props: {
	name: string;
	setName: (value: string) => void;
	type: PromotionType;
	setType: (value: PromotionType) => void;
	percentage: number;
	setPercentage: (value: number) => void;
	amount: number;
	setAmount: (value: number) => void;
	hasDuration: hasDurationType;
	setHasDuration: (value: hasDurationType) => void;
	startAt: Date;
	setStartAt: (value: Date) => void;
	expireAt: Date;
	setExpireAt: (value: Date) => void;
	totalQuantity: number;
	setTotalQuantity: (value: number) => void;
	promotion?: Promotions;
	note: string;
	setNote: (value: string) => void;
}) {
	return (
		<AdminProductDialogInputWrap>
			<AdminVoucherDialogInputPromotionv2>
				<InputNameService
					name={props.name}
					setName={props.setName}
				/>
				<InputPercentageService
					percentage={props.percentage}
					setPercentage={props.setPercentage}
				/>

				<InputTypeService
					type={props.type}
					setType={props.setType}
				/>

				<InputStartTimeService
					startAt={props.startAt}
					setStartAt={props.setStartAt}
				/>
				<InputNoteService
					note={props.note}
					setNote={props.setNote}
				/>
			</AdminVoucherDialogInputPromotionv2>
			<AdminVoucherDialogInputPromotionv2>
				<InputQuantityService
					amount={props.amount}
					setAmount={props.setAmount}
				/>
				<InputMaxReduceService
					totalQuantity={props.totalQuantity}
					setTotalQuantity={props.setTotalQuantity}
				/>
				<InputConditionService
					hasDuration={props.hasDuration}
					setHasDuration={props.setHasDuration}
				/>

				<InputEndTimeService
					expireAt={props.expireAt}
					setExpireAt={props.setExpireAt}
				/>
				<QuantityUsed promotion={props.promotion} />
			</AdminVoucherDialogInputPromotionv2>
		</AdminProductDialogInputWrap>
	);
}

export function InputNameService(props: { name: string; setName: (value: string) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Tên</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.name}
				onChange={(e) => props.setName(e.target.value)}
			/>
		</AdminProductDialogInputInnerv2>
	);
}
export function InputPercentageService(props: { percentage: number; setPercentage: (value: number) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Phần trăm</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.percentage.toString()}
				onChange={(e) => {
					const inputValue = parseFloat(e.target.value);
					props.setPercentage(isNaN(inputValue) ? 0 : inputValue);
				}}
			/>
		</AdminProductDialogInputInnerv2>
	);
}
export function InputQuantityService(props: { amount: number; setAmount: (value: number) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Số tiền</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.amount.toString()}
				onChange={(e) => {
					const inputValue = parseFloat(e.target.value);
					props.setAmount(isNaN(inputValue) ? 0 : inputValue);
				}}
			/>
		</AdminProductDialogInputInnerv2>
	);
}
export function InputValueService(props: { value: string; setValue: (value: string) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Giá trị</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.value}
				onChange={(e) => props.setValue(e.target.value)}
			/>
		</AdminProductDialogInputInnerv2>
	);
}
export function InputTypeService(props: { type: PromotionType; setType: (value: PromotionType) => void }) {
	return (
		<SelectWrapper className="width100">
			<StylePersonalLabelBank>Kiểu</StylePersonalLabelBank>
			<select
				value={props.type.toString()}
				onChange={(e) => {
					const inputValue = parseFloat(e.target.value);
					props.setType(isNaN(inputValue) ? 0 : inputValue);
				}}>
				{Array.from(PromotionTypeMap.entries()).map(([type, label]) => (
					<option
						key={type}
						value={type}>
						{label}
					</option>
				))}
			</select>
		</SelectWrapper>
	);
}

export function InputMinValueOrderService(props: { minValueOrder: string; setMinValueOrder: (value: string) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Giá trị tối thiểu</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.minValueOrder}
				onChange={(e) => props.setMinValueOrder(e.target.value)}
			/>
		</AdminProductDialogInputInnerv2>
	);
}
export function InputMaxReduceService(props: { totalQuantity: number; setTotalQuantity: (value: number) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Số lượng</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.totalQuantity.toString()}
				onChange={(e) => {
					const inputValue = parseFloat(e.target.value);
					props.setTotalQuantity(isNaN(inputValue) ? 0 : inputValue);
				}}
			/>
		</AdminProductDialogInputInnerv2>
	);
}
export function InputStartTimeService(props: { startAt: Date; setStartAt: (value: Date) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<StylePersonalLabelBank>Thời gian bắt đầu</StylePersonalLabelBank>
				<TransactionHisFilterDateTimeRangeInput
					ampm={false}
					value={props.startAt}
					onChange={(date: MaterialUiPickersDate) => {
						if (date !== null) {
							props.setStartAt(date as Date);
						}
					}}
					disableToolbar
					variant="inline"
					format="yyyy-MM-dd HH:mm"
					margin="normal"
					placeholder="Chọn ngày"
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
					className="visible"
				/>
			</MuiPickersUtilsProvider>
		</AdminProductDialogInputInnerv2>
	);
}
export function InputEndTimeService(props: { expireAt: Date; setExpireAt: (value: Date) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Thời gian kết thúc</StylePersonalLabelBank>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<TransactionHisFilterDateTimeRangeInput
					ampm={false}
					onChange={(date: MaterialUiPickersDate) => {
						if (date !== null) {
							props.setExpireAt(date);
						}
					}}
					value={props.expireAt}
					disableToolbar
					variant="inline"
					format="yyyy-MM-dd HH:mm"
					margin="normal"
					placeholder="Chọn ngày"
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
					className="visible"
				/>
			</MuiPickersUtilsProvider>
		</AdminProductDialogInputInnerv2>
	);
}

export function InputConditionService(props: {
	hasDuration: hasDurationType;
	setHasDuration: (value: hasDurationType) => void;
}) {
	return (
		<SelectWrapper className="width100">
			<StylePersonalLabelBank>Điều kiện</StylePersonalLabelBank>
			<select
				value={props.hasDuration.toString()}
				onChange={(e) => {
					const inputValue = parseFloat(e.target.value);
					props.setHasDuration(isNaN(inputValue) ? 0 : inputValue);
				}}>
				{Array.from(hasDurationTypeMap.entries()).map(([hasDuration, label]) => (
					<option
						key={hasDuration}
						value={hasDuration}>
						{label}
					</option>
				))}
			</select>
		</SelectWrapper>
	);
}
export function QuantityUsed(props: { promotion?: Promotions }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>
				Số lượng đã dùng: <b>{props.promotion?.restQuantity || 0}</b>
			</StylePersonalLabelBank>
		</AdminProductDialogInputInnerv2>
	);
}

export function InputNoteService(props: { note: string; setNote: (value: string) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Ghi chú</StylePersonalLabelBank>
			<StylePagePersonContentArea
				value={props.note}
				onChange={(e) => props.setNote(e.target.value)}
			/>
		</AdminProductDialogInputInnerv2>
	);
}
