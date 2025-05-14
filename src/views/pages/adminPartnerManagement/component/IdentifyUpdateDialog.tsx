import React, { Fragment, useState } from "react";
import Staff from "../../../../models/Staff";
import DialogWrap, { DialogWrapMedium } from "../../../controls/components/dialogWrap/DialogWrap";
import { StylePagePersonContentInput, StylePersonalLabelBank } from "../../personal/component/StylePerson";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import useUpdateIdentify, { IdentifyFlag } from "../hook/useUpdateIdentify";
import {
	StaffIdentifyDialogLeft,
	StaffIdentifyDialogRight,
	StaffIdentifyDialogStaffLabel,
	StaffIdentifyDialogStaffValue,
	StaffIdentifyDialogTextBold,
	StaffIdentifyDialogWrap,
} from "../styled/StyleParner";

export default function IdentifyUpdateDialog(props: { open: boolean; onClose: () => void; staff: Staff }) {
	const [_, setRefresh] = useState({});
	const { flag, update } = useUpdateIdentify({
		staffId: props.staff.id || 0,
		birthday: props.staff.birthDay,
		identifyCard: props.staff.identifyCard,
		dateOfIssueIdentify: props.staff.dateOfIssueIdentify,
		placeOfIssueIdentify: props.staff.placeOfIssueIdentify,
		identifyAddress: props.staff.identifyAddress,
		identifyName: props.staff.identifyName,
	});

	return (
		<DialogWrap
			open={props.open}
			onClose={props.onClose}
			title="Cập nhật thông tin căn cước"
			actions={
				<Fragment>
					<UserFormServiceButtonClose onClick={props.onClose}>Đóng</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={update}
						disabled={flag === IdentifyFlag.Loading}>
						{flag === IdentifyFlag.Loading && <i className="fa fa-hourglass" />}
						{flag === IdentifyFlag.Success && <i className="fa fa-check" />}
						{flag === IdentifyFlag.Failed && <i className="fa fa-exclamation-triangle" />}
						&nbsp;Cập nhật
					</UserFormServiceButtonCreated>
				</Fragment>
			}>
			<IdentifyUpdateForm
				staff={props.staff}
				setRefresh={() => setRefresh({})}
			/>
		</DialogWrap>
	);
}

export function IdentifyUpdateForm(props: { staff: Staff; setRefresh: () => void }) {
	return (
		<StaffIdentifyDialogWrap className="clearfix">
			<StaffIdentifyDialogLeft>
				<StaffIdentifyDialogStaffLabel>Tên KTV:&nbsp;&nbsp;</StaffIdentifyDialogStaffLabel>
				<StaffIdentifyDialogStaffValue>{props.staff.name}</StaffIdentifyDialogStaffValue>
				<StaffIdentifyDialogStaffLabel>SĐT KTV:&nbsp;&nbsp;</StaffIdentifyDialogStaffLabel>
				<StaffIdentifyDialogStaffValue>{props.staff.user?.phone}</StaffIdentifyDialogStaffValue>
				<br />
				<br />
				{(props.staff.identifyImages || []).map((val, idx) => (
					<div
						className="img-wrap"
						key={idx}>
						<img src={val} />
					</div>
				))}
			</StaffIdentifyDialogLeft>
			<StaffIdentifyDialogRight>
			<StylePersonalLabelBank>Họ và tên</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="họ và Tên"
					value={props.staff.identifyName || ""}
					onChange={(e) => {
						props.staff.identifyName = e.target.value;
						props.setRefresh();
					}}
				/>
				<StylePersonalLabelBank>Số CCCD</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập số CCCD"
					value={props.staff.identifyCard || ""}
					onChange={(e) => {
						props.staff.identifyCard = e.target.value;
						props.setRefresh();
					}}
				/>
				<br />
				<br />
				<StylePersonalLabelBank>Ngày sinh</StylePersonalLabelBank>
				<StylePagePersonContentInput
					type="Date"
					value={props.staff.birthDay || ""}
					onChange={(e) => {
						props.staff.birthDay = e.target.value;
						props.setRefresh();
					}}
				/>
				<br />
				<br />
				<StylePersonalLabelBank>Địa chỉ thường trú</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập địa chỉ thường trú"
					value={props.staff.identifyAddress || ""}
					onChange={(e) => {
						props.staff.identifyAddress = e.target.value;
						props.setRefresh();
					}}
				/>
				<br />
				<br />
				<StylePersonalLabelBank>Ngày cấp</StylePersonalLabelBank>
				<StylePagePersonContentInput
					type="Date"
					value={props.staff.dateOfIssueIdentify ? props.staff.dateOfIssueIdentify.split('T')[0] : ""}
					onChange={(e) => {
						props.staff.dateOfIssueIdentify = e.target.value;
						props.setRefresh();
					}}
				/>
				<br />
				<br />
				<StylePersonalLabelBank>Nơi cấp</StylePersonalLabelBank>
				<StylePagePersonContentInput
					placeholder="Nhập nơi cấp"
					value={props.staff.placeOfIssueIdentify || ""}
					onChange={(e) => {
						props.staff.placeOfIssueIdentify = e.target.value;
						props.setRefresh();
					}}
				/>
			</StaffIdentifyDialogRight>
		</StaffIdentifyDialogWrap>
	);
}
