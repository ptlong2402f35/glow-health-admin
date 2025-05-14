import React, { useState } from "react";
import Banner from "../../../../models/Banner";
import {
	BannerHomePageImg,
	BannerHomePageImgContainer,
	BannerHomePageImgWrap,
	BannerHomePageWrap,
} from "../../home/styled/HomeStyles";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { AutoPlaySwipeableViewsRes, AutoPlaySwipeableViewsWeb } from "../../home/styled/StyledHomeBanner";

// export const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function BannerHome(props: { listBanner: Banner[]; lang: string; group?: string; groupRes?: string }) {
	const section2Item = props.listBanner.find((item) => item.group === props.group);
	const section2ItemRes = props.listBanner.find((item) => item.group === props.groupRes);

	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (index: number) => {
		setActiveIndex(index);
	};

	const [activeIndexRes, setActiveIndexRes] = useState(0);

	const handleSlideChangeRes = (index: number) => {
		setActiveIndexRes(index);
	};

	return (
		<BannerHomePageWrap>
			<AutoPlaySwipeableViewsWeb
				index={activeIndex}
				onChangeIndex={handleSlideChange}
				interval={5000}>
				{(section2Item?.items || []).map((item, index) => {
					const action = JSON.parse(item.action || "{}");
					return (
						<BannerHomePageImgContainer key={index}>
							<BannerHomePageImgWrap to={`${action?.link || ""}`}>
								<BannerHomePageImg
									src={typeof item.path === "string" ? item.path : ""}
									alt={`Slide ${index}`}
								/>
							</BannerHomePageImgWrap>
						</BannerHomePageImgContainer>
					);
				})}
			</AutoPlaySwipeableViewsWeb>
			<AutoPlaySwipeableViewsRes
				index={activeIndexRes}
				onChangeIndex={handleSlideChangeRes}
				interval={5000}>
				{(section2ItemRes?.items || []).map((item, index) => {
					const action = JSON.parse(item.action || "{}");
					return (
						<BannerHomePageImgContainer key={index}>
							<BannerHomePageImgWrap to={`${action?.link || ""}`}>
								<BannerHomePageImg
									src={typeof item.path === "string" ? item.path : ""}
									alt={`Slide ${index}`}
								/>
							</BannerHomePageImgWrap>
						</BannerHomePageImgContainer>
					);
				})}
			</AutoPlaySwipeableViewsRes>
		</BannerHomePageWrap>
	);
}
