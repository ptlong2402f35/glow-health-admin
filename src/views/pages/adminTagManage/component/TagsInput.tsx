import React, { useState } from "react";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../../personal/component/StylePerson";
import { AdminProductDialogInputInner, AdminProductDialogInputWrap } from "../../adminProductManagement/styled/ProductManagementStyle";
import { ServiceGroupAll } from "../../../../models/Service";
import { OptionServiceGroup } from "../../adminProductManagement/component/AddProductInput";

export default function AddTagsInput(props: {
	name: string;
	setName: (value: string) => void;
	serviceGroup: string;
	setServiceGroup: (value: string) => void;
	listAll: ServiceGroupAll[];
}) {
	return (
		<AdminProductDialogInputWrap>
			<InputNameStore
				name={props.name}
				setName={props.setName}
			/>
			<AdminProductDialogInputInner className="width100">
								<OptionServiceGroup
									serviceGroup={props.serviceGroup}
									setServiceGroup={props.setServiceGroup}
									listAll={props.listAll}
								/>
							</AdminProductDialogInputInner>
		</AdminProductDialogInputWrap>
	);
}

export function InputNameStore(props: { name: string; setName: (value: string) => void }) {
	return (
		<div>
			<StylePersonalLabelBank>Tên Tag</StylePersonalLabelBank>
			<StylePagePersonContentInput
				value={props.name}
				onChange={(e) => props.setName(e.target.value)}
			/>
		</div>
	);
}

