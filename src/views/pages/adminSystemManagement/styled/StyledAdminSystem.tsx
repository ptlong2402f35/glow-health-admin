import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const FormLoginSystemManagement = styled.div`
	padding: 33px 50px 24px;
	width: 600px;
	margin: auto;
	@media screen and (max-width: 768px) {
		padding: 0;
		width: 100%;
	}
`;

export const AdminSystemTableWrap = styled.div`
	display: flex;
	flex-direction: column;
	// margin-top: 100px;
`;

export const AdminSystemTableTitleWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 50px;
`;
export const AdminSystemTableTitle = styled.div`
	font-size: 20px;
	font-weight: 700;
`;
export const AdminSystemTableMain = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid var(--primary-color);
	margin-bottom: 32px;
`;
export const AdminSystemTableHead = styled.div`
	display: flex;
	background-color: var(--primary-color);
	color: #fff;
	font-size: 16px;
	padding: 8px 50px;
`;
export const AdminSystemTableBody = styled.div`
	display: flex;
`;
export const AdminSystemTableWidth200 = styled.div`
	width: 200px;
`;
export const AdminSystemTableWidth250 = styled.div`
	width: 250px;
`;
export const AdminSystemTableInner = styled.div`
	width: 250px;
	padding: 8px;
	border-bottom: 1px solid var(--text-color3);
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const AdminSystemTitleYear = styled.div`
	text-align: center;
	margin-bottom: 12px;
	font-size: 32px;
	font-weight: 600;
	line-height: 40px;
	@media screen and (max-width: 768px) {
		// width: 100%;
	}
`;
