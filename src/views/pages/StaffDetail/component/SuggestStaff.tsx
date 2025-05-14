import React, { useEffect, useState } from "react";
import useGetStaffSuggest from "../hook/useSuggestStaff";
import Staff from "../../../../models/Staff";
import {
	DealHotHomePageButtonLeft,
	DealHotHomePageButtonRigth,
	DealHotHomePageInner,
	DealHotHomePageInnerDetailSSR,
	DealHotHomePageInnerSSR,
	DealHotHomePageNote,
	DealHotHomePageNoteImg,
	FooterSpacingWrap,
	HomeSpaDivSSR,
	HomeSpaDivSSRNext,
	StaffDetailSuggestSwipeableViews,
	StaffDetailSuggestSwipeableViewsKTV,
} from "../../home/styled/HomeStyles";
import ListStore from "../../FilterAtHome/component/ListStore";
import { StaffDetailSuggestSSR, StaffDetailSuggestTitle, StaffDetailSuggestWrap } from "../styled/StaffDetailStyle";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import ListSpa from "../../FilterAtHome/component/ListSpa";
import useStaticContext from "../../../hooks/useStaticContext";
import { useParams } from "react-router";
import { TypeUser } from "../../../../../src_ssr/loaders/HomeLoader";

export default function StaffDetailSuggest(props: {
	lang?: string;
	districtId?: number;
	serviceGroups?: string[];
	type?: number;
	staff: Staff;
	reload?: () => void;
}) {
	const serviceGroupsString = props.serviceGroups ? props.serviceGroups.join(";") : "";
	const {
		staff,
		swipeIdx,
		setSwipeIdx,
		reload: reloadStar,
	} = useGetStaffSuggest({
		lang: props.lang,
		districtId: props.districtId,
		orMultipleServiceGroups: serviceGroupsString,
		type: props.type,
	});
	const hasMatchingId = props.staff.id && staff.some((member) => member.id === props.staff.id);
	const filteredStaff = hasMatchingId ? staff.filter((member) => member.id !== props.staff.id) : staff.slice(0, 10);

	const handlePrevButtonClick = () => {
		if (swipeIdx > 0) {
			setSwipeIdx(swipeIdx - 1);
		}
	};

	const handleNextButtonClick = () => {
		const offset = props.type === 3 ? 5 : 6;
		if (swipeIdx < filteredStaff.length - offset) {
			setSwipeIdx(swipeIdx + 1);
		}
	};
	const { staticContext } = useStaticContext();
	return (
		<StaffDetailSuggestWrap>
			<StaffDetailSuggestTitle>
				{/* {props.staff.nearestTitle || TranslateLabels[props.lang || "vi"]?.SUGGESTIONS} */}
				{props.type === TypeUser.Spa
					? TranslateLabels[props.lang || "vi"]?.SUGGESTIONS
					: TranslateLabels[props.lang || "vi"]?.THERAPISTS_NEAR_ME}
			</StaffDetailSuggestTitle>
			{filteredStaff?.length > 0 ? (
				<>
					<StaffServiceInfo
						staff={filteredStaff}
						swipeIdx={swipeIdx}
						setSwipeIdx={setSwipeIdx}
						type={props.type}
					/>
					<>
						{staticContext?.newStyle ? (
							<>
								<HomeSpaDivSSR
									dangerouslySetInnerHTML={{
										__html: `
										<button onClick="functionStaffInfoBack('detail')">
											<i class="fa fa-angle-left" aria-hidden="true"></i>
										</button>`,
									}}
								/>
								<HomeSpaDivSSRNext
									dangerouslySetInnerHTML={{
										__html: `
										<button onClick="functionStaffInfoNext('${"detail"}')">
											<i class="fa fa-angle-right" aria-hidden="true"></i>
										</button>`,
									}}
								/>
							</>
						) : (
							<>
								<DealHotHomePageButtonLeft onClick={handlePrevButtonClick}>
									<i
										className="fa fa-angle-left"
										aria-hidden="true"></i>
								</DealHotHomePageButtonLeft>
								<DealHotHomePageButtonRigth onClick={handleNextButtonClick}>
									<i
										className="fa fa-angle-right"
										aria-hidden="true"></i>
								</DealHotHomePageButtonRigth>
							</>
						)}
					</>
				</>
			) : (
				<>
					<DealHotHomePageNote>
						<DealHotHomePageNoteImg
							src="/static/img/Notes.png"
							alt={TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}
						/>
						<div>{TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}</div>
					</DealHotHomePageNote>
					<FooterSpacingWrap />
				</>
			)}
		</StaffDetailSuggestWrap>
	);
}

export function StaffServiceInfo(props: {
	staff: Staff[];
	swipeIdx: number;
	setSwipeIdx: (val: number) => void;
	type?: number;
}) {
	const { staticContext } = useStaticContext();
	return (
		<>
			{props.type === 3 ? (
				<>
					{staticContext?.data?.dataStaffListSuggestv2 ? (
						<DealHotHomePageInnerDetailSSR className={`StaffInfoWrap_detail`}>
							<StaffDetailSuggestSSR>
								{props.staff.map((val, index) => {
									return (
										<ListStore
											key={index}
											val={val}
											suggest="Suggest"
										/>
									);
								})}
							</StaffDetailSuggestSSR>
						</DealHotHomePageInnerDetailSSR>
					) : (
						<DealHotHomePageInner>
							<StaffDetailSuggestSwipeableViews
								index={props.swipeIdx}
								onChangeIndex={(index: number) => props.setSwipeIdx(index)}
								enableMouseEvents>
								{props.staff.map((val, index) => {
									return (
										<ListStore
											key={index}
											val={val}
											suggest="Suggest"
										/>
									);
								})}
							</StaffDetailSuggestSwipeableViews>
						</DealHotHomePageInner>
					)}
				</>
			) : (
				<>
					{staticContext?.data?.dataStaffListSuggestv2 ? (
						<DealHotHomePageInnerDetailSSR className={`StaffInfoWrap_detail`}>
							<StaffDetailSuggestSSR>
								{props.staff?.map((val, index) => {
									return (
										<ListSpa
											key={index}
											val={val}
											suggest="Suggest"
										/>
									);
								})}
							</StaffDetailSuggestSSR>
						</DealHotHomePageInnerDetailSSR>
					) : (
						<DealHotHomePageInner>
							<StaffDetailSuggestSwipeableViewsKTV
								index={props.swipeIdx}
								onChangeIndex={(index: number) => props.setSwipeIdx(index)}
								enableMouseEvents>
								{props.staff?.map((val, index) => {
									return (
										<ListSpa
											key={index}
											val={val}
											suggest="Suggest"
										/>
									);
								})}
							</StaffDetailSuggestSwipeableViewsKTV>
						</DealHotHomePageInner>
					)}
				</>
			)}
		</>
	);
}
