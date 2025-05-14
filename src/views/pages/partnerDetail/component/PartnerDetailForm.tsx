import React, { useEffect, useState } from "react";
import StaffDetail, { WorkTimeType } from "../../../../models/StaffDetail";
import { UseFormRegister, useForm } from "react-hook-form";
import { Grid, InputLabel, MenuItem } from "@material-ui/core";
import { PageCenter, PageWrap } from "../../../controls/components/form/Page";
import {
	DivUserFormBankButtonCreated,
	StylePagePersonContentInput,
	StylePagePersonContentTextArea,
	StylePersonalLabelBank,
	StyleUploadUserImage,
	UserFormBankButtonCreated,
	UserFormBankButtonCreatedRes,
} from "../../personal/component/StylePerson";
import Select, { SelectOptionType } from "react-select";
import { SmSelectSearchBox } from "../../../controls/components/selectSearchBox/SelectSearchBox";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import useSubmitUpdatePartner from "../hook/useSubmitUpdateStaff";
import { ParamsUpdatePartnerForm } from "../../../../services/AddPartnerService";
import {
	GridPartner,
	PartnerDetailFormMainWrap,
	PartnerDetailSelect,
	StylePartnerSelectField,
	StyledLinkDescriptionLang,
} from "../styled/StylePartnerDetail";
import StaffAddressPath from "../../../../models/StaffAddressPath";
import useGetDistrict from "../hook/useGetDistrict";
import { number } from "yup";
import { getCommune, getDistrict } from "../../../../services/AllStaffService";
import ProvinceSection from "./ProvinceSection";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import { AvtUserManagementSection } from "../../personal/component/AvtUserManagementSection";
import ServicePersonal from "../../personal/component/ServicePersonal";
import { AvatarServicePersonalMulti } from "../../personal/component/AvatarServicePersonal";
import { PersonalMargin } from "../../personal/styled/StylePersonal";
import useGetProvince from "../hook/useGetProvince";
import { getFilterStoreList } from "../../adminStoreManagement/hook/useListStore";
import { PersonalReview } from "../../personal/component/PersonalReviewSection";
import { Image } from "../../../../models/Service";
import WorkTimeSection from "./WorkTimeSection";
import { StaffType, StaffTypeMap, ValidateStatusType } from "../../../../models/Staff";
import ErrorBoundary from "../../../../utils/ErrorBoundary";
import { AdminOrderManagementStoreControl } from "../../adminOrderManagement/AdminOrderManagementFilterStore";
import { Link } from "react-router-dom";
import useUpdateBusytaff from "../../adminPartnerManagement/hook/useBusyStaff";
import useVerification from "../../adminPartnerManagement/hook/useVerification";
import TagsSection from "./TagSection";

export const StaffTypeList = [
	{ label: StaffTypeMap.get(StaffType.Individual), value: StaffType.Individual.toString() },
	{ label: StaffTypeMap.get(StaffType.StoreMember), value: StaffType.StoreMember.toString() },
];

