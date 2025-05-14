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
	ReviewNumberStar,
	ReviewNumberStarFilter,
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

export default function DialogGetReview(props: {
	isDialogOpen: boolean;
	setIsDialogOpen: (value: boolean) => void;
	reload: () => void;
	lang: string;
	swipeIdx: number;
	setSwipeIdx: (value: number) => void;
	staff: Staff;
	star: FakeReview[];
	setPage: React.Dispatch<React.SetStateAction<number>>;
	page: number;
	setFilterStar: (value: string) => void;
}) {
	const LoadMore = () => {
		if (props.star.length % 10 === 0) {
			props.setSwipeIdx(props.swipeIdx + 10);
			props.setPage((prevPage) => prevPage + 1);
		}
	};

	return (
		<DialogWrapMediumFilter
			disableEnforceFocus={true}
			open={props.isDialogOpen}
			// hideFooter={true}
			hideClose={true}
			onClose={() => {
				props.setIsDialogOpen(false);
			}}
			title={TranslateLabels[props.lang]?.PARTNER_TITLE_3}>
			<div>
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
							<ReviewNumberStarFilter onClick={() => props.setFilterStar("")}>
								{TranslateLabels[props.lang || "vi"]?.ALL}
							</ReviewNumberStarFilter>
							<ReviewNumberStarFilter onClick={() => props.setFilterStar("5")}>
								5{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
							<ReviewNumberStarFilter onClick={() => props.setFilterStar("4")}>
								4{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
							<ReviewNumberStarFilter onClick={() => props.setFilterStar("3")}>
								3{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
							<ReviewNumberStarFilter onClick={() => props.setFilterStar("2")}>
								2{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
							<ReviewNumberStarFilter onClick={() => props.setFilterStar("1")}>
								1{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
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
								<ReviewPageInWrap>
									<ServiceHomePageImgIconv2
										src={val.userCustomer?.urlImage || "./static/img/User.png"}
									/>
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
														<ServiceHomePageImgComment src={value.path || ""} />
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
				<GetALLReview>
					<u onClick={LoadMore}>{TranslateLabels[props.lang || "vi"]?.NEW_PAGE_SEE_MORE}</u>
				</GetALLReview>
			</div>
		</DialogWrapMediumFilter>
	);
}
