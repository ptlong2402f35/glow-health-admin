import React, { useEffect, useState } from "react";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import {
	UserFormBankButtonClose,
	UserFormBankButtonCreated,
	UserFormBankButtonCreatedv2,
} from "../../personal/component/StylePerson";
import { DialogWrapAddUser, DialogWrapAddress } from "../../../controls/components/dialogWrap/DialogWrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { useForm } from "react-hook-form";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import UserAddress from "../../../../models/UserAddress";
import useSubmitUpdateUserAddress from "../hook/useSubmitUpdateUserAddress";
import { ParamsUpdateUserAddressForm } from "../../../../services/AllAddressService";
import UpdateUserAddressInfor from "./UpdateUserAddressInfor";
import useGetProvince from "../../partnerDetail/hook/useGetProvince";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import { getCommune, getDistrict } from "../../../../services/AllStaffService";

export default function DialogUserAddressUpdate(props: {
	userId?: number | undefined | null;
	openAddUserAddressDialog: boolean;
	setOpenAddUserAddressDialog: (value: boolean) => void;
	userAddressDetail?: UserAddress | undefined | null;
	reload: () => void;
}) {
	// const { useConfirmUpdateBank } = useSubmitUpdateBank({
	// 	setOpenAddUserDialog: props.setOpenBankInformationDialog,
	// });
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const { province } = useGetProvince();
	const [district, setDistrict] = useState<StaffAddressPath[]>([]);
	const [commune, setCommune] = useState<StaffAddressPath[]>([]);
	const [selectedProvinceId, setSelectedProvinceId] = useState<number | null>(null);
	const [selectedDistrictId, setSelectedDistrictd] = useState<number | null>(null);
	const [selectedCommuneId, setSelectedCommuneId] = useState<number | null>(null);
	const [note, setNote] = useState<string>(props.userAddressDetail?.note || "");
	const schema = yup.object().shape({
		phone: yup.string().required("Vui lòng nhập số điện thoại"),
		address: yup.string().required("Vui lòng nhập địa chỉ"),
		customerName: yup.string().required("Vui lòng nhập tên khách hàng"),
	});

	const { useUpdateUserAddress } = useSubmitUpdateUserAddress({
		reload: props.reload,
		setOpenBankInformationDialog: props.setOpenAddUserAddressDialog,
	});
	const onConfirmUpdateChange = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn Cập nhật?",
			() => {},
			() => {
				handleSubmit(onConfirmChange)();
			},
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const { openAlertDialog } = useAlertDialog();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<{
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
	}>({
		defaultValues: {
			customerName: props.userAddressDetail?.customerName ?? " ",
			phone: props.userAddressDetail?.phone ?? " ",
			address: props.userAddressDetail?.address ?? " ",
		},
		resolver: yupResolver(schema),
	});

	const onConfirmChange = async (data: ParamsUpdateUserAddressForm) => {
		props.setOpenAddUserAddressDialog(false);
		try {
			await useUpdateUserAddress(
				props.userAddressDetail?.id,
				data.customerName || "",
				data.phone || "",
				data.address || "",
				selectedProvinceId || 0,
				selectedDistrictId || 0,
				selectedCommuneId || 0,
				data.long || 0,
				data.lat || 0,
				note
			);
		} finally {
		}
	};
	useEffect(() => {
		if (props.userAddressDetail) {
			reset({
				customerName: props.userAddressDetail?.customerName ?? "",
				phone: props.userAddressDetail?.phone ?? "",
				address: props.userAddressDetail?.address ?? "",
				long: props.userAddressDetail?.long ?? 0,
				lat: props.userAddressDetail?.lat ?? 0,
			});
		}
		setSelectedCommuneId(props.userAddressDetail?.communeId || 0);
		setSelectedDistrictd(props.userAddressDetail?.districtId || 0);
		setSelectedProvinceId(props.userAddressDetail?.provinceId || 0);
		setNote(props.userAddressDetail?.note || "");
	}, [props.userAddressDetail]);
	const onChangeProvince = async (provinceId: any) => {
		var data = await getDistrict(provinceId);
		setDistrict(data.data);
		setCommune([]);
		reset({
			districtId: undefined,
			communeId: undefined,
		});
	};
	const onChangeDistrict = async (provinceId: any) => {
		var data = await getCommune(provinceId);
		setCommune(data.data);
	};
	const handleDistrictChange = (value: any) => {
		onChangeDistrict(value);
		setSelectedDistrictd(value);
	};
	const handleProvinceChange = (value: any) => {
		setSelectedProvinceId(value);
		onChangeProvince(value);
	};
	const handleCommuneChange = (value: any) => {
		setSelectedCommuneId(value);
	};
	const loadDistrictAndCommune = async (provinceId: number, districtId: number) => {
		try {
			const districtData = await getDistrict(provinceId);
			setDistrict(districtData.data);

			const communeData = await getCommune(districtId);
			setCommune(communeData.data);
		} finally {
		}
	};
	useEffect(() => {
		loadDistrictAndCommune(selectedProvinceId || 0, selectedDistrictId || 0);
	}, [props.openAddUserAddressDialog, selectedProvinceId, selectedDistrictId]);
	return (
		<DialogWrapAddress
			open={props.openAddUserAddressDialog}
			onClose={() => {
				props.setOpenAddUserAddressDialog(false);
			}}
			title="Cập nhật địa chỉ"
			actions={
				<>
					<UserFormBankButtonClose
						onClick={() => {
							props.setOpenAddUserAddressDialog(false);
						}}>
						Hủy
					</UserFormBankButtonClose>

					<UserFormBankButtonCreatedv2
						onClick={handleSubmit(onConfirmUpdateChange)}
						type="submit">
						Cập nhật
					</UserFormBankButtonCreatedv2>
				</>
			}>
			<UpdateUserAddressInfor
				register={register}
				errors={errors}
				province={province}
				district={district}
				commune={commune}
				onChangeDistrict={handleDistrictChange}
				onChangeProvince={handleProvinceChange}
				provinceId={selectedProvinceId}
				districtId={selectedDistrictId}
				communeId={selectedCommuneId}
				handleCommuneChange={handleCommuneChange}
				note={note}
				setNote={setNote}
			/>
		</DialogWrapAddress>
	);
}
