import { useState, useEffect } from "react";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Banner from "../../../../models/Banner";
import BannerService from "../../../../services/BannerService";
import { withSsrRawData, withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import useStaticContext from "../../../hooks/useStaticContext";

export default function useListBannerView(props: { lang: string; isTaiNha: boolean }) {
	const { staticContext } = useStaticContext();

	const [listBanner, setListBanner] = useState<Banner[]>(() => {
		if (staticContext?.data?.dataBannerView) {
			return staticContext?.data?.dataBannerView as Banner[];
		}
		return [];
	});
	const loadListBanner = async () => {
		try {
			// let prods = await withSsrRawData<Promise<{ data: Banner[]; count: number }>>(
			// 	(raw) => BannerService.offlinegetListBannerView(raw),
			// 	() => (BannerService.getListBannerView())
			// );

			let prods = await withSsrRawDataMulti<Promise<{ data: Banner[]; count: number }>>(
				(raw) => BannerService.offlinegetListBannerView(raw),
				() => BannerService.getListBannerView(props.lang),
				(raw) => raw?.dataBannerView,
				(ctx) => (ctx.dataBannerView = null)
			);

			const data = prods.data;
			setListBanner(data);
		} catch {
			setListBanner([]);
		} finally {
		}
	};
	const reload = () => {
		loadListBanner();
	};
	useEffect(() => {
		if (props.isTaiNha) {
			reload();
		}
	}, [props.lang]);
	return {
		listBanner,
		reload,
	};
}
