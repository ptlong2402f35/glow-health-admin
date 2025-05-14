import { Link } from "react-router-dom";
import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { BtnButton } from "../../../controls/components/form/FormButton";
import SwipeableViews from "react-swipeable-views";
import { GlowLink } from "../GlowLink";
import { VoucherListBCWrap } from "../../ListVoucher/styled/StyledVoucher";

export const HomeWrapper = styled.div`
	min-height: 700px;
	background-color: #fff;
`;
export const HomeWrapperv2 = styled.div`
	// min-height: 700px;
	background-color: #f8f8f8;
`;
export const HomeWrapperMap = styled(HomeWrapperv2)`
@media screen and (max-width: 768px) {
margin-top: -60px;
	}
	    
`;
export const HomeWrapperv3 = styled.div`
	// min-height: 700px;
	background-color: #f8f8f8;
`;

const panelWrapStyle = css`
	display: flex;
	justify-content: center;
	background-color: #fff;
`;

export const HomeSearchPanelWrap = styled.div`
	${panelWrapStyle}
	position: relative;
	flex-direction: column;
	padding-top: 54px;
	background-color: #fff;
	background-image: linear-gradient(88.05deg, #74b541 0%, #acd38d 100%);
	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-image: url(./static/img/search_decoration.png);
		background-repeat: no-repeat;
	}
	@media screen and (max-width: 768px) {
		background-image: linear-gradient(91.76deg, #74b541 2.97%, #acd38d 143.49%);
		&::before {
			content: "";
			display: none;
		}
	}
`;

export const ProductSuggestion = styled(Link)`
	text-align: center;
	text-decoration: none;

	font-size: 20px;
	color: var(--text-color0);
	font-weight: 700;
	cursor: pointer;
	&:hover {
		color: var(--primary-color);
	}
	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const ProductSuggestionWrap = styled.div`
	text-align: center;
	margin: 28px;
	@media screen and (max-width: 768px) {
		margin: 20px;
	}
`;

export const HomeSearchPanelTop = styled.div`
	${panelWrapStyle}
`;

export const HomeSearchPanelBot = styled.div`
	${panelWrapStyle}
`;

const panelCenterStyle = css`
	width: 100%;
	@media screen and (max-width: 1282px) {
		width: 100%;
		padding: 0px 16px;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0px;
	}
`;

export const HomeSearchPanelCenter = styled.div`
	${panelCenterStyle}
`;

export const HomeSearchPanelInner = styled.div``;

export const HomeSearchPanelLabel = styled.div`
	margin-bottom: 32px;
	font-size: 32px;
	line-height: 42px;
	font-weight: 700;
	color: #fff;
	text-align: center;
	margin-top: 20px;
	padding: 0 8px;
	& i {
		color: var(--primary-color);
		margin-left: 8px;
	}

	@media screen and (max-width: 768px) {
		font-size: 20px;
		margin-bottom: 20px;
		font-weight: 700;
	}
`;

export const HomeSearchPanelInput = styled.div`
	@media screen and (max-width: 768px) {
	}
`;
//HomeIntroSlide
export const HomeIntroPanelTitle2 = styled.div`
	margin-left: auto;
	margin-right: auto;
	font-style: normal;
	padding-top: 40px;
	max-width: 600px;
	font-weight: 654;
	font-size: 40px;
	line-height: 64px;
	color: #183235;
`;

export const HomeIntroPanelTitle = styled.div`
	normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%
	color: #6a2f66
	text-transform: capitalize;
@media screen and (max-width: 768px) {
	font-size: 20px;
	line-height: 28px;
	margin: 0px 0 20px;
	padding: 0 8px;
}
`;
export const HomeIntroSlidePanelWrap = styled.div`
	margin-top: 86px;

	@media screen and (max-width: 768px) {
		margin-top: 40px;
		margin-bottom: 22px;
	}
`;
export const HomeIntroSlidePanelCenter = styled.div`
	padding: 0 48px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		padding: 0 20px;
	}
