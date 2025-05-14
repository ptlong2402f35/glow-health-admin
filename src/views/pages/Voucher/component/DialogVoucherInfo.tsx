import React, { useEffect, useState } from "react";
import { DialogWrapSmall } from "../../../controls/components/dialogWrap/DialogWrap";
import { VoucherUser } from "../../../../models/UserGlow";
import moment from "moment";
import {
	DialogGetInfoContact,
	DialogGetInfoContactContent,
	DialogGetInfoContactContentU,
	DialogGetInfoContactImg,
	DialogGetInfoContactWrap,
	DialogGetInfoContactv2,
	DialogGetInfoStaffLeftImg,
	DialogGetInfoStaffLeftInner,
	DialogGetInfoStaffLeftInnerBottom,
	DialogGetInfoStaffLeftInnerBottomProvince,
	DialogGetInfoStaffLeftInnerBottomStar,
	DialogGetInfoStaffLeftInnerBottomStarImg,
	DialogGetInfoStaffLeftInnerBottomStarNumber,
	DialogGetInfoStaffLeftInnerTop,
	DialogGetInfoStaffLeftInnerTopName,
	DialogGetInfoStaffLeftWrap,
	DialogGetInfoStaffRightCallImg,
	DialogGetInfoStaffRightCallImgWrap,
	DialogGetInfoStaffRightCallImgWrap1,
	DialogGetInfoStaffRightWrap,
	DialogGetInfoStaffWrap,
	DialogGetInfoVoucherCall,
	DialogGetInfoVoucherContainerWrap,
	DialogGetInfoVoucherName,
	DialogGetInfoVoucherStatus,
	DialogGetInfoVoucherWrap,
	DialogGetVoucherButton,
	DialogGetVoucherCallback,
	DialogGetVoucherCode,
	DialogGetVoucherHSD,
	DialogGetVoucherImg,
	DialogGetVoucherImgQr,
	DialogGetVoucherImgWrap,
	DialogGetVoucherInfo,
	DialogGetVoucherInner,
	DialogGetVoucherInnerImg,
	DialogGetVoucherTitle,
	DialogGetVoucherWrap,
	StaffInfoAutoPlayImgCheckMiniSize,
} from "../styled/StyledGetVoucher";
import { formatPrice } from "../../home/HomePageNew/DealHotHomePage";
import Orderv2, {
	OrderStatusLabelMapv3,
	OrderStatusLabelMapv3EN,
	OrderStatusLabelMapv3KR,
	OrderStatusv2,
} from "../../../../models/Orderv2";
import { StaffInfoAutoPlayImgCheckBigSize } from "../../home/styled/HomeStyles";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";

