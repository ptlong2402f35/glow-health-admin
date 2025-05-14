import React, { useEffect } from "react";
import DialogWrap, {
	DialogWrapMedium,
	DialogWrapMediumFilter,
} from "../../../controls/components/dialogWrap/DialogWrap";
import { SelectOptionType } from "react-select";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import {
	AutoPlaySwipeableViewsStaffReviewImgv2,
	StaffDetailPageContentTopInfoStarTitle,
	StaffDetailPageContentTopInfoStarTitleImg,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import Staff from "../../../../models/Staff";
import {
	GetALLReview,
	GetReviewInnerWrap,
	ReviewNumberStar,
	ReviewNumberStarFilter,
	ReviewNumberStarFilterLink,
	ReviewNumberStarFilterOverWrap,
	ReviewNumberStarFilterWrap,
	ReviewPageInWrap,
	ReviewPageInWrapLast,
	ReviewPageWrap,
	ReviewStaffName,
	ReviewStaffServiceName,
	ServiceHomePageImgComment,
	ServiceHomePageImgCommentS,
	ServiceHomePageImgCommentWrap,
	ServiceHomePageImgIcon,
	ServiceHomePageImgIconv2,
	ServiceHomePageImgNoteReview,
	StaffDetailPageContentTopInfoStarTitlev2,
	StaffDetailPageContentTopInfoStarTitlev2Wrap,
} from "../../FilterService/styled/ListServiceFilter";
import FakeReview from "../../../../models/FakeReview";
import moment from "moment";
import { PaginationWrapperv2 } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { Link } from "react-router-dom";

export function GetReviewInner(props: {
	lang: string;
	staff?: Staff;
	star: FakeReview[];
	count: number;
	NoImg?: boolean;
}) {
	const { page, doChangePage, getPathChangePage, getPathFilterStar, filterStar } = useCommonListFunctions();
	return (
		<GetReviewInnerWrap>
			<StaffDetailPageContentTopInfoStarTitlev2Wrap>
				<StaffDetailPageContentTopInfoStarTitlev2>
					<StaffDetailPageContentTopInfoStarTitleImg
						src="./static/img/Star.png"
						alt="image_start"
					/>
					{props.staff?.rateAvg} ({props.staff?.countReview}
					{"   "}
					{TranslateLabels[props.lang]?.FILTERS_REVIEWS || "Đánh giá"})
				</StaffDetailPageContentTopInfoStarTitlev2>
				<ReviewNumberStarFilterOverWrap>
					<ReviewNumberStarFilterWrap>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar === "" ? "#D4E0CE" : "transparent",
									color: filterStar === "" ? "#5B7A4F" : "black",
									border: filterStar === "" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								{TranslateLabels[props.lang || "vi"]?.ALL}
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("5") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "5" ? "#D4E0CE" : "transparent",
									color: filterStar == "5" ? "#5B7A4F" : "black",
									border: filterStar == "5" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								5{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("4") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "4" ? "#D4E0CE" : "transparent",
									color: filterStar == "4" ? "#5B7A4F" : "black",
									border: filterStar == "4" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								4{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("3") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "3" ? "#D4E0CE" : "transparent",
									color: filterStar == "3" ? "#5B7A4F" : "black",
									border: filterStar == "3" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								3{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("2") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "2" ? "#D4E0CE" : "transparent",
									color: filterStar == "2" ? "#5B7A4F" : "black",
									border: filterStar == "2" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								2{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("1") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "1" ? "#D4E0CE" : "transparent",
									color: filterStar == "1" ? "#5B7A4F" : "black",
									border: filterStar == "1" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								1{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
					</ReviewNumberStarFilterWrap>
				</ReviewNumberStarFilterOverWrap>
			</StaffDetailPageContentTopInfoStarTitlev2Wrap>
			<div>
				{props.star.map((val, index) => {
					const stars = [];
					if (val && val.rateReview) {
						const starCount = Math.round(val.rateReview);
						const starDetailCount = 5 - Math.round(val.rateReview);

						for (let i = 0; i < starCount; i++) {
							stars.push(
								<AutoPlaySwipeableViewsStaffReviewImgv2
									key={i}
									src="./static/img/Star.png"
									alt="Biểu tượng sao vàng"
								/>
							);
						}

						for (let j = 0; j < starDetailCount; j++) {
							stars.push(
								<AutoPlaySwipeableViewsStaffReviewImgv2
									key={starCount + j}
									src="./static/img/unStar.png"
									alt="Biểu tượng sao xám"
								/>
							);
						}
					}
					return (
						<ReviewPageWrap>
							<ReviewPageInWrap NoImg={props.NoImg}>
								<ServiceHomePageImgIconv2 src={"./static/img/User.png"} alt="Biểu tượng ảnh đại diện"/>
								<ReviewStaffName>
									{val.userCustomer?.userName || val.userCustomer?.phone}
								</ReviewStaffName>
							</ReviewPageInWrap>
							<ReviewPageInWrap>
								<ReviewStaffServiceName>{val.staffServiceName?.[0]}</ReviewStaffServiceName>
							</ReviewPageInWrap>
							<ReviewPageInWrap>
								<ReviewNumberStar>{stars}</ReviewNumberStar>
								<ReviewStaffServiceName>
									{(val.updatedAt && moment(val.updatedAt).format("DD-MM-YYYY")) || "--"}
								</ReviewStaffServiceName>
							</ReviewPageInWrap>
							<ReviewPageInWrapLast>
								<ServiceHomePageImgNoteReview>{val.noteReview}</ServiceHomePageImgNoteReview>

								<ServiceHomePageImgCommentS>
									<ServiceHomePageImgCommentWrap>
										{val.reviewImages?.map((value, idx) => {
											return (
												<span>
													<ServiceHomePageImgComment src={value.path || ""} alt={"Ảnh bình luận thứ " + (idx + 1) + val.userCustomer?.phone}/>
												</span>
											);
										})}
									</ServiceHomePageImgCommentWrap>
								</ServiceHomePageImgCommentS>
							</ReviewPageInWrapLast>
						</ReviewPageWrap>
					);
				})}
			</div>

			<PaginationWrapperv2>
				<NumberPaginationBox
					page={page || 1}
					count={props.count}
					per={PERPAGE.PerPage}
					onChange={(val) => doChangePage?.(val)}
					linkGetter={(val) => (getPathChangePage ? getPathChangePage(val) : "")}
				/>
			</PaginationWrapperv2>
		</GetReviewInnerWrap>
	);
}