`;
export const HomeIntroSlidePanelInner = styled(SwipeableViews)`
	background: #ffffff;
	box-shadow: 0px 7px 32px rgba(120, 120, 120, 0.15);
	border-radius: 26px;
	display: flex;
	overflow: hidden;
	height: 418px;
	width: 1180px;
	margin-bottom: 32px;

	& > div > div {
		overflow: hidden !important;
	}
	& > div.react-swipeable-view-container {
		width: 100%;
	}

	@media screen and (max-width: 1250px) {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		height: 455px;
		width: 100%;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;

export const HomeIntroSlideItem = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const HomeIntroSlidePanelLeftMain = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
`;
export const HomeSlidePanelLeftBgWrap = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;
export const HomeSlidePanelLeftBg = styled.img`
	width: 100%;
	height: 100%;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const HomeSlidePanelLeftBgRes = styled.img`
	width: 100%;
	height: 100%;
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;
export const HomeIntroSlidePanelLeftWrap = styled.div`
	padding-left: 100px;
	@media screen and (max-width: 768px) {
		padding-left: 0;
		padding-top: 48px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;
export const HomeIntroSlidePanelLeftHeader = styled.div`
	font-weight: 700;
	font-size: 36px;
	line-height: 52px;
	color: var(--primary-colorv2);
	text-transform: uppercase;
	@media screen and (max-width: 768px) {
		text-align: center;
		font-size: 32px;
		line-height: 42px;
		padding: 0 16px;
	}
`;
export const HomeIntroSlidePanelHeaderContent = styled.div`
	font-weight: 700;
	font-size: 20px;
	line-height: 28px;
	color: var(--text-color2v2);
	margin-top: 12px;
	@media screen and (max-width: 768px) {
		text-align: center;
		font-size: 16px;
		line-height: 22px;
	}
`;
//HomeSlideItem
export const HomeIntroSlidePanelImgWrapResSlide1 = styled.div`
	height: 100%;
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
	transform: translateX(32px);
`;
export const HomeIntroSlidePanelLeftWrapSlide2 = styled(HomeIntroSlidePanelLeftWrap)`
	padding-left: 46px;
	height: 324px;
	padding-top: 20px;

	@media screen and (max-width: 768px) {
		height: unset;
		padding-left: 0;
		padding-bottom: 30px;
	}
`;

export const HomeIntroSlidePanelLeftHeaderSlide2 = styled(HomeIntroSlidePanelLeftHeader)`
	color: var(--text-color);
	font-weight: 700;
	& > span {
		color: #fff;
	}
`;
export const HomeIntroSlidePanelHeaderContentSlide2 = styled(HomeIntroSlidePanelHeaderContent)`
	color: var(--text-color);
	text-transform: uppercase;
`;
export const HomeIntroPanelSlide2WrapLogo = styled.div`
	padding-bottom: 24px;

	@media screen and (max-width: 768px) {
		padding-bottom: 12px;
	}
`;
export const HomeIntroPanelSlide2LogoImgWrap = styled.div`
	display: flex;
	gap: 6px;
`;
export const HomeIntroPanelSlide2LogoImg = styled.div`
	border-radius: 50%;
	width: 12px;
	height: 12px;
	background-color: var(--text-color);
`;
export const HomeIntroPanelSlide2LogoText = styled.div`
	color: var(--text-color);
	font-size: 16px;
`;
export const HomeIntroSlidePanelRightMain = styled.div`
	flex: 1.3;
	background: transparent;
	position: relative;
`;
export const HomeIntroSlidePanelBg = styled.img`
	position: absolute;
	right: 0;
	top: 0;
	@media screen and (max-width: 768px) {
		width: 100%;
		right: -50px;
		top: unset;
		bottom: 0;
	}
`;
export const HomeIntroSlidePanelImgWrap = styled.div`
	height: 100%;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const HomeIntroSlidePanelImgWrapRes = styled.div`
	height: 100%;
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;
export const HomeIntroSlidePanelImg = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	@media screen and (max-width: 768px) {
		width: unset;
	}
`;

export const HomeIntroSlideItemWrap = styled.div`
	display: flex;
	width: 100%;
	gap: 12px;
`;
export const HomeIntroSlideItemContain = styled.div`
	height: 100%;
	width: 33%;
`;

export const HomeIntroSlidePanelImgPath = styled.img`
	width: 100%;
	height: 100%;
`;
export const HomeIntroSlidePanelImgPath1 = styled.img`
	position: absolute;
	right: 67.91%;
	top: 14.35%;
	@media screen and (max-width: 768px) {
		bottom: 57.2%;
		top: unset;
	}
`;
export const HomeIntroSlidePanelImgPath2 = styled.img`
	position: absolute;
	right: 76.28%;
	top: 42.82%;
	@media screen and (max-width: 768px) {
		bottom: 40.27%;
		top: unset;
	}
`;
export const HomeIntroSlidePanelImgPath3 = styled.img`
	position: absolute;
	right: 6.08%;
	top: 55.14%;
	@media screen and (max-width: 768px) {
		bottom: 27.24%;
		top: unset;
	}
`;
export const HomeIntroSlidePanelNavWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const HomeIntroSlidePanelNavInner = styled.div<{
	$xStyleDistanceEx?: FlattenSimpleInterpolation;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
	z-index: 2;

	@media screen and (max-width: 768px) {
		margin: 28px 0 26px;
	}
	${(props) => props.$xStyleDistanceEx}
`;
export const HomeIntroSlidePanelNavIconLeft = styled.div<{
	$xStyleIcon?: FlattenSimpleInterpolation;
}>`
	cursor: pointer;
	margin-right: 36px;
	color: #b6b6b6;
	z-index: 2;

	${(props) => props.$xStyleIcon && props.$xStyleIcon}
`;

export const $xStyleWhiteIcon = css`
	color: #fff;
`;
export const $xStyleWhiteIconDot = css`
	background-color: #fff;
`;
export const $xStyleActive = css`
	background-color: #ff951a;
`;
export const HomeIntroSlidePanelNavIconRight = styled.div<{
	$xStyleIcon?: FlattenSimpleInterpolation;
}>`
	cursor: pointer;
	margin-left: 36px;
	color: #b6b6b6;
	z-index: 2;

	${(props) => props.$xStyleIcon && props.$xStyleIcon}
`;
export const HomeIntroSlidePanelNavItem = styled.div<{
	isActive?: boolean;
	$xStyleIcon?: FlattenSimpleInterpolation;
	$xStyleActive?: FlattenSimpleInterpolation;
}>`
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background-color: #b6b6b6;
	margin: 0 3px;
	cursor: pointer;
	transition: 0.2s;
	z-index: 2;

	${(props) => props.$xStyleIcon && props.$xStyleIcon}

	${(props) =>
		props.isActive &&
		css`
			background-color: var(--primary-colorv2);
		`}
	${(props) => props.isActive && props.$xStyleActive && props.$xStyleActive}
`;

export const HomeIntroPanelWrap = styled.div`
	${panelWrapStyle}
	padding-top:52px;
	@media screen and (max-width: 768px) {
		padding-top: 8px;
		padding-bottom: 70px;
	}
`;

export const HomeIntroPanelCenter = styled.div`
	justify-content: center;
	dipsplay: flex;
	text-align: center;
	width: 1180px;
	@media screen and (max-width: 1082px) {
		width: 100%;
		padding: 0px 16px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const HomeIntroPanelInner = styled.div`
	margin-right: auto;
	margin-left: auto;
	max-width: 600px;
	@media screen and (max-width: 768px) {
		margin-top: 0;
		position: relative;
	}
`;
export const HomeIntroPanelInnerv2 = styled.div`
	text-align: center;
	width: 100%;
	& img {
		border-radius: 12px;
		width: 10%;
	}
	@media screen and (max-width: 768px) {
		margin-top: 0;
		position: relative;
		& img {
			width: 30%;
		}
	}
`;

export const HomeIntroPanelRight = styled.div`
	margin-top: 100px;
	width: calc(100% - 600px);
	height: 100%;
	float: Right;
	padding-right: 32px;

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0px;
		margin-top: 0;
	}
`;

export const HomeIntroPanelRightInner = styled.div`
	padding-top: 16px;

	@media screen and (max-width: 768px) {
		padding-top: 0px;
	}
`;

export const HomeIntroPanelRightText1 = styled.div`
	font-size: 32px;
	line-height: 42px;
	font-weight: 700;
	color: var(--primary-colorv2);
	margin-bottom: 20px;

	@media screen and (max-width: 768px) {
		font-size: 24px;
		line-height: 28px;
		margin-bottom: 16px;
		text-align: left;
	}
`;

export const HomeIntroPanelRightText2 = styled.div`
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	color: var(--text-color2v2);
	margin-bottom: 38px;

	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 20px;
		margin-bottom: 16px;
		text-align: left;
		font-weight: 600;
	}
