import React, { useEffect, useRef } from "react";
import useTopStaff, { useStaffHome } from "../hook/useTopStaff";
import {
	DealHotHomePageButtonLeft,
	DealHotHomePageButtonRigth,
	DealHotHomePageButtonRigthHomeKTV,
	DealHotHomePageInner,
	DealHotHomePageInnerHeader,
	DealHotHomePageInnerLabel,
	DealHotHomePageInnerLink,
	DealHotHomePageInnerWrap,
	DealHotHomePageNote,
	DealHotHomePageNoteImg,
	DealHotHomePageOrtheWrap,
	DealHotHomePageOrtheWrapv2,
	HomeSpaDivSSR,
	HomeSpaDivSSRNext,
} from "../../home/styled/HomeStyles";
import { TopStaffParam } from "../../../../models/Staff";
import { StaffInfo, StaffInfoSSR } from "./StaffInfo";
import { Link, useParams } from "react-router-dom";
import useStaticContext from "../../../hooks/useStaticContext";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";
import { SpaceSpan } from "../../home/styled/HomeService";

export default function OtherStaffPageNew(props: { isTaiNha: boolean }) {
	let { lang } = useParams<{ lang: string }>();
	const { topStaff, ssrDatas, ssrRenderring, staffLink } = useTopStaff(lang, props.isTaiNha);

	return (
		<>
			{!ssrRenderring && (
				<>
					{topStaff.map((service, index) => (
						<OtherStaffPage
							key={index}
							id={service.id || ""}
							params={service.params}
							label={service.label || ""}
							ssrData={ssrDatas?.length && ssrDatas[index]}
							lang={lang}
							staffLink={staffLink?.length && staffLink[index]}
							isTaiNha={props.isTaiNha}
						/>
					))}
				</>
			)}
		</>
	);
}

export function OtherStaffPage(props: {
	key: number;
	id: string;
	params?: TopStaffParam | null;
	label: string;
	ssrData: any;
	lang: string;
	staffLink: any;
	isTaiNha?: boolean;
}) {
	const { staticContext } = useStaticContext();
	const { staff, swipeIdx, setSwipeIdx, isLoading, link } = useStaffHome({
		id: props.id,
		params: props.params,
		ssrData: props.ssrData,
		lang: props.lang,
		staffLink: props.staffLink,
		isTaiNha: props.isTaiNha || false,
	});

	const handlePrevButtonClick = () => {
		if (swipeIdx > 0) {
			setSwipeIdx(swipeIdx - 1);
		}
	};

	const handleNextButtonClick = () => {
		if (!isLoading && swipeIdx < staff.length - 7) {
			setSwipeIdx(swipeIdx + 1);
		}
	};

	const formattedLink = link.startsWith("/") ? link : `/${link}`;
	return (
		<DealHotHomePageOrtheWrapv2>
			<DealHotHomePageInnerWrap>
				<DealHotHomePageInnerHeader>
					<DealHotHomePageInnerLabel>{props.label}</DealHotHomePageInnerLabel>
					{staff?.length > 0 && (
						<DealHotHomePageInnerLink to={formattedLink}>
							<SpaceSpan>{TranslateLabels[props.lang || "vi"]?.SEE_ALL}</SpaceSpan>
							<i
								className="fa fa-angle-right"
								aria-hidden="true"></i>
						</DealHotHomePageInnerLink>
					)}
				</DealHotHomePageInnerHeader>

				{staticContext?.data?.dataStaffListv2 ? (
					<DealHotHomePageInner>
						<StaffInfoSSR
							staff={staff}
							setSwipeIdx={setSwipeIdx}
							swipeIdx={swipeIdx}
							id={props.id}
						/>
					</DealHotHomePageInner>
				) : (
					<DealHotHomePageInner>
						<StaffInfo
							staff={staff}
							setSwipeIdx={setSwipeIdx}
							swipeIdx={swipeIdx}
						/>
					</DealHotHomePageInner>
				)}
				{staticContext?.newStyle ? (
					<>
						{staff?.length > 0 ? (
							<>
								<HomeSpaDivSSR
									dangerouslySetInnerHTML={{
										__html: `
										<button onClick="functionStaffInfoBack('${props.id || "0"}')">
											<i class="fa fa-angle-left" aria-hidden="true"></i>
										</button>`,
									}}
								/>
								<HomeSpaDivSSRNext
									dangerouslySetInnerHTML={{
										__html: `
										<button onClick="functionStaffInfoNext('${props.id || "0"}')">
											<i class="fa fa-angle-right" aria-hidden="true"></i>
										</button>`,
									}}
								/>
							</>
						) : (
							<DealHotHomePageNote>
								<DealHotHomePageNoteImg
									src="/static/img/Notes.png"
									alt={TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}
								/>
								<div>{TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}</div>
							</DealHotHomePageNote>
						)}
					</>
				) : (
					<>
						{staff?.length > 0 ? (
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
						{staff?.length > 0 && (
							<DealHotHomePageButtonRigthHomeKTV onClick={handleNextButtonClick}>
								<i
									className="fa fa-angle-right"
									aria-hidden="true"></i>
							</DealHotHomePageButtonRigthHomeKTV>
						)}
					</>
				)}
			</DealHotHomePageInnerWrap>
		</DealHotHomePageOrtheWrapv2>
	);
}
