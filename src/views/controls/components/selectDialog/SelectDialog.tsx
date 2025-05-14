import React from "react";
import { SelectBoxOptionType } from "../selectBox/SelectBox";
import { SelectDialogOption, SelectDialogWrap } from "./StyledSelectDialog";

export default function SelectDialog(props: {
	open: boolean;
	onClose: () => void;
	options: SelectBoxOptionType[];
	value: any;
	onChange: (val: any) => void;
}) {
	const onOptionSelected = (val: SelectBoxOptionType) => {
		props.onChange(val.value);
		props.onClose();
	};

	return (
		<SelectDialogWrap
			open={props.open}
			onClose={props.onClose}
			hideHeader={true}
			hideFooter={true}>
			<div>
				{props.options.map((item, idx) => (
					<SelectDialogOption key={idx}>
						<input
							type="radio"
							id={`route-option-${idx}`}
							value={props.value}
							checked={props.value == item.value}
							onChange={() => onOptionSelected(item)}
						/>
						<label htmlFor={`route-option-${idx}`}>{item.label || "--"}</label>
					</SelectDialogOption>
				))}
			</div>
		</SelectDialogWrap>
	);
}
