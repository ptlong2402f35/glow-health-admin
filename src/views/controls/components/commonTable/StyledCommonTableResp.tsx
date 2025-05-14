import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { CommonTableHeadCell } from "./CommonTable";
import TableContainer from "@material-ui/core/TableContainer";

export const CommonTableContainerResp = styled(TableContainer)<{
	$isResTransaction?: boolean;
	$xStyleTableContainerRespTbodyTr?: FlattenSimpleInterpolation;
	$xStyleTableContainerResp?: FlattenSimpleInterpolation;
	$xStyleTableContainerRespTbodyTrTd?: FlattenSimpleInterpolation;
}>`
	@media screen and (max-width: 768px) {
		// display: block;

		& thead,
		& tbody {
			// display: block;
			background-color: var(--background-color);
			padding: 4px 16px;
		}

		& thead tr {
			// display: none;
		}

		& tbody tr {
			// display: block;
			position: relative;
			${(props) => props.$xStyleTableContainerRespTbodyTr}
		}
		${(props) => props.$xStyleTableContainerResp}
		& tbody tr:last-child {
			border-bottom: none;
		}

		& tbody tr th,
		& tbody tr td {
			// display: block;
			text-align: left;
			margin-bottom: 3px;
			position: relative;
			border: none;
			// padding-left: 130px;
			margin-top: 0;
			margin-right: 0;
			${(props) => props.$xStyleTableContainerRespTbodyTrTd}
		}

		& tbody tr th:last-child,
		& tbody tr td:last-child {
			margin-bottom: 0px;
		}
		& tbody tr td:first-child {
			margin-top: 10px;
		}
	}
`;

export const CommonTableHeadCellResp = styled(CommonTableHeadCell)<{
	$xStyleTableCellRespHead?: FlattenSimpleInterpolation;
	$xStyleConstWidthHead?: FlattenSimpleInterpolation;
}>`
	@media screen and (max-width: 768px) {
		& {
			// display: none;
		}
	}
	& > div {
		${(props) => props.$xStyleTableCellRespHead}
	}
	${(props) => props.$xStyleConstWidthHead}
`;

export const CommonTableCellRespLabel = styled.div<{
	xStyleTableCellRespLabel?: FlattenSimpleInterpolation;
	$isResTransaction?: boolean;
}>`
	display: none;

	@media screen and (max-width: 768px) {
		& {
			display: block;
			position: absolute;
			color: var(--text-color);
			font-size: 12px;
			top: 0;
			left: 0;
			${(props) => props.xStyleTableCellRespLabel}
		}

		&:first-child {
			top: 0px;
		}
	}
`;
