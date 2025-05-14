import React, { useRef } from "react";
import useHorizontalScrollFunctions from "./hooks/useHorizontalScrollFunctions";
import {
	HorizontalBoxActionNext,
	HorizontalBoxActionNextBtn,
	HorizontalBoxActionPrev,
	HorizontalBoxActionPrevBtn,
	HorizontalBoxActions,
	HorizontalBoxInner,
	HorizontalBoxScroll,
	HorizontalBoxScrollInner,
	HorizontalBoxScrollWrap,
	HorizontalBoxWrap,
} from "./StyledHorizontalScrollBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import Logger from "../../../../utils/Logger";
import { FlattenSimpleInterpolation } from "styled-components";

const Log = Logger.getLogger("HorizontalScrollBox");

export default function HorizontalScrollBox(props: {
	children: JSX.Element | JSX.Element[] | string | string[] | null;
	step: number; //step over 60
	onPrevClickAsync?: (isBegin: boolean) => Promise<void>;
	onNextClickAsync?: (isEnd: boolean) => Promise<void>;
	onPrevClick?: (isBegin: boolean) => void;
	prevLoading?: boolean;
	onNextClick?: (isEnd: boolean) => void;
	nextLoading?: boolean;
	$xStyleBoxWrap?: FlattenSimpleInterpolation;
	$xStyleBoxInner?: FlattenSimpleInterpolation;
	$xStyleBoxActionPrev?: FlattenSimpleInterpolation;
	$xStyleBoxActionPrevBtn?: FlattenSimpleInterpolation;
	$xStyleBoxActionNext?: FlattenSimpleInterpolation;
	$xStyleBoxActionNextBtn?: FlattenSimpleInterpolation;
}) {
	const scrollWrapRef = useRef<HTMLDivElement>(null);
	const scrollBoxRef = useRef<HTMLDivElement>(null);

	const { isBegin, isEnd, isPrevLoading, isNextLoading, onPrevBtnClick, onNextBtnClick, onScrollChange } =
		useHorizontalScrollFunctions({
			scrollWrapRef: scrollWrapRef,
			scrollBoxRef: scrollBoxRef,
			step: props.step,
			onPrevClickAsync: props.onPrevClickAsync,
			onNextClickAsync: props.onNextClickAsync,
			onPrevClick: props.onPrevClick,
			prevLoading: props.prevLoading,
			onNextClick: props.onNextClick,
			nextLoading: props.nextLoading,
		});

	const hasPrevHandler = props.onPrevClickAsync || props.onPrevClick ? true : false;
	const hasNextHandler = props.onNextClickAsync || props.onNextClick ? true : false;

	// Log.log(`states: `, { isBegin, isEnd, isPrevLoading, isNextLoading, hasPrevHandler, hasNextHandler });

	return (
		<HorizontalBoxWrap $xStyle={props.$xStyleBoxWrap}>
			<HorizontalBoxInner $xStyle={props.$xStyleBoxInner}>
				<HorizontalBoxScrollWrap>
					<HorizontalBoxScroll
						ref={scrollWrapRef}
						onScroll={onScrollChange}>
						<HorizontalBoxScrollInner
							className="clearfix"
							ref={scrollBoxRef}>
							{props.children}
						</HorizontalBoxScrollInner>
					</HorizontalBoxScroll>
				</HorizontalBoxScrollWrap>

				<HorizontalBoxActionPrev
					$xStyle={props.$xStyleBoxActionPrev}
					className={isBegin ? "is-begin" : ""}>
					<HorizontalBoxActionPrevBtn
						$xStyle={props.$xStyleBoxActionPrevBtn}
						onClick={onPrevBtnClick}
						disabled={!hasPrevHandler && isBegin}
						className={!hasPrevHandler && isBegin ? "hide" : ""}>
						{isPrevLoading ? (
							<CircularProgress
								size="15px"
								color="inherit"
							/>
						) : hasPrevHandler && isBegin ? (
							<span className="material-symbols-outlined">more_horiz</span>
						) : (
							<i className="fa fa-angle-left" />
						)}
					</HorizontalBoxActionPrevBtn>
				</HorizontalBoxActionPrev>
				<HorizontalBoxActionNext
					$xStyle={props.$xStyleBoxActionNext}
					className={isEnd ? "is-end" : ""}>
					<HorizontalBoxActionNextBtn
						$xStyle={props.$xStyleBoxActionNextBtn}
						onClick={onNextBtnClick}
						disabled={!hasNextHandler && isEnd}
						className={!hasNextHandler && isEnd ? "hide" : ""}>
						{isNextLoading ? (
							<CircularProgress
								size="15px"
								color="inherit"
							/>
						) : hasNextHandler && isEnd ? (
							<span className="material-symbols-outlined">more_horiz</span>
						) : (
							<i className="fa fa-angle-right" />
						)}
					</HorizontalBoxActionNextBtn>
				</HorizontalBoxActionNext>
			</HorizontalBoxInner>
		</HorizontalBoxWrap>
	);
}
