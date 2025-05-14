import React, { Fragment } from "react";
import PersonalReviewSection from "./ReviewPersonalSection";
import StaffDetail from "../../../../models/StaffDetail";
import { PersonalReviewTitle, PersonalReviewWrap } from "../styled/StylePersonal";

export const PersonalReview = (props: { staffDetail?: StaffDetail | null | undefined }) => {
	return (
		<Fragment>
			<PersonalReviewTitle>Đánh giá</PersonalReviewTitle>
			{props.staffDetail?.reviews?.length ? (
				props.staffDetail.reviews.map((val, index) => (
					<PersonalReviewSection
						key={index}
						reviews={val}
					/>
				))
			) : (
				<PersonalReviewWrap>Không có đánh giá nào!</PersonalReviewWrap>
			)}
		</Fragment>
	);
};
