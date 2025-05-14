import React, { useEffect, useState } from "react";
import {
	StyleButtonPersonalPriceButton,
	StyleButtonPersonalPriceButtonRemove,
	StyleButtonPersonalPriceButtonWrap,
	StyleServicePriceInputFlex,
	StyleServicePriceWrap,
} from "../../personal/styled/StylePersonal";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../../personal/component/StylePerson";
import { useServicePrice } from "../hook/useServicePrices";
import Service from "../../../../models/Service";
import {
	AdminProductDefault,
	AdminProductDefaultInner,
	AdminProductStyleServicePriceInputFlex,
} from "../styled/ProductManagementStyle";

export default function UpdateProductPriceInput(props: {
	prices: { unit: string; price: number; id: number; itemId?: number; uneditable: boolean }[];
	setPrices: (prices: any) => void;
	service?: Service;
}) {
	useEffect(() => {
		if (props.service && props.service.hint && props.service.hint?.length > 0) {
			props.setPrices(props.service.hint?.map((item) => ({ ...item, id: item.id || Math.random() })));
		}
	}, [props.service]);
	const { prices, deleteSection, addNewPrice, handlePriceChange, handleDefaultChange } = useServicePrice({
		prices: props.prices,
		setPrices: props.setPrices,
	});

	return (
		<>
			{prices.map((section, index) => (
				<StyleServicePriceWrap key={section.id}>
					<StylePersonalLabelBank>Dịch vụ</StylePersonalLabelBank>
					<AdminProductStyleServicePriceInputFlex>
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
						<AdminProductDefault>
							<AdminProductDefaultInner>Chặn chỉnh sửa: </AdminProductDefaultInner>
							<input
								type="checkbox"
								checked={section.uneditable}
								onChange={() => handleDefaultChange(section.id)}
							/>
						</AdminProductDefault>

						<StyleButtonPersonalPriceButtonRemove onClick={() => deleteSection(section.id)}>
							Xóa
						</StyleButtonPersonalPriceButtonRemove>
					</AdminProductStyleServicePriceInputFlex>
				</StyleServicePriceWrap>
			))}
			<StyleButtonPersonalPriceButtonWrap>
				<StyleButtonPersonalPriceButton onClick={addNewPrice}>Thêm giá dịch vụ</StyleButtonPersonalPriceButton>
			</StyleButtonPersonalPriceButtonWrap>
		</>
	);
}
