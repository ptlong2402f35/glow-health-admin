import React, { useEffect, useState } from "react";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import UserAddress from "../../../../models/UserAddress";
import { getAllUserAddress } from "../../../../services/AllAddressService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import Staff from "../../../../models/Staff";
import StaffDetail from "../../../../models/StaffDetail";
import { getStaffDetail } from "../../../../services/AllStaffService";
import { getStaffDetailHR } from "../../../../services/HRService";

export default function useGetDetailStaff(props:{userId: number, isHR: boolean}) {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();

	const [staffDetail, setStaffDetail] = useState<StaffDetail>();
	const loadDetailStaff = async () => {
		try {
			var data = props.isHR ? await getStaffDetailHR(props.userId) : await getStaffDetail(props.userId);
			setStaffDetail(data);
		} catch {
			setStaffDetail(undefined);
		}
	};
	useEffect(() => {
		loadDetailStaff();
	}, []);

	const reload = async () => {
		openLoadingDialog?.();
		await loadDetailStaff();
		closeLoadingDialog?.();
	};
	return {
		reload,
		staffDetail,
	};
}
