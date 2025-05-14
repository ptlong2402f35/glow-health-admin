import React from "react";
import {
	AutoPlaySwipeableViewsStaff,
	AutoPlaySwipeableViewsStaffHome,
	DealHotHomePageImgIcon,
	DealHotHomePageItemStar,
	StaffInfoAutoPlaImgIcon,
	StaffInfoAutoPlaItemStar,
	StaffInfoAutoPlay,
	StaffInfoAutoPlayContentBottom,
	StaffInfoAutoPlayContentName,
	StaffInfoAutoPlayContentTop,
	StaffInfoAutoPlayContentWrap,
	StaffInfoAutoPlayImg,
	StaffInfoAutoPlayImgCheck,
	StaffInfoAutoPlayImgWrap,
	StaffInfoAutoPlayNameProvice,
	StaffInfoAutoPlaySSRWrap,
	StaffInfoAutoPlayWrap,
	StaffInfoSeparation,
	StaffInfoWrap,
} from "../../home/styled/HomeStyles";
import Staff, { ValidateStatusType } from "../../../../models/Staff";
import { differenceInYears } from "date-fns";

export function StaffInfo(props: { staff: Staff[]; swipeIdx: number; setSwipeIdx: (val: number) => void }) {
	const currentDate = new Date();

	return (
		<AutoPlaySwipeableViewsStaffHome
			index={props.swipeIdx}
			onChangeIndex={(index: number) => props.setSwipeIdx(index)}
			enableMouseEvents>
			{props.staff.map((val, index) => {
				const age = val.birthDay ? differenceInYears(currentDate, new Date(val.birthDay)) : null;
				return (
					<StaffInfoAutoPlayWrap>
						<StaffInfoAutoPlay>
							<StaffInfoAutoPlayImgWrap to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
								<StaffInfoAutoPlayImg
									src={val.user?.urlImage || ""}
									alt={"Ảnh đại diện kỹ thuật viên " + val.name || ""}
								/>
							</StaffInfoAutoPlayImgWrap>
							<StaffInfoAutoPlayContentWrap>
								<StaffInfoAutoPlayContentTop>
									<StaffInfoAutoPlayContentName
										to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
										{val.name || val.store?.name || ""}
									</StaffInfoAutoPlayContentName>
									<>{val.birthDay && <p>{age || 10}</p>} </>
									<>
										{val.validateStatus === ValidateStatusType.Verification && (
											<StaffInfoAutoPlayImgCheck src="./static/img/Check.png" alt="Biểu tượng xác minh"/>
										)}{" "}
									</>
								</StaffInfoAutoPlayContentTop>
								<StaffInfoAutoPlayContentBottom>
									{val.rateAvg ? (
										<StaffInfoAutoPlaItemStar>
											<StaffInfoAutoPlaImgIcon src={"./static/img/Star.png"} alt="Biểu tượng đánh giá"/> {val.rateAvg}
										</StaffInfoAutoPlaItemStar>
									) : (
										""
									)}
									{val.rateAvg ? <StaffInfoSeparation /> : ""}
									<StaffInfoAutoPlayNameProvice>{val.province?.name}</StaffInfoAutoPlayNameProvice>
								</StaffInfoAutoPlayContentBottom>
							</StaffInfoAutoPlayContentWrap>
						</StaffInfoAutoPlay>
					</StaffInfoAutoPlayWrap>
				);
			})}
		</AutoPlaySwipeableViewsStaffHome>
	);
}

export function StaffInfoSSR(props: {
	staff: Staff[];
	swipeIdx: number;
	setSwipeIdx: (val: number) => void;
	id: string;
}) {
	const currentDate = new Date();

	return (
		<StaffInfoWrap className={`StaffInfoWrap_${props.id || "0"}`}>
			{props.staff.map((val, index) => {
				const age = val.birthDay ? differenceInYears(currentDate, new Date(val.birthDay)) : null;
				return (
					<StaffInfoAutoPlaySSRWrap>
						<StaffInfoAutoPlay>
							<StaffInfoAutoPlayImgWrap to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
								<StaffInfoAutoPlayImg
									src={val.user?.thumbnailImage ||val.user?.urlImage || ""}
									alt={"Ảnh đại diện kỹ thuật viên " + val.name || ""}
								/>
							</StaffInfoAutoPlayImgWrap>
							<StaffInfoAutoPlayContentWrap>
								<StaffInfoAutoPlayContentTop>
									<StaffInfoAutoPlayContentName
										to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
										{val.name && 0 < val.name.length && val.name.length < 10
											? val.name
											: `${val.name?.slice(0, 10)}...` ||
											  (val.store?.name &&
													0 < val.store.name.length &&
													val.store.name.length < 10 &&
													val.store?.name) ||
											  (val.store?.name &&
													val.store.name.length > 10 &&
													`${val.store?.name?.slice(0, 10)}...`) ||
											  ""}
									</StaffInfoAutoPlayContentName>

									<>{val.birthDay && <p>{age || 10}</p>} </>
									<>
										{val.validateStatus === ValidateStatusType.Verification && (
											<StaffInfoAutoPlayImgCheck src="./static/img/Check.png" alt="Biểu tượng xác minh"/>
										)}{" "}
									</>
								</StaffInfoAutoPlayContentTop>
								<StaffInfoAutoPlayContentBottom>
									{val.rateAvg ? (
										<StaffInfoAutoPlaItemStar>
											<StaffInfoAutoPlaImgIcon src={"./static/img/Star.png"} alt="Biểu tượng đánh giá"/> {val.rateAvg}
										</StaffInfoAutoPlaItemStar>
									) : (
										""
									)}
									{val.rateAvg ? <StaffInfoSeparation /> : ""}
									<StaffInfoAutoPlayNameProvice>{val.province?.name}</StaffInfoAutoPlayNameProvice>
								</StaffInfoAutoPlayContentBottom>
							</StaffInfoAutoPlayContentWrap>
						</StaffInfoAutoPlay>
					</StaffInfoAutoPlaySSRWrap>
				);
			})}
		</StaffInfoWrap>
	);
}
