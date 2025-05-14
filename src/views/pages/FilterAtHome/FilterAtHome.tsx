import React, { createContext, useEffect } from "react";
import { HomeRes, HomeWeb, HomeWrapperv2 } from "../home/styled/HomeStyles";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import ListStaffAtHomeWrap from "./component/ListStaffAtHomeWrap";
import FooterRes from "../../controls/layout/footer/FooterRes";
import { getFilterBlogListHome } from "./hook/getListStaffAtHome";
import { useParams } from "react-router";
import ContentFilter from "../Content/ContentFilter";

export const HomeContext = createContext<{
	openDetailDialog: boolean;

	loading: boolean;
	loadMore: () => void;
	isInitLoading: boolean;
	isValidated: boolean | undefined;
} | null>(null);

export default function FilterAtHome() {
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
	const { link, lang, apartment } = useParams<{ link: string; lang: string; apartment: string }>();
	const { staff, breadCrumb, count, pageType, pageTitle, reload, labelData } = getFilterBlogListHome({
		link,
		lang,
		apartment,
	});
	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			<ListStaffAtHomeWrap
				staff={staff}
				breadCrumb={breadCrumb}
				count={count}
				pageType={pageType}
				pageTitle={pageTitle}
				reload={reload}
				lang={lang}
				apartment={apartment}
				labelData={labelData}
			/>

			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
