import { CommonParamsType } from "./commonHelper";
import { CommonListFunctionsType, useExtendCommonListFunctions } from "./useCommonListFunctions";
import { useExtendCommonListWrap } from "./useCommonListWrap";

/**
 * this type is defined as input of custom hook
 */
interface CustomParams extends CommonParamsType {
	filterXXX?: string | null;
}

/**
 * this type is defined as output of custom params changer
 */
interface CustomFunctions extends CommonParamsType, CommonListFunctionsType {
	filterXXX?: string | null;
}

/**
 * define extractor for new params
 */
function xxxExtractor(filter: CommonParamsType, uParams: URLSearchParams) {
	return {
		...filter,
		filterXXX: uParams.get("filterXXX"),
	};
}

/**
 * custom hook
 */
function xxxHook(props: CustomParams, per: number, onBeginLoad?: () => void, onEndLoad?: () => void) {
	return {
		a: "b",
	};
}

/**
 * custom list wrap. Possible use to fetch data
 */
function xxxListWrap() {
	return useExtendCommonListWrap<{ a: string }, CustomParams>(20, xxxHook, xxxExtractor);
}

/**
 * custom params changers. Possible use to handle filter data
 */
function xxxListFunctions() {
	const functions = useExtendCommonListFunctions<CustomParams, CustomFunctions>(
		xxxExtractor,
		(nfilter: CustomParams) => ({
			filterXXX: nfilter.filterXXX,
		}),
		(nFilter: CustomParams, nFunctions: CommonListFunctionsType) => ({
			...nFilter,
			...nFunctions,
		})
	);

	const onFilterXXXChange = (val: string) => functions?.doChangeFilterField?.({ filterXXX: val });

	return {
		...functions,
		onFilterXXXChange,
	};
}
