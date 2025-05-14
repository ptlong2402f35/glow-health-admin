import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { PageInner } from "../../../controls/components/form/Page";

export const StylePagePersonContain = styled(PageInner)`
	width: 100%;
`;

export const StyleUploadUserImage = styled.div`
	margin-bottom: 12px;
	text-align: center;
`;

export const StylePagePersonWrap = styled.div`
	padding: 0;
	display: flex;
	gap: 100px;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
export const StylePagePersonWrapLeft = styled.div`
	flex: 1;
	min-width: 235px;

	@media screen and (max-width: 768px) {
		width: 100%;
		min-width: unset;
	}
`;

export const StylePagePersonNav = styled.div<{
	isActive?: boolean;
}>`
	margin-top: 16px;
	padding: 4px 30px 10px 15px;
	border-radius: 8px;
	width: 100%;
	cursor: pointer;
	border-left: 4px solid transparent;
	color: var(--text-color0);

	@media screen and (max-width: 768px) {
		margin: 0;
		padding: 0px 30px 0px 15px;
		border: none;
	}
	${(props) => (props.isActive ? "color: var(--primary-color);background-color: #fff;" : null)}
`;

export const StylePagePersonNavItem = styled(StylePagePersonNav)`
	@media screen and (max-width: 768px) {
		margin: 16px;
		padding: 0 8px 8px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`;
export const BankInfoWrap = styled.div`
	width: 100%;
`;

export const InnerRightContent = styled.div`
	width: 45%;
	float: right;
	margin: 4px;
	@media screen and (max-width: 768px) {
		width: 100%;
		float: none;
	}
`;
export const CreatedUsetInnerRightContent = styled.div`
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;

export const InnerLeftContent = styled.div`
	width: 50%;
	float: left;
	text-align: center;
	margin: 4px;
	@media screen and (max-width: 768px) {
		width: 100%;
		float: none;
	}
`;

export const BankInfo = styled.div`
	margin-bottom: 0px;
	border-radius: 16px;
	padding: 16px;
	position: relative;
	&:nth-child(2n) {
		background-color: #fff;
	}
	&:nth-child(2n + 1) {
		background-color: #f5f3f4;
	}
	@media screen and (max-width: 768px) {
		&:nth-child(n) {
			background-color: #fff;
		}
		margin-bottom: 16px;
	}
`;

export const StyleButtonBank = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;
	@media screen and (max-width: 768px) {
		top: 8px;
		right: 12px;
	}
`;
export const TextError = styled.div`
	margin-top: 4px;
	font-style: normal;
	font-weight: 600;
	font-size: 13px;
	line-height: 25px;
	color: #dc3545;
	margin-bottom: 4px;
	text-align: left;
`;

export const BankInfoCardID = styled.div`
	display: inline-block;
	width: calc(100% - 200px);
	font-size: 14px;
	line-height: 20px;
	color: var(--text-color);
	word-wrap: break-word;
	white-space: pre-wrap;
	font-weight: 600;
	@media screen and (max-width: 768px) {
		width: calc(100% - 140px);
		white-space: pre-line;
	}
`;

export const StylePagePersonNavWrap = styled.div`
	@media screen and (max-width: 768px) {
		display: flex;
	}
`;

export const StyleError = styled.span`
	color: red;
	font-size: 12px;
`;

export const StyleButtonAddBanking = styled.button`
	text-decoration: none;
	border: 1px solid var(--primary-color);
	background-color: var(--primary-color);
	color: #fff;
	padding: 10px 30px 12px 30px;
	border-radius: 100px;
	font-size: 16px;
	line-height: 17px;
	font-weight: 600;
`;

export const StyleButtonUpdateBanking = styled.div`
	display: inline-block;
	margin-right: 16px;
	font-size: 14px;
	color: var(--primary-color);
	cursor: pointer;
	font-weight: 600;
`;

export const StyleButtonDeleteBanking = styled.div`
	display: inline-block;
	font-size: 14px;
	color: var(--alert-color);
	cursor: pointer;
	font-weight: 600;
`;

export const StylePagePersonMenu = styled.div`
	margin-top: 16px;
	padding: 4px 30px 10px 0;
	border-radius: 8px;
	width: 100%;
	cursor: pointer;
	border-left: 4px solid transparent;
	color: var(--text-color0);
	display: flex;

	@media screen and (max-width: 768px) {
		margin: 0;
		padding: 0px 30px 0px 15px;
		border: none;
		text-align: center;
		flex-direction: column;
	}
`;
export const StylePagePersonNavIcon = styled(PersonIcon)`
	width: 20px !important;
	transform: translateY(6px);
`;
export const StylePagePersonNavInfo = styled.div``;
export const BankTittle = styled.div`
	display: inline-block;
	text-align: right;
	width: 200px;
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;
	color: var(--text-color3);
	padding-right: 20px;
	@media screen and (max-width: 768px) {
		width: 140px;
		padding-right: 12px;
	}
`;
export const BankInfoInner = styled.div`
	margin-bottom: 4px;
	@media screen and (max-width: 768px) {
		&:first-child {
			margin-top: 4px;
		}
		display: flex;
	}
	display: flex;
	align-items: flex-start;
`;
export const StyleAddBank = styled.div`
	margin-top: 16px;
	text-align: center;
`;
export const StylePagePersonNavLock = styled(LockIcon)`
	width: 20px !important;
	transform: translateY(6px);
`;

export const StylePagePersonNavText = styled.span`
	display: inline;
	padding-left: 8px;
	@media screen and (max-width: 768px) {
		margin-top: 4px;
	}
`;
export const StylePagePersonText = styled.span`
	display: block;
	color: var(--text-color0);
`;
export const StylePagePersonText1 = styled(StylePagePersonText)`
	font-weight: 700;
	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;
export const StylePagePersonWrapRight = styled.div`
	flex: 5;
	border-radius: 16px;
	padding: 16px 16px 32px;
	background-color: white;
	@media screen and (max-width: 768px) {
		background-color: transparent;
		padding: 0 16px 32px;
	}
`;
export const StylePagePersonWrapBank = styled.div<{ $loading?: boolean }>`
	flex: 5;
	border-radius: 16px;
	padding: 32px;
	background-color: white;
	@media screen and (max-width: 768px) {
		background-color: transparent;
		padding: 0 16px 32px;
	}
	${(props) =>
		props.$loading &&
		css`
			min-height: 350px;
		`}
`;
export const StylePagePersonHeader = styled.div`
	font-weight: bold;
	font-size: 28px;
	line-height: 29px;
	color: var(--text-color0);

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const StylePagePersonContent = styled.div`
	margin-top: 32px;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;
export const StylePagePersonContentMenu = styled(StylePagePersonContent)`
	display: flex;
	@media screen and (max-width: 768px) {
		margin-top: 0;
		padding: 0;
		background-color: var(--background-color);
		border-radius: 12px;
	}
`;
export const StylePagePersonContentMenuBank = styled(StylePagePersonContent)`
	@media screen and (max-width: 768px) {
		margin-top: 0;
		padding: 0;
		background-color: var(--background-color);
		border-radius: 12px;
	}
`;
export const StylePagePersonContentLeft = styled.div`
	position: relative;
	flex: 1;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const StylePagePersonContentAvtWrap = styled.div`
	display: flex;
	justify-content: center;!important
	position: relative;
	@media screen and (max-width: 380px) {
		width: 100%;
	}
`;
export const StylePagePersonContentAvtWrapMenu = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		position: relative;
		display: block;
	}
`;
export const StylePagePersonContentAvtWrapMenuRes = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StylePagePersonContentAvt = styled.div`
	width: 180px;
	height: 180px;
	border-radius: 50%;
	cursor: pointer;
	overflow: hidden;
	border: 1px solid #b6b6b6;
	position: relative;
`;

export const StylePageBlogContent = styled(StylePagePersonContentAvt)`
	width: 100%;
	height: 250px;
	border-radius: 0;
`;
export const StylePageCustomContent = styled(StylePagePersonContentAvt)`
	width: 300px;
	height: 200px;
	border-radius: 0;
`;
export const StylePagePersonContentAvtMenu = styled.div`
	width: 55px;
	height: 55px;
	border-radius: 50%;
	cursor: pointer;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 100px;
		height: 100px;
		border: 3px solid var(--text-color);
	}
`;
export const StylePagePersonContentAvtImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const StylePagePersonContentAvtImgMenu = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100px;
`;
export const StylePagePersonContentChangeAvt = styled.label`
	color: #fff;
	font-weight: 600;
	font-size: 14px;
	background-color: #fff;
	border-radius: 100px;
	cursor: pointer;
	position: absolute;
	bottom: 50%;
	right: 50%;
	width: 32px;
	height: 32px;
	text-align: center;
	padding: 0px;
	line-height: 30px;
	position: relative;
	right: 27px;
	border: 1px solid #b6b6b6;
`;

export const StylePagePersonContentChangeAvtWrap = styled.div`
	width: 210px;
	height: 210px;
	position: absolute;
	background-color: transparent;
	cursor: pointer;
`;
export const StylePagePersonContentChangeAvtMenu = styled.label`
	@media screen and (max-width: 768px) {
		color: #fff;
		font-weight: 600;
		font-size: 14px;
		background-color: var(--text-color0);
		border-radius: 100px;
		-webkit-transform: translate(-50%);
		-ms-transform: translate(-50%);
		transform: translate(-50%);
		cursor: pointer;
		position: absolute;
		bottom: 6%;
		right: -10%;
		width: 24px;
		height: 24px;
		text-align: center;
		padding: 0px;
		line-height: 30px;
	}
`;
export const StyleUpdateAvatar = styled.img`
	width: 14px;
	font-weight: 600;
	@media screen and (max-width: 768px) {
		padding-bottom: 3px;
	}
`;
export const BankInformation = styled.div`
	display: inline-block;
	font-weight: 600;
`;
export const IconUpdateBankInformation = styled.div`
	display: inline-block;
	width: 100%;
`;
export const StylePagePersonContentChangeAvtInput = styled.input`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	opacity: 1;
	cursor: pointer;
	display: none;
`;
export const StylePagePersonContentRight = styled.div`
	flex: 3;
	margin-left: 32px;

	@media screen and (max-width: 768px) {
		margin: 0px;
	}
`;

export const StylePagePersonContentRightInfo = styled.div`
	display: block;
	padding: 0px 0px 16px;
	margin-bottom: 16px;

	@media screen and (max-width: 768px) {
		padding: 0;

		margin-bottom: 0;
	}
`;
export const StylePagePersonContentRightInfov2 = styled(StylePagePersonContentRightInfo)`
	padding: 0px;
`;
export const StylePagePersonContentKey = styled.div<{
	xStylePageSet?: FlattenSimpleInterpolation;
}>`
	color: var(--text-color0);
	width: 150px;
	display: inline-block;

	@media screen and (max-width: 768px) {
		display: block;
		width: 100%;
		margin-bottom: 4px;
		&:last-child {
			margin-left: 0px;
		}
	}
	${(props) => (props.xStylePageSet ? props.xStylePageSet : "")}
`;
export const StylePersonalLabelBank = styled(StylePagePersonContentKey)`
	width: 100%;
	margin-bottom: 8px;
	color: var(--text-color2);
	font-family: SF-Pro-Display;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
	}
