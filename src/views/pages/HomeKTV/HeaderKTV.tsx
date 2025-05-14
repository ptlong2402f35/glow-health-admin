import React from "react";
import { VoucherListBC1, VoucherListBC3, VoucherListBCWrap } from "../ListVoucher/styled/StyledVoucher";
import { TranslateLabels } from "../../controls/layout/content/MultiLanguge";
import { StaffDetailPageTitle, StaffDetailPageTitlev2 } from "../FilterAtHome/styled/ListStaffAtHome";
import { HeaderSpaWrap, VoucherListBCWrapv2 } from "../home/styled/HomeStyles";

export default function HeaderKTV(props: { lang: string }) {
	return (
		<HeaderSpaWrap>
			<VoucherListBCWrapv2>
				<VoucherListBC1 to="/">{TranslateLabels[props.lang]?.HOME_PAGE}</VoucherListBC1>
				<i
					className="fa fa-angle-right"
					aria-hidden="true"></i>
				<VoucherListBC3 to="/tai-nha">{TranslateLabels[props.lang]?.HEADER_SPA_AT_HOME}</VoucherListBC3>
			</VoucherListBCWrapv2>
			{/* <StaffDetailPageTitlev2>{TranslateLabels[props.lang]?.HEADER_SPA_AT_HOME}</StaffDetailPageTitlev2> */}
		</HeaderSpaWrap>
	);
}
