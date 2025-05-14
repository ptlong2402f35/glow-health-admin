import React, { createContext, useEffect, useRef, useState } from "react";
import {
	DealHotHomePageButtonLeft,
	DealHotHomePageButtonRigth,
	DealHotHomePageImgIcon,
	DealHotHomePageInfo,
	DealHotHomePageInfoAdd,
	DealHotHomePageInfoName,
	DealHotHomePageInfoNameAdd,
	DealHotHomePageInfoOriginalPrice,
	DealHotHomePageInfoPrice,
	DealHotHomePageInfoReducedPrice,
	DealHotHomePageInfoStoreName,
	DealHotHomePageInfoStoreNameSpan,
	DealHotHomePageInfoWrap,
	DealHotHomePageInner,
	DealHotHomePageInnerHeader,
	DealHotHomePageInnerLabel,
	DealHotHomePageInnerLink,
	DealHotHomePageInnerSSR,
	DealHotHomePageInnerWrap,
	DealHotHomePageItem,
	DealHotHomePageItemDeal,
	DealHotHomePageItemDealImg,
	DealHotHomePageItemDealWrap,
	DealHotHomePageItemImg,
	DealHotHomePageItemImgVideo,
	DealHotHomePageItemLink,
	DealHotHomePageItemSSRWrap,
	DealHotHomePageItemStar,
	DealHotHomePageItemWrap,
	DealHotHomePageNote,
	DealHotHomePageNoteImg,
	DealHotHomePageWrap,
	DealHotSwipeableViews,
	HomeIntroSlidePanelInner,
	HomeSpaDivSSR,
	HomeSpaDivSSRNext,
	StaffServiceInfoSSRWrap,
} from "../styled/HomeStyles";
import useGetStaffServiceHotDeal from "../hooks/useGetStaffServiceHotDeal";
import { StaffServiceHome } from "../../../../models/Service";
import useStaticContext from "../../../hooks/useStaticContext";
import { useParams } from "react-router";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import { Link } from "react-router-dom";
import { SpaceSpan } from "../styled/HomeService";

export function formatPrice(price: any) {
	if (price < 1000) {
		return Math.ceil(price).toString() + "K";
	} else {
		let formattedPrice = "";
		if (price % 1000 >= 500) {
			formattedPrice = Math.ceil(price / 1000).toString() + "K";
		} else {
			formattedPrice = Math.floor(price / 1000).toString() + "K";
		}
		const parts = formattedPrice.split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		return parts.join(".");
	}
}

