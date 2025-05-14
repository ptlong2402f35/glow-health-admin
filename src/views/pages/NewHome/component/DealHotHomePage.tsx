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
	DealHotHomePageInnerWrap,
	DealHotHomePageItem,
	DealHotHomePageItemDeal,
	DealHotHomePageItemDealImg,
	DealHotHomePageItemDealWrap,
	DealHotHomePageItemImg,
	DealHotHomePageItemLink,
	DealHotHomePageItemSSRWrap,
	DealHotHomePageItemStar,
	DealHotHomePageItemWrap,
	DealHotHomePageNote,
	DealHotHomePageNoteImg,
	DealHotHomePageWrap,
	DealHotSwipeableViews,
	HomeIntroSlidePanelInner,
	StaffServiceInfoSSRWrap,
} from "../../home/styled/HomeStyles";
import Service, { StaffServiceHome } from "../../../../models/Service";

// function formatPrice(price:any) {
//     if (price >= 1000) {
//         return (price / 1000).toFixed(price % 1000 !== 0 ? 3 : 0).replace('.', ',') + 'K';
//     } else {
//         return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//     }
// }
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

export function StaffListService(props: {
	staffService: Service[];
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
			{props.staffService?.map((val, index) => {
				return (
					<DealHotHomePageItemWrap>
						<DealHotHomePageItemLink to={val?.url?.startsWith("/") ? val?.url : "/" + val?.url || ""}>
							<DealHotHomePageItem>
								<DealHotHomePageItemImg
									src={val.staffService?.staff?.user?.urlImage || "/"}
									alt={"Ảnh mô tả dịch vụ " + val.name || "Glow_Hot_Deall" + " số " + index}
								/>
								{/* to={val.staffService?.url?.startsWith('/') ? '/dich-vu' + val.staffService?.url : '/dich-vu/' + val.staffService?.url || ""} */}
								<DealHotHomePageItemDealWrap>
									<DealHotHomePageItemDeal>
										{val.staffService?.displayReducedValuePercentage?.toFixed(0)} % OFF
									</DealHotHomePageItemDeal>
									<DealHotHomePageItemDealImg src="./static/img/Hotdeal.png" />
								</DealHotHomePageItemDealWrap>

								{val.staffService?.staff?.rateAvg ? (
									<DealHotHomePageItemStar>
										<DealHotHomePageImgIcon src={"./static/img/Star.png"} alt="Biểu tượng đánh giá"/>{" "}
										{val.staffService?.staff?.rateAvg.toFixed(1)}
									</DealHotHomePageItemStar>
								) : (
									""
								)}
							</DealHotHomePageItem>
						</DealHotHomePageItemLink>
						<DealHotHomePageInfoWrap to={val?.url?.startsWith("/") ? val?.url : "/" + val?.url || ""}>
							<DealHotHomePageInfoName>
								{val.staffService?.name || val.staffService?.service?.name || ""}
							</DealHotHomePageInfoName>
							<DealHotHomePageInfo>
								<DealHotHomePageInfoNameAdd>
									<DealHotHomePageInfoStoreName>
										<DealHotHomePageImgIcon
											src="./static/img/store01.png"
											alt="Ảnh mô tả tên cơ sở"
										/>
										<DealHotHomePageInfoStoreNameSpan>
											{val.staffService?.staff?.name}
										</DealHotHomePageInfoStoreNameSpan>
									</DealHotHomePageInfoStoreName>
									<DealHotHomePageInfoAdd>
										<DealHotHomePageImgIcon
											src="./static/img/location01.png"
											alt="Ảnh mô tả vị trí cơ sở"
										/>
										{val.staffService?.staff?.province?.name}
									</DealHotHomePageInfoAdd>
								</DealHotHomePageInfoNameAdd>
								<DealHotHomePageInfoPrice>
									<DealHotHomePageInfoOriginalPrice>
										{formatPrice(val.staffService?.displayOriginalPrice)}
									</DealHotHomePageInfoOriginalPrice>
									<DealHotHomePageInfoReducedPrice>
										{formatPrice(val.staffService?.displayReducedPrice)}
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

export function StaffListServiceSSR(props: {
	staffService: Service[];
	swipeIdx: number;
	setSwipeIdx: (val: number) => void;
}) {
	return (
		<StaffServiceInfoSSRWrap>
			{props.staffService.map((val, index) => {
				return (
					<DealHotHomePageItemSSRWrap>
						<DealHotHomePageItemLink to={val?.url?.startsWith("/") ? val?.url : "/" + val?.url || ""}>
							<DealHotHomePageItem>
								<DealHotHomePageItemImg
									src={val.staffService?.staff?.user?.urlImage || "/"}
									alt={"Ảnh mô tả dịch vụ " + val.name || "Glow_Hot_Deall" + " số " + index}
								/>

								<DealHotHomePageItemDealWrap>
									<DealHotHomePageItemDeal>
										{val.staffService?.displayReducedValuePercentage?.toFixed(0)} % OFF
									</DealHotHomePageItemDeal>
									<DealHotHomePageItemDealImg src="./static/img/Hotdeal.png" />
								</DealHotHomePageItemDealWrap>

								{val.staffService?.staff?.rateAvg ? (
									<DealHotHomePageItemStar>
										<DealHotHomePageImgIcon src={"./static/img/Star.png"} alt="Biểu tượng đánh giá"/>{" "}
										{val.staffService?.staff?.rateAvg}
									</DealHotHomePageItemStar>
								) : (
									""
								)}
							</DealHotHomePageItem>
						</DealHotHomePageItemLink>
						<DealHotHomePageInfoWrap to={val?.url?.startsWith("/") ? val?.url : "/" + val?.url || ""}>
							<DealHotHomePageInfoName>
								{val.staffService?.name || val.staffService?.service?.name || ""}
							</DealHotHomePageInfoName>
							<DealHotHomePageInfo>
								<DealHotHomePageInfoNameAdd>
									<DealHotHomePageInfoStoreName>
										<DealHotHomePageImgIcon
											src="./static/img/store01.png"
											alt="Ảnh mô tả tên cơ sở"
										/>
										{val.staffService?.staff?.name}
									</DealHotHomePageInfoStoreName>
									<DealHotHomePageInfoAdd>
										<DealHotHomePageImgIcon
											src="./static/img/location01.png"
											alt="Ảnh mô tả vị trí cơ sở"
										/>
										{val.staffService?.staff?.province?.name}
									</DealHotHomePageInfoAdd>
								</DealHotHomePageInfoNameAdd>
								<DealHotHomePageInfoPrice>
									<DealHotHomePageInfoOriginalPrice>
										{formatPrice(val.staffService?.displayOriginalPrice)}
									</DealHotHomePageInfoOriginalPrice>
									<DealHotHomePageInfoReducedPrice>
										{formatPrice(val.staffService?.displayReducedPrice)}
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
