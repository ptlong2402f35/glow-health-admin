import { Link } from "react-router-dom";
import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import MenuBarIconItem from "../MenuBarIconItem";
import MenuBarTextItem from "../MenuBarTextItem";

export const StyledMenuBar = styled.div`
	position: fixed;
	top: 0px;
	background-color: #5b7a4f;
	width: 100%;
	z-index: 10;
	height: 64px;
	@media screen and (max-width: 768px) {
		height: 50px;
	}
`;

export const MenuBarCreatePost = styled.div`
	text-decoration: none;
	margin-right: 10px;
`;

export const MenuBarMainWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const MenuBarMainWrapCenter = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 1282px) {
		& {
			width: 100%;
			padding: 0px 16px;
		}
	}

	@media screen and (max-width: 768px) {
		& {
			width: 100%;
			padding: 0px;
		}
	}
`;

export const MenuBarItemInner = styled.div`
	margin-right: auto;
	margin-left: auto;
	width: 90%;
	// max-width: 1140px;
`;

export const MenuBarMainInner = styled.div`
	background-color: #5b7a4f;
	padding: 16px 0px 16px 0px;
	width: 100%;
	height: 64px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 1352px) {
		& {
			padding-left: 16px;
			padding-right: 16px;
		}
	}

	@media screen and (max-width: 1352px) {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		& {
			padding: 8px 20px 8px 20px;
			height: 50px;
		}
	}
`;

export const MenuBarMainLeftAnchorBox = styled.div`
	float: left;
	height: 100%;
`;

export const MenuBarMainLeftAnchorItem = styled.div`
	display: inline-block;
	margin-right: 32px;

	&:last-child {
		margin-right: 0px;
	}
`;

export const MenuBarMainItemLogoInner = styled.div``;

export const MenuBarMainItemLogoImg = styled.img`
	width: 244px;
	height: 32px;
	object-fit: fill;
	transform: translateY(2px);
	@media screen and (max-width: 768px) {
		padding-top: 7px;
		width: 155px;
		height: 26px;
	}
`;

export const MenuBarMainItemLogo = styled.img`
	width: 85px;
	object-fit: contain;
	@media screen and (max-width: 768px) {
		padding: 0;
		width: 80px;
	}
`;

export const MenuBarMainRightAnchorBox = styled.div`
	float: right;
	height: 100%;
	display: flex;
	align-items: center;
`;

export const MenuBarMainRightAnchorItem = styled.div<{
	hiddenResp?: boolean;
}>`
	display: inline-block;

	position: relative;

	&:first-child {
		margin-left: 0px;
	}

	@media screen and (max-width: 768px) {
		margin-left: 10px;

		${(props) =>
			props.hiddenResp &&
			css`
				display: none;
			`}
	}
