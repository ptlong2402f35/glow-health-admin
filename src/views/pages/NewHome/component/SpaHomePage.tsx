import React, { createContext, useEffect, useRef, useState } from "react";
import {
	DealHotHomePageButtonLeft,
	DealHotHomePageButtonRigth,
	DealHotHomePageInner,
	DealHotHomePageInnerHeader,
	DealHotHomePageInnerLabel,
	DealHotHomePageInnerLink,
	DealHotHomePageInnerWrap,
	DealHotHomePageNote,
	DealHotHomePageNoteImg,
	DealHotHomePageWrap,
	DealHotHomePageWrapNewHome,
} from "../../home/styled/HomeStyles";
import { useParams } from "react-router";
import useStaticContext from "../../../hooks/useStaticContext";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import { SpaceSpan } from "../../home/styled/HomeService";
import { StaffServiceInfo, StaffServiceInfoSSR } from "../../home/HomePageNew/DealHotHomePage";
import useGetStaffServiceHotDeal from "../../home/hooks/useGetStaffServiceHotDeal";
import useGetListService from "../hook/getListStaffAtHome";
import { StaffListService, StaffListServiceSSR } from "./DealHotHomePage";

export default function DealHotHomePage(props: { isTaiNha: boolean }) {
	let { lang } = useParams<{ lang: string }>();
	const { staffService, swipeIdx, setSwipeIdx, isLoading, allUrl } = useGetListService({
		lang,
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
	const formattedLink = allUrl.startsWith("/") ? "/dich-vu" + allUrl : "/dich-vu/" + `${allUrl}`;
	return (
		<DealHotHomePageWrapNewHome>
			<DealHotHomePageInnerWrap>
				<DealHotHomePageInnerHeader>
					<DealHotHomePageInnerLabel>
						{TranslateLabels[lang]?.TITLE_PAGE_HOME_NEW_SERVICE || "Voucher Spa, Làm đẹp"}
					</DealHotHomePageInnerLabel>
					<DealHotHomePageInnerLink to="/dia-diem">
						<SpaceSpan>{TranslateLabels[lang || "vi"]?.SEE_ALL}</SpaceSpan>
						<i
							className="fa fa-angle-right"
							aria-hidden="true"></i>
					</DealHotHomePageInnerLink>
				</DealHotHomePageInnerHeader>
				<DealHotHomePageInner>
					{staticContext?.data?.dataListServiceHome ? (
						<StaffListServiceSSR
							staffService={staffService}
							setSwipeIdx={setSwipeIdx}
							swipeIdx={swipeIdx}
						/>
					) : (
						<StaffListService
							staffService={staffService}
							setSwipeIdx={setSwipeIdx}
							swipeIdx={swipeIdx}
						/>
					)}
				</DealHotHomePageInner>
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
							alt={TranslateLabels[lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}
						/>
						<div>{TranslateLabels[lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}</div>
					</DealHotHomePageNote>
				)}
				{staffService?.length > 0 && (
					<DealHotHomePageButtonRigth onClick={handleNextButtonClick}>
						<i
							className="fa fa-angle-right"
							aria-hidden="true"></i>
					</DealHotHomePageButtonRigth>
				)}
			</DealHotHomePageInnerWrap>
		</DealHotHomePageWrapNewHome>
	);
}
