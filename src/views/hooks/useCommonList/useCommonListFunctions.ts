import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import {
	CommonFunctionsType,
	CommonParamsType,
	defaultExtractor,
	extractCommonListFilter,
	filterCommonListToParams,
} from "./commonHelper";

export class CommonListFunctionsType implements CommonParamsType, CommonFunctionsType {
	page?: number | null | undefined;
	filterPerPage?: number | null | undefined;
	filterCurrency?: number | null | undefined;
	filterRoleId?: number | null | undefined;
	filterKeyword?: string | null | undefined;
	filterStates?: string | null | undefined;
	filterFromDate?: Date | null | undefined;
	filterToDate?: Date | null | undefined;
	filterUserId?: number | null | undefined;
	filterUserIdString?: string | null | undefined;
	filterActive?: string | null | undefined;
	filterPhone?: string | null | undefined;
	filterProvice?: string | null | undefined;
	filterStore?: string | null | undefined;
	filterOnline?: string | null | undefined;
	filterVerification?: string | null | undefined;
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
	getPathChangePage?: (val: number | null) => string;
	getPathChangeCurrency?: (val: number | null) => void;
	getPathChangeRoleId?: (val: number | null) => void;
	getPathChangeFilterPerPage?: (val: number | null) => void;
	getPathFilterKeyword?: (val: string | null) => void;
	getPathFilterStates?: (val: string | null) => void;
	getPathFilterFromDate?: (val: Date | null) => void;
	getPathFilterToDate?: (val: Date | null) => void;
	getPathFilterDateRange?: (from: Date | null, to: Date | null) => void;
	getPathFilterUserId?: (val: number | null) => void;
	getPathChangeFilterField?: (fieldNVal: any) => void;
	getPathFilterUserIdString?: (val: string | null) => void;
	doFilterUserIdString?: (val: string | null) => void;
	doFilterActive?: (val: string | null) => void;
	getPathFilterActive?: (val: string | null) => void;
	clearFilter?: () => void;
	doClearFilter?: () => void;
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
	getPathFilterGender?: (val: string | null) => string;
	doFilterPrice?: (val: string | null) => void;
	getPathFilterPrice?: (val: string | null) => string;
	doFilterStar?: (val: string | null) => void;
	getPathFilterStar?: (val: string | null) => string;
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

/**
 * return common params and common param changers
 */
export function useExtendCommonListFunctions<
	T extends CommonParamsType,
	S extends CommonParamsType & CommonListFunctionsType
>(
	extraExtractor: (filter: CommonParamsType, uParams: URLSearchParams) => T,
	extraParamComposer: (nfilter: T) => any,
	resultForwarder: (nFilter: T, nFunctions: CommonListFunctionsType) => S
): S {
	const { search, pathname } = useLocation();
	const history = useHistory();

	const [filter, setFilter] = useState(() => {
		return extractCommonListFilter<T>(search, extraExtractor);
	});

	const getPathFilterKeyword = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams<T>(
				{
					...filter,
					page: 1,
					filterKeyword: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterKeyword = (val: string | null) => {
		history.push(getPathFilterKeyword(val));
	};

	const getPathFilterStates = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterStates: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterStates = (val: string | null) => {
		history.push(getPathFilterStates(val));
	};

	const getPathFilterFromDate = (val: Date | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterFromDate: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterFromDate = (val: Date | null) => {
		history.push(getPathFilterFromDate(val));
	};

	const getPathFilterToDate = (val: Date | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterToDate: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterToDate = (val: Date | null) => {
		history.push(getPathFilterToDate(val));
	};

	const getPathFilterDateRange = (from: Date | null, to: Date | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterFromDate: from,
					filterToDate: to,
				},
				extraParamComposer
			)
		);
	};

	const doFilterDateRange = (from: Date | null, to: Date | null) => {
		history.push(getPathFilterDateRange(from, to));
	};

	const getPathFilterUserId = (val: number | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterUserId: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterUserId = (val: number | null) => {
		history.push(getPathFilterUserId(val));
	};

	const getPathChangePage = (val: number | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: val,
				},
				extraParamComposer
			)
		);
	};

	const doChangePage = (val: number | null) => {
		history.push(getPathChangePage(val));
	};

