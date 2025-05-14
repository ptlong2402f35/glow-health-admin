import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import StoreService from "../../../../services/StoreService";
import Store from "../../../../models/Store";

export default function useListStore(props?: CommonListType) {
	const [listStore, setListStore] = useState<Store[]>([]);
	const [count, setCount] = useState(0);
	const loadListStore = async (inPage: number, inPerPage: number) => {
		props?.onBeginLoad?.();
		try {
			var res = await StoreService.getListStore(inPage, inPerPage);
			const data = res.data;
			setListStore(data);
			setCount(res.count);
		} catch {
			setListStore([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListStore(props?.page || 1, props?.perPage || 0);
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage]);
	return {
		listStore,
		reload,
		count,
	};
}

export const getFilterStoreList = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListStore(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
