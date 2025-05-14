export interface CommonParamsType {
	page?: number | null;
	filterPerPage?: number | null;
	filterCurrency?: number | null;
	filterRoleId?: number | null;
	filterKeyword?: string | null;
	filterStates?: string | null;
	filterFromDate?: Date | null;
	filterToDate?: Date | null;
	filterUserId?: number | null;
	filterUserIdString?: string | null;
	filterActive?: string | null;
	filterPhone?: string | null;
	filterProvice?: string | null;
	filterStore?: string | null;
	filterOnline?: string | null;
	filterVerification?: string | null;
	filterGender?: string | null | undefined;
	filterPrice?: string | null | undefined;
	filterStar?: string | null | undefined;
	filterLunisolar?: string | null | undefined;
	filterIdentify?: string | null | undefined;
	filterCertificate?: string | null | undefined;
	filterGlowCare?: string | null | undefined;
	filterSpam?: string | null | undefined;
	filterPunish?: string | null | undefined;
	filterTags?: string | null | undefined;
}

export interface CommonFunctionsType {
	doFilterUserIdString?: (val: string) => void;
	doChangePage?: (val: number | null) => void;
	doChangeCurrency?: (val: number | null) => void;
	doChangeRoleId?: (val: number | null) => void;
	doChangeFilterPerPage?: (val: number | null) => void;
	doFilterKeyword?: (val: string | null) => void;
	doFilterStates?: (val: string | null) => void;
	doFilterFromDate?: (val: Date | null) => void;
	doFilterToDate?: (val: Date | null) => void;
	doFilterDateRange?: (from: Date | null, to: Date | null) => void;
	doFilterUserId?: (val: number | null) => void;
	doChangeFilterField?: (fieldNVal: any) => void;
	getPathChangePage?: (val: number | null) => void;
	getPathChangeCurrency?: (val: number | null) => void;
	getPathChangeStatus?: (val: number | null) => void;
	getPathChangeFilterPerPage?: (val: number | null) => void;
	getPathFilterKeyword?: (val: string | null) => void;
	getPathFilterStates?: (val: string | null) => void;
	getPathFilterFromDate?: (val: Date | null) => void;
	getPathFilterToDate?: (val: Date | null) => void;
	getPathFilterDateRange?: (from: Date | null, to: Date | null) => void;
	getPathFilterUserId?: (val: number | null) => void;
	getPathChangeFilterField?: (fieldNVal: any) => void;
	getPathFilterUserIdString?: (val: string) => void;
	doFilterActive?: (val: string | null) => void;
	getPathFilterActive?: (val: string | null) => void;
	doFilterPhone?: (val: string | null) => void;
	getPathFilterPhone?: (val: string | null) => void;
	doFilterProvice?: (val: string | null) => void;
	getPathFilterProvice?: (val: string | null) => void;
	doFilterStore?: (val: string | null) => void;
	getPathFilterStore?: (val: string | null) => void;
	doFilterOnline?: (val: string | null) => void;
	getPathFilterOnline?: (val: string | null) => void;
	doFilterVerification?: (val: string | null) => void;
	getPathFilterVerification?: (val: string | null) => void;
	doFilterGender?: (val: string | null) => void;
	getPathFilterGender?: (val: string | null) => void;
	doFilterPrice?: (val: string | null) => void;
	getPathFilterPrice?: (val: string | null) => void;
	doFilterStar?: (val: string | null) => void;
	getPathFilterStar?: (val: string | null) => void;
	doFilterLunisolar?: (val: string | null) => void;
	getPathFilterLunisolar?: (val: string | null) => void;
	doFilterIdentify?: (val: string | null) => void;
	getPathFilterIdentify?: (val: string | null) => void;
	doFilterCertificate?: (val: string | null) => void;
	getPathFilterCertificate?: (val: string | null) => void;
	doFilterGlowCare?: (val: string | null) => void;
	getPathFilterGlowCare?: (val: string | null) => void;
	doFilterSpam?: (val: string | null) => void;
	getPathFilterSpam?: (val: string | null) => void;
	doFilterPunish?: (val: string | null) => void;
	getPathFilterPunish?: (val: string | null) => void;
	doFilterTags?: (val: string | null) => void;
	getPathFilterTags?: (val: string | null) => void;
}

export function extractParamsAsDate(value: string | null): Date | null {
	if (!value) return null;

	let timestamp = parseInt(value);
	return (timestamp && new Date(timestamp)) || null;
}

/**
 * extract url query into common params
 */
