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
import useSubmitUpdateUserAddress, { useSubmitAddUserAddress } from "../hook/useSubmitUpdateUserAddress";
import { ParamsAddUserAddressForm, ParamsUpdateUserAddressForm } from "../../../../services/AllAddressService";
import UpdateUserAddressInfor from "./UpdateUserAddressInfor";
import useGetProvince from "../../partnerDetail/hook/useGetProvince";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import { getCommune, getDistrict } from "../../../../services/AllStaffService";

export default function DialogUserAddressAdd(props: {
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
	const schema = yup.object().shape({
		phone: yup.string().required("Vui lòng nhập số điện thoại"),
		address: yup.string().required("Vui lòng nhập địa chỉ"),
		customerName: yup.string().required("Vui lòng nhập tên khách hàng"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<{
		customerName: string;
		phone: string;
		address: string;
		districtName: string;
		districtId: number;
		provinceName: string;
		provinceId: number;
		communeName: string;
		communeId: number;
		long: number;
		lat: number;
	}>({
		defaultValues: {
			customerName: props.userAddressDetail?.customerName ?? "",
			phone: props.userAddressDetail?.phone ?? "",
			address: props.userAddressDetail?.address ?? "",
			districtId: props.userAddressDetail?.districtId ?? 0,
			communeId: props.userAddressDetail?.communeId ?? 0,
			provinceId: props.userAddressDetail?.provinceId ?? 0,
			long: 0,
			lat: 0,
		},
		resolver: yupResolver(schema),
	});
	const { useAddUserAddress } = useSubmitAddUserAddress({
		reset: reset,
		reload: props.reload,
		setOpenBankInformationDialog: props.setOpenAddUserAddressDialog,
	});
	const onConfirmUpdateChange = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thêm địa chỉ?",
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

	const onConfirmChange = async (data: ParamsAddUserAddressForm) => {
		props.setOpenAddUserAddressDialog(false);
		try {
			await useAddUserAddress(
				props.userId,
				data.customerName || "",
				data.phone || "",
				data.address || "",
				selectedProvinceId || 0,
				selectedDistrictId || 0,
				selectedCommuneId || 0,
				data.long || 0,
				data.lat || 0
			);
		} finally {
		}
	};
	useEffect(() => {
		reset();
		setSelectedProvinceId(0);
		setSelectedDistrictd(0);
		setSelectedCommuneId(0);
	}, [props.openAddUserAddressDialog]);

	const onChangeProvince = async (provinceId: any) => {
		var data = await getDistrict(provinceId);
		setDistrict(data.data);
		setCommune([]);
		reset({
			districtId: undefined,
			communeId: undefined,
		});
	};
	const onChangeDistrict = async (e: any) => {
		var data = await getCommune(e);
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
	return (
		<DialogWrapAddress
			open={props.openAddUserAddressDialog}
			onClose={() => {
				props.setOpenAddUserAddressDialog(false);
			}}
			title="Thêm địa chỉ"
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
						Thêm
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
			/>
		</DialogWrapAddress>
	);
}
