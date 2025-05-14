import React from "react";
import {
	PlainPaginationBoxInner,
	PlainPaginationBoxOuter,
	PlainPaginationCenter,
	PlainPaginationLeft,
	PlainPaginationLeftBtn,
	PlainPaginationRight,
	PlainPaginationRightBtn,
} from "./StyledPlainPaginationBox";

export default function PlainPaginationBox(props: {
	page: number;
	isEnd: boolean;
	onChange: (val: number) => void;
	className?: string;
	id?: string;
}) {
	const onLeftBtnClick = () => {
		if (props.page > 1) {
			props.onChange(props.page - 1);
		}
	};
	const onRightBtnClick = () => {
		if (!props.isEnd) {
			props.onChange(props.page + 1);
		}
	};

	return (
		<PlainPaginationBoxOuter
			id={props.id}
			className={props.className}>
			<PlainPaginationBoxInner>
				<PlainPaginationLeft>
					<PlainPaginationLeftBtn
						disabled={props.page <= 1}
						onClick={onLeftBtnClick}>
						<i className="fa fa-angle-left"></i>
					</PlainPaginationLeftBtn>
				</PlainPaginationLeft>
				<PlainPaginationCenter>
					<p>{props.page || 1}</p>
				</PlainPaginationCenter>
				<PlainPaginationRight>
					<PlainPaginationRightBtn
						disabled={props.isEnd}
						onClick={onRightBtnClick}>
						<i className="fa fa-angle-right"></i>
					</PlainPaginationRightBtn>
				</PlainPaginationRight>
			</PlainPaginationBoxInner>
		</PlainPaginationBoxOuter>
	);
}
