import styled, { css } from "styled-components";
import { OrderStatusv2 } from "../../../../models/Orderv2";
import { GlowLink } from "../../home/GlowLink";

export const VoucherInnerWrap = styled.div`
	display: flex;
	margin-bottom: 20px;
	border-radius: 12px;
	cursor: pointer;
	box-shadow: 0px 4px 16px 0px #080d080a;
	width: 1240px;
	background-color: #fff;
	@media screen and (max-width: 1000px) {
		width: 100%;
		padding: 10px 12px;
		// align-items: center;
	}
`;

export const VoucherInnerImg = styled.img`
	width: 158px;
	height: 134px;
	margin-right: 16px;
	object-fit: cover;
	border-radius: 12px 0 0 12px;
	@media screen and (max-width: 1000px) {
		width: 110px;
		height: 110px;
		border-radius: 12px;
	}
`;
export const VoucherInnerRight = styled.div`
	display: flex;
	padding: 16px 0px;

	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@media screen and (max-width: 1000px) {
		padding: 0px;
		width: calc(100% - 126px);
	}
`;
export const VoucherInnerRightNameSpa = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	color: #525652;
	margin-bottom: 4px;
	@media screen and (max-width: 1000px) {
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
		margin-bottom: 6px;
	}
`;

export const VoucherInnerRightNameVoucher = styled.div`
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	margin-bottom: 4px;
	@media screen and (max-width: 1000px) {
		margin-bottom: 6px;
	}
`;

export const VoucherInnerRightNameHSDWrap = styled.div`
	display: flex;
	align-items: flex-start;
	color: #525652;
	margin-bottom: 4px;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const VoucherInnerRightNameTime = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;
	margin-bottom: 0px;
	@media screen and (max-width: 1000px) {
		margin-bottom: 6px;
	}
`;
export const VoucherInnerRightNameTimeImg = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 4px;
`;
export const VoucherInnerRightNameTimeContent = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	@media screen and (max-width: 1000px) {
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
	}
`;
export const VoucherInnerRightNameCaskBack = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0px;
	@media screen and (max-width: 1000px) {
		margin-bottom: 6px;
	}
`;

export const VoucherInnerRightNameStatus = styled.div<{ color: string }>`
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
	color: #e78120;
	color: ${(props) => {
		switch (props.color) {
			case OrderStatusv2.Done:
				return "#5B7A4F";
			case OrderStatusv2.Approved:
			case OrderStatusv2.Pending:
				return "#E78120";
			default:
				return "#DB281F";
		}
	}};
	@media screen and (max-width: 1000px) {
		font-size: 15px;
		font-style: normal;
		font-weight: 500;
		line-height: 22px;
	}
`;

export const VoucherInnerName = styled.h1`
	color: #080d08;
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: 40px;
	margin-top: 16px;
	text-align: left;
	margin: 4px 0px 12px 0;
	@media screen and (max-width: 1000px) {
		margin: 0px 12px 12px 0;
		font-size: 24px;
		line-height: 32px;
	}
`;

export const VoucherInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const VoucherListWrap = styled.div`
	width: 1240px;
	margin: auto;
	@media screen and (max-width: 1000px) {
		width: 100%;
		padding: 8px 16px 16px;
	}
`;

export const VoucherListBCWrap = styled.div`
	display: inline-flex;
	align-items: center;
	color: #080d08;
	margin-top: 12px;
	@media screen and (max-width: 1000px) {
		margin-bottom: 0px;
		margin-top: 0px;
	}
`;
export const VoucherListBC1 = styled(GlowLink)`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	margin-right: 8px;
	text-decoration: none;
	color: #838683;
	&:hover {
		font-weight: bold;
	}
	@media screen and (max-width: 1000px) {
		font-size: 12px;
	}
`;

export const VoucherListBC3 = styled(GlowLink)`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	margin-left: 8px;
	text-decoration: none;
	color: black;
	&:hover {
		font-weight: bold;
	}
	@media screen and (max-width: 1000px) {
		font-size: 12px;
	}
`;

export const SupportUserWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SupportUserQRWrap = styled.div`
	// margin-top:24px;
	width: 243px;
	height: 252px;
	display: flex;
	align-items: flex-end;
`;
export const SupportUserQR = styled.img`
	width: 243px;
	height: 252px;
`;

export const SupportUserInfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const SupportUserInfoName = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
	margin-bottom: 12px;
`;
export const SupportUserInfoContact = styled.div`
	display: flex;
	align-items: flex-start;
	width: 568px;
	margin-bottom: 24px;
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 188px;
	}
`;

export const SupportUserInfoContactInner = styled.div`
	// width: 172px;
	height: 22px;
	display: flex;
	align-items: center;
`;
export const SupportUserInfoContactInnerv2 = styled(SupportUserInfoContactInner)`
	@media screen and (max-width: 768px) {
		margin-top: 24px;
	}
`;
export const SupportUserInfoContactInnerName = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
`;

export const SupportUserInfoContactInnerImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 6px;
`;
