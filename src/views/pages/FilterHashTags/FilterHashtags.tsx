import React, { createContext, useEffect } from "react";
import { HomeRes, HomeWeb, HomeWrapperv2 } from "../home/styled/HomeStyles";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import FooterRes from "../../controls/layout/footer/FooterRes";
import ListStaffAtHomeWrap from "../FilterAtHome/component/ListStaffAtHomeWrap";
import { getFilterBlogHashTags } from "./hook/getListStaffTags";
import { useParams } from "react-router";

export const HomeContext = createContext<{
	openDetailDialog: boolean;

	loading: boolean;
	loadMore: () => void;
	isInitLoading: boolean;
	isValidated: boolean | undefined;
} | null>(null);

export default function FilterHashtag() {
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
	const { staff, breadCrumb, count, pageType, pageTitle, reload } = getFilterBlogHashTags({ link, lang, apartment });

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
				hashtags={true}
				apartment={apartment}
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
