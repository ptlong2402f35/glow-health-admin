import React, { useEffect, useState } from "react";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import UserAddress from "../../../../models/UserAddress";
import { getAllUserAddress } from "../../../../services/AllAddressService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";

export default function useListUserAddress(userId: number) {
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();

	const [listUserAddress, setListUserAddress] = useState<UserAddress[]>([]);
	const loadListAllUserAddress = async () => {
		try {
			var data = await getAllUserAddress(userId);
			setListUserAddress(data.data);
		} catch {
			setListUserAddress([]);
		}
	};
	useEffect(() => {
		loadListAllUserAddress();
	}, []);

	const reload = async () => {
		openLoadingDialog?.();
		await loadListAllUserAddress();
		closeLoadingDialog?.();
	};
	return {
		reload,
		listUserAddress,
	};
}
