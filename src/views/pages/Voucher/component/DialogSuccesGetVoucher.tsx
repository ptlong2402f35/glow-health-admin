import React, { useEffect, useState } from "react";
import { DialogWrapSmall } from "../../../controls/components/dialogWrap/DialogWrap";
import { VoucherUser } from "../../../../models/UserGlow";
import moment from "moment";
import {
	DialogGetVoucherButton,
	DialogGetVoucherImg,
	DialogGetVoucherInfo,
	DialogGetVoucherInner,
	DialogGetVoucherInnerImg,
	DialogGetVoucherTitle,
	DialogGetVoucherTitlev2,
	DialogGetVoucherWrap,
} from "../styled/StyledGetVoucher";
import { formatPrice } from "../../home/HomePageNew/DealHotHomePage";
import useGetOrder from "../hook/useGetInfoOrder";
import DialogGetInfoVoucher from "./DialogVoucherInfo";
import Orderv2 from "../../../../models/Orderv2";

export default function DialogGetVoucher(props: {
	isDialogOpen: boolean | undefined;
	setIsDialogOpen: (val: boolean) => void;
	infoVoucher?: VoucherUser;
	// reload: () => void;
}) {
	const [isDialogOrderOpen, setIsDialogOrderOpen] = useState(false);
	const { doOrder, infoOrder } = useGetOrder({});
	const handleGet = async () => {
		await doOrder(props.infoVoucher?.order?.id || 0);

		setIsDialogOrderOpen(true);
	};
	return (
		<DialogWrapSmall
			disableEnforceFocus={true}
			open={props.isDialogOpen || false}
			onClose={() => {
				props.setIsDialogOpen(false);
			}}
			hideFooter={true}
			title=" ">
			<DialogGetVoucherWrap>
				<DialogGetVoucherImg src="static/img/CheckVoucher.png" />
				<DialogGetVoucherTitle>Nhận thành công voucher</DialogGetVoucherTitle>
				<DialogGetVoucherTitlev2>
					{props.infoVoucher?.order?.booking?.[0]?.serviceName || ""}{" "}
					{props.infoVoucher?.order?.booking?.[0]?.unit || ""} chỉ{" "}
					{props.infoVoucher?.order?.totalPay?.toLocaleString() || 0}đ
				</DialogGetVoucherTitlev2>
				<DialogGetVoucherInfo>
					<DialogGetVoucherInner>
						<DialogGetVoucherInnerImg src="static/img/clock-circlev2.png" />{" "}
						<div>
							Hạn sử dụng:{" "}
							{(props.infoVoucher?.order?.expiredAt &&
								moment(props.infoVoucher?.order?.expiredAt).format("DD/MM/YYYY")) ||
								""}
						</div>
					</DialogGetVoucherInner>
					<DialogGetVoucherInner>
						<DialogGetVoucherInnerImg src="static/img/wallet-add01.png" />{" "}
						<div>
							Bạn sẽ được Glow hoàn tiền {props.infoVoucher?.order?.cashback?.toLocaleString() || 0}đ
						</div>
					</DialogGetVoucherInner>
				</DialogGetVoucherInfo>
				<DialogGetVoucherButton onClick={handleGet}>Xem chi tiết voucher</DialogGetVoucherButton>
			</DialogGetVoucherWrap>
			<DialogGetInfoVoucher
				isDialogOrderOpen={isDialogOrderOpen}
				setIsDialogOrderOpen={setIsDialogOrderOpen}
				infoOrder={infoOrder}
				setIsDialogOpen={props.setIsDialogOpen}
			/>
		</DialogWrapSmall>
	);
}
