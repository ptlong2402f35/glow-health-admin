import React, { useEffect, useState } from "react";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import UserAddress from "../../../../models/UserAddress";
import { getAllUserAddress } from "../../../../services/AllAddressService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import Staff from "../../../../models/Staff";
import StaffDetail from "../../../../models/StaffDetail";
import { getDistrict, getProvince, getStaffDetail } from "../../../../services/AllStaffService";
import StaffAddressPath from "../../../../models/StaffAddressPath";

export default function useGetDistrict(provinceId: number | null | undefined) {
	const [district, setDistrict] = useState<StaffAddressPath[]>([]);
	const loadDistrict = async () => {
		try {
			var data = await getDistrict(provinceId);
			setDistrict(data.data);
		} catch {
			setDistrict([]);
		}
	};
	useEffect(() => {
		loadDistrict();
	}, []);

	return {
		district,
	};
}
