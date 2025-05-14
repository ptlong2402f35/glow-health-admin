import React, { useEffect, useState } from "react";
import { UrlAddress } from "../../../../services/StaffService";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import { offlineUrlAddress } from "../../../../services/AllAddressService";
// import { UrlAddress } from "../../../../services/AllAddressService";

export default function getUrlAddress(props: { link?: string; apartment?: string; lang: string }) {
	const { staticContext } = useStaticContext();
	const [address, setAddress] = useState<StaffAddressPath[]>(() => {
		if (staticContext?.data?.dataUrlServiceAddress) {
			return staticContext?.data?.dataUrlServiceAddress as StaffAddressPath[];
		}
		return [];
	});

	const [backUrl, setBankUrl] = useState<string>(() => {
		if (staticContext?.data?.dataServiceUrl) {
			return staticContext?.data?.dataServiceUrl;
		}
		return "";
	});

	const [locationType, setLocationType] = useState<string>(() => {
		if (staticContext?.data?.dataLocationServiceType) {
			return staticContext?.data?.dataLocationServiceType;
		}
		return "";
	});
	const loadAddress = async () => {
		try {
			let res = await withSsrRawDataMulti<
				Promise<{ data: StaffAddressPath[]; backUrl: string; locationType: string; count: number }>
			>(
				(raw) => offlineUrlAddress(raw),
				() => UrlAddress(props.link, props.apartment, props.lang),
				(raw) => {
					return !raw?.dataUrlServiceAddress && !raw?.dataLocationServiceType && !raw?.dataServiceUrl
						? null
						: {
								data: raw?.dataUrlServiceAddress,
								locationType: raw?.dataLocationServiceType,
								backUrl: raw?.dataServiceUrl,
						  };
				},
				(ctx) => {
					return {
						data: (ctx.dataUrlServiceAddress = null),
						locationType: (ctx.dataLocationServiceType = null),
						backUrl: (ctx.dataServiceUrl = null),
					};
				}
			);
			setAddress(res.data);
			setLocationType(res.locationType);
			setBankUrl(res.backUrl);
		} catch {
			setAddress([]);
		}
	};
	const reload = () => {
		loadAddress();
	};
	useEffect(() => {
		reload();
	}, [props.link, props.apartment, props.lang]);
	return {
		address,
		reload,
		backUrl,
		locationType,
	};
}
