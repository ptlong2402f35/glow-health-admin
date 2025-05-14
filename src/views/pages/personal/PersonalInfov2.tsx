import React, { useEffect, useState } from "react";
import User from "../../../models/User";
import {
	StyledPersonalInfov2ChangeBtn,
	StyledPersonalInfov2ChangeBtnWrap,
	StyledPersonalInfov2ChangeConfirmBtn,
	StyledPersonalInfov2ChangeContentItem,
	StyledPersonalInfov2ChangeWrap,
	StyledPersonalInfov2Contain,
	StyledPersonalInfov2ContentItem,
	StyledPersonalInfov2ContentWrap,
	StyledPersonalInfov2ControlField,
	StyledPersonalInfov2ControlWrap,
	StyledPersonalInfov2LockChange,
	StyledPersonalInfov2LockWrap,
	StyledPersonalInfov2Name,
	StyledPersonalInfov2TextChange,
	StyledPersonalInfov2TextInfo,
	StyledPersonalInfov2TextLabel,
	StyledPersonalInfov2TextLabelChange,
	StyledPersonalInfov2UnChangeSection,
	StyledPersonalInfov2Wrap,
} from "./styled/StylePersonalInfo";
import useSubmitUpdate from "./hooks/useSubmitUpdatePersonalInfo";
import { useUpdatePersonalInfo } from "./hooks/useConfirmUpdatePersonalInfo";
import UserManagement from "../../../models/UserGlow";
import { PersonalInfo } from "./Personalv2";

export default function PersonalInfov2(props: { personalData: UserManagement | undefined; reload: () => void }) {
	const [inputVal, setInputVal] = useState<PersonalInfo>({
		phone: props.personalData?.phone,
	});
	const [changeType, setChangeType] = useState(false);
	useEffect(() => {
		setInputVal({
			phone: props.personalData?.phone,
		});
	}, [props.personalData]);

	return (
		<StyledPersonalInfov2Wrap>
			<StyledPersonalInfov2Contain>
				<StyledPersonalInfov2ControlWrap>
					{!changeType && (
						<StyledPersonalInfov2ControlField onClick={() => setChangeType(true)}>
							<img src="./static/img/personal_change_icon.jpg" />
						</StyledPersonalInfov2ControlField>
					)}
				</StyledPersonalInfov2ControlWrap>
				{!changeType && (
					<StyledPersonalInfov2UnChangeSection>
						<StyledPersonalInfov2ContentWrap>
							<StyledPersonalInfov2ContentItem>
								<StyledPersonalInfov2TextLabel>Tài khoản:</StyledPersonalInfov2TextLabel>
								<StyledPersonalInfov2TextInfo>
									{props.personalData?.userName}
								</StyledPersonalInfov2TextInfo>
							</StyledPersonalInfov2ContentItem>
							<StyledPersonalInfov2ContentItem>
								<StyledPersonalInfov2TextLabel>Email:</StyledPersonalInfov2TextLabel>
								<StyledPersonalInfov2TextInfo>{props.personalData?.email}</StyledPersonalInfov2TextInfo>
							</StyledPersonalInfov2ContentItem>
							<StyledPersonalInfov2ContentItem>
								<StyledPersonalInfov2TextLabel>Số điện thoại:</StyledPersonalInfov2TextLabel>
								<StyledPersonalInfov2TextInfo>{props.personalData?.phone}</StyledPersonalInfov2TextInfo>
							</StyledPersonalInfov2ContentItem>
						</StyledPersonalInfov2ContentWrap>
					</StyledPersonalInfov2UnChangeSection>
				)}

				{changeType && (
					<PersonalInfov2ChangeSection
						setInputVal={setInputVal}
						inputVal={inputVal}
						personalData={props.personalData}
						setChangeType={setChangeType}
						reload={props.reload}
					/>
				)}
			</StyledPersonalInfov2Contain>
		</StyledPersonalInfov2Wrap>
	);
}

export function PersonalInfov2ChangeSection(props: {
	setInputVal: (arow: (val: PersonalInfo) => PersonalInfo) => void;
	inputVal: PersonalInfo;
	personalData: UserManagement | undefined;
	setChangeType: (val: boolean) => void;
	reload: () => void;
}) {
	const { updatePersonalInfo } = useUpdatePersonalInfo();
	const { useConfirmUpdate } = useSubmitUpdate();
	const changeToVisibleType = () => {
		props.setChangeType(false);
	};
	const changePhone = (val: string) => {
		props.setInputVal((prev) => ({
			...prev,
			phone: val,
		}));
	};
	const changeUserName = (val: string) => {
		props.setInputVal((prev) => ({
			...prev,
			userName: val,
		}));
	};
	const onCancelChange = () => {
		changeToVisibleType();
		props.setInputVal(() => ({
			phone: props.personalData?.phone,
		}));
	};

	const onConfirmChange = () => {
		updatePersonalInfo(
			props.inputVal?.userName || "",
			props.inputVal.phone || "",
			() => props.setChangeType(false),
			props.reload
		);
	};
	return (
		<StyledPersonalInfov2ChangeWrap>
			<StyledPersonalInfov2ContentWrap>
				<StyledPersonalInfov2ChangeContentItem>
					<StyledPersonalInfov2TextLabelChange>Họ và tên:</StyledPersonalInfov2TextLabelChange>
					<StyledPersonalInfov2TextChange
						type="text"
						value={props.inputVal?.userName || ""}
						onChange={(e) => changeUserName(e.target.value)}></StyledPersonalInfov2TextChange>
				</StyledPersonalInfov2ChangeContentItem>
				<StyledPersonalInfov2ChangeContentItem>
					<StyledPersonalInfov2TextLabel>Email:</StyledPersonalInfov2TextLabel>
					<StyledPersonalInfov2LockChange>
						{props.personalData?.email}
						<StyledPersonalInfov2LockWrap>
							<i
								className="fa fa-lock"
								aria-hidden="true"></i>
						</StyledPersonalInfov2LockWrap>
					</StyledPersonalInfov2LockChange>
				</StyledPersonalInfov2ChangeContentItem>
				<StyledPersonalInfov2ChangeContentItem>
					<StyledPersonalInfov2TextLabelChange>Số điện thoại:</StyledPersonalInfov2TextLabelChange>
					<StyledPersonalInfov2TextChange
						type="text"
						value={props.inputVal?.phone || ""}
						onChange={(e) => changePhone(e.target.value)}></StyledPersonalInfov2TextChange>
				</StyledPersonalInfov2ChangeContentItem>
			</StyledPersonalInfov2ContentWrap>
			<StyledPersonalInfov2ChangeBtnWrap>
				<StyledPersonalInfov2ChangeBtn onClick={onCancelChange}>Hủy</StyledPersonalInfov2ChangeBtn>
				<StyledPersonalInfov2ChangeConfirmBtn onClick={onConfirmChange}>
					Cập nhật
				</StyledPersonalInfov2ChangeConfirmBtn>
			</StyledPersonalInfov2ChangeBtnWrap>
		</StyledPersonalInfov2ChangeWrap>
	);
}
