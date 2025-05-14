import React, { useEffect, useState } from "react";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import UserAddress from "../../../../models/UserAddress";
import { getAllUserAddress } from "../../../../services/AllAddressService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import Staff from "../../../../models/Staff";
import StaffDetail from "../../../../models/StaffDetail";
import { getProvince, getStaffDetail } from "../../../../services/AllStaffService";
import StaffAddressPath from "../../../../models/StaffAddressPath";

export default function useGetProvince() {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const [province, setProvince] = useState<StaffAddressPath[]>([]);
	const loadProvince = async () => {
		try {
			var data = await getProvince();
			setProvince(data.data);
		} catch {
			setProvince([]);
		}
	};
	useEffect(() => {
		loadProvince();
	}, []);

	return {
		province,
	};
}
