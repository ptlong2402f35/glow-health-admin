import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { GlowLink } from "../../home/GlowLink";
import { boolean } from "yup";

export const ListStaffAtHomeContainer = styled.div`

}
`;

export const BreadCrumbStaffFlex = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 768px) {
		margin-left: 12px;
		overflow-x: auto;
		white-space: nowrap;
		line-height: 20px;
		-ms-overflow-style: none;
		scrollbar-width: none;
		::-webkit-scrollbar {
			display: none;
		}
		margin-right: 12px;
	}
`;

export const BreadCrumbStaffSpan = styled.span`
margin 0 8px;

`;

export const BreadCrumbStaffLink = styled(GlowLink)<{ lastItem?: boolean }>`
	text-decoration: none;
	color: ${(props) => (props.lastItem ? "black" : "#838683")};
	font-weight: ${(props) => (props.lastItem ? "400" : "400")};
	font-size: 14px;
	// color: #080D08;

	&:hover {
		font-weight: bold;
	}
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;
export const ExperienceSpaWrap = styled.div`
	background-color: #f8f8f8;
	margin: auto;
	max-width: 1240px;
	padding: 12px 0px;
	@media screen and (max-width: 768px) {
		padding: 8px 0px 12px;
	}
`;
export const ExDetailContentTitle = styled.div`
	font-size: 48px;
	line-height: 58px;
	font-weight: 400;
	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 24px;
	}
`;
export const ExperienceSpaContentWrap = styled.div`
	position: relative;
	// margin: 60px auto;
	max-width: 1050px;
	// width: 85%;
	// display: flex;
	@media screen and (max-width: 768px) {
		padding: 0 12px;
	}
`;

export const ExperienceSpaSearchWrap = styled(ExperienceSpaContentWrap)`
	max-width: 1260px;
`;

export const FillerExperienceSpaWrap = styled.div`
	width: 200px;
	margin-right: 20px;
	background: #fff;
	padding: 20px;
	border-radius: 8px;
`;

export const FillerExperienceSpaTitle = styled.div`
	color: #080d08;
	padding-bottom: 12px;
	border-bottom: 2px solid #ededed;
`;
export const ListExperienceSpaWrap = styled.div<{ suggest?: string; search?: boolean }>`
	width: ${(props) => (props.search ? "236px" : props.suggest === "Suggest" ? "181px" : "198px")};
	background: #fff;
	border-radius: 8px;
	margin-bottom: 12px;
	border: 1px solid #e7e7e7;
	margin-right: 12px;
	// height:${(props) => (props.suggest === "Suggest" ? "317px" : "266px")};
	// height:266px;
	@media screen and (max-width: 768px) {
		width: ${(props) => (props.suggest === "Suggest" ? "181px" : "calc(50% - 12px)")};
		margin-left: 6px;
		margin-right: 6px;
	}
`;

export const ListExperienceStoreWrap = styled.div<{ suggest?: string }>`
	width: ${(props) => (props.suggest === "Suggest" ? "248px" : "250px")};
	background: #fff;
	border-radius: 8px;
	margin-bottom: 12px;
	border: 1px solid #e7e7e7;
	margin-right: 12px;
	max-height: 265px;
	@media screen and (max-width: 768px) {
		width: ${(props) => (props.suggest === "Suggest" ? "248px" : "100%")};
		// margin-right: 0px;
		// margin-left:12px;
		margin-right: ${(props) => (props.suggest === "Suggest" ? "12px" : "0px")};
	}
`;
export const ListExperienceStaffWrap = styled(ListExperienceSpaWrap)`
	width: 18%;
	background: #6d766d;
	color: #fff;
`;
export const ListExperienceSpaImgWrap = styled(GlowLink)`
	width: 100%;
	position: relative;
	// color: #fff;
	text-decoration: none;
	color: var(--text-color0);
`;
export const ListExperienceSpaImg = styled.img`
	// height: 200px;
	width: 100%;
	object-fit: cover;
	border-radius: 8px 8px 0 0;
	aspect-ratio: 1 / 1;
`;

export const ListExperienceStoreImg = styled.img<{ suggest?: string }>`
	height: ${(props) => (props.suggest === "Suggest" ? "120px" : "150px")};
	width: 100%;
	object-fit: cover;
	border-radius: 8px 8px 0 0;
	@media screen and (max-width: 768px) {
		height: 200px;
	}
`;
export const ListExperienceStaffImg = styled(ListExperienceSpaImg)`
	height: 250px;
`;
export const ListExperienceSpaStarImg = styled.img`
	width: 14px;
	height: 14px;
`;

export const ListExperienceSpaStarImgNotColor = styled(ListExperienceSpaStarImg)`
	filter: grayscale(100%);
`;
export const ListExperienceSpaStar = styled.div`
    position: absolute;
    bottom: 16px;
    right: 12px;;
}
`;
export const ListExperienceSpaContentWrap = styled.div`
	padding: 4px 4px 8px;
	@media screen and (max-width: 768px) {
		padding: 0px 0px 4px;
	}
`;
export const ListExperienceSpaName = styled(GlowLink)`
	margin: 4px 12px;
	font-size: 14px;
	line-height: 22px;
	text-decoration: none;
	color: #080d08;
	display: flex;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	align-items: center;
	font-weight: 500;
`;
export const ListExperienceSpaAddress = styled.div`
	margin: 4px 12px;
	display: flex;
	font-weight: 400;
`;
export const ExperienceSpaInner = styled.div`
width:1050px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
	    // width: calc(100% - 200px);
		justify-content: flex-start;
		@media screen and (max-width: 768px) {
			flex-direction: row;
			// justify-content: space-evenly;
			width:100%;
		}
}
`;

