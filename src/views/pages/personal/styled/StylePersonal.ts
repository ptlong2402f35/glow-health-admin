import styled from "styled-components";

export const StyledPersonalPagev2Wrap = styled.div`
	width: 100%;
	background-color: #f5f5f5;
`;
export const StyledPersonalPagev2bg = styled.div`
	height: 178px;
	width: 100%;
	background-color: var(--primary-colorv2);
	position: relative;
	display: flex;
	justify-content: center;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-image: url(./static/img/bg-personal.png);
	}
`;
export const StyledPersonalPagev2ContentWrap = styled.div`
	width: 100%;
	background: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: -150px;

	@media screen and (max-width: 768px) {
		padding: 0 20px;
	}
`;

export const ServicePersonalHeadTitle = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 32px;
	margin-bottom: 12px;
`;

export const PersonalReviewWrap = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid;
`;
export const PersonalReviewCustomer = styled.div`
	display: flex;
	align-items: flex-start;
`;
export const PersonalReviewImg = styled.img`
	height: 32px;
	width: 32px;
`;
export const PersonalReviewRate = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const PersonalReviewComment = styled.div`
	display: flex;
`;
export const PersonalReviewTitle = styled.div`
	display: flex;
	font-size: 16px;
	font-weight: 600;
`;
export const PersonalReviewName = styled.div`
	margin-left: 8px;
`;
export const PersonalMargin = styled.div`
	margin-bottom: 40px;
`;
export const StyleServicePriceWrap = styled.div`
	margin-bottom: 8px;
`;
export const StyleServicePriceInputFlex = styled.div`
	display: flex;
`;
export const StyleButtonPersonalPriceButtonWrap = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
}
`;
export const StyleButtonPersonalPriceButton = styled.button`
padding:8px;
border-radius:8px;
background-color:rgb(124, 194, 70);
color:#fff;
border:none;
}
`;
export const StyleButtonPersonalPriceButtonRemove = styled.button`
border: none;
padding: 8px;
color: #fff;
background-color: var(--alert-color);
border-radius: 8px;

}
`;
export const PriceLinkPrice = styled.div`
	padding: 10px 0px;
	color: black;
	background-color: #ccc;
	border-radius: 12px;
	transition: background-color 0.3s ease 0s;
	width: 130px;

	&:hover {
		min-width: 100px;
		background-color: #ccc;
		cursor: pointer;
		font-weight: 700;
	}
	@media screen and (max-width: 768px) {
		min-width: 100px;
	}
`;
export const PriceFafaBan = styled.div`
	color: red;
	cursor: pointer;

	&:hover {
	}
`;
export const AddImgProfilePersonal = styled.div`
	display: flex;
`;
export const AddImgProfilePersonalLabel = styled.label`
	font-size: 16px;
	font-weight: 600;
	margin-right: 12px;
`;

export const PriceFafaBanBlack = styled.div`
	// color: red;
	cursor: pointer;

	&:hover {
	}
`;
