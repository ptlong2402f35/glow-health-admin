import { useState, useEffect, useRef } from "react";
import { getAllUser } from "../../../../services/AllUserService";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import UserManagement, { Country } from "../../../../models/UserGlow";
import { CountryService } from "../../../../services/StaffService";

export default function useGetCountry(props?: CommonListType) {
	const [country, setCountry] = useState<Country[]>([]);
	const loadListCountry = async () => {
		props?.onBeginLoad?.();
		try {
			var data = await CountryService();
			setCountry(data);
		} catch {
			setCountry(data);
			[];
		} finally {
			props?.onEndLoad?.();
		}
	};
	useEffect(() => {
		loadListCountry();
	}, []);

	return {
		country,
	};
}
