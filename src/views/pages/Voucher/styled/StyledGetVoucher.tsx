import styled, { css } from "styled-components";
import { OrderStatusv2 } from "../../../../models/Orderv2";

export const DialogGetVoucherWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	align-items: center;
	margin-top: -24px;
	@media screen and (max-width: 768px) {
		margin-top: 0px;
	}
`;

export const DialogGetVoucherImg = styled.img`
	width: 80px;
	height: 80px;
	margin-bottom: 16px;
`;

export const DialogGetVoucherTitle = styled.div`
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
`;

export const DialogGetVoucherTitlev2 = styled(DialogGetVoucherTitle)`
	margin-bottom: 8px;
`;
export const DialogGetVoucherInfo = styled.div`
	margin-bottom: 16px;
`;
export const DialogGetVoucherInner = styled.div`
	margin-bottom: 8px;
	display: flex;
	align-items: center;
`;

export const DialogGetVoucherInnerImg = styled.img`
	margin-right: 8px;
	width: 20px;
	height: 20px;
`;
export const DialogGetVoucherButton = styled.div`
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	display: flex;
	height: 44px;
	padding: 10px 24px;
	justify-content: center;
	align-items: center;
	background-color: #5b7a4f;
	color: #fff;
	width: 100%;
	border-radius: 100px;
	cursor: pointer;
`;

export const DialogGetInfoVoucherStatus = styled.div<{ color: string }>`
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
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
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 20px;
	}
`;

export const DialogGetInfoVoucherWrap = styled.div`
	margin-bottom: 24px;
`;

export const DialogGetInfoVoucherName = styled.div`
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 28px
margin-bottom:12px
@media screen and (max-width: 768px) {
	font-size: 18px;
line-height: 24px;
margin-bottom:10px
}
`;

export const DialogGetInfoVoucherCall = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	margin-bottom: 4px;
	@media screen and (max-width: 768px) {
		font-size: 13px;
		line-height: 18px;
	}
`;

export const DialogGetVoucherHSD = styled.div`
	color: #838683;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	margin-bottom: 24px;
	@media screen and (max-width: 768px) {
		font-size: 13px;
		line-height: 18px;
		margin-bottom: 20px;
	}
`;

export const DialogGetVoucherImgWrap = styled.div`
	display: flex;
	padding: 16px;

	flex-direction: column;
	align-items: center;
	border-radius: var(--Number-12, 12px);
	border: 1px dashed #b5b6b5;
`;

export const DialogGetVoucherImgQr = styled.img`
	width: 150px;
	height: 151px;
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		width: 128px;
		height: 129px;
		margin-bottom: 6px;
	}
`;

export const DialogGetVoucherCode = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
	color: #5b7a4f;
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		font-size: 12px;
		line-height: 18px;
		margin-bottom: 6px;
	}
`;
export const DialogGetVoucherCallback = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	color: #838683;
	text-align: center;
`;

export const DialogGetInfoStaffWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 12px;
	border-bottom: 1px solid #f3f3f3;
`;
export const DialogGetInfoStaffLeftWrap = styled.div`
	display: flex;
	align-items: center;
`;

export const DialogGetInfoStaffRightWrap = styled.div`
	display: flex;
	align-items: center;
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
	}
`;
export const DialogGetInfoStaffLeftImg = styled.img`
	width: 44px;
	border-radius: 100px;
	height: 44px;
	object-fit: cover;
	margin-right: 8px;
`;

export const DialogGetInfoStaffLeftInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const DialogGetInfoStaffLeftInnerTop = styled.div`
	display: flex;
	align-items: center;
`;
export const DialogGetInfoStaffLeftInnerTopName = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px;
	margin-right: 4px;
`;

export const DialogGetInfoStaffLeftInnerBottom = styled.div`
	display: flex;
	align-items: center;
`;
export const DialogGetInfoStaffLeftInnerBottomStar = styled.div`
	display: flex;
	align-items: center;
	margin-right: 9px;
`;
export const DialogGetInfoStaffLeftInnerBottomStarImg = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 4px;
`;
export const DialogGetInfoStaffLeftInnerBottomStarNumber = styled.div`
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px;
`;
export const DialogGetInfoStaffLeftInnerBottomProvince = styled.div`
	color: #525652;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 16px; ;
`;

export const DialogGetInfoStaffRightCall = styled.div`
	display: flex;
	align-items: center;
`;
export const DialogGetInfoStaffRightCallImgWrap1 = styled.div`
	display: flex;
	width: 36px;
	height: 36px;
	justify-content: center;
	align-items: center;
	margin-right: 12px;
`;
export const DialogGetInfoStaffRightCallImgWrap = styled.div`
	display: flex;
	width: 36px;
	height: 36px;
	justify-content: center;
	align-items: center;
`;
export const DialogGetInfoStaffRightCallImg = styled.img`
	width: 36px;
	height: 36px;
`;
export const StaffInfoAutoPlayImgCheckMiniSize = styled.img`
	width: 16px;
	height: 16px;
`;

export const DialogGetInfoContactWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 12px 0 24px 0;
`;

export const DialogGetInfoContact = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 12px;
`;

export const DialogGetInfoContactv2 = styled(DialogGetInfoContact)`
	align-items: flex-start;
`;

export const DialogGetInfoContactImg = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;
export const DialogGetInfoContactContent = styled.div`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
`;
export const DialogGetInfoContactContentU = styled.u`
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
`;

export const DialogGetInfoVoucherContainerWrap = styled.div`
	height: 590px;
	overflow-y: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
	::-webkit-scrollbar {
		display: none;
	}
`;
