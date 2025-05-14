import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Collapse, OutlinedInput, Select, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { GlowA, GlowLink } from "../../home/GlowLink";
import { boolean } from "yup";

export const GoogleMapWrap = styled.div`
	height: calc(100vh - 60px);
	display: flex;
	background-color: #fefefd;
	flex-direction: row-reverse;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		height: calc(100vh - 75px);
		height: calc(100svh - 75px);
		position: relative;
	}
`;

export const HomeWrapper = styled.div`
	background-color: #fff; ;
`;

export const GoogleMapRight = styled.div<{ open?: boolean }>`
	width: calc(100% - 500px);
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
		//   height: ${(props) => (props.open ? "0" : "100%")};
		position: relative;
	}
`;

export const ListPartnerInnerWrap = styled.div`
	width: 450px;
		font-family: SF-Pro-Display;

	@media screen and (max-width: 768px) {
		width: 300px;
	}
`;

export const PartnerInnerTop = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	padding-right: 12px;
`;

export const PartnerInnerTopTitle = styled.div`
	width: 100%;
	margin-bottom: 8px;
	display:flex;
`;
export const PartnerInnerTopStore = styled.div`
	margin-bottom: 8px;
	display: flex;
	align-items: center;
`;
export const PartnerInnerTopStoreImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;
export const PartnerInnerTopStoreName = styled.div`
	color: #6b7280;
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	color: #6b7280;
`;
export const PartnerInnerTopInfo = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	justify-content: space-between;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
	}
`;
export const PartnerInnerTopName = styled.div`
	color: var(--alias-color-text-icon-black, #080d08);
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	margin-right:8px;
`;
export const PartnerInnerTopNameInner = styled.div`
	display:inline;
`;
export const ListPartnerBottomWrap = styled.div`
	padding: 0px 16px 16px 16px;

	overflow-y: auto;
	background-color: #fff;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-width: 768px) {
		max-height: calc(100vh - 120px);
		max-height: calc(100svh - 120px);
	}
`;

export const PartnerInnerTopInfoWorkTime = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
`;
export const PartnerInnerTopInfoAddress = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
	}
`;

export const PartnerInnerTopInfoAddressv2 = styled(PartnerInnerTopInfoAddress)`
	display: flex;
	align-items: flex-start;
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
	}
`;
export const PartnerInnerTopInfoWorkTimeImg = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 6px;
`;

export const PartnerInnerTopInfoWorkTimeImgv2 = styled.img`
	width: 12px;
	height: 12px;
	margin-right: 2px;
`;
export const PartnerInnerTopInfoWorkTimeContent = styled.div`
	display: flex;
	align-items: center;
	color: var(--alias-color-text-icon-black, #080d08);
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 16px;
	@media screen and (max-width: 768px) {
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
	}
`;
export const PartnerInnerTopInfoWorkTimeContentv2 = styled(PartnerInnerTopInfoWorkTimeContent)`
	@media screen and (max-width: 768px) {
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
	}
`;
export const PartnerInnerBottomInner = styled.div`
	display: flex;
	height: 48px;
	padding: 14px 6px 14px 12px;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-radius: 6px;
	background: #f3f4f6;
`;
export const PartnerInnerBottomInnerPrice = styled.div`
	color: #035d9d;
	font-size: 18px;
	line-height: 28px;
	font-weight: 400;
	display: flex;
`;
export const PartnerInnerBottomInnerPriceS = styled.div`
	font-weight: 600;
	margin-right: 4px;
`;
export const PartnerInnerBottomInnerButton = styled.button`
	display: flex;
	padding: 8px 16px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background: #035d9d;
	color: #fff;
	border: none;
`;

export const SearchMapPageOpenMobi = styled.div`
	position: absolute;
	height: 44px;
	bottom: 20px;
	// right: calc(50% - 43px);
	z-index: 99;
	width: Hug (86px) px;
	height: Hug (44px) px;
	padding: 12px 16px 12px 16px;
	border-radius: 8px;
	opacity: 0px;
	background-color: #5b7a4f;
	// box-shadow: 0px 4px 20px 0px #5B7A4F;
	color: #fff;
	display: flex;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
	right: 50%;
	transform: translateX(50%);
`;
export const SearchMapPageOpenMobiImg = styled.img`
	margin-right: 8px;
	width: 20px;
	height: 20px;
`;
export const SearchGoogleMapWrap = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		position: absolute;
		bottom: 20px;
		display: block;
		right: calc(50% - 43px);
	}
`;
export const SearchMapPageOpenMobiWrap = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		height: 1px;
		position: relative;
		display: block;
	}
`;
export const SearchMapPageOpenWebWrap = styled.div`
	display: block;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const SearchMapPageOpenListPartner = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		height: 100%;
		position: absolute;
		bottom: 20px;
		display: block;
	}
`;

export const ListPartnerInnerWrapCollapse = styled(Collapse)`
 @media screen and (min-width: 768px) {
    & > .MuiCollapse-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    & > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

  }

    flex-grow: 1;
	@media screen and (min-width: 768px) {
		&.MuiCollapse-hidden {
			// visibility: visible;
			// min-height: auto;
			//         height: max-content;
			visibility: visible;
			min-height: auto;
			height: auto;
			// max-height: calc(100% - 120px);

		}
	}
