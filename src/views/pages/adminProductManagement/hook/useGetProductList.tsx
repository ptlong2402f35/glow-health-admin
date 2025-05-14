import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";

export default function useListProduct(props?: CommonListType) {
	const [listProduct, setListProduct] = useState<Service[]>([]);
	const [count, setCount] = useState(0);
	const loadListAllUser = async (
		inPage: number,
		inPerPage: number,
		status?: string | undefined,
		keyWord?: string | undefined,
		type?: string | undefined
	) => {
		props?.onBeginLoad?.();
		try {
			var res = await ProductService.getListProducts(inPage, inPerPage, status, keyWord, type);
			const data = res.data;
			setListProduct(data);
			setCount(res.count);
		} catch {
			setListProduct([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListAllUser(
			props?.page || 1,
			props?.perPage || 0,
			props?.filterStates || "",
			props?.filterKeyword || "",
			props?.filterVerification || ""
		);
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage, props?.filterStates, props?.filterKeyword, props?.filterVerification]);
	return {
		listProduct,
		reload,
		count,
	};
}

export const getFilterProductList = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListProduct(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
