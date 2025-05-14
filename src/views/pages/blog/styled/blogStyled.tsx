import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GlowLink } from "../../home/GlowLink";

export const PolicyMainInner = styled.div`
	max-width: 1440px;
	width: 85%;
	padding-top: 120px;
	padding-bottom: 80px;
	display: flex;
	margin: auto;
	@media screen and (max-width: 768px) {
		margin: 0;
    padding: 50px 16px 32px 16px;
    width: 100%;
    flex-direction: column;
}
	}
`;
export const BlogWrap = styled.div``;
export const BlogBannerWrap = styled.div`
	position: relative;
	text-align: center;
`;

export const BlogBannerImg = styled.img`
	width: 100%;

	@media screen and (max-width: 768px) {
		height: 220px;
		object-fit: cover;
		object-position: center center;
	}
`;
export const BlogBannerTitle = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 60px;
	line-height: 80px;
	font-weight: 400;
	// font-family: Yeseva-One;
	color: #fff;
	@media screen and (max-width: 768px) {
		font-size: 30px;
		line-height: 40px;
	}
`;
export const BlogListWrap = styled.div`
	background-color: #f8f8f8;
`;
export const BlogList = styled.div`
	position: relative;
	margin: 60px auto;
	max-width: 1440px;
	width: 85%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;

	@media screen and (max-width: 768px) {
		margin: 20px auto;
	}
`;
export const BlogListContentWrap = styled.div`
	width: 23%;
	margin-right: 1%;
	margin-left: 1%;
	margin-bottom: 32px;
	box-sizing: border-box;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-right: 0;
	}
`;

export const BlogListContentImg = styled.img`
	height: 220px;
	width: 100%;
	border-radius: 12px;
	margin-bottom: 16px;
	object-fit: cover;
	object-position: center;
`;
export const BlogListContentTitle = styled(GlowLink)`
	font-size: 20px;
	font-weight: 700;
	line-height: 24px;
	margin-bottom: 8px;
	text-decoration: none;
	color: #080d08;
`;
export const BlogListContentTitleP = styled.div`
	margin-bottom: 8px;
`;
export const BlogListContentContent = styled.div`
	color: #525652;
	font-size: 16px;
	margin-bottom: 8px;
	line-height: 20px;
`;
export const BlogListContentCreatedAt = styled.div`
	color: #838683;
	font-size: 14px;
`;

export const BlogDetailContentWrap = styled.div`
	background-color: #fff;
`;
export const BlogDetailContentHeaderWrap = styled.div`
	position: relative;
	text-align: center;
	overflow: hidden;
	width: 90%;
    margin: auto;
`;
export const BlogDetaiContentImg = styled.img`
	width: 100%;
	max-height: 600px;
	object-fit: cover;
	object-position: center;
	@media screen and (max-width: 768px) {
		max-height: 250px;
		object-fit: cover;
		object-position: center center;
	}
`;
export const BlogDetailContentOther = styled.div`
	// position: absolute;
	// top: 50%;
	// left: 50%;
	// transform: translate(-50%, -50%);

	// color: #fff;
`;
export const BlogDetailContentTitle = styled.h1`
	font-size: 48px;
	line-height: 58px;
	font-weight: 700;
	// font-family: Yeseva-One;
	margin-top: 40px;
	margin-bottom: 20px;
	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 24px;
		margin-top: 20px;
		margin-bottom: 12px;
	}
`;
export const BlogDetailContentCreatedAt = styled.div`
	font-size: 16px;
	line-height: 20px;
	font-weight: 400;
	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 17px;
	}
`;
export const BlogDetailContentInner = styled.div`
	position: relative;
	margin: auto;
	max-width: 1000px;
	width: 85%;
	font-family: SF-Pro-Display, sans-serif;
	font-size: 18px;
	text-align: justify;
	overflow-wrap: break-word;

	line-height: 26px;
	padding: 16px 0 48px;
	div {
		line-height: 26px;
	}
	p {
		font-size: 18px;
		line-height: 26px;
		margin: 1em 0;
	}
	iframe {
		display: block;
		margin: 1em auto;
		max-width: 600px;
		width: 600px;
		height: 300px;
		max-height: 300px;
	}
	strong {
		font-size: 18px;
		line-height: 26px;
		margin: 1em 0;
	}
	span {
		font-size: 18px;
		line-height: 26px;
		margin: 1em 0;
	}
	& h1 {
		font-weight: 700 !important;
		font-size: 32px !important;
		line-height: 42px !important;
		margin-bottom: 12px;
		margin-top: 12px;
		// color: var(--text-color1v2);
		font-weight: bold;
	}
	& h2 {
		margin-bottom: 12px;
		margin-top: 12px;
		// color: var(--text-color2v2);
		font-weight: bold;
		line-height: 36px;
	}
	& h3 {
		font-weight: 600 !important;
		font-size: 22px !important;
		line-height: 32px !important;
		margin: 4px 0 8px;
		// color: var(--text-color2v2);
		font-weight: bold;
	}
	& img {
		width: 100%;
	}
	& ul > li {
		margin-left: 40px;
	}
	@media screen and (max-width: 768px) {
		width: 90%;
		font-weight: 400 !important;
		font-size: 15px !important;
		line-height: 24px !important;
		font-size: 16px;
		p {
			font-size: 16px;
			line-height: 20px;
			margin: 1em 0;
		}
		strong {
			font-size: 16px;
			line-height: 20px;
			margin: 1em 0;
		}
		span {
			font-size: 16px;
			line-height: 20px;
			margin: 1em 0;
		}
		& h1 {
			font-weight: 700 !important;
			font-size: 18px !important;
			line-height: 26px !important;
		}
		& h2 {
			font-weight: 700 !important;
			font-size: 16px !important;
			line-height: 24px !important;
		}
		& h3 {
			font-weight: 700 !important;
			font-size: 15px !important;
			line-height: 24px !important;
		}
		& img {
			margin: 12px 0 18px;
			width: 100%;
		}
		& > ul > li {
			margin-left: 16px;
		}
		iframe {
			width: 100%;
			height: 250px;
		}
`;
export const BlogListMore = styled.div`
	position: relative;
	margin: 20px auto;
	max-width: 1440px;
	width: 90%;
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-between;
	justify-content: flex-start;
}
`;
export const BlogListMoreTitleWrap = styled.div`
	max-width: 1440px;
	width: 85%;
	margin: auto;
	display: flex;
	align-items: flex-end;
	padding-top: 32px;
	@media screen and (max-width: 768px) {
		justify-content: space-between;
	}
`;
export const BlogListMoreTitle = styled.div`
	font-weight: 600;
	font-size: 28px;
	line-height: 34px;
`;
export const BlogListSeeMore = styled(Link)`
	margin-left: 12px;
	color: #7a33d3;
	line-height: 24px;
	font-size: 14px;
	text-decoration: none;
`;
// export const BlogListMore = styled.div`

// `;
export const AdminContentBlogManagementWrap = styled.div`
	margin-bottom: 12px;
`;