export function extractCommonListFilter<T extends CommonParamsType>(
	searchParams: string,
	extractor: (filter: CommonParamsType, uParams: URLSearchParams) => T
): T {
	var params = new URLSearchParams(searchParams);
	let filter: CommonParamsType = {
		page: (params.get("page") && parseInt(params.get("page") || "")) || 1,
		filterPerPage: (params.get("filterPerPage") && parseInt(params.get("filterPerPage") || "")) || 0,
		filterCurrency: (params.get("filterCurrency") && parseInt(params.get("filterCurrency") || "")) || 0,
		filterRoleId: (params.get("filterRoleId") && parseInt(params.get("filterRoleId") || "")) || 0,
		filterKeyword: params.get("filterKeyword") || null,
		filterStates: (params.get("filterStates") && decodeURIComponent(params.get("filterStates") || "")) || null,
		filterFromDate: extractParamsAsDate(params.get("filterFromDate")),
		filterToDate: extractParamsAsDate(params.get("filterToDate")),
		filterUserId: (params.get("filterUserId") && parseInt(params.get("filterUserId") || "")) || 0,
		filterUserIdString: params.get("filterUserIdString") || null,
		filterActive: params.get("filterActive") || null,
		filterPhone: params.get("filterPhone") || null,
		filterProvice: params.get("filterProvice") || null,
		filterStore: params.get("filterStore") || null,
		filterOnline: params.get("filterOnline") || null,
		filterVerification: params.get("filterVerification") || null,
		filterGender: params.get("filterGender") || null,
		filterPrice: params.get("filterPrice") || null,
		filterStar: params.get("filterStar") || null,
		filterLunisolar: params.get("filterLunisolar") || null,
		filterIdentify: params.get("filterIdentify") || null,
		filterCertificate: params.get("filterCertificate") || null,
		filterGlowCare: params.get("filterGlowCare") || null,
		filterSpam: params.get("filterSpam") || null,
		filterPunish: params.get("filterPunish") || null,
		filterTags: params.get("filterTags") || null,
	};
	return extractor(filter, params);
}

export function defaultExtractor(filter: CommonParamsType, uParams: URLSearchParams) {
	return filter;
}

/**
 * compose current common params into url query
 */
export function filterCommonListToParams<T extends CommonParamsType>(
	filter: T,
	extraParamComposer?: (nfilter: T) => any
) {
	return new URLSearchParams({
		...(filter.page && filter.page > 1 && { page: filter.page }),
		...(filter.filterPerPage && { filterPerPage: filter.filterPerPage }),
		...(filter.filterCurrency && { filterCurrency: filter.filterCurrency }),
		...(filter.filterRoleId && { filterRoleId: filter.filterRoleId }),
		...(filter.filterKeyword && { filterKeyword: filter.filterKeyword }),
		...(filter.filterStates && {
			filterStates: encodeURIComponent(filter.filterStates),
		}),
		...(filter.filterFromDate && {
			filterFromDate: filter.filterFromDate.getTime() + "",
		}),
		...(filter.filterToDate && {
			filterToDate: filter.filterToDate.getTime() + "",
		}),
		...(filter.filterUserId && { filterUserId: filter.filterUserId }),
		...(filter.filterUserIdString && { filterUserIdString: filter.filterUserIdString }),
		...(filter.filterActive && { filterActive: filter.filterActive }),
		...(filter.filterPhone && { filterPhone: filter.filterPhone }),
		...(filter.filterProvice && { filterProvice: filter.filterProvice }),
		...(filter.filterStore && { filterStore: filter.filterStore }),
		...(filter.filterOnline && { filterOnline: filter.filterOnline }),
		...(filter.filterVerification && { filterVerification: filter.filterVerification }),
		...(filter.filterGender && { filterGender: filter.filterGender }),
		...(filter.filterPrice && { filterPrice: filter.filterPrice }),
		...(filter.filterStar && { filterStar: filter.filterStar }),
		...(filter.filterLunisolar && { filterLunisolar: filter.filterLunisolar }),
		...(filter.filterIdentify && { filterIdentify: filter.filterIdentify }),
		...(filter.filterCertificate && { filterCertificate: filter.filterCertificate }),
		...(filter.filterGlowCare && { filterGlowCare: filter.filterGlowCare }),
		...(filter.filterSpam && { filterSpam: filter.filterSpam }),
		...(filter.filterPunish && { filterPunish: filter.filterPunish }),
		...(filter.filterTags && { filterTags: filter.filterTags }),

		...extraParamComposer?.(filter),
	}).toString();
}
