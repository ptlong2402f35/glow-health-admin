import React, { useState } from "react";
import { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import {
	StyledTimeWorkUpdateWrap,
	StyledTimeWorkTitle,
	StyledTimeWorkAddBtn,
	StyledTimeWorkUpdateInputWrap,
	StyledTimeWorkInputHead,
	StyledTimeWorkLabel,
	StyledTimeWorkInput,
	StyledTimeWorkElementLabel,
	StyledTimeWorkInputContainer,
	StyledTimeWorkDelBtn,
	StyledTimeWorkHeader,
} from "../styled/StylePartnerDetail";
import { WorkTimeType } from "../../../../models/StaffDetail";
import ErrorBoundary from "../../../../utils/ErrorBoundary";

export default function WorkTimeSection(props: {
	onChange?: (value: WorkTimeType[]) => void;
	workTime?: WorkTimeType[] | undefined | null;
}) {
	const [_, setRefresh] = useState({});
	const addWorkTime = () => {
		let newEl = {
			date: {
				from: "",
				to: "",
			},
			hour: {
				from: "",
				to: "",
			},
		};
		props.workTime?.push(newEl);
		setRefresh({});
	};

	return (
		<StyledTimeWorkUpdateWrap>
			<StyledTimeWorkHeader>
				<StyledTimeWorkTitle>Thời gian làm việc:</StyledTimeWorkTitle>
				<StyledTimeWorkAddBtn onClick={addWorkTime}>Thêm</StyledTimeWorkAddBtn>
			</StyledTimeWorkHeader>
			<StyledTimeWorkUpdateInputWrap>
				<StyledTimeWorkInputHead>
					<StyledTimeWorkLabel>Ngày:</StyledTimeWorkLabel>
					<StyledTimeWorkLabel>Giờ:</StyledTimeWorkLabel>
				</StyledTimeWorkInputHead>
				<ErrorBoundary>
					<>
						{props.workTime &&
							props.workTime.map((item, index) => (
								<WorkTimeSingleItem
									key={index}
									item={item}
									setRefresh={() => setRefresh({})}
									onChange={props.onChange}
									workTime={props.workTime}
								/>
							))}
					</>
				</ErrorBoundary>
			</StyledTimeWorkUpdateInputWrap>
		</StyledTimeWorkUpdateWrap>
	);
}

export function WorkTimeSingleItem(props: {
	setRefresh: () => void;
	onChange?: (value: WorkTimeType[]) => void;
	workTime: WorkTimeType[] | undefined | null;
	item: WorkTimeType;
}) {
	const deleteWorkTime = (data: WorkTimeType) => {
		let nWorkTime = [...(props.workTime || [])];
		let findIdx = props.workTime?.findIndex((item) => {
			return (
				item.date.from == data.date.from &&
				item.date.to == data.date.to &&
				item.hour.from == data.hour.from &&
				item.hour.to == data.hour.to
			);
		});
		if ((findIdx && findIdx >= 0) || findIdx === 0) {
			nWorkTime?.splice(findIdx, 1);
		}
		props.onChange?.(nWorkTime);
		props.setRefresh?.();
	};
	const onHandleChangeFromDate = (value: string) => {
		props.item.date.from = value;
		props.setRefresh?.();
	};
	const onHandleChangeToDate = (value: string) => {
		props.item.date.to = value;
		props.setRefresh?.();
	};
	const onHandleChangeFromHour = (value: string) => {
		props.item.hour.from = value;
		props.setRefresh?.();
	};
	const onHandleChangeToHour = (value: string) => {
		props.item.hour.to = value;
		props.setRefresh?.();
	};
	return (
		<StyledTimeWorkInputContainer>
			<StyledTimeWorkInput
				value={props.item.date.from || ""}
				onChange={(e) => onHandleChangeFromDate(e.target.value)}></StyledTimeWorkInput>
			<StyledTimeWorkElementLabel>-</StyledTimeWorkElementLabel>
			<StyledTimeWorkInput
				value={props.item.date.to || ""}
				onChange={(e) => onHandleChangeToDate(e.target.value)}></StyledTimeWorkInput>
			<StyledTimeWorkInput
				value={props.item.hour.from || ""}
				onChange={(e) => onHandleChangeFromHour(e.target.value)}></StyledTimeWorkInput>
			<StyledTimeWorkElementLabel>-</StyledTimeWorkElementLabel>
			<StyledTimeWorkInput
				value={props.item.hour.to || ""}
				onChange={(e) => onHandleChangeToHour(e.target.value)}></StyledTimeWorkInput>
			<StyledTimeWorkDelBtn onClick={() => deleteWorkTime(props.item)}>Xóa</StyledTimeWorkDelBtn>
		</StyledTimeWorkInputContainer>
	);
}
