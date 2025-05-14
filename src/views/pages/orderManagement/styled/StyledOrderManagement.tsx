import styled, { css } from "styled-components";
import { OrderStatus } from "../../../../models/Order";
import { PageWrapStyle } from "../../../controls/components/form/Page";

export const OrderManagementTabOuter = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	@media screen and (max-width: 1282px) {
		width: auto;
		padding: 0 20px;
	}
`;
export const OrderManagementTabInner = styled.div``;
export const OrderManagementPage = styled.div`
	${PageWrapStyle}
	min-height:100%;
	background-color: var(--background-color);
	flex-direction: column;
	@media screen and (max-width: 768px) {
		background-color: var(--background-color);
	}
`;

export const OrderManagementTabList = styled.div`
	margin-bottom: 24px;

	@media screen and (max-width: 768px) {
		margin-bottom: 16px;
	}
`;

export const OrderManagementBox = styled.div`
	background-color: #fff;
	border-bottom: 2px solid var(--border-color);
	padding: 20px 0;
	@media screen and (max-width: 768px) {
		& {
		}
	}
`;
export const FilterOrder = styled.div`
	display: flex;
	justify-content: flex-start;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const FilterFinacial = styled(FilterOrder)`
	display: flex;
	justify-content: flex-start;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		flex-direction: row;
	}
`;
export const OrderManagementHeaderInBody = styled.div`
	margin-bottom: 8px;
	display: flex;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const OrderManagementHeaderInBodyRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		margin-bottom: 4px;
	}
`;
export const OrderManagementHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 16px;
	border-bottom: 1px solid var(--border-color);
	margin-bottom: 16px;

	@media screen and (max-width: 768px) {
		padding-bottom: 12px;
		margin-bottom: 8px;
	}
`;
export const OrderManagementBody = styled.div`
	display: flex;
	height: 120px;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		& {
			height: auto;
		}
		width: 100%;
	}
`;
export const OrderManagementHeaderContentLeft = styled.div``;
export const OrderManagementHeaderContentTime = styled.span`
	padding-right: 10px;
	font-weight: 500;
	// border-right: 1px solid var(--border-color);
	margin-right: 10px;
	color: var(--text-color0);

	@media screen and (max-width: 768px) {
		font-size: 12px;
		padding-right: 6px;
		margin-right: 6px;
	}
`;
export const OrderManagementHeaderContentCode = styled.span`
	font-weight: 600;
	color: var(--text-color0);

	@media screen and (max-width: 768px) {
		font-weight: normal;
		display: inline;
	}
`;
export const OrderManagementHeaderContentRight = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const FinancialManagementHeaderContentRight = styled(OrderManagementHeaderContentRight)`
	margin-bottom: 8px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const FinanManagementHeaderContentRight = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: inline;
	}
`;
export const OrderManagementHeaderContentStatus = styled.span<{
	colorType: number;
}>`
	margin-left: 20px;
	font-size: 12px;
	line-height: 20px;
	color: ${(props) =>
		props.colorType === OrderStatus.Purchased
			? "#FF9519"
			: props.colorType === OrderStatus.TemporarySettled
			? "#FF9519"
			: props.colorType === OrderStatus.Settled
			? "#0084E4"
			: props.colorType === OrderStatus.Canceled
			? " #FF0000"
			: ""};
	background-color: ${(props) =>
		props.colorType === OrderStatus.Purchased
			? "rgba(255, 149, 26, 0.1)"
			: props.colorType === OrderStatus.TemporarySettled
			? "rgba(255, 149, 26, 0.1)"
			: props.colorType === OrderStatus.Settled
			? "rgba(0, 132, 228, 0.1)"
			: props.colorType === OrderStatus.Canceled
			? "rgba(255, 0, 0, 0.1)"
			: ""};
	cursor: pointer;
	font-weight: 600;
	padding: 5px 10px;
	border-radius: 100px;

	@media screen and (max-width: 768px) {
	}
`;
export const OrderManagementBodyLeft = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		& {
			justify-content: flex-start;
		}
	}
`;
export const OrderManagementBodyRight = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		& {
			display: flex;
		}
	}
`;
export const OrderManagementBodyLeftImage = styled.img`
	border-radius: 8px;
	cursor: pointer;

	width: 100%;
	height: auto;
	object-fit: cover;
	@media screen and (max-width: 768px) {
	}
`;
export const OrderManagementBodyLeftImageBlock = styled.div`
	height: 120px;
	width: 120px;
	overflow: hidden;
	margin-right: 12px;
	@media screen and (max-width: 768px) {
		margin-top: 4px;
		height: 80px;
		width: 80px;
	}
