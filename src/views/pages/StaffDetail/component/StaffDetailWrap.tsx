import React, { useEffect, useRef, useState } from "react";
import useGetDetailStaff from "../hook/getDetailStaff";
import { useHistory, useLocation, useParams } from "react-router";
import BreadCrumbStaff from "../../FilterAtHome/component/BreadCrumb";
import {
	AutoPlaySwipeableViewsStaffButtonReview,
	AutoPlaySwipeableViewsStaffButtonReviewImg,
	AutoPlaySwipeableViewsStaffButtonReviewWrap,
	AutoPlaySwipeableViewsStaffButtonReviewWrapWrap,
	AutoPlaySwipeableViewsStaffReview,
	AutoPlaySwipeableViewsStaffReviewImg,
	AutoPlaySwipeableViewsStaffReviewImgv2,
	AutoPlaySwipeableViewsStaffReviewStore,
	AutoPlaySwipeableViewsStaffReviewStoreSSRInner,
	AutoPlayVideoYoutubeEmbedUrl,
	BannerHomePageAutoPlaySwipeableViewsRes,
	Dot,
	DotsWrapper,
	ExperienceSpaWrap,
	NoteReviewSwipeableView,
	ReviewPageButtonLeft,
	ReviewPageButtonLeftSSR,
	ReviewPageButtonLeftStore,
	ReviewPageButtonLeftStoreSSR,
	ReviewPageButtonLeftWorker,
	ReviewPageButtonLeftWorkerSSR,
	ReviewPageButtonRigth,
	ReviewPageButtonRigthSSR,
	ReviewPageButtonRigthStore,
	ReviewPageButtonRigthStoreSSR,
	ReviewPageButtonRigthWorker,
	ReviewPageButtonRigthWorkerSSR,
	ReviewSwipeableView,
	ReviewSwipeableViewStore,
	ReviewSwipeableViewStoreSSR,
	StaffDetailAdress,
	StaffDetailKMs,
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
	StaffDetailPageContentBottomGroupServiceContentButtonDiv,
	StaffDetailPageContentBottomGroupServiceContentButtonLink,
	StaffDetailPageContentBottomGroupServiceContentDetail,
	StaffDetailPageContentBottomGroupServiceContentDetailTitle,
	StaffDetailPageContentBottomGroupServiceContentDiv,
	StaffDetailPageContentBottomGroupServiceContentNumber,
	StaffDetailPageContentBottomGroupServiceContentTitle,
	StaffDetailPageContentBottomGroupServiceDiv,
	StaffDetailPageContentBottomGroupServiceMap,
	StaffDetailPageContentBottomGroupServiceName,
	StaffDetailPageContentBottomGroupServiceOriginalPrice,
	StaffDetailPageContentBottomGroupServicePrice,
	StaffDetailPageContentBottomGroupServiceReducePrice,
	StaffDetailPageContentBottomGroupServiceReducePriceWrap,
	StaffDetailPageContentBottomGroupServiceReducedValue,
	StaffDetailPageContentBottomGroupServiceUnit,
	StaffDetailPageContentBottomGroupServiceUnitImg,
	StaffDetailPageContentBottomGroupServiceUnitWrap,
	StaffDetailPageContentBottomGroupServiceWrap,
	StaffDetailPageContentBottomGroupSolid,
	StaffDetailPageContentDescription,
	StaffDetailPageContentDescriptionRes,
	StaffDetailPageContentTop,
	StaffDetailPageContentTopImg,
	StaffDetailPageContentTopImgInner,
	StaffDetailPageContentTopImgInnerChild,
	StaffDetailPageContentTopImgInnerChildStore,
	StaffDetailPageContentTopImgInnerStore,
	StaffDetailPageContentTopImgLeft,
	StaffDetailPageContentTopImgLeftChild,
	StaffDetailPageContentTopImgLeftChildSSR,
	StaffDetailPageContentTopImgLeftStore,
	StaffDetailPageContentTopImgLeftStoreSSR,
	StaffDetailPageContentTopImgRight,
	StaffDetailPageContentTopImgRightStore,
	StaffDetailPageContentTopImgRightStoreSSR,
	StaffDetailPageContentTopImgStore,
	StaffDetailPageContentTopInfo,
	StaffDetailPageContentTopInfoAdress,
	StaffDetailPageContentTopInfoAdressImg,
	StaffDetailPageContentTopInfoAdressStar,
	StaffDetailPageContentTopInfoButton,
	StaffDetailPageContentTopInfoButtonv2,
	StaffDetailPageContentTopInfoButtonv3,
	StaffDetailPageContentTopInfoDescription,
	StaffDetailPageContentTopInfoDescriptionContent,
	StaffDetailPageContentTopInfoDescriptionName,
	StaffDetailPageContentTopInfoHastag,
	StaffDetailPageContentTopInfoHastagLink,
	StaffDetailPageContentTopInfoName,
	StaffDetailPageContentTopInfoNameWrap,
	StaffDetailPageContentTopInfoNamev2,
	StaffDetailPageContentTopInfoReview,
	StaffDetailPageContentTopInfoReviewImage,
	StaffDetailPageContentTopInfoReviewRate,
	StaffDetailPageContentTopInfoReviewRateInner,
	StaffDetailPageContentTopInfoReviewShortName,
	StaffDetailPageContentTopInfoReviewStar,
	StaffDetailPageContentTopInfoSocialMedia,
	StaffDetailPageContentTopInfoSocialMediaImg,
	StaffDetailPageContentTopInfoSocialMediaImgWrap,
	StaffDetailPageContentTopInfoStar,
	StaffDetailPageContentTopInfoStarImg,
	StaffDetailPageContentTopInfoStarList,
	StaffDetailPageContentTopInfoStarListInnerSSR,
	StaffDetailPageContentTopInfoStarListSSR,
	StaffDetailPageContentTopInfoStarListWrap,
	StaffDetailPageContentTopInfoStarResWrap,
	StaffDetailPageContentTopInfoStarReview,
	StaffDetailPageContentTopInfoStarTime,
	StaffDetailPageContentTopInfoStarTitle,
	StaffDetailPageContentTopInfoStarTitleImg,
	StaffDetailPageContentTopInfoStarU,
	StaffDetailPageContentTopInfoStarWrap,
	StaffDetailPageContentTopInfoStarWrapStore,
	StaffDetailPageTitle,
	StaffDetailPageWorkerAutoPlaySwipeableViews,
	StaffDetailPageWorkerAutoPlaySwipeableViewsImg,
	StaffDetailPageWorkerAutoPlaySwipeableViewsLink,
	StaffDetailPageWorkerAutoPlaySwipeableViewsTitle,
	StaffDetailPageWorkerAutoPlaySwipeableViewsWrap,
	StaffDetailPageWrap,
	WorkTimeDate,
	WorkTimeHour,
	WorkTimeWrap,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import { Link } from "react-router-dom";
import useGetReviewStaff, { getFilteGetReviewStaff } from "../hook/getReviewStaff";
import {
	HomeSpaDivSSR,
	HomeSpaDivSSRNext,
	StaffInfoAutoPlayImgCheck,
	StaffInfoAutoPlayImgCheckBigSize,
	StaffInfoAutoPlayImgCheckBigSizeWrap,
} from "../../home/styled/HomeStyles";
import Staff, { ServiceTree, ValidateStatusType } from "../../../../models/Staff";
import StaffService from "../../../../models/StaffService";
import { Image, StaffServiceHome, StaffServicePrice } from "../../../../models/Service";
import environments from "../../../../environment";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import { GetALLReview } from "../../FilterService/styled/ListServiceFilter";
import DialogGetReview from "./GetReviewStaff";
import { formatPrice } from "../../home/HomePageNew/DealHotHomePage";
import usePostVoucher from "../../Voucher/hook/usePostVoucher";
import DialogGetVoucher from "../../Voucher/component/DialogSuccesGetVoucher";
import DialogGetInfoVoucher from "./DialogReviewStaff";
import useLoadedUser from "../../../hooks/auth/useLoadedUser";
import StaffDetailSuggest from "./SuggestStaff";
import AdsenseComponent from "../../../controls/AdsenseComponent";
import { AdsenseWrap } from "../styled/StaffDetailStyle";
import useStaticContext from "../../../hooks/useStaticContext";
import { GetReviewInner } from "./GetReviewNoDialog";
import { getDistance } from "geolib";

export function formatCashback(displayCashback: number) {
	let roundedCashback = Math.round(displayCashback / 1000) * 1000;
	let formattedCashback = roundedCashback.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	if (formattedCashback.length > 3) {
		formattedCashback = formattedCashback.slice(0, -3) + "K";
	}
	return formattedCashback;
}

export default function StaffDetailPage(props: { staff: Staff; lang: string; reload?: () => void }) {
	// const { group, link, lang } = useParams<{ group: string; link: string, lang:string }>();
	// const { staff } = useGetDetailStaff({ group, link, lang });
	const { staticContext } = useStaticContext();
	const {
		star,
		setSwipeIdx,
		swipeIdx,
		reload: starReload,
		setPage,
		page,
		setFilterStar,
		count,
	} = getFilteGetReviewStaff({ id: props.staff?.id || 0 });

	const handlePrevButtonClick = () => {
		if (swipeIdx > 0) {
			setSwipeIdx(swipeIdx - 1);
		}
	};

	const history = useHistory();

	const handleNextButtonClick = () => {
		if (/*!isLoading && swipeIdx < staff.length - 1*/ swipeIdx < star?.length - 1) {
			setSwipeIdx(swipeIdx + 1);
		}
	};
	const [selectedImage, setSelectedImage] = useState(props.staff?.user?.urlImage || "");
	const [isDialogReviewOpen, setIsDialogReviewOpen] = useState(false);
	const [isDialogReviewPropOpen, setIsDialogReviewPropOpen] = useState(false);
	const { isValidated } = useLoadedUser();

	useEffect(() => {
		setSelectedImage(props.staff?.user?.urlImage || "");
	}, [props.staff]);

	const handleRedirect = () => {
		window.location.href = "https://onelink.to/mz7nfw";
	};
	const location = useLocation();
	const handleBlog = () => {
		if (isValidated) {
			setIsDialogReviewPropOpen(true);
		} else {
			history.push(`/dang-nhap?back=${encodeURIComponent(location.pathname)}`);
		}
	};
	const JsonWorkTime = JSON.parse(props.staff?.workTime || "[]");

	const handleDialogToggleGender = () => {
		setIsDialogReviewOpen(!isDialogReviewOpen);
	};

	const [staffServices, setStaffServices] = useState([] as StaffServiceHome[]);

	useEffect(() => {
		if (props.staff && props.staff.serviceTree) {
			const allStaffServices = props.staff.serviceTree
				.flatMap((serviceGroup) =>
					serviceGroup.staffServicePrices
						? serviceGroup.staffServicePrices.map((price) => price.staffService)
						: []
				)
				.filter((service) => service !== undefined) as StaffServiceHome[];

			setStaffServices(allStaffServices);
		}
	}, [props.staff]);
	const makePhoneCall = (phoneNumber: any) => {
		window.location.href = `tel:${phoneNumber}`;
	};

	const [distance, setDistance] = useState("");

	useEffect(() => {
	  if (props.staff?.lat && props.staff?.long && navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
		  (pos) => {
			const userCoords = {
			  latitude: pos.coords.latitude,
			  longitude: pos.coords.longitude,
			};
			const staffCoords = {
			  latitude: props.staff.lat||0,
			  longitude: props.staff.long||0,
			};
  
			const meters = getDistance(userCoords, staffCoords);
			const km = (meters / 1000).toFixed(2);
			setDistance(km);
		  },
		  (err) => {
			console.warn("Không lấy được vị trí người dùng:", err.message);
		  }
		);
	  }
	}, [props.staff]);
  

	return (
		<StaffDetailPageWrap>
			<BreadCrumbStaff breadCrumb={props.staff?.breadcrumb || []} isDetailStaff={true}/>
			{/* <StaffDetailPageTitle>{props.staff?.pageTitle || "Massage tại nhà"}</StaffDetailPageTitle> */}
			<StaffDetailPageContentTop>
				{staticContext?.newStyle ? (
					<StaffDetailPageContentImgStoreSSR
						staff={props.staff}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
				) : (
					<StaffDetailPageContentImgStore
						staff={props.staff}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
				)}
				<StaffDetailPageContentTopInfo>
					<StaffDetailPageContentTopInfoNameWrap>
						<StaffDetailPageContentTopInfoNamev2>
							{staticContext?.data?.h1Content ||props.staff?.name || props.staff?.user?.userName}
						</StaffDetailPageContentTopInfoNamev2>
						<>
							{props.staff?.validateStatus === ValidateStatusType.Verification && (
								<StaffInfoAutoPlayImgCheckBigSizeWrap>
									<StaffInfoAutoPlayImgCheckBigSize
										src="./static/img/Check.png"
										alt="biểu tượng xác minh"
									/>
								</StaffInfoAutoPlayImgCheckBigSizeWrap>
							)}{" "}
						</>
					</StaffDetailPageContentTopInfoNameWrap>
					<StaffDetailPageContentTopInfoAdressStar>
						<StaffDetailPageContentTopInfoAdress>
							<StaffDetailPageContentTopInfoAdressImg
								src="./static/img/store01.png"
								alt="Biểu tượng cơ sở"
							/>
							<StaffDetailKMs>{distance} km</StaffDetailKMs>
							<StaffDetailAdress>
							{props.staff?.address ? `${props.staff.address}, ` : ""}
							{props.staff?.district?.name ? `${props.staff.district.name}, ` : ""}
							{props.staff?.province?.name ? `${props.staff.province.name}` : ""}</StaffDetailAdress>
						</StaffDetailPageContentTopInfoAdress>
						<StaffDetailPageContentTopInfoStar>
							<StaffDetailPageContentTopInfoStarImg
								src="./static/img/call.png"
								alt="Image_phone"
							/>
							{TranslateLabels[props.lang]?.CONTACT_PHONE_NUMBER || "Liên hệ tư vấn và đặt lịch: "}{" "}
							<StaffDetailPageContentTopInfoStarU onClick={() => makePhoneCall(props.staff?.user?.phone)}>
								{props.staff?.user?.phone}
							</StaffDetailPageContentTopInfoStarU>
						</StaffDetailPageContentTopInfoStar>
						<StaffDetailPageContentTopInfoStar>
							<StaffDetailPageContentTopInfoStarImg
								src="./static/img/StarDetail.png"
								alt="Biểu tượng sao"
							/>
							{props.staff?.rateAvg} ({props.staff?.countReview}{" "}
							{TranslateLabels[props.lang]?.FILTERS_REVIEWS || "Đánh giá"})
						</StaffDetailPageContentTopInfoStar>
						<StaffDetailPageContentTopInfoStar>
							<StaffDetailPageContentTopInfoStarImg
								src="./static/img/coin-dollar.png"
								alt="Biểu tượng giá"
							/>
							{(props.staff?.minPrice || 0).toLocaleString()} VNĐ - {(props.staff?.maxPrice || 0).toLocaleString()} VNĐ

						</StaffDetailPageContentTopInfoStar>
						{JsonWorkTime?.length > 0 && (
							<StaffDetailPageContentTopInfoStarTime>
								<StaffDetailPageContentTopInfoStarImg
								src="./static/img/clock-circle.png"
								alt="Biểu tượng đồng hồ"
								/>
								<div>
								{(() => {
									const daysOfWeek = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7","Chủ Nhật"];
									const dayIndexMap: Record<string, number> = {
									
									"Thứ 2": 1,
									"Thứ 3": 2,
									"Thứ 4": 3,
									"Thứ 5": 4,
									"Thứ 6": 5,
									"Thứ 7": 6,
									"Chủ Nhật": 7,
									};
									const workSchedule: Record<number, { from: string; to: string }> = {};

									JsonWorkTime.forEach(({ date, hour }: { date: { from: string; to: string }; hour: { from: string; to: string } }) => {
									const startIdx = dayIndexMap[date.from];
									const endIdx = dayIndexMap[date.to];

									for (let i = startIdx; i <= endIdx; i++) {
										workSchedule[i] = { from: hour.from, to: hour.to };
									}
									});

									return daysOfWeek.map((day, idx) =>
									workSchedule[idx + 1] ? (
										<WorkTimeWrap key={idx}>
										<WorkTimeDate>{day}</WorkTimeDate>
										<WorkTimeHour>{workSchedule[idx + 1].from} - {workSchedule[idx + 1].to}</WorkTimeHour>
										</WorkTimeWrap>
									) : null
									);
								})()}
								</div>
							</StaffDetailPageContentTopInfoStarTime>
							)}
						<StaffDetailPageContentTopInfoSocialMediaComponent staff={props.staff} />
						<StaffDetailPageContentTopInfoButtonv3 href="https://onelink.to/mz7nfw">
							{TranslateLabels[props.lang]?.DOWNLOAD_SEE_MORE_OFFERS}
						</StaffDetailPageContentTopInfoButtonv3>
						<AutoPlaySwipeableViewsStaffButtonReviewWrapWrap onClick={handleBlog}>
							<AutoPlaySwipeableViewsStaffButtonReviewWrap>
								<AutoPlaySwipeableViewsStaffButtonReview>
									{TranslateLabels[props.lang || "vi"]?.NEW_PAGE_TAP_TO_RATE}
								</AutoPlaySwipeableViewsStaffButtonReview>
								<div>
									<AutoPlaySwipeableViewsStaffButtonReviewImg
										src="./static/img/unStar.png"
										alt="Biểu tượng chạm để đánh giá"
									/>
									<AutoPlaySwipeableViewsStaffButtonReviewImg
										src="./static/img/unStar.png"
										alt="Biểu tượng chạm để đánh giá"
									/>
									<AutoPlaySwipeableViewsStaffButtonReviewImg
										src="./static/img/unStar.png"
										alt="Biểu tượng chạm để đánh giá"
									/>
									<AutoPlaySwipeableViewsStaffButtonReviewImg
										src="./static/img/unStar.png"
										alt="Biểu tượng chạm để đánh giá"
									/>
									<AutoPlaySwipeableViewsStaffButtonReviewImg
										src="./static/img/unStar.png"
										alt="Biểu tượng chạm để đánh giá"
									/>
								</div>
							</AutoPlaySwipeableViewsStaffButtonReviewWrap>
							<StaffDetailPageContentTopInfoStarReview>
								{(props.staff?.reviewProps || []).map((val, index) => {
									const stars = [];
									if (val && val.rateReview) {
										const starCount = Math.round(val.rateReview);
										const starDetailCount = 5 - Math.round(val.rateReview);

										for (let i = 0; i < starCount; i++) {
											stars.push(
												<AutoPlaySwipeableViewsStaffReviewImgv2
													key={i}
													src="./static/img/Star.png"
													alt="Biểu tượng sao vàng"
												/>
											);
										}

										for (let j = 0; j < starDetailCount; j++) {
											stars.push(
												<AutoPlaySwipeableViewsStaffReviewImgv2
													key={starCount + j}
													src="./static/img/unStar.png"
													alt="Biểu tượng sao xám"
												/>
											);
										}
									}
									return (
										<StaffDetailPageContentTopInfoReview>
											<StaffDetailPageContentTopInfoReviewImage
												src={val.image || ""}
												alt={"Biểu tượng " + val.name || ""}
											/>
											<StaffDetailPageContentTopInfoReviewRate>
												<StaffDetailPageContentTopInfoReviewRateInner>
													{Math.floor((val.rateReview || 0) * 10) / 10}
												</StaffDetailPageContentTopInfoReviewRateInner>
												/5
											</StaffDetailPageContentTopInfoReviewRate>
											<StaffDetailPageContentTopInfoReviewStar>
												{stars}
											</StaffDetailPageContentTopInfoReviewStar>
											<StaffDetailPageContentTopInfoReviewShortName>
												{val.shortName}
											</StaffDetailPageContentTopInfoReviewShortName>
										</StaffDetailPageContentTopInfoReview>
									);
								})}
							</StaffDetailPageContentTopInfoStarReview>
						</AutoPlaySwipeableViewsStaffButtonReviewWrapWrap>
					</StaffDetailPageContentTopInfoAdressStar>
					<StaffDetailPageContentDescriptionRes>
						<StaffDetailPageContentTopInfoDescriptionName>
					{TranslateLabels[props.lang]?.DESCRIPTION || "Mô tả"}
				</StaffDetailPageContentTopInfoDescriptionName>
						<StaffDetailPageContentTopInfoDescriptionContent>
							{props.staff?.description}
						</StaffDetailPageContentTopInfoDescriptionContent>
						<StaffDetailPageContentTopInfoHastag>
							<>{props.staff?.hashTag?.map((val, index) => {
								return (
									<StaffDetailPageContentTopInfoHastagLink to={"/dia-diem/" + val.url || ""}>
										<>#{val.label}</>
									</StaffDetailPageContentTopInfoHastagLink>
								);
							})}</>
								<>
					{props.staff?.tags?.map((val, index) => {
						return (
							<StaffDetailPageContentTopInfoHastagLink to={"/dia-diem/" + val.filterUrl || ""}>
								<>#{val.name}</>
							</StaffDetailPageContentTopInfoHastagLink>
						);
					})}
					</>
						</StaffDetailPageContentTopInfoHastag>
					</StaffDetailPageContentDescriptionRes>
				</StaffDetailPageContentTopInfo>
			</StaffDetailPageContentTop>

			<StaffDetailPageContentDescription>
				<StaffDetailPageContentTopInfoDescriptionName>
					{TranslateLabels[props.lang]?.DESCRIPTION || "Mô tả"}
				</StaffDetailPageContentTopInfoDescriptionName>
				<StaffDetailPageContentTopInfoDescriptionContent>
					{props.staff?.description}
				</StaffDetailPageContentTopInfoDescriptionContent>
				<StaffDetailPageContentTopInfoHastag>
					<>
					{props.staff?.hashTag?.map((val, index) => {
						return (
							<StaffDetailPageContentTopInfoHastagLink to={"/dia-diem/" + val.url || ""}>
								<>#{val.label}</>
							</StaffDetailPageContentTopInfoHastagLink>
						);
					})}
					</>
					<>
					{props.staff?.tags?.map((val, index) => {
						return (
							<StaffDetailPageContentTopInfoHastagLink to={"/dia-diem/" + val.filterUrl || ""}>
								<>#{val.name}</>
							</StaffDetailPageContentTopInfoHastagLink>
						);
					})}
					</>
				</StaffDetailPageContentTopInfoHastag>
			</StaffDetailPageContentDescription>
			{/* <StaffDetailWrokStore
				storeMembers={props.staff.storeMembers}
				lang={props.lang}
			/> */}

			<StaffDetailPageContentBottom>
				{props.staff?.serviceTree?.map((e, i) => {
					return (
						<StaffDetailPageContentBottomGroup>
							<StaffDetailPageContentBottomGroupName>
								{props.staff?.type === 3
									? // (TranslateLabels[props.lang]?.LOGIN_VOUCHER || "Voucher") + " " +
									  e?.name
									: e?.name + " " + (TranslateLabels[props.lang]?.AT_HOME || "tại nhà")}
							</StaffDetailPageContentBottomGroupName>
							<StaffDetailPageContentBottomGroupSolid></StaffDetailPageContentBottomGroupSolid>
							<StaffDetailPageContentBottomGroupServiceWrap>
								{e?.staffServicePrices?.map((val, index) => {
									return (
										// <StaffDetailPageContentBottomGroupService
										// 	to={val.url?.startsWith("/") ? val.url : "/" + val.url || ""}>
										// 	<StaffDetailPageContentBottomChild
										// 		val={val}
										// 		lang={props.lang}
										// 		id={props.staff?.id || 0}
										// 	/>
										// </StaffDetailPageContentBottomGroupService>
										<StaffDetailPageContentBottomGroupServiceDiv>
										<StaffDetailPageContentBottomChild
											val={val}
											lang={props.lang}
											id={props.staff?.id || 0}
										/>
									</StaffDetailPageContentBottomGroupServiceDiv>
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
			/>
			{props.staff && (
				<StaffDetailSuggest
					lang={props.lang}
					districtId={props.staff.district?.id}
					serviceGroups={props.staff.serviceGroups}
					type={props.staff.type}
					staff={props.staff}
					reload={props.reload}
				/>
			)}

			<DialogGetReview
				isDialogOpen={isDialogReviewOpen}
				setIsDialogOpen={setIsDialogReviewOpen}
				reload={starReload}
				lang={props.lang || "vi"}
				setSwipeIdx={setSwipeIdx}
				swipeIdx={swipeIdx}
				staff={props.staff}
				star={star}
				setPage={setPage}
				page={page}
				setFilterStar={setFilterStar}
			/>
			<DialogGetInfoVoucher
				isDialogOrderOpen={isDialogReviewPropOpen}
				setIsDialogOrderOpen={setIsDialogReviewPropOpen}
				staffServices={staffServices}
				staff={props.staff}
				reload={starReload}
			/>
			<AdsenseWrap>
				<AdsenseComponent AdFormat="3314873835" />
			</AdsenseWrap>
		</StaffDetailPageWrap>
	);
}

export function StaffDetailPageContentBottomChild(props: { val: StaffServicePrice; lang: string; id: number }) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { doVoucher, infoVoucher } = usePostVoucher({ setIsDialogOpen: setIsDialogOpen });

	const getVoucher = async () => {
		await doVoucher(props.id, parseInt(props.val.id || "0"));
		// setIsDialogOpen(true)
	};
	const { user } = useLoadedUser();
	const location = useLocation();
	const history = useHistory();
	const handleOnClick = (e: any) => {
		e.preventDefault();
		history.push(`/dang-nhap?back=${encodeURIComponent(location.pathname)}`);
	};
	return (
		<>
			<StaffDetailPageContentBottomGroupServiceName>
				{props.val.staffService?.name}
			</StaffDetailPageContentBottomGroupServiceName>
			<StaffDetailPageContentBottomGroupServicePrice>
				<StaffDetailPageContentBottomGroupServiceUnitWrap>
					<StaffDetailPageContentBottomGroupServiceUnitImg
						src="./static/img/clock-circle.png"
						alt="biểu tượng đồng hồ"
					/>
					<StaffDetailPageContentBottomGroupServiceUnit>
						{props.val.unit}
					</StaffDetailPageContentBottomGroupServiceUnit>
				</StaffDetailPageContentBottomGroupServiceUnitWrap>
				<StaffDetailPageContentBottomGroupServiceReducePriceWrap>
					<StaffDetailPageContentBottomGroupServiceReducedValue>
						{props.val.displayReducedValue ? props.val.displayOriginalPrice?.toLocaleString() + "đ" : ""}
					</StaffDetailPageContentBottomGroupServiceReducedValue>
					<StaffDetailPageContentBottomGroupServiceReducePrice>
						{props.val.displayReducedPrice?.toLocaleString()}đ
					</StaffDetailPageContentBottomGroupServiceReducePrice>
				</StaffDetailPageContentBottomGroupServiceReducePriceWrap>
			</StaffDetailPageContentBottomGroupServicePrice>
			<StaffDetailPageContentBottomGroupServiceContent>
				<StaffDetailPageContentBottomGroupServiceContentDetailTitle>
					{TranslateLabels[props.lang]?.SERVICE_DES}
				</StaffDetailPageContentBottomGroupServiceContentDetailTitle>
				<div>
					{/* <StaffDetailPageContentBottomGroupServiceContentTitle>
						{TranslateLabels[props.lang||"vi"]?.NEW_PAGE_CASHBACK}:
					</StaffDetailPageContentBottomGroupServiceContentTitle>{" "}
					<StaffDetailPageContentBottomGroupServiceContentNumber>
						{formatPrice(props.val.displayCashback || 0)}
					</StaffDetailPageContentBottomGroupServiceContentNumber> */}
				</div>
				{/* {user ? <StaffDetailPageContentBottomGroupServiceContentButton 
				 onClick={(e) => {
					e.preventDefault();
					getVoucher();
				}}>
				{TranslateLabels[props.lang||"vi"]?.NEW_PAGE_COLLECT_VOUCHER}
				</StaffDetailPageContentBottomGroupServiceContentButton>
				:
				<StaffDetailPageContentBottomGroupServiceContentButtonDiv onClick={handleOnClick}>{TranslateLabels[props.lang||"vi"]?.NEW_PAGE_COLLECT_VOUCHER}</StaffDetailPageContentBottomGroupServiceContentButtonDiv>} */}
				<StaffDetailPageContentBottomGroupServiceContentDetail>
					{/* {TranslateLabels[props.lang]?.DETAILS} */}
					{props.val.staffService?.description}
				</StaffDetailPageContentBottomGroupServiceContentDetail>
			</StaffDetailPageContentBottomGroupServiceContent>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<DialogGetVoucher
					isDialogOpen={isDialogOpen}
					setIsDialogOpen={setIsDialogOpen}
					infoVoucher={infoVoucher}
				/>
			</div>
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
		</StaffDetailPageContentTopImg>
	);
}

export function StaffDetailPageContentImgStore(props: {
	staff?: Staff;
	selectedImage: string;
	setSelectedImage: (val: string) => void;
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
		if (imagesLength && swipeIdx < imagesLength - 3) {
			setSwipeIdx(swipeIdx + 1);
			props.setSelectedImage(allImages?.[swipeIdx + 1].path || "");
		}
	};
	const handleSlideChangeRes = (index: number) => {
		setSwipeIdx(index);
	};

	return (
		<StaffDetailPageContentTopImgStore>
			<StaffDetailPageContentTopImgLeftStore>
				<StaffDetailPageContentTopImgLeftChild
					src={props.selectedImage}
					alt={"Ảnh chi tiết " + props.staff?.pageTitle}
				/>
			</StaffDetailPageContentTopImgLeftStore>
			<StaffDetailPageContentTopImgRightStore>
				<AutoPlaySwipeableViewsStaffReviewStore
					index={swipeIdx}
					onChangeIndex={setSwipeIdx}
					enableMouseEvents>
					{(allImages || []).map((val, index) => {
						return (
							<StaffDetailPageContentTopImgInnerStore
								key={index}
								onClick={() => props.setSelectedImage(val.path || "")}>
								<StaffDetailPageContentTopImgInnerChildStore
									src={val.path || ""}
									isSelected={val.path === props.selectedImage}
									alt={"Ảnh chi tiết số " + (index + 1) + " " + props.staff?.pageTitle}
								/>
							</StaffDetailPageContentTopImgInnerStore>
						);
					})}
				</AutoPlaySwipeableViewsStaffReviewStore>
			</StaffDetailPageContentTopImgRightStore>
			<StaffDetailPageContentAutoPlaySwipeableViewsRes
				index={swipeIdx}
				onChangeIndex={handleSlideChangeRes}
				enableMouseEvents>
				{allImages.map((item, index) => {
					return (
						<StaffDetailPageContentAutoPlaySwipeableViewsResStoreImgWrap key={index}>
							<StaffDetailPageContentAutoPlaySwipeableViewsResStoreImg
								src={item.path || ""}
								alt={"Ảnh chi tiết số " + (index + 1) + " " + props.staff?.pageTitle}
							/>
						</StaffDetailPageContentAutoPlaySwipeableViewsResStoreImgWrap>
					);
				})}
			</StaffDetailPageContentAutoPlaySwipeableViewsRes>
			<DotsWrapper>
				{allImages.map((_, index) => (
					<Dot
						key={index}
						active={index === swipeIdx}
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
		</StaffDetailPageContentTopImgStore>
	);
}

// export function StaffDetailPageContentImgStoreSSR(props: {
// 	staff?: Staff;
// 	selectedImage: string;
// 	setSelectedImage: (val: string) => void;
// }) {
// 	const [swipeIdx, setSwipeIdx] = useState(0);

// 	let allImages: Image[] = [];

// 	if (props.staff && props.staff.user && props.staff.user.urlImage) {
// 		const userImage = new Image();
// 		userImage.path = props.staff.user.urlImage;
// 		allImages.push(userImage);
// 	}
// 	allImages = allImages.concat(props.staff?.images || []);

// 	const thumbnailsHtml = allImages
// 		.map(
// 			(val, index) => `
// 	<div
// 		 data-id="${props.staff?.id}"
// 		 data-src="${val.path || ""}"
// 		 onclick="functionStaffImageChange(${props.staff?.id}, '${val.path || ""}')">
// 		<img
// 			src="${val.path || ""}"
// 			alt="Ảnh chi tiết số ${index + 1} ${props.staff?.pageTitle}"
// 		/>
// 	</div>`
// 		)
// 		.join("");
// 	const imagePaths = allImages.map((val) => val.path || "");

// 	return (
// 		<StaffDetailPageContentTopImgStore>
// 			<StaffDetailPageContentTopImgLeftStoreSSR>
// 				<StaffDetailPageContentTopImgLeftChildSSR
// 					src={props.selectedImage}
// 					alt={"Ảnh chi tiết " + props.staff?.pageTitle}
// 					className={`StaffMainImage_${props.staff?.id}`}
// 				/>
// 			</StaffDetailPageContentTopImgLeftStoreSSR>
// 			<StaffDetailPageContentTopImgRightStoreSSR>
// 				<AutoPlaySwipeableViewsStaffReviewStoreSSRInner dangerouslySetInnerHTML={{ __html: thumbnailsHtml }} />
// 			</StaffDetailPageContentTopImgRightStoreSSR>
// 			<ReviewPageButtonLeftStoreSSR
// 				dangerouslySetInnerHTML={{
// 					__html: `
// 					<button onclick="functionStaffImageGoLeft('${props.staff?.id}', ${JSON.stringify(imagePaths).replace(/"/g, "'")})">
// 						<i class="fa fa-angle-left" aria-hidden="true"></i>
// 					</button>`,
// 				}}
// 			/>
// 			<ReviewPageButtonRigthStoreSSR
// 				dangerouslySetInnerHTML={{
// 					__html: `
// 					<button onclick="functionStaffImageGoRight('${props.staff?.id}', ${JSON.stringify(imagePaths).replace(/"/g, "'")})">
// 						<i class="fa fa-angle-right" aria-hidden="true"></i>
// 					</button>`,
// 				}}
// 			/>
// 		</StaffDetailPageContentTopImgStore>
// 	);
// }

export function StaffDetailWrokStore(props: { storeMembers?: Staff[] | null; lang: string }) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const scrollAmount = 200;

	const handlePrevButtonClick = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft -= scrollAmount;
		}
	};

	const handleNextButtonClick = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += scrollAmount;
		}
	};
	const { staticContext } = useStaticContext();
	return (
		<>
			{props.storeMembers && props.storeMembers.length > 0 ? (
				<>
					<StaffDetailPageWorkerAutoPlaySwipeableViewsTitle>
						{" "}
						{TranslateLabels[props.lang]?.LIST_OF_THERAPISTS || "Danh sách kỹ thuật viên"}
					</StaffDetailPageWorkerAutoPlaySwipeableViewsTitle>
					<StaffDetailPageWorkerAutoPlaySwipeableViewsWrap>
						<StaffDetailPageWorkerAutoPlaySwipeableViews
							ref={containerRef}
							className={`StaffInfoWrap_KTVSpa`}>
							{(props.storeMembers || []).map((item, index) => {
								return (
									<StaffDetailPageWorkerAutoPlaySwipeableViewsLink to={"/" + item.url || ""}>
										<StaffDetailPageWorkerAutoPlaySwipeableViewsImg
											src={item.user?.thumbnailImage || item.user?.urlImage || ""}
											alt={"Ảnh đại diện kỹ thuật viên " + item.name || ""}
										/>
									</StaffDetailPageWorkerAutoPlaySwipeableViewsLink>
								);
							})}
						</StaffDetailPageWorkerAutoPlaySwipeableViews>
						{staticContext?.newStyle ? (
							<>
								<ReviewPageButtonLeftWorkerSSR
									dangerouslySetInnerHTML={{
										__html: `
					<button onClick="functionStaffInfoBack('KTVSpa')">
						<i class="fa fa-angle-left" aria-hidden="true"></i>
					</button>`,
									}}
								/>
								<ReviewPageButtonRigthWorkerSSR
									dangerouslySetInnerHTML={{
										__html: `
					<button onClick="functionStaffInfoNext('KTVSpa')">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</button>`,
									}}
								/>
							</>
						) : (
							<>
								<ReviewPageButtonLeftWorker onClick={handlePrevButtonClick}>
									<i
										className="fa fa-angle-left"
										aria-hidden="true"></i>
								</ReviewPageButtonLeftWorker>
								<ReviewPageButtonRigthWorker onClick={handleNextButtonClick}>
									<i
										className="fa fa-angle-right"
										aria-hidden="true"></i>
								</ReviewPageButtonRigthWorker>
							</>
						)}
					</StaffDetailPageWorkerAutoPlaySwipeableViewsWrap>
				</>
			) : (
				<></>
			)}
		</>
	);
}

export function StaffDetailPageContentImgStoreSSR(props: {
	staff?: Staff;
	selectedImage: string;
	setSelectedImage: (val: string) => void;
}) {
	const [swipeIdx, setSwipeIdx] = useState(0);

	let allImages: Image[] = [];

	if (props.staff && props.staff.user && ( props.staff.user?.thumbnailImage || props.staff.user.urlImage)) {
		const userImage = new Image();
		userImage.path =props.staff.user?.thumbnailImage || props.staff.user.urlImage;
		allImages.push(userImage);
	}
	allImages = allImages.concat(props.staff?.images || []);

	if (props.staff?.promotionalVideos) {
		const thumbnails = props.staff.promotionalVideos.map((video) => {
			const embedUrl = video.url.replace('/watch/', '/embed/').replace('watch?v=', 'embed/');
			return {
				path: video.thumbnailImage,
				isVideo: true,
				urlVideo: embedUrl,
				clone: function () {
					return { ...this };
				},
			};
		});
		allImages.unshift(...thumbnails);
	}
	const thumbnailsHtml = allImages
		.map(
			(val, index) => `
		<div
			 data-id="${props.staff?.id}"
			 data-src="${val.thumbnailPath ||val.path || ""}"
			 onclick="functionStaffImageChange(${props.staff?.id}, '${val.path || ""}','${val.isVideo || ""}', '${val.urlVideo || ""}', '${index}')">
			<img 
				src="${val.thumbnailPath ||val.path || ""}"
				alt="Ảnh chi tiết số ${index + 1} ${props.staff?.pageTitle}"
			/>
		</div>`
		)
		.join("");

	const imageDetails = allImages.map((val) => ({
		path: val.path || "",
		isVideo: val.isVideo || false,
		urlVideo: val.urlVideo || "",
	}));

	const imagePaths = allImages.map((val) => val.path || "");

	return (
		<StaffDetailPageContentTopImgStore>
			<StaffDetailPageContentTopImgLeftStoreSSR>
			<div id="index_img" data-indeximg="0" />
				<AutoPlayVideoYoutubeEmbedUrl
					src={`${allImages?.[0].isVideo && allImages?.[0].urlVideo}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					style={{ display: allImages?.[0].isVideo ? "block" : "none" }}
					className={`StaffMainVideo_${props.staff?.id}`}></AutoPlayVideoYoutubeEmbedUrl>
				<StaffDetailPageContentTopImgLeftChildSSR
					src={props.selectedImage}
					alt={"Ảnh chi tiết " + props.staff?.pageTitle}
					className={`StaffMainImage_${props.staff?.id}`}
					style={{ display: allImages?.[0].isVideo ? "none" : "block" }}
				/>
			</StaffDetailPageContentTopImgLeftStoreSSR>
			<StaffDetailPageContentTopImgRightStoreSSR>
				<AutoPlaySwipeableViewsStaffReviewStoreSSRInner dangerouslySetInnerHTML={{ __html: thumbnailsHtml }} />
			</StaffDetailPageContentTopImgRightStoreSSR>
			<ReviewPageButtonLeftStoreSSR
				dangerouslySetInnerHTML={{
					__html: `
					<button onclick="functionStaffImageGoLeftVideo('${props.staff?.id}', ${JSON.stringify(imageDetails).replace(
						/"/g,
						"'"
					)})">
						<i class="fa fa-angle-left" aria-hidden="true"></i>
					</button>`,
				}}
			/>
			<ReviewPageButtonRigthStoreSSR
				dangerouslySetInnerHTML={{
					__html: `
					<button onclick="functionStaffImageGoRightVideo('${props.staff?.id}', ${JSON.stringify(imageDetails).replace(
						/"/g,
						"'"
					)})">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</button>`,
				}}
			/>
		</StaffDetailPageContentTopImgStore>
	);
}