`;

export const StripeButtonWrap = styled.div`
	display: flex;
	justify-content: center;
	height: 50px;
	align-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
	}
`;

export const PaymentFormWrap = styled.div`
	min-height: 500px;
`;

export const PartnerInnerBottom = styled.div`
	display: flex;
	padding: 8px;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;

export const ListPartnerWrap = styled.div<{in?: boolean}>`
	width: 500px;
	// overflow-y: auto;
	// scrollbar-width: none;
	// -ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
	display: flex;
    flex-direction: column;
	padding: 12px 0 0 0px;
	@media screen and (max-width: 768px) {
		padding: 0;
		background-color: #fff;
		box-shadow: 0px 2px 5.6px 0px rgba(8, 13, 8, 0.08);
		padding: 0;
		width: 100%;
		position: absolute;
		height:auto;
		max-height: ${(props) => (props.in ? "100%" : "auto")};
		min-height: ${(props) => (props.in ? "100%" : "auto")};

	}
`;
export const PartnerInnerWrap = styled.div<{ isSelected: boolean }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0px 4px 15.3px 0px rgba(17, 24, 39, 0.16);
	margin-top: 16px;
	border: ${(props) => (props.isSelected ? "2px solid #5B7A4F" : "none")};
	cursor: pointer;
`;

export const ListPartnerInnerImgWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const ImgSpaWrap = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 12px;
	position: relative;
`;
export const ImgSpa = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 12px;
`;

export const SeenDetailButton = styled(GlowA)`
	display: flex;
	padding: 4px 10px;
	height: 30px;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	background: #5b7a4f;
	text-decoration: none;
	color: #fff;
`;

export const SeenDetailButtonWrap = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
		width: 100%;
		justify-content: flex-end;
	}
`;

export const ListPartnerBack = styled.div`
	padding: 12px;
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-between;
	width: 100%;
	height: 100%;
`;

export const ListPartnerTitleWrap = styled.div`
	padding-left: 16px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const ListPartnerBcWrap = styled.div`
	padding-left: 16px;
	display:none;
	@media screen and (max-width: 768px) {
	padding-left: 0px;
	display:block;
	height:20px;
	}
`;
export const ListPartnerBcWrapv2 = styled.div`
	padding-left: 16px;
	@media screen and (max-width: 768px) {
display:none;
	}
`;
export const FillterNull = styled.div`
	display: none;
`;

export const FillterWeb = styled.div`
	display: block;
	@media screen and (max-width: 768px) {
display:none;
	}
`;

export const FillterRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
display: block;
	}
`;

export const FillterResOpen = styled(FillterRes)`
	@media screen and (max-width: 768px) {
overflow: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
	}
`;


export const FilterMapWrap = styled.div`
	display: flex;
	padding-left: 12px;
	padding-bottom: 12px;
	width: max-content;
	overflow-x: auto;
	padding-top: 4px;
	    overflow: visible;
`;


export const FillterMobileMap = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		left: 0;
		top: 8px;
		width: 100%;
        overflow: visible;
		scrollbar-width: none;
		-ms-overflow-style: none;
		    overflow: unset;

		    overflow-y: visible;
    overflow-x: auto;
	}
`;

export const PartnerInnerTopInfoImgWrap = styled.div`
	margin: 0 8px;
`;

export const NameTagMapPage = styled.a`
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #7A33D3;
    margin-right: 8px;
	    text-decoration: none;
	@media screen and (max-width: 768px) {
		// margin-bottom: 12px;
	}
`;

export const PartnerInnerTopInfoTags = styled(PartnerInnerTopInfoAddress)`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	    flex-wrap: wrap;
		    text-decoration: none;
	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
	}
`;

export const PartnerInnerTopOpen = styled.div<{open?: boolean}>`
border-radius: 5px;
padding-top: 2px;
padding-right: 6px;
padding-bottom: 2px;
padding-left: 6px;
background-color: ${(props) => (props.open ? "#5B7A4F" : "#DB281F")};
color:#fff;
height: 20px;
    width: fit-content;
    align-items: center;
    display: inline-flex;
    margin-left: 8px;

`;

export const FilterMapSelectWrap = styled.div`
	margin: 0 8px;
`;

export const SelectSearchBoxFilterMap = styled.select`
	padding: 4px 12px;
    border-radius: 100px;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(8, 13, 8, 0.08) 0px 2px 5.6px 0px;
    margin-right: 8px;
    margin-bottom: 12px;
	height: 28px;
	font-family: SF-Pro-Display;

	  option {
	  margin-top:12px;
    background: white;
    color: black;
    padding: 8px 12px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 8px;
	color: var(--text-color0);
  }
`;

export const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
	borderRadius: '100px !important',
	boxShadow: 'rgba(8, 13, 8, 0.08) 0px 2px 5.6px 0px',
	border: '1px solid rgb(255, 255, 255)',
	height: '28px',
	fontSize: '14px',
	backgroundColor: 'white',
	'.MuiOutlinedInput-notchedOutline': {
		borderColor: 'white',
		fontFamily: 'SF-Pro-Display',
		fontSize: '14px',
	},
	'&:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: '#999',
	},
	'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: '#666',
	},
	'.MuiInputBase-input': {
		fontFamily: 'SF-Pro-Display',
		fontSize: '14px',
		padding: '0 14px',
		height: '28px',
		display: 'flex',
		alignItems: 'center',
	},
}));
