import React, { useState } from "react";
import {
	AdminProductDialogInputInner,
	AdminProductDialogInputLeft,
	AdminProductDialogInputWrap,
	SelectWrapper,
} from "../adminProductManagement/styled/ProductManagementStyle";
import UserGlow from "../../../models/UserGlow";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../personal/component/StylePerson";
import {
	AddProductInputOwner,
	AdminTransactionDialogInputWrap,
	AdminTransactionTextAreaContent,
} from "./styled/StyledAdminTransaction";
import { TransactionStyle, TransactionStyleMap, TransactionType, TransactionTypeMap } from "../../../models/Transaction";
import AdminClientSelect from "./hook/useListOwnerTransaction";

export default function AddProductInput(props: {
	selectedTransactionType: TransactionType;
	setSelectedTransactionType: (value: TransactionType) => void;
	content: string;
	setContent: (value: string) => void;
	money: string;
	setMoney: (value: string) => void;
	serviceGroup: string;
	setServiceGroup: (value: string) => void;
	selectedTransactionStyle: TransactionStyle;
	setSelectedTransactionStyle: (value: TransactionStyle) => void;
}) {
	return (
		<AdminTransactionDialogInputWrap>
			<OptionTransactionType
				selectedTransactionType={props.selectedTransactionType}
				setSelectedTransactionType={props.setSelectedTransactionType}
				className="width100"
			/>
			<OptionTransactionStyle
				selectedTransactionStyle={props.selectedTransactionStyle}
				setSelectedTransactionStyle={props.setSelectedTransactionStyle}
				className="width100"
			/>
			<AddProductInputOwner>
				<StylePersonalLabelBank>Khách hàng/ Chủ sở hữu</StylePersonalLabelBank>
				<AdminClientSelect
					selectedId={props.serviceGroup}
					onChange={props.setServiceGroup}
				/>
			</AddProductInputOwner>

			<InputMoneyTran
				money={props.money}
				setMoney={props.setMoney}
				className="width100"
			/>
			<InputContentTran
				content={props.content}
				setContent={props.setContent}
				className="width100"
			/>
		</AdminTransactionDialogInputWrap>
	);
}

export function InputNameService(props: { name: string; setName: (value: string) => void }) {
	return (
		<AdminProductDialogInputInner>
			<StylePersonalLabelBank>Tên dịch vụ</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.name}
				onChange={(e) => props.setName(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}
export function InputMoneyTran(props: { money: string; setMoney: (value: string) => void; className?: string }) {
	const handleMoneyChange = (e: any) => {
		const input = e.target.value;
		if (/^\d*\.?\d+$/.test(input) || input === "") {
			props.setMoney(input);
		}
	};
	return (
		<AdminProductDialogInputInner className={props.className}>
			<StylePersonalLabelBank>Số tiền</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.money}
				// onChange={handleMoneyChange}
				onChange={(e) => props.setMoney(e.target.value)}
				type="text"
			/>
		</AdminProductDialogInputInner>
	);
}
export function InputContentTran(props: { content: string; setContent: (value: string) => void; className?: string }) {
	return (
		<AdminProductDialogInputInner className={props.className}>
			<StylePersonalLabelBank>Nội dung giao dịch</StylePersonalLabelBank>
			<AdminTransactionTextAreaContent
				value={props.content}
				onChange={(e) => props.setContent(e.target.value)}
			/>
		</AdminProductDialogInputInner>
	);
}

export function OptionTransactionType(props: {
	selectedTransactionType: TransactionType;
	setSelectedTransactionType: (value: TransactionType) => void;
	className?: string;
}) {
	return (
		<SelectWrapper className={props.className}>
			<StylePersonalLabelBank>Yêu cầu</StylePersonalLabelBank>
			<select
				value={props.selectedTransactionType}
				onChange={(e) => props.setSelectedTransactionType(e.target.value as any)}>
				{Array.from(TransactionTypeMap.entries()).map(([type, label]) => (
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


export function OptionTransactionStyle(props: {
	selectedTransactionStyle: TransactionStyle;
	setSelectedTransactionStyle: (value: TransactionStyle) => void;
	className?: string;
}) {
	return (
		<SelectWrapper className={props.className}>
			<StylePersonalLabelBank>loại giao dịch</StylePersonalLabelBank>
			<select
				value={props.selectedTransactionStyle}
				onChange={(e) => props.setSelectedTransactionStyle(e.target.value as any)}>
				{Array.from(TransactionStyleMap.entries()).map(([type, label]) => (
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
