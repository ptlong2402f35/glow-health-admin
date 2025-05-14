import React, { useState } from "react";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../../personal/component/StylePerson";
import {
	AdminProductDialogInputInner,
	AdminProductDialogInputInnerv2,
	AdminProductDialogInputLeft,
	AdminProductDialogInputWrap,
	SelectWrapper,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import { AdminVoucherDialogInput, AdminVoucherDialogInputRes } from "../styled/StyledAdminVoucher";
import { ConditionType, ConditionTypeMap, VoucherType, VoucherTypeMap } from "../../../../models/Voucher";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TransactionHisFilterDateRangeInput } from "../../../controls/components/dateRangeInput/StyledDateRangeInput";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";
export default function VoucherInput(props: {
	name: string;
	setName: (value: string) => void;
	code: string;
	setCode: (value: string) => void;
	endTime: Date;
	setEndTime: (value: Date) => void;
	startTime: Date;
	setStartTime: (value: Date) => void;
	quantity: string;
	setQuantity: (value: string) => void;
	type: string;
	setType: (value: string) => void;
	value: string;
	setValue: (value: string) => void;
	minValueOrder: string;
	setMinValueOrder: (value: string) => void;
	maxReduce: string;
	setMaxReduce: (value: string) => void;
	condition: ConditionType;
	setCondition: (value: ConditionType) => void;
}) {
	return (
		<AdminProductDialogInputWrap>
			<AdminVoucherDialogInput>
				<InputNameService
					name={props.name}
					setName={props.setName}
				/>
				<InputCodeService
					code={props.code}
					setCode={props.setCode}
				/>
				{/* <InputQuantityService
					quantity={props.quantity}
					setQuantity={props.setQuantity}
				/> */}
				<InputConditionService
					condition={props.condition}
					setCondition={props.setCondition}
				/>
			</AdminVoucherDialogInput>
			<AdminVoucherDialogInput>
				<InputValueService
					value={props.value}
					setValue={props.setValue}
				/>
				<InputTypeService
					type={props.type}
					setType={props.setType}
				/>

				<InputStartTimeService
					startTime={props.startTime}
					setStartTime={props.setStartTime}
				/>
			</AdminVoucherDialogInput>
			<AdminVoucherDialogInput>
				{/* <InputMinValueOrderService
					minValueOrder={props.minValueOrder}
					setMinValueOrder={props.setMinValueOrder}
				/>
				<InputMaxReduceService
					maxReduce={props.maxReduce}
					setMaxReduce={props.setMaxReduce}
				/> */}

				<InputEndTimeService
					endTime={props.endTime}
					setEndTime={props.setEndTime}
				/>
			</AdminVoucherDialogInput>

			<AdminVoucherDialogInputRes>
				<InputNameService
					name={props.name}
					setName={props.setName}
				/>
				<InputCodeService
					code={props.code}
					setCode={props.setCode}
				/>
			</AdminVoucherDialogInputRes>
			<AdminVoucherDialogInputRes>
				<InputQuantityService
					quantity={props.quantity}
					setQuantity={props.setQuantity}
				/>
				<InputConditionService
					condition={props.condition}
					setCondition={props.setCondition}
				/>
			</AdminVoucherDialogInputRes>
			<AdminVoucherDialogInputRes>
				<InputValueService
					value={props.value}
					setValue={props.setValue}
				/>
				<InputTypeService
					type={props.type}
					setType={props.setType}
				/>
			</AdminVoucherDialogInputRes>
			<AdminVoucherDialogInputRes>
				<InputMinValueOrderService
					minValueOrder={props.minValueOrder}
					setMinValueOrder={props.setMinValueOrder}
				/>
				<InputMaxReduceService
					maxReduce={props.maxReduce}
					setMaxReduce={props.setMaxReduce}
				/>
			</AdminVoucherDialogInputRes>
			<AdminVoucherDialogInputRes>
				<InputStartTimeService
					startTime={props.startTime}
					setStartTime={props.setStartTime}
				/>
			</AdminVoucherDialogInputRes>
			<AdminVoucherDialogInputRes>
				<InputEndTimeService
					endTime={props.endTime}
					setEndTime={props.setEndTime}
				/>
			</AdminVoucherDialogInputRes>
		</AdminProductDialogInputWrap>
	);
}

export function InputNameService(props: { name: string; setName: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Tên</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.name}
				onChange={(e) => props.setName(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}
export function InputCodeService(props: { code: string; setCode: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Code</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.code}
				onChange={(e) => props.setCode(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}
export function InputQuantityService(props: { quantity: string; setQuantity: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Số lượng</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.quantity}
				onChange={(e) => props.setQuantity(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}
export function InputValueService(props: { value: string; setValue: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Giá trị</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.value}
				onChange={(e) => props.setValue(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}
export function InputTypeService(props: { type: string; setType: (value: string) => void }) {
	return (
		<SelectWrapper>
			<StylePersonalLabelBank>Giá trị %</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.type}
				onChange={(e) => props.setType(e.target.value)}
			/>

		</SelectWrapper>
	);
}

export function InputMinValueOrderService(props: { minValueOrder: string; setMinValueOrder: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Giá trị tối thiểu</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.minValueOrder}
				onChange={(e) => props.setMinValueOrder(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}
export function InputMaxReduceService(props: { maxReduce: string; setMaxReduce: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Giá trị tối đa</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.maxReduce}
				onChange={(e) => props.setMaxReduce(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}
export function InputStartTimeService(props: { startTime: Date; setStartTime: (value: Date) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<StylePersonalLabelBank>Thời gian bắt đầu</StylePersonalLabelBank>
				<TransactionHisFilterDateRangeInput
					value={props.startTime}
					onChange={(date: MaterialUiPickersDate) => {
						if (date !== null) {
							props.setStartTime(date as Date);
						}
					}}
					disableToolbar
					variant="inline"
					format="yyyy-MM-dd"
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
export function InputEndTimeService(props: { endTime: Date; setEndTime: (value: Date) => void }) {
	return (
		<AdminProductDialogInputInnerv2>
			<StylePersonalLabelBank>Thời gian kết thúc</StylePersonalLabelBank>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<TransactionHisFilterDateRangeInput
					onChange={(date: MaterialUiPickersDate) => {
						if (date !== null) {
							props.setEndTime(date);
						}
					}}
					value={props.endTime}
					disableToolbar
					variant="inline"
					format="yyyy-MM-dd"
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
	condition: ConditionType;
	setCondition: (value: ConditionType) => void;
}) {
	return (
		<SelectWrapper>
			<StylePersonalLabelBank>Điều kiện</StylePersonalLabelBank>
			<select
				value={props.condition}
				onChange={(e) => props.setCondition(e.target.value as any)}>
				{Array.from(ConditionTypeMap.entries()).map(([condition, label]) => (
					<option
						key={condition}
						value={condition}>
						{label}
					</option>
				))}
			</select>
		</SelectWrapper>
	);
}