`;
export const MenuBarMainBetweenAnchorBoxWrap = styled.div`
	display: inline-block;
	margin-left: 50px;

	@media screen and (max-width: 1180px) {
		margin-left: 40px;
	}
	@media screen and (max-width: 980px) {
		margin-left: 20px;
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const MenuBarMainBetweenAnchorBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	gap: 28px;
	@media screen and (max-width: 1180px) {
		gap: 14px;
	}
`;

export const MenuBarMainBetweenAnchorItem = styled(Link)<{
	$isActive?: boolean;
}>`
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	position: relative;
	text-decoration: none;
	color: var(--text-color0);
	&:hover {
		color: var(--primary-colorv2);
	}
	${(props) =>
		props.$isActive &&
		css`
			color: var(--primary-colorv2);
			font-weight: 600;
			&::after {
				content: "";
				position: absolute;
				bottom: -6px;
				left: -5px;
				height: 3px;
				width: calc(100% + 10px);
				background-color: var(--primary-colorv2);
				border-radius: 4px;
			}
		`}
`;
export const MenuBarMainBetweenAnchorItemNotRequired = styled(MenuBarMainBetweenAnchorItem)`
	@media screen and (max-width: 980px) {
		display: none;
	}
`;
export const MenuBarMainGuideWrap = styled.div`
	display: inline-block;
	margin-left: 20px;
	@media screen and (max-width: 1180px) {
		display: none;
	}
`;
export const MenuBarMainGuideWrapGuest = styled(MenuBarMainGuideWrap)`
	@media screen and (max-width: 1360px) {
		display: none;
	}
`;

export const MenuBarMainGuideBtn = styled.button`
	padding: 8px 16px;
	background: var(--primary-colorv2);
	border: 1px solid var(--primary-colorv2);
	border-radius: 100px;
	color: #fff;
	font-weight: 700;
	font-size: 13px;
`;

export const MenuBarMainRightAnchorItemInner = styled.div`
	font-size: 16px;
	margin-left: 8px;
	margin-right: 8px;
	font-weight: 600;
	cursor: pointer;

	& a {
		text-decoration: none;
		color: var(--text-color0);
	}

	@media screen and (max-width: 768px) {
		& {
			font-size: 14px;
			padding: 8px 0px 8px 0px;
		}
	}
`;

export const MenuBarMainRightAnchorIconItem = styled(MenuBarMainRightAnchorItem)``;

export const MenuBarMainRightAnchorItemIconInner = styled(MenuBarMainRightAnchorItemInner)`
	padding: 8px 0px 8px 0px;
`;

const itemIconStyle = css`
	color: var(--primary-color);
	position: relative;
	margin-left: 24px;

	&:first-child {
		margin-left: 0px;
	}

	& img {
		width: 20px;
		height: 20px;
		object-fit: contain;
	}

	@media screen and (max-width: 768px) {
		& {
			line-height: 20px;
		}

		& img {
			width: 20px;
			height: 20px;
			object-fit: contain;
			vertical-align: -3px;
		}
	}
`;

export const MenuBarMainRightAnchorIconItemIconPlain = styled.div`
	${itemIconStyle}
`;

export const MenuBarMainRightAnchorIconItemIconLink = styled(Link)`
	@media screen and (max-width: 768px) {
		display: none;
	}
	${itemIconStyle}
`;

export const MenuBarMainRightAnchorExpandItemDropdown = styled.div`
	position: absolute;
	top: 61px;
	right: -35px;

	@media screen and (max-width: 768px) {
		& {
			top: 46px;
			right: -47px;
		}
	}
`;

export const MenuBarMainRightAnchorExpandItemDropdownBox = styled.div`
	width: 300px;
	@media screen and (max-width: 768px) {
		& {
			width: 260px;
		}
	}
`;

export const MenuBarMainRightAnchorExpandItemDropdownBoxInner = styled.div`
	padding: 12px 0 12px 12px;
	border-radius: 16px;
	border: 1px solid var(--border-color);
	background-color: #fff;
	@media screen and (max-width: 768px) {
		font-size: 13px;
	}
`;

export const MenuBarMainRightAnchorPersonalItem = styled(MenuBarMainRightAnchorItem)`
	position: relative;
	display: block;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MenuBarMainRightAnchorPersonalItemInner = styled.div`
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		& {
			padding: 8px 0px 8px 0px;
		}
	}
`;

export const MenuBarMainRightAnchorPersonalAvatar = styled.div`
	width: 32px;
	height: 32px;
	display: inline-block;
	margin-right: 14px;

	@media screen and (max-width: 768px) {
		& {
			margin-right: 0px;
			width: 27px;
			height: 27px;
		}
	}

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 100px;
	}
`;

export const MenuBarMainRightAnchorPersonalIndicator = styled.div`
	color: var(--text-color0);
	vertical-align: 14px;

	@media screen and (max-width: 768px) {
		& {
			display: none;
		}
	}
`;

export const MenuBarMainRightAchorItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	justify-content: center;
	align-item: space-around;
`;

export const MenuBarMainRightAchorItemDot = styled.div`
	width: 4px;
	height: 4px;
	border-radius: 100px;
	background-color: #b6b6b6; ;
`;

export const MenuBarMainRightAnchorPersonalDropdown = styled.div`
	position: absolute;
	top: 69px;
	right: 0px;

	@media screen and (max-width: 768px) {
		& {
			top: 51px;
		}
	}
`;

export const MenuBarMainRightAnchorPersonalDropdownBox = styled.div`
	width: 260px;
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxInner = styled.div`
	padding: 24px 20px 24px 20px;
	border-radius: 16px;
	border: 1px solid var(--border-color);
	background-color: #fff;

	@media screen and (max-width: 768px) {
		& {
			padding: 15px 15px 15px 15px;
		}
	}
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxUser = styled.div`
	margin-bottom: 20px;

	@media screen and (max-width: 768px) {
		& {
			margin-bottom: 15px;
		}
	}
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxUserInner = styled.div``;

export const MenuBarMainRightAnchorPersonalDropdownBoxUserAvatar = styled(Link)`
	display: block;
	width: 44px;
	height: 44px;
	float: left;

	& img {
		width: 100%;
		height: 100%;
		border-radius: 100px;
		object-fit: cover;
	}
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxUserUserBody = styled.div`
	width: calc(100% - 44px);
	float: left;
	padding-left: 15px;
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxUserUserName = styled.div`
	margin-bottom: 6px;
	font-weight: 600;
	font-size: 16px;
	line-height: 17px;
	color: var(--text-color);

	& a {
		color: inherit;
		text-decoration: none;
	}
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxUserUserAccount = styled.div`
	font-weight: 600;
	font-size: 14px;
	line-height: 15px;
	color: var(--text-color3);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding-top: 4px;
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxLink = styled.div`
	margin-bottom: 16px;

	&: last-child {
		margin-bottom: 0px;
	}

	@media screen and (max-width: 768px) {
		& {
			margin-bottom: 12px;
		}
	}
`;
//className = "MenuBarMainRightAnchorPersonalDropdownBoxRes"

export const MenuBarMainRightAnchorPersonalItemWrap = styled(MenuBarMainRightAnchorItem)`
	position: relative;
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		margin-left: 24px;
	}
`;

export const MenuBarMainRightAnchorPersonalItemIconWrap = styled.div``;

export const MenuBarMainRightAnchorPersonalItemIcon = styled.img``;

export const MenuBarMainRightAnchorPersonalDropdownBoxRes = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxInnerRes = styled.div`
	padding: 20px;
`;
export const MenuBarMainRightAnchorPersonalDropdownHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 16px;
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxClose = styled.img`
	width: 24px;
	height: 24px;
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxContent = styled.div``;
export const MenuBarMainRightAnchorPersonalDropdownBoxItemWrap = styled.div`
	border-bottom: 1px solid #d9d9d9;
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxInfoWrap = styled(Link)`
	background: #f4f4f4;
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	color: var(--text-color1v2);
	border-radius: 100px;
	padding: 16px 17px;
	display: flex;
	justify-content: start;
	align-items: center;
	text-decoration: none;
	gap: 8px;
	cursor: pointer;
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxInfoAvtWrap = styled.div`
	height: 40px;
	width: 40px;
	border-radius: 50%;
	overflow: hidden;
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxInfoAvt = styled.img`
	width: 100%;
	height: 100%;
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxInfoNameWrap = styled.div``;
export const MenuBarMainRightAnchorPersonalDropdownBoxInfoName = styled.div`
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	color: var(--text-color1v2);
`;

export const MenuBarMainRightAnchorPersonalDropdownBoxItemContain = styled.div`
	margin-right: 8px;
	display: inline;
	margin-left: 2px;
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxItemIcon = styled.img`
	width: 14px;
	height: 14px;
	transform: translateY(2px);
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxItem = styled(Link)<{
	$isActive?: boolean;
}>`
	display: inline-block;
	color: var(--text-color2v2);
	width: 100%;
	padding: 16px 0;
	text-decoration: none;
	${(props) => props.$isActive && "color:var(--primary-colorv2);"}
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxGuideWrap = styled.div`
	margin-top: 34px;
`;
export const MenuBarMainRightAnchorPersonalDropdownBoxGuideBtn = styled(Link)`
	padding: 10px 12px;
	background-color: var(--primary-colorv2);
	color: #fff;
	border: 1px solid #7cc246;
	border-radius: 100px;
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	text-decoration: none;
`;
// className="menubarv2-main-item-user-dropdown-box-link-item"
export const MenuBarMainRightAnchorPersonalDropdownBoxLinkItem = styled(Link)`
	display: block;
	font-size: 16px;
	line-height: 17px;
	color: var(--text-color);
	text-decoration: none;

	& img {
		margin-right: 14px;
		width: 20px;
		height: 20px;
		display: inline;
		vertical-align: -4px;
	}

	& p {
		display: inline;
	}
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const PersonalRes = styled.span`
	@media screen and (min-width: 769px) {
		display: none;
	}
`;

export const BalanceRes = styled.span`
	@media screen and (max-width: 768px) {
		color: var(--primary-color);
		font-weight: 600;
		margin-left: 10px;
	}
`;

export const PersonalWeb = styled.span`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StyledMenuBarTextItem = styled(MenuBarTextItem)`
	margin-left: 0px;
	padding-left: 6px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MenuBarNotificationExist = styled.div`
	position: absolute;
	top: 0px;
	right: 0px;
	width: 10px;
	height: 10px;
	background-color: var(--alert-color);
	border-radius: 10px;
	border: 1px solid #fff;
`;

export const Web = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MenuBarSeparation = styled.div`
	color: var(--text-color2);
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const MenuBarTextLG = styled.div`
	&:hover {
		color: var(--primary-bold-color);
	}
`;