	const getPathChangeCurrency = (val: number | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterCurrency: val,
				},
				extraParamComposer
			)
		);
	};

	const doChangeCurrency = (val: number | null) => {
		history.push(getPathChangeCurrency(val));
	};

	const getPathChangeRoleId = (val: number | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterRoleId: val,
				},
				extraParamComposer
			)
		);
	};

	const doChangeRoleId = (val: number | null) => {
		history.push(getPathChangeRoleId(val));
	};

	const getPathChangeFilterPerPage = (val: number | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					filterPerPage: val,
				},
				extraParamComposer
			)
		);
	};

	const doChangeFilterPerPage = (val: number | null) => {
		history.push(getPathChangeFilterPerPage(val));
	};

	const getPathChangeFilterField = (fieldNVal: any) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					...fieldNVal,
				},
				extraParamComposer
			)
		);
	};

	const doChangeFilterField = (fieldNVal: any) => {
		history.push(getPathChangeFilterField(fieldNVal));
	};
	const getPathFilterUserIdString = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams({
				...filter,
				page: 1,
				filterUserIdString: val,
			})
		);
	};

	const doFilterUserIdString = (val: string | null) => {
		history.push(getPathFilterUserIdString(val));
	};

	const getPathFilterActive = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterActive: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterActive = (val: string | null) => {
		history.push(getPathFilterActive(val));
	};

	const getPathFilterPhone = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterPhone: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterPhone = (val: string | null) => {
		history.push(getPathFilterPhone(val));
	};

	const getPathFilterProvice = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterProvice: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterProvice = (val: string | null) => {
		history.push(getPathFilterProvice(val));
	};

	const getPathFilterStore = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterStore: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterStore = (val: string | null) => {
		history.push(getPathFilterStore(val));
	};

	const getPathFilterOnline = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterOnline: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterOnline = (val: string | null) => {
		history.push(getPathFilterOnline(val));
	};

	const getPathFilterVerification = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterVerification: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterVerification = (val: string | null) => {
		history.push(getPathFilterVerification(val));
	};

	const getPathFilterGender = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterGender: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterGender = (val: string | null) => {
		history.push(getPathFilterGender(val));
	};

	const getPathFilterPrice = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterPrice: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterPrice = (val: string | null) => {
		history.push(getPathFilterPrice(val));
	};

	const getPathFilterStar = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterStar: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterStar = (val: string | null) => {
		history.push(getPathFilterStar(val));
	};

	const getPathFilterLunisolar = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterLunisolar: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterLunisolar = (val: string | null) => {
		history.push(getPathFilterLunisolar(val));
	};

	const getPathFilterIdentify = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterIdentify: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterIdentify = (val: string | null) => {
		history.push(getPathFilterIdentify(val));
	};

	const getPathFilterCertificate = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterCertificate: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterCertificate = (val: string | null) => {
		history.push(getPathFilterCertificate(val));
	};
	const getPathFilterGlowCare = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterGlowCare: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterGlowCare = (val: string | null) => {
		history.push(getPathFilterGlowCare(val));
	};
	const getPathFilterSpam = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterSpam: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterSpam = (val: string | null) => {
		history.push(getPathFilterSpam(val));
	};
	const getPathFilterPunish = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterPunish: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterPunish = (val: string | null) => {
		history.push(getPathFilterPunish(val));
	};

	const getPathFilterTags = (val: string | null) => {
		return (
			pathname +
			"?" +
			filterCommonListToParams(
				{
					...filter,
					page: 1,
					filterTags: val,
				},
				extraParamComposer
			)
		);
	};

	const doFilterTags = (val: string | null) => {
		history.push(getPathFilterTags(val));
	};
	const clearFilter = () => {
		return pathname;
	};

	const doClearFilter = () => {
		history.push(clearFilter());
	};

	useEffect(() => {
		setFilter(extractCommonListFilter<T>(search, extraExtractor));
	}, [search]);

	return resultForwarder(filter, {
		getPathFilterKeyword,
		doFilterKeyword,
		getPathFilterStates,
		doFilterStates,
		getPathFilterFromDate,
		doFilterFromDate,
		getPathFilterToDate,
		doFilterToDate,
		getPathFilterDateRange,
		doFilterDateRange,
		getPathFilterUserId,
		doFilterUserId,
		getPathChangePage,
		doChangePage,
		getPathChangeCurrency,
		doChangeCurrency,
		getPathChangeRoleId,
		doChangeRoleId,
		getPathChangeFilterPerPage,
		doChangeFilterPerPage,
		getPathChangeFilterField,
		doChangeFilterField,
		getPathFilterUserIdString,
		doFilterUserIdString,
		doFilterActive,
		getPathFilterActive,
		clearFilter,
		doClearFilter,
		doFilterPhone,
		getPathFilterPhone,
		doFilterProvice,
		getPathFilterProvice,
		doFilterStore,
		getPathFilterStore,
		doFilterOnline,
		getPathFilterOnline,
		doFilterVerification,
		getPathFilterVerification,
		getPathFilterGender,
		doFilterGender,
		getPathFilterPrice,
		doFilterPrice,
		getPathFilterStar,
		doFilterStar,
		getPathFilterLunisolar,
		doFilterLunisolar,
		getPathFilterIdentify,
		doFilterIdentify,
		getPathFilterCertificate,
		doFilterCertificate,
		getPathFilterGlowCare,
		doFilterGlowCare,
		getPathFilterSpam,
		doFilterSpam,
		getPathFilterPunish,
		doFilterPunish,
		getPathFilterTags,
		doFilterTags,
	});
}

/**
 * return common params and common param changers
 */
export default function useCommonListFunctions(): CommonListFunctionsType {
	return useExtendCommonListFunctions<CommonParamsType, CommonListFunctionsType>(
		defaultExtractor,
		(nfilter: CommonParamsType) => ({}),
		(nFilter: CommonParamsType, nFunctions: CommonListFunctionsType) => ({
			...nFilter,
			...nFunctions,
		})
	);
}
