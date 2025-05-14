import Banner from "../../../../models/Banner";

export function convertBannerItems(
	banner: Banner,
	listCountries: {
		lang: string;
		name: string;
	}[]
): {
	action: string;
	path: {
		lang: string;
		value: string;
	}[];
}[] {
	// if (!urls) return [];
	const data = (banner.items || []).map((bannerItem) => {
		if (!bannerItem.path?.length) {
			return {
				action: "",
				path: listCountries.map((item) => ({
					lang: item.lang,
					value: "",
				})),
			};
		} else {
			return {
				action: bannerItem.action || "",
				path: bannerItem.path || [],
			};
		}
	});
	return data;
}
