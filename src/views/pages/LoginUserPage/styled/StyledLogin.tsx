import styled, { css } from "styled-components";
import { UserFormButtonAccept } from "../../adminProductManagement/styled/ProductManagementStyle";
import { GlowLink } from "../../home/GlowLink";

export const FormLoginPageWrap = styled.div`
	padding: 24px 16px;
	border-radius: 16px;
	background-color: #fff;
	max-width: 400px;
	min-width: 400px;
	min-height: 290px;
	margin: auto;
	margin-left: 40px;

	@media screen and (max-width: 1000px) {
		width: 100%;
		min-width: auto;
		margin: auto;
	}
`;

export const FormLoginTitle = styled.div`
	color: #080d08;
	text-align: center;
	font-size: 20px;
	font-weight: 700;
	line-height: 28px;
	margin-bottom: 8px;
	@media screen and (max-width: 1000px) {
		font-size: 16px;
		font-weight: 700;
		line-height: 23px;
		margin-bottom: 6px;
	}
`;

export const FormLoginDescription = styled.div`
	color: #525652;
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	margin-bottom: 16px;
`;

export const FormLoginInputWrap = styled.div`
	text-align: center;
	padding: 10px 16px;
	margin-bottom: 22px;
	border: 1px solid #5b7a4f;
	display: flex;
	border-radius: 100px;
`;
export const ForgotPassword = styled.div`
	cursor: pointer;
	text-align: center;
	color: #7a33d3;
	margin-bottom: 16px;
`;
export const FormLoginContinue = styled.button`
	text-align: center;
	padding: 8px 24px;
	border-radius: 100px;
	border: 1px solid #5b7a4f;
	width: 100%;
	background-color: ${(props) => (props.disabled ? "#9e9e9e" : "#5B7A4F")};
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	opacity: ${(props) => (props.disabled ? "0.6" : "1")};
`;
export const FormLoginInputImg = styled.img`
	width: 13px;
	height: 13px;
`;

export const FormLoginInputImgWrap = styled.div`
	background: rgb(243, 243, 243);
	padding: 4px 8px;
	border-radius: 100px;
	border: 1px solid rgb(206, 207, 206);
	width: 86px;
`;

export const FormLoginInput = styled.input`
	border: none;
	outline: none;
	border: 0px solid #fff;
	margin-left: 8px;
	width: 75%;
	@supports (-webkit-overflow-scrolling: touch) {
		& {
			font-size: 16px;
		}
	}
`;

export const OTPInputContainer = styled.div`
	display: flex;
	justify-content: center;
	//   width: 200px;
	margin-bottom: 22px;
`;

export const OTPInputBox = styled.input`
  width: 44px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin 0 4px;
  @supports (-webkit-overflow-scrolling: touch) {
  & {
    font-size: 16px;
  }
}
`;
export const DialogInfoUserWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: -32px;

	@media screen and (max-width: 1000px) {
		margin-top: 0px;
	}
`;
export const DialogInfoUserName = styled.div`
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px;
	margin-bottom: 8px;
`;
export const DialogInfoUserContent = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	margin-bottom: 16px;
	color: #525652;
`;
export const DialogInfoGenderWrap = styled.div``;
export const DialogInfoGenderTitle = styled.div`
	color: #525652;
	margin-bottom: 8px;
`;
export const DialogInfoGenderContent = styled.div`
	display: flex;
	margin-bottom: 16px;
`;
export const DialogInfoGenderMale = styled.div<{ active: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 12px 16px;
	border: ${(props) => (props.active ? "3px solid #B5B6B5" : " 1px solid #B5B6B5")};
	border-radius: 16px;
	width: 176px;
	height: 144px;
	margin-right: 16px;
`;

export const HomeWeb = styled.div`
	// & div {
	//   width:100%;
	// }
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const DialogInfoGenderFeMale = styled(DialogInfoGenderMale)`
	margin-right: 0;
`;

export const DialogInfoGenderContentImg = styled.img`
	height: 80px;
	width: 80px;
	margin-bottom: 16px;
`;
export const DialogInfoCountryWrap = styled.div`
	width: 100%;
`;
export const DialogInfoCountrySelect = styled.select`
	padding: 10px 16px;
	height: 44px;
	border-radius: 24px;
	width: 100%;
	border: 1px solid #b5b6b5;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"/></svg>');
	background-repeat: no-repeat;
	background-position: right 16px center;
	background-size: 24px;
	background-color: transparent;
`;

export const DialogInfoCountryOption = styled.option`
	padding: 10px 16px;
	height: 44px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	text-indent: 5px;
`;
export const DialogInfoCountryTitle = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
`;

export const UserFormServiceButtonCreated = styled(UserFormButtonAccept)`
	border-radius: 100px;
	border: 1px solid
		${(props) =>
			props.disabled ? "var(--primary-color-blur)" : "linear-gradient(180deg, #6F8F63 0%, #5B7A4F 100%)"};
	width: 100%;
	margin-bottom: 10px;
	background-color: ${(props) =>
		props.disabled ? "var(--primary-color-blur)" : "linear-gradient(180deg, #6F8F63 0%, #5B7A4F 100%)"};
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const FormBackDialogLoginImg = styled.img`
	position: absolute;
`;

export const AgreeLawLogin = styled.div`
	color: rgb(82, 86, 82);
	text-align: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	margin-top: 16px;
`;

export const AgreeLawLoginLink = styled(GlowLink)`
	color: rgb(82, 86, 82);
	color: inherit;
	text-decoration: none;
`;

export const DropdownContainerFireBase = styled.div`
	position: relative;
	width: 100%;
`;

export const DropdownHeaderFireBase = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	// border: 1px solid #ccc;
	// padding: 8px;
`;

export const DropdownListContainerFireBase = styled.div`
	position: absolute;
	max-height: 200px;
	overflow-y: auto;
	border: 1px solid rgb(204, 204, 204);
	border-radius: 12px;
	background-color: white;
	z-index: 1000;
	top: 25px;
	left: -8px;
`;

export const DropdownListFireBase = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	width: 200px;
`;

export const ListItemFireBase = styled.li`
	display: flex;
	align-items: center;
	padding: 8px;
	cursor: pointer;

	&:hover {
		background-color: #f0f0f0;
	}
`;

export const FlagImageFireBase = styled.img`
	width: 20px;
	margin-right: 8px;
`;
