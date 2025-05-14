import styled from "styled-components";
import { DialogWrapSmall } from "../dialogWrap/DialogWrap";

export const SelectDialogWrap = styled(DialogWrapSmall)`
	& .MuiDialogContent-root,
	& .MuiDialogContent-root:first-child {
		padding-top: 0px;
	}
`;

export const SelectDialogOption = styled.div`
	margin-bottom: 6px;

	&:last-child {
		margin-bottom: 0px;
	}

	& input[type="radio"] {
		cursor: pointer;
		margin-right: 8px;
	}

	& label {
		color: var(--text-color);
		font-weight: normal;
		font-size: 14px;
		cursor: pointer;
	}
`;
