import React, { useEffect, useState } from "react";
import StaffDetail, { WorkTimeType } from "../../../../models/StaffDetail";
import { UseFormRegister, useForm } from "react-hook-form";
import { Grid, InputLabel, MenuItem } from "@material-ui/core";
import { PageCenter, PageWrap } from "../../../controls/components/form/Page";
import {
	StylePagePersonContentInput,
	StylePagePersonContentTextArea,
	StylePersonalLabelBank,
	UserFormBankButtonCreated,
	UserFormBankButtonCreatedRes,
} from "../../personal/component/StylePerson";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import { ParamsUpdatePartnerForm } from "../../../../services/AddPartnerService";
import {
	GridPartner,
	PartnerDetailSelect,
	PartnerPageCenter,
	StylePartnerSelectField,
} from "../styled/StylePartnerDetail";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import { getCommune, getDistrict } from "../../../../services/AllStaffService";
import ProvinceSection from "./ProvinceSection";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import { AvatarServicePersonalMulti } from "../../personal/component/AvatarServicePersonal";
import { PersonalMargin } from "../../personal/styled/StylePersonal";
import useGetProvince from "../hook/useGetProvince";
import useCreatedPartner from "../hook/useCreatedStaff";
import { getFilterStoreList } from "../../adminStoreManagement/hook/useListStore";
import useCheckCreated from "../hook/useCheckCreated";
import WorkTimeSection from "./WorkTimeSection";
import { StaffType, StaffTypeMap } from "../../../../models/Staff";
import { StaffTypeList } from "./PartnerDetailForm";
import ErrorBoundary from "../../../../utils/ErrorBoundary";
import { AdminOrderManagementStoreControl } from "../../adminOrderManagement/AdminOrderManagementFilterStore";

