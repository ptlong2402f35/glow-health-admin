import React, { createContext, useEffect } from "react";
import { HomeRes, HomeWeb, HomeWrapperv2 } from "../home/styled/HomeStyles";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import { useParams } from "react-router";
import FooterRes from "../../controls/layout/footer/FooterRes";
import useGetDetailService from "./hook/getDetailService";
import ServiceDetailPage from "./component/ServiceDetail";

export default function ServiceDetailManagement() {
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

	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			<ServiceDetailPage />
			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
