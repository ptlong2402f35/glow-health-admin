import styled, { css } from "styled-components";

// control-plain-pagination-box ${ props.className }` }>
export const PlainPaginationBoxOuter = styled.div`
	display: inline-block;
`;

// control-plain-pagination-box-inner">
export const PlainPaginationBoxInner = styled.div``;

// control-plain-pagination-left">
export const PlainPaginationLeft = styled.div`
	display: inline-block;
	margin-right: 10px;
`;

const paginationBtnStyle = css`
	width: 32px;
	height: 32px;
	border: none;
	border-radius: 100px;
	color: var(--text-color1);
	background-color: none;

	&:hover {
		box-shadow: 0px 0px 5px #e0e0e0;
		background-color: #ebe9ea;
	}

	&:disabled {
		border: none;
		background-color: transparent;
		color: #a0a0a0;
		box-shadow: none;
	}

	& i {
		line-height: 32px;
	}
`;

// control-plain-pagination-left-btn" disabled={ props.page <= 1 }
export const PlainPaginationLeftBtn = styled.button`
	${paginationBtnStyle}
`;

// control-plain-pagination-center">
export const PlainPaginationCenter = styled.div`
	display: inline-block;
	margin-right: 10px;
	width: 32px;
	height: 32px;
	border: 1px solid #e0e0e0;
	background-color: #e0e0e0;
	border-radius: 100px;
	text-align: center;
	color: var(--text-color0);

	& p {
		display: inline;
		line-height: 31px;
	}
`;

// control-plain-pagination-right">
export const PlainPaginationRight = styled.div`
	display: inline-block;
`;

// control-plain-pagination-right-btn" disabled={ props.isEnd }
export const PlainPaginationRightBtn = styled.button`
	${paginationBtnStyle}
`;