export default function DealHotHomePage(props: { isTaiNha: boolean }) {
	let { lang } = useParams<{ lang: string }>();
	const { staffService, swipeIdx, setSwipeIdx, isLoading, allUrl } = useGetStaffServiceHotDeal({
		lang: lang || "vi",
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
		<DealHotHomePageWrap>
			<DealHotHomePageInnerWrap>
				<DealHotHomePageInnerHeader>
					<DealHotHomePageInnerLabel>
						{TranslateLabels[lang]?.DEAL_HOT || "⚡ Hot Deal"}
					</DealHotHomePageInnerLabel>
					<DealHotHomePageInnerLink to={formattedLink}>
						<SpaceSpan>{TranslateLabels[lang || "vi"]?.SEE_ALL}</SpaceSpan>
						<i
							className="fa fa-angle-right"
							aria-hidden="true"></i>
					</DealHotHomePageInnerLink>
				</DealHotHomePageInnerHeader>
				<>
					{staticContext?.data?.dataStaffServiceSSR ? (
						<DealHotHomePageInnerSSR className={`StaffInfoWrap_hot_deal`}>
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
				</>
				{staticContext?.newStyle ? (
					<>
						{staffService?.length > 0 ? (
							<>
								<HomeSpaDivSSR
									dangerouslySetInnerHTML={{
										__html: `
						<button  onClick="functionStaffInfoBack('${"hot_deal"}')">
							<i class="fa fa-angle-left" aria-hidden="true"></i>
						</button>
						`,
									}}
								/>
								<HomeSpaDivSSRNext
									dangerouslySetInnerHTML={{
										__html: `
						<button  onClick="functionStaffInfoNext('${"hot_deal"}')">
							<i class="fa fa-angle-right" aria-hidden="true"></i>
						</button>
						`,
									}}
								/>
							</>
						) : (
							<DealHotHomePageNote>
								<DealHotHomePageNoteImg src="/static/img/Notes.png" alt="Biểu tượng danh sách trống"/>
								<div>{TranslateLabels[lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}</div>
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
								<DealHotHomePageNoteImg src="/static/img/Notes.png" alt="Biểu tượng danh sách trống"/>
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
					</>
				)}
			</DealHotHomePageInnerWrap>
		</DealHotHomePageWrap>
	);
}

export function StaffServiceInfo(props: {
	staffService: StaffServiceHome[];
	swipeIdx: number;
	setSwipeIdx: (val: number) => void;
}) {
	return (
		<DealHotSwipeableViews
			index={props.swipeIdx}
			onChangeIndex={(index: number) => {
				props.setSwipeIdx(index);
			}}
			enableMouseEvents>
			{props.staffService.map((val, index) => {
				return (
					<DealHotHomePageItemWrap>
						<DealHotHomePageItemLink to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
							<DealHotHomePageItem>
								<DealHotHomePageItemImg
									src={val.staff?.user?.urlImage || "/"}
									alt={"Ảnh mô tả dịch vụ " + val.name || "Glow_Hot_Deall" + " số " + index}
								/>
								{/* to={val.url?.startsWith('/') ? '/dich-vu' + val.url : '/dich-vu/' + val.url || ""} */}
								<DealHotHomePageItemDealWrap>
									<DealHotHomePageItemDeal>
										{val.displayReducedValuePercentage?.toFixed(0)} % OFF
									</DealHotHomePageItemDeal>
									<DealHotHomePageItemDealImg src="./static/img/Hotdeal.png" />
								</DealHotHomePageItemDealWrap>

								{val.staff?.rateAvg ? (
									<DealHotHomePageItemStar>
										<DealHotHomePageImgIcon src={"./static/img/Star.png"} alt="Biểu tượng đánh giá"/>{" "}
										{val.staff?.rateAvg.toFixed(1)}
									</DealHotHomePageItemStar>
								) : (
									""
								)}
							</DealHotHomePageItem>
						</DealHotHomePageItemLink>
						<DealHotHomePageInfoWrap to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
							<DealHotHomePageInfoName>{val.name || val.service?.name || ""}</DealHotHomePageInfoName>
							<DealHotHomePageInfo>
								<DealHotHomePageInfoNameAdd>
									<DealHotHomePageInfoStoreName>
										<DealHotHomePageImgIcon
											src="./static/img/store01.png"
											alt="Ảnh mô tả tên cơ sở"
										/>
										<DealHotHomePageInfoStoreNameSpan>
											{val.staff?.name}
										</DealHotHomePageInfoStoreNameSpan>
									</DealHotHomePageInfoStoreName>
									<DealHotHomePageInfoAdd>
										<DealHotHomePageImgIcon
											src="./static/img/location01.png"
											alt="Ảnh mô tả vị trí cơ sở"
										/>
										{val.staff?.province?.name}
									</DealHotHomePageInfoAdd>
								</DealHotHomePageInfoNameAdd>
								<DealHotHomePageInfoPrice>
									<DealHotHomePageInfoOriginalPrice>
										{formatPrice(val.displayOriginalPrice)}
									</DealHotHomePageInfoOriginalPrice>
									<DealHotHomePageInfoReducedPrice>
										{formatPrice(val.displayReducedPrice)}
									</DealHotHomePageInfoReducedPrice>
								</DealHotHomePageInfoPrice>
							</DealHotHomePageInfo>
						</DealHotHomePageInfoWrap>
					</DealHotHomePageItemWrap>
				);
			})}
		</DealHotSwipeableViews>
	);
}

export function StaffServiceInfoSSR(props: {
	staffService: StaffServiceHome[];
	swipeIdx: number;
	setSwipeIdx: (val: number) => void;
}) {
	return (
		<StaffServiceInfoSSRWrap>
			{props.staffService.map((val, index) => {
				return (
					<DealHotHomePageItemSSRWrap>
						<DealHotHomePageItemLink to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
							<DealHotHomePageItem>
								{val.staff?.promotionalVideos && val.staff?.promotionalVideos.length > 0 && 
								<DealHotHomePageItemImgVideo 
								src={"/static/img/isvideo.png"}
								alt={"Ảnh mô tả dịch vụ có video" + val.name || "Glow_Hot_Deall" + " số " + index}/>
								}
								
								<DealHotHomePageItemImg
									src={val.staff?.user?.thumbnailImage ||val.staff?.user?.urlImage || "/"}
									alt={"Ảnh mô tả dịch vụ " + val.name || "Glow_Hot_Deall" + " số " + index}
								/>

								<DealHotHomePageItemDealWrap>
									<DealHotHomePageItemDeal>
										{val.displayReducedValuePercentage?.toFixed(0)} % OFF
									</DealHotHomePageItemDeal>
									<DealHotHomePageItemDealImg src="./static/img/Hotdeal.png" alt="Biểu tượng giảm giá"/>
								</DealHotHomePageItemDealWrap>

								{val.staff?.rateAvg ? (
									<DealHotHomePageItemStar>
										<DealHotHomePageImgIcon src={"./static/img/Star.png"} alt="Biểu tượng đánh giá sao"/> {val.staff?.rateAvg}
									</DealHotHomePageItemStar>
								) : (
									""
								)}
							</DealHotHomePageItem>
						</DealHotHomePageItemLink>
						<DealHotHomePageInfoWrap to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
							<DealHotHomePageInfoName>{val.name || val.service?.name || ""}</DealHotHomePageInfoName>
							<DealHotHomePageInfo>
								<DealHotHomePageInfoNameAdd>
									<DealHotHomePageInfoStoreName>
										<DealHotHomePageImgIcon
											src="./static/img/store01.png"
											alt="Ảnh mô tả tên cơ sở"
										/>
										<DealHotHomePageInfoStoreNameSpan>
											{val.staff?.name}
										</DealHotHomePageInfoStoreNameSpan>
									</DealHotHomePageInfoStoreName>
									<DealHotHomePageInfoAdd>
										<DealHotHomePageImgIcon
											src="./static/img/location01.png"
											alt="Ảnh mô tả vị trí cơ sở"
										/>
										{val.staff?.province?.name}
									</DealHotHomePageInfoAdd>
								</DealHotHomePageInfoNameAdd>
								<DealHotHomePageInfoPrice>
									<DealHotHomePageInfoOriginalPrice>
										{formatPrice(val.displayOriginalPrice)}
									</DealHotHomePageInfoOriginalPrice>
									<DealHotHomePageInfoReducedPrice>
										{formatPrice(val.displayReducedPrice)}
									</DealHotHomePageInfoReducedPrice>
								</DealHotHomePageInfoPrice>
							</DealHotHomePageInfo>
						</DealHotHomePageInfoWrap>
					</DealHotHomePageItemSSRWrap>
				);
			})}
		</StaffServiceInfoSSRWrap>
	);
}