`;
export const StylePagePersonContentValue = styled.div`
	color: var(--text-color0);
	display: inline-block;
	font-weight: 600;
	@media screen and (max-width: 768px) {
		font-weight: 700;
		padding-bottom: 8px;
	}
`;
export const StylePagePersonContentInputWrap = styled.div`
	position: relative;
	display: inline-block;
	width: calc(100% - 150px);
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const StylePagePersonInputWrap = styled.div`
	position: relative;
	width: 100%;
`;

export const StyleEditIcon = styled.img`
	position: absolute;
	right: 10px;
	width: 16px;
	height: 16px;
	top: 32%;
	pointer-events: none;
	@media screen and (max-width: 768px) {
		top: 36%;
	}
`;
export const StylePagePersonFlexWrap = styled.div`
	display: flex;
	justify-content: space-between;
	background-image: url(./static/img/borderbankcard.png);
`;
export const StylePagePersonContentInput = styled.input`
	margin-right: 12px;
	padding: 12px 18px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	font-size: 14px;
	width: 200px;
	font-weight: normal;
	width: 100%;
	&::-ms-reveal,
	&::-ms-clear {
		display: none;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 8px 0px;
		padding: 8px 12px;
		color: var(--text-color);
	}
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		& {
			font-size: 14px;
		}
	}
`;

