import React from "react";
import Staff, { ValidateStatusType } from "../../../../models/Staff";
import { ListExperienceSpaImg, ListExperienceSpaImgWrap, ListExperienceSpaWrap } from "../styled/ListStaffAtHome";
import {
	StaffInfoAutoPlaImgIcon,
	StaffInfoAutoPlaItemStar,
	StaffInfoAutoPlayContentBottom,
	StaffInfoAutoPlayContentName,
	StaffInfoAutoPlayContentTop,
	StaffInfoAutoPlayContentWrap,
	StaffInfoAutoPlayImgCheck,
	StaffInfoAutoPlayNameProvice,
	StaffInfoSeparation,
} from "../../home/styled/HomeStyles";
import { differenceInYears } from "date-fns";

export default function ListSpa(props: { key: number; val: Staff; suggest?: string; search?: boolean }) {
	const currentDate = new Date();
	const age = props.val.birthDay ? differenceInYears(currentDate, new Date(props.val.birthDay)) : null;
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<ListExperienceSpaWrap
			suggest={props.suggest}
			search={props.search}>
			<ListExperienceSpaImgWrap
				to={props.val.url?.startsWith("/") ? props.val.url : "/" + props.val.url || ""}
				onClick={handleClick}>
				<ListExperienceSpaImg
					src={ props.val.user?.thumbnailImage||props.val.user?.urlImage  || "./static/img/profile-circle.png"}
					alt={"Ảnh đại diện kỹ thuật viên " + props.val.name || ""}
				/>
			</ListExperienceSpaImgWrap>
			<StaffInfoAutoPlayContentWrap>
				<StaffInfoAutoPlayContentTop>
					<StaffInfoAutoPlayContentName
						to={props.val.url?.startsWith("/") ? props.val.url : "/" + props.val.url || ""}
						onClick={handleClick}>
						{props.val.name || props.val.store?.name || ""}
					</StaffInfoAutoPlayContentName>
					<>{props.val.birthDay && <p>{age || 10}</p>} </>
					<>
						{props.val.validateStatus === ValidateStatusType.Verification && (
							<StaffInfoAutoPlayImgCheck src="./static/img/Check.png" alt="Biểu tượng xác minh"/>
						)}{" "}
					</>
				</StaffInfoAutoPlayContentTop>
				<StaffInfoAutoPlayContentBottom>
					{props.val.rateAvg ? (
						<StaffInfoAutoPlaItemStar>
							<StaffInfoAutoPlaImgIcon src={"./static/img/Star.png"} alt="Biểu tượng đánh giá"/> {props.val.rateAvg}
						</StaffInfoAutoPlaItemStar>
					) : (
						""
					)}
					{props.val.rateAvg ? <StaffInfoSeparation /> : ""}
					<StaffInfoAutoPlayNameProvice>{props.val.province?.name}</StaffInfoAutoPlayNameProvice>
				</StaffInfoAutoPlayContentBottom>
			</StaffInfoAutoPlayContentWrap>
		</ListExperienceSpaWrap>
	);
}