`;

export const HomeIntroPanelRightText3 = styled.div`
	font-size: 20px;
	line-height: 24px;
	font-weight: 600;
	color: var(--text-color);
	margin-bottom: 32px;

	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 20px;
		margin-bottom: 18px;
		text-align: center;
		font-weight: 600;
	}
`;

export const HomeIntroPanelRightActionsWrap = styled.div`
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const HomeIntroPanelRightActions = styled.div`
	max-width: 375px;
	& a {
		display: inline-block;
		width: calc(50% - 4px);
	}

	& a:first-child {
		margin-right: 8px;
	}

	& img {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		display: inline-block;
	}
`;

export const HomeIntroPanelLeft = styled.div`
	width: 600px;
	float: left;

	@media screen and (max-width: 768px) {
		padding: 0 20px;
		width: 100%;
	}
`;

export const HomeIntroPanelAction = styled.div`
	max-width: 375px;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 30px;
	& a {
		display: inline-block;
		width: calc(50% - 4px);
	}

	& a:first-child {
		margin-right: 8px;
	}

	& img {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		display: inline-block;
	}
`;

export const HomeIntroPanelLeftInner = styled.div`
	& img {
		border-radius: 40px;
		width: calc(50% - 40px);
		height: 45%;
		margin-left: 30px;
		max-width: none;
	}

	@media screen and (max-width: 768px) {
		& img {
			width: calc(50vw - 60px);
			margin: 0 10px;
		}
		margin-left: 0;
	}
`;

export const HomeMaterialsPanelWrap = styled.div`
	${panelWrapStyle}
	background: rgba(133, 181, 105, 0.04);
	padding-bottom: 24px;
	padding-top: 32px;

	@media screen and (max-width: 768px) {
		padding: 12px 0px 16px 0px;
	}
`;

export const HomeMaterialsPanelCenter = styled.div`
	${panelCenterStyle}

	@media screen and (max-width: 768px) {
		overflow-x: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			display: none;
		}
	}
`;

export const HomeMaterialsPanelInner = styled.div`
	text-align: right;

	@media screen and (max-width: 768px) {
		width: max-content;
		padding-left: 16px;
		padding-right: 16px;
	}
`;

export const HomeMaterialsPanelLabel = styled.div`
	display: inline-block;
	margin-right: 16px;
	color: var(--link-color);
	font-size: 16px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		margin-right: 4px;
	}
`;

export const HomeMaterialsPanelBody = styled.div`
	display: inline-block;
`;

export const HomeMaterialsPanelBodyInner = styled.div``;

export const HomeMaterialsPanelItem = styled(Link)`
	display: inline-block;
	border: 1px solid var(--border-color);
	border-radius: 8px;
	padding: 6px 12px 6px 12px;
	font-size: 14px;
	color: var(--text-color);
	text-decoration: none;
	margin-left: 12px;
	font-weight: 600;
	background-color: rgb(226, 246, 247);
	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 3px #d0d0d0;
	}

	@media screen and (max-width: 768px) {
		padding: 4px 8px;
		font-weight: normal;
		margin-left: 8px;
	}
`;

