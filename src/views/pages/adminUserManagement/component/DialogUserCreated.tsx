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

import { ParamsAddUserForm } from "../../../../services/AddUserService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { DialogWrapFootBtn } from "../../../controls/components/dialogWrap/StyledDialogWrap";
import UserGlow from "../../../../models/UserGlow";
import useSubmitUpdateUser from "../hook/useSubmitBank";
import { GenderType } from "../../../../models/Staff";

export default function DialogUserCreated(props: {
	openAddUserDialog: boolean;
	setOpenAddUserDialog: (value: boolean) => void;
	userDetail?: UserGlow | undefined | null;
	reload: () => void;
}) {
	// const { useConfirmUpdateBank } = useSubmitUpdateBank({
	// 	setOpenAddUserDialog: props.setOpenBankInformationDialog,
	// });
	const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const [gender, setGender] = useState(GenderType.Nam);
	const [selectedCountry, setSelectedCountry] = useState("");
	// const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const schema = yup.object().shape({
		phone: yup.string().required("Vui lòng nhập số điện thoại"),
		password: yup.string().required("Vui lòng nhập mật khẩu"),
		// email: yup.string().required("Vui lòng nhập Email"),
	});
	const { useConfirmUpdateUser } = useSubmitUpdateUser({
		setOpenAddUserDialog: props.setOpenAddUserDialog,
	});
	const onConfirmAddChange = async () => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thêm Tài Khoản này?",
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
		// email: string;
		phone: string;
		password: string;
		urlImage: string;
		userName: string;
		// name: string;
	}>({
		defaultValues: {
			phone: "",
			password: "",
			// email: "",
			userName: "",
			// name: "",
			urlImage: "",
		},
		resolver: yupResolver(schema),
	});

	const onConfirmChange = async (data: ParamsAddUserForm) => {
		openLoadingDialog?.();
		try {
			await useConfirmUpdateUser(
				// data.email || "",
				data.phone || "",
				data.password || "",
				data.userName || "",
				// data.name || "",
				avtData ? avtData[0] : null,
				gender || 0,
				selectedCountry || "",
				props.reload
			);
			reset();
			setGender(GenderType.Nam);
			setSelectedCountry("");
		} finally {
			closeLoadingDialog?.();
		}
	};

	return (
		<DialogWrapAddUser
			open={props.openAddUserDialog}
			onClose={() => {
				reset();
				props.setOpenAddUserDialog(false);
			}}
			title="Thêm tài khoản"
			actions={
				<>
					<UserFormBankButtonClose
						onClick={() => {
							reset();
							props.setOpenAddUserDialog(false);
						}}>
						Hủy
					</UserFormBankButtonClose>

					<UserFormBankButtonCreatedv2
						onClick={handleSubmit(onConfirmAddChange)}
						type="submit">
						Lưu
					</UserFormBankButtonCreatedv2>
				</>
			}>
			<CreateUserInfor
				avtData={avtData}
				setAvtData={setAvtData}
				register={register}
				errors={errors}
				setGender={setGender}
				gender={gender}
				setSelectedCountry={setSelectedCountry}
				selectedCountry={selectedCountry}
			/>
		</DialogWrapAddUser>
	);
}
