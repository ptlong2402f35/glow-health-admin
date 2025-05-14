import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlowLink } from "../../home/GlowLink";

export const ListServiceWrap = styled(GlowLink)`
	width: calc(1026px / 2);
	background: rgb(255, 255, 255);
	border-radius: 8px;
	margin-bottom: 12px;
	border: 1px solid rgb(231, 231, 231);
	margin-right: 12px;
	max-height: 265px;
	display: flex;
	// font-size: 12px;
	padding: 10px;
	cursor: pointer;

	text-decoration: none;
	&:active {
		color: inherit;
	}

	&:visited {
		color: inherit;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-right: 0;
	}
`;
export const ListServiceLeft = styled.div`
	position: relative;
	width: 110px;
`;
export const ListServiceRight = styled.div`
	padding-left: 10px;
	width: 100%;
	color: #000;
`;
export const ListServiceNameStarWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 4px;
`;
export const ListServiceName = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const ListServiceStar = styled.div`
	display: flex;
	align-items: flex-end;
	font-weight: 600;
`;
export const ListServiceDistric = styled.span``;
export const ListServiceDistricWrap = styled.div`
	display: flex;
	align-items: flex-end;
	// margin-bottom:8px;
`;
export const ListServiceImg = styled.img`
	width: 110px;
	height: 110px;
	border-radius: 8px;
	object-fit: cover;
`;
export const ListServicePageItemDealImg = styled.img`
	position: absolute;
	top: -1px;
	right: 12px;
	width: 40px;
	height: 40px;
`;
export const ListServicePageItemDeal = styled.div`
	position: absolute;
	top: 0;
	right: 12px;
	width: 40px;
	height: 40px;
	// z-index: 1;
	font-weight: 700;
	color: #fff;
	padding-top: 4px;
	font-size: 12px;
`;
export const ListServiceNameService = styled.div`
	color: #080d08;
	font-size: 16px;
	line-height: 22px;
	font-weight: 500;
	margin-bottom: 4px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const ServicePageContentTopInfoAdressImg = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 4px;
`;
export const ServicePageContentBottomGroupServiceContentButton = styled.button`
	padding: 8px;
	border-radius: 8px;
	border: 1px solid #5b7a4f;
	background-color: #5b7a4f;
	color: #fff;
	font-size: 14px;
	float: right;
`;
export const ListServiceDistricDisplayReducedPrice = styled.span`
	color: #db281f;
	font-size: 16px;
	line-height: 24px;
	font-weight: 700;
	margin-right: 4px;
`;
export const ListServiceDistricDisplayOriginalPrice = styled.s`
	color: #b5b6b5;
	font-size: 14px;
	line-height: 22px;
`;
export const ListServiceCashBackName = styled.span`
	color: #838683;
	margin-right: 4px;
`;
export const ListServiceCashBackPrice = styled.span`
	color: #5b7a4f;
	font-weight: 600;
`;
export const ServiceHomePageImgIcon = styled.img`
	margin-right: 4px;
	width: 16px;
	height: 16px;
`;

export const GetALLReview = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
	margin-top: 20px;
`;
export const StaffDetailPageContentTopInfoStarTitlev2 = styled.div`
	display: flex;
	font-size: 16px;
	line-height: 24px;
	// font-weight:600;
	@media screen and (max-width: 1000px) {
		font-size: 16px;
		line-height: 24px;
		font-weight: 600;
		margin-bottom: 4px;
	}
`;

export const ServiceHomePageImgIconv2 = styled.img`
	margin-right: 6px;
	width: 24px;
	height: 24px;
	border-radius: 100px;
`;

export const ServiceHomePageImgComment = styled.img`
	margin-right: 6px;
	width: 56px;
	height: 56px;
	border-radius: 6px;
	object-fit: cover;
`;
export const ServiceHomePageImgCommentWrap = styled.div`
	display: flex;
	// width: 240px;
	flex-wrap: wrap;
	justify-content: flex-start;
	@media screen and (max-width: 768px) {
		flex-wrap: nowrap;
		width: max-content;
	}
`;
export const ServiceHomePageImgCommentS = styled.div`
	@media screen and (max-width: 768px) {
		overflow-x: scroll;
		width: 100%;
		overflow-x: auto;
		scrollbar-width: none;
	}
`;

export const ServiceHomePageImgNoteReview = styled.div`
	// width:75%;
	margin-bottom: 12px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const ReviewPageInWrap = styled.div<{ NoImg?: boolean }>`
	display: flex;
	display: ${(props) => (props.NoImg ? "none" : "flex")};
	align-items: center;
	margin-bottom: 8px;
`;
export const ReviewPageInWrapLast = styled(ReviewPageInWrap)`
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		margin-bottom: 8px;
	}
`;

export const ReviewPageWrap = styled.div`
	padding: 12px;
	border-radius: 12px;
	border: 1px solid var(--Alias-Color-Boder-Disable, #e6e7e6);
	margin-bottom: 12px;
	background-color: #fff;
`;
export const ReviewStaffServiceName = styled.div`
	color: #525652;
	font-size: 12px;
`;
export const ReviewStaffName = styled.div`
	font-weight: 500;
`;

export const ReviewNumberStar = styled.div`
	margin-right: 8px;
`;

export const ReviewNumberStarFilter = styled.div`
	display: flex;
	padding: 4px 12px;
	border-radius: 50px;
	border: 1px solid #b5b6b5;
	margin: 4px;
	cursor: pointer;
`;

export const ReviewNumberStarFilterWrap = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		width: 420px;
	}
`;
export const ReviewNumberStarFilterOverWrap = styled.div`
	overflow-x: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const StaffDetailPageContentTopInfoStarTitlev2Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 12px;
		align-items: start;
	}
`;
export const ReviewNumberStarFilterLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

export const GetReviewInnerWrap = styled.div`
	margin: 20px 0;
	@media screen and (max-width: 768px) {
		padding: 16px;
	}
`;
