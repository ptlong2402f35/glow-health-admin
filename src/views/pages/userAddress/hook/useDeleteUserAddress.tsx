import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { deleteUserAddress } from "../../../../services/AllAddressService";

export default function useDeleteUserAddress(props: { id: number | null | undefined; reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const onDeleteAddress = async () => {
		try {
			await deleteUserAddress(props.id);
			openAlertDialog?.(AlertType.Success, "Xóa địa chỉ thành công!", () => {
				props.reload();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		}
	};

	return {
		onDeleteAddress,
	};
}
