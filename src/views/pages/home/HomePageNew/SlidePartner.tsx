import React, { createContext, useEffect, useRef, useState } from "react";
import environments from "../../../../environment";
import {
	DealHotHomePageButtonLeft,
	DealHotHomePageButtonRigth,
	SlideHomePageButtonLeft,
	SlideHomePageButtonRigth,
	SlideLabel,
	SlidePageToWrap,
	SlideSwipeableViews,
	SlideSwipeableViewsInner,
	SlideSwipeableViewsInnerImg,
	SlideSwipeableViewsWrap,
} from "../styled/HomeStyles";

export default function SlidePartner() {
	const [swipeIdx, setSwipeIdx] = useState(0);
	const slidePartners = JSON.parse(environments?.slidePartner ? environments?.slidePartner : "[]");

	const handlePrevButtonClick = () => {
		if (swipeIdx > 0) {
			setSwipeIdx(swipeIdx - 1);
		}
	};

	const handleNextButtonClick = () => {
		if (swipeIdx < slidePartners?.length - 5) {
			setSwipeIdx(swipeIdx + 1);
		}
	};

	return (
		<SlidePageToWrap>
			<SlideLabel>Đối tác của Glow</SlideLabel>
			<SlideSwipeableViewsWrap>
				<SlideSwipeableViews
					index={swipeIdx}
					onChangeIndex={(index: number) => setSwipeIdx(index)}
					enableMouseEvents>
					{slidePartners.map((val: any, index: number) => {
						return (
							<SlideSwipeableViewsInner key={index}>
								<SlideSwipeableViewsInnerImg src={val.img} />
							</SlideSwipeableViewsInner>
						);
					})}
				</SlideSwipeableViews>
			</SlideSwipeableViewsWrap>
			<SlideHomePageButtonLeft onClick={handlePrevButtonClick}>
				<i
					className="fa fa-angle-left"
					aria-hidden="true"></i>
			</SlideHomePageButtonLeft>
			<SlideHomePageButtonRigth onClick={handleNextButtonClick}>
				<i
					className="fa fa-angle-right"
					aria-hidden="true"></i>
			</SlideHomePageButtonRigth>
		</SlidePageToWrap>
	);
}
