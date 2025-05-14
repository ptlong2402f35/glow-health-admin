import React, { useEffect } from "react";
import { HomeRes, HomeWeb, HomeWrapper, HomeWrapperv2 } from "../home/styled/HomeStyles";
import HomeIntroMenu from "../home/HomeIntroMenu";
import { StyledContentWrap } from "../../controls/layout/content/StyledContent";
import Footerv2 from "../../controls/layout/footer/Footerv2";
import IntroMenuv2, { IntroMenuv3 } from "../home/IntrolMenuv2";
import PartnerMain from "./PartnerMain";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import FooterRes from "../../controls/layout/footer/FooterRes";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";

export default function Partner() {
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
			<PartnerMain />
			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
