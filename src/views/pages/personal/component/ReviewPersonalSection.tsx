import React, { Fragment } from "react";
import { Review } from "../../../../models/StaffDetail";
import {
	PersonalReviewComment,
	PersonalReviewCustomer,
	PersonalReviewImg,
	PersonalReviewName,
	PersonalReviewRate,
	PersonalReviewWrap,
} from "../styled/StylePersonal";
import moment from "moment";
import { PersonalNoteReviewComment } from "./StylePerson";

export default function PersonalReviewSection(props: { reviews: Review }) {
	const renderStarRating = (rateReview: any) => {
		if (rateReview != null) {
			const stars = [];
			for (let i = 1; i <= 5; i++) {
				if (i <= rateReview) {
					stars.push(
						<span key={i}>
							<i
								className="fa fa-star"
								aria-hidden="true"></i>
						</span>
					);
				} else {
					stars.push(
						<span key={i}>
							<i
								className="fa fa-star-o"
								aria-hidden="true"></i>
						</span>
					);
				}
			}
			return stars;
		}
		return null;
	};

	return (
		<Fragment>
			<PersonalReviewWrap>
				<PersonalReviewCustomer>
					<PersonalReviewImg
						src={props.reviews.userCustomer?.urlImage || "./static/img/profile-circle.png"}
						alt="Default"
					/>
					<PersonalReviewName>
						{props.reviews.userCustomer?.userName} {props.reviews.userCustomer?.phone}
					</PersonalReviewName>
				</PersonalReviewCustomer>

				<PersonalReviewRate>
					{props.reviews.rateReview} &nbsp; {renderStarRating(props.reviews.rateReview)}
				</PersonalReviewRate>
				<PersonalReviewComment>
					<PersonalNoteReviewComment>{props.reviews.noteReview}</PersonalNoteReviewComment>&nbsp;-&nbsp;
					{(props.reviews.updatedAt && moment(props.reviews?.updatedAt).format("HH:mm DD-MM-YYYY")) ||
						""}{" "}
				</PersonalReviewComment>
			</PersonalReviewWrap>
		</Fragment>
	);
}
