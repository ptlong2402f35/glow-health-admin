import React, { useEffect, useState } from "react";
import getUrlAddress from "../hook/getUrlAddress";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
	ButtonOpenDialogFilter,
	ButtonOpenDialogFilterName,
	ButtonOpenDialogFilterWrap,
	FilterListStaffDicSelectLink,
	FilterListStaffDistrictName,
	FilterListStaffGenderOption,
	FilterListStaffProvince,
	FilterListStaffProvinceFilter,
	FilterListStaffProvinceName,
	FilterListStaffProvinceOption,
	FilterListStaffProvinceSelect,
	FilterListStaffProvinceSelectDistrict,
	FilterListStaffProvinceSelectLink,
	FilterListStaffStarOption,
	FilterListStaffWrap,
} from "../styled/ListStaffAtHome";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { CustomCheckbox, userGenderList, userGenderListEN, userGenderListKR } from "../hook/CustomCheckbox";
import { usePriceFilter, userPriceList, userPriceListEN, userPriceListKR } from "../hook/useFilterPrice";
import { CustomRadio, CustomRadioStar } from "../hook/CustomRadio";
import { useStarFilter, userStarList, userStarListEN, userStarListKR } from "../hook/useFilterStar";
import { ProductFilterStatusSelect } from "../../adminProductManagement/component/ProductFilter";
import DialogFilterPrice, {
	DialogFilterDic,
	DialogFilterGender,
	DialogFilterPro,
	DialogFilterStar,
} from "./DialogFilter";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";
import useStaticContext from "../../../hooks/useStaticContext";
import { SelectFilterGender, SelectFilterPrice, SelectFilterPro, SelectFilterStar } from "./SelectFilter";

