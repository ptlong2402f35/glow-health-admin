import styled from "styled-components";
import { StylePersonalLabelBank } from "../../personal/component/StylePerson";

export const BannerClusterImgWrap = styled.div`
	display: flex;
	overflow-x: auto;
`;
export const BannerClusterImgmap = styled.div`
	width: 200px;
`;
export const StyleBannerContentAvt = styled.div`
	width: 180px;
	height: 180px;
	cursor: pointer;
	overflow: hidden;
	border: 1px solid #b6b6b6;
	position: relative;
	border-radius: 16px;
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100px;
		min-width: 180px;
	}
`;
export const BannerItemsWrap = styled.div``;

export const AdminReviewBannerWrap = styled.div`
	margin-top: 40px;
`;
export const AdminReviewBannerIngredient = styled.div`
margin-top: 20px;
padding: 20px;
border: 2px solid rgb(204, 204, 204);
border-radius: 20px;
}
`;
export const AdminReviewBannerItems = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const AdminReviewBannerItem = styled.div`
margin:0 12px;
}
`;
export const AdminReviewBannerItemAction = styled.div`
	color: var(--text-color2);
	font-family: SF-Pro-Display;
	margin-bottom: 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 180px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const AdminReviewBannerGroup = styled(StylePersonalLabelBank)`
font-size:16px;
}
`;
export const AdminAddBannerWrap = styled.div`
width: 200px;
}
`;
export const AdminReviewBannerButtonWrap = styled.div`
display:flex;
}
`;
export const BannerHanldeAddItemWrap = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px 0;
`;
export const BannerHanldeAddItemButton = styled.button`
	padding: 6px 12px;
	border-radius: 100px;
	background-color: var(--primary-bold-color);
	border: 1px solid var(--primary-bold-color);
	color: #fff;
`;
export const BannerHanldeDeleteItemWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;
export const BannerHanldeDeleteItemButton = styled.button`
	border: 1px solid var(--alert-color);
	padding: 8px 20px;
	background-color: var(--alert-color);
	color: #fff;
	border-radius: 100px;
`;
export const BannerMoveButtonWrap = styled.div`
	display: flex;
	gap: 10px;
`;

export const BannerMoveButton = styled.button`
	background-color: #007bff;
	color: white;
	border: none;
	padding: 5px 10px;
	cursor: pointer;
	border-radius: 100px;
	&:hover {
		background-color: #0056b3;
	}
`;