export const ExperienceSpaSearchInner = styled(ExperienceSpaInner)`
	width: 1260px;
	@media screen and (max-width: 768px) {
		flex-direction: row;
		// justify-content: space-evenly;
		width: 100%;
	}
`;
export const ListExperienceSpaNameImg = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 4px;
`;
export const DetailSpaHeaderWrap = styled.div`
	margin: 60px auto;
	max-width: 1200px;
	width: 85%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;
export const DetailSpaHeaderInfo = styled.div``;
export const DetailSpaHeaderBook = styled.div``;
export const DetailSpaHeaderInfoTitle = styled.div`
	font-weight: 400;
	font-size: 48px;
	line-height: 60px;
	color: #080d08;
	// font-family: Yeseva-One;
`;
export const DetailSpaHeaderInfoAddress = styled.div`
	display: flex;
	margin-bottom: 12px;
`;
export const DetailSpaHeaderInfoTime = styled.div`
	display: flex;
`;
export const DetailSpaHeaderInfoImage = styled.img`
	width: 16px;
	height: 16px;
`;

export const WorkTimeListWrap = styled.div`
	display: flex;
	margin-bottom: 4px;
`;

export const WorkTimeListDate = styled.div`
	width: 200px;
`;
export const WorkTimeListMain = styled.div`
	margin-left: 12px;
`;
export const DetailSpaHeaderBookButton = styled.button`
	padding: 8px 40px;
	border-radius: 100px;
	background: rgb(91, 122, 79);
	border: 1px solid rgb(91, 122, 79);
	color: #fff;
`;

export const DetailSpaDescribeWrap = styled.div`
	margin: 60px auto;
	max-width: 1200px;
	width: 85%;
`;
export const DetailSpaDescribeTitle = styled.div`
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 12px;
`;
export const DetailSpaDescribeContent = styled.div``;
export const DetailSpaEvaluateContent = styled.div``;
export const DetailSpaEvaluateStar = styled.div``;
export const DetailSpaEvaluateContentStarColor = styled.span`
	color: #ffd530;
`;

export const FilterListStaffWrap = styled.div`
	width: calc(100% - 950px);
	margin-right: 32px;
	@media screen and (max-width: 768px) {
		width: 100%;
		overflow-x: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
`;

export const ListStaffAtHomeContent = styled.div`
	display: flex;
	justify-content: center;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const FilterListStaffProvince = styled.div`
	@media screen and (max-width: 768px) {
		display: flex;
		// overflow-x: auto;
	}
