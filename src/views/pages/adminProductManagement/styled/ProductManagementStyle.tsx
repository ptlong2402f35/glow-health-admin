import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TableRow } from "@material-ui/core";

export const ProductTableRowStyle = styled(TableRow)<{
	$RebateActive?: boolean;
}>`
	& > td {
		position: relative;
		border-bottom: 1px solid rgba(224, 224, 224, 1);
		border-right: 1px solid rgba(224, 224, 224, 1);
		font-family: inherit;
	}
	& > td::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0.5px;
		background-color: var(--border-color);
	}
	& > td:first-child::before {
		left: 16px;
	}
	& > td:last-child::before {
		right: 16px;
	}
	& > th {
		position: relative;
		border-bottom: none !important;
	}
	& > th::after {
		content: "";
		position: absolute;
		bottom: 20px;
		top: 20px;
		right: 0.25px;
		width: 1px;
		background-color: var(--text-color2);
	}
	& > th:first-child::after {
	}
	& > th:last-child::after {
		opacity: 0;
	}
	${(props) => (props.$RebateActive ? "background-color:rgba(87,157,45,.2);" : null)}
`;

export const UserFormButtonAccept = styled.button<{ disabledButton?: boolean }>`
	text-decoration: none;
	border: 1px solid var(--primary-color);
	background-color: var(--primary-color);
	color: #fff;
	padding: 10px 40px 12px 40px;
	border-radius: 8px;
	font-size: 16px;
	line-height: 17px;
	font-weight: 600;
	margin-left: 10px;
	opacity: ${(props) => (props.disabledButton ? 0.4 : 1)};
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		padding: 10px 30px 12px 30px;
	}
`;

export const AdminProductrManagementFilterWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 24px 12px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		max-height: 0;
		visibility: hidden;
		margin-bottom: 20px;
		transition: max-height 0.3s ease-in-out;
		&.visible {
			max-height: 800px;
			visibility: visible;
		}
	}
`;
export const AdminProductrManagementFilterLeft = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: flex;
		-webkit-box-pack: justify;
		flex-direction: column;
	}
`;
export const AdminProductrManagementFilterLeftv2 = styled(AdminProductrManagementFilterLeft)`
	width: 65%;

`;
export const AdminProductrManagementFilterRight = styled.div``;
export const AdminProductrManagementFilterStatus = styled.div`
	@media screen and (max-width: 768px) {
		width: 100%;
		margin-bottom: 12px;
	}
`;
export const AdminVoucherManagementFilterStatus = styled(AdminProductrManagementFilterStatus)`
	width: 40%;
`;
export const AdminProductrManagementFilterSearch = styled.div`
	@media screen and (max-width: 768px) {
		margin-top: 8px;
	}
`;
export const AdminProductrManagementFilterSearchSDT = styled.div`
	margin-left: 20px;
	@media screen and (max-width: 768px) {
		margin-top: 8px;
	}
`;
export const UserFormServiceButtonClose = styled(UserFormButtonAccept)`
	border-radius: 100px;
	background-color: #b6b6b6;
	border: 1px solid #b6b6b6;
	margin-left: 0px;
	margin-bottom: 10px;
	// width: calc(50% - 5px);
	margin-bottom: 10px;
`;
export const UserFormServiceButtonLang = styled(UserFormButtonAccept)`
	border-radius: 100px;
	background-color: #4c8df6ff;
	border: 1px solid #4c8df6ff;
	margin-left: 0px;
	margin-bottom: 10px;
	// width: calc(50% - 5px);
	margin-bottom: 10px;
`;
export const UserFormServiceButtonCreated = styled(UserFormButtonAccept)`
	border-radius: 100px;
	border: 1px solid ${(props) => (props.disabled ? "var(--primary-color-blur)" : "#7cc246")};
	// width: calc(50% - 5px);
	margin-bottom: 10px;
	background-color: ${(props) => (props.disabled ? "var(--primary-color-blur)" : "#7cc246")};
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
export const UserFormServiceButtonCreatedv2 = styled(UserFormButtonAccept)`
	border-radius: 100px;
	border: 1px solid ${(props) => (props.disabled ? "var(--primary-color-blur)" : "#7cc246")};
	// width: calc(50% - 5px);
	margin-bottom: 10px;
	background-color: ${(props) => (props.disabled ? "var(--primary-color-blur)" : "#7cc246")};
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	margin-right: 10px;
`;
export const ButtonAddAdminProductManagement = styled.button`
	border-radius: 100px;
	padding: 8px 12px;
	background-color: var(--primary-color);
	color: #fff;
	border: none;
