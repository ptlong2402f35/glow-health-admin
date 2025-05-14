import React from "react";
import {
	StylePagePersonContentInput,
	StylePagePersonContentRightInfov2,
	StylePersonalLabelBank,
	InnerRightContent,
	InnerLeftContent,
	TextError,
	StyleUploadUserImage,
} from "../../personal/component/StylePerson";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { ImageInputData, UploadInputType } from "../../../hooks/useImageUploadInput";
import { useState } from "react";
import useGetInfoHook from "../../personal/hooks/useGetInfoHook";
import { convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import { AvtUserManagementSection } from "../../personal/component/AvtUserManagementSection";

import AvtUserManagementSectionv2 from "../../personal/component/AvtUserManagementSectionv2";
import UserManagement from "../../../../models/UserGlow";
import { getFilterStoreList } from "../../adminStoreManagement/hook/useListStore";
import { PartnerDetailSelect } from "../../partnerDetail/styled/StylePartnerDetail";
import { GenderType, GenderTypeMap } from "../../../../models/Staff";
import { SelectWrapper } from "../../adminProductManagement/styled/ProductManagementStyle";
import useGetCountry from "../hook/useGetCountry";
import { UpdateUserInforWrap } from "../styled/AdminUserManagementStyle";

export default function UpdateUserInfor(props: {
	existedImage?: string | undefined | null;
	avtData: ImageInputData[];
	setAvtData: (imageDatas: ImageInputData[]) => void;
	register: UseFormRegister<{
		email: string;
		phone: string;
		password: string;
		userName: string;
		id: number;
		urlImage: string;
		storeId: number;
	}>;
	errors: FieldErrors<{
		userName: string;
		phone: string;
		password: string;
	}>;
	selectedOwner: string;
	setSelectedOwner: (value: string) => void;
	gender: GenderType;
	setGender: (value: GenderType) => void;
	selectedCountry: string;
	setSelectedCountry: (value: string) => void;
}) {
	const [openImgDialog, setOpenImgDialog] = useState(false);
	const [imageAvt, setImageAvt] = useState("");
	const type = true;
	// const { listStore } = getFilterStoreList();
	// const { country } = useGetCountry();

	return (
		<UpdateUserInforWrap>
			<InnerRightContent>
				<StylePagePersonContentRightInfov2>
					<StylePersonalLabelBank>Tên tài khoản</StylePersonalLabelBank>
					<StylePagePersonContentInput
						placeholder="Nhập Tên tài khoản"
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
					<StylePersonalLabelBank>Chủ cơ sở</StylePersonalLabelBank>
					<PartnerDetailSelect
						value={props.selectedOwner}
						onChange={(e) => props.setSelectedOwner(e.target.value)}>
						<option value="">Hủy chọn</option>
						{listStore.map((store, index) => (
							<option
								key={index}
								value={String(store.id)}>
								{store.name}
							</option>
						))}
					</PartnerDetailSelect>
				</StylePagePersonContentRightInfov2> */}
				<div>
					<SelectWrapper className="width100">
						<StylePersonalLabelBank>Giới tính</StylePersonalLabelBank>
						<select
							value={props.gender}
							onChange={(e) => props.setGender(e.target.value as any)}>
							{Array.from(GenderTypeMap.entries()).map(([type, label]) => (
								<option
									key={type}
									value={type}>
									{label}
								</option>
							))}
						</select>
					</SelectWrapper>
				</div>
				{/* <div>
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
				</div> */}
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
		</UpdateUserInforWrap>
	);
}
