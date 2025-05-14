import React from "react";
import { AdminParnerCount, AdminParnerCountWrap } from "../styled/StyleParner";

export default function AdminParnerManagementCount(props: { count: number }) {
	return (
		<AdminParnerCountWrap>
			<AdminParnerCount>{props.count}</AdminParnerCount> kỹ thuật viên
		</AdminParnerCountWrap>
	);
}
