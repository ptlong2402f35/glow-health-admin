import React, { useEffect, useState } from "react";
import useServicePersonal from "../hooks/useServicePersonal";
import {
	AdminProductDialogInputInner,
	SelectWrapper,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import {
	StylePagePersonContentInput,
	StylePagePersonContentRightInfo,
	StylePagePersonContentTextArea,
	StylePersonalLabelBank,
} from "./StylePerson";
import useGetPriceStaffService from "../hooks/useGetPriceStaffService";
import {
	StyleButtonPersonalPriceButton,
	StyleButtonPersonalPriceButtonRemove,
	StyleButtonPersonalPriceButtonWrap,
	StyleServicePriceInputFlex,
	StyleServicePriceWrap,
} from "../styled/StylePersonal";
import { useServicePrice } from "../hooks/useServicePrices";

export default function UpdateServicePriceInput(props: {
	serviceId: number;
	service: number;
	setService: (value: number) => void;
	prices: { unit: string; price: number; id: number; itemId?: number }[];
	setPrices: (prices: { unit: string; price: number; id: number; itemId?: number }[]) => void;
	serviceStaffId: number;
	serviceName: string;
	staffService: { prices: { unit: string; price: number; id: number }[] };
	nameService: string;
	setNameService: (value: string) => void;
	descriptionService: string;
	setDescriptionService: (value: string) => void;
}) {
	useEffect(() => {
		if (props.staffService && props.staffService.prices.length > 0) {
			props.setPrices(props.staffService.prices.map((item) => ({ ...item, itemId: item.id })));
		}
	}, [props.staffService]);

	const { prices, deleteSection, addNewPrice, handlePriceChange } = useServicePrice({
		prices: props.prices,
		setPrices: props.setPrices,
	});

	return (
		<>
			<AdminProductDialogInputInner>
				<StylePersonalLabelBank>Tên dịch vụ</StylePersonalLabelBank>
				<StylePagePersonContentInput
					value={props.nameService}
					onChange={(e) => props.setNameService(e.target.value)}
				/>
			</AdminProductDialogInputInner>
			<StylePagePersonContentRightInfo>
				<StylePersonalLabelBank>Nhóm dịch vụ</StylePersonalLabelBank>
				<div>{props.serviceName}</div>
			</StylePagePersonContentRightInfo>

			<StylePersonalLabelBank>Mô tả dịch vụ</StylePersonalLabelBank>
			<StylePagePersonContentTextArea
				value={props.descriptionService}
				onChange={(e) => props.setDescriptionService(e.target.value)}
			/>

			{prices.map((section) => (
				<StyleServicePriceWrap key={section.id}>
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
				</StyleServicePriceWrap>
			))}
			<StyleButtonPersonalPriceButtonWrap>
				<StyleButtonPersonalPriceButton onClick={addNewPrice}>Thêm giá dịch vụ</StyleButtonPersonalPriceButton>
			</StyleButtonPersonalPriceButtonWrap>
		</>
	);
}
