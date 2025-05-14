import React, { useState } from "react";
import { ScopeType, ScopeTypeMap, ServiceGroupAll } from "../../../../models/Service";
import { AvtProductManagementSection } from "./AvatarProductManagement";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { AvtProductMultiManagementSection } from "./AvatarProductMultiManagement";
import {
	AdminProductDialogInputInner,
	AdminProductDialogInputLeft,
	AdminProductDialogInputRight,
	AdminProductDialogInputRightMulti,
	AdminProductDialogInputRightSingle,
	AdminProductDialogInputWrap,
	SelectWrapper,
} from "../styled/ProductManagementStyle";
import {
	StylePagePersonContentInput,
	StylePagePersonContentTextArea,
	StylePersonalLabelBank,
} from "../../personal/component/StylePerson";

export default function AddProductInput(props: {
	name: string;
	setName: (value: string) => void;
	// code: string;
	// setCode: (value: string) => void;
	// price: string;
	// setPrice: (value: string) => void;
	// unit: string;
	// setUnit: (value: string) => void;
	serviceGroup: string;
	setServiceGroup: (value: string) => void;
	listAll: ServiceGroupAll[];
	avtData: ImageInputData[];
	setAvtData: (imageDatas: ImageInputData[]) => void;
	avtMultiData: ImageInputData[];
	setAvtMultiData: (imageDatas: ImageInputData[]) => void;
	type: ScopeType;
	setType: (value: ScopeType) => void;
	description: string;
	setDescription: (value: string) => void;
}) {
	const [openImgDialog, setOpenImgDialog] = useState(false);
	const [openImgMultiDialog, setOpenImgMultiDialog] = useState(false);
	return (
		<AdminProductDialogInputWrap>
			<AdminProductDialogInputLeft>
				<AdminProductDialogInputInner className="width100">
					<InputNameService
						name={props.name}
						setName={props.setName}
					/>
				</AdminProductDialogInputInner>
				{/* <AdminProductDialogInputInner className="width100">
					<InputCodeService
						code={props.code}
						setCode={props.setCode}
					/>
				</AdminProductDialogInputInner>
				<AdminProductDialogInputInner className="width100">
					<InputPriceService
						price={props.price}
						setPrice={props.setPrice}
					/>
				</AdminProductDialogInputInner>
				<AdminProductDialogInputInner className="width100">
					<InputUnitService
						unit={props.unit}
						setUnit={props.setUnit}
					/>
				</AdminProductDialogInputInner> */}
				<AdminProductDialogInputInner className="width100">
					<InputDescriptionService
						description={props.description}
						setDescription={props.setDescription}
					/>
				</AdminProductDialogInputInner>
				<AdminProductDialogInputInner className="width100">
					<OptionServiceGroup
						serviceGroup={props.serviceGroup}
						setServiceGroup={props.setServiceGroup}
						listAll={props.listAll}
					/>
				</AdminProductDialogInputInner>
				{/* <AdminProductDialogInputInner className="width100">
					<InputTypeService
						type={props.type}
						setType={props.setType}
					/>
				</AdminProductDialogInputInner> */}
			</AdminProductDialogInputLeft>
			{/* <AdminProductDialogInputRight>
				<AdminProductDialogInputRightSingle>
					<AvtProductManagementSection
						type={true}
						avtData={props.avtData}
						setAvtData={props.setAvtData}
						openImgDialog={setOpenImgDialog}
					/>
				</AdminProductDialogInputRightSingle>
				<AdminProductDialogInputRightMulti>
					<AvtProductMultiManagementSection
						type={true}
						avtMultiData={props.avtMultiData}
						setAvtMultiData={props.setAvtMultiData}
						openImgDialog={setOpenImgMultiDialog}
					/>
				</AdminProductDialogInputRightMulti>
			</AdminProductDialogInputRight> */}
		</AdminProductDialogInputWrap>
	);
}

export function InputNameService(props: { name: string; setName: (value: string) => void }) {
	return (
		<div>
			<StylePersonalLabelBank>Tên dịch vụ</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.name}
				onChange={(e) => props.setName(e.target.value)}
			/>
		</div>
	);
}
export function InputCodeService(props: { code: string; setCode: (value: string) => void }) {
	return (
		<div>
			<StylePersonalLabelBank>Code</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.code}
				onChange={(e) => props.setCode(e.target.value)}
			/>
		</div>
	);
}
export function InputPriceService(props: { price: string; setPrice: (value: string) => void }) {
	return (
		<div>
			<StylePersonalLabelBank>Giá tham khảo</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.price}
				onChange={(e) => props.setPrice(e.target.value)}
			/>
		</div>
	);
}
export function InputUnitService(props: { unit: string; setUnit: (value: string) => void }) {
	return (
		<div>
			<StylePersonalLabelBank>Đơn vị</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.unit}
				onChange={(e) => props.setUnit(e.target.value)}
			/>
		</div>
	);
}
export function OptionServiceGroup(props: {
	serviceGroup: string;
	setServiceGroup: (value: string) => void;
	listAll: any[];
}) {
	return (
		<SelectWrapper className="width100">
			<StylePersonalLabelBank>Nhóm dịch vụ</StylePersonalLabelBank>
			<select
			style={{ height: '44px' }}
				value={props.serviceGroup}
				onChange={(e) => props.setServiceGroup(e.target.value)}>
				<option value="">Chọn nhóm dịch vụ</option>
				{props.listAll.map((group, index) => (
					<option
						key={index}
						value={group?.name || ""}>
						{group?.name}
					</option>
				))}
			</select>
		</SelectWrapper>
	);
}
export function InputTypeService(props: { type: ScopeType; setType: (value: ScopeType) => void }) {
	return (
		<SelectWrapper>
			<StylePersonalLabelBank>Loại hình dịch vụ</StylePersonalLabelBank>
			<select
				value={props.type}
				onChange={(e) => props.setType(e.target.value as any)}>
				{Array.from(ScopeTypeMap.entries()).map(([type, label]) => (
					<option
						key={type}
						value={type}>
						{label}
					</option>
				))}
			</select>
		</SelectWrapper>
	);
}

export function InputDescriptionService(props: { description: string; setDescription: (value: string) => void }) {
	return (
		<div>
			<StylePersonalLabelBank>Mô tả dịch vụ</StylePersonalLabelBank>
			<StylePagePersonContentTextArea
				value={props.description}
				onChange={(e) => props.setDescription(e.target.value)}
			/>
		</div>
	);
}
