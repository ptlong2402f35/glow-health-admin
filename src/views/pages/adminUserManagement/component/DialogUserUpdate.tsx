import React, { useEffect, useState } from "react";

import {
	UserFormBankButtonClose,
	UserFormBankButtonCreated,
	UserFormBankButtonCreatedv2,
} from "../../personal/component/StylePerson";

import CreateUserInfor from "./CreateUserInfor";
import { DialogWrapAddUser } from "../../../controls/components/dialogWrap/DialogWrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useLoadingDialog from "../../../hooks/useLoadingDialog";

import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";

import { ParamsAddUserForm, ParamsUpdateUserForm } from "../../../../services/AddUserService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { DialogWrapFootBtn } from "../../../controls/components/dialogWrap/StyledDialogWrap";
import UserGlow from "../../../../models/UserGlow";
import useSubmitUpdateUser, { useAssignOwnerUpdateUser } from "../hook/useSubmitUpdateUser";
import UpdateUserInfor from "./UpdateUserInfor";
import { GenderType } from "../../../../models/Staff";

export default function DialogUserUpdate(props: {
	openAddUserDialog: boolean;
	setOpenAddUserDialog: (value: boolean) => void;
	userDetail?: UserGlow | undefined | null;
	reload: () => void;
}) {
	// const { useConfirmUpdateBank } = useSubmitUpdateBank({
	// 	setOpenAddUserDialog: props.setOpenBankInformationDialog,
	// });
	const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const [selectedOwner, setSelectedOwner] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("");
	const [gender, setGender] = useState(GenderType.Nam);
	const schema = yup.object().shape({
		phone: yup.string().required("Vui lòng nhập số điện thoại"),
		// email: yup.string().required("Vui lòng nhập Email"),
	});

	const { useUpdateUser } = useSubmitUpdateUser({
		existedImage: props.userDetail?.urlImage,
		setOpenBankInformationDialog: props.setOpenAddUserDialog,
		NoPickStore: props.userDetail?.storeId,
	});
	const { useUpdateUserAssign } = useAssignOwnerUpdateUser({
		existedImage: props.userDetail?.urlImage,
		setOpenBankInformationDialog: props.setOpenAddUserDialog,
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
		email: string;
		phone: string;
		password: string;
		userName: string;
		id: number;
		urlImage: string;
		storeId: number;
	}>({
		defaultValues: {
			phone: props.userDetail?.phone ?? " ",
			password: props.userDetail?.password ?? " ",
			email: props.userDetail?.email ?? " ",
			urlImage: props.userDetail?.urlImage ?? " ",
			storeId: props.userDetail?.storeId ?? 0,
		},
		resolver: yupResolver(schema),
	});
	const onConfirmChange = async (data: ParamsUpdateUserForm) => {
		openLoadingDialog?.();
		try {
			await useUpdateUser(
				data.userName || "",
				data.phone || "",
				data.password || "",
				props.userDetail?.id,
				avtData ? avtData[0] : null,
				props.reload,
				selectedOwner,
				gender,
				selectedCountry
			);
			// if (selectedOwner !== props.userDetail?.storeId?.toString()) {
			// 	await useUpdateUserAssign(selectedOwner, props.userDetail?.id, props.reload);
			// }
			if (!selectedOwner && !props.userDetail?.storeId) {
			} else if (selectedOwner === props.userDetail?.storeId?.toString()) {
			} else {
				await useUpdateUserAssign(selectedOwner, props.userDetail?.id, props.reload);
			}
		} finally {
			closeLoadingDialog?.();
		}
	};
	useEffect(() => {
		if (props.userDetail) {
			reset({
				phone: props.userDetail.phone || "",
				password: props.userDetail.password || "",
				userName: props.userDetail.userName || "",
				urlImage: props.userDetail.urlImage || "",
				storeId: props.userDetail.storeId || 0,
			});
		}
		if (props.userDetail && props.userDetail.storeId && props.userDetail.storeOwner) {
			setSelectedOwner(props.userDetail?.storeId.toString());
		} else {
			setSelectedOwner("");
		}
		setAvtData(convertUrlsToImageDatas([props.userDetail?.urlImage || ""]));

		setGender(props.userDetail?.gender || GenderType.Nam);
		setSelectedCountry(props.userDetail?.countryId || "");
	}, [props.userDetail]);

	return (
		<DialogWrapAddUser
			open={props.openAddUserDialog}
			onClose={() => {
				props.setOpenAddUserDialog(false);
			}}
			title="Cập nhật tài khoản"
			actions={
				<>
					<UserFormBankButtonClose
						onClick={() => {
							props.setOpenAddUserDialog(false);
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
			<UpdateUserInfor
				existedImage={props.userDetail?.urlImage}
				avtData={avtData}
				setAvtData={setAvtData}
				register={register}
				errors={errors}
				setSelectedOwner={setSelectedOwner}
				selectedOwner={selectedOwner}
				setGender={setGender}
				gender={gender}
				setSelectedCountry={setSelectedCountry}
				selectedCountry={selectedCountry}
			/>
		</DialogWrapAddUser>
	);
}
