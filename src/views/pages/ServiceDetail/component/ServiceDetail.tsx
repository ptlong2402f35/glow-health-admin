import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import BreadCrumbStaff from "../../FilterAtHome/component/BreadCrumb";
import {
	AutoPlaySwipeableViewsStaffReview,
	AutoPlaySwipeableViewsStaffReviewImg,
	AutoPlaySwipeableViewsStaffReviewImgv2,
	AutoPlaySwipeableViewsStaffReviewStore,
	BannerHomePageAutoPlaySwipeableViewsRes,
	ExperienceSpaWrap,
	ReviewPageButtonLeft,
	ReviewPageButtonLeftStore,
	ReviewPageButtonLeftStoreSSR,
	ReviewPageButtonRigth,
	ReviewPageButtonRigthStore,
	ReviewPageButtonRigthStoreSSR,
	ReviewSwipeableView,
	ServiceDetailPageViewsRes,
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
	StaffDetailPageContentBottomGroupServiceContentButtonLink,
	StaffDetailPageContentBottomGroupServiceContentDiv,
	StaffDetailPageContentBottomGroupServiceContentKTV,
	StaffDetailPageContentBottomGroupServiceContentNumber,
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
	StaffDetailPageContentTopImgInnerWrap,
	StaffDetailPageContentTopImgLeft,
	StaffDetailPageContentTopImgLeftChild,
	StaffDetailPageContentTopImgLeftChildSSR,
	StaffDetailPageContentTopImgLeftStore,
	StaffDetailPageContentTopImgLeftStoreResSSR,
	StaffDetailPageContentTopImgLeftStoreSSR,
	StaffDetailPageContentTopImgRight,
	StaffDetailPageContentTopImgRightSSR,
	StaffDetailPageContentTopImgRightStore,
	StaffDetailPageContentTopImgStore,
	StaffDetailPageContentTopInfo,
	StaffDetailPageContentTopInfoAdress,
	StaffDetailPageContentTopInfoAdressImg,
	StaffDetailPageContentTopInfoAdressStar,
	StaffDetailPageContentTopInfoAdressv2,
	StaffDetailPageContentTopInfoButton,
	StaffDetailPageContentTopInfoDescription,
	StaffDetailPageContentTopInfoDescriptionContent,
	StaffDetailPageContentTopInfoDescriptionContentService,
	StaffDetailPageContentTopInfoDescriptionName,
	StaffDetailPageContentTopInfoDescriptionService,
	StaffDetailPageContentTopInfoHastag,
	StaffDetailPageContentTopInfoHastagLink,
	StaffDetailPageContentTopInfoName,
	StaffDetailPageContentTopInfoNameService,
	StaffDetailPageContentTopInfoNamev2,
	StaffDetailPageContentTopInfoStar,
	StaffDetailPageContentTopInfoStarImg,
	StaffDetailPageContentTopInfoStarList,
	StaffDetailPageContentTopInfoStarListWrap,
	StaffDetailPageContentTopInfoStarResWrap,
	StaffDetailPageContentTopInfoStarTitle,
	StaffDetailPageContentTopInfoStarTitleImg,
	StaffDetailPageContentTopInfoStarU,
	StaffDetailPageContentTopInfoStarWrap,
	StaffDetailPageTitle,
	StaffDetailPageWrap,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import { Link } from "react-router-dom";
import { StaffInfoAutoPlayImgCheck, StaffInfoAutoPlayImgCheckBigSize } from "../../home/styled/HomeStyles";
import Staff, { ServiceTree } from "../../../../models/Staff";
import StaffService from "../../../../models/StaffService";
import { Image, StaffServiceHome, StaffServicePrice } from "../../../../models/Service";
import environments from "../../../../environment";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import useGetDetailService from "../hook/getDetailService";
import {
	ReviewNumberStarFilterDetailWrapv2,
	ReviewNumberStarFilterWrapv2,
	ReviewPageInWrapLast,
	ServiceDetailNotiInner,
	ServiceDetailNotiWrap,
	ServiceDetailNumberStar,
	ServiceDetailNumberStarRight,
	ServiceDetailNumberStarRightInner,
	ServiceDetailNumberStarRightLabel,
	ServiceDetailNumberStarWrap,
	ServiceDetailPageContentBottomGroupServiceContent,
	ServiceDetailPageContentTopInfoAdressStar,
	ServiceDetailPageContentTopInfoButton,
	ServiceDetailReviewPageWrap,
	ServiceDetailReviewTitle,
	ServiceDetailReviewWrap,
	ServiceHomePageImgCommentDetail,
	ServiceHomePageImgCommentReviewWrap,
	ServiceReviewImgv2,
	StaffDetailPageContentBottomGroupServiceContentButtonLinkv2,
	StaffDetailPageContentBottomReview,
} from "../styled/ServiceStyle";
import { formatCashback } from "../../StaffDetail/component/StaffDetailWrap";
import {
	ReviewNumberStar,
	ReviewNumberStarFilter,
	ReviewNumberStarFilterLink,
	ReviewNumberStarFilterWrap,
	ReviewPageInWrap,
	ReviewPageWrap,
	ReviewStaffName,
	ReviewStaffServiceName,
	ServiceHomePageImgComment,
	ServiceHomePageImgCommentWrap,
	ServiceHomePageImgIconv2,
} from "../../FilterService/styled/ListServiceFilter";
import useGetReviewStaff from "../../StaffDetail/hook/getReviewStaff";
import moment from "moment";
import useGetReviewService from "../hook/getReviewStaff";
import { PaginationWrapper } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { formatPrice } from "../../home/HomePageNew/DealHotHomePage";
import usePostVoucher from "../../Voucher/hook/usePostVoucher";
import DialogGetVoucher from "../../Voucher/component/DialogSuccesGetVoucher";
import useLoadedUser from "../../../hooks/auth/useLoadedUser";
import AdsenseComponent from "../../../controls/AdsenseComponent";
import { AdsenseWrap } from "../../StaffDetail/styled/StaffDetailStyle";
import useStaticContext from "../../../hooks/useStaticContext";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";

export default function ServiceDetailPage() {
	const { group, link, lang, servicelink } = useParams<{
		group: string;
		link: string;
		lang: string;
		servicelink: string;
	}>();
	const { service, reload } = useGetDetailService({ group, servicelink, lang });

	const [selectedImage, setSelectedImage] = useState<string | undefined>(
		service?.staffService?.images?.[0]?.path || ""
	);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	useEffect(() => {
		setSelectedImage(
			service?.staffService?.images?.[0]?.path || service?.staffService?.staff?.user?.urlImage || ""
		);
	}, [service?.staffService]);

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

	const handleBlog = () => {
		window.location.href = (environments.redirecturl || "").replace(
			/\$\$\$lang\$\$\$/gi,
			lang ? "/" + lang : "/vi"
		);
	};
	const { doVoucher, infoVoucher } = usePostVoucher({});

	const getVoucher = async () => {
		await doVoucher(service?.staffId || 0, parseInt(service?.id || "0"));
		setIsDialogOpen(true);
	};

	const { user } = useLoadedUser();
	const location = useLocation();
	const { staticContext } = useStaticContext();
	return (
		<StaffDetailPageWrap>
			<BreadCrumbStaff breadCrumb={service?.breadcrumb || []} />
			{/* <StaffDetailPageTitle>{service?.pageTitle || "Chi tiết dịch vụ"}</StaffDetailPageTitle> */}
			<StaffDetailPageContentTop>
				{staticContext?.newStyle ? (
					<StaffDetailPageContentImgSSR
						staffService={service?.staffService}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
				) : (
					<StaffDetailPageContentImg
						staffService={service?.staffService}
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
				)}
				<StaffDetailPageContentTopInfo>
					<StaffDetailPageContentTopInfoNameService>
						{staticContext?.data?.h1Content ? (
							staticContext?.data?.h1Content
						) : (
							<>
								{TranslateLabels[lang || "vi"]?.LOGIN_VOUCHER} {service?.staffService?.name || ""}{" "}
								{service?.unit || 0} {TranslateLabels[lang || "vi"]?.LOGIN_ONLY}{" "}
								{(service?.displayReducedPrice || "0")?.toLocaleString()}đ
							</>
						)}
					</StaffDetailPageContentTopInfoNameService>
					<ServiceDetailPageContentTopInfoAdressStar>
						<StaffDetailPageContentTopInfoAdressv2>
							<StaffDetailPageContentTopInfoAdressImg
								src="./static/img/coin-dollar.png"
								alt="Biểu tượng giá"
							/>
							<ServiceDetailPageContentBottomGroupServiceContent>
								{TranslateLabels[lang || "vi"]?.NEW_PAGE_GLOW_WILL_CASHBACK}
							</ServiceDetailPageContentBottomGroupServiceContent>{" "}
							<StaffDetailPageContentBottomGroupServiceContentNumber>
								{formatPrice(service?.displayCashback || 0)}
							</StaffDetailPageContentBottomGroupServiceContentNumber>
						</StaffDetailPageContentTopInfoAdressv2>
					</ServiceDetailPageContentTopInfoAdressStar>
					<StaffDetailPageContentBottomGroupSolid></StaffDetailPageContentBottomGroupSolid>
					<StaffDetailPageContentTopInfoDescriptionService>
						{/* <StaffDetailPageContentTopInfoDescriptionName>
							{TranslateLabels[lang]?.DESCRIPTION || "Mô tả dịch vụ"}
						</StaffDetailPageContentTopInfoDescriptionName> */}
						<StaffDetailPageContentTopInfoDescriptionContentService>
							{service?.staffService?.description}
						</StaffDetailPageContentTopInfoDescriptionContentService>
						<ServiceDetailNoti service={service} />
						{/* {user ? 
						<ServiceDetailPageContentTopInfoButton
							onClick={getVoucher}>
							{TranslateLabels[lang||"vi"]?.NEW_PAGE_COLLECT_VOUCHER}
						</ServiceDetailPageContentTopInfoButton>
						: 
						<StaffDetailPageContentBottomGroupServiceContentButtonLinkv2 to={`/dang-nhap?back=${encodeURIComponent(location.pathname)}`}>{TranslateLabels[lang||"vi"]?.NEW_PAGE_COLLECT_VOUCHER}</StaffDetailPageContentBottomGroupServiceContentButtonLinkv2>} */}
					</StaffDetailPageContentTopInfoDescriptionService>
				</StaffDetailPageContentTopInfo>
			</StaffDetailPageContentTop>
			<ServiceDetailReview service={service} />
			<DialogGetVoucher
				isDialogOpen={isDialogOpen}
				setIsDialogOpen={setIsDialogOpen}
				infoVoucher={infoVoucher}
			/>
			<AdsenseWrap>
				<AdsenseComponent AdFormat="4436383817" />
			</AdsenseWrap>
		</StaffDetailPageWrap>
	);
}

export function StaffDetailPageContentImg(props: {
	staffService?: StaffServiceHome;
	selectedImage?: string;
	setSelectedImage: (val: string) => void;
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChangeRes = (index: number) => {
		setActiveIndex(index);
	};
	return (
		<StaffDetailPageContentTopImg>
			<StaffDetailPageContentTopImgLeft>
				{props.staffService?.images && props.staffService?.images.length > 0 ? (
					<StaffDetailPageContentTopImgLeftChild
						src={props.selectedImage || "./static/img/white-wallpaper-1.jpg"}
						alt={"Ảnh chi tiết " + props.staffService?.name}
					/>
				) : (
					<StaffDetailPageContentTopImgLeftChild
						src={props?.staffService?.staff?.user?.urlImage || "./static/img/white-wallpaper-1.jpg"}
						alt={"Ảnh chi tiết " + props.staffService?.name}
					/>
				)}
			</StaffDetailPageContentTopImgLeft>
			<StaffDetailPageContentTopImgRight>
				{props.staffService?.images && props.staffService?.images.length > 0 ? (
					<>
						{props.staffService?.images.map((val, index) => {
							return (
								<StaffDetailPageContentTopImgInner
									key={index}
									onClick={() => props.setSelectedImage(val.path || "")}>
									<StaffDetailPageContentTopImgInnerChild
										src={val.path || ""}
										isSelected={val.path === props.selectedImage}
										alt={"Ảnh chi tiết số " + (index + 1) + " " + props.staffService?.name}
									/>
								</StaffDetailPageContentTopImgInner>
							);
						})}
					</>
				) : (
					<StaffDetailPageContentTopImgInner
						onClick={() => props.setSelectedImage(props?.staffService?.staff?.user?.urlImage || "")}>
						<StaffDetailPageContentTopImgInnerChild
							src={props?.staffService?.staff?.user?.urlImage || ""}
							isSelected={props?.staffService?.staff?.user?.urlImage === props.selectedImage}
							alt={"Ảnh chi tiết số 1" + " " + props.staffService?.name}
						/>
					</StaffDetailPageContentTopImgInner>
				)}
			</StaffDetailPageContentTopImgRight>
			{props.staffService?.images && props.staffService?.images.length > 0 ? (
				<StaffDetailPageContentAutoPlaySwipeableViewsRes
					index={activeIndex}
					onChangeIndex={handleSlideChangeRes}
					enableMouseEvents>
					{(props.staffService?.images || []).map((item, index) => {
						return (
							<StaffDetailPageContentAutoPlaySwipeableViewsResImgWrap key={index}>
								<StaffDetailPageContentAutoPlaySwipeableViewsResImg
									src={item.path || ""}
									alt={"Ảnh chi tiết số " + (index + 1) + " " + props.staffService?.name}
								/>
							</StaffDetailPageContentAutoPlaySwipeableViewsResImgWrap>
						);
					})}
				</StaffDetailPageContentAutoPlaySwipeableViewsRes>
			) : (
				<ServiceDetailPageViewsRes>
					<StaffDetailPageContentAutoPlaySwipeableViewsResImgWrap>
						<StaffDetailPageContentAutoPlaySwipeableViewsResImg
							src={props?.staffService?.staff?.user?.urlImage || ""}
							alt={"Ảnh chi tiết số 1" + " " + props.staffService?.name}
						/>
					</StaffDetailPageContentAutoPlaySwipeableViewsResImgWrap>
				</ServiceDetailPageViewsRes>
			)}
		</StaffDetailPageContentTopImg>
	);
}

export function StaffDetailPageContentImgSSR(props: {
	staffService?: StaffServiceHome;
	selectedImage?: string;
	setSelectedImage: (val: string) => void;
}) {
	const thumbnailsHtml = (props.staffService?.images || [])
		.map(
			(val, index) => `
	<div
		 data-id="${props.staffService?.id}" 
		 data-src="${val.path || ""}"
		 onclick="functionStaffImageChangeNoVideo(${props.staffService?.id}, '${val.path || ""}')">
		<img 
			src="${val.path || ""}" 
			alt="Ảnh chi tiết số " + (${index + 1}) + " " + ${props.staffService?.name}" 
		/>
	</div>`
		)
		.join("");

	const imagePaths = (props.staffService?.images || []).map((val) => val.path || "");

	return (
		<StaffDetailPageContentTopImg>
			<StaffDetailPageContentTopImgLeft>
				{props.staffService?.images && props.staffService?.images.length > 0 ? (
					<StaffDetailPageContentTopImgLeftChild
						src={props.selectedImage || "./static/img/white-wallpaper-1.jpg"}
						alt={"Ảnh chi tiết " + props.staffService?.name}
						className={`StaffMainImage_${props.staffService?.id}`}
					/>
				) : (
					<StaffDetailPageContentTopImgLeftChild
						src={props?.staffService?.staff?.user?.urlImage || "./static/img/white-wallpaper-1.jpg"}
						alt={"Ảnh chi tiết " + props.staffService?.name}
					/>
				)}
			</StaffDetailPageContentTopImgLeft>
			<StaffDetailPageContentTopImgRight>
				{props.staffService?.images && props.staffService?.images.length > 0 ? (
					<>
						<StaffDetailPageContentTopImgInnerWrap dangerouslySetInnerHTML={{ __html: thumbnailsHtml }} />
					</>
				) : (
					<StaffDetailPageContentTopImgInner
						onClick={() => props.setSelectedImage(props?.staffService?.staff?.user?.urlImage || "")}>
						<StaffDetailPageContentTopImgInnerChild
							src={props?.staffService?.staff?.user?.urlImage || ""}
							isSelected={props?.staffService?.staff?.user?.urlImage === props.selectedImage}
							alt={"Ảnh chi tiết số 1" + " " + props.staffService?.name}
						/>
					</StaffDetailPageContentTopImgInner>
				)}
			</StaffDetailPageContentTopImgRight>

			<StaffDetailPageContentTopImgLeftStoreResSSR>
				<StaffDetailPageContentTopImgLeftChildSSR
					src={
						props.selectedImage ||
						props?.staffService?.staff?.user?.urlImage ||
						"./static/img/white-wallpaper-1.jpg"
					}
					alt={"Ảnh chi tiết " + props.staffService?.name}
					className={`StaffMainImageMobile_${props.staffService?.id}`}
				/>
			</StaffDetailPageContentTopImgLeftStoreResSSR>
			<ReviewPageButtonLeftStoreSSR
				dangerouslySetInnerHTML={{
					__html: `
					<button onclick="functionStaffImageGoLeft('${props.staffService?.id}', ${JSON.stringify(imagePaths).replace(
						/"/g,
						"'"
					)}, 'mobile')">
						<i class="fa fa-angle-left" aria-hidden="true"></i>
					</button>`,
				}}
			/>
			<ReviewPageButtonRigthStoreSSR
				dangerouslySetInnerHTML={{
					__html: `
					<button onclick="functionStaffImageGoRight('${props.staffService?.id}', ${JSON.stringify(imagePaths).replace(
						/"/g,
						"'"
					)}, 'mobile')">
						<i class="fa fa-angle-right" aria-hidden="true"></i>
					</button>`,
				}}
			/>
		</StaffDetailPageContentTopImg>
	);
}

export function ServiceDetailReview(props: { service?: StaffServicePrice }) {
	const { star, setFilterStar, total } = useGetReviewService({
		id: props.service?.staffService?.staff?.id || 0,
		link: props.service?.staffService?.id || "",
	});
	const [selectedFilter, setSelectedFilter] = useState("");
	const { lang } = useParams<{ lang: string }>();
	const { page, doChangePage, getPathChangePage, getPathFilterStar, filterStar } = useCommonListFunctions();

	const getReviewLabel = (rate: number) => {
		if (rate == 0) {
			return "";
		} else if (rate > 0 && rate <= 2) {
			return "Normal";
		} else if (rate > 2 && rate <= 3) {
			return "Normal";
		} else if (rate > 3 && rate <= 4) {
			return "Good";
		} else if (rate > 4 && rate <= 4.5) {
			return "Excellent";
		} else {
			return "Amazing";
		}
	};

	const stars = [];
	if (props.service?.staffService?.staff?.rateAvg) {
		const starCount = Math.round(props.service?.staffService?.staff?.rateAvg);
		const starDetailCount = 5 - Math.round(props.service?.staffService?.staff?.rateAvg);

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
		<ServiceDetailReviewPageWrap>
			<ServiceDetailReviewTitle>
				{TranslateLabels[lang || "vi"]?.NEW_PAGE_CUSTOMER_REVIEWS}
			</ServiceDetailReviewTitle>
			<ServiceDetailReviewWrap>
				<div>
					<ServiceDetailNumberStarWrap>
						<ServiceDetailNumberStar>
							{Math.round((props.service?.staffService?.staff?.rateAvg || 0) * 10) / 10}
						</ServiceDetailNumberStar>
						<ServiceDetailNumberStarRight>
							<ServiceDetailNumberStarRightInner>
								<ServiceDetailNumberStarRightLabel>
									{getReviewLabel(props.service?.staffService?.staff?.rateAvg || 0)}
								</ServiceDetailNumberStarRightLabel>
								<ReviewNumberStar>{stars}</ReviewNumberStar>
							</ServiceDetailNumberStarRightInner>
							<div>
								{props.service?.staffService?.countReview || 0}{" "}
								{TranslateLabels[lang || "vi"]?.FILTERS_REVIEWS}
							</div>
						</ServiceDetailNumberStarRight>
					</ServiceDetailNumberStarWrap>
				</div>
				<ReviewNumberStarFilterDetailWrapv2>
					<ReviewNumberStarFilterWrapv2>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar === "" ? "#D4E0CE" : "transparent",
									color: filterStar === "" ? "#5B7A4F" : "black",
									border: filterStar === "" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								{TranslateLabels[lang || "vi"]?.ALL}
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("5") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "5" ? "#D4E0CE" : "transparent",
									color: filterStar == "5" ? "#5B7A4F" : "black",
									border: filterStar == "5" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								5{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("4") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "4" ? "#D4E0CE" : "transparent",
									color: filterStar == "4" ? "#5B7A4F" : "black",
									border: filterStar == "4" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								4{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("3") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "3" ? "#D4E0CE" : "transparent",
									color: filterStar == "3" ? "#5B7A4F" : "black",
									border: filterStar == "3" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								3{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("2") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "2" ? "#D4E0CE" : "transparent",
									color: filterStar == "2" ? "#5B7A4F" : "black",
									border: filterStar == "2" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								2{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
						<ReviewNumberStarFilterLink to={getPathFilterStar ? getPathFilterStar("1") : ""}>
							<ReviewNumberStarFilter
								style={{
									backgroundColor: filterStar == "1" ? "#D4E0CE" : "transparent",
									color: filterStar == "1" ? "#5B7A4F" : "black",
									border: filterStar == "1" ? "1px solid #D4E0CE" : "1px solid #B5B6B5",
								}}>
								1{" "}
								<StaffDetailPageContentTopInfoStarTitleImg
									src="./static/img/Star.png"
									alt="image_start"
								/>
							</ReviewNumberStarFilter>
						</ReviewNumberStarFilterLink>
					</ReviewNumberStarFilterWrapv2>
				</ReviewNumberStarFilterDetailWrapv2>
			</ServiceDetailReviewWrap>
			{props.service?.staffService?.countReview && (
				<StaffDetailPageContentBottomReview>
					{star?.map((val, index) => {
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
							<ReviewPageWrap>
								<ReviewPageInWrap>
									<ServiceHomePageImgIconv2 src={val.userCustomer?.thumbnailImage || val.userCustomer?.urlImage || "./static/img/user.png"} alt="Ảnh đại diện"/>
									<ReviewStaffName>
										{val.userCustomer?.userName || val.userCustomer?.phone}
									</ReviewStaffName>
								</ReviewPageInWrap>
								<ReviewPageInWrap>
									<ReviewNumberStar>{stars}</ReviewNumberStar>
									<ReviewStaffServiceName>
										{(val.updatedAt && moment(val.updatedAt).format("DD-MM-YYYY")) || "--"}
									</ReviewStaffServiceName>
								</ReviewPageInWrap>
								<ReviewPageInWrapLast>
									<ServiceHomePageImgCommentReviewWrap>
										{val.reviewImages?.map((value, idx) => {
											return (
												<div>
													<ServiceHomePageImgCommentDetail
														src={value.path || ""}
														alt={"Ảnh đánh giá số" + idx}
													/>
												</div>
											);
										})}
									</ServiceHomePageImgCommentReviewWrap>
									<div>{val.noteReview}</div>
								</ReviewPageInWrapLast>
							</ReviewPageWrap>
						);
					})}
				</StaffDetailPageContentBottomReview>
			)}
			<PaginationWrapper>
				<NumberPaginationBox
					page={page || 1}
					count={total}
					per={PERPAGE.Home}
					onChange={(val) => doChangePage?.(val)}
					linkGetter={(val) => (getPathChangePage ? getPathChangePage(val) : "")}
				/>
			</PaginationWrapper>
		</ServiceDetailReviewPageWrap>
	);
}

export function ServiceDetailNoti(props: { service?: StaffServicePrice }) {
	const { lang } = useParams<{ lang: string }>();
	const makePhoneCall = (phoneNumber: any) => {
		window.location.href = `tel:${phoneNumber}`;
	};

	return (
		<ServiceDetailNotiWrap>
			<ServiceDetailNotiInner>
				<ServiceReviewImgv2 src="./static/img/CheckNoti.png" alt="Biểu tượng Check"/>
				{/* <span>
					{TranslateLabels[lang||"vi"]?.NEW_PAGE_PRESSING_COLLECT_VOUCHER} {TranslateLabels[lang||"vi"]?.NEW_PAGE_EXPIRATION_DATE} {" "}
					{(props.service?.displayExpiredAt &&
						moment(props.service?.displayExpiredAt).format("DD-MM-YYYY")) ||
						"--"}
					.
				</span> */}
				<span>
					{TranslateLabels[lang || "vi"]?.CONTACT_PHONE_NUMBER}{" "}
					<StaffDetailPageContentTopInfoStarU
						onClick={() => makePhoneCall(props.service?.staffService?.staff?.user?.phone)}>
						{props.service?.staffService?.staff?.user?.phone || "--"}
					</StaffDetailPageContentTopInfoStarU>
					.
				</span>
			</ServiceDetailNotiInner>
			{/* <ServiceDetailNotiInner>
				<ServiceReviewImgv2 src="./static/img/CheckNoti.png" />
				<span>
				{TranslateLabels[lang||"vi"]?.NEW_PAGE_REFUND_GLOW_BALANCE}
				</span>
			</ServiceDetailNotiInner> */}
		</ServiceDetailNotiWrap>
	);
}
