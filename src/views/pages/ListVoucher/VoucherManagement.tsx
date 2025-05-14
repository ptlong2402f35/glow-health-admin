import React, { createContext, useEffect, useRef, useState } from "react";
import useLoadedUser from "../../hooks/auth/useLoadedUser";
import { HomeRes, HomeWeb, HomeWebBottom, HomeWrapperv2 } from "../home/styled/HomeStyles";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import HomeMainV3 from "../home/HomeMainv3";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import HomeMainV4 from "../home/HomeMainv4";
import HomePhone from "../home/HomePhone";
import FooterRes from "../../controls/layout/footer/FooterRes";
import ListVoucher from "./component/ListVoucher";

export const HomeContext = createContext<{
	openDetailDialog: boolean;

	loading: boolean;
	loadMore: () => void;
	isInitLoading: boolean;
	isValidated: boolean | undefined;
} | null>(null);

export default function VoucherManagement() {
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

	const [phoneNumber, setPhoneNumber] = useState("");

	return (
		<HomeWrapperv2>
			<HomeIntroMenuv2 />
			<ListVoucher />

			<HomeWeb>
				<Footerv4 />
			</HomeWeb>
			<HomeRes>
				<FooterRes />
			</HomeRes>
		</HomeWrapperv2>
	);
}