`;
export const ProductFilterWidth = styled.div`
@media screen and (max-width: 768px) {
width:100px`;
export const FilterListStaffProvinceFilter = styled.h2`
	height: 32px;
	font-weight: 500;
	border-bottom: 1px solid #ededed;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const FilterListStaffProvinceName = styled.h3`
	height: 28px;
	margin-top: 8px;
	color: #838683;
	font-size: 12px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const FilterListStaffDistrictName = styled.div`
	height: 20px;
	// margin-bottom: 8px;
	color: #838683;
	font-size: 12px;
	padding-left: 8px;
`;

export const FilterListStaffProvinceOption = styled.div`
	position: relative;
	padding-bottom: 16px;
	border-bottom: 1px solid rgb(237, 237, 237);
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const FilterListStaffProvinceSelect = styled.div`
	min-height: 28px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 8px;
	padding-left: 8px;
	border-radius: 8px;

	&:hover {
		background-color: #e0e0e0;
	}
	@media screen and (max-width: 768px) {
		padding-left: 0;
	}
`;
export const FilterListStaffProvinceSelectDistrict = styled.div`
	position: absolute;
	left: calc(100%);
	top: 0;
	z-index: 1;
	width: 150px;
	max-height: 400px;
	border-radius: 8px;
	padding: 12px;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`;

export const FilterListStaffProvinceSelectLink = styled(GlowLink)`
	text-decoration: none;
	color: var(--text-color0);
	line-height: 22px;
`;

export const FilterListStaffProvinceSelectLinkFilter = styled(GlowLink)`
	text-decoration: none;
	color: var(--text-color0);
	margin-right: 12px;
`;
export const FilterListStaffProvinceSelectLinkFilterWrap = styled.div`
	display: block;
	padding: 4px 0;
`;

export const FilterListStaffDicSelectLink = styled(FilterListStaffProvinceSelectLink)`
	height: 28px;
	// 	padding-right: 8px;
	padding-left: 8px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:hover {
		background-color: #e0e0e0;
	}
`;

export const FilterListStaffGenderOption = styled.div`
	padding-bottom: 16px;
	border-bottom: 1px solid rgb(237, 237, 237);
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const FilterListStaffStarOption = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StaffDetailPageTitle = styled.h1`
	font-weight: 500;
	font-size: 28px;
	line-height: 36px;
	margin-top: 4px;
	margin-bottom: 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	@media screen and (max-width: 768px) {
		// font-size:24px;
		// line-height:40px;
		font-size: 24px;
		line-height: 30px;
		margin-left: 12px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
`;
export const StaffDetailPageTitlev2 = styled(StaffDetailPageTitle)`
	margin-bottom: 0px;
`;
export const StaffDetailPageWrap = styled.div`
	background-color: #f8f8f8;
	margin: auto;
	max-width: 1280px;
	padding: 8px 0px 4px;
	@media screen and (max-width: 768px) {
		background-color: #fff;
		// padding: 12px 0px;
		padding: 0px;
		padding-top: 4px;
		padding-bottom: 8px;
	}
`;
export const StaffDetailPageContentTop = styled.div`
	margin: auto;
	// max-width: 1240px;
	display: flex;
	background-color: #fff;
	padding: 16px;
	border-radius: 12px;
	padding-left: 20px;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;
	margin-top: 12px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 0;
		border-radius: 0;
		box-shadow: none;
		margin-top: 4px;
	}
`;

export const StaffDetailPageContentTopImg = styled.div`
	width: 500px;
	display: flex;
	justify-content: space-between;
	padding-right: 32px;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0px;
		position: relative;
	}
`;

export const StaffDetailPageContentTopImgStore = styled.div<{ atHome?: boolean }>`
	width: ${(props) => (props.atHome ? "max-content" : "50%")};
	// width:50%;
	display: flex;
	justify-content: flex-start;
	padding-right: 32px;
	flex-direction: column;
	position: relative;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0;
	}
`;
export const StaffDetailPageContentTopInfo = styled.div`
	width: 700px;
	@media screen and (max-width: 768px) {
		width: auto;
		padding: 12px;
		margin: 10px;
		border: 1px solid rgb(225, 225, 225);
		box-shadow: 0px 2px 5.6px 0px #080d0814;
		border-radius: 12px;
	}
`;

export const StaffDetailPageContentTopInfoName = styled.h1`
	// font-family: SF-Pro-Text;
	font-size: 28px;
	line-height: 40px;
	display: flex;
	align-items: center;
	font-weight: 500;
	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 36px;
	}
`;

export const StaffDetailPageContentTopInfoNamev2 = styled.h1`
	// font-family: SF-Pro-Text;
	font-size: 28px;
	line-height: 40px;
	display: flex;
	align-items: flex-start;
	font-weight: 500;
	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 36px;
	}
`;
export const StaffDetailPageContentTopInfoNameWrap = styled.div`
	display: flex;
`;

export const StaffDetailPageContentTopInfoNameService = styled(StaffDetailPageContentTopInfoNamev2)`
	font-size: 28px;
	font-weight: 500;
	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 36px;
	}
`;

export const StaffDetailPageContentTopInfoAdressStar = styled.div`
	display: flex;
	margin-top: 20px;
	// margin-bottom: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		margin-top: 12px;
		// margin-bottom: 12px;
	}
`;

export const StaffDetailPageContentTopInfoAdress = styled.div`
	margin-bottom: 12px;
	align-items: center;
	display: flex;
`;

export const StaffDetailKMs = styled.div`
	margin: 0 4px;
`;

export const StaffDetailAdress = styled.u`
	// margin-bottom: 0 4px;
`;

export const StaffDetailPageContentTopInfoAdressv2 = styled.div`
	margin-bottom: 12px;
	align-items: center;
	display: none;
`;

export const StaffDetailPageContentTopInfoStar = styled.div`
	// margin-left: 20px;
	margin-bottom: 12px;
	align-items: center;
	display: flex;
`;

export const StaffDetailPageContentTopInfoStarU = styled.span`
	margin-left: 4px;
`;

export const StaffDetailPageContentTopInfoStarTime = styled.div`
	margin-bottom: 8px;
	align-items: flex-start;
	display: flex;
	@media screen and (max-width: 768px) {
		align-items: flex-start;
	}
`;

export const StaffDetailPageContentTopInfoStarReview = styled.div`
	// margin-left: 20px;
	margin: 12px 0;
	align-items: center;
	display: flex;
	@media screen and (max-width: 768px) {
		justify-content: space-around;
	}
`;

export const StaffDetailPageContentTopInfoDescription = styled.div`
	margin-bottom: 20px;
`;

export const StaffDetailPageContentTopInfoDescriptionService = styled.div`
	// margin-bottom:20px;
`;

export const StaffDetailPageContentTopInfoDescriptionName = styled.h3`
	font-size: 16px;
	font-weight: 600;
	line-height: 22px;
`;

export const StaffDetailPageContentTopInfoDescriptionContent = styled.div`
	font-size: 14px;
	font-weight: 400;
	line-height: 22px;
	margin-bottom: 12px;
	white-space: pre-wrap;
`;
export const StaffDetailPageContentTopInfoDescriptionContentService = styled(
	StaffDetailPageContentTopInfoDescriptionContent
)`
	margin-bottom: 0px;
`;
export const StaffDetailPageContentTopInfoHastag = styled.div`
	margin-top: 12px;
`;

export const StaffDetailPageContentTopInfoHastagLink = styled(GlowLink)`
	margin-right: 8px;
	text-decoration: none;
	color: #7a33d3;
`;

export const StaffDetailPageContentTopInfoStarWrap = styled.div`
	@media screen and (max-width: 1000px) {
		display: none;
	}
`;
export const StaffDetailPageContentTopInfoStarWrapStore = styled.div`
	margin: 40px auto;
	// max-width: 1240px;
	@media screen and (max-width: 1000px) {
		margin: 20px 12px;
	}
`;
export const StaffDetailPageContentTopInfoStarResWrap = styled.div`
		display:none;
@media screen and (max-width: 1000px) {
	    background-color: rgb(255, 255, 255);
    display: block;
    width: auto;
    padding: 16px;
    /* margin: 16px; */
    /* border: 1px solid rgb(225, 225, 225); */
    /* box-shadow: rgba(8, 13, 8, 0.08) 0px 2px 5.6px 0px; */
    border-radius: 12px;
}
	}
`;
export const StaffDetailPageContentTopInfoStarTitle = styled.div`
	display: flex;
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
	align-items: center;
	@media screen and (max-width: 1000px) {
		font-size: 16px;
		line-height: 24px;
		// font-weight:600;
	}
`;
export const StaffDetailPageContentTopInfoStarList = styled.div`
	display: flex;
	overflow-x: hidden;
`;
export const StaffDetailPageContentTopInfoStarListSSR = styled.div`
	display: flex;
	overflow-x: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;
export const StaffDetailPageContentTopInfoStarListInnerSSR = styled.div`
	display: flex;
`;
export const StaffDetailPageContentTopInfoStarListWrap = styled.div`
	position: relative;
`;

export const AutoPlaySwipeableViewsStaffReview = styled(SwipeableViews)`
	display: flex;
	width: 234px;
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
		// height: 455px;
		width: 300px;
		margin-bottom: 0;

		& > div {
			height: 100%;
		}
	}