export function StaffDetailPageContentTopInfoSocialMediaComponent(props: { staff: Staff }) {
	const normalizeUrl = (url: string | undefined) => {
		if (!url) return "";
		return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
	};
	return (
		<StaffDetailPageContentTopInfoSocialMedia>
			<StaffDetailPageContentTopInfoSocialMediaImgWrap
				href={normalizeUrl(props.staff.socialMedia?.website || "")}
				rel="nofollow"
				target="_blank"
				isDisabled={!props.staff.socialMedia?.website || props.staff.socialMedia?.website.length === 0}>
				<StaffDetailPageContentTopInfoSocialMediaImg
					src="./static/img/socialmediabrowse.png"
					isDisabled={!props.staff.socialMedia?.website || props.staff.socialMedia?.website.length === 0}
					alt="Biểu tượng Browse"
				/>
			</StaffDetailPageContentTopInfoSocialMediaImgWrap>

			<StaffDetailPageContentTopInfoSocialMediaImgWrap
				href={normalizeUrl(props.staff.socialMedia?.facebook || "")}
				rel="nofollow"
				target="_blank"
				isDisabled={!props.staff.socialMedia?.facebook || props.staff.socialMedia?.facebook.length === 0}>
				<StaffDetailPageContentTopInfoSocialMediaImg
					src="./static/img/socialmediafacebook.png"
					isDisabled={!props.staff.socialMedia?.facebook || props.staff.socialMedia?.facebook.length === 0}
					alt="Biểu tượng Facebook"
				/>
			</StaffDetailPageContentTopInfoSocialMediaImgWrap>

			<StaffDetailPageContentTopInfoSocialMediaImgWrap
				href={normalizeUrl(props.staff.socialMedia?.youtube || "")}
				rel="nofollow"
				target="_blank"
				isDisabled={!props.staff.socialMedia?.youtube || props.staff.socialMedia?.youtube.length === 0}>
				<StaffDetailPageContentTopInfoSocialMediaImg
					src="./static/img/socialmediayoutube.png"
					isDisabled={!props.staff.socialMedia?.youtube || props.staff.socialMedia?.youtube.length === 0}
					alt="Biểu tượng Youtube"
				/>
			</StaffDetailPageContentTopInfoSocialMediaImgWrap>

			<StaffDetailPageContentTopInfoSocialMediaImgWrap
				href={normalizeUrl(props.staff.socialMedia?.tiktok || "")}
				rel="nofollow"
				target="_blank"
				isDisabled={!props.staff.socialMedia?.tiktok || props.staff.socialMedia?.tiktok.length === 0}>
				<StaffDetailPageContentTopInfoSocialMediaImg
					src="./static/img/socialmediatiktok.png"
					isDisabled={!props.staff.socialMedia?.tiktok || props.staff.socialMedia?.tiktok.length === 0}
					alt="Biểu tượng Tiktok"
				/>
			</StaffDetailPageContentTopInfoSocialMediaImgWrap>

			<StaffDetailPageContentTopInfoSocialMediaImgWrap
				href={normalizeUrl(props.staff.socialMedia?.instagram || "")}
				rel="nofollow"
				target="_blank"
				isDisabled={!props.staff.socialMedia?.instagram || props.staff.socialMedia?.instagram.length === 0}>
				<StaffDetailPageContentTopInfoSocialMediaImg
					src="./static/img/socialmediainstagram.png"
					isDisabled={!props.staff.socialMedia?.instagram || props.staff.socialMedia?.instagram.length === 0}
					alt="Biểu tượng Instagram"
				/>
			</StaffDetailPageContentTopInfoSocialMediaImgWrap>
		</StaffDetailPageContentTopInfoSocialMedia>
	);
}
