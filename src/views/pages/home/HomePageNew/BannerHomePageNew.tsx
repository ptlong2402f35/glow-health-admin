import React, { useState, useEffect } from "react";
import {
	BannerHomePageImg,
	BannerHomePageImgContainer,
	BannerHomePageImgWrap,
	BannerHomePageImgWrapv2,
	BannerHomePageImgWrapv2Disable,
	BannerHomePageImgv2,
	BannerHomePageWrap,
	BannerHomePageWrapv2,
	BannerHomePageWrapv3,
	BannerImageWrapper,
	BannerImgContainer,
} from "../styled/HomeStyles";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import {
	BannerHomePageAutoPlaySwipeableViews,
	BannerHomePageAutoPlaySwipeableViewsDisable,
	BannerHomePageAutoPlaySwipeableViewsRes,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import Banner from "../../../../models/Banner";
import useStaticContext from "../../../hooks/useStaticContext";

export const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function BannerHomePageNew(props: { listBanner: Banner[]; lang: string }) {
	const section2Item = props.listBanner.find((item) => item.group === "section_web");

	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<BannerHomePageWrapv3>
			<AutoPlaySwipeableViews
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
			</AutoPlaySwipeableViews>
		</BannerHomePageWrapv3>
	);
}

export function BannerHomePageNew2(props: { listBanner: Banner[]; lang: string }) {
	const section2Item = props.listBanner.find((item) => item.group === "section_res");
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (index: number) => {
		if (section2Item && section2Item.items && section2Item.items.length > 3) {
			setActiveIndex(index >= section2Item.items.length - 3 ? 0 : index);
		} else {
			setActiveIndex(0);
		}
	};

	const handleSlideChangeRes = (index: number) => {
		setActiveIndex(index);
	};

	const { staticContext } = useStaticContext();
	const handleClickBanner = (action: any) => {
		const link = action?.link || "/";
		const url = `/${props.lang}${link}`;
		window.location.href = url;
	};
	return (
		<BannerHomePageWrapv2>
			{staticContext?.data?.dataBannerView ? (
				<BannerHomePageAutoPlaySwipeableViewsDisable>
					{(section2Item?.items || []).map((item, index) => {
						const action = JSON.parse(item.action || "{}");
						return (
							<BannerHomePageImgWrapv2Disable key={index}>
								<BannerHomePageImgv2
									src={typeof item.path === "string" ? item.path : ""}
									alt={`Slide ${index}`}
								/>
							</BannerHomePageImgWrapv2Disable>
						);
					})}
				</BannerHomePageAutoPlaySwipeableViewsDisable>
			) : (
				<>
					<BannerHomePageAutoPlaySwipeableViews
						index={activeIndex}
						onChangeIndex={handleSlideChange}
						interval={5000}>
						{(section2Item?.items || []).map((item, index) => {
							const action = JSON.parse(item.action || "{}");
							return (
								<BannerHomePageImgContainer key={index}>
									<BannerHomePageImgWrapv2 onClick={() => handleClickBanner(action)}>
										<BannerHomePageImgv2
											src={typeof item.path === "string" ? item.path : ""}
											alt={`Slide ${index}`}
										/>
									</BannerHomePageImgWrapv2>
								</BannerHomePageImgContainer>
							);
						})}
					</BannerHomePageAutoPlaySwipeableViews>
					<BannerHomePageAutoPlaySwipeableViewsRes
						index={activeIndex}
						onChangeIndex={handleSlideChangeRes}
						interval={5000}>
						{(section2Item?.items || []).map((item, index) => {
							const action = JSON.parse(item.action || "{}");
							return (
								<BannerHomePageImgContainer key={index}>
									<BannerHomePageImgWrapv2 onClick={() => handleClickBanner(action)}>
										<BannerHomePageImgv2
											src={typeof item.path === "string" ? item.path : ""}
											alt={`Slide ${index}`}
										/>
									</BannerHomePageImgWrapv2>
								</BannerHomePageImgContainer>
							);
						})}
					</BannerHomePageAutoPlaySwipeableViewsRes>
				</>
			)}
		</BannerHomePageWrapv2>
	);
}
