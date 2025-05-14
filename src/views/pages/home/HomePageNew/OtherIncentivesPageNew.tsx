import React, { useState, useEffect } from "react";
import useTopService, { useTopServic1e } from "../hooks/useTopService";
import {
	DealHotHomePageButtonLeft,
	DealHotHomePageButtonRigth,
	DealHotHomePageInner,
	DealHotHomePageInnerHeader,
	DealHotHomePageInnerLabel,
	DealHotHomePageInnerLink,
	DealHotHomePageInnerSSR,
	DealHotHomePageInnerWrap,
	DealHotHomePageItem,
	DealHotHomePageItemDeal,
	DealHotHomePageItemDealImg,
	DealHotHomePageItemImg,
	DealHotHomePageItemStar,
	DealHotHomePageItemWrap,
	DealHotHomePageNote,
	DealHotHomePageNoteImg,
	DealHotHomePageOrtheWrap,
	DealHotHomePageWrap,
	HomeSpaDivSSR,
	HomeSpaDivSSRNext,
	OrtherHomePageInnerWrap,
} from "../styled/HomeStyles";
import { TopServiceParam } from "../../../../models/Service";
import { StaffServiceInfo, StaffServiceInfoSSR } from "./DealHotHomePage";
import useStaticContext from "../../../hooks/useStaticContext";
import { useParams } from "react-router";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import { SpaceSpan } from "../styled/HomeService";

export default function OtherIncentivesPageNew(props: { isTaiNha: boolean }) {
	let { lang } = useParams<{ lang: string }>();
	const { topService, ssrDatas, ssrRenderring, getAllUrl } = useTopService({ lang, isTaiNha: props.isTaiNha });

	return (
		<>
			{!ssrRenderring && (
				<>
					{topService.map((service, index) => (
						<OtherIncentivesPage
							key={service.id || ""}
							id={service.id || ""}
							params={service.params}
							label={service.label || ""}
							ssrData={ssrDatas?.length && ssrDatas[index]}
							lang={lang || ""}
							getAllUrl={(getAllUrl?.length && getAllUrl[index]) || ""}
							isTaiNha={props.isTaiNha}
						/>
					))}
				</>
			)}
		</>
	);
}

export function OtherIncentivesPage(props: {
	key: string;
	id: string;
	params?: TopServiceParam | null;
	label: string;
	ssrData: any;
	lang: string;
	getAllUrl: string;
	isTaiNha: boolean;
}) {
	const { staffService, swipeIdx, setSwipeIdx, isLoading, allUrl } = useTopServic1e({
		id: props.id,
		params: props.params,
		ssrData: props.ssrData,
		lang: props.lang,
		getAllUrl: props.getAllUrl,
		isTaiNha: props.isTaiNha,
	});
	const { staticContext } = useStaticContext();
	const handlePrevButtonClick = () => {
		if (swipeIdx > 0) {
			setSwipeIdx(swipeIdx - 1);
		}
	};

	const handleNextButtonClick = () => {
		if (!isLoading && swipeIdx < staffService.length - 4) {
			setSwipeIdx(swipeIdx + 1);
		}
	};
	const formattedLink =
		props.getAllUrl || allUrl
			? (props.getAllUrl || allUrl).startsWith("/")
				? "/dich-vu" + (props.getAllUrl || allUrl)
				: "/dich-vu/" + `${props.getAllUrl || allUrl}`
			: "";
	return (
		<DealHotHomePageOrtheWrap key={props.key}>
			<OrtherHomePageInnerWrap>
				<DealHotHomePageInnerHeader>
					<DealHotHomePageInnerLabel>{props.label}</DealHotHomePageInnerLabel>
					<DealHotHomePageInnerLink to={formattedLink}>
						<SpaceSpan>{TranslateLabels[props.lang || "vi"]?.SEE_ALL}</SpaceSpan>
						<i
							className="fa fa-angle-right"
							aria-hidden="true"></i>
					</DealHotHomePageInnerLink>
				</DealHotHomePageInnerHeader>
				<DealHotHomePageInner>
					{/* <StaffServiceInfo
						staffService={staffService}
						setSwipeIdx={setSwipeIdx}
						swipeIdx={swipeIdx}
					/> */}
					{staticContext?.data?.dataStaffServiceLists ? (
						<DealHotHomePageInnerSSR className={`StaffInfoWrap_${props.id || "0"}`}>
							<StaffServiceInfoSSR
								staffService={staffService}
								setSwipeIdx={setSwipeIdx}
								swipeIdx={swipeIdx}
							/>
						</DealHotHomePageInnerSSR>
					) : (
						<DealHotHomePageInner>
							<StaffServiceInfo
								staffService={staffService}
								setSwipeIdx={setSwipeIdx}
								swipeIdx={swipeIdx}
							/>
						</DealHotHomePageInner>
					)}
				</DealHotHomePageInner>
				{staticContext?.newStyle ? (
					<>
						{staffService?.length > 0 ? (
							<>
								<HomeSpaDivSSR
									dangerouslySetInnerHTML={{
										__html: `
						<button  onClick="functionStaffInfoBack('${props.id || "hot_deal"}')">
							<i class="fa fa-angle-left" aria-hidden="true"></i>
						</button>
						`,
									}}
								/>
								<HomeSpaDivSSRNext
									dangerouslySetInnerHTML={{
										__html: `
						<button  onClick="functionStaffInfoNext('${props.id || "hot_deal"}')">
							<i class="fa fa-angle-right" aria-hidden="true"></i>
						</button>
						`,
									}}
								/>
							</>
						) : (
							<DealHotHomePageNote>
								<DealHotHomePageNoteImg src="/static/img/Notes.png" alt={TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}/>
								<div>{TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}</div>
							</DealHotHomePageNote>
						)}
					</>
				) : (
					<>
						{staffService?.length > 0 ? (
							<DealHotHomePageButtonLeft onClick={handlePrevButtonClick}>
								<i
									className="fa fa-angle-left"
									aria-hidden="true"></i>
							</DealHotHomePageButtonLeft>
						) : (
							<DealHotHomePageNote>
								<DealHotHomePageNoteImg
									src="/static/img/Notes.png"
									alt={TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}
								/>
								<div>{TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}</div>
							</DealHotHomePageNote>
						)}
						{staffService?.length > 0 && (
							<DealHotHomePageButtonRigth onClick={handleNextButtonClick}>
								<i
									className="fa fa-angle-right"
									aria-hidden="true"></i>
							</DealHotHomePageButtonRigth>
						)}
					</>
				)}
			</OrtherHomePageInnerWrap>
		</DealHotHomePageOrtheWrap>
	);
}
