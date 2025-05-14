import React, { useEffect, useState } from "react";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import { Link, useHistory } from "react-router-dom";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import { SelectOptionType } from "react-select";
import {
	FilterListStaffProvinceSelectLinkFilter,
	FilterListStaffProvinceSelectLinkFilterWrap,
	FilterProMapWrapper,
	SelectFilterDiv,
	SelectFilterDivPrice,
	SelectFilterDivPro,
	SelectMapWrap,
} from "../styled/ListStaffAtHome";
import { SmSelectBox } from "../../../controls/components/selectBox/SelectBox";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { CustomOutlinedInput } from "../../MapSpa/styled/MapStyled";

function ensureLeadingSlash(url: string) {
	if (!url.startsWith("/")) {
		return "/" + url;
	}
	return url;
}

function getUrlWithPrefix(url: string, hashtags: boolean, isService: boolean) {
	let newUrl = ensureLeadingSlash(url);
	if (hashtags) {
		newUrl = "/tags" + newUrl;
	} else if (isService) {
		newUrl = "/dich-vu" + newUrl;
	}
	return newUrl;
}

export function getUrlWithApetment(
	locationType?: string,
	url?: string | null,
	apartmentUrl?: string | null,
	hashtags?: boolean,
	isService?: boolean,
	isMap?: boolean
) {
	let newUrl = url;
	if (locationType === "apartment") {
		newUrl =
			getUrlWithPrefix((isMap ? "/dia-diem" : "") + "/" + (url || ""), hashtags || false, isService || false) +
			"/toa-nha" +
			ensureLeadingSlash(apartmentUrl || "");
	} else {
		newUrl = getUrlWithPrefix(
			(isMap ? "/dia-diem" : "") + "/" + (url || ""),
			hashtags || false,
			isService || false
		);
	}
	return newUrl;
}

export function SelectFilterPro(props: {
	address: StaffAddressPath[];
	lang: string;
	backUrl?: string;
	locationType?: string;
	hashtags?: boolean;
	isService?: boolean;
	isMap?: boolean;
}) {
	const backUrl = ensureLeadingSlash(props.backUrl || "");
	const thumbnailsHtml = `
<select onchange="handleSelectChange(this)">
${`<option
			value="">
			${
				(props.locationType === "province" && TranslateLabels[props.lang]?.FILTERS_CITY) ||
				(props.locationType === "district" && TranslateLabels[props.lang]?.DISTRICT) ||
				(props.locationType === "commune" && TranslateLabels[props.lang]?.WARD) ||
				TranslateLabels[props.lang]?.APARTMENT
			}
		</option>`}
${
	props.locationType != "province"
		? `<option
			value=${props.lang || "vi"}${
				props.hashtags
					? `/tags/${props.backUrl}`
					: props.isService
					? `/dich-vu/${props.backUrl}`
					: "/dia-diem" + backUrl
		  }>
			${TranslateLabels[props.lang]?.ALL || "Tất cả"}
		</option>`
		: ""
}
    ${(props.address || [])
		.map(
			(val, index) => `
                <option value="${props.lang || "vi"}${getUrlWithApetment(
				props.locationType,
				val.url,
				val.apartmentUrl,
				props.hashtags,
				props.isService,
				props.isMap
			)}">
                    ${val.name}
                </option>
            `
		)
		.join("")}
</select>
`;
	return (
		<SelectFilterDivPro
			locationType={props.locationType == "province"}
			dangerouslySetInnerHTML={{ __html: thumbnailsHtml }}
		/>
	);
}

export function SelectFilterPrice(props: {
	lang: string;
	options: SelectOptionType[];
	linkGetter?: (val: string) => string;
}) {
	const thumbnailsHtml = `
<select onchange="handleSelectChange(this)">
${`<option
			value="">
			${TranslateLabels[props.lang]?.FILTERS_PRICE}
		</option>`}
    ${(props.options || [])
		.map(
			(val, index) => `
                <option value="${props.linkGetter ? props.linkGetter(val.value) : ""}">
                    ${val.label}
                </option>
            `
		)
		.join("")}
</select>
`;
	return <SelectFilterDivPrice dangerouslySetInnerHTML={{ __html: thumbnailsHtml }} />;
}