`;
export const OrderManagementBodyLeftText = styled.div`
	@media screen and (max-width: 768px) {
	}
`;
export const OrderManagementHeaderTextTitle = styled.div``;
export const OrderManagementBodyRightTitleRes = styled.div`
	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		color: var(--text-color3);
		font-size: 12px;
		flex-direction: column;
	}
`;
export const OrderManagementBodyRightTitleV2Res = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: none;
		line-height: 20px;
		color: var(--text-color3);
		font-size: 12px;
	}
`;

export const OrderManagementBodyLeftTextTitle = styled.div`
	font-size: 16px;
	line-height: 24px;
	color: var(--text-color0);
	margin-bottom: 4px;
	font-weight: 700;

	display: block;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const OrderManagementBodyLeftTextClassify = styled.div``;
export const OrderManagementBodyLeftTextQuantity = styled.div``;
export const OrderManagementBodyRightTitle = styled.div`
	font-size: 14px;
	line-height: 28px;
	color: var(--text-color3);

	@media screen and (max-width: 768px) {
		font-size: 12px;
		line-height: 20px;
		min-width: 80px;
	}
`;
export const OrderManagementBodyRightPrice = styled.div``;
export const OrderManagementBodyLeftPrice = styled.div`
	font-size: 16px;
	line-height: 28px;
	font-weight: 600;
	color: var(--text-color0);
	text-align: right;
	@media screen and (max-width: 768px) {
		font-weight: 500;
	}
`;
export const OrderManagementBodyPrice = styled.div`
	font-size: 20px;
	line-height: 28px;
	font-weight: 600;
	color: #7cc246;
	text-align: right;
	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;
export const StyleNumberPaginationBox = styled.div`
	display: flex;
	justify-content: center;
	height: 38px;
	margin-bottom: 32px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
	}
`;

export const OrderManagementBodyRes = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		width: calc(100% - 84px);
	}
`;

export const OrderManagementStylePaidAmount = styled.span`
	@media screen and (max-width: 768px) {
		margin-left: 10px;
		color: var(--text-color0);
		font-size: 14px;
		line-height: 20px;
		font-weight: 600;
	}
`;
export const OrderManagementStyleRebateAmount = styled.span`
	@media screen and (max-width: 768px) {
		margin-left: 10px;
		color: var(--primary-color);
		font-size: 14px;
		line-height: 20px;
		font-weight: 600;
	}
`;
export const OrderManagementStyleTitle = styled.span`
	font-weight: 400;
	color: var(--text-color2);
	display: inline;
	@media screen and (max-width: 768px) {
		display: inline-block;
	}
`;
export const OrderManagementStyleTitleDate = styled(OrderManagementStyleTitle)`
	@media screen and (max-width: 400px) {
		display: none;
	}
`;
export const OrderManagementStyleTitleDateSmall = styled.span`
	display: none;
	@media screen and (max-width: 400px) {
		display: inline-block;
		font-weight: 400;
		color: var(--text-color2);
	}
`;
export const OrderManagementStyleTitleHide = styled(OrderManagementStyleTitle)`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const OrderManagementStyleTitleRes = styled.span`
	width: 80px;
	@media screen and (max-width: 768px) {
		padding-right: 5px;
	}
`;

export const OrderManagementHeaderContentRightRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: inline;
		float: right;
	}
`;

export const PageImgNoList = styled.img`
	max-width: 350px;
	@media screen and (max-width: 768px) {
		max-width: 200px;
	}
`;
export const PageImgNoListWrap = styled.div`
	text-align: center;
	@media screen and (max-width: 768px) {
	}
`;
export const PageNolist = styled.div`
	margin-top: 80px;
	@media screen and (max-width: 768px) {
		margin-top: 40px;
	}
`;
export const TitleNoList = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 20px;
	font-weight: 600;
	color: var(--text-color0);
	@media screen and (max-width: 768px) {
		margin-top: 20px;
		margin-bottom: 50px;
		font-size: 14px;
	}
`;

export const HomeOrderManagementPanelListBox = styled.div`
	margin-right: -20px;
	margin-bottom: 8px;

	@media screen and (max-width: 768px) {
		margin-bottom: 4px;
		margin-right: -12px;
	}
`;
export const PageOrderRes = css`
	border-radius: 8px;
	background-color: var(--background-color);
`;

export const PageOrderHeaderRes = css`
	padding: 14px 12px 0px 12px;
	border-radius: 8px;
	background-color: #fff;
`;

