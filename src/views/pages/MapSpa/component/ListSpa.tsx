import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import { useHistory, useParams } from "react-router";
import Collapse from "@material-ui/core/Collapse";
import {
	ExperienceSpaWrapPageTitle,
	FilterMapMargin,
	FilterMapWrapper,
	StaffDetailPageContentTopInfoStarTime,
	WorkTimeDate,
	WorkTimeDateMap,
	WorkTimeHour,
	WorkTimeMapWrap,
	WorkTimeWrap,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import Staff, { BreadCrumb, Tags } from "../../../../models/Staff";
import {
	FillterNull,
	FillterRes,
	FillterResOpen,
	FillterWeb,
	FilterMapSelectWrap,
	FilterMapWrap,
	ImgSpa,
	ImgSpaWrap,
	ListPartnerBack,
	ListPartnerBcWrapv2,
	ListPartnerBottomWrap,
	ListPartnerInnerImgWrap,
	ListPartnerInnerWrapCollapse,
	ListPartnerTitleWrap,
	ListPartnerWrap,
	NameTagMapPage,
	PartnerInnerTop,
	PartnerInnerTopInfo,
	PartnerInnerTopInfoAddress,
	PartnerInnerTopInfoAddressv2,
	PartnerInnerTopInfoImgWrap,
	PartnerInnerTopInfoTags,
	PartnerInnerTopInfoWorkTime,
	PartnerInnerTopInfoWorkTimeContentv2,
	PartnerInnerTopInfoWorkTimeImg,
	PartnerInnerTopInfoWorkTimeImgv2,
	PartnerInnerTopName,
	PartnerInnerTopNameInner,
	PartnerInnerTopOpen,
	PartnerInnerTopTitle,
	PartnerInnerWrap,
	SeenDetailButton,
	SeenDetailButtonWrap,
	SelectSearchBoxFilterMap,
} from "../styled/MapStyled";
import BreadCrumbStaff from "../../FilterAtHome/component/BreadCrumb";
import FilterListStaff from "../../FilterAtHome/component/FilterListStaff";
import { useLanguage } from "../../../controls/layout/content/MultiLanguge";
import {
	DialogFilterPro,
} from "../../FilterAtHome/component/SelectFilter";
import {
	userPriceList,
	userPriceListEN,
	userPriceListKR,
} from "../../FilterAtHome/hook/useFilterPrice";
import { userStarList, userStarListEN, userStarListKR, useStarFilter } from "../../FilterAtHome/hook/useFilterStar";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import { DealHotHomePageItemImgVideo } from "../../home/styled/HomeStyles";
import { SelectOptionType } from "react-select";
import { MapPageContext } from "../mapSpaPage";
import { FilterTagControl } from "../hook/getTagMap";
import { FilterMap } from "../hook/filterMap";

export default function ListPartner(props: {
	staff: Staff[];
	selectedLocation?: Staff;
	setSelectedLocation: (value: Staff) => void;
	// setShow: (value: boolean) => void;
	// setLat: (value: string) => void;
	// setLng: (value: string) => void;
	openDialog: boolean;
	setOpenDialog: (value: boolean) => void;
	isVisible: boolean;
	breadCrumb: BreadCrumb[];
	hashtags?: boolean;
	apartment?: string;
	pageTitle?: string;
	reload: () => void;
	listOption: Tags[];
}) {
	return (
		<ListPartnerWrap in={props.openDialog}>
			<ListPartnerBcWrapv2>
				<BreadCrumbStaff
					breadCrumb={props.breadCrumb}
					apartment={props.apartment}
					hashtags={props.hashtags}
					isMap={true}
				/>
			</ListPartnerBcWrapv2>
			<ListPartnerTitleWrap>
				<ExperienceSpaWrapPageTitle>{props.pageTitle}</ExperienceSpaWrapPageTitle>
			</ListPartnerTitleWrap>
			<FillterWeb>
				<ListPartnerTopWrap
					apartment={props.apartment}
					hashtags={props.hashtags}
					reload={props.reload}
					listOption={props.listOption}

				/>
			</FillterWeb>
			<ListPartnerInnerWrapCollapse in={props.openDialog}>
				<FillterResOpen>
					<ListPartnerTopWrap
						apartment={props.apartment}
						hashtags={props.hashtags}
						reload={props.reload}
						listOption={props.listOption}

					/>
				</FillterResOpen>
				<FillterNull>
					<FilterListStaff
						reload={props.reload}
						hashtags={props.hashtags}
						apartment={props.apartment}
					/>
				</FillterNull>
				{props.staff && (
					<ListPartnerBottom
						staff={props.staff}
						selectedLocation={props.selectedLocation}
						setSelectedLocation={props.setSelectedLocation}
						// setShow={props.setShow}
						// setLat={props.setLat}
						// setLng={props.setLng}
						setOpenDialog={props.setOpenDialog}
					/>
				)}
			</ListPartnerInnerWrapCollapse>
		</ListPartnerWrap>
	);
}

export function ListPartnerTopWrap(props: { hashtags?: boolean; apartment?: string; reload: () => void; listOption: Tags[] }) {
	const { lang } = useLanguage();
	const { filterPrice, filterStar, doFilterStar, doFilterPrice, doFilterTags, filterTags } = useCommonListFunctions();
	const [isMobileSelectOpen, setIsMobileSelectOpen] = useState(false);
	const [selectedProvince, setSelectedProvince] = useState<StaffAddressPath | null>(null);
	const handleProvinceSelect = (province: StaffAddressPath| null) => {
		setSelectedProvince(province);
	};
	const ctx = useContext(MapPageContext)
	return (
		<FilterMapWrap>
			<FilterMapWrapper>
			<FilterMapMargin>
				<DialogFilterPro
					isDialogOpen={isMobileSelectOpen}
					setIsDialogOpen={setIsMobileSelectOpen}
					reload={props.reload}
					address={ctx?.address || []}
					onProvinceSelect={handleProvinceSelect}
					lang={lang}
					backUrl={ctx?.backUrl}
					locationType={ctx?.locationType}
					hashtags={props.hashtags}
				/>
				</FilterMapMargin>
			</FilterMapWrapper>
				<FilterMapMargin>
			<FilterMap
					filterId={parseInt(filterPrice || "0")}
					doChangeId={doFilterPrice}
					options={
						(lang === "vi" && userPriceList) ||
						(lang === "en" && userPriceListEN) ||
						(lang === "kr" && userPriceListKR) ||
						userPriceList
					}
					name="Lọc giá"
				/></FilterMapMargin>
					<FilterMapMargin>
			<FilterMap
					filterId={parseInt(filterStar || "0")}
					doChangeId={doFilterStar}
					options={
						(lang === "vi" && userStarList) ||
						(lang === "en" && userStarListEN) ||
						(lang === "kr" && userStarListKR) ||
						userStarList
					}
					name="Lọc sao"
				/></FilterMapMargin>
					<FilterMapMargin>
			<FilterTagControl
			key={props.listOption?.length}
					filterTagId={parseInt(filterTags || "0")}
					doChangeTagId={doFilterTags}
					listOption={props.listOption}
				/></FilterMapMargin>
		</FilterMapWrap>
	);
}
export function ListPartnerBottom(props: {
	staff: Staff[];
	selectedLocation?: Staff;
	setSelectedLocation: (value: Staff) => void;
	// setShow: (value: boolean) => void;
	// setLat: (value: string) => void;
	// setLng: (value: string) => void;
	setOpenDialog: (value: boolean) => void;
}) {
	const handleItemClick = (location: Staff) => {
		props.setSelectedLocation(location);
		props.setOpenDialog(false);
	};
	const selectedRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (selectedRef.current) {
			selectedRef.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "start",
			});
		}
	}, [props.selectedLocation]);
	return (
		<>
			<ListPartnerBottomWrap>
				{(props.staff || []).map((val, index) => (
					<PartnerInnerWrap
						ref={props.selectedLocation?.id === val.id ? selectedRef : null}
						isSelected={props.selectedLocation?.id === val.id}
						onClick={() => handleItemClick(val)}>
						<ListPartnerInner
							val={val}
							index={index}
						/>
					</PartnerInnerWrap>
				))}
			</ListPartnerBottomWrap>
		</>
	);
}