`;

export const AutoPlaySwipeableViewsStaffReviewStore = styled(SwipeableViews)`
	display: flex;
	width: calc(25% + 8px);
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

export const AutoPlaySwipeableViewsStaffReviewStoreSSRInner = styled.div<{
	isSelected?: boolean;
	atHome?: boolean;
}>`
	display: flex;
	& div {
		margin-right: 8px;
		width: max-content;
		height: 82px;
	}
	& img {
		width: ${(props) => (props.atHome ? "82px" : "132px")};
		object-fit: cover;
		height: 100%;
		border-radius: 8px;
		border: ${({ isSelected }) => (isSelected ? "2px solid #5B7A4F" : "none")};
	}
`;

export const AutoPlaySwipeableViewsStaffReviewImg = styled.img`
	width: 14px;
	height: 14px;
	margin-right: 4px;
`;
export const AutoPlaySwipeableViewsStaffReviewImgv2 = styled.img`
	width: 14px;
	height: 14px;
`;
export const AutoPlaySwipeableViewsStaffButtonReviewImg = styled.img`
	width: 32px;
	height: 32px;
	margin-right: 8px;

	@media screen and (max-width: 768px) {
		width: 24px;
		height: 24px;
	}
`;

export const ReviewSwipeableViewStore = styled.div`
	padding: 12px 16px;
	// box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;
	border-radius: 12px;
	height: 110px;
	margin: 12px 4px 12px 6px;
	background: #fff;
	box-shadow: 0px 2px 6px 0px #080d0833;
`;

export const ReviewSwipeableViewStoreSSR = styled(ReviewSwipeableViewStore)`
	width: 200px;
`;

export const ReviewSwipeableView = styled.div`
	padding: 12px 16px;
	box-shadow: rgba(8, 13, 8, 0.08) 0px 2px 5.6px 0px;
	border-radius: 12px;
	height: 110px;
	margin: 20px 4px 20px 6px;
	border: 1px solid rgb(225, 225, 225);
`;
export const ReviewSwipeableViewSSR = styled(ReviewSwipeableView)`
	width: 200px;
`;
export const NoteReviewSwipeableView = styled.div`
	max-height: 100px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	font-size: 14px;
	line-height: 22px;
`;

export const ReviewPageButtonLeft = styled.button`
	position: absolute;
	top: calc(50% - 14px);
	left: -24px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;
	background-color: #fff;

	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const ReviewPageButtonRigth = styled.button`
	position: absolute;
	top: calc(50% - 14px);
	right: -30px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;
	background-color: #fff;
	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const ReviewPageButtonLeftSSR = styled.div`
	& button {
		position: absolute;
		top: calc(50% - 14px);
		left: -24px;
		width: 28px;
		height: 28px;
		border-radius: 100px;
		border: 1px solid #e6e7e6;
		transition: transform 0.3s ease;
		background-color: #fff;

		&:hover {
			transform: scale(1.5);
			border: 2px solid #ababab;
		}
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;
export const ReviewPageButtonRigthSSR = styled.div`
	& button {
		position: absolute;
		top: calc(50% - 14px);
		right: -30px;
		width: 28px;
		height: 28px;
		border-radius: 100px;
		border: 1px solid #e6e7e6;
		transition: transform 0.3s ease;
		background-color: #fff;
		&:hover {
			transform: scale(1.5);
			border: 2px solid #ababab;
		}
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const ReviewPageButtonLeftStore = styled.button`
	position: absolute;
	top: 38%;
	left: 4px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;
	background-color: #fff;

	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		top: 50%;
		left: 16px;
	}
`;
export const ReviewPageButtonRigthStore = styled.button`
	position: absolute;
	top: 38%;
	right: 36px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;
	background-color: #fff;
	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		top: 50%;
		right: 16px;
	}
`;

export const ReviewPageButtonLeftStoreSSR = styled.div`
	& button {
		position: absolute;
		top: 38%;
		left: 4px;
		width: 28px;
		height: 28px;
		border-radius: 100px;
		border: 1px solid #e6e7e6;
		transition: transform 0.3s ease;
		background-color: #fff;

		&:hover {
			transform: scale(1.5);
			border: 2px solid #ababab;
		}
		@media screen and (max-width: 768px) {
			top: 50%;
			left: 16px;
		}
	}
`;
export const ReviewPageButtonRigthStoreSSR = styled.div`
	& button {
		position: absolute;
		top: 38%;
		right: 36px;
		width: 28px;
		height: 28px;
		border-radius: 100px;
		border: 1px solid #e6e7e6;
		transition: transform 0.3s ease;
		background-color: #fff;
		&:hover {
			transform: scale(1.5);
			border: 2px solid #ababab;
		}
		@media screen and (max-width: 768px) {
			top: 50%;
			right: 16px;
		}
	}
`;

export const StaffDetailPageContentBottom = styled.div`
	margin: 40px auto;
	// max-width: 1240px;
	display: flex;
	background-color: #fff;
	padding: 16px;
	border-radius: 12px;
	padding-left: 20px;
	flex-direction: column;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;
	margin: 20px auto;
	@media screen and (max-width: 768px) {
		margin: auto;
	}
`;
export const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export const BannerHomePageAutoPlaySwipeableViews = styled(AutoPlaySwipeableViews)`
	display: flex;
	width: calc(100% / 3);
	overflow-x: visible !important;
	// margin-top:20px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const DotsWrapper = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		margin-top: 10px;
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const Dot = styled.div<{ active: boolean }>`
	width: 10px;
	height: 10px;
	margin: 0 5px;
	border-radius: 50%;
	background-color: ${(props) => (props.active ? "#fff" : "#ccc")};
	transition: background-color 0.3s;
`;
export const BannerHomePageAutoPlaySwipeableViewsRes = styled(AutoPlaySwipeableViews)`
	display: none;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: flex;
		overflow-x: visible !important;
	}
