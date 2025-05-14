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

export default function useUpdatePriceService(props: { reload: () => void; service?: Service }) {
	const { openAlertDialog } = useAlertDialog();
	const [prices, setPrices] = useState<
		{ unit: string; price: number; id: number; itemId?: number; uneditable: boolean }[]
	>([]);
	const doUpdate = async (
		id: number | null | undefined,
		name: string,
		code: string,
		price: string,
		unit: string,
		serviceGroup: string | null | undefined,
		imageUrl: ImageInputData | null | undefined,
		images: any | null | undefined,
		type: number,
		description: string,
		prices: {
			unit: string;
			price: number;
			id: number;
			itemId?: number | undefined;
			uneditable: boolean;
		}[],
		setIsDisable?: (val: boolean) => void
	) => {
		let avatarLink: string | null | undefined;
		if (imageUrl && !imageUrl?.isExisted) {
			const avatar = await uploadAvatar(imageUrl);
			avatarLink = avatar.path;
		}
		let avatarMuti;
		if (images && !images?.isExisted) {
			const avatar = await uploadMutipleAvatars(images);
			avatarMuti = avatar;
		}
		try {
			setIsDisable?.(true);
			await ProductService.UpdatePriceService(
				id,
				name,
				code,
				price,
				unit,
				serviceGroup,
				avatarLink,
				avatarMuti,
				type,
				description,
				prices
			);
			openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		doUpdate,
		setPrices,
		prices,
	};
}