export function ListPartnerInner(props: { val: Staff; index?: number }) {
	const history = useHistory();
	const handleLocationClick = (id: number) => {
		if (id) {
			history.push(`/order?locationId=${id}`);
		}
	};
	const JsonWorkTime = JSON.parse(props.val?.workTime || "[]");

	return (
		<ListPartnerBack>
			<PartnerInnerTop>
				<PartnerInnerTopTitle>
					<PartnerInnerTopName>
						{props.val.name}
						<PartnerInnerTopOpen open={props.val.isOpen}>
							{props.val.isOpen ? "Mở cửa" : "Đóng cửa"}
						</PartnerInnerTopOpen>
					</PartnerInnerTopName>
				</PartnerInnerTopTitle>

				<PartnerInnerTopInfo>
					<PartnerInnerTopInfoWorkTime>
						{props.val.rateAvg}
						<PartnerInnerTopInfoImgWrap>
							{(() => {
								const stars = [];
								const starCount = Math.round(props.val.rateAvg || 0);
								const starDetailCount = 5 - starCount;

								for (let i = 0; i < starCount; i++) {
									stars.push(
										<PartnerInnerTopInfoWorkTimeImgv2
											key={`star-${i}`}
											src="./static/img/Star.png"
											alt="Biểu tượng sao vàng"
										/>
									);
								}

								for (let j = 0; j < starDetailCount; j++) {
									stars.push(
										<PartnerInnerTopInfoWorkTimeImgv2
											key={`unstar-${j}`}
											src="./static/img/unStar.png"
											alt="Biểu tượng sao xám"
										/>
									);
								}

								return stars;
							})()}
						</PartnerInnerTopInfoImgWrap>

						<PartnerInnerTopInfoWorkTimeContentv2>
							({props.val.countReview || 0})
						</PartnerInnerTopInfoWorkTimeContentv2>
					</PartnerInnerTopInfoWorkTime>
					{props.val.address && (
						<PartnerInnerTopInfoAddressv2>
							<PartnerInnerTopInfoWorkTimeImg src="./static/img/store01.png" />
							<PartnerInnerTopInfoWorkTimeContentv2>
								{props.val.address ? `${props.val.address}, ` : ""}
								{props.val?.district?.name ? `${props.val.district.name}, ` : ""}
								{props.val?.province?.name ? `${props.val.province.name}` : ""}
							</PartnerInnerTopInfoWorkTimeContentv2>
						</PartnerInnerTopInfoAddressv2>
					)}
					<PartnerInnerTopInfoAddress>
						<PartnerInnerTopInfoWorkTimeImg src="./static/img/call.png" />
						<PartnerInnerTopInfoWorkTimeContentv2>
							{props.val.user?.phone}
						</PartnerInnerTopInfoWorkTimeContentv2>
					</PartnerInnerTopInfoAddress>
					<PartnerInnerTopInfoAddress>
						<PartnerInnerTopInfoWorkTimeImg src="./static/img/coin-dollar.png" />
						<PartnerInnerTopInfoWorkTimeContentv2>
							{new Intl.NumberFormat("vi-VN").format(props.val.minPrice || 0)}đ -{" "}
							{new Intl.NumberFormat("vi-VN").format(props.val.maxPrice || 0)}đ
						</PartnerInnerTopInfoWorkTimeContentv2>
					</PartnerInnerTopInfoAddress>
					{JsonWorkTime && JsonWorkTime.length > 0 && (
						<StaffDetailPageContentTopInfoStarTime>
							<PartnerInnerTopInfoWorkTimeImg
								src="./static/img/clock-circle.png"
								alt="Biểu tượng đồng hồ"
							/>
							<div>
								{JsonWorkTime.map((val: any, index: number) => {
									return (
										<WorkTimeMapWrap>
											<WorkTimeDateMap>
												{val.date.from} - {val.date.to}
											</WorkTimeDateMap>
											<WorkTimeHour>
												{val.hour.from} - {val.hour.to}
											</WorkTimeHour>
										</WorkTimeMapWrap>
									);
								})}
							</div>
						</StaffDetailPageContentTopInfoStarTime>
					)}
					<PartnerInnerTopInfoTags>
						{(props.val.tags || []).map((tag: any, index: number) => {
							return <NameTagMapPage href={tag.link || ""}>{"#" + tag.name || ""}</NameTagMapPage>;
						})}
					</PartnerInnerTopInfoTags>
					<SeenDetailButtonWrap>
						<SeenDetailButton
							to={!props.val.url?.startsWith("/") ? "/" + props.val.url : props.val.url || ""}>
							Xem chi tiết
						</SeenDetailButton>
					</SeenDetailButtonWrap>
				</PartnerInnerTopInfo>
			</PartnerInnerTop>
			<ListPartnerInnerImg
				val={props.val}
				index={props.index}
			/>
		</ListPartnerBack>
	);
}

