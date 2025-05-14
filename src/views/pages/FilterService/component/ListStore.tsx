import React, { useState } from "react";
import Staff from "../../../../models/Staff";

import { differenceInYears } from "date-fns";
import Service from "../../../../models/Service";
import {
	ListServiceCashBackName,
	ListServiceCashBackPrice,
	ListServiceDistric,
	ListServiceDistricDisplayOriginalPrice,
	ListServiceDistricDisplayReducedPrice,
	ListServiceDistricWrap,
	ListServiceImg,
	ListServiceLeft,
	ListServiceName,
	ListServiceNameService,
	ListServiceNameStarWrap,
	ListServicePageItemDeal,
	ListServicePageItemDealImg,
	ListServiceRight,
	ListServiceStar,
	ListServiceWrap,
	ServicePageContentBottomGroupServiceContentButton,
	ServicePageContentTopInfoAdressImg,
} from "../styled/ListServiceFilter";
import { DealHotHomePageImgIcon, DealHotHomePageItemDealWrap, DealHotHomePageItemImgVideo } from "../../home/styled/HomeStyles";
import { formatCashback } from "../../StaffDetail/component/StaffDetailWrap";
import { useHistory, useLocation, useParams } from "react-router";
import environments from "../../../../environment";
import { formatPrice } from "../../home/HomePageNew/DealHotHomePage";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import DialogGetVoucher from "../../Voucher/component/DialogSuccesGetVoucher";
import usePostVoucher from "../../Voucher/hook/usePostVoucher";
import useLoadedUser from "../../../hooks/auth/useLoadedUser";
import {
	StaffDetailPageContentBottomGroupServiceContentButtonDiv,
	StaffDetailPageContentBottomGroupServiceContentButtonLink,
} from "../../FilterAtHome/styled/ListStaffAtHome";

export default function ListService(props: { key: number; val: Service }) {
	const { lang } = useParams<{ lang: string }>();

	const { doVoucher, infoVoucher } = usePostVoucher({});
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const getVoucher = async () => {
		await doVoucher(props.val.staffId || 0, props.val.id || 0);
		setIsDialogOpen(true);
	};

	const { user } = useLoadedUser();
	const location = useLocation();
	const history = useHistory();
	const handleOnClick = (e: any) => {
		e.preventDefault();
		history.push(`/dang-nhap?back=${encodeURIComponent(location.pathname)}`);
	};
	return (
		<ListServiceWrap to={props.val.url?.startsWith("/") ? props.val.url : "/" + props.val.url || ""}>
			<ListServiceLeft>
				{props.val?.staffService?.staff?.promotionalVideos && props.val?.staffService?.staff?.promotionalVideos.length > 0 && 
					<DealHotHomePageItemImgVideo 
					src={"/static/img/isvideo.png"}
					alt={"Ảnh mô tả có video " + " số " + props.key}/>
					}
				<ListServiceImg src={props.val.staffService?.staff?.user?.thumbnailImage|| props.val.staffService?.staff?.user?.urlImage || ""}  alt={`Ảnh dịch vụ ` + props.val.staffService?.staff?.name || props.val.staffService?.name }/>
				{props.val.displayReducedValuePercentage ? (
					<DealHotHomePageItemDealWrap>
						<ListServicePageItemDealImg src="./static/img/Hotdealv2.png" alt="Biểu tượng giảm giá"/>
						<ListServicePageItemDeal>
							{props.val.displayReducedValuePercentage?.toFixed(0)} % OFF
						</ListServicePageItemDeal>
					</DealHotHomePageItemDealWrap>
				) : (
					""
				)}
			</ListServiceLeft>
			<ListServiceRight>
				<ListServiceNameStarWrap>
					<ListServiceName>
						{props.val.staffService?.staff?.name || props.val.staffService?.name}
					</ListServiceName>
					<ListServiceStar>
						<DealHotHomePageImgIcon src="./static/img/Star.png" alt="Biểu tượng đánh giá"/>
						{props.val.staffService?.staff?.rateAvg}
					</ListServiceStar>
				</ListServiceNameStarWrap>
				<ListServiceDistricWrap>
					<ServicePageContentTopInfoAdressImg src="./static/img/location01.png" alt="Biểu tượng địa chỉ"/>
					<ListServiceDistric>{props.val.staffService?.staff?.province?.name}</ListServiceDistric>
				</ListServiceDistricWrap>
				<ListServiceNameService>
					{props.val.staffService?.name || props.val.staffService?.service?.name}
				</ListServiceNameService>
				<ListServiceDistricWrap>
					<ServicePageContentTopInfoAdressImg src="./static/img/clock-circle.png" alt="Biểu tượng thời gian dịch vụ"/>
					<div>{props.val.unit}</div>
				</ListServiceDistricWrap>
				<ListServiceDistricWrap>
					<ListServiceDistricDisplayReducedPrice>
						{formatPrice(props.val.displayReducedPrice || 0)}
					</ListServiceDistricDisplayReducedPrice>
					{props.val.displayReducedValue ? (
						<ListServiceDistricDisplayOriginalPrice>
							{formatPrice(props.val.displayOriginalPrice || 0)}
						</ListServiceDistricDisplayOriginalPrice>
					) : (
						""
					)}
				</ListServiceDistricWrap>
				{/* <ListServiceDistricWrap>
					<ListServiceCashBackName>
						{TranslateLabels[lang || "vi"]?.NEW_PAGE_CASHBACK}
					</ListServiceCashBackName>
					<ListServiceCashBackPrice>{formatPrice(props.val.displayCashback || 0)}</ListServiceCashBackPrice>
				</ListServiceDistricWrap> */}
				{/* {user ? (
					<ServicePageContentBottomGroupServiceContentButton
						onClick={(e) => {
							e.preventDefault();
							getVoucher();
						}}>
						{TranslateLabels[lang || "vi"]?.NEW_PAGE_COLLECT_VOUCHER}
					</ServicePageContentBottomGroupServiceContentButton>
				) : (
					<StaffDetailPageContentBottomGroupServiceContentButtonDiv onClick={handleOnClick}>
						{TranslateLabels[lang || "vi"]?.NEW_PAGE_COLLECT_VOUCHER}
					</StaffDetailPageContentBottomGroupServiceContentButtonDiv>
				)} */}
			</ListServiceRight>
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
		</ListServiceWrap>
	);
}