export const HomeProductsPanelWrap = styled.div`
	${panelWrapStyle}
	background: rgba(133, 181, 105, 0.04);
	padding-bottom: 32px;

	@media screen and (max-width: 768px) {
		padding-left: 0px;
		padding-right: 0px;
		padding-bottom: 16px;
	}
`;

export const HomeProductsPanelCenter = styled.div`
	${panelCenterStyle}
`;

export const HomeProductsPanelInner = styled.div``;

export const HomeProductsPanelTitle = styled.div`
	font-size: 20px;
	font-weight: 600;
	color: var(--text-color0);
	margin-bottom: 24px;

	@media screen and (max-width: 768px) {
		font-size: 16px;
		margin-bottom: 16px;
		padding-left: 16px;
	}
`;

export const HomeProductsPanelList = styled.div``;

export const HomeProductsPanelListBox = styled.div<{ $loading?: boolean }>`
	margin-right: -20px;
	margin-bottom: 8px;
	display: block;
	${(props) =>
		props.$loading &&
		css`
			min-height: 350px;
		`}

	@media screen and (max-width: 768px) {
		display: none;
		margin-bottom: 4px;
		margin-right: -12px;
	}
`;

export const HomeProductsPanelListBoxHorizontalScroll = styled.div`
	margin-bottom: 12px;
	@media screen and (max-width: 768px) {
		margin-bottom: 4px;
	}
`;

export const HomeProductsPanelListBoxInner = styled.div`
	width: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	&.box-single {
		text-align: center;
		padding-right: 12px;
	}
`;

export const HomeProductsPanelListBoxItemHolderImg = styled.img<{
	responsiveCount?: number;
}>`
	margin-right: 20px;
	margin-bottom: 20px;
	float: left;
	width: calc(25% - 20px);
	border-radius: 8px;
	box-shadow: 0px 0px 3px #d0d0d0;
	overflow: hidden;
	opacity: 0.7;

	@media screen and (max-width: 768px) {
		${(props) =>
			props.responsiveCount &&
			css`
				&:nth-child(n + ${props.responsiveCount + 1}) {
					display: none;
				}
			`}

		@media screen and (max-width: 768px) {
			width: calc(50% - 12px);
			margin-right: 12px;
			margin-bottom: 12px;
		}
	}
`;

export const HomeProductsPanelListBoxItemHolderImgHorizontal = styled.img<{
	responsiveCount?: number;
}>`
	margin-right: 20px;
	margin-bottom: 8px;
	float: left;
	width: 232px;
	border-radius: 8px;
	box-shadow: 0px 0px 3px #d0d0d0;
	overflow: hidden;
	opacity: 0.7;

	&:first-child {
		margin-left: 2px;
	}

	&:last-child {
		margin-right: 2px;
	}

	@media screen and (max-width: 768px) {
		${(props) =>
			props.responsiveCount &&
			css`
				&:nth-child(n + ${props.responsiveCount + 1}) {
					display: none;
				}
			`}

		& {
			width: 150px;
			margin-right: 12px;
			margin-bottom: 12px;

			&:first-child {
				margin-left: 16px;
			}
		}
	}
`;

export const HomeProductsPanelListMore = styled.div`
	text-align: center;
`;

export const HomeProductsPanelListMoreBtn = styled(BtnButton)`
	width: 175px;

	& .MuiCircularProgress-root {
		margin-left: 12px;
		vertical-align: -1px;
	}

	@media screen and (max-width: 768px) {
		padding: 8px 24px;
		font-weight: normal;
		font-size: 14px;
	}
`;

export const HomeProductsPanelHorizontalScrollWrapStyle = css``;

export const HomeProductsPanelHorizontalScrollActionPrevStyle = css`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const HomeProductsPanelHorizontalScrollActionNextStyle = css`
	@media screen and (max-width: 768px) {
		display: none;
		right: 10px;

		&.is-end {
			display: flex;
		}
	}
`;

export const HomeProductsPanelHorizontalScrollActionNextBtnStyle = css`
	@media screen and (max-width: 768px) {
		width: 32px;
		height: 32px;
		line-height: 30px;
		background-color: var(--primary-color);
		border-color: var(--primary-color);
		color: #fff;

		& span,
		& i {
			line-height: 30px;
		}
	}
`;

export const HomeProductsPanelListBoxHolderHorizontal = styled.div`
	width: 100%;
	overflow-x: hidden;
`;

export const HomeProductsPanelListBoxHolderInnerHorizontal = styled.div`
	width: max-content;
`;

export const TextTaobao = styled.span`
	color: #fe7500;
`;
export const Text1688 = styled.span`
	color: #ff4700;
`;
export const Pindoudou = styled.span`
	color: #e02e24;
`;
export const Textpercent = styled.span`
	color: #e02e24;
	font-size: 28px;
	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;
export const HomeWeb = styled.div`
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
export const HomeWebBottom = styled.div`
	margin-bottom: 40px;
	@media screen and (max-width: 1000px) {
		margin-bottom: 0px;
	}
`;

export const HomeRes = styled.div`
	display: none;
	@media screen and (max-width: 1000px) {
		display: block;
	}
