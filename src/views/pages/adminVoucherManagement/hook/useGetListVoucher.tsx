import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import VoucherService from "../../../../services/VoucherService";
import Voucher from "../../../../models/Voucher";

export default function useGetListVoucher(props?: CommonListType) {
	const [listVoucher, setListVoucher] = useState<Voucher[]>([]);
	const [count, setCount] = useState(0);
	const loadListAllUser = async (
		inPage: number,
		inPerPage: number,
		active?: string | undefined,
		keyWord?: string | undefined
	) => {
		props?.onBeginLoad?.();
		try {
			var res = await VoucherService.getListVoucher(inPage, inPerPage, active, keyWord);
			const data = res.data;
			setListVoucher(data);
			setCount(res.count);
		} catch {
			setListVoucher([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListAllUser(props?.page || 1, props?.perPage || 0, props?.filterActive || "", props?.filterKeyword || "");
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage, props?.filterActive, props?.filterKeyword]);
	return {
		listVoucher,
		reload,
		count,
	};
}

export const getFilterVoucherList = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useGetListVoucher(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
