import * as React from "react";
import { useEffect, useState } from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { useParams } from "react-router";
import UserAddressTable from "./component/UserAddressTable";

export default function UserAddress() {
	let { userId } = useParams<{ userId: string }>();
	let userIdNumber = parseInt(userId);
	return (
		<PageWrap>
			<PageCenter>
				<PageHeader>Quản lý Địa chỉ người dùng</PageHeader>
				<UserAddressTable userId={userIdNumber} />
			</PageCenter>
		</PageWrap>
	);
}
