import React, { useEffect, useState } from "react";
import {
	UrlAddress,
	UrlAddressHashTags,
	offlineUrlAddress,
	offlineUrlAddressHashTags,
} from "../../../../services/StaffService";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function getUrlAddress(props: { link?: string; hashtags?: boolean; apartment?: string; lang?: string }) {
	const { staticContext } = useStaticContext();
	// const [address, setAddress] = useState<StaffAddressPath[]>([]);
	const [address, setAddress] = useState<StaffAddressPath[]>(() => {
		if (props.hashtags && staticContext?.data?.dataUrlAddressHashTags) {
			return staticContext.data.dataUrlAddressHashTags as StaffAddressPath[];
		}
		if (!props.hashtags && (staticContext?.data?.dataUrlAddress)) {
			return staticContext.data.dataUrlAddress as StaffAddressPath[];
		}
		if (!props.hashtags && (staticContext?.data?.dataUrlAddressMap)) {
			return staticContext.data.dataUrlAddressMap as StaffAddressPath[];
		}
		return [];
	});

	const [backUrl, setBackUrl] = useState<string>(() => {
		if (props.hashtags && staticContext?.data?.dataUrlHashTags) {
			return staticContext.data.dataUrlHashTags;
		}
		if (!props.hashtags && staticContext?.data?.dataUrl) {
			return staticContext.data.dataUrl;
		}
		return "";
	});

	const [locationType, setLocationType] = useState<string>(() => {
		if (props.hashtags && staticContext?.data?.dataLocationTypeHashTags) {
			return staticContext.data.dataLocationTypeHashTags;
		}
		if (!props.hashtags && staticContext?.data?.dataLocationType) {
			return staticContext.data.dataLocationType;
		}
		return "";
	});
	const loadAddress = async () => {
		try {
			// var res = await UrlAddress(link);

			let res = await withSsrRawDataMulti<
				Promise<{ data: StaffAddressPath[]; backUrl: string; locationType: string; count: number }>
			>(
				(raw) => (props.hashtags ? offlineUrlAddressHashTags(raw) : offlineUrlAddress(raw)),
				() =>
					props.hashtags
						? UrlAddressHashTags(props.link, props.apartment, props.lang)
						: UrlAddress(props.link, props.apartment, props.lang),
				(raw) => {
					return props.hashtags
						? !raw?.dataUrlAddressHashTags && !raw?.dataLocationTypeHashTags && !raw?.dataUrlHashTags
							? null
							: {
									data: raw?.dataUrlAddressHashTags,
									locationType: raw?.dataLocationTypeHashTags,
									backUrl: raw?.dataUrlHashTags,
							  }
						: !raw?.dataUrlAddress && !raw?.dataLocationType && !raw?.dataUrl
						? null
						: {
								data: raw?.dataUrlAddress,
								locationType: raw?.dataLocationType,
								backUrl: raw?.dataUrl,
						  };
				},
				(ctx) => {
					return props.hashtags
						? {
								data: (ctx.dataUrlAddressHashTags = null),
								locationType: (ctx.dataLocationTypeHashTags = null),
								backUrl: (ctx.dataUrlHashTags = null),
						  }
						: {
								data: (ctx.dataUrlAddress = null),
								locationType: (ctx.dataLocationType = null),
								backUrl: (ctx.dataUrl = null),
						  };
				}
			);
			setAddress(res.data);
			setLocationType(res.locationType);
			setBackUrl(res.backUrl);
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
