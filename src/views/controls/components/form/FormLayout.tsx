import styled, { css } from "styled-components";

export const FormGroup = styled.div<{
	width6?: boolean;
	width6Resp?: boolean;
	odd?: boolean;
	even?: boolean;
}>`
	margin-bottom: 16px;
	font-size: 14px;
	color: var(--text-color2);

	${(props) =>
		props.width6 &&
		css`
			width: 50%;
			float: left;
		`}

	${(props) =>
		props.odd &&
		css`
			padding-right: 12px;
		`}

    ${(props) =>
		props.even &&
		css`
			padding-left: 12px;
		`}

    @media screen and (max-width: 768px) {
		& {
			${(props) =>
				props.width6 &&
				css`
					width: 100%;
				`}

			${(props) =>
				props.odd &&
				css`
					padding-right: 0px;
				`}
    
            ${(props) =>
				props.even &&
				css`
					padding-left: 0px;
				`}
		}
	}
`;
