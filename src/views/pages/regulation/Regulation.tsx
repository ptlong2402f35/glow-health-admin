import React, { useEffect } from "react";
import { StyledContentWrap } from "../../controls/layout/content/StyledContent";
import Footerv2 from "../../controls/layout/footer/Footerv2";
import RegulationMain from "./RegulationMain";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import FooterRes from "../../controls/layout/footer/FooterRes";
import { HomeRes, HomeWeb, HomeWrapperv2 } from "../home/styled/HomeStyles";
import { IntroMenuv3 } from "../home/IntrolMenuv2";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import { useParams } from "react-router";
import RegulationMainv2 from "./RegulationMainv2";

export default function Regulation() {
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
	let { lang } = useParams<{ lang: string }>();
	const checkLang = lang || "vi";

	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			{checkLang === "vi" ? <RegulationMainv2 /> : <RegulationMain />}

			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
