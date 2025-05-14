import React, { useEffect, useLayoutEffect, useState } from "react";
import {
	HomeIntroSlidePanelWrap,
	HomeIntroSlidePanelCenter,
	HomeIntroSlidePanelInner,
	HomeIntroSlidePanelLeftMain,
	HomeIntroSlidePanelLeftWrap,
	HomeIntroSlidePanelLeftHeader,
	HomeIntroSlidePanelHeaderContent,
	HomeIntroSlidePanelRightMain,
	HomeIntroSlidePanelBg,
	HomeIntroSlidePanelImgWrap,
	HomeIntroSlidePanelImg,
	HomeIntroSlidePanelImgPath1,
	HomeIntroSlidePanelImgPath2,
	HomeIntroSlidePanelImgPath3,
	HomeIntroSlidePanelNavWrap,
	HomeIntroSlidePanelNavInner,
	HomeIntroSlidePanelNavIconLeft,
	HomeIntroSlidePanelNavIconRight,
	HomeIntroSlidePanelNavItem,
	HomeIntroSlidePanelImgWrapRes,
	HomeIntroSlideItem,
	HomeIntroSlidePanelImgPath,
	HomeIntroSlideItemWrap,
	HomeSlidePanelLeftBgWrap,
	HomeSlidePanelLeftBg,
	HomeIntroSlidePanelLeftHeaderSlide2,
	HomeIntroSlidePanelHeaderContentSlide2,
	HomeIntroPanelSlide2WrapLogo,
	HomeIntroPanelSlide2LogoImgWrap,
	HomeIntroPanelSlide2LogoImg,
	HomeIntroPanelSlide2LogoText,
	HomeIntroSlidePanelLeftWrapSlide2,
	HomeIntroSlidePanelImgWrapResSlide1,
	HomeSlidePanelLeftBgRes,
} from "./styled/HomeStyles";
import { autoPlay } from "react-swipeable-views-utils";
import { FlattenSimpleInterpolation } from "styled-components";

const AutoHomeIntroSlidePanelInner = autoPlay(HomeIntroSlidePanelInner);

export interface HomeBannerType {
	customBanner?: any | undefined;
	customContent?: any | undefined;
	customImgPath?: any | undefined;
	imgBannerBg?: string | undefined;
	imgContentBg?: string | undefined;
	imgImgBg?: string | undefined;
	imgPath?: string[] | undefined;
	content?: string | undefined;
	subContent?: string | undefined;
	imgBannerBgRes?: string | undefined;
}

export const SlideList: HomeBannerType[] = [
	{
		imgBannerBg: "./static/img/home-banner.png",
		imgBannerBgRes: "./static/img/home-banner-3.2-res.jpg",
	},
	{
		imgBannerBg: "./static/img/home-banner-4.2.jpg",
		imgBannerBgRes: "./static/img/home-banner-4.2-res.jpg",
	},
];
export default function HomeIntroSlidePanel() {
	const [idx, setIdx] = useState(0);

	return (
		<HomeIntroSlidePanelWrap>
			<HomeIntroSlidePanelCenter>
				<HomeIntroSlideList
					idx={idx}
					setIdx={setIdx}
				/>
				<HomeIntroSlidePanelNavWrap>
					<HomeIntroSlideControlNav
						idx={idx}
						changeIdx={setIdx}
						listLenght={SlideList.length}
					/>
				</HomeIntroSlidePanelNavWrap>
			</HomeIntroSlidePanelCenter>
		</HomeIntroSlidePanelWrap>
	);
}

export function HomeIntroSlideControlNav(props: {
	idx: number;
	changeIdx: (val: number) => void;
	listLenght: number;
	xStyleDistanceEx?: FlattenSimpleInterpolation;
}) {
	const changeDown = () => {
		if (props.idx === 0) {
			props.changeIdx(props.listLenght - 1);
			return;
		}
		props.changeIdx(props.idx - 1);
	};
	const changeUp = () => {
		if (props.idx >= props.listLenght - 1) {
			props.changeIdx(0);
			return;
		}
		props.changeIdx(props.idx + 1);
	};
	useEffect(() => {
		if (props.idx > props.listLenght - 1) {
			props.changeIdx(0);
			return;
		}
	}, [props.idx]);
	return (
		<HomeIntroSlidePanelNavInner $xStyleDistanceEx={props.xStyleDistanceEx}>
			<HomeIntroSlidePanelNavIconLeft onClick={changeDown}>
				<i
					className="fa fa-long-arrow-left"
					aria-hidden="true"></i>
			</HomeIntroSlidePanelNavIconLeft>
			<HomeIntroSlidePanelNavItem isActive={props.idx === 0}></HomeIntroSlidePanelNavItem>
			<HomeIntroSlidePanelNavItem
				isActive={props.idx != 0 && props.idx != props.listLenght - 1}></HomeIntroSlidePanelNavItem>
			<HomeIntroSlidePanelNavItem isActive={props.idx === props.listLenght - 1}></HomeIntroSlidePanelNavItem>
			<HomeIntroSlidePanelNavIconRight onClick={changeUp}>
				<i
					className="fa fa-long-arrow-right"
					aria-hidden="true"></i>
			</HomeIntroSlidePanelNavIconRight>
		</HomeIntroSlidePanelNavInner>
	);
}

