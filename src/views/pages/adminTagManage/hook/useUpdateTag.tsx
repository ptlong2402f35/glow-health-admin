import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import Service from "../../../../models/Service";
import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { UpdateStore } from "../../../../services/StoreService";
import { putTag } from "../../../../services/TagService";

export default function useUpdateTag(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const doUpdate = async (id: number, name: string, serviceGroup?: string | null) => {
		try {
			await putTag(id, name, serviceGroup);
			openAlertDialog?.(AlertType.Success, "Update Tag thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		doUpdate,
	};
}
