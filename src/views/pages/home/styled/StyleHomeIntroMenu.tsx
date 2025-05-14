import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GlowA, GlowLink } from "../GlowLink";

export const HomeIntroWrapper = styled.div<{isMap?:boolean}>`
	width: 100%;
	top: 0;
	z-index: 1;
	background-color: #5b7a4f;
	position: fixed;
	height: 60px;
	
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
	 @media screen and (max-width: 768px) {
	height: ${(props) => (props.isMap ? "60px" : "120px")};
	}
`;

export const HomeIntroWrapperv2 = styled.div`
	width: 100%;
	top: 0;
	z-index: 2;
	background-color: #fff;
	position: fixed;
	height: 60px;
	border-bottom: 1px solid #e6e6e6;
`;
export const HomeIntroWrapperv3 = styled.div`
	width: 100%;
	top: 0;
	z-index: 2;
	 height: inherit;
	background-color: #5b7a4f;
	position: fixed;
	height: 60px;
	border-bottom: 1px solid #5b7a4f;
`;
export const HomeIntroInner = styled.div`
width: 85%;
    height: 60px;
    position: relative;
    margin: auto;
    max-width: 1440px;
    display: flex;
    font-size:16px;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
		margin: 0;
    width: 100%;
    padding: 16px;
   
	height: 60px;
	    align-items: center;
   
}
	}
`;

export const HomeIntroMenuBarLeft = styled.div`
	margin: auto 0;
	@media screen and (max-width: 768px) {
		margin: 0;
		height: 36px;
	}
`;

export const HomeRouterLinkActive = styled(GlowA)`
	text-decoration: none;
`;

export const HomeRouterLinkActiveImg = styled.img`
	width: 80px;
`;
export const HomeIntroMenuBarRightRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
		align-items: center;
	}
`;

export const HomeIntroMenuBarRight = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const HomeIntroMenuBarRouteA = styled(GlowA)`
	padding: 0 12px;
	color: #5b7a4f;
	margin: 8px;
	background: #fff;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-decoration: none;
	opacity: 1;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.3;
	}
`;

export const HomeIntroMenuBarLogin = styled(GlowLink)`
	text-decoration: none;
	opacity: 1;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.3;
	}
	padding: 6px 16px;
	font-size: 14px;
	font-weight: 600;
	line-height: 22px;
	color: #5b7a4f;
	background-color: #fff;
	border-radius: 100px;
`;

export const HomeIntroMenuBarRoute = styled.div`
	padding: 0 12px;
	color: #5b7a4f;
	margin: 8px;
	background: #fff;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
export const HomeIntroMenuBarRoutev2 = styled.div`
	padding: 0 12px;
	color: #5b7a4f;
	margin: 8px;
	background: #fff;
	// -webkit-background-clip: text;
	// -webkit-text-fill-color: transparent;
`;

export const HomeIntroMenuBarLanguage = styled.div`
	position: relative;
	display: flex;
	border-left: 1px solid #e6e7e6;
	min-width: 170px;
	padding-left: 24px;
	height: 24px;
`;
export const HomeIntroMenuBarLanguagev2 = styled.div`
	color: rgb(91, 122, 79);
`;
export const SelectLanguage = styled.div`
	position: relative;
	display: inline-block;
	cursor: pointer;
	user-select: none;
`;

export const DropdownButton = styled.div`
	background: transparent;
	border: none;
	border-radius: 8px;
	outline: none;
	cursor: pointer;
	padding: 0 10px;
	background: url("dropdown-arrow.png") no-repeat right 10px center;
	display: flex;
	align-items: center;
	min-width: 120px;
`;
export const DropdownButtonRes = styled.div`
	background: transparent;
	border: none;
	border-radius: 8px;
	outline: none;
	cursor: pointer;
	padding: 0 10px;
	background: url("dropdown-arrow.png") no-repeat right 10px center;
	display: flex;
	align-items: center;
`;
export const OptionLi = styled.li`
  cursor: pointer;
  padding: 12px 8px;
  display: flex;
    align-items: center;
}
  &:hover {
    background-color: #ccc;
    
    border-radius: 12px;
  }
`;
export const OptionsList = styled.ul`
	position: absolute;
	right: 0;
	top: 100%;
	list-style: none;
	background-color: rgba(252, 253, 252, 0.8);
	box-shadow: 0 4px 16px 0 rgba(8, 13, 8, 0.16);
	border-radius: 12px;
	padding: 0;
	display: none;

	${SelectLanguage}:hover & {
		display: block;
		width: 150px;
	}
`;