`;

export const HomeInstructNew = styled.div<{ login?: boolean }>`
	background-color: rgb(91, 122, 79);
	background-image: url(./static/img/BGBN.jpg);
	margin-top: 40px;
	border-radius: 16px;
	width: 1240px;
	height: 600px;
	margin-bottom: 20px;
	@media screen and (max-width: 1000px) {
		margin-top: ${({ login }) => (login ? "0" : "40px")};
		border-radius: ${({ login }) => (login ? "0" : "16px")};
	}
`;

export const HomeInstructNewAtHome = styled.div<{ login?: boolean }>`
	background-color: rgb(91, 122, 79);
	background-image: url(./static/img/Background_At_Home.jpg);
	margin-top: 40px;
	border-radius: 16px;
	width: 1240px;
	background-size: cover;

	@media screen and (max-width: 1000px) {
		margin-top: ${({ login }) => (login ? "0" : "40px")};
		border-radius: ${({ login }) => (login ? "0" : "16px")};
	}
`;

export const ServiceGroupAllPageWrap = styled.div`
	margin: auto;
	max-width: 1240px;
	display: flex;
	justify-content: space-between;
	// padding-top: 40px;
	overflow-x: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-width: 1000px) {
		// padding-top: 20px;
	}
`;
export const ServiceGroupAllPageToWrap = styled.div`
	margin: auto;
	max-width: 1240px;
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	// padding-top: 50px;
	position: relative;
	// margin-top: 40px;
	padding-top: 20px;
	padding-bottom: 20px;

	@media screen and (max-width: 1000px) {
		margin-top: 12px;
		padding-bottom: 0px;
		padding-top: 0px;
	}
`;
export const ServiceGroupAllPageImg = styled.img`
	width: 60px;
	@media screen and (max-width: 1000px) {
		width: 55px;
	}
`;

export const ServiceGroupAllPageName = styled.div`
	width: 76px;
	text-align: center;
`;
export const ServiceGroupAllPageInner = styled(GlowLink)`
	text-align: center;
	text-decoration: none;
	color: var(--text-color0);
	margin: 0 6px;
	@media screen and (max-width: 1000px) {
		margin: 0 3px;
	}
`;

export const BannerHomePageWrap = styled.div`
	margin: auto;
	max-width: 1240px;
	// display: flex;
	justify-content: space-between;
	// padding-top: 20px;
	overflow-x: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-width: 1000px) {
		// padding-top: 20px;
	}
`;
export const BannerHomePageWrapv3 = styled(BannerHomePageWrap)`
	@media screen and (max-width: 1000px) {
		padding: 10px 0;
	}
`;
export const BannerHomePageWrapv2 = styled.div`
	margin: auto;
	max-width: 1240px;
	display: flex;
	justify-content: space-between;
	// padding: 20px 0px 0px;
	overflow-x: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-width: 768px) {
		padding: 12px 0;
	}
`;

export const BannerHomePageImg = styled.img`
	width: 100%;
	// border-radius:20px;
	// height:200px;
	// object-fit: cover;
`;
export const BannerHomePageImgContainer = styled.div`
	width: 100%;
	margin-bottom: 20px;
	cursor: pointer;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
		margin-top: 20px;
	}
`;

export const BannerHomePageImgv2 = styled.img`
	width: 100%;
	border-radius: 20px;
	// height:200px;
	// object-fit: cover;
	@media screen and (max-width: 768px) {
		border-radius: 0px;
	}
`;

export const BannerHomePageImgWrap = styled(GlowLink)`
	width: 100%;
	display: flex;
`;
export const BannerHomePageImgWrapv2 = styled.div`
	margin-right: 12px;
	margin-top: 20px;
	@media screen and (max-width: 768px) {
		margin-right: 0px;
	}
`;

export const BannerHomePageImgWrapv2Disable = styled.div`
	margin-right: 12px;
	width: 403px;
	overflow-x: visible !important;
	@media screen and (max-width: 768px) {
		margin-right: 0px;
	}
`;

export const DealHotHomePageWrap = styled.div`
	background: linear-gradient(180deg, rgba(255, 78, 39, 0.29) 0%, rgba(255, 85, 12, 0.18) 100%);
`;
export const DealHotHomePageWrapNewHome = styled.div`
	background: linear-gradient(180deg, rgba(255, 78, 39, 0.29) 0%, rgba(255, 85, 12, 0.18) 100%);
	@media screen and (max-width: 768px) {
		margin-top: 20px;
	}
`;
export const DealHotHomePageOrtheWrap = styled.div`
	// background: #fff;
`;

export const FooterSpacingWrap = styled.div`
	height: 20px;
`;
export const FooterSpacingWrapv2 = styled.div`
	@media screen and (max-width: 768px) {
		height: 20px;
	}
`;
export const DealHotHomePageOrtheWrapv2 = styled.div`
	// background: #fff;
	@media screen and (max-width: 768px) {
		margin-left: 12px;
	}
`;
export const BannerImgContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const BannerImageWrapper = styled.div`
	width: 33%;
`;

export const DealHotHomePageInner = styled.div`
	overflow-x: hidden;
	display: flex;
`;

export const DealHotHomePageInnerSSR = styled.div`
	overflow-x: scroll;
    display: block;
		scrollbar-width: none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			display: none;
		
