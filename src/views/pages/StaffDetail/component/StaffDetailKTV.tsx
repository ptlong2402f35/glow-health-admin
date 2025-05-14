import React, { useEffect, useState } from "react";
import useGetDetailStaff from "../hook/getDetailStaff";
import { useHistory, useParams } from "react-router";
import BreadCrumbStaff from "../../FilterAtHome/component/BreadCrumb";
import {
	AutoPlaySwipeableViewsStaffReview,
	AutoPlaySwipeableViewsStaffReviewImg,
	AutoPlaySwipeableViewsStaffReviewStore,
	BannerHomePageAutoPlaySwipeableViewsRes,
	Dot,
	DotsWrapper,
	ExperienceSpaWrap,
	ReviewPageButtonLeft,
	ReviewPageButtonLeftSSR,
	ReviewPageButtonLeftStore,
	ReviewPageButtonLeftStoreSSR,
	ReviewPageButtonRigth,
	ReviewPageButtonRigthSSR,
	ReviewPageButtonRigthStore,
	ReviewPageButtonRigthStoreSSR,
	ReviewSwipeableView,
	ReviewSwipeableViewSSR,
	StaffDetailPageContentAutoPlaySwipeableViewsRes,
	StaffDetailPageContentAutoPlaySwipeableViewsResImg,
	StaffDetailPageContentAutoPlaySwipeableViewsResImgWrap,
	StaffDetailPageContentAutoPlaySwipeableViewsResStoreImg,
	StaffDetailPageContentAutoPlaySwipeableViewsResStoreImgWrap,
	StaffDetailPageContentBottom,
	StaffDetailPageContentBottomGroup,
	StaffDetailPageContentBottomGroupName,
	StaffDetailPageContentBottomGroupService,
	StaffDetailPageContentBottomGroupServiceContent,
	StaffDetailPageContentBottomGroupServiceContentButton,
	StaffDetailPageContentBottomGroupServiceContentButtonKTV,
	StaffDetailPageContentBottomGroupServiceContentDiv,
	StaffDetailPageContentBottomGroupServiceContentKTV,
	StaffDetailPageContentBottomGroupServiceKTV,
	StaffDetailPageContentBottomGroupServiceMap,
	StaffDetailPageContentBottomGroupServiceName,
	StaffDetailPageContentBottomGroupServicePrice,
	StaffDetailPageContentBottomGroupServicePriceKTV,
	StaffDetailPageContentBottomGroupServiceWrap,
	StaffDetailPageContentBottomGroupSolid,
	StaffDetailPageContentTop,
	StaffDetailPageContentTopImg,
	StaffDetailPageContentTopImgInner,
	StaffDetailPageContentTopImgInnerChild,
	StaffDetailPageContentTopImgInnerChildStore,
	StaffDetailPageContentTopImgInnerStore,
	StaffDetailPageContentTopImgLeft,
	StaffDetailPageContentTopImgLeftChild,
	StaffDetailPageContentTopImgLeftChildSSR,
	StaffDetailPageContentTopImgLeftKTV,
	StaffDetailPageContentTopImgLeftKTVSSR,
	StaffDetailPageContentTopImgLeftStore,
	StaffDetailPageContentTopImgRight,
	StaffDetailPageContentTopImgRightKTV,
	StaffDetailPageContentTopImgRightKTVSSR,
	StaffDetailPageContentTopImgRightKTVSSRInner,
	StaffDetailPageContentTopImgRightStore,
	StaffDetailPageContentTopImgStore,
	StaffDetailPageContentTopInfo,
	StaffDetailPageContentTopInfoAdress,
	StaffDetailPageContentTopInfoAdressImg,
	StaffDetailPageContentTopInfoAdressStar,
	StaffDetailPageContentTopInfoButton,
	StaffDetailPageContentTopInfoButtonv2,
	StaffDetailPageContentTopInfoButtonv2Link,
	StaffDetailPageContentTopInfoDescription,
	StaffDetailPageContentTopInfoDescriptionContent,
	StaffDetailPageContentTopInfoDescriptionName,
	StaffDetailPageContentTopInfoHastag,
	StaffDetailPageContentTopInfoHastagLink,
	StaffDetailPageContentTopInfoName,
	StaffDetailPageContentTopInfoStar,
	StaffDetailPageContentTopInfoStarImg,
	StaffDetailPageContentTopInfoStarList,
	StaffDetailPageContentTopInfoStarListInnerSSR,
	StaffDetailPageContentTopInfoStarListSSR,
	StaffDetailPageContentTopInfoStarListWrap,
	StaffDetailPageContentTopInfoStarResWrap,
	StaffDetailPageContentTopInfoStarTitle,
	StaffDetailPageContentTopInfoStarTitleImg,
	StaffDetailPageContentTopInfoStarWrap,
	StaffDetailPageTitle,
	StaffDetailPageWrap,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import { Link } from "react-router-dom";
import useGetReviewStaff, { getFilteGetReviewStaff } from "../hook/getReviewStaff";
import { StaffInfoAutoPlayImgCheck, StaffInfoAutoPlayImgCheckBigSize } from "../../home/styled/HomeStyles";
import Staff, { ServiceTree, ValidateStatusType } from "../../../../models/Staff";
import StaffService from "../../../../models/StaffService";
import { Image } from "../../../../models/Service";
import environments from "../../../../environment";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import StaffDetailSuggest from "./SuggestStaff";
import AdsenseComponent from "../../../controls/AdsenseComponent";
import { AdsenseWrap } from "../styled/StaffDetailStyle";
import ContentDetail from "../../Content/ContentDetail";
import FakeReview from "../../../../models/FakeReview";
import useStaticContext from "../../../hooks/useStaticContext";
import { GetReviewInner } from "./GetReviewNoDialog";

export default function StaffDetailKTV(props: { staff?: Staff; lang: string; reload?: () => void }) {
	const { star, setSwipeIdx, swipeIdx, count } = getFilteGetReviewStaff({ id: props.staff?.id || 0 });

	const [selectedImage, setSelectedImage] = useState(props.staff?.user?.urlImage || "");
	const { staticContext } = useStaticContext();
	useEffect(() => {
		setSelectedImage(props.staff?.user?.urlImage || "");
	}, [props.staff]);

	const handleRedirect = () => {
		const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
		const isAndroid = /Android/.test(navigator.userAgent);

		if (isiOS) {
			if (!window.location.pathname.includes("appstore")) {
				window.location.href = "https://apps.apple.com/vn/app/glow/id6443428819?l=vi";
			}
		} else if (isAndroid) {
			if (!window.location.pathname.includes("googleplay")) {
				window.location.href = "https://play.google.com/store/apps/details?id=com.glow.mobileApp&pli=1";
			}
		} else {
			if (window.location.pathname !== "/") {
				window.location.href = "/";
			}
		}
	};

	const { lang } = useParams<{ lang: string }>();
	const history = useHistory();

	const handleBlog = () => {
		window.location.href = (environments.redirecturl || "").replace(
			/\$\$\$lang\$\$\$/gi,
			lang ? "/" + lang : "/vi"
		);
	};

	const handleDownload = () => {
		// history.push("https://onelink.to/uzahr4");
		window.location.href = "https://onelink.to/uzahr4";
	};

	const handlePrevButtonClick = () => {
		if (swipeIdx > 0) {
			setSwipeIdx(swipeIdx - 1);
		}
	};

	const handleNextButtonClick = () => {
		if (swipeIdx < star?.length - 1) {
			setSwipeIdx(swipeIdx + 1);
		}
	};
	return (
		<StaffDetailPageWrap>
			<BreadCrumbStaff breadCrumb={props.staff?.breadcrumb || []} />
			{/* <StaffDetailPageTitle>
				{props.staff?.pageTitle || "Massage tại nhà"} {props.staff?.store?.name || ""}
				{props.staff?.name || props.staff?.user?.userName}
			</StaffDetailPageTitle> */}
			<StaffDetailPageContentTop>
				{/* <StaffDetailPageContentImg
						staff={props.staff}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/> */}

				{staticContext?.newStyle ? (
					<StaffDetailPageContentImgStoreSSR
						staff={props.staff}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
						atHome={true}
					/>
				) : (
					<StaffDetailPageContentImgStore
						staff={props.staff}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
						atHome={true}
					/>
				)}
				<StaffDetailPageContentTopInfo>
					<StaffDetailPageContentTopInfoName>
						{staticContext?.data?.h1Content ||props.staff?.name || props.staff?.user?.userName}
						<>
							{props.staff?.validateStatus === ValidateStatusType.Verification && (
								<StaffInfoAutoPlayImgCheckBigSize
									src="./static/img/Check.png"
									alt="Biểu tượng xác minh"
								/>
							)}{" "}
						</>
					</StaffDetailPageContentTopInfoName>
					<StaffDetailPageContentTopInfoAdressStar>
						<StaffDetailPageContentTopInfoAdress>
							<StaffDetailPageContentTopInfoAdressImg
								src="./static/img/location01.png"
								alt="Biểu tượng vị trí"
							/>
							{props.staff?.province?.name}
						</StaffDetailPageContentTopInfoAdress>
						<StaffDetailPageContentTopInfoStar>
							<StaffDetailPageContentTopInfoStarImg src="./static/img/StarDetail.png" alt="Biểu tượng đánhg giá"/>
							{props.staff?.rateAvg} ({props.staff?.countReview}{" "}
							{TranslateLabels[props.lang]?.FILTERS_REVIEWS || "Đánh giá"})
						</StaffDetailPageContentTopInfoStar>
					</StaffDetailPageContentTopInfoAdressStar>
					<StaffDetailPageContentTopInfoDescription>
						{/* <StaffDetailPageContentTopInfoDescriptionName>
						{TranslateLabels[props.lang]?.DESCRIPTION|| "Mô tả"}
						</StaffDetailPageContentTopInfoDescriptionName> */}
						<StaffDetailPageContentTopInfoDescriptionContent>
							{props.staff?.description}
						</StaffDetailPageContentTopInfoDescriptionContent>
						<StaffDetailPageContentTopInfoHastag>
							{props.staff?.hashTag?.map((val, index) => {
								return (
									<StaffDetailPageContentTopInfoHastagLink to={"/tags/" + val.url || ""}>
										<>{val.label}</>
									</StaffDetailPageContentTopInfoHastagLink>
								);
							})}
						</StaffDetailPageContentTopInfoHastag>
						{/* <StaffDetailPageContentTopInfoButton onClick={props.staff?.type === 3 ? handleRedirect : handleBlog}>{TranslateLabels[props.lang]?.BOOK_NOW}</StaffDetailPageContentTopInfoButton> */}
						<StaffDetailPageContentTopInfoButtonv2Link
							href={(environments.redirecturl || "").replace(
								/(\/(vi|en|kr))/,
								lang ? `/${lang}` : "/vi"
							)}>
							<StaffDetailPageContentTopInfoButtonv2>
								{TranslateLabels[props.lang]?.BOOK_NOW}
							</StaffDetailPageContentTopInfoButtonv2>
						</StaffDetailPageContentTopInfoButtonv2Link>
					</StaffDetailPageContentTopInfoDescription>
				</StaffDetailPageContentTopInfo>
			</StaffDetailPageContentTop>

			<StaffDetailPageContentBottom>
				{props.staff?.serviceTree?.map((e, i) => {
					return (
						<StaffDetailPageContentBottomGroup>
							<StaffDetailPageContentBottomGroupName>
								{props.staff?.type === 3
									? (TranslateLabels[props.lang]?.LOGIN_VOUCHER || "Voucher") + " " + e?.name
									: e?.name + " " + (TranslateLabels[props.lang]?.AT_HOME || "tại nhà")}
							</StaffDetailPageContentBottomGroupName>
							<StaffDetailPageContentBottomGroupSolid></StaffDetailPageContentBottomGroupSolid>
							<StaffDetailPageContentBottomGroupServiceWrap>
								{e?.staffService?.map((val, index) => {
									return (
										<StaffDetailPageContentBottomGroupServiceKTV>
											<StaffDetailPageContentBottomChild val={val} />
										</StaffDetailPageContentBottomGroupServiceKTV>
									);
								})}
							</StaffDetailPageContentBottomGroupServiceWrap>
						</StaffDetailPageContentBottomGroup>
					);
				})}
			</StaffDetailPageContentBottom>
			<GetReviewInner
				lang={props.lang || "vi"}
				staff={props.staff}
				star={star}
				count={count}
				NoImg={true}
			/>
			{props.staff && (
				<StaffDetailSuggest
					lang={props.lang}
					districtId={props.staff?.district?.id}
					serviceGroups={props.staff?.serviceGroups}
					staff={props.staff}
					reload={props.reload}
				/>
			)}
			<ContentDetail
				labelData={props.staff?.labelData}
				name={props.staff?.name || props.staff?.user?.userName}
			/>

			<AdsenseWrap>
				<AdsenseComponent AdFormat="9297526930" />
			</AdsenseWrap>
		</StaffDetailPageWrap>
	);
}

export function StaffDetailPageContentBottomChild(props: { val: StaffService }) {
	const [selectedPriceIndex, setSelectedPriceIndex] = useState(0);

	const handlePriceSelection = (idx: number) => {
		setSelectedPriceIndex(idx);
	};

	const selectedPrice = props.val.prices?.[selectedPriceIndex]?.price || 0;

	const formatPrice = (price: number) => {
		return price
			.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
			.replace(/\s/g, "")
			.replace("₫", "đ");
	};
	return (
		<>
			<StaffDetailPageContentBottomGroupServiceName>
				{props.val.name}
				<StaffDetailPageContentBottomGroupServicePriceKTV>
					{formatPrice(selectedPrice)}
				</StaffDetailPageContentBottomGroupServicePriceKTV>
			</StaffDetailPageContentBottomGroupServiceName>
			<StaffDetailPageContentBottomGroupServiceContentKTV>
				{/* {props.val.prices?.map((value, idx) => {
					return (
						<StaffDetailPageContentBottomGroupServiceContentDiv key={idx}>
							<StaffDetailPageContentBottomGroupServiceContentButtonKTV
								onClick={() => handlePriceSelection(idx)}
								style={{
									backgroundColor: selectedPriceIndex === idx ? "#D4E0CE" : "transparent",
									color: selectedPriceIndex === idx ? "#5B7A4F" : "#525652",
									border: selectedPriceIndex === idx ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								{value.unit}
							</StaffDetailPageContentBottomGroupServiceContentButtonKTV>
						</StaffDetailPageContentBottomGroupServiceContentDiv>
					);
				})} */}
						<StaffDetailPageContentBottomGroupServiceContentDiv>
							<StaffDetailPageContentBottomGroupServiceContentButtonKTV
								style={{
									backgroundColor: selectedPriceIndex === 0 ? "#D4E0CE" : "transparent",
									color: selectedPriceIndex === 0 ? "#5B7A4F" : "#525652",
									border: selectedPriceIndex === 0 ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								{props.val.prices?.[0]?.unit}
							</StaffDetailPageContentBottomGroupServiceContentButtonKTV>
						</StaffDetailPageContentBottomGroupServiceContentDiv>
			</StaffDetailPageContentBottomGroupServiceContentKTV>
		</>
	);
}

export function StaffDetailPageContentImg(props: {
	staff?: Staff;
	selectedImage: string;
	setSelectedImage: (val: string) => void;
}) {
	let allImages: Image[] = [];

	if (props.staff && props.staff.user && props.staff.user.urlImage) {
		const userImage = new Image();
		userImage.path = props.staff.user.urlImage;
		allImages.push(userImage);
	}
	allImages = allImages.concat(props.staff?.images || []);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChangeRes = (index: number) => {
		setActiveIndex(index);
	};

	const handlePrevButtonClick = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
			props.setSelectedImage(allImages?.[activeIndex - 1].path || "");
		}
	};

	const handleNextButtonClick = () => {
		const imagesLength = allImages?.length || 0;
		if (imagesLength && activeIndex < imagesLength - 1) {
			setActiveIndex(activeIndex + 1);
			props.setSelectedImage(allImages?.[activeIndex + 1].path || "");
		}
	};

	return (
		<StaffDetailPageContentTopImg>
			<StaffDetailPageContentTopImgLeft>
				<StaffDetailPageContentTopImgLeftChild
					src={props.selectedImage || "./static/img/white-wallpaper-1.jpg"}
					alt={"Ảnh chi tiết " + props.staff?.pageTitle}
				/>
			</StaffDetailPageContentTopImgLeft>
			<StaffDetailPageContentTopImgRight>
				{allImages?.map((val, index) => {
					return (
						<StaffDetailPageContentTopImgInner
							key={index}
							onClick={() => props.setSelectedImage(val.path || "")}>
							<StaffDetailPageContentTopImgInnerChild
								src={val.path || ""}
								isSelected={val.path === props.selectedImage}
								alt={"Ảnh chi tiết số " + (index + 1) + " " + props.staff?.pageTitle}
							/>
						</StaffDetailPageContentTopImgInner>
					);
				})}
			</StaffDetailPageContentTopImgRight>
			<StaffDetailPageContentAutoPlaySwipeableViewsRes
				index={activeIndex}
				onChangeIndex={handleSlideChangeRes}
				enableMouseEvents>
				{allImages.map((item, index) => {
					return (
						<StaffDetailPageContentAutoPlaySwipeableViewsResImgWrap key={index}>
							<StaffDetailPageContentAutoPlaySwipeableViewsResImg
								src={item.path || ""}
								alt={"Ảnh chi tiết số " + (index + 1) + " " + props.staff?.pageTitle}
							/>
						</StaffDetailPageContentAutoPlaySwipeableViewsResImgWrap>
					);
				})}
			</StaffDetailPageContentAutoPlaySwipeableViewsRes>
			<DotsWrapper>
				{allImages.map((_, index) => (
					<Dot
						key={index}
						active={index === activeIndex}
						onClick={() => handleSlideChangeRes(index)}
					/>
				))}
			</DotsWrapper>
			<ReviewPageButtonLeftStore onClick={handlePrevButtonClick}>
				<i
					className="fa fa-angle-left"
					aria-hidden="true"></i>
			</ReviewPageButtonLeftStore>
			<ReviewPageButtonRigthStore onClick={handleNextButtonClick}>
				<i
					className="fa fa-angle-right"
					aria-hidden="true"></i>
			</ReviewPageButtonRigthStore>
		</StaffDetailPageContentTopImg>
	);
}

export function StaffDetailPageContentImgStore(props: {
	staff?: Staff;
	selectedImage: string;
	setSelectedImage: (val: string) => void;
	atHome?: boolean;
}) {
	const [swipeIdx, setSwipeIdx] = useState(0);

	let allImages: Image[] = [];

	if (props.staff && props.staff.user && props.staff.user.urlImage) {
		const userImage = new Image();
		userImage.path = props.staff.user.urlImage;
		allImages.push(userImage);
	}
	allImages = allImages.concat(props.staff?.images || []);
	const handlePrevButtonClick = () => {
		if (swipeIdx > 0) {
			setSwipeIdx(swipeIdx - 1);
			props.setSelectedImage(allImages?.[swipeIdx - 1].path || "");
		}
	};

	const handleNextButtonClick = () => {
		const imagesLength = allImages?.length || 0;
		if (imagesLength && swipeIdx < imagesLength - 1) {
			setSwipeIdx(swipeIdx + 1);
			props.setSelectedImage(allImages?.[swipeIdx + 1].path || "");
		}
	};
	const handleSlideChangeRes = (index: number) => {
		setSwipeIdx(index);
	};

	return (
		<StaffDetailPageContentTopImgStore atHome={props.atHome}>
			<StaffDetailPageContentTopImgLeftKTV>
				<StaffDetailPageContentTopImgLeftChild
					src={props.selectedImage}
					alt={"Ảnh " + props.staff?.name}
				/>
			</StaffDetailPageContentTopImgLeftKTV>
			<StaffDetailPageContentTopImgRightKTV>
				<AutoPlaySwipeableViewsStaffReviewStore
					index={swipeIdx}
					onChangeIndex={setSwipeIdx}
					enableMouseEvents>
					{(allImages || []).map((val, index) => {
						return (
							<StaffDetailPageContentTopImgInnerStore
								atHome={props.atHome}
								key={index}
								onClick={() => props.setSelectedImage(val.path || "")}>
								<StaffDetailPageContentTopImgInnerChildStore
									atHome={props.atHome}
									src={val.path || ""}
									isSelected={val.path === props.selectedImage}
									alt={"Ảnh mô tả số " + (index + 1) + " " + props.staff?.name}
								/>
							</StaffDetailPageContentTopImgInnerStore>
						);
					})}
				</AutoPlaySwipeableViewsStaffReviewStore>
			</StaffDetailPageContentTopImgRightKTV>
			<StaffDetailPageContentAutoPlaySwipeableViewsRes
				index={swipeIdx}
				onChangeIndex={handleSlideChangeRes}
				enableMouseEvents>
				{allImages.map((item, index) => {
					return (
						<StaffDetailPageContentAutoPlaySwipeableViewsResStoreImgWrap
							key={index}
							atHome={props.atHome}>
							<StaffDetailPageContentAutoPlaySwipeableViewsResStoreImg
								src={item.path || ""}
								alt={"Ảnh mô tả số " + (index + 1) + " " + props.staff?.name}
							/>
						</StaffDetailPageContentAutoPlaySwipeableViewsResStoreImgWrap>
					);
				})}
			</StaffDetailPageContentAutoPlaySwipeableViewsRes>
			<ReviewPageButtonLeftStore onClick={handlePrevButtonClick}>
				<i
					className="fa fa-angle-left"
					aria-hidden="true"></i>
			</ReviewPageButtonLeftStore>
			<ReviewPageButtonRigthStore onClick={handleNextButtonClick}>
				<i
					className="fa fa-angle-right"
					aria-hidden="true"></i>
			</ReviewPageButtonRigthStore>
		</StaffDetailPageContentTopImgStore>
	);
}

export function StaffDetailPageContentImgStoreSSR(props: {
	staff?: Staff;
	selectedImage: string;
	setSelectedImage: (val: string) => void;
	atHome?: boolean;
}) {
	let allImages: Image[] = [];

	if (props.staff && props.staff.user && ( props.staff.user?.thumbnailImage || props.staff.user.urlImage)) {
		const userImage = new Image();
		userImage.path = props.staff.user?.thumbnailImage || props.staff.user.urlImage;
		allImages.push(userImage);
	}
	allImages = allImages.concat(props.staff?.images || []);
	const thumbnailsHtml = allImages
		.map(
			(val, index) => `
	<div
		 data-id="${props.staff?.id}" 
		 data-src="${val.thumbnailPath ||val.path || ""}"
		 onclick="functionStaffImageChangeNoVideo(${props.staff?.id}, '${val.path || ""}')">
		<img 
			src="${val.path || ""}" 
			alt="Ảnh mô tả số ${index + 1} ${props.staff?.name}" 
		/>
	</div>`
		)
		.join("");

	const imagePaths = allImages.map((val) => val.path || "");

	return (
		<StaffDetailPageContentTopImgStore atHome={props.atHome}>
			<StaffDetailPageContentTopImgLeftKTVSSR>
				<StaffDetailPageContentTopImgLeftChildSSR
					src={props.selectedImage}
					alt={"Ảnh " + props.staff?.name}
					className={`StaffMainImage_${props.staff?.id}`}
				/>
			</StaffDetailPageContentTopImgLeftKTVSSR>

			<StaffDetailPageContentTopImgRightKTVSSR>
				<StaffDetailPageContentTopImgRightKTVSSRInner
					atHome={props.atHome}
					dangerouslySetInnerHTML={{ __html: thumbnailsHtml }}
				/>
			</StaffDetailPageContentTopImgRightKTVSSR>
			<ReviewPageButtonLeftStoreSSR
				dangerouslySetInnerHTML={{
					__html: `
					<button onclick="functionStaffImageGoLeft('${props.staff?.id}', ${JSON.stringify(imagePaths).replace(/"/g, "'")})">
						<i class="fa fa-angle-left" aria-hidden="true"></i>
					</button>`,
				}}
			/>
			<ReviewPageButtonRigthStoreSSR
				dangerouslySetInnerHTML={{
					__html: `
					<button onclick="functionStaffImageGoRight('${props.staff?.id}', ${JSON.stringify(imagePaths).replace(/"/g, "'")})">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</button>`,
				}}
			/>
		</StaffDetailPageContentTopImgStore>
	);
}

export function StaffDetailPageReview(props: {
	swipeIdx: number;
	star: FakeReview[];
	setSwipeIdx: (val: number) => void;
}) {
	const { staticContext } = useStaticContext();
	const handlePrevButtonClick = () => {
		if (props.swipeIdx > 0) {
			props.setSwipeIdx(props.swipeIdx - 1);
		}
	};

	const handleNextButtonClick = () => {
		if (props.swipeIdx < props.star?.length - 1) {
			props.setSwipeIdx(props.swipeIdx + 1);
		}
	};
	return (
		<>
			{staticContext?.newStyle ? (
				<StaffDetailPageContentTopInfoStarListWrap>
					<StaffDetailPageContentTopInfoStarListSSR className={`StaffInfoWrap_reviewDetail`}>
						<StaffDetailPageContentTopInfoStarListInnerSSR>
							{props.star?.map((val, index) => {
								const stars = [];
								if (val && val.rateReview) {
									const starCount = val.rateReview;
									const starDetailCount = 5 - val.rateReview;

									for (let i = 0; i < starCount; i++) {
										stars.push(
											<AutoPlaySwipeableViewsStaffReviewImg
												key={i}
												src="./static/img/Star.png"
											/>
										);
									}

									for (let j = 0; j < starDetailCount; j++) {
										stars.push(
											<AutoPlaySwipeableViewsStaffReviewImg
												key={starCount + j}
												src="./static/img/StarDetail.png"
											/>
										);
									}
								}
								return (
									<ReviewSwipeableViewSSR>
										<div>{stars}</div>
										<div>{val.noteReview}</div>
									</ReviewSwipeableViewSSR>
								);
							})}
						</StaffDetailPageContentTopInfoStarListInnerSSR>
					</StaffDetailPageContentTopInfoStarListSSR>
					{props.star?.length > 0 && (
						<>
							<ReviewPageButtonLeftSSR
								dangerouslySetInnerHTML={{
									__html: `
					<button onClick="functionStaffInfoBack('reviewDetail')">
						<i class="fa fa-angle-left" aria-hidden="true"></i>
					</button>`,
								}}
							/>
							<ReviewPageButtonRigthSSR
								dangerouslySetInnerHTML={{
									__html: `
					<button onClick="functionStaffInfoNext('reviewDetail')">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</button>`,
								}}
							/>
						</>
					)}
				</StaffDetailPageContentTopInfoStarListWrap>
			) : (
				<StaffDetailPageContentTopInfoStarListWrap>
					<StaffDetailPageContentTopInfoStarList>
						<AutoPlaySwipeableViewsStaffReview
							index={props.swipeIdx}
							onChangeIndex={props.setSwipeIdx}
							enableMouseEvents>
							{props.star?.map((val, index) => {
								const stars = [];
								if (val && val.rateReview) {
									const starCount = val.rateReview;
									const starDetailCount = 5 - val.rateReview;

									for (let i = 0; i < starCount; i++) {
										stars.push(
											<AutoPlaySwipeableViewsStaffReviewImg
												key={i}
												src="./static/img/Star.png"
											/>
										);
									}

									for (let j = 0; j < starDetailCount; j++) {
										stars.push(
											<AutoPlaySwipeableViewsStaffReviewImg
												key={starCount + j}
												src="./static/img/StarDetail.png"
											/>
										);
									}
								}
								return (
									<ReviewSwipeableView>
										<div>{stars}</div>
										<div>{val.noteReview}</div>
									</ReviewSwipeableView>
								);
							})}
						</AutoPlaySwipeableViewsStaffReview>
					</StaffDetailPageContentTopInfoStarList>
					{props.star?.length > 0 && (
						<>
							<ReviewPageButtonLeft onClick={handlePrevButtonClick}>
								<i
									className="fa fa-angle-left"
									aria-hidden="true"></i>
							</ReviewPageButtonLeft>
							<ReviewPageButtonRigth onClick={handleNextButtonClick}>
								<i
									className="fa fa-angle-right"
									aria-hidden="true"></i>
							</ReviewPageButtonRigth>
						</>
					)}
				</StaffDetailPageContentTopInfoStarListWrap>
			)}
		</>
	);
}