`;
export const StaffDetailPageContentAutoPlaySwipeableViewsRes = styled(SwipeableViews)`
	display: none;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		// overflow-x: visible !important;
		// height: 400px;
	}
`;

export const ServiceDetailPageViewsRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		// overflow-x: visible !important;
		// height: 400px;
	}
`;
export const StaffDetailPageContentAutoPlaySwipeableViewsResImgWrap = styled.div`
	// width: 100%;
	height: 100%;
	// object-fit:cover;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		height: 100%;
		aspect-ratio: 1 / 1;
	}
`;
export const StaffDetailPageContentAutoPlaySwipeableViewsResImg = styled.img`
	// position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const StaffDetailPageContentAutoPlaySwipeableViewsResStoreImgWrap = styled.div<{ atHome?: boolean }>`
	position: relative;
	width: 100%;
	padding-top: ${(props) => (props.atHome ? "100%" : "60%")};
	overflow: hidden;
`;
export const StaffDetailPageContentAutoPlaySwipeableViewsResStoreImg = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
export const BannerHomePageAutoPlaySwipeableViewsDisable = styled.div`
	display: flex;
	// width:100
`;
export const StaffDetailPageContentTopImgInnerWrap = styled.div`
	& div {
		width: 90px;
		height: 120px;
		margin-bottom: 12px;
	}
	& img {
		width: 100%;
		border-radius: 8px;
		object-fit: cover;
		height: 100%;
	}
`;
export const StaffDetailPageContentTopImgInner = styled.div`
	width: 90px;
	height: 120px;
	margin-bottom: 12px;
`;
export const StaffDetailPageContentTopImgInnerStore = styled.div<{ atHome?: boolean }>`
	// width: 132px;
	width: ${(props) => (props.atHome ? "max-content" : "132px")};
	height: ${(props) => (props.atHome ? "82px" : "72px")};
	// margin-right: 8px;
`;
export const StaffDetailPageContentTopImgInnerStoreSSR = styled(StaffDetailPageContentTopImgInnerStore)<{
	atHome?: boolean;
}>`
	margin-right: 8px;
`;
export const StaffDetailPageContentTopImgInnerChild = styled.img<{
	isSelected?: boolean;
}>`
	width: 100%;
	border-radius: 8px;
	border: ${({ isSelected }) => (isSelected ? "2px solid #5B7A4F" : "none")};
	object-fit: cover;
	height: 100%;
`;

export const StaffDetailPageContentTopImgInnerChildStore = styled.img<{
	isSelected?: boolean;
	atHome?: boolean;
}>`
	// width: 132px;
	width: ${(props) => (props.atHome ? "82px" : "132px")};
	object-fit: cover;
	height: 100%;
	border-radius: 8px;
	border: ${({ isSelected }) => (isSelected ? "2px solid #5B7A4F" : "none")};
`;

export const StaffDetailPageContentTopImgLeft = styled.div`
	width: 350px;
	height: 500px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const StaffDetailPageContentTopImgLeftStore = styled.div`
	// width: 350px;
	height: 350px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StaffDetailPageContentTopImgLeftStoreSSR = styled.div`
	// width: 350px;
	height: 350px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const StaffDetailPageContentTopImgLeftStoreResSSR = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: block;
	}
`;

export const StaffDetailPageContentTopImgLeftKTV = styled.div`
	width: 350px;
	height: 350px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const StaffDetailPageContentTopImgLeftKTVSSR = styled.div`
	width: 350px;
	height: 350px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const StaffDetailPageContentTopImgRight = styled.div`
	width: 100px;
	max-height: 500px;
	overflow-y: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StaffDetailPageContentTopImgRightSSR = styled(StaffDetailPageContentTopImgRight)`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;
export const StaffDetailPageContentTopImgRightStore = styled.div`
	display: flex;
	overflow-y: hidden;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
	margin-top: 12px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StaffDetailPageContentTopImgRightStoreSSR = styled.div`
	display: flex;
	overflow-y: hidden;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
	margin-top: 12px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StaffDetailPageContentTopImgRightKTV = styled.div`
	display: flex;
	overflow-y: hidden;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
	margin-top: 12px;
	width: 350px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StaffDetailPageContentTopImgRightKTVSSR = styled.div`
	display: flex;
	overflow-y: hidden;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
	margin-top: 12px;
	width: 350px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const StaffDetailPageContentTopImgRightKTVSSRInner = styled.div<{
	isSelected?: boolean;
	atHome?: boolean;
}>`
	display: flex;
	& div {
		margin-right: 8px;
		width: max-content;
		height: 82px;
	}
	& img {
		width: ${(props) => (props.atHome ? "82px" : "132px")};
		object-fit: cover;
		height: 100%;
		border-radius: 8px;
		border: ${({ isSelected }) => (isSelected ? "2px solid #5B7A4F" : "none")};
	}
`;

export const StaffDetailPageContentTopImgLeftChild = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	object-fit: cover;
`;

export const StaffDetailPageContentTopImgLeftChildSSR = styled(StaffDetailPageContentTopImgLeftChild)`
	@media screen and (max-width: 768px) {
		border-radius: 0px;
	}
`;

export const StaffDetailPageContentTopInfoStarImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;

export const CustomRadioStarImg = styled.img`
	width: 20px;
	height: 20px;
`;

export const CustomRadioInput = styled.input`
	display: none;
`;

