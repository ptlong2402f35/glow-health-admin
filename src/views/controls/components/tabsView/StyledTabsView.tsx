import { Link } from "react-router-dom";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { PageWrapStyle } from "../form/Page";

export const OrderManagementPageWrap = styled.div`
	${PageWrapStyle}
	background-color: var(--background-color);
	@media screen and (max-width: 768px) {
		background-color: var(--background-color);
	}
`;

export const OrderManagementListWrap = styled.div`
	display: block;
	min-height: 500px;
	background-color: #fff;
`;

export const TabsViewWrap = styled.div<{
	isResOrder?: boolean;
	xStylePageOrder?: FlattenSimpleInterpolation;
}>`
	${(props) => props.xStylePageOrder};
`;

export const TabsViewInner = styled.div``;

export const TabsViewHeaderWrap = styled.div`
	@media screen and (max-width: 768px) {
		& {
			border-radius: 0px;
			padding: 0px;
		}
	}
`;

export const TabsViewHeaderOuter = styled.div`
	display: table;
	width: 100%;
	border-radius: 8px;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		border-radius: 0px;
		width: 100%;
		display: block;
		overflow-x: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const TabsViewHeader = styled.div<{
	isResOrder?: boolean;
	xStylePageOrderHeader?: FlattenSimpleInterpolation;
	xStylePageOrderTabHeader?: FlattenSimpleInterpolation;
}>`
	width: 100%;
	border-bottom: 1px solid var(--border-color);
	display: table-row;

	${(props) => props.xStylePageOrderHeader};

	@media screen and (max-width: 768px) {
		display: block;
		width: max-content;
		padding: 0px;
		background-color: "#fff";
		border-radius: 8px;

		${(props) => props.xStylePageOrderTabHeader};
	}
`;

export const TabsViewHeaderItem = styled.div`
	display: table-cell;
	text-align: center;
	padding: 16px 16px 0px 16px;

	&:first-child {
		margin-left: 0px;
	}

	@media screen and (max-width: 768px) {
		display: inline-block;
		margin-left: 8px;
		margin-right: 8px;
		padding: 8px 8px 0px 8px;

		&:first-child {
			margin-left: 8px;
		}

		&:last-child {
			margin-right: 8px;
		}
	}
`;

const tabsViewHeaderItemNameStyle = css<{
	$active?: boolean;
}>`
	display: block;
	text-decoration: none;
	color: var(--text-color);
	font-size: 16px;
	line-height: 17px;
	padding-bottom: 12px;
	border-bottom: 2px solid transparent;
	cursor: pointer;

	${(props) =>
		props.$active &&
		css`
			color: var(--primary-color);
			border-bottom: 2px solid var(--primary-color);
		`};

	@media screen and (max-width: 768px) {
		& {
			padding-bottom: 8px;
			font-size: 14px;
		}
	}
`;

export const TabsViewHeaderItemName = styled.a<{
	$active?: boolean;
}>`
	${tabsViewHeaderItemNameStyle}
`;

export const TabsViewHeaderItemNameLink = styled(Link)<{
	$active?: boolean;
}>`
	${tabsViewHeaderItemNameStyle}
`;

export const TabsViewBody = styled.div``;

export const TabsViewBodyInner = styled.div``;

export const TabsViewBodyItem = styled.div`
	display: none;
	opacity: 0;
	transition: opacity 0.2s;

	&.fading {
		display: block;
		opacity: 0;
	}

	&.active {
		display: block;
		opacity: 1;
	}

	&.appear {
		display: block;
		opacity: 0;
	}
`;