`;
export const DealHotHomePageInnerDetailSSR = styled.div`
	overflow-x: scroll;
     display: flex;
		scrollbar-width: none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			display: none;
		
`;

export const DealHotHomePageItemWrap = styled.div`
	border: 1px solid #e1e1e1;
	border-radius: 20px;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;

	margin-left: 12px;
	margin-right: 12px;
	background-color: rgb(243, 243, 243);
	@media screen and (max-width: 768px) {
		margin-left: 12px;
		margin-right: 0px;
	}
`;
export const DealHotHomePageItemSSRWrap = styled.div`
	border: 1px solid #e1e1e1;
	border-radius: 20px;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;

	margin-left: 12px;
	margin-right: 12px;
	background-color: rgb(243, 243, 243);
	width: 286px;
`;
export const DealHotHomePageInnerWrap = styled.div`
	margin: auto;
	max-width: 1240px;
	// display: flex;
	justify-content: space-between;
	padding: 12px 0px;
	position: relative;
	@media screen and (max-width: 1000px) {
		padding: 12px 0px;
	}
`;

export const OrtherHomePageInnerWrap = styled.div`
	margin: auto;
	max-width: 1240px;
	// display: flex;
	justify-content: space-between;
	padding: 20px 0px 8px;
	position: relative;
	@media screen and (max-width: 1000px) {
		padding: 0px 0px 24px 0px;
	}
`;
export const DealHotHomePageButtonLeft = styled.button`
	position: absolute;
	top: calc(50% + 4px);
	left: -30px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const DealHotHomePageButtonRigth = styled.button`
	position: absolute;
	top: calc(50% + 4px);
	right: -30px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;
	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const DealHotHomePageButtonLeftService = styled(DealHotHomePageButtonLeft)`
	top: calc(50% - 14px);
`;
export const DealHotHomePageButtonRigthService = styled(DealHotHomePageButtonRigth)`
	top: calc(50% - 14px);
`;
export const DealHotHomePageButtonRigthHomeKTV = styled(DealHotHomePageButtonRigth)`
	right: -33px;
`;
export const DealHotHomePageItem = styled.div`
	position: relative;
	width: 100%;
`;
export const DealHotHomePageItemImg = styled.img`
	height: 144px;
	width: 100%;
	border-radius: 20px 20px 0 0;
	object-fit: cover;
`;
export const DealHotHomePageItemImgVideo = styled.img`
	height: 20px;
	width: 20px;
	bottom: 8px;
    position: absolute;
    left: 8px;

`;
export const DealHotHomePageItemStar = styled.div`
	display: flex;
	position: absolute;
	bottom: 12px;
	right: 20px;
	color: #fff;
	font-weight: 600;
`;
export const DealHotHomePageItemDeal = styled.div`
	position: absolute;
	top: 0;
	right: 20px;
	width: 44px;
	height: 50px;
	z-index: 1;
	font-weight: 700;
	color: #fff;
	padding-top: 4px;
`;
export const DealHotHomePageItemDealImg = styled.img`
	position: absolute;
	top: 0;
	right: 20px;
`;

export const DealHotHomePageItemDealWrap = styled.div`
	text-align: center;
`;

export const DealHotSwipeableViews = styled(SwipeableViews)`
	display: flex;
	width: 25%;
	overflow-x: visible !important;

	& > div > div {
		overflow: hidden !important;
	}
	& > div.react-swipeable-view-container {
		width: 100%;
	}

	@media screen and (max-width: 1250px) {
		width: 300px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		// height: 455px;
		width: 300px;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;

export const StaffDetailSuggestSwipeableViews = styled(DealHotSwipeableViews)`
	width: calc(20% + 4px);

	@media screen and (max-width: 768px) {
		flex-direction: column;
		// height: 455px;
		width: 300px;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;

export const StaffDetailSuggestSwipeableViewsKTV = styled(DealHotSwipeableViews)`
	width: 193px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		// height: 455px;
		width: 193px;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;

export const DealHotHomePageInfoWrap = styled(GlowLink)`
	width: 100%;
	color: inherit;
	text-decoration: none;
`;
export const DealHotHomePageInfo = styled.div`
	display: flex;
	background-color: #fff;
	border-radius: 0 0 20px 20px;
	justify-content: space-between;
`;

export const DealHotHomePageInfoName = styled.div`
	background-color: #f3f3f3;
	padding: 4px 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: 500;
	line-height: 16px;
`;

export const DealHotHomePageInfoNameAdd = styled.div`
display: flex;
    flex-direction: column;
    justify-content: space-between;
}
`;
export const DealHotHomePageInfoStoreName = styled.div`
	padding: 12px 12px 0 12px;
	overflow: hidden;
	max-width: 210px;
	display: flex;
`;

export const DealHotHomePageInfoStoreNameSpan = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 0;
`;
export const DealHotHomePageInfoAdd = styled.div`
	padding: 4px 12px 12px 12px;
	display: flex;
`;
export const DealHotHomePageInfoPrice = styled.div`
	display: flex;
	flex-direction: column;
`;
export const DealHotHomePageInfoOriginalPrice = styled.s`
	padding: 12px 12px 0 12px;
	font-size: 16px;
	color: #b5b6b5;
`;
export const DealHotHomePageInfoReducedPrice = styled.div`
	padding: 4px 12px 12px 12px;
	color: #db281f;
	font-size: 18px;
	font-weight: 600;
`;

export const DealHotHomePageImgIcon = styled.img`
	margin-right: 4px;
	width: 16px;
	height: 16px;
`;

export const DealHotHomePageInnerLabel = styled.h2`
	font-size: 20px;
	line-height: 28px;
	margin-bottom: 12px;
	font-weight: 500;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
		margin-left: 8px;
	}