`;
export const AdminProductDialogInputWrap = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const AdminProductDialogInputWrapv2 = styled(AdminProductDialogInputWrap)`
	min-height: 400px;
`;
export const AdminProductDialogInputWrapv3 = styled(AdminProductDialogInputWrapv2)`
	flex-direction: column;
	justify-content: flex-start;
`;
export const AdminProductSingleImg = styled.img`
	width: 100px;
	border: 1px solid var(--primary-color);
	border-radius: 100px;
	height: 100px;
`;
export const AdminProductMultiImg = styled.img`
	width: 100px;
	border: 1px solid var(--primary-color);
	height: 100px;
`;
export const ButtonAdminProductManagement = styled.button`
	border-radius: 100px;
	padding: 8px 12px;
	background-color: var(--primary-color);
	color: #fff;
	border: none;
	margin: 0 8px;
`;
export const SelectWrapper = styled.div`
	margin-bottom: 16px;
	font-family: Arial, sans-serif;

	select {
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
		@media screen and (max-width: 768px) {
			margin: 8px 0;
		}
	}
	option {
		font-size: 14px;
		padding: 6px;
	}
	@media screen and (max-width: 768px) {
		width: 45%;
		&.width100 {
			width: 100%;
		}
		
	}
`;


export const SelectTagWrapper = styled(SelectWrapper)`
	margin-bottom: 0px;

`;

export const AdminProductDialogInputLeft = styled.div`
	width: 100%;
`;
export const AdminProductDialogInputInner = styled.div`
	margin-bottom: 16px;
	@media screen and (max-width: 768px) {
		margin-bottom: 8px;
		width: 45%;
		&.width100 {
			width: 100%;
		}
	}
`;
export const AdminProductDialogInputInnerv2 = styled.div`
	margin-bottom: 16px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const AdminProductDialogInputRight = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between
	padding: 32px;
`;
export const AdminProductDialogInputRightSingle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const AdminProductDialogInputRightMulti = styled.div`
	width: 500px;
	overflow: auto;
	display: flex;
	flex-direction: column;
`;
export const ImgProductTableItem = styled.img`
	height: 32px;
	width: 32px;
	border-radius: 100px;
	margin-right: 20px;
`;
export const ImgProductTableItemWrap = styled.div`
display: flex;
align-items: center;
}
`;
export const AdminProductSingleImgWrap = styled.div`
position: relative;
}
`;
export const AdminProductMultiImgWrap = styled.div`
display:flex;
overflow-x: auto;
}`;
export const AdminProductMultiImgDiv = styled.div`
position: relative;
margin:8px;
}`;
export const AdminProductMultiImgDelete = styled.button`
padding: 4px;
position: absolute;
right: 0px;
border-radius: 100px;
background: red;
width: 24px;
height: 24px;
display: flex;
border: 1px solid;
justify-content: center;
align-items: center;
color: #fff;
}`;
export const AdminProductSingleImgLabel = styled.label`
position: absolute;
    right: 0px;
    top: 0px;
}
`;
export const AdminProductDefault = styled.label`
	display: flex;
	width: 400px;
	align-items: center;
	margin-right: 12px;
	@media screen and (max-width: 768px) {
		margin-bottom: 4px;
	}
`;
export const AdminProductDefaultInner = styled.label`
	margin-right: 4px;
`;

export const AdminProductStyleServicePriceInputFlex = styled.div`
   display: flex;
   @media screen and (max-width: 768px) {
		flex-direction: column;
    margin-bottom: 12px;
	}
    
}
`;
