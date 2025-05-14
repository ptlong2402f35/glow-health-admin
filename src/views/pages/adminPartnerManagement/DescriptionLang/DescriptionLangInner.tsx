import React, { useEffect, useState } from "react";
import StaffDetail from "../../../../models/StaffDetail";
import { stringify } from "querystring";
import { DescriptionLang } from "./DescriptionLangDialog";
import { DescriptionParnerTextArea, DescriptionParnerTextAreav2, DescriptionTitleLang } from "../styled/StyleParner";
import { Lang, LangLabelMap } from "../../../../models/UserGlow";

export default function DescriptionLangInner(props: {
	description?: DescriptionLang[];
	setEditedDescriptions: (value: DescriptionLang[]) => void;
	editedDescriptions: DescriptionLang[];
}) {
	const handleDescriptionChange = (index: number, event: any) => {
		const newDescriptions = [...props.editedDescriptions];
		newDescriptions[index].description = event.target.value;
		props.setEditedDescriptions(newDescriptions);
	};

	return (
		<>
			{props.description?.map((item, index) => (
				<div key={index}>
					<DescriptionTitleLang>Ngôn ngữ: {LangLabelMap.get(item.lang as Lang)}</DescriptionTitleLang>
					<DescriptionParnerTextAreav2
						value={props.editedDescriptions[index]?.description}
						onChange={(event) => handleDescriptionChange(index, event)}
					/>
				</div>
			))}
		</>
	);
}
