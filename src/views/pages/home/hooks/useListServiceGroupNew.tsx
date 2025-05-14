import { useEffect, useState } from "react";
import { ServiceGroup } from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import { withSsrRawData, withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";
import useStaticContext from "../../../hooks/useStaticContext";

export default function useListServiceGrounpNew(props: { lang: string; isTaiNha: boolean }) {
	// const [listAll, setListAll] = useState<ServiceGroup[]>([]);
	const { staticContext } = useStaticContext();
	const [listAll, setListAll] = useState<ServiceGroup[]>(() => {
		if (staticContext?.data?.dataServiceGroup) {
			return staticContext?.data?.dataServiceGroup as ServiceGroup[];
		}
		return [];
	});
	const loadListServiceGrounpAll = async () => {
		try {
			// const data = await ProductService.GetServiceGroupAllNew();
			// let prods = await withSsrRawData<Promise<{ data: ServiceGroup[]; count: number }>>(
			// 	(raw) => ProductService.offlineGetServiceGroupAllNew(raw),
			// 	() => (ProductService.GetServiceGroupAllNew())
			// );

			let prods = await withSsrRawDataMulti<Promise<{ data: ServiceGroup[]; count: number }>>(
				(raw) => ProductService.offlineGetServiceGroupAllNew(raw),
				() => ProductService.GetServiceGroupAllNew(props.lang),
				(raw) => raw?.dataServiceGroup,
				(ctx) => (ctx.dataServiceGroup = null)
			);
			setListAll(prods.data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		if (props.isTaiNha) {
			loadListServiceGrounpAll();
		}
	}, [props.lang]);

	return {
		listAll,
		loadListServiceGrounpAll,
	};
}
