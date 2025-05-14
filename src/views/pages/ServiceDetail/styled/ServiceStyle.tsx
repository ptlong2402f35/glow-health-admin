import styled from "styled-components";
import { GlowLink } from "../../home/GlowLink";

export const ServiceDetailPageContentTopInfoButton = styled.button`
	width: 191px;
	height: 35px;
	padding: 8px 24px 8px 24px;
	border-radius: 12px;
	opacity: 0;
	background: linear-gradient(180deg, #6f8f63 0%, #5b7a4f 100%);
	border: none;
	color: #fff;
`;

export const ServiceDetailPageContentTopInfoAdressStar = styled.div`
	display: flex;
	margin-top: 8px;
	// margin-bottom: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		margin-top: 12px;
		margin-bottom: 12px;
	}
`;

export const ServiceDetailPageContentBottomGroupServiceContent = styled.span`
	margin-right: 4px;
	font-weight: 600;
`;
export const ServiceDetailNumberStar = styled.div`
	padding: 12px;
	border: 1px solid black;
	border-radius: 8px;
	// width: 38px;
	height: 38px;
	text-align: center;
	align-items: center;
	display: flex;
	margin-right: 8px;
`;

export const ServiceDetailReviewTitle = styled.div`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 16px;
	margin-top: 20px;
`;
export const ServiceDetailReviewWrap = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const ReviewNumberStarFilterWrapv2 = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 768px) {
		width: 430px;
	}
`;

export const ReviewNumberStarFilterDetailWrapv2 = styled.div`
	@media screen and (max-width: 768px) {
		overflow-x: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
`;

export const ServiceDetailReviewPageWrap = styled.div`
	@media screen and (max-width: 768px) {
		padding: 16px;
	}
`;

export const StaffDetailPageContentBottomReview = styled.div`
	margin: auto;
	// max-width: 1240px;
	// display: flex;
	background-color: #fff;
	padding: 16px;
	border-radius: 12px;
	padding-left: 20px;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;
	margin-top: 24px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 0;
		border-radius: 0;
		box-shadow: none;
	}
`;

export const ReviewPageInWrapLast = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 8px;
`;

export const ServiceHomePageImgCommentReviewWrap = styled.div`
	display: flex;
	overflow-x: auto;
	white-space: nowrap;
	scrollbar-width: none;
`;

export const ServiceHomePageImgCommentDetail = styled.img`
	margin-right: 8px;
	width: 72px;
	height: 72px;
	border-radius: 6px;
	object-fit: cover;
`;
export const ServiceDetailNumberStarWrap = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
	}
`;
export const ServiceDetailNumberStarRight = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ServiceDetailNumberStarRightInner = styled.div`
	display: flex;
	align-items: center;
`;
export const ServiceDetailNumberStarRightLabel = styled.div`
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	display: flex;
	margin-right: 4px;
`;
export const ServiceDetailNotiWrap = styled.div`
	display: flex;
	padding: 7px 12px;
	flex-direction: column;
	align-items: flex-start;
	border-radius: var(--Number-8, 8px);
	background: #f3f3f3;
	margin-bottom: 24px;
	margin-top: 12px;
`;
export const ServiceDetailNotiInner = styled.div`
	margin-bottom: 5px;
	margin-top: 5px;
	display: flex;
	align-items: center;
`;
export const ServiceReviewImgv2 = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 6px;
`;
export const StaffDetailPageContentBottomGroupServiceContentButtonLinkv2 = styled(GlowLink)`
	width: 191px;
	height: 35px;
	padding: 8px 24px;
	border-radius: 12px;
	background: linear-gradient(rgb(111, 143, 99) 0%, rgb(91, 122, 79) 100%);
	border: none;
	color: rgb(255, 255, 255);

	text-decoration: none;
`;
