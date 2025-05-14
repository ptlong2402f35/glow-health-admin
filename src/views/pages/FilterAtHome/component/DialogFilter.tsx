import React, { useEffect, useRef, useState } from "react";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import { SelectOptionType } from "react-select";
import {
	CustomRadioInput,
	CustomRadioLabel,
	CustomRadioStarWImg,
	DialogFilterGenderWrap,
	FilterListStaffDicSelectLink,
	FilterListStaffDistrictName,
	FilterListStaffProvinceOption,
	FilterListStaffProvinceSelect,
	FilterListStaffProvinceSelectDistrict,
	FilterListStaffProvinceSelectLink,
	FilterListStaffProvinceSelectLinkFilter,
	FilterListStaffProvinceSelectLinkFilterWrap,
} from "../styled/ListStaffAtHome";
import { CustomCheckbox } from "../hook/CustomCheckbox";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";

export default function DialogFilterPrice(props: {
	isDialogOpen: boolean;
	setIsDialogOpen: (value: boolean) => void;
	reload: () => void;
	options: SelectOptionType[];
	value: string | null | undefined;
	setValue: (val: string) => void;
	lang: string;
}) {
	const handleCheckboxChange = (newValue: string) => {
		props.setValue(props.value === newValue ? "" : newValue);
		props.setIsDialogOpen(false);
	};
	return (
		<DialogWrap
			disableEnforceFocus={true}
			open={props.isDialogOpen}
			hideFooter={true}
			hideClose={true}
			onClose={() => {
				props.setIsDialogOpen(false);
			}}
			title={TranslateLabels[props.lang]?.FILTERS_BY_PRICE}>
			<DialogFilterGenderWrap>
				<div>
					{props.options.map((option) => (
						<div key={option.value}>
							<CustomRadioLabel>
								<CustomRadioInput
									type="radio"
									checked={props.value === option.value || props.value === "0"}
									onChange={() => handleCheckboxChange(option.value)}
								/>
								{props.value === option.value && (
									<CustomRadioStarWImg
										src="./static/img/RadioButtonIcon.png"
										alt="Selected"
									/>
								)}
								{option.label}
							</CustomRadioLabel>
						</div>
					))}
				</div>
			</DialogFilterGenderWrap>
		</DialogWrap>
	);
}

export function DialogFilterStar(props: {
	isDialogOpen: boolean;
	setIsDialogOpen: (value: boolean) => void;
	reload: () => void;
	options: SelectOptionType[];
	value: string | null | undefined;
	setValue: (val: string) => void;
	lang: string;
}) {
	const handleCheckboxChange = (newValue: string) => {
		props.setValue(props.value === newValue ? "" : newValue);
		props.setIsDialogOpen(false);
	};
	return (
		<DialogWrap
			disableEnforceFocus={true}
			open={props.isDialogOpen}
			hideFooter={true}
			hideClose={true}
			onClose={() => {
				props.setIsDialogOpen(false);
			}}
			title={TranslateLabels[props.lang]?.FILTERS_BY_REVIEWS}>
			<DialogFilterGenderWrap>
				<div>
					{props.options.map((option) => (
						<div key={option.value}>
							<CustomRadioLabel>
								<CustomRadioInput
									type="radio"
									checked={props.value === option.value || props.value === "0"}
									onChange={() => handleCheckboxChange(option.value)}
								/>
								{props.value === option.value && (
									<CustomRadioStarWImg
										src="./static/img/RadioButtonIcon.png"
										alt="Selected"
									/>
								)}
								{option.label}
							</CustomRadioLabel>
						</div>
					))}
				</div>
			</DialogFilterGenderWrap>
		</DialogWrap>
	);
}

export function DialogFilterGender(props: {
	isDialogOpen: boolean;
	setIsDialogOpen: (value: boolean) => void;
	reload: () => void;
	maleChecked: boolean;
	femaleChecked: boolean;
	setMaleChecked: (value: boolean) => void;
	setFemaleChecked: (value: boolean) => void;
	handleGenderFilter: () => void;
	lang: string;
	doFilterGender: ((val: string | null) => void) | undefined;
}) {
	return (
		<DialogWrap
			disableEnforceFocus={true}
			open={props.isDialogOpen}
			hideFooter={true}
			hideClose={true}
			onClose={() => {
				props.setIsDialogOpen(false);
			}}
			title={TranslateLabels[props.lang]?.FILTERS_BY_GENDER}>
			<DialogFilterGenderWrap>
				<CustomCheckbox
					maleChecked={props.maleChecked}
					femaleChecked={props.femaleChecked}
					setMaleChecked={props.setMaleChecked}
					setFemaleChecked={props.setFemaleChecked}
					handleGenderFilter={props.handleGenderFilter}
					doFilterGender={props.doFilterGender}
				/>
			</DialogFilterGenderWrap>
		</DialogWrap>
	);
}

