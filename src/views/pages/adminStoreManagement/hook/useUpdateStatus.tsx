import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { StaffBackToWork } from "../../../../services/StaffService";
import { UpdateStatusStore } from "../../../../services/StoreService";

export default function useStatusStore(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const loadStatus = async (id: number, status: number) => {
		try {
			await UpdateStatusStore(id, status);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		loadStatus,
	};
}