export const StylePagePersonContentTextArea = styled.textarea`
	padding: 12px 18px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	font-size: 14px;
	width: 200px;
	font-weight: normal;
	width: 100%;
	height: 100px;
	&::-ms-reveal,
	&::-ms-clear {
		display: none;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 8px 0px;
		padding: 8px 12px;
		color: var(--text-color);
	}
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		& {
			font-size: 14px;
		}
	}
`;

export const StylePagePersonContentButton = styled.button`
	padding: 12px 18px;
	border: 1px solid var(--border-color);
	border-radius: 12px;
	font-size: 14px;
	width: 100%;
	font-weight: 600;
	background-color: #fff;
	text-align: left;
	color: var(--text-color2);
	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 8px 0px;
	}
`;
export const StylePagePersonContentChangeButton = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: flex-end;
	@media screen and (max-width: 768px) {
		justify-content: center;
	}
`;
export const StyledPaPersonContentChangeBtn = styled.button<{
	isDisable?: boolean;
}>`
	color: white;
	padding: 10px 30px 12px 30px;
	border-radius: 12px;
	background-color: var(--primary-color);
	border: none;
	cursor: pointer;
	font-weight: 600;
	font-size: 16px;

	@media screen and (max-width: 768px) {
		display: none;
	}

	${(props) => (props.isDisable ? "opacity:.5;" : "opacity:1;")}
