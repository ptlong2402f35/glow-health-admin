import { useState, useEffect, useRef } from "react";
import { getAllUser } from "../../../../services/AllUserService";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import UserManagement from "../../../../models/UserGlow";

export default function useListUser(props?: CommonListType) {
	const [listUser, setListUser] = useState<UserManagement[]>([]);
	const [count, setCount] = useState(0);
	const loadListAllUser = async (
		inPage: number,
		inPerPage: number,
		status?: number,
		fromDate?: Date,
		toDate?: Date,
		keyWord?: string,
		isBanned?: string,
		store?: string,
		nameKTV?: string,
		lunisolar?: string,
		spam?: string,
		punish?: string
	) => {
		props?.onBeginLoad?.();

		try {
			var data = await getAllUser(
				inPage,
				inPerPage,
				keyWord,
				status,
				fromDate,
				toDate,
				isBanned,
				store,
				nameKTV,
				lunisolar,
				spam,
				punish
			);
			setListUser(data.data);
			setCount(data.count);
		} catch {
			setListUser([]);
			setCount(0);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListAllUser(
			props?.page || 1,
			props?.perPage || 0,
			props?.filterRoleId || undefined,
			props?.filterFromDate || undefined,
			props?.filterToDate || undefined,
			props?.filterKeyword || undefined,
			props?.filterActive || undefined,
			props?.filterStore || undefined,
			props?.filterStates || undefined,
			props?.filterLunisolar || undefined,
			props?.filterSpam || undefined,
			props?.filterPunish || undefined
		);
	};

	useEffect(() => {
		reload();
	}, [
		props?.page,
		props?.filterRoleId,
		props?.filterKeyword,
		props?.filterFromDate,
		props?.filterToDate,
		props?.perPage,
		props?.filterActive,
		props?.filterStore,
		props?.filterStates,
		props?.filterLunisolar,
		props?.filterSpam,
		props?.filterPunish,
	]);
	return {
		listUser,
		count,
		reload,
	};
}

export const getFilterAdminList = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListUser(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
