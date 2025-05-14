import { useState, useEffect } from "react";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import BannerService from "../../../../services/BannerService";
import Banner from "../../../../models/Banner";

export default function useListBanner(props?: CommonListType) {
	const [listBanner, setListBanner] = useState<Banner[]>([]);
	const loadListBanner = async () => {
		props?.onBeginLoad?.();
		try {
			var res = await BannerService.getListBanner();
			const data = res.data;
			setListBanner(data);
		} catch {
			setListBanner([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListBanner();
	};
	useEffect(() => {
		reload();
	}, []);
	return {
		listBanner,
		reload,
	};
}
