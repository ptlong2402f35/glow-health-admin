import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";

export const HomeSearchProductsWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 42px;
	@media screen and (max-width: 768px) {
		margin-top: 20px;
	}
`;
export const HomeSearchProductsSwipeWrap = styled.div<{
	$isShortWidth?: boolean;
}>`
	& .react-swipeable-view-container {
		height: 100%;
	}
	overflow-x: hidden;
	@media screen and (max-width: 768px) {
		height: 520px;
		display: flex;
		align-items: center;
	}
	${(props) => (props.$isShortWidth ? "width:300px" : "width:1180px")}
`;

export const HomeSearchProductsSwipe = styled(SwipeableViews)`
	width: 300px;
	overflow-x: visible !important;

	& > div {
		width: 300px;
	}
	& > div > div {
		width: 280px;
		overflow: visible !important;
	}
	@media screen and (max-width: 768px) {
		margin-left: calc(50% - 140px);
		& > div {
			width: 300px;
		}
	}
`;
export const HomeSearchProductsItemWrap = styled.div<{
	$isSingle?: boolean;
}>`
	width: 280px;
	background-color: #fff;
	border-radius: 16px;
	overflow: hidden;
	cursor: pointer;
	z-index: 2;
	box-shadow: 0px 0px 4px #d0d0d0;
	${(props) => props.$isSingle && "margin-bottom:46px;"}
`;
export const HomeSearchProductsItemImgWrap = styled.div`
	width: 280px;
	height: 280px;
	position: relative;
`;
export const HomeSearchProductsItemImg = styled.img`
	width: 100%;
	height: 100%;
`;
export const HomeSearchProductsItemContent = styled.div`
	padding: 24px 20px 8px 20px;
`;
export const HomeSearchProductsItemName = styled.div`
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: var(--text-color1v2);
	margin-bottom: 12px;
	height: 44px;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const HomeSearchProductsItemDes = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 8px;
`;
export const HomeSearchProductsItemDesName = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	color: #595a5c;
`;
export const HomeSearchProductsItemDesValue = styled.div`
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	color: var(--text-color1v2);
`;
export const HomeSearchProductsItemFooter = styled.div`
	padding: 0 20px 24px 20px;
	display: flex;
	justify-content: ;
	align-items: center;
	gap: 10px;
`;

export const HomeSearchProductsItemBuyBtn = styled.button<{
	$isDisable?: boolean;
}>`
	font-weight: 500;
	font-size: 14px;
	line-height: 100%;
	padding: 9px 16px;
	background-color: var(--primary-colorv2);
	color: #fff;
	border: none;
	border-radius: 100px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 137px;

	${(props) => props.$isDisable && "opacity:.6"}
`;
export const HomeSearchProductsGuest = styled(HomeSearchProductsItemBuyBtn)<{
	$isDisable?: boolean;
}>`
	width: calc(100% - 20px);
`;
export const HomeSearchProductsItemCopyBtn = styled(HomeSearchProductsItemBuyBtn)`
	background: #0087a5;
	min-width: unset;
`;
export const ImgLoaderWrap = styled.div<{
	$isLoading: boolean;
}>`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: var(--border-color);
	display: flex;
	justify-content: center;
	align-items: center;

	${(props) => (props.$isLoading ? "display:flex" : "display:none")}
`;
export const ImgLoaderContent = styled.div`
	width: 30%;
	height: 30%;
	overflow: hidden;
	color: var(--text-color);

	@media screen and (max-width: 768px) {
		width: 30%;
	}
`;

export const ImgLoaderItem = styled.div`
	&,
	&:after {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}

	& {
		font-size: 10px;
		position: relative;
		text-indent: -9999em;
		border-top: 10px solid rgba(50, 90, 111, 0.2);
		border-right: 10px solid rgba(50, 90, 111, 0.2);
		border-bottom: 10px solid rgba(50, 90, 111, 0.2);
		border-left: 10px solid var(--text-color);
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-animation: load8 1.1s infinite linear;
		animation: load8 1.1s infinite linear;
	}

	@-webkit-keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;