export default function FilterListStaff(props: {
	reload: () => void;
	store?: boolean;
	hashtags?: boolean;
	apartment?: string;
}) {
	const { lang } = useLanguage();
	const { link } = useParams<{ link: string }>();
	const { address, backUrl, locationType } = getUrlAddress({
		link,
		hashtags: props.hashtags,
		apartment: props.apartment,
		lang: lang,
	});
	const [selectedProvince, setSelectedProvince] = useState<StaffAddressPath | null>(null);
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [districtTop, setDistrictTop] = useState<number>(0);
	const {
		filterPrice,
		filterStar,
		doFilterGender,
		filterGender,
		getPathFilterGender,
		getPathFilterPrice,
		getPathFilterStar,
	} = useCommonListFunctions();
	const { priceSelected, handlePriceFilter } = usePriceFilter();
	const { starSelected, handleStarFilter } = useStarFilter();
	const [isMobileSelectOpen, setIsMobileSelectOpen] = useState(false);
	const [dicstricOpenDialog, setDicstricOpenDialog] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isDialogStarOpen, setIsDialogStarOpen] = useState(false);
	const [isDialogGenderOpen, setIsDialogGenderOpen] = useState(false);
	const [maleChecked, setMaleChecked] = useState(filterGender === "All" || filterGender === "Male" ? true : false);
	const [femaleChecked, setFemaleChecked] = useState(
		filterGender === "All" || filterGender === "Female" ? true : false
	);
	const [nameDic, setNameDic] = useState("");
	const { staticContext } = useStaticContext();

	const handleGenderFilter = () => {
		let selectedGenderValue = "";
		if (maleChecked && femaleChecked) {
			selectedGenderValue = "All";
		} else if (maleChecked) {
			selectedGenderValue = "Male";
		} else if (femaleChecked) {
			selectedGenderValue = "Female";
		} else if (!maleChecked && !femaleChecked) {
			selectedGenderValue = "";
		}
		if (doFilterGender) {
			doFilterGender(selectedGenderValue);
		}
	};

	// useEffect(() => {
	// 	handleGenderFilter();
	// }, [maleChecked, femaleChecked]);

	const handleDialogToggle = () => {
		setIsDialogOpen(!isDialogOpen);
	};

	const handleDialogToggleStar = () => {
		setIsDialogStarOpen(!isDialogStarOpen);
	};

	const handleDialogToggleGender = () => {
		setIsDialogGenderOpen(!isDialogGenderOpen);
	};
	const handleProvinceSelect = (province: StaffAddressPath) => {
		setSelectedProvince(province);
	};
	return (
		<FilterListStaffWrap>
			<FilterListStaffProvince>
				<FilterAddresses
					locationType={locationType}
					backUrl={backUrl}
					lang={lang}
					address={address}
					setSelectedCity={setSelectedCity}
					setDistrictTop={setDistrictTop}
					hashtags={props.hashtags}
				/>

				{props.store && (
					<FilterListStaffGenderOption>
						<div>
							<FilterListStaffProvinceName>
								{TranslateLabels[lang]?.FILTERS_GENDER}
							</FilterListStaffProvinceName>
							<CustomCheckbox
								maleChecked={maleChecked}
								femaleChecked={femaleChecked}
								setMaleChecked={setMaleChecked}
								setFemaleChecked={setFemaleChecked}
								handleGenderFilter={handleGenderFilter}
								doFilterGender={doFilterGender}
								linkGetter={(val) => (getPathFilterGender ? getPathFilterGender(val) : "")}
								filterGender={filterGender}
							/>
						</div>
					</FilterListStaffGenderOption>
				)}

				<FilterListStaffGenderOption>
					<div>
						<FilterListStaffProvinceName>
							{TranslateLabels[lang]?.FILTERS_PRICE}
						</FilterListStaffProvinceName>
						<CustomRadio
							options={
								(lang === "vi" && userPriceList) ||
								(lang === "en" && userPriceListEN) ||
								(lang === "kr" && userPriceListKR) ||
								userPriceList
							}
							value={filterPrice}
							setValue={handlePriceFilter}
							linkGetter={(val) => (getPathFilterPrice ? getPathFilterPrice(val) : "")}
						/>
					</div>
				</FilterListStaffGenderOption>
				<FilterListStaffStarOption>
					<FilterListStaffProvinceName>{TranslateLabels[lang]?.FILTERS_REVIEWS}</FilterListStaffProvinceName>
					<CustomRadioStar
						options={
							(lang === "vi" && userStarList) ||
							(lang === "en" && userStarListEN) ||
							(lang === "kr" && userStarListKR) ||
							userStarList
						}
						value={filterStar}
						setValue={handleStarFilter}
						linkGetter={(val) => (getPathFilterStar ? getPathFilterStar(val) : "")}
					/>
				</FilterListStaffStarOption>
			</FilterListStaffProvince>
			<ButtonOpenDialogFilterWrap>
				{staticContext?.newStyle ? (
					<SelectFilterPro
						address={address}
						backUrl={backUrl}
						locationType={locationType}
						lang={lang}
						hashtags={props.hashtags}
					/>
				) : (
					<ButtonOpenDialogFilter onClick={() => setIsMobileSelectOpen(isMobileSelectOpen ? false : true)}>
						<ButtonOpenDialogFilterName>
							{selectedProvince?.name ||
								(locationType === "province" && TranslateLabels[lang]?.FILTERS_CITY) ||
								(locationType === "district" && TranslateLabels[lang]?.DISTRICT) ||
								(locationType === "commune" && TranslateLabels[lang]?.WARD) ||
								TranslateLabels[lang]?.APARTMENT}
						</ButtonOpenDialogFilterName>
						<i
							className="fa fa-angle-down"
							aria-hidden="true"></i>
					</ButtonOpenDialogFilter>
				)}

				{staticContext?.newStyle ? (
					<SelectFilterPrice
						lang={lang}
						options={
							(lang === "vi" && userPriceList) ||
							(lang === "en" && userPriceListEN) ||
							(lang === "kr" && userPriceListKR) ||
							userPriceList
						}
						linkGetter={(val) => (getPathFilterPrice ? getPathFilterPrice(val) : "")}
					/>
				) : (
					<ButtonOpenDialogFilter onClick={handleDialogToggle}>
						<ButtonOpenDialogFilterName>
							{(priceSelected?.value == 0 && `${TranslateLabels[lang]?.FILTERS_PRICE}`) ||
								priceSelected?.label ||
								`${TranslateLabels[lang]?.FILTERS_PRICE}`}
						</ButtonOpenDialogFilterName>
						<i
							className="fa fa-angle-down"
							aria-hidden="true"></i>
					</ButtonOpenDialogFilter>
				)}
				{staticContext?.newStyle ? (
					<SelectFilterStar
						lang={lang}
						options={
							(lang === "vi" && userStarList) ||
							(lang === "en" && userStarListEN) ||
							(lang === "kr" && userStarListKR) ||
							userStarList
						}
						linkGetter={(val) => (getPathFilterStar ? getPathFilterStar(val) : "")}
					/>
				) : (
					<ButtonOpenDialogFilter onClick={handleDialogToggleStar}> 
						<ButtonOpenDialogFilterName>
							{(starSelected?.value == 0 && `${TranslateLabels[lang]?.FILTERS_REVIEWS}`) ||
								starSelected?.label ||
								`${TranslateLabels[lang]?.FILTERS_REVIEWS}`}
						</ButtonOpenDialogFilterName>
						<i
							className="fa fa-angle-down"
							aria-hidden="true"></i>
					</ButtonOpenDialogFilter>
				)}
				{props.store && (
					<>
						{staticContext?.newStyle ? (
							<SelectFilterGender
								lang={lang}
								options={
									(lang === "vi" && userGenderList) ||
									(lang === "en" && userGenderListEN) ||
									(lang === "kr" && userGenderListKR) ||
									userPriceList
								}
								linkGetter={(val) => (getPathFilterGender ? getPathFilterGender(val) : "")}
							/>
						) : (
							<ButtonOpenDialogFilter onClick={handleDialogToggleGender}>
								<ButtonOpenDialogFilterName>
									{(maleChecked && femaleChecked && `${TranslateLabels[lang]?.ALL}`) ||
										(maleChecked && `${TranslateLabels[lang]?.MALE}`) ||
										(femaleChecked && `${TranslateLabels[lang]?.FEMALE}`) ||
										`${TranslateLabels[lang]?.FILTERS_GENDER}`}
								</ButtonOpenDialogFilterName>
								<i
									className="fa fa-angle-down"
									aria-hidden="true"></i>
							</ButtonOpenDialogFilter>
						)}
					</>
				)}
			</ButtonOpenDialogFilterWrap>
			<DialogFilterPrice
				isDialogOpen={isDialogOpen}
				setIsDialogOpen={setIsDialogOpen}
				reload={props.reload}
				options={
					(lang === "vi" && userPriceList) ||
					(lang === "en" && userPriceListEN) ||
					(lang === "kr" && userPriceListKR) ||
					userPriceList
				}
				value={filterPrice}
				setValue={handlePriceFilter}
				lang={lang}
			/>
			<DialogFilterStar
				isDialogOpen={isDialogStarOpen}
				setIsDialogOpen={setIsDialogStarOpen}
				reload={props.reload}
				options={
					(lang === "vi" && userStarList) ||
					(lang === "en" && userStarListEN) ||
					(lang === "kr" && userStarListKR) ||
					userStarList
				}
				value={filterStar}
				setValue={handleStarFilter}
				lang={lang}
			/>
			<DialogFilterGender
				isDialogOpen={isDialogGenderOpen}
				setIsDialogOpen={setIsDialogGenderOpen}
				reload={props.reload}
				maleChecked={maleChecked}
				femaleChecked={femaleChecked}
				setMaleChecked={setMaleChecked}
				setFemaleChecked={setFemaleChecked}
				handleGenderFilter={handleGenderFilter}
				lang={lang}
				doFilterGender={doFilterGender}
			/>
			<DialogFilterPro
				isDialogOpen={isMobileSelectOpen}
				setIsDialogOpen={setIsMobileSelectOpen}
				reload={props.reload}
				address={address || []}
				onProvinceSelect={handleProvinceSelect}
				lang={lang}
				backUrl={backUrl}
				locationType={locationType}
				hashtags={props.hashtags}
			/>

			{selectedProvince && (
				<DialogFilterDic
					isDialogOpen={dicstricOpenDialog}
					setIsDialogOpen={setDicstricOpenDialog}
					reload={props.reload}
					selectedProvince={selectedProvince}
					setNameDic={setNameDic}
					lang={lang}
				/>
			)}
		</FilterListStaffWrap>
	);
}