export const CustomRadioLabel = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	padding-left: 25px;
	cursor: pointer;
	margin-bottom: 8px;
	height: 22px;
	pointer-events: none;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 18px;
		height: 18px;
		border: 2px solid #b5b6b5;
		border-radius: 50%;
	}

	&:after {
		content: "";
		position: absolute;
		top: 3px;
		left: 3px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #5b7a4f;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	&:hover:before {
		border-color: #4caf50;
	}

	&:hover:after {
		background-color: #4caf50;
	}

	${CustomRadioInput}:checked + &::after {
		opacity: 1;
	}
`;

export const CustomRadioStarWImg = styled.img`
	position: absolute;
	top: 5px;
	left: 5px;
	width: 12px;
	height: 12px;
`;

export const ExperienceSpaWrapPageTitle = styled.h1`
	// font-family: SF Pro Text;
	font-size: 28px;
	font-weight: 400;
	line-height: 40px;
	text-align: left;
	margin: 4px 0px 12px;
	@media screen and (max-width: 768px) {
		margin: 0 12px 12px;
		font-size: 24px;
		// font-weight: 600;
		line-height: 32px;
	}
`;

export const StaffDetailPageContentTopInfoAdressImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;

export const StaffDetailPageContentTopInfoButton = styled.div`
	width: 191px;
	height: 35px;
	padding: 8px 24px 8px 24px;
	border-radius: 24px;
	// opacity: 0;
	background: linear-gradient(180deg, #6f8f63 0%, #5b7a4f 100%);
	border: none;
	color: #fff;
	margin-top: 12px;
`;
export const StaffDetailPageContentTopInfoButtonv2 = styled(StaffDetailPageContentTopInfoButton)`
	width: max-content;
`;

export const StaffDetailPageContentTopInfoButtonv2Link = styled.a`
	width: max-content;
	text-decoration: none;
`;

export const StaffDetailPageContentTopInfoButtonv3 = styled.a`
	text-decoration: none;
	width: max-content;
	height: 35px;
	padding: 8px 24px 8px 24px;
	border-radius: 24px;
	// opacity: 0;
	background: linear-gradient(180deg, #6f8f63 0%, #5b7a4f 100%);
	border: none;
	color: #fff;
	margin-top: 12px;
	margin-bottom: 12px;
`;

export const StaffDetailPageContentTopInfoStarTitleImg = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 8px;
`;

export const StaffDetailPageContentBottomGroupName = styled.h2`
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	margin-bottom: 8px;
`;

export const StaffDetailPageContentBottomGroup = styled.div`
	margin-bottom: 12px;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
	}
`;

export const StaffDetailPageContentBottomGroupServiceWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const StaffDetailPageContentBottomGroupService = styled(GlowLink)`
	cursor: pointer;

	text-decoration: none;
	&:active {
		color: inherit;
	}
	&:visited {
		color: inherit;
	}

	// width: calc(25% - 14px);
	width:100%;
	min-height: 108px;
	padding: 12px;
	border-radius: 12px;
	// box-shadow: 0px 4px 16px 0px #080D080A;
	// box-shadow: rgba(8, 13, 8, 0.08) 0px 2px 5.6px 0px;
	border: 1px solid rgb(225, 225, 225);
	margin-right: 18px;
	margin-bottom: 18px;
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
	&:nth-child(4n) {
		margin-right: 0;
	}
`;

export const StaffDetailPageContentBottomGroupServiceDiv = styled.div`
	cursor: pointer;

	text-decoration: none;
	&:active {
		color: inherit;
	}
	&:visited {
		color: inherit;
	}

	// width: calc(25% - 14px);
	width:100%;
	min-height: 108px;
	padding: 12px;
	border-radius: 12px;
	// box-shadow: 0px 4px 16px 0px #080D080A;
	// box-shadow: rgba(8, 13, 8, 0.08) 0px 2px 5.6px 0px;
	border: 1px solid rgb(225, 225, 225);
	margin-right: 18px;
	margin-bottom: 18px;
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
	// &:nth-child(4n) {
	// 	margin-right: 0;
	// }
`;
export const StaffDetailPageContentBottomGroupServiceKTV = styled.div`
	width: calc(50% - 6px);
	min-height: 108px;
	padding: 12px;
	border-radius: 12px;
	// box-shadow: 0px 4px 16px 0px #080D080A;
	// box-shadow: rgba(8, 13, 8, 0.08) 0px 2px 5.6px 0px;
	border: 1px solid rgb(225, 225, 225);
	margin-bottom: 12px;
	&:nth-child(odd) {
		margin-right: 12px;
		margin-left: 0;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const StaffDetailPageContentBottomGroupServiceName = styled.div`
	display: block;
	color: #080d08;
	font-size: 14px;
	font-weight: 500;
	line-height: 22px;
`;

export const StaffDetailPageContentBottomGroupServiceContent = styled.div`
	display: flex;
	justify-content: space-between;
	    align-items: flex-start;
    flex-direction: column;
`;
export const StaffDetailPageContentBottomGroupServiceContentDetail = styled.span`
	color: #080D08;
font-size: 14px;
font-weight: 400;
line-height: 22px;
`;

export const StaffDetailPageContentBottomGroupServiceContentDetailTitle = styled.span`
	color:  #080D08;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px;
margin-bottom: 4px;
`;

export const StaffDetailPageContentBottomGroupServiceContentKTV = styled.div`
    display: flex;
    align-items: center;
	overflow-x: auto;
		-ms-overflow-style: none;
		scrollbar-width: none;
		::-webkit-scrollbar {
			display: none;
		}s

`;

export const StaffDetailPageContentBottomGroupServiceContentNumber = styled.span`
	color: #5b7a4f;
`;
export const StaffDetailPageContentBottomGroupServiceContentTitle = styled.span`
	color: #838683;
`;

export const StaffDetailPageContentBottomGroupServiceContentDiv = styled.div`
	margin-right: 8px;
`;

export const StaffDetailPageContentBottomGroupServiceContentButtonKTV = styled.button`
	width: 81px;
	height: 28px;
	// padding: 8px 12px;
	border-radius: 100px;
	border: 1px solid #5b7a4f;
	background-color: #5b7a4f;
	color: #fff;
`;
export const StaffDetailPageContentBottomGroupServiceContentButton = styled.button`
	// width:81px;
	// height: 28px;
	padding: 8px;
	border-radius: 8px;
	border: 1px solid #5b7a4f;
	background-color: #5b7a4f;
	color: #fff;
`;
export const StaffDetailPageContentBottomGroupServiceContentButtonLink = styled(GlowLink)`
	text-decoration: none;
	// width:81px;
	// height: 28px;
	padding: 8px;
	border-radius: 8px;
	border: 1px solid #5b7a4f;
	background-color: #5b7a4f;
	color: #fff;
	float: right;
`;

export const StaffDetailPageContentBottomGroupServiceContentButtonDiv = styled.div`
	text-decoration: none;
	// width:81px;
	// height: 28px;
	padding: 8px;
	border-radius: 8px;
	border: 1px solid #5b7a4f;
	background-color: #5b7a4f;
	color: #fff;
	float: right;
`;

export const StaffDetailPageContentBottomGroupSolid = styled.div`
	border: 0.5px solid #e6e7e6;
	// margin-bottom:12px;
	// display:none;
	margin-bottom: 12px;
`;

export const StaffDetailPageContentBottomGroupServicePriceKTV = styled.div`
	font-size: 20px;
	line-height: 20px;
	color: #080d08;
	font-weight: 600;
	margin: 12px 0;

	// display: flex;
	//     justify-content: space-between;
`;
export const StaffDetailPageContentBottomGroupServicePrice = styled.div`
	// font-size:20px;
	// line-height:20px;
	color: #080d08;
	// font-weight:600;
	margin: 12px 0;

	display: flex;
	justify-content: space-between;
`;
export const StaffDetailPageContentBottomGroupServiceUnitWrap = styled.div`
	display: flex;
	align-items: center;
`;
export const StaffDetailPageContentBottomGroupServiceUnitImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;
export const StaffDetailPageContentBottomGroupServiceUnit = styled.div``;
export const StaffDetailPageContentBottomGroupServiceReducePriceWrap = styled.div`
	display: flex;
	text-align: center;
	align-items: flex-end;
`;

export const StaffDetailPageContentBottomGroupServiceOriginalPrice = styled.s`
	font-size: 14px;
	line-height: 22px;
	color: var(--alias-color-text-icon-tertiary, #838683);
	font-weight: 400;
	margin: 12px 12px 12px 0;
`;
export const StaffDetailPageContentBottomGroupServiceMap = styled.div``;

export const StaffDetailPageContentBottomGroupServiceReducePrice = styled.div`
	font-size: 18px;
	line-height: 24px;
	color: #db281f;
	font-weight: 600;
`;
export const StaffDetailPageContentBottomGroupServiceReducedValue = styled.s`
	font-size: 14px;
	line-height: 22px;
	color: #838683;
	font-weight: 400;
	margin-right: 4px;
`;

export const DialogFilterGenderWrap = styled.div`
	margin-bottom: 24px;
`;

export const ButtonOpenDialogFilter = styled.button`
	padding: 4px 12px;
	border-radius: 100px;
	border: 1px solid #fff;
	background-color: #fff;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;
	margin-right: 8px;
	margin-bottom: 12px;
	font-family: SF-Pro-Display;
	min-width:105px;
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
	}
`;
export const ButtonOpenDialogFilterWrap = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
		padding-left: 12px;
		padding-bottom: 12px;
		width: max-content;
		overflow-x: auto;
		padding-top: 4px;
	}
`;
export const ButtonOpenDialogFilterName = styled.span`
	margin-right: 4px;
	color: #080d08;
`;

export const WorkTimeWrap = styled.div`
	display: flex;
	margin-bottom: 8px;
		color: var(--alias-color-text-icon-black, #080D08);
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px;
`;
export const WorkTimeMapWrap = styled(WorkTimeWrap)`
	margin-bottom: 0px;
`;
export const WorkTimeDate = styled.div`
	width: 150px;
`;
export const WorkTimeDateMap = styled.div`
	width: 110px;
`;
export const WorkTimeHour = styled.div``;
export const StaffDetailPageContentTopInfoReviewImage = styled.img`
	width: 36px;
	height: 36px;
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		width: 25px;
		height: 25px;
	}
`;
export const StaffDetailPageContentTopInfoReview = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 34px;
	@media screen and (max-width: 768px) {
		margin-right: 0px;
	}
`;
export const StaffDetailPageContentTopInfoReviewRate = styled.div`
	margin-bottom: 8px;
`;
export const StaffDetailPageContentTopInfoReviewRateInner = styled.span`
	margin-bottom: 8px;
	font-size: 20px;
	font-weight: 700;
`;
export const StaffDetailPageContentTopInfoReviewStar = styled.div`
	margin-bottom: 8px;
`;
export const StaffDetailPageContentTopInfoReviewShortName = styled.div`
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		font-size: 11px;
	}
`;

export const AutoPlaySwipeableViewsStaffButtonReviewWrap = styled.div`
	display: flex;
	align-items: center;
	margin: 4px 0;
	@media screen and (max-width: 768px) {
		justify-content: space-between;
	}
`;

export const AutoPlaySwipeableViewsStaffButtonReviewWrapWrap = styled.div`
	cursor: pointer;
	display:none;
`;

export const AutoPlaySwipeableViewsStaffButtonReview = styled.div`
	font-size: 20px;
	font-weight: 600;
	line-height: 30px;
	margin-right: 40px;
	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 22px;
		margin-right: 0px;
	}