export default function PartnerDetailForm(props: {
	userId?: number | undefined | null;
	staffDetail?: StaffDetail | undefined | null;
	avtData: ImageInputData[];
	reload: () => void;
	avtMultiData: ImageInputData[];
	images: Image[];
	identifyCard: string;
	imagesSelf: ImageInputData[];
	imagesIdentityOld: Image[];
	imagesIdentify: ImageInputData[];
	imagesCertificateOld: Image[];
	imagesCertificate: ImageInputData[];
	linkWebsite: string;
	linkFacebook: string;
	linkYoutube: string;
	linkTiktok: string;
	linkInstagram: string;
	linkYoutubeView: string;
	identifyName: string;
	identifyBirthday: string;
	identifyAddress: string;
	dateOfIssueIdentify: string;
	placeOfIssueIdentify: string;
	isHR:boolean;
}) {
	const { province } = useGetProvince();
	const [district, setDistrict] = useState<StaffAddressPath[]>([]);
	const [commune, setCommune] = useState<StaffAddressPath[]>([]);
	const { useUpdatePartner } = useSubmitUpdatePartner({ existedImage: props.staffDetail?.user?.urlImage });
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	// const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(
	// 	convertUrlsToImageDatas(props.staffDetail?.images?.map((image) => image?.path || "").filter((val) => val) || [])
	// );
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
			districtId: props.staffDetail?.districtId ?? undefined,
			provinceId: props.staffDetail?.provinceId ?? undefined,
			communeId: props.staffDetail?.communeId ?? undefined,
			communeName: props.staffDetail?.commune?.name ?? " ",
			userId: props.staffDetail?.userId,
			id: props.staffDetail?.id,
			birthDay: props.staffDetail?.birthDay ?? "",
			gender: props.staffDetail?.gender ?? true,
			placeIssue: props.staffDetail?.placeIssue ?? "",
			phone: props.staffDetail?.user?.phone ?? "",
			name: props.staffDetail?.name ?? "",
			address: props.staffDetail?.address ?? "",
			description: props.staffDetail?.description ?? "",
			identifyCard: props.staffDetail?.identifyCard ?? "",
			phoneFamily: props.staffDetail?.phoneFamily ?? "",
			taxPlaceIssue: props.staffDetail?.taxPlaceIssue ?? " ",
			long: props.staffDetail?.coordinate?.coordinates?.[0] ?? 0,
			lat: props.staffDetail?.coordinate?.coordinates?.[1] ?? 0,
		},
	});

	const onConfirmChange = async (data: ParamsUpdatePartnerForm) => {
		openLoadingDialog?.();
		try {
			await useUpdatePartner(
				data.birthDay || "",
				data.name || "",
				data.gender,
				props.staffDetail?.userId,
				props.userId,
				data.address,
				data.phone,
				data.placeIssue,
				props.identifyCard,
				data.phoneFamily,
				data.description,
				selectedProvinceId,
				selectedDistrictId,
				selectedCommuneId,
				props.avtData[0],
				props.reload,
				undefined,
				props.avtMultiData,
				data.long || 0,
				data.lat || 0,
				selectedOwner,
				props.images,
				workTime,
				staffType,
				props.imagesSelf[0],
				props.imagesIdentityOld,
				props.imagesIdentify,
				props.imagesCertificateOld,
				props.imagesCertificate,
				props.linkWebsite,
				props.linkFacebook,
				props.linkYoutube,
				props.linkTiktok,
				props.linkInstagram,
				props.linkYoutubeView,
				props.identifyName,
				props.identifyBirthday,
				props.identifyAddress,
				props.dateOfIssueIdentify,
				props.placeOfIssueIdentify,
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

	useEffect(() => {
		if (props.staffDetail?.province?.id) {
			onChangeProvince(props.staffDetail?.province?.id);
			if (props.staffDetail?.district?.id) {
				onChangeDistrict(props.staffDetail?.district?.id);
			}
		}
		if (props.staffDetail && props.staffDetail.storeId) {
			setSelectedOwner(props.staffDetail?.storeId.toString());
		} else {
			setSelectedOwner("");
		}
	}, []);
	useEffect(() => {
		setSelectedCommuneId(props.staffDetail?.communeId || 0);
		setSelectedDistrictd(props.staffDetail?.districtId || 0);
		setSelectedProvinceId(props.staffDetail?.provinceId || 0);
		setWorkTime(
			props.staffDetail?.workTime || [
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
			]
		);
		setStaffType(props.staffDetail?.staffRole || 0);
	}, [props.staffDetail]);
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
	const { doVerification } = useVerification({ reload: props.reload });
	return (
		<PageWrap>
			<PageCenter>
				<>
					<UserFormBankButtonCreated
						onClick={handleSubmit(onConfirmUpdateChange)}
						type="submit">
						Cập nhật
					</UserFormBankButtonCreated>
					<Grid
						container
						spacing={4}
						style={{ margin: "0", width: "100%" }}>
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
						{/* <GridPartner
							item
							xs={12}
							md={4}>
							<StylePersonalLabelBank>Ngày sinh</StylePersonalLabelBank>
							<StylePagePersonContentInput
								type="Date"
								{...register("birthDay")}
							/>
						</GridPartner> */}
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
						{/* <GridPartner
							item
							xs={12}>
							<ProvinceSection
								register={register}
								province={province}
								district={district}
								commune={commune}
								provinceId={selectedProvinceId}
								districtId={selectedDistrictId}
								communeId={selectedCommuneId}
								onChangeDistrict={handleDistrictChange}
								onChangeProvince={handleProvinceChange}
								handleCommuneChange={handleCommuneChange}
							/>
						</GridPartner> */}

					
						<GridPartner
							item
							xs={12}
							md={5}>
							<StylePersonalLabelBank>
								Chủ cơ sở ({props.staffDetail?.store?.name || "--"})
							</StylePersonalLabelBank>
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
					<DivUserFormBankButtonCreated>
						<UserFormBankButtonCreatedRes
							onClick={handleSubmit(onConfirmUpdateChange)}
							type="submit">
							Cập nhật
						</UserFormBankButtonCreatedRes>
						<UserFormBankButtonCreatedRes
							onClick={() =>
								doVerification(
									props.staffDetail?.id || 0,
									props.staffDetail?.validateStatus === ValidateStatusType.Verification ? 1 : 3
								)
							}>
							{props.staffDetail?.validateStatus === ValidateStatusType.Verification
								? "Đã xác minh"
								: "Chưa xác minh"}
						</UserFormBankButtonCreatedRes>
					</DivUserFormBankButtonCreated>
					{/* <ErrorBoundary>
						<WorkTimeSection
							onChange={setWorkTime}
							workTime={workTime}
						/>
					</ErrorBoundary> */}
					{/* <ErrorBoundary>
						<TagsSection
							id={props.staffDetail?.id}
							listTags={props.staffDetail?.tags||[]}
							reload={props.reload}

						/>
					</ErrorBoundary> */}
					<ServicePersonal
						reload={props.reload}
						staffDetail={props.staffDetail}
					/>
				</>
				<PersonalMargin></PersonalMargin>
				{/* <AvatarServicePersonalMulti
					type={true}
					avtMultiData={avtMultiData}
					setAvtMultiData={setAvtMultiData}
					openImgDialog={setOpenImgMultiDialog}
				/> */}
				{!props.isHR && 
				<PersonalReview staffDetail={props.staffDetail} />
				}
			</PageCenter>
		</PageWrap>
	);
}
