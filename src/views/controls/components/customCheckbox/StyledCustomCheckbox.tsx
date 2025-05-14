import styled, { css } from "styled-components";

export const ControlCustomCheckbox = styled.div<{
	checked: boolean;
}>`
	display: inline-block;
	border: 1px solid transparent;
	cursor: pointer;
	border-radius: 7px;

	${(props) =>
		props.checked &&
		css`
			border: 1px solid var(--primary-color);
		`}

	& input[type="checkbox"] {
		display: none;
	}

	&.checked {
		border: 1px solid var(--primary-color);
	}

	&:hover {
		border: 1px solid var(--primary-color);
	}
`;

export const ControlCustomCheckboxInner = styled.div`
	display: block;
	width: 19px;
	height: 19px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		vertical-align: unset;
	}
`;