export function FilterAddresses(props: {
	locationType: string;
	lang: string;
	backUrl: string;
	address: StaffAddressPath[];
	setDistrictTop: (value: number) => void;
	setSelectedCity: (value: string | null) => void;
	hashtags?: boolean;
	isService?: boolean;
}) {
	const handleCityLeave = () => {
		props.setSelectedCity(null);
	};

	const handleCityHover = (cityName: string, index: number) => {
		props.setSelectedCity(cityName);
		props.setDistrictTop(index * 20);
	};

	const ensureLeadingSlash = (url: any) => {
		if (!url.startsWith("/")) {
			return "/" + url;
		}
		return url;
	};

	const getUrlWithPrefix = (url: any) => {
		let newUrl = ensureLeadingSlash(url);
		if (props.hashtags) {
			newUrl = "/tags" + newUrl;
		} else if (props.isService) {
			newUrl = "/dich-vu" + newUrl;
		}
		return newUrl;
	};
	return (
		<>
			<FilterListStaffProvinceFilter>{TranslateLabels[props.lang]?.FILTERS}</FilterListStaffProvinceFilter>
			<>
				<FilterListStaffProvinceName>
					{(props.locationType === "province" && TranslateLabels[props.lang]?.FILTERS_CITY) ||
						(props.locationType === "district" && TranslateLabels[props.lang]?.DISTRICT) ||
						(props.locationType === "commune" && TranslateLabels[props.lang]?.WARD) ||
						TranslateLabels[props.lang]?.APARTMENT}{" "}
				</FilterListStaffProvinceName>
				<FilterListStaffProvinceOption>
					{props.locationType != "province" && (
						<FilterListStaffProvinceSelect>
							<FilterListStaffProvinceSelectLink to={getUrlWithPrefix(props.backUrl)}>
								{TranslateLabels[props.lang]?.All || "Tất cả"}
							</FilterListStaffProvinceSelectLink>
						</FilterListStaffProvinceSelect>
					)}
					{props.address?.map((val, index) => {
						return (
							<FilterListStaffProvinceSelect
								key={index}
								onMouseEnter={() => handleCityHover(val.name || "", index)}
								onMouseLeave={handleCityLeave}>
								<FilterListStaffProvinceSelectLink
									to={
										props.locationType === "apartment"
											? getUrlWithPrefix(val.url) +
											  "/toa-nha" +
											  ensureLeadingSlash(val.apartmentUrl)
											: getUrlWithPrefix(val.url)
									}>
									{val.name || ""}
								</FilterListStaffProvinceSelectLink>
								<i
									className="fa fa-angle-right"
									aria-hidden="true"></i>
							</FilterListStaffProvinceSelect>
						);
					})}
				</FilterListStaffProvinceOption>
			</>
		</>
	);
}