`;

export const AutoPlaySwipeableViews = styled(SwipeableViews)`
	display: flex;
	width: 25%;
	overflow-x: visible !important;

	& > div > div {
		overflow: hidden !important;
	}
	& > div.react-swipeable-view-container {
		width: 100%;
	}

	@media screen and (max-width: 1250px) {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		height: 455px;
		width: 100%;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;

export const AutoPlaySwipeableViewsStaff = styled(SwipeableViews)`
	display: flex;
	width: 178px;
	overflow-x: visible !important;

	& > div > div {
		overflow: hidden !important;
	}
	& > div.react-swipeable-view-container {
		width: 100%;
	}

	@media screen and (max-width: 1250px) {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		height: 455px;
		width: 100%;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;

export const AutoPlaySwipeableViewsStaffHome = styled(SwipeableViews)`
	display: flex;
	width: 178px;
	overflow-x: visible !important;
	flex-direction: column;

	& > div > div {
		overflow: hidden !important;
	}
	& > div.react-swipeable-view-container {
		// width: 100%;
	}

	@media screen and (max-width: 1250px) {
		// width: 100%;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		// height: 455px;
		width: 172px;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;
export const StaffInfoAutoPlayWrap = styled.div``;
export const StaffInfoAutoPlaySSRWrap = styled.div`
	width: 160px;
	margin-right: 18px;
`;
export const StaffInfoAutoPlayImgCheck = styled.img`
	width: 16px;
	height: 16px;
	margin-left: 4px;
`;

export const StaffInfoAutoPlayImgCheckBigSize = styled.img`
	width: 26px;
	height: 26px;
	margin-left: 8px;

	@media screen and (max-width: 768px) {
		width: 24px;
		height: 24px;
	}
`;

export const StaffInfoAutoPlayImgCheckBigSizeWrap = styled.div`
	display: flex;
	height: 40px;
	align-items: center;
	@media screen and (max-width: 768px) {
		height: 36px;
	}
`;

export const StaffInfoAutoPlay = styled.div`
	width: 160px;
	border: 1px solid #e1e1e1;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;
	border-radius: 16px;
	margin: auto;
`;
export const StaffInfoAutoPlayImgWrap = styled(GlowLink)`
width: 158px;
height:220px;
    text-decoration: none;
    color: var(--text-color0);

`;
export const StaffInfoAutoPlayImg = styled.img`
	width: 100%;
	border-radius: 16px 16px 0px 0px;
	height: 100%;
	object-fit: cover;
	// height:211px;
	aspect-ratio: 1 / 1;
`;
export const StaffInfoAutoPlayContentWrap = styled.div`
	max-height: 60px;
`;
export const StaffInfoAutoPlayContentTop = styled.div`
	display: flex;
	align-items: flex-end;
	margin-left: 8px;
	padding-top: 8px;
`;
export const StaffInfoAutoPlayContentBottom = styled.div`
	display: flex;
	align-items: center;
	margin-left: 8px;
	padding-bottom: 12px;
	margin-top: 4px;
`;
export const StaffInfoAutoPlayNameProvice = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const StaffInfoAutoPlaItemStar = styled.div`
	display: flex;
	align-items: flex-end;
	// margin-right:12px;
	// font-weight:600;
`;
export const StaffInfoAutoPlaItemStarStore = styled.div`
	display: flex;
	align-items: flex-end;
	position: absolute;
	bottom: 12px;
	right: 20px;
	font-weight: 600;
	color: #fff;
`;
export const StaffInfoAutoPlaImgIcon = styled.img`
	margin-right: 4px;
	width: 16px;
	height: 16px;
`;

export const DealHotHomePageInnerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
	}
`;
export const DealHotHomePageInnerLink = styled(GlowLink)`
	justify-content: flex-end;
	color: var(--primary-color);
	text-decoration: none;
	align-items: center;
	display: flex;
	width: 80px;
	// white-space: nowrap;
	// overflow: hidden;
	text-overflow: ellipsis;
	@media screen and (max-width: 1000px) {
		margin-right: 12px;
	}
`;

export const StaffInfoAutoPlayContentName = styled(GlowLink)`
	font-weight: 500;
	text-decoration: none;
	color: #080d08;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const StaffServiceInfoSSRWrap = styled.div`
	display: flex;
	overflow-x: auto;
	flex-direction: row;
	justify-content: flex-start;
	width: max-content;
`;

export const StaffInfoWrap = styled.div`
	display: flex;
	overflow-x: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const DealHotHomePageNote = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	margin-bottom: 12px;
`;

export const DealHotHomePageNoteImg = styled.img`
	height: 150px;
	margin-bottom: 12px;
`;

export const SlideSwipeableViews = styled(SwipeableViews)`
	display: flex;
	width: calc(20% + 12px);
	overflow-x: visible !important;
	max-height: 80px;

	& > div > div {
		overflow: hidden !important;
	}
	& > div.react-swipeable-view-container {
		width: 100%;
	}

	@media screen and (max-width: 1250px) {
		width: 230px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		height: 82px;
		width: 230px;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;

export const SlidePageToWrap = styled.div`
	box-shadow: 0px 2px 5.6px 0px #080d0814;
	padding: 12px;
	margin: 20px auto;
	max-width: 1240px;
	// display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	// padding-top: 50px;
	position: relative;
	// overflow-x: hidden;
	border-radius: 12px;
	@media screen and (max-width: 768px) {
		margin: 20px 0 20px 12px;
	}
`;
export const SlideLabel = styled.div`
	font-size: 16px;
	line-height: 24px;
	color: #080d08;
	margin: 12px auto;
	text-align: center;
	font-weight: 600;
	@media screen and (max-width: 768px) {
		float: left;
	}
`;
export const SlideSwipeableViewsWrap = styled.div`
	width: 1080px;
	margin: 0 auto 24px;
	overflow-x: hidden;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const SlideSwipeableViewsInner = styled.div`
	margin-right: 60px;
	width: calc(100% - 60px);
	height: 100%;
	@media screen and (max-width: 768px) {
		height: 82px;
	}
`;
export const SlideSwipeableViewsInnerImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const SlideHomePageButtonLeft = styled.button`
	position: absolute;
	top: 50%;
	left: 12px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const SlideHomePageButtonRigth = styled.button`
	position: absolute;
	top: 50%;
	right: 12px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;
	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const DealHotHomePageItemLink = styled(GlowLink)`
	text-decoration: none;
	color: var(--text-color0);
`;

export const StaffInfoSeparation = styled.div`
	margin: 0px 6px;
	width: 2px;
	background: #e6e7e6;
	height: 12px;
`;
export const HeaderSpaWrap = styled.div`
	margin: auto;
	max-width: 1240px;
`;
export const VoucherListBCWrapv2 = styled(VoucherListBCWrap)`
	margin-top: 8px;

	@media screen and (max-width: 768px) {
		margin-left: 12px;
		margin-top: 4px;
	}
`;
export const HomeSpaDivSSR = styled.div`
	& button {
		position: absolute;
		top: calc(50% + 4px);
		left: -30px;
		width: 28px;
		height: 28px;
		border-radius: 100px;
		border: 1px solid #e6e7e6;
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.5);
			border: 2px solid #ababab;
		}
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const HomeSpaDivSSRNext = styled.div`
	& button {
		position: absolute;
		top: calc(50% + 4px);
		right: -33px;
		width: 28px;
		height: 28px;
		border-radius: 100px;
		border: 1px solid #e6e7e6;
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.5);
			border: 2px solid #ababab;
		}
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const SearchBoxDiv = styled.div`
	height: 36px;
	display: flex;
	border-radius: 100px;
	border: 1px solid #fff;
	padding: 7px;
	background-color: #758f6b;
	 color: #fff;

	& input {
	border: none;
    background: transparent; 
	color: #fff;
	margin-left: 8px;
	width:100%;
	 &::placeholder {
      color: #fff;
    }
		&:focus {
			outline: none;
			border-color: #007bff;
			box-shadow: none;
		}
	}

	& img {
	width:18px;
	height:18px;
	}

	@media screen and (max-width: 768px) {
			    background-color: #fff;
    border: 1px solid #758f6b;
    margin: 0 20px 20px 20px;
	 color: #758f6b;

	 & input {
	  color: #758f6b;
	 &::placeholder {
      color: #758f6b;
    }
		}
`;

export const AppDownloadBannerTopWrap = styled.div`
display:none;
@media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    height: 60px;
    background-color: #fff;
	    justify-content: space-between;
		padding:15px 9px;
	}
`;
export const AppDownloadBannerTopShadow = styled.div`
display:none;
@media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    background-color: #fff;
	    justify-content: space-between;
		padding:14px 11px;
		    border-radius: 12px;
    background: #FFF;
    // box-shadow: 0px 2px 5.6px 0px rgba(8, 13, 8, 0.15);
	}
`;
export const AppDownloadBannerRight = styled.div`

display: flex;
align-items: center;
`;
export const AppDownloadBannerRightImgWrap = styled.div`
width:50px;
height:50px;
margin-right:6px;
`;
export const AppDownloadBannerRightImg = styled.img`
width: 100%;
    height: 100%;
`;
export const AppDownloadBannerRightLine = styled.div`

`;
export const AppDownloadBannerRightTitle = styled.div`
color: #000;
font-size: 16px;
font-weight: 400;
line-height: 24px;
`;
export const AppDownloadBannerRightText = styled.div`
color: #525652;
font-size: 11px;
font-weight: 400;
line-height: 12px;
`;
export const AppDownloadBannerLeft = styled.div`
display: flex;
align-items: center;
`;
export const AppDownloadBannerLeftButton = styled.a`
text-decoration: none;
display: flex;
padding: 6px 12px;
justify-content: center;
align-items: center;
gap: 10px;
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border-radius: 100px;
border: 1.5px solid var(--alias-color-text-icon-focus, #5B7A4F);
    background-color: #5B7A4F;
`;