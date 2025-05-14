import React, { useState } from "react";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../../personal/component/StylePerson";
import { AdminProductDialogInputWrap } from "../../adminProductManagement/styled/ProductManagementStyle";

export default function AddStoreInput(props: {
	name: string;
	setName: (value: string) => void;
	long: number;
	setLong: (value: number) => void;
	lat: number;
	setLat: (value: number) => void;
}) {
	return (
		<AdminProductDialogInputWrap>
			<InputNameStore
				name={props.name}
				setName={props.setName}
			/>
			<InputCodeStore
				long={props.long}
				setLong={props.setLong}
			/>
			<InputPriceStore
				lat={props.lat}
				setLat={props.setLat}
			/>
		</AdminProductDialogInputWrap>
	);
}

export function InputNameStore(props: { name: string; setName: (value: string) => void }) {
	return (
		<div>
			<StylePersonalLabelBank>Tên cơ sở</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.name}
				onChange={(e) => props.setName(e.target.value)}
			/>
		</div>
	);
}
export function InputCodeStore(props: { long: number; setLong: (value: number) => void }) {
	const handleLongChange = (e: any) => {
		const value = parseFloat(e.target.value);
		if (!isNaN(value)) {
			props.setLong(value);
		} else {
			props.setLong(0);
		}
	};
	return (
		<div>
			<StylePersonalLabelBank>Kinh độ</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.long.toString()}
				onChange={handleLongChange}
			/>
		</div>
	);
}
export function InputPriceStore(props: { lat: number; setLat: (value: number) => void }) {
	const handleLatChange = (e: any) => {
		const value = parseFloat(e.target.value);
		if (!isNaN(value)) {
			props.setLat(value);
		} else {
			props.setLat(0);
		}
	};
	return (
		<div>
			<StylePersonalLabelBank>Vĩ độ</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.lat.toString()}
				onChange={handleLatChange}
			/>
		</div>
	);
}
