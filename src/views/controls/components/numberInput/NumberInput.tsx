import React, { ChangeEvent } from "react";
import {
	ControlNumberInputAddBtn,
	ControlNumberInputSubBtn,
	ControlNumberInputText,
	ControlNumberInputWrap,
} from "./StyledNumberInput";

export default function NumberInput(props: { value: number; onChange: (val: number) => void; id?: string }) {
	const getFormattedCurrency = () => {
		if (!props.value) {
			return "0";
		}
		return props.value.toLocaleString("en");
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		let val = e.target.value?.replace(",", "");
		try {
			let parsedVal = parseInt(val);
			props.onChange(parsedVal);
		} catch (err) {}
	};

	const onAddBtnClick = () => {
		if (!props.value) {
			props.onChange(1);
		} else {
			props.onChange(props.value + 1);
		}
	};

	const onSubBtnClick = () => {
		if (props.value) {
			props.onChange(props.value - 1);
		}
	};

	return (
		<ControlNumberInputWrap id={props.id}>
			<ControlNumberInputText
				type="text"
				value={getFormattedCurrency()}
				onChange={onChange}
			/>
			<ControlNumberInputSubBtn
				disabled={!props.value}
				onClick={onSubBtnClick}>
				<i className="fa fa-minus"></i>
			</ControlNumberInputSubBtn>
			<ControlNumberInputAddBtn onClick={onAddBtnClick}>
				<i className="fa fa-plus"></i>
			</ControlNumberInputAddBtn>
		</ControlNumberInputWrap>
	);
}
