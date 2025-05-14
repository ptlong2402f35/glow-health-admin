import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useLoadingDialog from "../useLoadingDialog";
import { CommonParamsType, defaultExtractor, extractCommonListFilter } from "./commonHelper";

export interface CommonListType extends CommonParamsType {
	perPage?: number | null;
	onBeginLoad?: () => void;
	onEndLoad?: () => void;
}

/**
 * wrap main hook and pass common params into that hook. Allow implement extended params member.
 */
export function useExtendCommonListWrap<P, T extends CommonParamsType>(
	perPage: number,
	useListHook: (hookProps: T, per: number, onBeginLoad?: () => void, onEndLoad?: () => void) => P,
	extraExtractor: (filter: CommonParamsType, uParams: URLSearchParams) => T
): P {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { search } = useLocation();
	const [filter, setFilter] = useState(() => {
		return extractCommonListFilter<T>(search, extraExtractor);
	});

	const hookResult = useListHook({ ...filter }, perPage, openLoadingDialog, closeLoadingDialog);

	useEffect(() => {
		setFilter(extractCommonListFilter<T>(search, extraExtractor));
	}, [search]);

	return hookResult;
}

/**
 * wrap main hook and pass common params into that hook
 */
export function useCommonListWrap<P>(perPage: number, useListHook: (hookProps: CommonListType) => P): P {
	return useExtendCommonListWrap<P, CommonParamsType>(
		perPage,
		(hookProps: CommonParamsType, per: number, onBeginLoad?: () => void, onEndLoad?: () => void) =>
			useListHook({
				...hookProps,
				perPage: per,
				onBeginLoad: onBeginLoad,
				onEndLoad: onEndLoad,
			}),
		defaultExtractor
	);
}
