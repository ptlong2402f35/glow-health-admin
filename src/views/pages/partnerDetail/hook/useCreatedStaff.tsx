import { UseFormReset } from "react-hook-form";
import { WorkTimeType } from "../../../../models/StaffDetail";
import { CreatedStaffPartner, updatePartnerInfo } from "../../../../services/AddPartnerService";
import { updateUserInfo } from "../../../../services/AddUserService";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { useHistory } from "react-router";
import { useContext } from "react";
import { AdminPartnerDetailManagementContext } from "../PartnerDetail";
import { CreatedStaffPartnerHR } from "../../../../services/HRService";
import { AdminPartnerCreatedManagementContext } from "../CreatedParnerDetail";

export default function useCreatedPartner() {
	const { openAlertDialog } = useAlertDialog();
	const history = useHistory();
	const ctx = useContext(AdminPartnerCreatedManagementContext);
	const useUpdatePartner = async (
		birthDay?: string | null | undefined,
		name?: string | null | undefined,
		gender?: Boolean,
		userId?: number | null | undefined,
		address?: string | null | undefined,
		phone?: string | null | undefined,
		placeIssue?: string | null | undefined,
		identifyCard?: string | null | undefined,
		phoneFamily?: string | null | undefined,
		description?: string | null | undefined,
		provinceId?: number | null | undefined,
		districtId?: number | null | undefined,
		communeId?: number | null | undefined,
		avtData?: ImageInputData | null | undefined,
		reload?: () => void,
		setIsDisable?: (val: boolean) => void,
		images?: any,
		long?: number | null | undefined,
		lat?: number | null | undefined,
		storeId?: string | null | undefined,
		workTime?: WorkTimeType[] | null,
		staffType?: number | null,
		reset?: UseFormReset<{
			id: number;
			userId: number;
			name: string;
			birthDay: string;
			gender: Boolean;
			address: string;
			description: string;
			districtName: string;
			districtId: number;
			provinceName: string;
			provinceId: number;
			communeName: string;
			communeId: number;
			phone: string;
			identifyCard: string;
			placeIssue: string;
			phoneFamily: string;
			taxPlaceIssue: string;
			long: number;
			lat: number;
		}>
	) => {
		setIsDisable?.(true);
		let avatarLink;
		if (avtData && !avtData?.isExisted) {
			const avatar = await uploadAvatar(avtData);
			avatarLink = avatar.path;
		}
		let avatarMuti;
		if (images && !images?.isExisted) {
			const avatar = await uploadMutipleAvatars(images);
			avatarMuti = avatar;
		}
		const selectedStoreId = storeId ? parseInt(storeId) : undefined;
		try {

			await CreatedStaffPartner(
				birthDay,
				name,
				gender,
				userId,
				address,
				phone,
				placeIssue,
				identifyCard,
				phoneFamily,
				description,
				provinceId,
				districtId,
				communeId,
				avatarLink,
				avatarMuti,
				long,
				lat,
				selectedStoreId,
				workTime,
				staffType
			);
			reload?.();
			openAlertDialog?.(AlertType.Success, "Cập nhật thông tin thành công!", () => {
				history.push("/technicians-add");
				reset?.({
					districtId: undefined,
					provinceId: undefined,
					communeId: undefined,
					communeName: "",
					userId: undefined,
					id: undefined,
					birthDay: "",
					gender: true,
					placeIssue: "",
					phone: "",
					name: "",
					address: "",
					description: "",
					identifyCard: "",
					phoneFamily: "",
					taxPlaceIssue: "",
					long: 0,
					lat: 0,
				});
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		useUpdatePartner,
	};
}
