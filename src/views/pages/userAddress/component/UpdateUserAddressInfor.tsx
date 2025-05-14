import React from "react";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import {
	InnerRightContent,
	StylePagePersonContentInput,
	StylePagePersonContentRightInfov2,
	StylePersonalLabelBank,
	TextError,
} from "../../personal/component/StylePerson";
import { Grid } from "@material-ui/core";
import { StylePartnerSelectField } from "../../partnerDetail/styled/StylePartnerDetail";
import StaffAddressPath from "../../../../models/StaffAddressPath";

export default function UpdateUserAddressInfor(props: {
	onChangeProvince: (e: any) => void;
	onChangeDistrict: (e: any) => void;
	handleCommuneChange: (e: any) => void;
	register: UseFormRegister<{
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
	errors: FieldErrors<{
		customerName: string;
		phone: string;
		address: string;
	}>;
	province?: StaffAddressPath[];
	district?: StaffAddressPath[];
	commune?: StaffAddressPath[];
	provinceId?: number | null;
	districtId?: number | null;
	communeId?: number | null;
	note?: string;
	setNote?: (val: string) => void;
}) {
	return (
		<>
			<StylePagePersonContentRightInfov2>
				<StylePersonalLabelBank>Tên khách hàng</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập số điện thoại"
					{...props.register("customerName")}
				/>
				<TextError>{props.errors.customerName?.message}</TextError>
			</StylePagePersonContentRightInfov2>
			<StylePagePersonContentRightInfov2>
				<StylePersonalLabelBank>Số điện thoại</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập mật khẩu"
					{...props.register("phone")}
				/>
				<TextError>{props.errors.phone?.message}</TextError>
			</StylePagePersonContentRightInfov2>
			<StylePagePersonContentRightInfov2>
				<StylePersonalLabelBank>Địa chỉ</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập địa chỉ"
					{...props.register("address")}
				/>
				<TextError>{props.errors.address?.message}</TextError>
			</StylePagePersonContentRightInfov2>
			<StylePagePersonContentRightInfov2>
				<StylePersonalLabelBank>Ghi chú</StylePersonalLabelBank>
				<StylePagePersonContentInput
					value={props.note}
					onChange={(e) => props.setNote?.(e.target.value)}
				/>
			</StylePagePersonContentRightInfov2>
			<StylePagePersonContentRightInfov2>
				<StylePersonalLabelBank>Kinh độ</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập kinh độ"
					{...props.register("long")}
				/>
				<TextError>{props.errors.address?.message}</TextError>
			</StylePagePersonContentRightInfov2>
			<StylePagePersonContentRightInfov2>
				<StylePersonalLabelBank>Vĩ độ</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập vĩ độ"
					{...props.register("lat")}
				/>
				<TextError>{props.errors.address?.message}</TextError>
			</StylePagePersonContentRightInfov2>
			<div>
				<StylePersonalLabelBank>Tỉnh thành</StylePersonalLabelBank>

				<StylePartnerSelectField
					value={props.provinceId || 0}
					onChange={(e) => props.onChangeProvince(e.target.value)}>
					<option value={0}>Chọn Tỉnh</option>
					{props.province?.map((province) => (
						<option
							key={province.name}
							value={province.id}>
							{province.name}
						</option>
					))}
				</StylePartnerSelectField>
			</div>
			{props.district?.length != 0 && (
				<div>
					<StylePersonalLabelBank>Quận huyện</StylePersonalLabelBank>
					<StylePartnerSelectField
						value={props.districtId || 0}
						onChange={(e) => props.onChangeDistrict(e.target.value)}>
						<option value={0}>Chọn Huyện</option>
						{props.district?.map((district) => (
							<option
								key={district.name}
								value={district.id}>
								{district.name}
							</option>
						))}
					</StylePartnerSelectField>
				</div>
			)}
			{props.commune?.length != 0 && (
				<div>
					<StylePersonalLabelBank>Xã phường</StylePersonalLabelBank>
					<StylePartnerSelectField
						value={props.communeId || 0}
						onChange={(e) => props.handleCommuneChange(e.target.value)}>
						<option value={0}>Chọn Xã</option>
						{props.commune?.map((commune) => (
							<option
								key={commune.name}
								value={commune.id}>
								{commune.name}
							</option>
						))}
					</StylePartnerSelectField>
				</div>
			)}
		</>
	);
}
