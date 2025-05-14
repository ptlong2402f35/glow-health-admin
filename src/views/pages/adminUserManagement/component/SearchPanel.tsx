import React, { useEffect, useState } from "react";
import {
	InputSearchOrder,
	SearchIcon,
	SearchOrderWrap,
	SearchProductBoxDeleteInputBtn,
	SearchProductBoxSearchBtn,
} from "../../orderManagement/styled/StyledOrderManagement";

export default function SearchPanel(props: {
	placeholder: string | undefined;
	filterKeyword: string | null | undefined;
	doFilterKeyword: ((val: string | null) => void) | undefined;
}) {
	const [text, setText] = useState(props.filterKeyword);
	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
	const onSearch = (val: string) => props.doFilterKeyword?.(val);
	const onTextKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			{
				text ? onSearch(text) : onSearch("");
			}
		}
	};
	const onTextClear = () => {
		setText("");
		onSearch("");
	};
	const onIconClicked = () => {
		text ? onSearch(text) : onSearch("");
	};
	useEffect(() => {
		setText(props.filterKeyword);
	}, [props?.filterKeyword]);
	return (
		<SearchOrderWrap>
			<>
				<SearchProductBoxSearchBtn onClick={onIconClicked}>
					<SearchIcon className="fa fa-search" />
				</SearchProductBoxSearchBtn>
			</>
			<InputSearchOrder
				type="text"
				value={text || ""}
				onChange={onTextChange}
				onKeyDown={onTextKeypress}
				placeholder={props.placeholder}
			/>
			{text && (
				<SearchProductBoxDeleteInputBtn onClick={onTextClear}>
					<img src="./static/img/deletesearch.png" />
				</SearchProductBoxDeleteInputBtn>
			)}
		</SearchOrderWrap>
	);
}
