import React, { createContext, useEffect, useRef, useState } from "react";
import useListServiceGrounpNew from "../hooks/useListServiceGroupNew";
import {
	DealHotHomePageButtonLeft,
	DealHotHomePageButtonLeftService,
	DealHotHomePageButtonRigth,
	DealHotHomePageButtonRigthService,
	ServiceGroupAllPageImg,
	ServiceGroupAllPageInner,
	ServiceGroupAllPageName,
	ServiceGroupAllPageToWrap,
	ServiceGroupAllPageWrap,
} from "../styled/HomeStyles";
import { useParams } from "react-router";

export default function ServiceGroupAllPage(props: { isTaiNha: boolean }) {
	let { lang } = useParams<{ lang: string }>();

	const { listAll } = useListServiceGrounpNew({ lang, isTaiNha: props.isTaiNha });
	const ref = useRef<HTMLDivElement>(null);

	const scroll = (scrollOffset: number) => {
		if (ref.current) {
			const startTime = performance.now();
			const duration = 500;

			const animateScroll = (currentTime: number) => {
				const elapsedTime = currentTime - startTime;
				const progress = Math.min(elapsedTime / duration, 1);
				if (ref.current) {
					ref.current.scrollLeft += scrollOffset * progress;
				}

				if (progress < 1) {
					requestAnimationFrame(animateScroll);
				}
			};

			requestAnimationFrame(animateScroll);
		}
	};

	return (
		<ServiceGroupAllPageToWrap>
			<ServiceGroupAllPageWrap ref={ref}>
				{listAll.map((val, index) => {
					return (
						// <ServiceGroupAllPageInner key={index} to={val.url?.startsWith('/') ? ("/dich-vu" + val.url) :("/dich-vu" + '/' + val.url || "")}>
						<ServiceGroupAllPageInner
							key={index}
							to={val.url?.startsWith("/") ? "/dia-diem" + val.url : "/dia-diem/" + val.url || ""}>
							<ServiceGroupAllPageImg
								src={val.image || ""}
								alt={"Biểu tượng " + val.transName || "Biểu tượng dịch vụ thứ " + " " + index}
							/>
							<ServiceGroupAllPageName>{val.transName || ""}</ServiceGroupAllPageName>
						</ServiceGroupAllPageInner>
					);
				})}
				<DealHotHomePageButtonLeftService onClick={() => scroll(-20)}>
					<i
						className="fa fa-angle-left"
						aria-hidden="true"></i>
				</DealHotHomePageButtonLeftService>
				<DealHotHomePageButtonRigthService onClick={() => scroll(20)}>
					<i
						className="fa fa-angle-right"
						aria-hidden="true"></i>
				</DealHotHomePageButtonRigthService>
			</ServiceGroupAllPageWrap>
		</ServiceGroupAllPageToWrap>
	);
}