export const LanguageImg = styled.img`
	margin-right: 12px;
	width: 20px;
	height: 20px;
	border-radius: 100px;
	border: 1px solid #fffd;
`;
export const HomeMenuContainer = styled.div`
	position: relative;
`;

export const HomeMenuButton = styled.button`
	background: transparent;
	color: white;
	width: 24px;
	height: 24px;
	border: none;
	cursor: pointer;
`;

export const HomeMenuButtonLink = styled.a`
	background: transparent;
	color: white;
	width: 24px;
	height: 24px;
	border: none;
	cursor: pointer;
	margin-right: 8px;
`;

export const HomeMenuItems = styled.div<{
	isOpen?: boolean;
}>`
	position: absolute;
	top: 45px;
	right: -15px;
	width: 100vw;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	opacity: ${(props) => (props.isOpen ? 1 : 0)};
	transform: translateY(${(props) => (props.isOpen ? "0" : "100%")});
	height: ${(props) => (props.isOpen ? "auto" : 0)};
	transition: opacity 1s ease, transform 0.3s ease;
	z-index: 1;
	overflow: hidden;
`;

export const HomeMenuItemsv2 = styled.div`
	position: absolute;
	top: 45px;
	right: -15px;
	width: 100vw;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	opacity: 0;
	transform: translateY(100%);
	height: 0;
	transition: opacity 1s ease, transform 0.3s ease, height 0.3s ease;
	z-index: 1;
	overflow: hidden;

	${HomeMenuContainer}:hover &,
	${HomeMenuContainer}:focus-within & {
		opacity: 1;
		transform: translateY(0);
		height: auto;
	}
`;

export const HomeMenuItemsv3 = styled(HomeMenuItemsv2)`
	right: -40px;
`;

export const HomeMenuItem = styled.li`
	background-color: #fff;
	&:hover {
		background-color: #ccc;
	}
		
`;

export const HomeMenuImage = styled.img`
	width: 100%;
`;
export const HomeMenuImagev2 = styled.img`
	width: 100%;
	width: 18px;
	height: 18px;
`;
export const HomeMenuItemUl = styled.ul`
	list-style-type: none;
`;
export const HomeMenuItemA = styled(GlowA)`
	text-decoration: none;
	color: #000;
	font-size: 0.8125rem;
	font-weight: 500;
	align-self: center;
	line-height: 1rem;
	display: block;
	width: 100%;
	padding: 12px 20px;
`;

export const HomeMenuItemB = styled.span`
	text-decoration: none;
	color: #000;
	font-size: 0.8125rem;
	font-weight: 500;
	align-self: center;
	line-height: 1rem;
	display: block;
	width: 100%;
	padding: 12px 20px;
`;
export const LanguageDropDown = styled.div`
	font-size: 24px;
	margin-left: 8px;
	color: #ccc;
`;
export const LanguageButton = styled.div<{
	isSelected?: boolean;
}>`
	background-color: ${(props) => (props.isSelected ? "white" : "transparent")};
	border: none;
	height: 100%;
	border-radius: 4px;
`;
export const LanguageImgV2 = styled.img`
	margin: 4px 8px;
	height: 16px;
`;
export const LanguageButtonWrap = styled.div`
	background-color: rgba(255, 255, 255, 0.15);
	border-radius: 4px;
	display:flex;
	@media screen and (max-width: 768px) {
		margin-right: 12px;
	}
`;
export const HomeInstructWrapv2 = styled.div`
	display: flex;
	justify-content: center;
	// background-color: rgb(91, 122, 79);
	// height: calc(100vh - 140px);
	// background-image: url(./static/img/BGBN.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	// height: 800px;
`;
export const HomeInstructWrapAtHome = styled.div`
	display: flex;
	justify-content: center;
	// background-color: rgb(91, 122, 79);
	// height: calc(100vh - 140px);
	// background-image: url(./static/img/Background_At_Home.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	// height: 800px;
`;

