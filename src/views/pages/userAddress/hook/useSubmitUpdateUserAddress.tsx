import { UseFormReset } from "react-hook-form";
import { addUserAddress, deleteUserAddress, updateUserAddress } from "../../../../services/AllAddressService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";

export default function useSubmitUpdateUserAddress(props: {
	setOpenBankInformationDialog: (value: boolean) => void;
	reload?: () => void;
}) {
	const { openAlertDialog } = useAlertDialog();

	const useUpdateUserAddress = async (
		addressId?: number | null | undefined,
		customerName?: string | null | undefined,
		phone?: string | null | undefined,
		address?: string | null | undefined,
		provinceId?: number | null | undefined,
		districtId?: number | null | undefined,
		communeId?: number | null | undefined,
		long?: number | null | undefined,
		lat?: number | null | undefined,
		note?: string | null | undefined,

		setIsDisable?: (val: boolean) => void
	) => {
		setIsDisable?.(true);
		try {
			await updateUserAddress(
				addressId,
				customerName,
				phone,
				address,
				provinceId,
				districtId,
				communeId,
				long,
				lat,
				note
			);

			openAlertDialog?.(AlertType.Success, "Cập nhật thông tin địa chỉ thành công!", () => {
				props.setOpenBankInformationDialog(false);
				props.reload?.();
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		useUpdateUserAddress,
	};
}
export function useSubmitAddUserAddress(props: {
	setOpenBankInformationDialog: (value: boolean) => void;
	reload?: () => void;
	reset: UseFormReset<{
		customerName: string;
		phone: string;
		address: string;
		long: number;
		lat: number;
		districtName: string;
		districtId: number;
		provinceName: string;
		provinceId: number;
		communeName: string;
		communeId: number;
	}>;
}) {
	const { openAlertDialog } = useAlertDialog();

	const useAddUserAddress = async (
		userId?: number | null | undefined,
		customerName?: string | null | undefined,
		phone?: string | null | undefined,
		address?: string | null | undefined,
		provinceId?: number | null | undefined,
		districtId?: number | null | undefined,
		communeId?: number | null | undefined,
		long?: number | null | undefined,
		lat?: number | null | undefined,

		setIsDisable?: (val: boolean) => void
	) => {
		setIsDisable?.(true);
		try {
			await addUserAddress(userId, customerName, phone, address, districtId, communeId, provinceId, long, lat);

			openAlertDialog?.(AlertType.Success, "Thêm thông tin địa chỉ thành công!", () => {
				props.setOpenBankInformationDialog(false);
				props.reload?.();
			});
			props?.reset();
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		useAddUserAddress,
	};
}
