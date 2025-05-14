import styled, { css } from "styled-components";

export const FormInputDiv = styled.div`
	font-size: 14px;
	color: var(--text-color0);
	width: 100%;
`;

export const InputText = styled.input<{
	sm?: boolean;
	xs?: boolean;
}>`
	font-size: 14px;
	color: var(--text-color0);
	width: 100%;
	padding: 14px 20px 15px 20px;
	border-radius: 100px;
	border: 1px solid var(--border-color);

	${(props) =>
		props.sm &&
		css`
			line-height: 14px;
			padding: 9px 20px 9px 20px;
		`}

	${(props) =>
		props.xs &&
		css`
			line-height: 14px;
			padding: 6px 15px 6px 15px;
		`}

    &:disabled {
		background-color: hsl(0, 0%, 95%);
	}

	@media screen and (max-width: 768px) {
		& {
			padding: 11px 20px 12px 20px;
		}
	}
`;

export const InputTextarea = styled.textarea<{
	sm?: boolean;
	xs?: boolean;
}>`
	font-size: 14px;
	color: var(--text-color0);
	width: 100%;
	padding: 14px 20px 15px 20px;
	border-radius: 16px;
	border: 1px solid var(--border-color);
	min-height: 130px;
	resize: none;

	${(props) =>
		props.sm &&
		css`
			padding: 9px 20px 9px 20px;
		`}

	${(props) =>
		props.xs &&
		css`
			padding: 6px 15px 6px 15px;
		`}

    &:disabled {
		background-color: hsl(0, 0%, 95%);
	}

	@media screen and (max-width: 768px) {
		& {
			padding: 11px 20px 12px 20px;
		}
	}
`;

export const InputSelect = styled.select<{
	sm?: boolean;
}>`
	color: var(--text-color0);
	width: 100%;
	border-radius: 100px;
	border: 1px solid var(--border-color);
	font-size: 14px;
	line-height: 14px;
	padding: 14px 20px 15px 20px;
	background-color: #fff;

	${(props) =>
		props.sm &&
		css`
			padding: 9px 20px 9px 20px;
		`}
`;
