import { useState, useEffect, useRef } from "react";
import { getAllUser } from "../../../../services/AllUserService";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import UserManagement from "../../../../models/UserGlow";
import Staff from "../../../../models/Staff";
import { getAllStaff } from "../../../../services/AllStaffService";
import { getAllStaffHR } from "../../../../services/HRService";

export default function useListStaff(branch?: boolean,isHR?: boolean, props?: CommonListType) {
	const [listStaff, setListStaff] = useState<Staff[]>([]);
	const [count, setCount] = useState(0);
	const loadListAllUser = async (
		inPage: number,
		inPerPage: number,
		keyWord?: string,
		status?: string | undefined,
		phone?: string,
		provice?: string,
		store?: string,
		online?: string,
		verification?: string,
		identify?: string,
		certificate?: string,
		care?: string,
		punish?: string
	) => {
		props?.onBeginLoad?.();
		try {
			const provinceId = provice ? parseInt(provice) : null;
			const storeId = store ? parseInt(store) : null;
			var data = isHR ? await getAllStaffHR
			(
					inPage,
					inPerPage,
					keyWord,
					status,
					phone,
					provinceId,
					storeId,
					online,
					verification,
					branch,
					identify,
					certificate,
					care,
					punish
				): 
				await getAllStaff(
				inPage,
				inPerPage,
				keyWord,
				status,
				phone,
				provinceId,
				storeId,
				online,
				verification,
				branch,
				identify,
				certificate,
				care,
				punish
			);
			setListStaff(data.data);
			setCount(data.count);
		} catch {
			setListStaff([]);
			setCount(0);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListAllUser(
			props?.page || 1,
			props?.perPage || 0,
			props?.filterKeyword || undefined,
			props?.filterStates || "",
			props?.filterPhone || undefined,
			props?.filterProvice || "",
			props?.filterStore || "",
			props?.filterOnline || "",
			props?.filterVerification || "",
			props?.filterIdentify || "",
			props?.filterCertificate || "",
			props?.filterGlowCare || "",
			props?.filterPunish || undefined
		);
	};
	useEffect(() => {
		reload();
	}, [
		props?.page,
		props?.filterRoleId,
		props?.filterKeyword,
		props?.filterStates,
		props?.filterPhone,
		props?.filterProvice,
		props?.filterStore,
		props?.filterOnline,
		props?.filterVerification,
		props?.filterIdentify,
		props?.filterCertificate,
		props?.filterGlowCare,
		props?.filterPunish,
	]);
	return {
		listStaff,
		count,
		reload,
	};
}

export const getFilterStaffList = (prop: { branch?: boolean,isHR?: boolean }) => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListStaff(prop?.branch, prop?.isHR, props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