export const PageOrderTabHeaderRes = css`
	@media screen and (max-width: 768px) {
		& {
			display: block;
			width: 100%;

			@media screen and (max-width: 450px) {
				display: block;
				width: max-content;
			}
		}
	}
`;
export const CopyIcon = styled.span`
	margin-left: 10px;
	font-size: 14px;
	cursor: pointer;
	font-weight: 600;
	color: var(--text-color0);
	@media screen and (max-width: 768px) {
		display: inline;
	}
`;

export const OrderFilterBox = styled.div`
	width: 20%;
	margin-right: 12px;
	border-radius: 4px;
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 12px;
	}
`;
export const FinanFilterBox = styled(OrderFilterBox)`
	@media screen and (max-width: 768px) {
		width: 30%;
	}
`;
export const FinancialFilterBox = styled(OrderFilterBox)`
	@media screen and (max-width: 768px) {
		width: 30%;
	}
`;

export const OrderFilterBoxDate = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #b6b6b6;
	background-color: #fff;
	border-radius: 4px;
	margin-right: 12px;
	height: 40px;
	@media screen and (max-width: 768px) {
		margin-right: 0px;
		margin-bottom: 12px;
	}
`;
export const FinancialFilterBoxDateRes = styled(OrderFilterBoxDate)`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
	}
`;
export const FinancialFilterBoxDate = styled(OrderFilterBoxDate)`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const InputSearchOrder = styled.input`
	border: none;
	outline: none;
	font-size: 14px;
	::placeholder {
		color: #a3a3a3;
	}
	@supports (-webkit-overflow-scrolling: touch) {
		& {
			font-size: 16px;
		}
	}
`;

export const SearchOrderWrap = styled.div`
	border: 1px solid #b6b6b6;
	background-color: #fff;
	border-radius: 4px;
	position: relative;
	height: 40px;
	width: 100%;
	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
		width: 100%;
	}
`;
export const SearchProductBoxSearchBtn = styled.button`
	height: 100%;
	font-size: 14px;
	color: white;
	border: none;
	cursor: pointer;
	background-color: #fff;
	padding: 8px 16px;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}
}
`;
export const SearchIcon = styled.i`
	font-size: 18px;
	color: #7cc246;
	@media screen and (max-width: 768px) {
		margin-right: 6px;
		font-size: 18px;
	}
`;
export const SearchProductBoxDeleteInputBtn = styled.button`
	position: absolute;
	top: calc(50% - 12px);
	display: flex;
	align-items: center;
	right: 18px;
	background: transparent;
	height: 24px;
	font-size: 18px;
	color: var(--text-color0);
	border: none;
	cursor: pointer;
	@media screen and (max-width: 768px) {
		right: 18px;
	}
	& img {
		width: 14px;
	}
`;
export const OrderIconTick = styled.div`
	display: inline;
	height: 20px;
	width: 20px;
	@media screen and (max-width: 768px) {
		width: 16px;
	}
`;
export const TickIconBuy = styled.div`
	height: 20px;
	width: 20px;
	color: #7cc246;
	@media screen and (max-width: 768px) {
		width: 16px;
	}
`;
export const TickIconReceive = styled.div`
	height: 20px;
	width: 20px;
	color: #b6b6b6;
	@media screen and (max-width: 768px) {
		width: 16px;
	}
`;
export const OrderManagementHeaderContent = styled.div``;
export const CopyImg = styled.img`
	width: 16px;
`;
export const ContentCodeTittle = styled.span`
	@media screen and (max-width: 768px) {
		font-weight: 400;
		color: var(--text-color2);
	}
`;
export const ContentCode = styled.span`
	@media screen and (max-width: 768px) {
		font-weight: 500;
		color: var(--text-color0);
		display: inline-block;
	}
	@media screen and (max-width: 400px) {
		display: none;
	}
`;
export const ContentCodev2 = styled.span`
	@media screen and (max-width: 400px) {
		font-weight: 500;
		color: var(--text-color0);
		display: inline-block;
	}
	@media screen and (min-width: 401px) {
		display: none;
	}
`;
export const StyleFilterPerPage = styled.div`
	margin-right: 80px;
	height: 38px;
	display: flex;
	@media screen and (max-width: 768px) {
		margin-right: 0;
	}
`;

export const StyleFilterPerPageWrap = styled.div`
display:flex;
justify-content: flex-end;
padding-right:60px;
margin-top: 20px;

@media screen and (max-width: 768px) {
	justify-content:center;
	padding-right:0px;
`;

export const StyleFilterPerPageTitle = styled.div`
	color: #808080;
	margin: auto 12px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const StyleFilterPerPageTitleRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: inline;
		color: #808080;
		margin: auto 12px;
	}
	@media screen and (max-width: 360px) {
		display: none;
	}
`;
