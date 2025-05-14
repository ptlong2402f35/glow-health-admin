import React from "react";
import {
	StylePagePersonContentInput,
	StylePagePersonContentRightInfov2,
	StylePersonalLabelBank,
	InnerRightContent,
	InnerLeftContent,
	TextError,
	StyleUploadUserImage,
	CreatedUsetInnerRightContent,
} from "../../personal/component/StylePerson";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { ImageInputData, UploadInputType } from "../../../hooks/useImageUploadInput";
import { useState } from "react";
import useGetInfoHook from "../../personal/hooks/useGetInfoHook";
import { convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import { AvtUserManagementSection } from "../../personal/component/AvtUserManagementSection";

import AvtUserManagementSectionv2 from "../../personal/component/AvtUserManagementSectionv2";
import UserManagement from "../../../../models/UserGlow";
import { GenderType, GenderTypeMap } from "../../../../models/Staff";
import { SelectWrapper } from "../../adminProductManagement/styled/ProductManagementStyle";
import { PartnerDetailSelect, GenderDetailSelect } from "../../partnerDetail/styled/StylePartnerDetail";
import useGetCountry from "../hook/useGetCountry";

export default function CreateUserInfor(props: {
	existedImage?: string | undefined | null;
	avtData: ImageInputData[];
	setAvtData: (imageDatas: ImageInputData[]) => void;
	register: UseFormRegister<{
		// email: string;
		phone: string;
		userName: string;
		// name: string;
		password: string;
		urlImage: string;
	}>;
	errors: FieldErrors<{
		// email: string;
		// userName: string;
		// name: string;
		phone: string;
		password: string;
	}>;
	gender: GenderType;
	setGender: (value: GenderType) => void;
	selectedCountry: string;
	setSelectedCountry: (value: string) => void;
}) {
	const [openImgDialog, setOpenImgDialog] = useState(false);
	const [imageAvt, setImageAvt] = useState("");
	const type = true;
	// const { country } = useGetCountry();

	return (
		<CreatedUsetInnerRightContent>
			<InnerRightContent>
				<StylePagePersonContentRightInfov2>
					<StylePersonalLabelBank>Tên Đăng Nhập</StylePersonalLabelBank>
					<StylePagePersonContentInput
						placeholder="Nhập tên Đăng Nhập"
						{...props.register("userName")}
					/>
					<TextError>{props.errors.password?.message}</TextError>
				</StylePagePersonContentRightInfov2>
				<StylePagePersonContentRightInfov2>
					<StylePersonalLabelBank>Số điện thoại</StylePersonalLabelBank>
					<StylePagePersonContentInput
						placeholder="Nhập số điện thoại"
						{...props.register("phone")}
					/>
					<TextError>{props.errors.phone?.message}</TextError>
				</StylePagePersonContentRightInfov2>
				<StylePagePersonContentRightInfov2>
					<StylePersonalLabelBank>Mật khẩu</StylePersonalLabelBank>
					<StylePagePersonContentInput
						placeholder="Nhập mật khẩu"
						{...props.register("password")}
					/>
					<TextError>{props.errors.password?.message}</TextError>
				</StylePagePersonContentRightInfov2>
				{/* <StylePagePersonContentRightInfov2>
					<StylePersonalLabelBank>Email</StylePersonalLabelBank>
					<StylePagePersonContentInput
						placeholder="Nhập Email"
						{...props.register("email")}
					/>
					<TextError>{props.errors.password?.message}</TextError>
				</StylePagePersonContentRightInfov2>
				<StylePagePersonContentRightInfov2>
					<StylePersonalLabelBank>Họ Tên</StylePersonalLabelBank>
					<StylePagePersonContentInput
						placeholder="Nhập Họ Tên"
						{...props.register("name")}
					/>
					<TextError>{props.errors.password?.message}</TextError>
				</StylePagePersonContentRightInfov2> */}
				<StylePagePersonContentRightInfov2>
					<StylePersonalLabelBank>Giới tính</StylePersonalLabelBank>
					<GenderDetailSelect
						value={props.gender}
						onChange={(e) => props.setGender(e.target.value as any)}>
						{Array.from(GenderTypeMap.entries()).map(([type, label]) => (
							<option
								key={type}
								value={type}>
								{label}
							</option>
						))}
					</GenderDetailSelect>
				</StylePagePersonContentRightInfov2>
				{/* <StylePagePersonContentRightInfov2>
					<StylePersonalLabelBank>Quốc tịch</StylePersonalLabelBank>
					<PartnerDetailSelect
						value={props.selectedCountry}
						onChange={(e) => props.setSelectedCountry(e.target.value)}>
						<option value="">Hủy chọn</option>
						{country.map((store, index) => (
							<option
								key={index}
								value={String(store.id)}>
								{store.viName}
							</option>
						))}
					</PartnerDetailSelect>
				</StylePagePersonContentRightInfov2> */}
			</InnerRightContent>

			<InnerLeftContent>
				<StyleUploadUserImage>
					<AvtUserManagementSection
						existedImage={props.existedImage}
						type={type}
						openImgDialog={setOpenImgDialog}
						avtData={props.avtData}
						setAvtData={props.setAvtData}
					/>
				</StyleUploadUserImage>
			</InnerLeftContent>
		</CreatedUsetInnerRightContent>
	);
}
