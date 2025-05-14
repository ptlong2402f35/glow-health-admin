import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { StylePersonalLabelBank } from "../../personal/component/StylePerson";
import { GridPartner, StylePartnerSelectField } from "../styled/StylePartnerDetail";
import { PageWrap } from "../../../controls/components/form/Page";
import { UseFormRegister } from "react-hook-form";
import StaffAddressPath from "../../../../models/StaffAddressPath";

export default function ProvinceSection(props: {
	onChangeProvince: (e: any) => void;
	onChangeDistrict: (e: any) => void;
	handleCommuneChange: (e: any) => void;
	register: UseFormRegister<{
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
	}>;
	province?: StaffAddressPath[];
	district?: StaffAddressPath[];
	commune?: StaffAddressPath[];
	provinceId?: number | null;
	districtId?: number | null;
	communeId?: number | null;
}) {
	return (
		<GridPartner
			container
			spacing={3}>
			<GridPartner
				item
				xs={12}
				md={5}>
				<StylePersonalLabelBank>Tỉnh thành</StylePersonalLabelBank>

				<StylePartnerSelectField
					value={props.provinceId || 0}
					onChange={(e) => props.onChangeProvince(e.target.value)}>
					<option>Chọn Tỉnh</option>
					{props.province?.map((province) => (
						<option
							key={province.name}
							value={province.id}>
							{province.name}
						</option>
					))}
				</StylePartnerSelectField>
			</GridPartner>
			{props.district?.length != 0 && (
				<GridPartner
					item
					xs={12}
					md={4}>
					<StylePersonalLabelBank>Quận huyện</StylePersonalLabelBank>
					<StylePartnerSelectField
						value={props.districtId || 0}
						onChange={(e) => props.onChangeDistrict(e.target.value)}>
						<option>Chọn Huyện</option>
						{props.district?.map((district) => (
							<option
								key={district.name}
								value={district.id}>
								{district.name}
							</option>
						))}
					</StylePartnerSelectField>
				</GridPartner>
			)}
			{props.commune?.length != 0 && (
				<GridPartner
					item
					xs={12}
					md={3}>
					<StylePersonalLabelBank>Xã phường</StylePersonalLabelBank>
					<StylePartnerSelectField
						value={props.communeId || 0}
						onChange={(e) => props.handleCommuneChange(e.target.value)}>
						<option>Chọn Xã</option>
						{props.commune?.map((commune) => (
							<option
								key={commune.name}
								value={commune.id}>
								{commune.name}
							</option>
						))}
					</StylePartnerSelectField>
				</GridPartner>
			)}
		</GridPartner>
	);
}
