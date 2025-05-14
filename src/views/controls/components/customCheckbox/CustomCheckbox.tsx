import React from "react";
import { ControlCustomCheckbox, ControlCustomCheckboxInner } from "./StyledCustomCheckbox";

export default function CustomCheckbox(
	props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
	const onClick = () => {
		props.onChange?.({
			target: {
				checked: props.checked ? false : true,
			},
		} as any);
	};

	return (
		<ControlCustomCheckbox
			checked={props.checked ? true : false}
			onClick={onClick}>
			<input
				type="checkbox"
				{...props}
				checked={props.checked ? true : false}
			/>
			<ControlCustomCheckboxInner>
				{props.checked ? <img src="./static/img/checked.png" /> : <img src="./static/img/unchecked.png" />}
			</ControlCustomCheckboxInner>
		</ControlCustomCheckbox>
	);
}
