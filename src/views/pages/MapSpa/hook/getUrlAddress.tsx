import React, { useEffect, useState } from "react";
import {
	UrlAddress,
	UrlAddressHashTags,
	offlineUrlAddress,
	offlineUrlAddressHashTags,
	offlineUrlAddressMap,
} from "../../../../services/StaffService";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function getUrlAddress(props: { link?: string; hashtags?: boolean; apartment?: string; lang?: string }) {
	const { staticContext } = useStaticContext();
	// const [address, setAddress] = useState<StaffAddressPath[]>([]);
	const [address, setAddress] = useState<StaffAddressPath[]>(() => {
		if (!props.hashtags && staticContext?.data?.dataUrlAddressMap) {
			return staticContext.data.dataUrlAddressMap as StaffAddressPath[];
		}
		return [];
	});


	const [backUrl, setBackUrl] = useState<string>(() => {
		if (!props.hashtags && staticContext?.data?.dataUrlMap) {
			return staticContext.data.dataUrlMap;
		}
		return "";
	});

	const [locationType, setLocationType] = useState<string>(() => {
		if (!props.hashtags && staticContext?.data?.dataLocationTypeMap) {
			return staticContext.data.dataLocationTypeMap;
		}
		return "";
	});
	const loadAddress = async () => {
		try {
			if ((window as any)?.__SSR_CONTEXT_DATA?.dataUrlAddressMap) {
				try {
					let res = await offlineUrlAddressMap((window as any)?.__SSR_CONTEXT_DATA.dataUrlAddressMap);
					setAddress(res.data);
					setLocationType(res.locationType);
					setBackUrl(res.backUrl);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataUrlAddressMap = null;
						(window as any).__SSR_CONTEXT_DATA.dataLocationTypeMap = null;
						(window as any).__SSR_CONTEXT_DATA.dataUrlMap = null;
					}
				}
			} else {
				try {
					let res = await UrlAddress(props.link, props.apartment, props.lang);
					setAddress(res.data);
					setLocationType(res.locationType);
					setBackUrl(res.backUrl);
				} finally {
					(window as any).__SSR_CONTEXT_ERROR = null;
					if ((window as any).__SSR_CONTEXT_DATA) {
						(window as any).__SSR_CONTEXT_DATA.dataUrlAddressMap = null;
						(window as any).__SSR_CONTEXT_DATA.dataLocationTypeMap = null;
						(window as any).__SSR_CONTEXT_DATA.dataUrlMap = null;
					}
				}
			}
		} catch {
			setAddress([]);
		}
	};
	const reload = () => {
		loadAddress();
	};
	useEffect(() => {
		if (props.link) {
			reload();
		}
	}, [props.link, props.apartment, props.lang]);
	return {
		address,
		reload,
		backUrl,
		locationType,
	};
}