`;
export const StyledPaPersonContentChangeBtnRes = styled.button<{
	isDisable?: boolean;
}>`
	@media screen and (max-width: 768px) {
		color: white;
		padding: 10px 30px 12px 30px;
		border-radius: 12px;
		background-color: var(--primary-color);
		border: none;
		cursor: pointer;
		font-weight: 600;
		font-size: 16px;
		${(props) => (props.isDisable ? "opacity:.5;" : "opacity:1;")}
	}
	@media screen and (min-width: 769px) {
		display: none;
	}
`;
export const StyleBankCardWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
	position: relative;
	height: 130px;
`;
export const StyleBankCard = styled.div`
	width: 240px;
	height: 120px;
	border-radius: 16px;
	position: absolute;
	z-index: 1;
	background-image: url(./static/img/ic_bg_card.png);
	@media screen and (max-width: 768px) {
		width: 200px;
		height: 100px;
	}
`;

export const StyleShadowBankCard = styled.img`
	width: 200px;
	height: 110px;
	border-radius: 16px;
	background-image: url(./static/img/borderbankcard.png);
	position: absolute;
	border: 10px solid #e8ecef;
	margin-top: 30px;
	@media screen and (max-width: 768px) {
		width: 180px;
		height: 95px;
	}
`;
export const StyleCardFull = styled.div`
	width: 240px;
	height: 120px;
	position: relative;
	@media screen and (max-width: 768px) {
		width: 200px;
		height: 100px;
	}
`;
export const StyleBankOwner = styled.span`
	font-weight: 100;
	font-size: 12px;
	position: absolute;
	bottom: 30px;
	left: 10px;
	color: #fff;
`;
export const StyleBankCardId = styled.span`
	font-weight: 100;
	font-size: 12px;
	position: absolute;
	bottom: 10px;
	left: 10px;
	color: #fff;
`;
export const StyleBankName = styled.span`
	font-weight: 100;
	font-size: 12px;
	position: absolute;
	top: 10px;
	right: 10px;
	color: #fff;
`;
export const UserFormWithdrawRequestButtonAccept = styled.button<{ disabledButton?: boolean }>`
	text-decoration: none;
	border: 1px solid var(--primary-color);
	background-color: var(--primary-color);
	color: #fff;
	padding: 10px 40px 12px 40px;
	border-radius: 8px;
	font-size: 16px;
	line-height: 17px;
	font-weight: 600;
	margin-left: 10px;
	opacity: ${(props) => (props.disabledButton ? 0.4 : 1)};
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		padding: 10px 30px 12px 30px;
	}
`;
export const UserFormBankButtonCreated = styled(UserFormWithdrawRequestButtonAccept)`
	border-radius: 100px;
	background-color: #7cc246;
	border: 1px solid #7cc246;
	// width: calc(50% - 5px);
	margin-bottom: 10px;
	float: right;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const UserFormBankButtonCreatedv2 = styled(UserFormWithdrawRequestButtonAccept)`
	border-radius: 100px;
	background-color: #7cc246;
	border: 1px solid #7cc246;
	// width: calc(50% - 5px);
	margin-bottom: 10px;
	float: right;
