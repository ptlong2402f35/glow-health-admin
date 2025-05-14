import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { defaultUserAddress } from "../../../../services/AllAddressService";

export default function useConfirmDefaultAddress(props: { id: number | null | undefined; reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const onDefaultAddress = async () => {
		try {
			await defaultUserAddress(props.id);
			openAlertDialog?.(AlertType.Success, "Đặt địa chỉ mặc định thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		onDefaultAddress,
	};
}
