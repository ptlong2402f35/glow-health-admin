import Banner from "../../../../models/Banner";
import { ImageInputData } from "../../../hooks/useImageUploadInput";

export function convertUrlsToImageDatasBanner(
	banner: Banner,
	listCountries: {
		lang: string;
		name: string;
	}[]
): ImageInputData[][] {
	// if (!urls) return [];
	const data = (banner.items || []).map((bannerItem) => {
		if (!bannerItem.path?.length) {
			return Array(listCountries.length).fill({
				isExisted: false,
				domData: null,
				urlData: null,
			});
		} else {
			return bannerItem.path.map((path) => ({
				isExisted: true,
				domData: null,
				urlData: path.value,
			}));
		}
	});
	return data;
}
