import React, { useEffect, useState } from "react";
import getUrlAddress from "../hook/getUrlAddress";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import StaffAddressPath from "../../../../models/StaffAddressPath";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { useStarFilter, userStarList, userStarListEN, userStarListKR } from "../../FilterAtHome/hook/useFilterStar";
import {
	ButtonOpenDialogFilter,
	ButtonOpenDialogFilterName,
	ButtonOpenDialogFilterWrap,
	FilterListStaffProvince,
	FilterListStaffProvinceName,
	FilterListStaffStarOption,
	FilterListStaffWrap,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import { CustomRadioStar } from "../../FilterAtHome/hook/CustomRadio";
import { DialogFilterDic, DialogFilterPro, DialogFilterStar } from "../../FilterAtHome/component/DialogFilter";
import { FilterAddresses } from "../../FilterAtHome/component/FilterListStaff";
import { SelectFilterPro, SelectFilterStar } from "../../FilterAtHome/component/SelectFilter";
import useStaticContext from "../../../hooks/useStaticContext";

export default function FilterListService(props: { reload: () => void; isService?: boolean; apartment?: string }) {
	const { link } = useParams<{ link: string }>();
	const { lang } = useLanguage();
	const { address, backUrl, locationType } = getUrlAddress({ link: link, apartment: props.apartment, lang: lang });
	const [selectedProvince, setSelectedProvince] = useState<StaffAddressPath | null>(null);
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [districtTop, setDistrictTop] = useState<number>(0);
	const { filterStar, getPathFilterStar } = useCommonListFunctions();
	const { starSelected, handleStarFilter } = useStarFilter();
	const [isMobileSelectOpen, setIsMobileSelectOpen] = useState(false);
	const [dicstricOpenDialog, setDicstricOpenDialog] = useState(false);
	const [isDialogStarOpen, setIsDialogStarOpen] = useState(false);
	const [nameDic, setNameDic] = useState("");
	const { staticContext } = useStaticContext();

	const handleDialogToggleStar = () => {
		setIsDialogStarOpen(!isDialogStarOpen);
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
					isService={props.isService}
				/>

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
						isService={props.isService}
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
			</ButtonOpenDialogFilterWrap>
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
			<DialogFilterPro
				isDialogOpen={isMobileSelectOpen}
				setIsDialogOpen={setIsMobileSelectOpen}
				reload={props.reload}
				address={address || []}
				onProvinceSelect={handleProvinceSelect}
				lang={lang}
				backUrl={backUrl}
				locationType={locationType}
				isService={props.isService}
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
