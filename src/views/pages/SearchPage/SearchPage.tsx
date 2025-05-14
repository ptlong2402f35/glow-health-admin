import React, { useEffect } from "react";
import { HomeRes, HomeWeb, HomeWrapper, HomeWrapperv2 } from "../home/styled/HomeStyles";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import FooterRes from "../../controls/layout/footer/FooterRes";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import { getSearchListStaff } from "./hook/searchListStaff";
import { useLocation, useParams } from "react-router";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import ListSearchStaffWrap from "./component/ListSearchStaff";
import { BreadCrumb } from "../../../models/Staff";

export default function SearchPage() {
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

	const { lang } = useParams<{ link: string; lang: string; apartment: string }>();

	const { search, pathname } = useLocation();

	let link;

	if (search && search.includes("?")) {
		const urlParams = new URLSearchParams(search.split("?")[1]);
		link = urlParams.get("filterKeyword");
	}

	const { staff, count, reload, breadCrumb } = getSearchListStaff({
		link,
		lang,
	});

	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			<ListSearchStaffWrap
				staff={staff}
				count={count}
				reload={reload}
				lang={lang}
				breadCrumb={breadCrumb}
				link={link}
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