export function ListPartnerInnerImg(props: { val: Staff; index?: number }) {
	return (
		<ListPartnerInnerImgWrap>
			<ImgSpaWrap>
				{props.val?.promotionalVideos && props.val?.promotionalVideos.length > 0 && (
					<DealHotHomePageItemImgVideo
						src={"/static/img/isvideo.png"}
						alt={"Ảnh mô tả có video " + " số " + props.index}
					/>
				)}
				<ImgSpa src={props.val.user?.thumbnailImage || props.val.user?.urlImage || props.val.images?.[0]?.path || ""} />
			</ImgSpaWrap>
			<SeenDetailButton to={!props.val.url?.startsWith("/") ? "/" + props.val.url : props.val.url || ""}>
				Xem chi tiết
			</SeenDetailButton>
		</ListPartnerInnerImgWrap>
	);
}

export const FilterMapSelect = (props: {
	options: SelectOptionType[];
	value: SelectOptionType;
	setvalue: (val: SelectOptionType) => void;
	isSearchable?: boolean;
}) => {
	return (
		<FilterMapSelectWrap>
			<SmSelectSearchBoxFilterMap
				isSearchable={props.isSearchable}
				options={props.options}
				value={props.value}
				onChange={props.setvalue}></SmSelectSearchBoxFilterMap>
		</FilterMapSelectWrap>
	);
};

export function SmSelectSearchBoxFilterMap(props: {
	isSearchable?: boolean;
	className?: string;
	id?: string;
	placeholder?: string;
	options: SelectOptionType[];
	value: SelectOptionType;
	onChange: (val: SelectOptionType) => void;
	responsive?: boolean;
	extraSmall?: boolean;
}) {
	return (
		<SelectSearchBoxFilterMap
			id={props.id}
			value={props.value?.value}
			onChange={(e) => {
				const selectedOption = props.options.find(
					(opt) => opt.value === e.target.value
				);
				if (selectedOption) {
					props.onChange(selectedOption);
				}
			}}
		>
			{props.options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</SelectSearchBoxFilterMap>
	);
}
