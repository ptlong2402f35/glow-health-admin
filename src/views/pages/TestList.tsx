import React, { useState, useEffect } from "react";
import Logger from "../../utils/Logger";
import NumberPaginationBox from "../controls/components/numberPaginationBox/NumberPaginationBox";
import { CommonParamsType } from "../hooks/useCommonList/commonHelper";
import useCommonListFunctions, {
	CommonListFunctionsType,
	useExtendCommonListFunctions,
} from "../hooks/useCommonList/useCommonListFunctions";
import { CommonListType, useCommonListWrap, useExtendCommonListWrap } from "../hooks/useCommonList/useCommonListWrap";

const Log = Logger.getLogger("TestList");
const PerPage = 20;

export default function TestList() {
	const { numbers } = xxxListWrap();
	const { page, filterXXX, doChangePage, doChangeFilterXXX } = xxxListFunctions();

	return (
		<div style={{ textAlign: "center" }}>
			<div>{numbers.join("; ")}</div>
			<br />
			<br />
			<input
				type="checkbox"
				checked={filterXXX ? true : false}
				onChange={(e) => doChangeFilterXXX(e.target.checked ? "hehe" : "")}
			/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<NumberPaginationBox
				page={page || 1}
				count={100}
				per={PerPage}
				onChange={(val) => doChangePage?.(val)}
			/>
		</div>
	);
}

const TestData: number[] = Array(100)
	.fill(0)
	.map((_, idx) => idx);
const TestData2: number[] = Array(100)
	.fill(0)
	.map((_, idx) => 1000 + idx);

async function testApi(limit: number, skip: number, filterXXX: string | null): Promise<number[]> {
	if (filterXXX) return TestData2.slice(skip, skip + limit);
	else return TestData.slice(skip, skip + limit);
}

interface CustomListType extends CommonListType {
	filterXXX?: string | null;
}

function testGetListHook(props: CustomListType) {
	const [numbers, setNumbers] = useState<number[]>([]);

	const loadData = async (inPage: number, inPerPage: number, inFilterXXX: string | null) => {
		let skip = (inPage - 1) * inPerPage;
		let res = await testApi(inPerPage, skip, inFilterXXX);
		setNumbers(res);
	};

	useEffect(() => {
		loadData(props.page || 1, props.perPage || 0, props.filterXXX || null);
	}, [props.page, props.perPage, props.filterXXX]);

	Log.log(`props: `, [props.page, props.perPage, props.filterXXX]);
	Log.log(`numbers: `, numbers);

	return {
		numbers,
	};
}

interface CustomParams extends CommonParamsType {
	filterXXX?: string | null;
}

interface CustomFunctions extends CommonParamsType, CommonListFunctionsType {
	filterXXX?: string | null;
}

function xxxExtractor(filter: CommonParamsType, uParams: URLSearchParams) {
	return {
		...filter,
		filterXXX: uParams.get("filterXXX"),
	};
}

function xxxListWrap() {
	const xxxHook = (hookProps: CustomParams, per: number, onBeginLoad?: () => void, onEndLoad?: () => void) => {
		return testGetListHook({
			...hookProps,
			perPage: per,
			onBeginLoad: onBeginLoad,
			onEndLoad: onEndLoad,
		});
	};

	return useExtendCommonListWrap<{ numbers: number[] }, CustomParams>(20, xxxHook, xxxExtractor);
}

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

	const doChangeFilterXXX = (val: string) => functions?.doChangeFilterField?.({ filterXXX: val });

	return {
		...functions,
		doChangeFilterXXX,
	};
}
