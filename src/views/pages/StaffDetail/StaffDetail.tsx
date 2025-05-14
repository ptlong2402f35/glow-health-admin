import React, { createContext, useEffect } from "react";
import { HomeRes, HomeWeb, HomeWrapperv2 } from "../home/styled/HomeStyles";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import StaffDetailPage from "./component/StaffDetailWrap";
import FooterRes from "../../controls/layout/footer/FooterRes";
import { useParams } from "react-router";
import useGetDetailStaff from "./hook/getDetailStaff";
import StaffDetailKTV from "./component/StaffDetailKTV";

export default function StaffDetail() {
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

	const { group, link, lang } = useParams<{ group: string; link: string; lang: string }>();
	const { staff, reload } = useGetDetailStaff({ group, link, lang });

	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			{staff?.type === 3 ? (
				<StaffDetailPage
					staff={staff}
					lang={lang || "vi"}
				/>
			) : (
				<StaffDetailKTV
					staff={staff}
					lang={lang || "vi"}
				/>
			)}
			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