export function DialogFilterPro(props: {
	isDialogOpen: boolean;
	setIsDialogOpen: (value: boolean) => void;
	reload: () => void;
	address: StaffAddressPath[];
	onProvinceSelect: (value: StaffAddressPath) => void;
	lang: string;
	backUrl?: string;
	locationType?: string;
	hashtags?: boolean;
	isService?: boolean;
}) {
	const handleProvinceSelect = (province: StaffAddressPath) => {
		props.onProvinceSelect(province);
		props.setIsDialogOpen(false);
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
		<DialogWrap
			disableEnforceFocus={true}
			open={props.isDialogOpen}
			hideFooter={true}
			hideClose={true}
			onClose={() => {
				props.setIsDialogOpen(false);
			}}
			title={
				(props.locationType === "province" && TranslateLabels[props.lang]?.FILTERS_BY_CITY) ||
				(props.locationType === "district" && TranslateLabels[props.lang]?.FILTERS_BY_DISTRICT) ||
				(props.locationType === "commune" && TranslateLabels[props.lang]?.FILTERS_BY_WARD) ||
				TranslateLabels[props.lang]?.APARTMENT
			}>
			<DialogFilterGenderWrap>
				{props.locationType != "province" && (
					<FilterListStaffProvinceSelect>
						<FilterListStaffProvinceSelectLink to={getUrlWithPrefix(props.backUrl) || ""}>
							{TranslateLabels[props.lang]?.All || "Tất cả"}
						</FilterListStaffProvinceSelectLink>
					</FilterListStaffProvinceSelect>
				)}
				{props.address.map((val, index) => {
					return (
						<>
							<FilterListStaffProvinceSelectLinkFilterWrap>
								<FilterListStaffProvinceSelectLinkFilter
									to={
										props.locationType === "apartment"
											? getUrlWithPrefix(val.url) +
											  "/toa-nha" +
											  ensureLeadingSlash(val.apartmentUrl)
											: getUrlWithPrefix("/dia-diem/" + val.url)
									}
									onClick={() => handleProvinceSelect(val)}>
									{val.name || ""}
								</FilterListStaffProvinceSelectLinkFilter>
								{/* <i
										className="fa fa-angle-right"
										aria-hidden="true"></i> */}
							</FilterListStaffProvinceSelectLinkFilterWrap>
						</>
					);
				})}
			</DialogFilterGenderWrap>
		</DialogWrap>
	);
}

export function DialogFilterDic(props: {
	isDialogOpen: boolean;
	setIsDialogOpen: (value: boolean) => void;
	reload: () => void;
	selectedProvince: StaffAddressPath;
	setNameDic: (value: string) => void;
	lang: string;
}) {
	return (
		<DialogWrap
			disableEnforceFocus={true}
			open={props.isDialogOpen}
			hideFooter={true}
			hideClose={true}
			onClose={() => {
				props.setIsDialogOpen(false);
			}}
			title={TranslateLabels[props.lang]?.FILTERS_BY_DISTRICT}>
			<DialogFilterGenderWrap>
				{props.selectedProvince.district?.map((val, index) => {
					return (
						<>
							<FilterListStaffProvinceSelectLinkFilterWrap>
								<FilterListStaffProvinceSelectLinkFilter
									to={val.url || ""}
									onClick={() => {
										props.setNameDic(val.name || "");
										props.setIsDialogOpen(false);
									}}>
									{val.name || ""}
								</FilterListStaffProvinceSelectLinkFilter>
								{/* <i
										className="fa fa-angle-right"
										aria-hidden="true"></i> */}
							</FilterListStaffProvinceSelectLinkFilterWrap>
						</>
					);
				})}
			</DialogFilterGenderWrap>
		</DialogWrap>
	);
}
