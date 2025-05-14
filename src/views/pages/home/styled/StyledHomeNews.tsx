import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeNewsWrap = styled.div`
	padding-top: 120px;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 768px) {
		padding-top: 53px;
	}
`;
export const HomeNewsCenter = styled.div`
	width: 1180px;
`;
export const HomeNewsHeader = styled.div`
	text-align: center;
	font-weight: 700;
	font-size: 32px;
	line-height: 42px;
	color: var(--primary-colorv2);
	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 28px;
	}
`;
export const HomeNewsContentList = styled.div`
	margin-top: 40px;
	margin-bottom: 30px;
	width: 100%;
	font-size: 20px;
	text-align: center;
`;
export const HomeNewsContentItems = styled(Link)`
	flex: 1;
	transition: 0.4s;
	cursor: pointer;
	text-decoration: none;
	@media screen and (max-width: 768px) {
		display: flex;
	}
	&:hover {
		& h2 {
			color: var(--primary-colorv2);
		}
		transform: translateY(-20px);
	}
`;
export const HomeNewsItemContenWrap = styled.div`
	@media screen and (max-width: 768px) {
		flex: 1;
		padding-left: 8px;
	}
`;
export const HomeNewsItemImgWrap = styled.div`
	width: 100%;
	border-radius: 12px;
	text-align: center;
	overflow: hidden;
	& img {
		width: 60%;
	}
	@media screen and (max-width: 768px) {
		height: 150px;
		flex: 1;
		& img {
			width: 70%;
		}
	}
`;
export const HomeNewsItemImg = styled.img`
	width: 100%;
	height: 100%;
`;
export const HomeNewsItemDate = styled.div`
	margin-top: 16px;
	@media screen and (max-width: 768px) {
		margin-top: 0px;
	}
`;

export const HomeNewsItemDateIcon = styled.img`
	width: 12px;
	height: 12px;
`;
export const HomeNewsItemDateText = styled.span`
	font-size: 12px;
	font-weight: 500;
	color: var(--text-color2v2);
`;
export const HomeNewsItemTitle = styled.h2`
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: var(--text-color1v2);
	margin-top: 8px;
	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 20px;
		font-weight: 500;
	}
`;
export const HomeNewsItemContent = styled.div`
	font-size: 14px;
	line-height: 18px;
	color: var(--text-color2v2);
	margin-top: 8px;
	display: block;
	display: -webkit-box;
	-webkit-line-clamp: 5;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const HomeNewsFooter = styled.div`
	margin-bottom: 80px;
	text-align: center;
	@media screen and (max-width: 768px) {
		margin-bottom: 40px;
	}
`;

export const HomeNewsFooterBtn = styled(Link)`
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	color: var(--primary-colorv2);
	cursor: pointer;
	text-decoration: none;
`;
export const BlogListPanelItemDateIcon = styled.img`
	display: inline;
	width: 12px;
	height: 12px;
	transform: translateY(2px);
	@media screen and max-width:768px {
		transform: translateY(2px);
	}
`;
export const BlogListPanelItemDateText = styled.div`
	display: inline;
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	color: var(--text-color2v2);

	@media screen and (max-width: 768px) {
		margin-left: 2px;
	}
`;
