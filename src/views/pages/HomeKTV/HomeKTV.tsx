import React, { createContext, useEffect, useRef, useState } from "react";
import useLoadedUser from "../../hooks/auth/useLoadedUser";
import { HomeRes, HomeWeb, HomeWrapperv2 } from "../home/styled/HomeStyles";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import HomeMainV3 from "../home/HomeMainv3";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import OtherStaffPageNew from "./component/ListStaffHome";
import HomeMainV4, { HomeMainV4KTV } from "../home/HomeMainv4";
import HomePhone from "../home/HomePhone";
import FooterRes from "../../controls/layout/footer/FooterRes";
import { useLocation, useParams } from "react-router";
import HeaderKTV from "./HeaderKTV";

export const HomeContext = createContext<{
	openDetailDialog: boolean;

	loading: boolean;
	loadMore: () => void;
	isInitLoading: boolean;
	isValidated: boolean | undefined;
} | null>(null);

export default function HomeKTV() {
	const hash = typeof window !== "undefined" && window ? window.location?.hash : undefined;

	useEffect(() => {
		if (hash === undefined) return;

		const timeout = setTimeout(() => {
			const distance = document.getElementById(hash.replace("#", ""))?.offsetTop || 0;
			window.scrollTo({
				top: distance,
				left: 0,
				behavior: "smooth",
			});
			clearTimeout(timeout);
		}, 300);
	}, [hash]);
	const location = useLocation();
	let { lang } = useParams<{ lang: string }>();
	const pathsToCheck = [
		"/tai-nha",
		"/vi/tai-nha",
		"/en/tai-nha",
		"/kr/tai-nha",
		"/tai-nha/",
		"/vi/tai-nha/",
		"/en/tai-nha/",
		"/kr/tai-nha/",
	];
	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			{/* <HomeWeb>
				<HomeMainV4KTV/>
			</HomeWeb>
			<HomeRes>
			<HomePhone atHome={true}/>
			</HomeRes> */}
			<HeaderKTV lang={lang || "vi"} />
			<OtherStaffPageNew isTaiNha={pathsToCheck.some((path) => location.pathname.includes(path))} />

			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
