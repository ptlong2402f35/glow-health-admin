import React, { useEffect, useState } from "react";
import useGetListVoucher, { getFilterVoucherList } from "../hook/GetListVoucher";
import {
	VoucherInnerContainer,
	VoucherInnerImg,
	VoucherInnerName,
	VoucherInnerRight,
	VoucherInnerRightNameCaskBack,
	VoucherInnerRightNameHSDWrap,
	VoucherInnerRightNameSpa,
	VoucherInnerRightNameStatus,
	VoucherInnerRightNameTime,
	VoucherInnerRightNameTimeContent,
	VoucherInnerRightNameTimeImg,
	VoucherInnerRightNameVoucher,
	VoucherInnerWrap,
	VoucherListBC1,
	VoucherListBC3,
	VoucherListBCWrap,
	VoucherListWrap,
} from "../styled/StyledVoucher";
import moment from "moment";
import {
	OrderStatusLabelMapv3,
	OrderStatusLabelMapv3EN,
	OrderStatusLabelMapv3KR,
	OrderStatusv2,
} from "../../../../models/Orderv2";
import usePostVoucher from "../../Voucher/hook/usePostVoucher";
import DialogGetVoucher from "../../Voucher/component/DialogSuccesGetVoucher";
import DialogGetInfoVoucher from "../../Voucher/component/DialogVoucherInfo";
import useGetOrder from "../../Voucher/hook/useGetInfoOrder";
import { PaginationWrapper } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../../controls/components/numberPaginationBox/NumberPaginationBox";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";

export default function ListVoucher() {
	const { listVoucher, count } = getFilterVoucherList();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { doOrder, infoOrder } = useGetOrder({});
	const { page, doChangePage } = useCommonListFunctions();

	const getVoucher = async (id: number) => {
		await doOrder(id || 0);
		setIsDialogOpen(true);
	};
	const { lang } = useLanguage();
	const orderStatusLabelMap =
		lang === "en" ? OrderStatusLabelMapv3EN : lang === "kr" ? OrderStatusLabelMapv3KR : OrderStatusLabelMapv3;
	return (
		<VoucherListWrap>
			<VoucherListBCWrap>
				<VoucherListBC1 to="/">{TranslateLabels[lang]?.HOME_PAGE}</VoucherListBC1>
				<i
					className="fa fa-angle-right"
					aria-hidden="true"></i>
				<VoucherListBC3 to="/danh-sach-voucher">{TranslateLabels[lang]?.LOGIN_ORDER}</VoucherListBC3>
			</VoucherListBCWrap>
			<VoucherInnerName>{TranslateLabels[lang]?.LOGIN_ORDER}</VoucherInnerName>
			<VoucherInnerContainer>
				{listVoucher?.map((val, index) => {
					return (
						<VoucherInnerWrap onClick={() => getVoucher(parseInt(val.id || "0"))}>
							<VoucherInnerImg src={val.staff?.user?.urlImage || ""} />
							<VoucherInnerRight>
								<VoucherInnerRightNameSpa>{val.staff?.name}</VoucherInnerRightNameSpa>
								<VoucherInnerRightNameVoucher>
									{TranslateLabels[lang]?.LOGIN_VOUCHER} {val.booking?.[0]?.serviceName}{" "}
									{val.booking?.[0]?.unit} {TranslateLabels[lang]?.LOGIN_ONLY}{" "}
									{val.totalPay?.toLocaleString()}đ
								</VoucherInnerRightNameVoucher>
								<VoucherInnerRightNameHSDWrap>
									<VoucherInnerRightNameTime>
										<VoucherInnerRightNameTimeImg src="static/img/clock-circlev2.png" />
										<VoucherInnerRightNameTimeContent>
											{TranslateLabels[lang]?.NEW_PAGE_EXPIRATION_DATE}:{" "}
											{(val?.expiredAt && moment(val?.expiredAt).format("DD/MM/YYYY")) || ""}
										</VoucherInnerRightNameTimeContent>
									</VoucherInnerRightNameTime>
									<VoucherInnerRightNameCaskBack>
										<VoucherInnerRightNameTimeImg src="static/img/wallet-add01.png" />
										<VoucherInnerRightNameTimeContent>
											{TranslateLabels[lang]?.LOGIN_YOUR_WILL_CASHBACK}{" "}
											{val.cashback?.toLocaleString()}đ
										</VoucherInnerRightNameTimeContent>
									</VoucherInnerRightNameCaskBack>
								</VoucherInnerRightNameHSDWrap>
							
							</VoucherInnerRight>
						</VoucherInnerWrap>
					);
				})}
			</VoucherInnerContainer>
			<PaginationWrapper>
				<NumberPaginationBox
					page={page || 1}
					count={count}
					per={PERPAGE.PerPage}
					onChange={(val) => doChangePage?.(val)}
				/>
			</PaginationWrapper>
			<DialogGetInfoVoucher
				isDialogOrderOpen={isDialogOpen}
				setIsDialogOrderOpen={setIsDialogOpen}
				infoOrder={infoOrder}
				setIsDialogOpen={setIsDialogOpen}
			/>
		</VoucherListWrap>
	);
}