`;
export const UserFormBankButtonCreatedRes = styled(UserFormWithdrawRequestButtonAccept)`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		border-radius: 100px;
		background-color: #7cc246;
		border: 1px solid #7cc246;
		// width: calc(50% - 5px);
		margin-top: 10px;
		float: right;
	}
`;
export const DivUserFormBankButtonCreated = styled.div`
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 50px;
	}
`;
export const UserFormBankButtonClose = styled(UserFormWithdrawRequestButtonAccept)`
	border-radius: 100px;
	background-color: #b6b6b6;
	border: 1px solid #b6b6b6;
	margin-left: 0px;
	margin-bottom: 10px;
	// width: calc(50% - 5px);
	margin-bottom: 10px;
`;

export const StyleInformationUser = styled.div`
	display: inline-block;
	padding: 8px;
	margin-left: 2px;
`;

export const xStyleTextAlignCenterFooter = css`
	text-align: center;
`;
export const StyleAvatarUser = styled.div`
	width: 55px;
	height: 55px;
	display: inline-block;
	@media screen and (max-width: 768px) {
		height: 100px;
		width: 100px;
	}
`;
export const StyleAvatarUserWrap = styled.div`
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const xStylePersonalFlex = css`
	display: flex;
	justify-content: center !important;
	align-items: center;
`;

export const StylePasswordWrap = styled.div`
	padding: 8px 16px;
	position: relative;
	background-color: #fff;
	border-radius: 12px;
	margin-top: 16px;
	&::before {
		content: "";
		display: block;
		background-color: var(--border-color);
		width: calc(100%);
		height: 1px;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	@media only screen and (max-width: 768px) {
		padding: 16px 16px 24px;
		margin-top: 0;
	}
`;
export const xStylePageSet = css`
	margin-top: 12px;
	float: left;
	@media screen and (max-width: 768px) {
		margin-top: 0px;
	}
`;
export const PersonalTextError = styled(TextError)`
	margin-bottom: 0px;
	text-align: center;
	@media screen and (max-width: 768px) {
		margin-bottom: 16px;
	}
`;
export const StylePagePersonPasswordInputWrap = styled(StylePagePersonContentInputWrap)`
	width: calc(70% - 180px);
	margin-left: 24px;
	@media only screen and (max-width: 768px) {
		margin-left: 0;
		width: 100%;
	}
`;
export const AdminImgDelete = styled.button`
padding: 4px;
position: absolute;
right: 78px;
bottom: 0;
border-radius: 100px;
background: red;
width: 24px;
height: 24px;
display: flex;
border: 1px solid;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
color: rgb(255, 255, 255);
}`;
export const PersonalNoteReviewComment = styled.span`
color: var(--text-color2);
}`;

export const StylePagePersonContentArea = styled.textarea`
	margin-right: 12px;
	padding: 12px 18px;
	border: 1px solid var(--border-color);
	border-radius: 4px;
	font-size: 14px;
	width: 200px;
	font-weight: normal;
	width: 100%;
	&::-ms-reveal,
	&::-ms-clear {
		display: none;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 8px 0px;
		padding: 8px 12px;
		color: var(--text-color);
	}
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		& {
			font-size: 14px;
		}
	}
`;