export const HomeInstructPhoneWrap = styled.div`
	position: relative;
	height: 500px;
`;
export const HomeInstructPhoneWrapv2 = styled.div`
	position: relative;
	height: 500px;
	width: 250px;
`;
export const HomeInstructPhoneFull = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// height: calc(100vh - 60px);
`;
export const HomeInstructPhoneImg = styled.img`
	height: 500px;
	position: absolute;
	// z-index: 1;
`;
export const HomeInstructPhoneImgLeft = styled.img`
	position: absolute;
	top: 50%;
	left: -50%;
	height: 80px;
`;
export const HomeInstructPhoneImgRight = styled.img`
	position: absolute;
	top: 20%;
	height: 40px;
	right: -26%;
`;
export const HomeInstructPhoneVideoWrap = styled.div`
	position: absolute; 
	top: 12px;
	left: 14px;
	width:100%;
}
`;
export const HomeInstructPhoneVideo = styled.video`
	position: relative;
	// z-index: 2;
	border-radius: 20px;
	height: 477px;
	// width:100%;
`;
export const HomeInstructPhone = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const HomeInstructPhonev2 = styled.div<{ home?: boolean }>`
	display: ${({ home }) => (home ? "none" : "flex")};
	width: 40%;
	padding-left: 50px;

	// display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const HomeInstructInnerv2 = styled.div`
	width: 85%;
	height: inherit;
	position: relative;
	margin: auto;
	max-width: 1240px;
	display: flex;
	justify-content: space-between;
	padding: 50px 0;
`;

export const HomeInstructInnerv3 = styled.div<{ login?: boolean }>`
	width: 80%;
	height: inherit;
	position: relative;
	margin: auto;
	max-width: 1240px;
	display: flex;
	justify-content: space-between;
	padding: 50px 0;
	flex-direction: row;
	@media screen and (max-width: 1000px) {
		flex-direction: ${({ login }) => (login ? "column" : "row")};
		width: ${({ login }) => (login ? "100%" : "75%")};
		padding: ${({ login }) => (login ? "0 12px 50px 12px" : "50px 0")};
	}
`;
export const HomeInstructLeftv2 = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const HomeInstructLeftv3 = styled.div<{ login?: boolean }>`
	width: ${({ login }) => (login ? "100%" : "55%")};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const HomeInstructLeftLogin = styled.div<{ login?: boolean }>`
	width: ${({ login }) => (login ? "100%" : "60%")};
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const HomeInstructRightv2 = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-bottom: 28px;
`;
export const HomeInstructLeftv2Title = styled.h1<{ login?: boolean; home?: boolean }>`
	font-weight: 500;
	font-size: 48px;
	line-height: 56px;
	color: #ffffffe5;
	color: ${({ home, login }) => (home || login ? "#5B7A4F" : "#ffffffe5")};
	// font-family: SF-Pro-Text;
	margin-bottom: ${({ login }) => (login ? "32px" : "0")};
`;

