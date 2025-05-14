import React from "react";
import { VoucherListBC1, VoucherListBC3, VoucherListBCWrap } from "../ListVoucher/styled/StyledVoucher";
import { TranslateLabels } from "../../controls/layout/content/MultiLanguge";
import { HeaderSpaWrap, VoucherListBCWrapv2 } from "./styled/HomeStyles";
import { StaffDetailPageTitle } from "../FilterAtHome/styled/ListStaffAtHome";

export default function HeaderSpa(props: { lang: string }) {
	return (
		<HeaderSpaWrap>
			<VoucherListBCWrapv2>
				<VoucherListBC1 to="/">{TranslateLabels[props.lang]?.HOME_PAGE}</VoucherListBC1>
				<i
					className="fa fa-angle-right"
					aria-hidden="true"></i>
				<VoucherListBC3 to="/dia-diem">{TranslateLabels[props.lang]?.LOCATION}</VoucherListBC3>
			</VoucherListBCWrapv2>
			{/* <StaffDetailPageTitle>{TranslateLabels[props.lang]?.SPA_BEAUTY_CLINIC}</StaffDetailPageTitle> */}
		</HeaderSpaWrap>
	);
}