export default function DialogGetInfoVoucher(props: {
	isDialogOrderOpen: boolean;
	setIsDialogOrderOpen: (val: boolean) => void;
	infoOrder?: Orderv2;
	setIsDialogOpen: (val: boolean) => void;
}) {
	const customerAddress = JSON.parse(props.infoOrder?.customerAddress || "[]");
	const addressInfo = [];

	if (customerAddress.address) {
		addressInfo.push(customerAddress.address);
	}
	if (customerAddress.commune?.name) {
		addressInfo.push(customerAddress.commune.name);
	}
	if (customerAddress.district?.name) {
		addressInfo.push(customerAddress.district.name);
	}
	if (customerAddress.province?.name) {
		addressInfo.push(customerAddress.province.name);
	}

	const addressString = addressInfo.join(", ");

	const makePhoneCall = (phoneNumber: any) => {
		window.location.href = `tel:${phoneNumber}`;
	};

	const sendTextMessage = (phoneNumber: any) => {
		window.location.href = `sms:${phoneNumber}`;
	};
	const { lang } = useLanguage();
	const orderStatusLabelMap =
		lang === "en" ? OrderStatusLabelMapv3EN : lang === "kr" ? OrderStatusLabelMapv3KR : OrderStatusLabelMapv3;
	return (
		<DialogWrapSmall
			disableEnforceFocus={true}
			open={props.isDialogOrderOpen || false}
			onClose={() => {
				props.setIsDialogOrderOpen(false);
				props.setIsDialogOpen(false);
			}}
			center={true}
			hideFooter={true}
			title={TranslateLabels[lang]?.LOGIN_VOUCHER_DETAIL}>
			<DialogGetInfoVoucherContainerWrap>
				<DialogGetInfoVoucherStatus color={props.infoOrder?.status || OrderStatusv2.Pending}>
					{props.infoOrder && orderStatusLabelMap.get(props.infoOrder?.status || OrderStatusv2.Pending)}
				</DialogGetInfoVoucherStatus>
				{(props.infoOrder?.status == OrderStatusv2.Pending ||
					props.infoOrder?.status == OrderStatusv2.Approved) && (
					<DialogGetInfoVoucherWrap>
						<DialogGetInfoVoucherName>
							{TranslateLabels[lang]?.LOGIN_VOUCHER} {props.infoOrder?.booking?.[0]?.serviceName}{" "}
							{props.infoOrder?.booking?.[0]?.unit} {TranslateLabels[lang]?.LOGIN_ONLY}{" "}
							{props.infoOrder?.booking?.[0]?.price?.toLocaleString()}đ
						</DialogGetInfoVoucherName>
						<DialogGetInfoVoucherCall>
							{TranslateLabels[lang]?.LOGIN_PLEAL_CONTACT}
						</DialogGetInfoVoucherCall>
						<DialogGetVoucherHSD>{props.infoOrder?.booking?.[0]?.programNote || ""}</DialogGetVoucherHSD>
						<DialogGetVoucherHSD>
							{TranslateLabels[lang]?.NEW_PAGE_EXPIRATION_DATE}:{" "}
							{(props.infoOrder?.expiredAt && moment(props.infoOrder?.expiredAt).format("DD/MM/YYYY")) ||
								""}
						</DialogGetVoucherHSD>
						<DialogGetVoucherImgWrap>
							<DialogGetVoucherImgQr
								src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${props.infoOrder?.detailLink}`}
							/>

							<DialogGetVoucherCode>
								{TranslateLabels[lang]?.LOGIN_VOUCHER_CODE}: {props.infoOrder?.code || ""}
							</DialogGetVoucherCode>
							<DialogGetVoucherCallback>
								{TranslateLabels[lang]?.LOGIN_CODE_GLOW_CASHBACK}
							</DialogGetVoucherCallback>
						</DialogGetVoucherImgWrap>
					</DialogGetInfoVoucherWrap>
				)}
				<DialogGetInfoStaffWrap>
					<DialogGetInfoStaffLeftWrap>
						<DialogGetInfoStaffLeftImg
							src={props.infoOrder?.staff?.user?.urlImage || "./static/img/User.png"}
						/>
						<DialogGetInfoStaffLeftInner>
							<DialogGetInfoStaffLeftInnerTop>
								<DialogGetInfoStaffLeftInnerTopName>
									{props.infoOrder?.staff?.name || props.infoOrder?.staff?.user?.phone || ""}
								</DialogGetInfoStaffLeftInnerTopName>
								<>
									{props.infoOrder?.staff?.validateStatus === 3 && (
										<StaffInfoAutoPlayImgCheckMiniSize src="./static/img/Check.png" alt="Biểu tượng xác minh"/>
									)}{" "}
								</>
							</DialogGetInfoStaffLeftInnerTop>
							<DialogGetInfoStaffLeftInnerBottom>
								<DialogGetInfoStaffLeftInnerBottomStar>
									<DialogGetInfoStaffLeftInnerBottomStarImg src="./static/img/Star.png" alt="Biểu tượng đánh giá"/>
									<DialogGetInfoStaffLeftInnerBottomStarNumber>
										{Math.round((props.infoOrder?.staff?.rateAvg || 0) * 10) / 10}
									</DialogGetInfoStaffLeftInnerBottomStarNumber>
								</DialogGetInfoStaffLeftInnerBottomStar>
								<DialogGetInfoStaffLeftInnerBottomProvince></DialogGetInfoStaffLeftInnerBottomProvince>
							</DialogGetInfoStaffLeftInnerBottom>
						</DialogGetInfoStaffLeftInner>
					</DialogGetInfoStaffLeftWrap>
					<DialogGetInfoStaffRightWrap>
						<DialogGetInfoStaffRightCallImgWrap1 onClick={() => makePhoneCall(customerAddress?.phone)}>
							<DialogGetInfoStaffRightCallImg src="./static/img/ButtonCall.png" />
						</DialogGetInfoStaffRightCallImgWrap1>
						<DialogGetInfoStaffRightCallImgWrap onClick={() => sendTextMessage(customerAddress?.phone)}>
							<DialogGetInfoStaffRightCallImg src="./static/img/ButtonAdress.png" />
						</DialogGetInfoStaffRightCallImgWrap>
					</DialogGetInfoStaffRightWrap>
				</DialogGetInfoStaffWrap>
				<DialogGetInfoContactWrap>
					<DialogGetInfoContact>
						<DialogGetInfoContactImg src="./static/img/wallet-add01.png" />
						<DialogGetInfoContactContent>
							{TranslateLabels[lang]?.LOGIN_YOUR_WILL_CASHBACK}{" "}
							{props.infoOrder?.cashback?.toLocaleString() || 0}đ
						</DialogGetInfoContactContent>
					</DialogGetInfoContact>

					<DialogGetInfoContact>
						<DialogGetInfoContactImg src="./static/img/call001.png" />
						<DialogGetInfoContactContentU>{customerAddress?.phone}</DialogGetInfoContactContentU>
					</DialogGetInfoContact>

					<DialogGetInfoContactv2>
						<DialogGetInfoContactImg src="./static/img/location03.png" />
						<DialogGetInfoContactContentU>{addressString} </DialogGetInfoContactContentU>
					</DialogGetInfoContactv2>
				</DialogGetInfoContactWrap>
			</DialogGetInfoVoucherContainerWrap>
		</DialogWrapSmall>
	);
}
