import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.div`
	display: flex;
	font-weight: 300;
	justify-content: center;
	height: auto;
	position: relative;
	z-index: 0;
	background: #f8f8f8;
`;

export const StyledFooterCenter = styled.div`
	width: 1132px;
	padding: 0px 20px;

	@media only screen and (max-width: 1132px) {
		width: 100%;
	}
`;

export const FooterWrapper = styled.div`
	// display: flex;
	align-items: center;
	background: #f8f8f8;
	font-size: 14px;
	flex-direction: column;
	margin: auto;
	color: var(--text-color);
	justify-content: center;
	width: 100%;
	height: auto;
	padding: 44px 0px 32px 0px;

	@media only screen and (max-width: 768px) {
		padding: 32px 0px 24px 0px;
	}
`;

export const FooterTopWrapper = styled.div`
	margin-bottom: 32px;
	display: flex;
	width: 100%;
	flex-wrap: nowrap;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		flex-wrap: wrap;
		flex-direction: row;
		margin-bottom: 18px;
	}
`;

export const FooterTopColumOne = styled.div`
	text-align: left;
	width: 200px;

	@media only screen and (max-width: 768px) {
		width: 100%;
		text-align: left;
		order: 2;
		padding: 0px;
		margin: 0px 0px 24px 0px;
		border-bottom: 1px solid #b6b6b6;
	}
`;
export const FooterColumInnerOne = styled.div<{
	isOpen: boolean;
}>`
	@media only screen and (max-width: 768px) {
		max-height: ${({ isOpen }) => (isOpen ? "250px" : "0")};
		overflow: hidden;
		transition: max-height 0.5s ease;
	}
`;
export const FooterColumInnerTwo = styled.div<{
	isOpen: boolean;
}>`
	@media only screen and (max-width: 768px) {
		max-height: ${({ isOpen }) => (isOpen ? "250px" : "0")};
		overflow: hidden;
		transition: max-height 0.5s ease;
	}
`;
export const ImgCollapse = styled.img`
	@media only screen and (max-width: 768px) {
	}
`;

export const FooterColumtTextInlineBlock = styled.div``;

export const FooterTopColumOneText = styled(Link)`
	color: var(--text-color);
	display: block;
	margin-bottom: 16px;
	text-decoration: none;
	cursor: pointer;
	font-size: 14px;
	line-height: 20px;
	font-weight: 500;

	&:hover {
		text-decoration: none;
		color: #7cc246;
		font-weight: 600;
	}
`;

export const FooterTopColumTitle = styled.div`
	color: var(--text-color);
	font-weight: 700;
	margin-bottom: 40px;
	@media only screen and (max-width: 768px) {
		margin-bottom: 24px;
	}
`;
export const FooterTopColumTwo = styled.div`
	max-width: 50vw;
	@media only screen and (max-width: 768px) {
		margin: 0px;
		width: 100%;
		max-width: 100%;
		text-align: left;
	}
`;

export const FooterColumTwoImg = styled.img`
	max-width: 350px;
	margin-bottom: 16px;
	@media only screen and (max-width: 768px) {
		max-width: 250px;
	}
`;
export const FooterColumDownLoadImg = styled.img`
	max-width: 132px;
	margin-bottom: 8px;
	display: block;
	@media only screen and (max-width: 768px) {
		display: inline;
		margin-right: 8px;
	}
`;
export const FooterColumIconImg = styled.img`
	max-width: 24px;
	height: 100%;
	margin-right: 6px;
	padding: 2px;
	vertical-align: middle;
`;

export const FooterTopColumTwoText = styled.div`
	margin-bottom: 16px;
	line-height: 20px;
	display: flex;
`;
export const FooterTopColumTwoTextHead = styled.div`
	margin-bottom: 16px;
	line-height: 20px;
`;

export const FooterTopColumTwoTextFontWeight = styled.div`
	display: inline-block;
	font-weight: 500;
	vertical-align: middle;
`;
export const FooterTopColumTwoTextFontWeight0 = styled.div`
	display: inline-block;
	font-weight: 400;
`;

export const FooterTopColumThree = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;

	@media only screen and (max-width: 768px) {
		order: 1;
		margin: 0px 0px 24px 0px;
		width: 100%;
		justify-content: left;
	}
`;
export const FooterColumText = styled.div`
	display: inline;
	font-weight: 500;
	vertical-align: middle;
`;
export const FooterBottomWrapper = styled.div`
	display: flex;
	align-items: start;
	flex-direction: column;
	text-align: center;
	font-size: 13px;
`;

export const FooterBottomText = styled.div`
	margin-bottom: 10px;
	text-align: center;
	width: 100%;
	line-height: 20px;
`;

export const ButtonFacebookWrap = styled.div``;

export const ButtonFacebook = styled.a``;

export const ButtonImgFacebook = styled.img`
	height: 36px;
	margin-right: 8px;
	&:hover {
		box-shadow: 0px 0px 10px #fff;
	}
	@media only screen and (max-width: 768px) {
		height: 28px;
	}
`;
export const Collapse = styled.div`
	display: none;
	@media only screen and (max-width: 768px) {
		display: inline;
		float: right;
	}
`;
export const ButtonYoutubeWrap = styled.div``;

export const ButtonYoutube = styled.a``;

export const ButtonImgYoutube = styled.img`
	height: 24px;
	&:hover {
		box-shadow: 0px 0px 10px #fff;
	}
	@media only screen and (max-width: 768px) {
		height: 16px;
	}
`;