export function SelectFilterStar(props: {
	lang: string;
	options: SelectOptionType[];
	linkGetter?: (val: string) => string;
}) {
	const thumbnailsHtml = `
<select onchange="handleSelectChange(this)">
${`<option
			value="">
			${TranslateLabels[props.lang]?.FILTERS_REVIEWS}
		</option>`}
    ${(props.options || [])
		.map(
			(val, index) => `
                <option value="${props.linkGetter ? props.linkGetter(val.value) : ""}">
                    ${val.label}
                </option>
            `
		)
		.join("")}
</select>
`;
	return <SelectFilterDiv dangerouslySetInnerHTML={{ __html: thumbnailsHtml }} />;
}

export function SelectFilterGender(props: {
	lang: string;
	options: SelectOptionType[];
	linkGetter?: (val: string) => string;
}) {
	const thumbnailsHtml = `
<select onchange="handleSelectChange(this)">
${`<option
			value="">
			${TranslateLabels[props.lang]?.FILTERS_GENDER}
		</option>`}
    ${(props.options || [])
		.map(
			(val, index) => `
                <option value="${props.linkGetter ? props.linkGetter(val.value) : ""}">
                    ${val.label}
                </option>
            `
		)
		.join("")}
</select>
`;
	return <SelectFilterDiv dangerouslySetInnerHTML={{ __html: thumbnailsHtml }} />;
}

// export function DialogFilterPro(props: {
// 	isDialogOpen: boolean;
// 	setIsDialogOpen: (value: boolean) => void;
// 	reload: () => void;
// 	address: StaffAddressPath[];
// 	onProvinceSelect: (value: StaffAddressPath) => void;
// 	lang: string;
// 	backUrl?: string;
// 	locationType?: string;
// 	hashtags?: boolean;
// 	isService?: boolean;
// }) {

// 	const handleProvinceSelect = (province: StaffAddressPath| null) => {
// 		if (province) {
// 			props.onProvinceSelect(province);
// 		}
// 		props.setIsDialogOpen(false);
// 	};

// const backUrl = ensureLeadingSlash(props.backUrl || "");
// 	const getUrlWithPrefix = (url: string) => {
// 		let newUrl = ensureLeadingSlash(url);
// 		if (props.hashtags) {
// 			newUrl = "/tags" + newUrl;
// 		} else if (props.isService) {
// 			newUrl = "/dich-vu" + newUrl;
// 		}
// 		return newUrl;
// 	};

// 	return (
// 		<FilterProMapWrapper isOpen={props.isDialogOpen}>
// 			<FilterListStaffProvinceSelectLinkFilterWrap>
// 				<FilterListStaffProvinceSelectLinkFilter
// 					to={`/dia-diem${backUrl}`}
// 					onClick={() => handleProvinceSelect(null)}
// 				>
// 					{TranslateLabels[props.lang]?.ALL || "Tất cả"}
// 				</FilterListStaffProvinceSelectLinkFilter>
// 			</FilterListStaffProvinceSelectLinkFilterWrap>
// 			{props.address.map((val, index) => (
// 				<FilterListStaffProvinceSelectLinkFilterWrap key={index}>
// 					<FilterListStaffProvinceSelectLinkFilter
// 						to={
// 							props.locationType === "apartment"
// 								? getUrlWithPrefix("/dia-diem/" + val.url||"") + "/toa-nha" + ensureLeadingSlash(val.apartmentUrl||"")
// 								: getUrlWithPrefix("/dia-diem/" + val.url)
// 						}
// 						onClick={() => handleProvinceSelect(val)}
// 					>
// 						{val.name || ""}
// 					</FilterListStaffProvinceSelectLinkFilter>
// 				</FilterListStaffProvinceSelectLinkFilterWrap>
// 			))}
// 		</FilterProMapWrapper>
// 	);
// }

