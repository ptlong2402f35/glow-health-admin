import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import TransactionService from "../../../../services/TransactionService";
import Transaction from "../../../../models/Transaction";

export default function useListTransaction(props?: CommonListType, accountant?: boolean) {
	const [listTransaction, setListTransaction] = useState<Transaction[]>([]);
	const [count, setCount] = useState(0);
	const [countTotal, setCountTotal] = useState(0);
	const loadListAllTransaction = async (
		inPage: number,
		inPerPage: number,
		keyWord?: string | undefined,
		fromDate?: Date | undefined,
		toDate?: Date | undefined
	) => {
		props?.onBeginLoad?.();
		try {
			const startOfDayFromDate = fromDate ? new Date(fromDate.setHours(0, 0, 0, 0)) : undefined;
			const endOfDayToDate = toDate ? new Date(toDate.setHours(23, 59, 59, 999)) : new Date();
			var res =  accountant ? ( await TransactionService.getListTransactionAccountant(
				inPage,
				inPerPage,
				keyWord,
				startOfDayFromDate,
				endOfDayToDate,
			)) : (
				await TransactionService.getListTransaction(
					inPage,
					inPerPage,
					keyWord,
					startOfDayFromDate,
					endOfDayToDate,
				)
			);
			const data = res.data;
			setListTransaction(data);
			setCount(res.count);
			setCountTotal(res.countTotal);
		} catch {
			setListTransaction([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListAllTransaction(
			props?.page || 1,
			props?.perPage || 0,
			props?.filterKeyword || "",
			props?.filterFromDate || undefined,
			props?.filterToDate || undefined
		);
	};
	useEffect(() => {
		reload();
	}, [
		props?.page,
		props?.perPage,
		props?.filterKeyword,
		props?.filterFromDate || undefined,
		props?.filterToDate || undefined,
	]);
	return {
		listTransaction,
		reload,
		count,
		countTotal,
	};
}

export const getFilterTransactionList = (prop:{accountant?: boolean}) => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListTransaction(props, prop.accountant);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
