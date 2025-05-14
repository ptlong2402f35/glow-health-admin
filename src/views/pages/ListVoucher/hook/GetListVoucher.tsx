import { useContext, useEffect, useState } from "react";
import { SendOTP } from "../../../../models/Login";
import { UpdateGenerCountry, VerifyOTP } from "../../../../services/LoginService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { PublicComponentsWrapContext } from "../../../controls/public/PublicComponentsWrap";
import { GetListVoucher, GetOrderInfo, PostVoucherUser } from "../../../../services/VoucherService";
import UserGlow, { VoucherUser } from "../../../../models/UserGlow";
import { StaffServicePrice } from "../../../../models/Service";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";

export default function useGetListVoucher(props?: CommonListType) {
	const { openAlertDialog } = useAlertDialog();
	const [listVoucher, setListVoucher] = useState<StaffServicePrice[]>();
	const [count, setCount] = useState(0);
	const doVoucher = async () => {
		try {
			let res = await GetListVoucher(props?.perPage, props?.page);
			setListVoucher(res.data);
			setCount(res.count);
		} catch (error: any) {
			openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	const reload = () => {
		doVoucher();
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage]);
	return {
		doVoucher,
		listVoucher,
		count,
	};
}

export const getFilterVoucherList = () => {
	const hookResult = (props: CommonListType) => useGetListVoucher(props);
	return useCommonListWrap(PERPAGE.PerPage, hookResult);
};
