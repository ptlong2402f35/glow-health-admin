import { useState, useEffect, useRef, useContext } from "react";
import { getAllUser } from "../../../../services/AllUserService";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import UserManagement from "../../../../models/UserGlow";
import Staff from "../../../../models/Staff";
import { getAllStaff } from "../../../../services/AllStaffService";
import { getDescriptionLangStaff } from "../../../../services/StaffService";
import { DescriptionLang } from "../DescriptionLang/DescriptionLangDialog";
import { AdminPartnerManagementContext } from "../PartnerManagement";
import { getDescriptionLangStaffHR } from "../../../../services/HRService";

export default function useDescriptionLang(props: { id?: number,isHR?:boolean }) {
	const [description, setDescription] = useState<DescriptionLang[]>([]);
	const ctx = useContext(AdminPartnerManagementContext);
	const loadListAllUser = async () => {
		try {
			
			var data = (ctx?.isHR|| props.isHR) ?  await getDescriptionLangStaffHR(props.id) :await getDescriptionLangStaff(props.id) ;
			setDescription(data);
		} catch {
			setDescription([]);
		}
	};
	const reload = () => {
		loadListAllUser();
	};
	useEffect(() => {
		reload();
	}, []);
	return {
		description,
		reload,
	};
}