export const HomeInstructLeftv2TitleKTV = styled.h1<{ login?: boolean }>`
	font-weight: 500;
	font-size: 48px;
	line-height: 56px;
	color: #ffffffe5;
	// font-family: SF-Pro-Text;
	margin-bottom: ${({ login }) => (login ? "32px" : "0")};
	margin-top: 50px;
	@media screen and (max-width: 1000px) {
		margin-top: 0px;
	}
`;
export const HomeInstructLeftv2DownloadWrap = styled.div`
	display: flex;
	margin-top: 26px;
	@media screen and (max-width: 1000px) {
		margin-top: 0px;
	}
`;
export const HomeInstructRightv2Inner = styled.div`
	display: flex;
	    margin-bottom: 20px;
}
`;
export const HomeInstructRightv2ImgWrap = styled.div`
	width: 40px;
	margin-right: 20px;
`;
export const HomeInstructRightv2Img = styled.img`
	width: 100%;
`;
export const HomeInstructRightv2ContentWrap = styled.div`
	width: 100%;
`;
export const HomeInstructRightv2Title = styled.h3<{ home?: boolean }>`
	width: 100%;
	font-size: 16px;
	color: #ffffff;
	color: ${({ home }) => (home ? "#5B7A4F" : "#fff")};
	font-weight: 600;
`;
export const HomeInstructRightv2Content = styled.div<{ home?: boolean }>`
	width: 100%;
	font-size: 14px;
	color: ${({ home }) => (home ? "#5B7A4F" : "#fff")};
	// opacity: 0.6;
	margin-top: 4px;
`;
export const HomeInstructPhoneStepsWrap = styled.div`
	position: absolute;
	top: 62%;
	left: -160%;
`;
export const HomeInstructPhoneStepsTitle = styled.h2`
	font-size: 16px;
	color: #d0ffbd;
	font-weight: 700;
	line-height: 24px;
`;
export const HomeInstructPhoneStepsUl = styled.ul`
	padding-left: 16px;
`;
export const HomeInstructPhoneSteps = styled.li`
	font-size: 14px;
	line-height: 24px;
	color: #ffffff;
`;
export const HomeInstructPhoneServiceWrap = styled.div`
	position: absolute;
	top: 0%;
	left: 136%;
	width: 300px;
	@media screen and (max-width: 1200px) {
		width: 200px;
	}
`;

export const HomeInstructPhoneDownloadRes = styled.div`
	display: flex;
	justify-content: center;
	height: 80px;
	margin-top: 10px;
	align-items: center;
`;
export const HomeInstructPhoneDownloadTwoButtonRes = styled.div`
	display: flex;
	justify-content: center;
	height: 80px;
	margin-top: 10px;
	align-items: flex-start;
`;
export const HomeInstructPhoneDownloadResA = styled.a`
	    text-decoration: none;
`;
export const HomeInstructPhonePartner = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
	color: #fff;
`;
export const HomeInstructPhoneDownloadResButton = styled.div`
	padding: 14px 38px;
	border: 1px solid #fff;
	border-radius: 8px;
	background-color: #000;
	color: #fff;
	position: relative;
	font-weight: 700;
	font-size: 24px;
	line-height: 29px;
`;
export const HomeInstructPhoneDownloadResImg = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
`;
export const HomeInstructPhoneDownloadResWrap = styled.div`
	background-image: url(./static/img/BGMobile.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
`;
export const HomeInstructPhoneDownloadResTitle = styled.div<{ login?: boolean }>`
	font-weight: 500;
	font-size: 28px;
	color: #fff;
	// font-family: Yeseva-One;
	padding: 20px 8px;
	text-align: center;
	line-height: 40px;
	padding-bottom: ${({ login }) => (login ? "40px" : "20px")};
`;
export const HomeInstructPhoneNoVideo = styled.img`
	height: 500px;
	padding: 8px 0px 10px 6px;
	border-radius: 30px;
`;

export const HomeLoginAvatar = styled.img`
	height: 32px;
	width: 32px;
	border: 1px solid #fff;
	border-radius: 100px;
	margin-right: 8px;
`;

export const HomeMenuLoginWrap = styled.div`
	display: flex;
	align-items: center;
	color: #fff;
`;

export const HomeMenuLoginName = styled.div`
	margin-right: 4px;
`;

export const HomeMenuLoginWrapWrap = styled.div`
	position: relative;
	cursor: pointer;
`;

export const HomeMenuLoginSelect = styled.div`
	position: absolute;
	right: 0;
	position: absolute;
	right: 0px;
	background-color: #fff;
	border-radius: 12px;
`;

export const HomeMenuLoginOption = styled.div`
	padding: 16px;
	background-color: #fff;
	border: none;
	border-radius: 8px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export const HomeMenuLoginOptionInner = styled.div`
	width: 100px;
	margin-left: 12px;
`;
export const HomeMenuLoginOptionLink = styled(GlowLink)`
	text-decoration: none;
	color: var(--text-color0);
`;

export const LanguageButtonLink = styled(Link)`
	display: inline-block;
`;
