import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { InputText } from "../../../controls/components/form/FormInput";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core";
import { BtnButton } from "../../../controls/components/form/FormButton";

export const useProductDetailDialogStyles = makeStyles({
	paper: {
		minWidth: "1100px",
		display: "block",
		borderRadius: "16px",
		"@media (max-width: 768px)": {
			margin: "0px",
			// height: "100%",
			minWidth: "unset",
			width: "100%",
			maxWidth: "unset",
			borderRadius: "0px",
		},
		"@media (max-height: 710px)": {
			height: "100%",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0px",
		"@media (max-width: 768px)": {
			height: "calc(100% - 57px)",
		},
	},
	footer: {
		padding: "0px",
	},
});

export const ProductDetailDialogHeadingStyle = css`
	@media screen and (max-width: 768px) {
		padding: 16px;
	}
`;

export const ProductDetailDialogTitleStyle = css`
	@media screen and (max-width: 768px) {
		font-size: 20px;
	}
`;

export const ProductDetailDialogCloseStyle = css`
	@media screen and (max-width: 768px) {
		top: 16px;
		right: 16px;
	}
`;

export const ProductDetailDialogBodyStyle = css`
	@media screen and (max-width: 768px) {
		padding: 0px 16px;
		height: 100%;
	}
`;

export const ProductDetailContentHolder = styled.div`
	padding-bottom: 32px;

	& img {
		width: 100%;
		opacity: 0.5;
	}

	& img.norm {
		display: block;
	}

	& img.resp {
		display: none;
	}

	@media screen and (max-width: 768px) {
		& img.norm {
			display: none;
		}

		& img.resp {
			display: block;
		}
	}
`;

export const ProductDetailContentWrap = styled.div`
	padding-bottom: 32px;

	@media screen and (max-width: 768px) {
		padding-bottom: 0px;
	}

	@media screen and (max-height: 710px) {
		// height: 100%;
	}
`;

export const ProductDetailContentInner = styled.div`
	@media screen and (max-height: 710px) {
		height: 100%;
	}
`;

export const ProductDetailContentLeft = styled.div`
	float: left;
	width: 550px;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 5px;
	}

	@media screen and (max-height: 710px) {
		height: 280px;
	}
`;

export const ProductDetailContentLeftImage = styled.div`
	height: 550px;

	@media screen and (max-width: 768px) {
		height: 100%;
	}

	@media screen and (max-height: 710px) {
		height: 100%;
	}
`;

export const ProductDetailContentRight = styled.div`
	float: left;
	width: calc(100% - 550px);
	padding-left: 24px;

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 0px;
	}
`;

export const ProductDetailContentRightInner = styled.div``;

export const ProductDetailContentRightTitle = styled.div`
	font-size: 18px;
	line-height: 24px;
	margin-bottom: 24px;
	color: var(--text-color0);
	font-weight: 600;

	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 20px;
		margin-bottom: 4px;
		overflow: hidden;
	}
`;

export const ProductDetailContentRightItem = styled.div`
	margin-bottom: 12px;

	@media screen and (max-width: 768px) {
		margin-bottom: 8px;
		&.hidden-resp {
			display: none;
		}
	}
`;

export const ProductDetailContentRightItemLabel = styled.div`
	display: inline-block;
	width: 150px;
	color: var(--text-color2);
	font-size: 16px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		width: 160px;
	}
`;

export const ProductDetailContentRightItemValue = styled.div`
	display: inline-block;
	color: var(--text-color);
	font-size: 16px;
	font-weight: 600;

	&.color-green {
		color: var(--alert-color);
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
		width: calc(100% - 160px);
		text-align: left;
	}
`;

export const ProductDetailContentRightItemActions = styled.div`
	margin-top: 32px;
	margin-bottom: 24px;

	@media screen and (max-width: 768px) {
		margin-top: 12px;
		margin-bottom: 12px;
	}
`;

export const ProductDetailContentRightItemActionsBtn = styled.div`
	margin-bottom: 20px;

	& button,
	& a {
		display: inline-block;
		width: calc(50% - 4px);
		border-radius: 100px;
	}
	& button:first-child {
		width: calc(60% - 4px)
	}
	& button:nth-child(2) {
		width: calc(40% - 4px)
	}

	& button:first-child,
	& a:first-child {
		margin-right: 8px;
	}
	& button:nth-child(2),
	& a:nth-child(2) {
		background-color: #0087A5;
		border-color: #0087A5;
	}

	& button:nth-child(2):disabled,
	& a:nth-child(2):disabled {
		background-color: var(--primary-color-blur);
		border-color: var(--primary-color-blur);
	}

	& button:nth-child(1),
	& a:nth-child(1) {
		background-color: var(--primary-colorv2);
		border: var(--primary-colorv2));
	}

	& button:nth-child(1):disabled,
	& a:nth-child(1):disabled {
		background-color: var(--primary-color-blur);
		border-color: var(--primary-color-blur);
	}

	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
		& button,
		& a {
			padding: 9px 16px;
			font-size: 14px;
			font-weight: normal;
		}
		& button:nth-child(1),
		& a:nth-child(1) {
			background-color: var(--primary-colorv2);
			border-color: var(--primary-colorv2);
		}
		& button:nth-child(1):disabled,
	& a:nth-child(1):disabled {
		background-color: var(--primary-colorv2);
		border-color: var(--primary-colorv2);
	}
	& button:nth-child(2),
	& a:nth-child(2) {
		background-color: #0087A5;
		border-color: #0087A5;
	}
	& button:nth-child(2):disabled,
& a:nth-child(2):disabled {
	background-color: #0087A5;
	border-color: #0087A5;
}
	}
`;

export const ProductGuestDetailContentRightItemActions = styled.div`
	text-align: center;
	font-size: 16px;
	color: var(--text-color);

	& button {
		display: inline;
		color: var(--primary-color);
		background: transparent;
		border: none;
		font-size: inherit;
		font-weight: 600;
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const ProductDetailContentRightItemActionsLink = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const CopyLinkIcon = styled.div`
	cursor: pointer;
	position: absolute;
	top: 50%;
	font-size: 16px;
	right: 10px;
	color: var(--text-color3);
	transform: translateY(-53%);
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const CopyLinkDetailContent = styled.div`
	position: relative;
`;

export const ProductDetailContentRightItemActionsLinkText = styled.div`
	margin-bottom: 10px;
	text-align: center;
	color: var(--primary-color);

	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
	}
`;

export const ProductDetailContentRightItemActionsLinkTextbox = styled(InputText)`
	color: var(--text-color3);
	padding: 11px 20px 12px 20px;
	text-align: center;
	border-radius: 12px;
	position: relative;

	&:disabled {
		background-color: #fff;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const ProductMainImageBoxWrap = styled.div`
	@media screen and (max-height: 710px) {
		height: 100%;
	}
`;

export const ProductMainImageBoxInner = styled.div`
	position: relative;

	@media screen and (max-height: 710px) {
		height: 100%;

		& .react-swipeable-view-container {
			height: 100%;
		}
	}
`;

export const ProductMainImageBoxSwipeView = styled(SwipeableViews)`
	border-radius: 12px;
	@media screen and (max-height: 710px) {
		height: 100%;
		border-radius: 12px;
	}
`;

export const ProductMainImageBoxSwipeItem = styled.div`
	height: 550px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media screen and (max-width: 768px) {
		height: 320px;
	}

	@media screen and (max-height: 710px) {
		height: 100%;
	}
`;

export const ProductMainImageBoxSwipeIndicate = styled.div`
	position: absolute;
	bottom: 8px;
	right: 8px;
	color: var(--text-color2);
	border-radius: 4px;
	padding: 3px;
	line-height: 14px;
	background-color: #fff;
`;

export const ProductImagesBoxWrap = styled.div`
	margin-right: -12px;
	margin-bottom: 32px;

	@media screen and (max-width: 768px) {
		margin-right: -4px;
		margin-bottom: 4px;
	}
`;

export const ProductImagesBoxInner = styled.div`
	width: auto;
	margin-bottom: 32px;

	@media screen and (max-width: 768px) {
		margin-bottom: 8px;
	}
`;

export const ProductImagesBoxSwipe = styled(SwipeableViews)`
	padding-right: 80%;
`;

export const ProductImagesBoxSwipeItem = styled.div`
	margin-right: 12px;
	height: 80px;
	margin-bottom: 5px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 12px;
		border: 1px solid var(--border-color);
		cursor: pointer;
	}

	&.img-focused img {
		border: 1px solid var(--primary-color);
	}

	@media screen and (max-width: 768px) {
		height: 55px;
		margin-right: 4px;
		border-radius: 8px;

		& img {
			border-radius: 8px;
		}
	}
`;

export const ProductDetailToastWrap = styled.div`
	font-size: 13px;
	color: var(--text-color);
	line-height: 20px;
	font-family: SF-Pro-Display;
	padding-right: 6px;

	& b {
		font-weight: 600;
		color: var(--primary-color);
	}
`;
export const ProductDetailContentPercent = styled.div``;
export const ProductDetailContentCost = styled.div``;
export const ProductDetailContentPrice = styled.div``;
