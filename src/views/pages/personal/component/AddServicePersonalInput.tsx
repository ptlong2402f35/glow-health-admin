import React, { useEffect, useState } from "react";
import useServicePersonal from "../hooks/useServicePersonal";
import {
	AdminProductDialogInputInner,
	SelectWrapper,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "./StylePerson";
import {
	StyleButtonPersonalPriceButton,
	StyleButtonPersonalPriceButtonRemove,
	StyleButtonPersonalPriceButtonWrap,
	StyleServicePriceInputFlex,
} from "../styled/StylePersonal";
import { useServicePrice } from "../hooks/useServicePrices";

export default function AddServicePersonalInput(props: {
	serviceId: number;
	service: string;
	setService: (value: string) => void;
	prices: { unit: string; price: number; id: number }[];
	setPrices: (prices: { unit: string; price: number; id: number }[]) => void;
	nameService: string;
	setNameService: (value: string) => void;
}) {
	const { prices, deleteSection, addNewPrice, handlePriceChange } = useServicePrice({
		prices: props.prices,
		setPrices: props.setPrices,
	});

	const { servicePersonal } = useServicePersonal({ id: props.serviceId });

	return (
		<>
			<AdminProductDialogInputInner>
				<StylePersonalLabelBank>Tên dịch vụ</StylePersonalLabelBank>
				<StylePagePersonContentInput
					value={props.nameService}
					onChange={(e) => props.setNameService(e.target.value)}
				/>
			</AdminProductDialogInputInner>
			<SelectWrapper>
				<StylePersonalLabelBank>Nhóm dịch vụ</StylePersonalLabelBank>
				<select
					value={props.service}
					onChange={(e) => props.setService(e.target.value)}>
					<option value="">Chọn dịch vụ</option>
					{servicePersonal.map((group, index) => (
						<option
							key={index}
							value={group?.id || ""}>
							{group?.serviceGroup} - {group?.name}
						</option>
					))}
				</select>
			</SelectWrapper>

			{prices.map((section) => (
				<div key={section.id}>
					<StylePersonalLabelBank>Dịch vụ</StylePersonalLabelBank>
					<StyleServicePriceInputFlex>
						<StylePagePersonContentInput
							placeholder="Giá"
							value={section.price || 0}
							onChange={(e) =>
								handlePriceChange(section.id, "price", parseFloat(e.target.value))
							}></StylePagePersonContentInput>
						<StylePagePersonContentInput
							placeholder="Đơn vị"
							value={section.unit}
							onChange={(e) =>
								handlePriceChange(section.id, "unit", e.target.value)
							}></StylePagePersonContentInput>

						<StyleButtonPersonalPriceButtonRemove onClick={() => deleteSection(section.id)}>
							Xóa
						</StyleButtonPersonalPriceButtonRemove>
					</StyleServicePriceInputFlex>
				</div>
			))}

			<StyleButtonPersonalPriceButtonWrap>
				<StyleButtonPersonalPriceButton onClick={addNewPrice}>Thêm giá dịch vụ</StyleButtonPersonalPriceButton>
			</StyleButtonPersonalPriceButtonWrap>
		</>
	);
}
