import React from "react";
import Staff from "../../../../models/Staff";
import {
	ListExperienceSpaAddress,
	ListExperienceSpaContentWrap,
	ListExperienceSpaImgWrap,
	ListExperienceSpaName,
	ListExperienceSpaNameImg,
	ListExperienceStoreImg,
	ListExperienceStoreWrap,
} from "../styled/ListStaffAtHome";
import { DealHotHomePageItemImgVideo, StaffInfoAutoPlaImgIcon, StaffInfoAutoPlaItemStarStore } from "../../home/styled/HomeStyles";
import { differenceInYears } from "date-fns";
import { GlowLink } from "../../home/GlowLink";

export default function ListStore(props: { key: number; val: Staff; suggest?: string }) {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<ListExperienceStoreWrap suggest={props.suggest}>
			<ListExperienceSpaImgWrap
				to={props.val.url?.startsWith("/") ? props.val.url : "/" + props.val.url || ""}
				onClick={handleClick}>
				<>
				{props.val?.promotionalVideos && props.val?.promotionalVideos.length > 0 && 
												<DealHotHomePageItemImgVideo 
												src={"/static/img/isvideo.png"}
												alt={"Ảnh mô tả có video " + " số " + props.key}/>
												}
					<ListExperienceStoreImg
						suggest={props.suggest}
						src={props.val.user?.thumbnailImage ||props.val.user?.urlImage || "./static/img/profile-circle.png"}
						onClick={handleClick}
						alt={"Ảnh đại diện cơ sở" + props.val.name || ""}
					/>
					{props.val.rateAvg ? (
						<StaffInfoAutoPlaItemStarStore>
							<StaffInfoAutoPlaImgIcon src={"./static/img/Star.png"} alt="Biểu tượng đánh giá" /> {props.val.rateAvg}
						</StaffInfoAutoPlaItemStarStore>
					) : (
						""
					)}
				</>
			</ListExperienceSpaImgWrap>
			<ListExperienceSpaContentWrap>
				<ListExperienceSpaName to={props.val.url?.startsWith("/") ? props.val.url : "/" + props.val.url || ""}>
					<>
						<ListExperienceSpaNameImg src="./static/img/store01.png" alt="Biểu tượng đánh giá"/>
						{props.val.name || ""}
					</>
				</ListExperienceSpaName>
				<ListExperienceSpaAddress>
					{props.val.district && (
						<>
							<ListExperienceSpaNameImg src="./static/img/location01.png" alt="Biểu tượng đánh giá"/> {props.val.district.name},{" "}
							{props.val.province?.name}
						</>
					)}
				</ListExperienceSpaAddress>
			</ListExperienceSpaContentWrap>
		</ListExperienceStoreWrap>
	);
}
