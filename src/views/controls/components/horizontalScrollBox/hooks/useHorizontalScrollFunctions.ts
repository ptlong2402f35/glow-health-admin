import { RefObject, useEffect, useState } from "react";
import Logger from "../../../../../utils/Logger";

const Log = Logger.getLogger("useHorizontalScrollFunctions");
const ScrollStepBase = 60;
const roundingError = 2;

export default function useHorizontalScrollFunctions(props: {
	scrollWrapRef: RefObject<HTMLDivElement>;
	scrollBoxRef: RefObject<HTMLDivElement>;
	step: number;
	onPrevClickAsync?: (isBegin: boolean) => Promise<void>;
	onNextClickAsync?: (isEnd: boolean) => Promise<void>;
	onPrevClick?: (isBegin: boolean) => void;
	prevLoading?: boolean;
	onNextClick?: (isEnd: boolean) => void;
	nextLoading?: boolean;
}) {
	const [isBegin, setIsBegin] = useState(true);
	const [isEnd, setIsEnd] = useState(false);
	const [isPrevLoading, setIsPrevLoading] = useState(false);
	const [isNextLoading, setIsNextLoading] = useState(false);
	const [isBeginClick, setisBeginClick] = useState(false);

	const onPrevBtnClick = async () => {
		let curScroll = props.scrollWrapRef.current?.scrollLeft || 0;
		let wrapW = props.scrollWrapRef.current?.offsetWidth || 0;
		let moveW = (wrapW * props.step) / ScrollStepBase;

		// Log.log(`onPrevBtnClick: `, { curScroll, wrapW, moveW, });

		if (props.onPrevClickAsync) {
			try {
				setIsPrevLoading(true);
				await props.onPrevClickAsync(isBegin);
			} finally {
				setIsPrevLoading(false);
			}
		}
		props.onPrevClick?.(isBegin);

		props.scrollWrapRef.current?.scrollTo({
			top: 0,
			left: curScroll - moveW,
			behavior: "smooth",
		});
	};

	const onNextBtnClick = async () => {
		let curScroll = props.scrollWrapRef.current?.scrollLeft || 0;
		let wrapW = props.scrollWrapRef.current?.offsetWidth || 0;
		let moveW = (wrapW * props.step) / ScrollStepBase;

		// Log.log(`onNextBtnClick: `, { curScroll, wrapW, moveW, });

		if (props.onNextClickAsync) {
			try {
				setIsNextLoading(true);
				await props.onNextClickAsync(isEnd);
			} finally {
				setIsNextLoading(false);
			}
		}
		props.onNextClick?.(isEnd);
		setisBeginClick(true);

		props.scrollWrapRef.current?.scrollTo({
			top: 0,
			left: curScroll + moveW,
			behavior: "smooth",
		});
	};

	const onScrollChange = () => {
		let curScroll = props.scrollWrapRef.current?.scrollLeft || 0;
		let wrapW = props.scrollWrapRef.current?.offsetWidth || 0;
		let innerW = props.scrollBoxRef.current?.offsetWidth || 0;
		let maxScroll = innerW > wrapW ? innerW - wrapW : 0;

		// Log.log(`onScrollChange: `, { curScroll, wrapW, innerW, maxScroll, });

		if (curScroll <= 0) {
			setIsBegin(true);
		} else {
			setIsBegin(false);
		}

		if (curScroll >= maxScroll - roundingError) {
			setIsEnd(true);
		} else {
			setIsEnd(false);
		}
	};

	const doScrollToPrev = () => {
		let curScroll = props.scrollWrapRef.current?.scrollLeft || 0;
		let wrapW = props.scrollWrapRef.current?.offsetWidth || 0;
		let moveW = (wrapW * props.step) / ScrollStepBase;

		props.scrollWrapRef.current?.scrollTo({
			top: 0,
			left: curScroll - moveW,
			behavior: "smooth",
		});
	};

	const doScrollToNext = () => {
		let curScroll = props.scrollWrapRef.current?.scrollLeft || 0;
		let wrapW = props.scrollWrapRef.current?.offsetWidth || 0;
		let moveW = (wrapW * props.step) / ScrollStepBase;

		props.scrollWrapRef.current?.scrollTo({
			top: 0,
			left: curScroll + moveW,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		if (!props.prevLoading) doScrollToPrev();
	}, [props.prevLoading]);

	useEffect(() => {
		if (!props.nextLoading && isBeginClick) doScrollToNext();
	}, [props.nextLoading]);

	return {
		isBegin,
		isEnd,
		isPrevLoading: props.prevLoading || isPrevLoading,
		isNextLoading: props.nextLoading || isNextLoading,
		onPrevBtnClick,
		onNextBtnClick,
		onScrollChange,
	};
}