`;

export const StaffDetailPageContentDescription = styled.div`
	margin: 40px auto;
	// max-width: 1240px;
	display: flex;
	background-color: #fff;
	padding: 16px;
	border-radius: 12px;
	padding-left: 20px;
	flex-direction: column;
	box-shadow: 0px 2px 5.599999904632568px 0px #080d0814;
	margin: 20px auto;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StaffDetailPageContentDescriptionRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		max-width: 1240px;
		display: flex;
		background-color: #fff;
		flex-direction: column;
		margin: 20px auto;
	}
`;

export const StaffDetailPageWorkerAutoPlaySwipeableViewsWrap = styled.div`
	// overflow-x: hidden;
	position: relative;
	@media screen and (max-width: 768px) {
		padding: 0 12px 12px 12px;
	}
`;

export const StaffDetailPageWorkerAutoPlaySwipeableViews = styled.div`
	display: flex;
	width: 100%;
	overflow-x: auto;
	scroll-behavior: smooth;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
		// display: flex;
		// flex-direction: column;
		// overflow-x: visible !important;
		// height: 400px;
	}
`;

export const StaffDetailPageWorkerAutoPlaySwipeableViewsImg = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 8px;
	margin-right: 12px;
	object-fit: cover;
	@media screen and (max-width: 768px) {
		width: 100px;
		height: 100px;
	}
`;
export const StaffDetailPageWorkerAutoPlaySwipeableViewsLink = styled(GlowLink)``;