export function DialogFilterPro(props: {
	isDialogOpen: boolean;
	setIsDialogOpen: (value: boolean) => void;
	reload: () => void;
	address: StaffAddressPath[];
	onProvinceSelect: (value: StaffAddressPath | null) => void;
	lang: string;
	backUrl?: string;
	locationType?: string;
	hashtags?: boolean;
	isService?: boolean;
}) {
	const history = useHistory();
	const backUrl = ensureLeadingSlash(props.backUrl || "");
	const [selectedProvince, setSelectedProvince] = useState<StaffAddressPath | null>(null);

	const getUrlWithPrefix = (url: string) => {
		let newUrl = ensureLeadingSlash(url);
		if (props.hashtags) {
			newUrl = "/tags" + newUrl;
		} else if (props.isService) {
			newUrl = "/dich-vu" + newUrl;
		}
		return newUrl;
	};

	const handleSelectChange = (e: any) => {
		const selectedValue = e.target.value;

		if (selectedValue === "All") {
			props.onProvinceSelect(null);
			setSelectedProvince(null);
			history.push(`/dia-diem`);
		}

		if (selectedValue === "back") {
			props.onProvinceSelect(null);
			setSelectedProvince(null);
			history.push(`/dia-diem${backUrl}`);
		} else {
			const selectedProvinceObj = props.address.find((addr) => addr.url === selectedValue);
			if (selectedProvinceObj) {
				props.onProvinceSelect(selectedProvinceObj);
				setSelectedProvince(selectedProvinceObj);
				let newUrl = "";
				if (props.locationType === "apartment") {
					newUrl =
						getUrlWithPrefix("/dia-diem/" + selectedProvinceObj.url || "") +
						"/toa-nha" +
						ensureLeadingSlash(selectedProvinceObj.apartmentUrl || "");
				} else {
					newUrl = getUrlWithPrefix("/dia-diem/" + selectedProvinceObj.url);
				}
				history.push(newUrl);
			}
		}
		props.setIsDialogOpen(false);
	};

	const getLocationLabel = () => {
		switch (props.locationType) {
			case "district":
				return "huyện";
			case "commune":
				return "xã";
			case "apartment":
				return "đường";
			default:
				return "tỉnh";
		}
	};
	

	return (
		<SelectMapWrap>
			<FormControl fullWidth>
				<Select
					value={selectedProvince?.url || "All"}
					onChange={handleSelectChange}
					input={<CustomOutlinedInput />}
					displayEmpty
					renderValue={(selected) => {
						if (selected === "All") {
							return `Lọc ${getLocationLabel()}`;
						}
						if (selected === "back") {
							return TranslateLabels[props.lang]?.ALL || "Tất cả";
						}
						const found = props.address.find((a) => a.url === selected);
						return found?.name || "";
					}}>
					<MenuItem value="All">
							{`Lọc ${getLocationLabel()}`}
					</MenuItem>
					<MenuItem value="back">
						{TranslateLabels[props.lang]?.ALL || "Tất cả"}
					</MenuItem>
					{props.address.map((val) => (
						<MenuItem
							key={val.id}
							value={val.url || ""}>
							{val.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</SelectMapWrap>
	);
}

export function SelectFilterPriceMap(props: {
	lang: string;
	options: SelectOptionType[];
	linkGetter?: (val: string) => string;
}) {
	const [selectedOption, setSelectedOption] = useState<string>("");

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const currentPrice = urlParams.get("filterPrice") || "";
		const foundOption = props.options.find((option) => option.value === currentPrice);
		setSelectedOption(foundOption?.label || "");
	}, []);

	const thumbnailsHtml = `
<select onchange="handleSelectChange(this)">
${`<option
			value="">
			${selectedOption || TranslateLabels[props.lang]?.FILTERS_PRICE}
		</option>`}
    ${(props.options || [])
		.map(
			(val, index) => `
                <option value="${props.linkGetter ? props.linkGetter(val.value) : ""}">
                    ${val.label}
                </option>
            `
		)
		.join("")}
</select>
`;
	return <SelectFilterDivPrice dangerouslySetInnerHTML={{ __html: thumbnailsHtml }} />;
}

export function SelectFilterStarMap(props: {
	lang: string;
	options: SelectOptionType[];
	linkGetter?: (val: string) => string;
}) {
	const [selectedOption, setSelectedOption] = useState<string>("");

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const currentPrice = urlParams.get("filterStar") || "";
		const foundOption = props.options.find((option) => option.value === currentPrice);
		setSelectedOption(foundOption?.label || "");
	}, []);
	const thumbnailsHtml = `
<select onchange="handleSelectChange(this)">
${`<option
			value="">
			${selectedOption || TranslateLabels[props.lang]?.FILTERS_REVIEWS}
		</option>`}
    ${(props.options || [])
		.map(
			(val, index) => `
                <option value="${props.linkGetter ? props.linkGetter(val.value) : ""}">
                    ${val.label}
                </option>
            `
		)
		.join("")}
</select>
`;
	return <SelectFilterDiv dangerouslySetInnerHTML={{ __html: thumbnailsHtml }} />;
}