export default function CreatedPartnerDetailForm(props: {
	userId?: number | undefined | null;
	avtData: ImageInputData[];
	avtMultiData: ImageInputData[];
}) {
	const { province } = useGetProvince();
	const [district, setDistrict] = useState<StaffAddressPath[]>([]);
	const [commune, setCommune] = useState<StaffAddressPath[]>([]);
	const { useUpdatePartner } = useCreatedPartner();
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	// const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(convertUrlsToImageDatas([]));
	// const [openImgMultiDialog, setOpenImgMultiDialog] = useState(false);
	const [selectedOwner, setSelectedOwner] = useState("");
	// const { listStore } = getFilterStoreList();
	const [selectedProvinceId, setSelectedProvinceId] = useState<number | null>(null);
	const [selectedDistrictId, setSelectedDistrictd] = useState<number | null>(null);
	const [selectedCommuneId, setSelectedCommuneId] = useState<number | null>(null);
	const [workTime, setWorkTime] = useState<WorkTimeType[]>([
		{
			date: {
				from: "",
				to: "",
			},
			hour: {
				from: "",
				to: "",
			},
		},
	]);
	const [staffType, setStaffType] = useState<number>(0);

	const { useCheck } = useCheckCreated();
	const onConfirmUpdateChange = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn Thêm?",
			() => {},
			() => {
				handleSubmit(onCheck)();
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
	}>({
		defaultValues: {
			districtId: undefined,
			provinceId: undefined,
			communeId: undefined,
			communeName: "",
			userId: undefined,
			id: undefined,
			birthDay: "",
			gender: 1,
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
		},
	});

	const onCheck = async (data: ParamsUpdatePartnerForm) => {
		openLoadingDialog?.();
		try {
			await handleSubmit(onConfirmChange)();
		} finally {
			closeLoadingDialog?.();
		}
	};

	const onCheckChange = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Đã có Người Dùng sử dụng số điện thoại này",
			() => {},
			() => {
				handleSubmit(onConfirmChange)();
			},
			undefined,
			{
				declineText: "Quay lại",
				acceptText: "Thêm",
			}
		);
	};
	const onCheckKTVChange = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Đã có Kỹ Thuật Viên sử dụng số điện thoại này",
			() => {},
			() => {
				handleSubmit(onConfirmChange)();
			},
			undefined,
			{
				declineText: "Quay lại",
				acceptText: "Thêm",
			}
		);
	};
	const onConfirmChange = async (data: ParamsUpdatePartnerForm) => {
		openLoadingDialog?.();
		try {
			await useUpdatePartner(
				data.birthDay || "",
				data.name || "",
				data.gender,
				data.userId,
				data.address,
				data.phone,
				data.placeIssue,
				data.identifyCard,
				data.phoneFamily,
				data.description,
				selectedProvinceId,
				selectedDistrictId,
				selectedCommuneId,
				props.avtData[0],
				undefined,
				undefined,
				props.avtMultiData,
				data.long || 0,
				data.lat || 0,
				selectedOwner,
				workTime,
				staffType,
				reset
			);
		} finally {
			closeLoadingDialog?.();
		}
	};

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

	return (
		<PageWrap>
			<PartnerPageCenter>
				<>
					<UserFormBankButtonCreated
						onClick={handleSubmit(onConfirmUpdateChange)}
						type="submit">
						Thêm
					</UserFormBankButtonCreated>
					<Grid
						container
						spacing={4}>
						<GridPartner
							item
							xs={12}
							md={5}>
							<StylePersonalLabelBank>Họ và tên nhân viên</StylePersonalLabelBank>
							<StylePagePersonContentInput
								placeholder="Nhập họ tên"
								{...register("name")}
							/>
						</GridPartner>
	
						<GridPartner
							item
							xs={12}
							md={3}>
							<StylePersonalLabelBank>Giới tính</StylePersonalLabelBank>
							<StylePartnerSelectField {...register("gender")}>
								<option value="2">Nữ</option>
								<option value="1">Nam</option>
							</StylePartnerSelectField>
						</GridPartner>
						<GridPartner
							item
							xs={12}
							md={9}>
							<StylePersonalLabelBank>Địa chỉ hiện tại</StylePersonalLabelBank>
							<StylePagePersonContentInput
								placeholder="Địa chỉ hiện tại"
								{...register("address")}
							/>
						</GridPartner>
						<GridPartner
							item
							xs={12}
							md={3}>
							<StylePersonalLabelBank>Số điện thoại</StylePersonalLabelBank>
							<StylePagePersonContentInput
								placeholder="Nhập số điện thoại"
								{...register("phone")}
							/>
						</GridPartner>
					
						<GridPartner
							item
							xs={12}
							md={5}>
							<StylePersonalLabelBank>Thuộc cơ sở</StylePersonalLabelBank>
							<AdminOrderManagementStoreControl
								filterStaffId={parseInt(selectedOwner || "0")}
								doChangeStaffId={setSelectedOwner}
							/>
						</GridPartner>
						<GridPartner
							item
							xs={12}
							md={3}>
							<StylePersonalLabelBank>Kinh độ</StylePersonalLabelBank>
							<StylePagePersonContentInput
								placeholder="Nhập CCCD"
								{...register("long")}
							/>
						</GridPartner>
						<GridPartner
							item
							xs={12}
							md={3}>
							<StylePersonalLabelBank>Vĩ độ</StylePersonalLabelBank>
							<StylePagePersonContentInput
								placeholder="Nhập CCCD"
								{...register("lat")}
							/>
						</GridPartner>
						<GridPartner
							item
							xs={12}
							md={5}>
							<StylePersonalLabelBank>Phân loại KTV</StylePersonalLabelBank>
							<PartnerDetailSelect
								value={staffType}
								onChange={(e) => setStaffType(parseInt(e.target.value))}>
								{StaffTypeList.map((staffType, index) => (
									<option
										key={index}
										value={String(staffType.value)}>
										{staffType.label}
									</option>
								))}
							</PartnerDetailSelect>
						</GridPartner>
						<GridPartner
							item
							xs={12}>
							<StylePersonalLabelBank>Giới thiệu bản thân</StylePersonalLabelBank>
							<StylePagePersonContentTextArea
								placeholder="Giới thiệu bản thân"
								{...register("description")}
							/>
						</GridPartner>
					</Grid>
					<UserFormBankButtonCreatedRes
						onClick={handleSubmit(onConfirmUpdateChange)}
						type="submit">
						Thêm
					</UserFormBankButtonCreatedRes>
					
				</>
				<PersonalMargin></PersonalMargin>
			</PartnerPageCenter>
		</PageWrap>
	);
}
