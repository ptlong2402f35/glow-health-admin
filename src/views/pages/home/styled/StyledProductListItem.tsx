import styled from "styled-components";

export const ProductListItemWrap = styled.div`
	margin-right: 20px;
	margin-bottom: 32px;
	float: left;
	width: calc(25% - 20px);
	text-align: left;
	max-width: 280px;

	&.item-single {
		display: inline-block;
		float: none;
		margin-right: 0px;
		width: 25%;
	}

	@media screen and (max-width: 768px) {
		width: calc(50% - 12px);
		margin-right: 12px;
		margin-bottom: 12px;

		&.item-single {
			width: 65%;
		}
	}
`;

export const ProductListItemWrapHorizon = styled.div`
	margin-right: 20px;
	margin-bottom: 8px;
	float: left;
	width: 232px;
	text-align: left;

	&:first-child {
		margin-left: 2px;
	}

	&:last-child {
		margin-right: 50px;
	}

	@media screen and (max-width: 768px) {
		width: 150px;
		margin-right: 12px;
		margin-bottom: 12px;

		&:first-child {
			margin-left: 16px;
		}

		&.item-single {
			width: 65%;
		}
	}
`;

export const ProductListItemInner = styled.div`
	border-radius: 12px;
	box-shadow: 0px 0px 4px #d0d0d0;
	overflow: hidden;

	&:hover {
		cursor: pointer;
		box-shadow: 0px 0px 10px #c0c0c0;
	}
`;

export const ProductListItemImg = styled.div`
	position: relative;
	cursor: pointer;
`;

export const ProductListItemImgFrame = styled.div`
	width: 50%;
	padding: 50%;
	box-sizing: border-box;
`;

export const ProductListItemImgInner = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const ProductListItemDesc = styled.div<{
	$isSingle?: boolean;
}>`
	padding: 24px 8px 24px 20px;
	background-color: #fff;
	${(props) => props.$isSingle && "padding-bottom:0;"}

	@media screen and (max-width: 768px) {
		padding: 6px 8px;
	}
`;

export const ProductListItemDescInner = styled.div``;

export const ProductListItemDescTitle = styled.div`
	color: var(--text-color);
	margin-bottom: 6px;
	height: 2.6em;
	line-height: 1.3em;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export const ProductListItemDescPrice = styled.div`
	margin-top: 12px;
	position: relative;
	text-align: left;

	&:last-child {
		margin-bottom: 0px;
	}
`;

export const ProductListItemDescPriceLabel = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	color: var(--text-color2);
`;

export const ProductListItemDescPriceValue = styled.div`
	position: absolute;
	bottom: 1px;
	left: 128px;
	color: var(--text-color0);
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	font-weight: 600;

	&.color-red {
		color: var(--alert-color);
	}

	&.color-green {
		color: var(--alert-color);
	}

	&.color-blur {
		color: var(--text-color2);
		font-weight: normal;
	}

	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
	@media screen and (max-width: 980px) {
		left: unset;
		right: 16px;
	}
`;
export const HomeSearchEmptyProdImgWrap = styled.div`
	width: 400px;
	height: 400px;
	border-radius: 50%;
	overflow: hidden;
	margin-bottom: 22px;

	@media screen and (max-width: 768px) {
		width: calc(100% - 80px);
		height: unset;
	}
`;
export const HomeSearchEmptyProdWrap = styled.div`
	margin-top: 12px;
	margin-bottom: 132px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
export const HomeSearchEmptyProdImg = styled.img`
	width: 100%;
	height: 100%;
`;
export const HomeSearchEmptyProdTitle = styled.div`
	font-weight: 700;
	font-size: 32px;
	line-height: 28px;
	text-align: center;
	color: #fff;
	@media screen and (max-width: 768px) {
		font-size: 24px;
		line-height: 28px;
	}
`;