export const ReviewPageButtonLeftWorker = styled.button`
	position: absolute;
	top: 38%;
	left: -14px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;
	background-color: #fff;

	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const ReviewPageButtonRigthWorker = styled.button`
	position: absolute;
	top: 38%;
	right: -14px;
	width: 28px;
	height: 28px;
	border-radius: 100px;
	border: 1px solid #e6e7e6;
	transition: transform 0.3s ease;
	background-color: #fff;
	&:hover {
		transform: scale(1.5);
		border: 2px solid #ababab;
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const StaffDetailPageWorkerAutoPlaySwipeableViewsTitle = styled.div`
	color: #080d08;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	padding-bottom: 16px;
	@media screen and (max-width: 768px) {
		padding: 0px 12px 12px 12px;
	}
`;

export const StaffDetailPageContentTopInfoSocialMedia = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
	}
`;

export const StaffDetailPageContentTopInfoSocialMediaImgWrap = styled.a<{ isDisabled?: boolean }>`
	width: 20px;
	height: 20px;
	margin-right: 12px;
	pointer-events: ${(props) => (props.isDisabled ? "none" : "auto")};
	cursor: ${(props) => (props.isDisabled ? "default" : "pointer")};
	@media screen and (max-width: 768px) {
	}
`;

export const StaffDetailPageContentTopInfoSocialMediaImg = styled.img<{ isDisabled?: boolean }>`
	width: 100%;
	height: 100%;
	filter: ${(props) => (props.isDisabled ? "grayscale(100%)" : "none")};
	opacity: ${(props) => (props.isDisabled ? "0.4" : "1")};
	@media screen and (max-width: 768px) {
	}
`;

export const ReviewPageButtonLeftWorkerSSR = styled.div`
	& button {
		position: absolute;
		top: 38%;
		left: -14px;
		width: 28px;
		height: 28px;
		border-radius: 100px;
		border: 1px solid #e6e7e6;
		transition: transform 0.3s ease;
		background-color: #fff;

		&:hover {
			transform: scale(1.5);
			border: 2px solid #ababab;
		}
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const ReviewPageButtonRigthWorkerSSR = styled.div`
	& button {
		position: absolute;
		top: 38%;
		right: -14px;
		width: 28px;
		height: 28px;
		border-radius: 100px;
		border: 1px solid #e6e7e6;
		transition: transform 0.3s ease;
		background-color: #fff;
		&:hover {
			transform: scale(1.5);
			border: 2px solid #ababab;
		}
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const SelectFilterDiv = styled.div`
	& select {
		position: relative;
		padding: 4px 30px 4px 12px;
		border-radius: 100px;
		border: 1px solid #fff;
		background-color: #fff;
		box-shadow: 0px 2px 5.6px 0px #080d0814;
		margin-right: 8px;
		color: #000;
		-webkit-appearance: none;
		appearance: none;
		background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>');
		background-repeat: no-repeat;
		background-position: right 12px center;
		background-size: 12px;
		max-width: 110px;

		@supports (-webkit-overflow-scrolling: touch) {
			& {
				font-size: 16px;
			}
		}
	}

	& option {
		width: max-content;
	}
`;

export const SelectFilterDivPro = styled(SelectFilterDiv)<{ locationType: boolean }>`
	& select {
		max-width: none;
		padding: ${(props) => (props.locationType ? "4px 10px 4px 12px" : "4px 30px 4px 12px")};
				border-radius: 50px;
// background: #FFF;
// box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
	}

`;

export const SelectFilterDivPrice = styled(SelectFilterDiv)`
	& select {
		max-width: 100px;
	}
`;


export const AutoPlayVideoYoutubeEmbedUrl = styled.iframe`
	display: flex;
			    width: 100%;
    height: 100%;
	& div {
		    width: 100%;
    height: 100%;
	}
`;

export const FilterProMapWrapper = styled.div<{ isOpen: boolean }>`
	position: absolute;
	top: 28px;
	left: 0;
	right: 0;
	background-color: white;
	z-index: 50;
	border: 1px solid #ddd;
	border-radius: 8px;
	// transition: transform 0.3s, opacity 0.3s;
	transform: ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
	transform-origin: top;
	opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
	overflow: auto;
width: max-content;
    max-height: 300px;
	padding: 8px 12px;
	

`;

export const FilterMapWrapper = styled.div`
	position: relative;
display: inline-block;
`;

export const FilterMapMargin = styled.div`
margin-right: 8px;
`;

export const SelectMapWrap = styled.div`
	font-family: SF-Pro-Display;
`;