export function HomeIntroSlideList(props: { idx: number; setIdx: (val: number) => void }) {
	return (
		<AutoHomeIntroSlidePanelInner
			index={props.idx || 0}
			onChangeIndex={props.setIdx}
			interval={5000}>
			{SlideList.map((item, index) => (
				<HomeIntroSlideItemFunction
					key={index}
					customBanner={item?.customBanner && item.customBanner}
					customContent={item.customContent && item.customContent}
					customImgPath={item.customImgPath && item.customImgPath}
					imgBannerBg={item.imgBannerBg && item.imgBannerBg}
					imgBannerBgRes={item.imgBannerBgRes && item.imgBannerBgRes}
					imgContentBg={item.imgContentBg && item.imgContentBg}
					imgImgBg={item.imgImgBg && item.imgImgBg}
					imgPath={item.imgPath && item.imgPath}
					content={item.content && item.content}
					subContent={item.subContent && item.subContent}
				/>
			))}
		</AutoHomeIntroSlidePanelInner>
	);
}

export const HomeIntroSlideItemFunction = (props: {
	customBanner?: any | undefined;
	customContent?: any | undefined;
	customImgPath?: any | undefined;
	imgBannerBg?: string | undefined;
	imgBannerBgRes?: string | undefined;
	imgContentBg?: string | undefined;
	imgImgBg?: string | undefined;
	imgPath?: string[] | undefined;
	content?: string | undefined;
	subContent?: string | undefined;
}) => {
	return (
		<>
			{props.customBanner ? (
				props.customBanner
			) : (
				<HomeIntroSlideItem>
					{props.imgBannerBg && (
						<HomeSlidePanelLeftBgWrap>
							<HomeSlidePanelLeftBg src={props.imgBannerBg} />
							<HomeSlidePanelLeftBgRes src={props.imgBannerBgRes || props.imgBannerBg} />
						</HomeSlidePanelLeftBgWrap>
					)}
					{props.customContent ? (
						props.customContent
					) : (
						<HomeIntroSlidePanelLeftMain>
							{props.imgContentBg && (
								<HomeSlidePanelLeftBgWrap>
									<HomeSlidePanelLeftBg src={props.imgContentBg} />
								</HomeSlidePanelLeftBgWrap>
							)}
							<HomeIntroSlidePanelLeftWrap>
								<HomeIntroSlidePanelLeftHeader>{props.content}</HomeIntroSlidePanelLeftHeader>
								<HomeIntroSlidePanelHeaderContent>{props.subContent}</HomeIntroSlidePanelHeaderContent>
							</HomeIntroSlidePanelLeftWrap>
						</HomeIntroSlidePanelLeftMain>
					)}
					{props.customImgPath ? (
						props.customImgPath
					) : (
						<HomeIntroSlidePanelRightMain>
							{props.imgImgBg && <HomeIntroSlidePanelBg src={props.imgImgBg}></HomeIntroSlidePanelBg>}
							<HomeIntroSlidePanelImgWrap>
								{props.imgPath &&
									props.imgPath.map((item, idx) => {
										return (
											<HomeIntroSlidePanelImgPath
												key={idx}
												src={item}
											/>
										);
									})}
							</HomeIntroSlidePanelImgWrap>
							<HomeIntroSlidePanelImgWrapRes>
								{props.imgPath && (
									<HomeIntroSlideItemWrap>
										{props.imgPath.map((item, idx) => {
											return (
												<HomeIntroSlidePanelImgPath
													key={idx}
													src={item}
												/>
											);
										})}
									</HomeIntroSlideItemWrap>
								)}
							</HomeIntroSlidePanelImgWrapRes>
						</HomeIntroSlidePanelRightMain>
					)}
				</HomeIntroSlideItem>
			)}
		</>
	);
};
